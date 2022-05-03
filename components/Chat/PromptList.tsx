import { Prompt } from '@/types/prompt';
import { FC, MutableRefObject } from 'react';

interface Props {
  prompts: Prompt[];
  activePromptIndex: number;
  onSelect: () => void;
  onMouseOver: (index: number) => void;
  promptListRef: MutableRefObject<HTMLUListElement | null>;
}

export const PromptList: FC<Props> = ({
  prompts,
  activePromptIndex,
  onSelect,
  onMo