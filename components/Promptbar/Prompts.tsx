import { Prompt } from '@/types/prompt';
import { FC } from 'react';
import { PromptComponent } from './Prompt';

interface Props {
  prompts: Prompt[];
  onUpdatePrompt: (prompt: Prompt) => void;
  onDeletePrompt: (prompt: Prompt) => void;
}

exp