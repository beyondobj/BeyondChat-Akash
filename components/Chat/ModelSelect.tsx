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

export co