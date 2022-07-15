import { Conversation } from '@/types/chat';
import { KeyValuePair } from '@/types/data';
import { Folder } from '@/types/folder';
import { FC } from 'react';
import { ChatFolder } from './ChatFolder';

interface Props {
  searchTerm: string;
  conversations: Conversation[];
  folders: Folder[];
  onDeleteFolder: (folder: string) => void;
  onUpdateFolder: (folder: string, name: string) => void;
  // con