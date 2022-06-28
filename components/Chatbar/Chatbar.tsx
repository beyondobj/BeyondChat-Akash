
import { Conversation } from '@/types/chat';
import { KeyValuePair } from '@/types/data';
import { SupportedExportFormats } from '@/types/export';
import { Folder } from '@/types/folder';
import { IconFolderPlus, IconMessagesOff, IconPlus } from '@tabler/icons-react';
import { useTranslation } from 'next-i18next';
import { FC, useEffect, useState } from 'react';
import { ChatFolders } from '../Folders/Chat/ChatFolders';
import { Search } from '../Sidebar/Search';
import { ChatbarSettings } from './ChatbarSettings';
import { Conversations } from './Conversations';

interface Props {
  loading: boolean;
  conversations: Conversation[];
  lightMode: 'light' | 'dark';
  selectedConversation: Conversation;
  apiKey: string;
  folders: Folder[];
  onCreateFolder: (name: string) => void;
  onDeleteFolder: (folderId: string) => void;
  onUpdateFolder: (folderId: string, name: string) => void;
  onNewConversation: () => void;
  onToggleLightMode: (mode: 'light' | 'dark') => void;
  onSelectConversation: (conversation: Conversation) => void;
  onDeleteConversation: (conversation: Conversation) => void;
  onUpdateConversation: (
    conversation: Conversation,
    data: KeyValuePair,
  ) => void;
  onApiKeyChange: (apiKey: string) => void;
  onClearConversations: () => void;
  onExportConversations: () => void;
  onImportConversations: (data: SupportedExportFormats) => void;
}

export const Chatbar: FC<Props> = ({
  loading,
  conversations,
  lightMode,
  selectedConversation,
  apiKey,
  folders,
  onCreateFolder,
  onDeleteFolder,
  onUpdateFolder,
  onNewConversation,
  onToggleLightMode,
  onSelectConversation,
  onDeleteConversation,
  onUpdateConversation,
  onApiKeyChange,
  onClearConversations,
  onExportConversations,
  onImportConversations,
}) => {
  const { t } = useTranslation('sidebar');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredConversations, setFilteredConversations] =