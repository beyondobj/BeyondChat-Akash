import { Conversation } from '@/types/chat';
import { KeyValuePair } from '@/types/data';
import { FC } from 'react';
import { ConversationComponent } from './Conversation';

interface Props {
  loading: boolean;
  conversations: Conversation[];
  select