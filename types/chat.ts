import { LLM } from './llms';

export interface Message {
  role: Role;
  content: string;
}

export type Role = 'assistant' | 'user';

export interface ChatBody {
  model: LLM;
  messages: Message[];
  key: string;
  prompt