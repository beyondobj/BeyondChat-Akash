import { LLM } from './llms';

export interface Prompt {
  id: string;
  name: string;
  description: string;
  content: string;
  