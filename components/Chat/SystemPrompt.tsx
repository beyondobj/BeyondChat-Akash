import { Conversation } from '@/types/chat';
import { LLMID } from '@/types/llms';
import { Prompt } from '@/types/prompt';
import { DEFAULT_SYSTEM_PROMPT } from '@/utils/app/const';
import { useTranslation } from 'next-i18next';
import {
  FC,
  KeyboardEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { PromptList } from './PromptList';
import { VariableModal } from './VariableModal';

interface Props {
  conversation: Conversation;
  prompts: Prompt[];
  onChangePrompt: (prompt: string) => void;
}

export const SystemPrompt: FC<Props> = ({
  conversation,
  prompts,
  onChangePrompt,
}) => {
  const { t } = useTranslation('chat');

  const [value, setValue] = useState<string>('');
  const [activePromptIndex, setActivePromptIndex] = useState(0);
  const [showPromptList, setShowPromptList] = useState(false);
  const [promptInp