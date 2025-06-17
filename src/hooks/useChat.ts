import { useState, useCallback, useEffect } from 'react';
import { ChatState, Message, AppConfig } from '../types';
import GoogleAIService from '../api/googleAI';
import defaultConfig from '../config/config.json';
import { VPU_29_LVIV, LEARNING_RESOURCES } from '../config/knowledge';
// Функція для конвертації бази знань у текст для промпту
const formatKnowledgeBase = () => {
  const knowledge = VPU_29_LVIV;

  return `
**ДЕТАЛЬНА ІНФОРМАЦІЯ ПРО ВПУ №29 (з бази знань):**

📍 **Контактна інформація:**
• Повна назва: ${knowledge.general_information.full_name}
• Адреса: ${knowledge.general_information.address.street}, ${knowledge.general_information.address.city}, ${knowledge.general_information.address.postal_code}
• Телефони: ${knowledge.general_information.contacts.phone_numbers.join(', ')}
• Email: ${knowledge.general_information.contacts.email}
• Сайт: ${knowledge.general_information.contacts.website}

🎓 **ТОЧНИЙ ПЕРЕЛІК ПРОФЕСІЙ ТА СПЕЦІАЛЬНОСТЕЙ:**

**Фаховий молодший бакалавр:**
${knowledge.specialties_and_professions.junior_specialist_degree.map(spec =>
      `• ${spec.name} (${spec.duration}, ${spec.admission_basis.join(', ')})`
  ).join('\n')}

**Кваліфікований робітник:**
${knowledge.specialties_and_professions.qualified_worker_professions.map(prof => {
    const additionalQuals = (prof as any).additional_qualifications ?
        ` + додатково: ${(prof as any).additional_qualifications.join(', ')}` : '';
    return `• ${prof.name} (${prof.duration}, ${prof.admission_basis.join(', ')})${additionalQuals}`;
  }).join('\n')}

👥 **АДМІНІСТРАЦІЯ:**
${knowledge.teaching_staff.administration.map(admin =>
      `• ${admin.position}: ${admin.name}`
  ).join('\n')}

🏗️ **МАТЕРІАЛЬНО-ТЕХНІЧНА БАЗА:**
• Будівлі: ${knowledge.material_technical_base.buildings.join(', ')}
• Комп'ютерне обладнання: ${knowledge.material_technical_base.computer_equipment.total_computers} комп'ютерів (${knowledge.material_technical_base.computer_equipment.educational_computers} навчальних)
• Проєктори: ${knowledge.material_technical_base.computer_equipment.multimedia_projectors}
• Інтерактивні панелі: ${knowledge.material_technical_base.computer_equipment.interactive_panels}
• Гуртожиток: ${knowledge.material_technical_base.dormitory.capacity}

📚 **НАВЧАЛЬНО-ПРАКТИЧНІ ЦЕНТРИ:**
${knowledge.material_technical_base.training_centers.map(center =>
      `• ${center.name}: ${center.description}`
  ).join('\n')}

📞 **КОРИСНІ РЕСУРСИ:**
${LEARNING_RESOURCES.websites.map(site => `• ${site.name}: ${site.url} - ${site.description}`).join('\n')}
`;
};

export function useChat() {
  const [state, setState] = useState<ChatState>({
    messages: [],
    isLoading: false,
    error: null,
  });

  const [config, setConfig] = useState<AppConfig>(() => {
    // Try to load config from localStorage
    const savedConfig = localStorage.getItem('chatConfig');
    return savedConfig ? JSON.parse(savedConfig) : defaultConfig;
  });

  const [aiService, setAIService] = useState<GoogleAIService | null>(null);

  // Initialize AI service only if API key exists
  useEffect(() => {
    if (config.apiKey && config.apiKey.trim()) {
      const service = new GoogleAIService(config);
      setAIService(service);
    } else {
      setAIService(null);
    }

    // Save config to localStorage
    localStorage.setItem('chatConfig', JSON.stringify(config));
  }, [config]);

  // Load messages from localStorage
  useEffect(() => {
    const savedMessages = localStorage.getItem('chatMessages');
    if (savedMessages) {
      setState(prevState => ({
        ...prevState,
        messages: JSON.parse(savedMessages),
      }));
    }
  }, []);

  // Save messages to localStorage when they change
  useEffect(() => {
    localStorage.setItem('chatMessages', JSON.stringify(state.messages));
  }, [state.messages]);

  const updateConfig = useCallback((newConfig: Partial<AppConfig>) => {
    setConfig(prevConfig => {
      const updatedConfig = { ...prevConfig, ...newConfig };
      if (aiService) {
        aiService.updateConfig(updatedConfig);
      }
      localStorage.setItem('chatConfig', JSON.stringify(updatedConfig));
      return updatedConfig;
    });
  }, [aiService]);

  const sendMessage = useCallback(async (content: string) => {
    if (!content.trim() || !aiService) return;

    // Create a new user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      role: 'user',
      timestamp: Date.now(),
    };

    // Add user message to chat
    setState(prevState => ({
      ...prevState,
      messages: [...prevState.messages, userMessage],
      isLoading: true,
      error: null,
    }));

    try {
      // Format messages for the API
      const formattedMessages = state.messages.map(msg => ({
        role: msg.role,
        content: msg.content,
      }));

      // Add the new user message
      formattedMessages.push({
        role: userMessage.role,
        content: userMessage.content,
      });

      // Створюємо розширений системний промпт з базою знань
      const knowledgeBase = formatKnowledgeBase();
      const enhancedSystemPrompt = `${config.systemPrompt}\n\n${knowledgeBase}`;

      // Get response from AI
      const responseText = await aiService.generateResponse(
          formattedMessages,
          enhancedSystemPrompt
      );

      // Create assistant message
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: responseText,
        role: 'assistant',
        timestamp: Date.now(),
      };

      // Add assistant message to chat
      setState(prevState => ({
        ...prevState,
        messages: [...prevState.messages, assistantMessage],
        isLoading: false,
      }));
    } catch (error) {
      setState(prevState => ({
        ...prevState,
        isLoading: false,
        error: error instanceof Error ? error.message : 'An unknown error occurred',
      }));
    }
  }, [state.messages, aiService, config.systemPrompt]);

  const clearChat = useCallback(() => {
    setState({
      messages: [],
      isLoading: false,
      error: null,
    });
    localStorage.removeItem('chatMessages');
  }, []);

  return {
    messages: state.messages,
    isLoading: state.isLoading,
    error: state.error,
    config,
    sendMessage,
    clearChat,
    updateConfig,
  };
}