import { LLM, LLMID } from '@/types/llms';
import { useTranslation } from 'next-i18next';
import { IconExternalLink } from '@tabler/icons-react';
import { FC } from 'react';

interface Props {
  model: LLM;
  models: LLM[];
  defaultModelId: LLMID;
  onModelChange: (model: LLM) => void;
}

export const ModelSelect: FC<Props> = ({
  model,
  models,
  defaultModelId,
  onModelChange,
}) => {
  const { t } = useTranslation('chat');

  return (
    <div className="flex flex-col">
      <label className="mb-2 text-left text-neutral-700 dark:text-neutral-400">
        {t('Model')}
      </label>
      <div className="w-full rounded-lg border border-neutral-20