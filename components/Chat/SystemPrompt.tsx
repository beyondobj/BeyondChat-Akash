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
  const [promptInputValue, setPromptInputValue] = useState('');
  const [variables, setVariables] = useState<string[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const promptListRef = useRef<HTMLUListElement | null>(null);

  const filteredPrompts = prompts.filter((prompt) =>
    prompt.name.toLowerCase().includes(promptInputValue.toLowerCase()),
  );

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    const maxLength = conversation.model.maxLength;

    if (value.length > maxLength) {
      alert(
        t(
          `Prompt limit is {{maxLength}} characters. You have entered {{valueLength}} characters.`,
          { maxLength, valueLength: value.length },
        ),
      );
      return;
    }

    setValue(value);
    updatePromptListVisibility(value);

    if (value.length > 0) {
      onChangePrompt(value);
    }
  };

  const handleInitModal = () => {
    const selectedPrompt = filteredPrompts[activePromptIndex];
    setValue((prevVal) => {
      const newContent = prevVal?.replace(/\/\w*$/, selectedPrompt.content);
      return newContent;
    });
    handlePromptSelect(selectedPrompt);
    setShowPromptList(false);
  };

  const parseVariables = (content: string) => {
    const regex = /{{(.*?)}}/g;
    const foundVariables = [];
    let match;

    while ((match = regex.exec(content)) !== null) {
      foundVariables.push(match[1]);
    }

    return foundVariables;
  };

  const updatePromptListVisibility = useCallback((text: string) => {
    const match = text.match(/\/\w*$/);

    if (match) {
      setShowPromptList(true);
      setPromptInputValue(match[0].slice(1));
    } else {
      setShowPromptList(false);
      setPromptInputValue('');
    }
  }, []);

  const handlePromptSelect = (prompt: Prompt) => {
    const parsedVariables = parseVariables(prompt.content);
    setVariables(parsedVariables);

    if (parsedVariables.length > 0) {
      setIsModalVisible(true);
    } else {
      const updatedContent = value?.replace(/\/\w*$/, prompt.content);

      setValue(updatedContent);
      onChangePrompt(updatedContent);

      updatePromptListVisibility(prompt.content);
    }
  };

  const handleSubmit = (updatedVariables: string[]) => {
    const newContent = value?.replace(/{{(.*?)}}/g, (match, variable) => {
      const index = variables.indexOf(variable);
      return updatedVariables[index];
    });

    setValue(newContent);
    onChangePrompt(newContent);

    if (textareaRef && textareaRef.current) {
      textareaRef.current.focus();
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (showPromptList) {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setActivePromptIndex((prevIndex) =>
          prevIndex < prompts.length - 1