import { GoogleGenerativeAI, GenerativeModel } from '@google/generative-ai';
import { AppConfig } from '../types';

export class GoogleAIService {
  private model: GenerativeModel | null = null;
  private config: AppConfig;

  constructor(config: AppConfig) {
    this.config = config;
    this.initialize();
  }

  private initialize() {
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

  public updateConfig(config: AppConfig) {
    this.config = config;
    this.initialize();
  }

  public async generateResponse(
      messages: { role: string; content: string }[],
      systemPrompt: string
  ): Promise<string> {
    if (!this.model) {
      throw new Error('Model not initialized. Please check your API key.');
    }

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
        const lastMessage = messages[messages.length - 1];
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
}

export default GoogleAIService;