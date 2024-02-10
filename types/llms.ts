export interface LLM {
  id: string;
  name: string;
  maxLength: number; // maximum length of a message
  tokenLimit: number;
}

export enum LLMID {
  MISTRAL = 'mistral',
  MIXTRAL = 'mixtral',
