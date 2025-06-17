export interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: number;
}

export interface ChatState {
  messages: Message[];
  isLoading: boolean;
  error: string | null;
}

export interface AppConfig {
  apiKey: string;
  systemPrompt: string;
  modelName: string;
  maxRetries: number;
  retryDelay: number;
}