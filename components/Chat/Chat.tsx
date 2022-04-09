
import { Conversation, Message } from '@/types/chat';
import { KeyValuePair } from '@/types/data';
import { ErrorMessage } from '@/types/error';
import { LLM, LLMID } from '@/types/llms';
import { Plugin } from '@/types/plugin';
import { Prompt } from '@/types/prompt';
import { throttle } from '@/utils';
import { IconArrowDown, IconClearAll, IconSettings } from '@tabler/icons-react';
import { useTranslation } from 'next-i18next';
import {
  FC,
  MutableRefObject,
  memo,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Spinner } from '../Global/Spinner';
import { ChatInput } from './ChatInput';