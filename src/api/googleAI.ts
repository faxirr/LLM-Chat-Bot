import { GoogleGenerativeAI, GenerativeModel } from '@google/generative-ai';
import { AppConfig } from '../types';
import { generatePrompt, VPU_29_HELPERS } from './index';

export class GoogleAIService {
  private model: GenerativeModel | null = null;
  private config: AppConfig;

  constructor(config: AppConfig) {
    this.config = config;
    this.initialize();
  }

  private initialize(): void {
    if (!this.config.apiKey) {
      console.error('API key is not provided');
      return;
    }

    try {
      const genAI = new GoogleGenerativeAI(this.config.apiKey);
      this.model = genAI.getGenerativeModel({ model: this.config.modelName });
    } catch (error) {
      console.error('Failed to initialize Google AI:', error);
    }
  }

  public updateConfig(config: AppConfig): void {
    this.config = config;
    this.initialize();
  }

  public async generateResponse(
      messages: { role: string; content: string }[],
      customSystemPrompt?: string
  ): Promise<string> {
    if (!this.model) {
      throw new Error('Model not initialized. Please check your API key.');
    }

    // Використовуємо кастомний промпт або генеруємо з контекстом
    const lastMessage = messages[messages.length - 1];
    const systemPrompt = customSystemPrompt || generatePrompt(lastMessage.content);

    // Конвертуємо формат повідомлень для Gemini API
    const historyFormatted = messages.slice(0, -1).map(msg => ({
      role: msg.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: msg.content }]
    }));

    const chatSession = this.model.startChat({
      history: historyFormatted,
      generationConfig: {
        temperature: 0.7,
        topP: 0.95,
        topK: 40,
      },
      systemInstruction: systemPrompt,
    });

    let retries = 0;
    let lastError: Error | null = null;

    while (retries <= this.config.maxRetries) {
      try {
        const result = await chatSession.sendMessage(lastMessage.content);
        const response = result.response;
        return response.text();
      } catch (error) {
        lastError = error as Error;

        // Check if error is related to model overload or rate limiting
        if (
            error instanceof Error &&
            (error.message.includes('overloaded') ||
                error.message.includes('rate limit') ||
                error.message.includes('quota'))
        ) {
          retries++;
          console.log(`Retry attempt ${retries}/${this.config.maxRetries}`);

          // Wait before retrying
          await new Promise(resolve =>
              setTimeout(resolve, this.config.retryDelay * retries)
          );
        } else {
          // If it's another type of error, don't retry
          break;
        }
      }
    }

    throw lastError || new Error('Failed to generate response after retries');
  }

  // Допоміжні методи для роботи з даними ВПУ №29
  public getAvailableProfessions(): string[] {
    return VPU_29_HELPERS.getAllProfessions();
  }

  public findPrograms(professionName: string) {
    return VPU_29_HELPERS.findProgramByProfession(professionName);
  }

  public getContactInfo() {
    return VPU_29_HELPERS.getContactInfo();
  }

  public formatProfessionInfo(professionName: string) {
    return VPU_29_HELPERS.formatProfessionInfo(professionName);
  }

  public checkLegalStatus() {
    return VPU_29_HELPERS.checkLegalStatus();
  }
}

export default GoogleAIService;