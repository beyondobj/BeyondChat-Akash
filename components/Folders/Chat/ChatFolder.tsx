
import { Conversation } from '@/types/chat';
import { KeyValuePair } from '@/types/data';
import { Folder } from '@/types/folder';
import {
  IconCaretDown,
  IconCaretRight,
  IconCheck,
  IconPencil,
  IconTrash,
  IconX,
} from '@tabler/icons-react';
import { FC, KeyboardEvent, useEffect, useState } from 'react';
import { ConversationComponent } from '../../Chatbar/Conversation';

interface Props {
  searchTerm: string;
  conversations: Conversation[];
  currentFolder: Folder;
  onDeleteFolder: (folder: string) => void;
  onUpdateFolder: (folder: string, name: string) => void;
  // conversation props
  selectedConversation: Conversation;
  loading: boolean;
  onSelectConversation: (conversation: Conversation) => void;
  onDeleteConversation: (conversation: Conversation) => void;
  onUpdateConversation: (
    conversation: Conversation,
    data: KeyValuePair,
  ) => void;
}

export const ChatFolder: FC<Props> = ({
  searchTerm,
  conversations,
  currentFolder,
  onDeleteFolder,
  onUpdateFolder,
  // conversation props
  selectedConversation,
  loading,
  onSelectConversation,
  onDeleteConversation,
  onUpdateConversation,
}) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [isRenaming, setIsRenaming] = useState(false);
  const [renameValue, setRenameValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleEnterDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleRename();
    }
  };

  const handleRename = () => {
    onUpdateFolder(currentFolder.id, renameValue);
    setRenameValue('');
    setIsRenaming(false);
  };

  const handleDrop = (e: any, folder: Folder) => {
    if (e.dataTransfer) {
      setIsOpen(true);

      const conversation = JSON.parse(e.dataTransfer.getData('conversation'));
      onUpdateConversation(conversation, { key: 'folderId', value: folder.id });

      e.target.style.background = 'none';
    }
  };

  const allowDrop = (e: any) => {
    e.preventDefault();
  };

  const highlightDrop = (e: any) => {
    e.target.style.background = '#1c1c1c';
  };