import { Folder } from '@/types/folder';
import { Prompt } from '@/types/prompt';
import { FC } from 'react';
import { PromptFolder } from './PromptFolder';

interface Props {
  searchTerm: string;
  prompts: Prompt[];
  folders: Folder[];
  onDeleteFolder: (folder: string) => void;
  onUpdateFolder: (folder: string, name: string) => void;
  // prompt props
  onDeletePrompt: (prompt: Prompt) => void;
  onUpdatePrompt: (prompt: Prompt) => void;
}

export const PromptFolders: FC<Props> = ({
  searchTerm,
  prompts,
  folders,
  onDel