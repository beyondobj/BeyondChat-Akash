import { IconCheck, IconTrash, IconX } from '@tabler/icons-react';
import { useTranslation } from 'next-i18next';
import { FC, useState } from 'react';
import { SidebarButton } from '../Sidebar/SidebarButton';

interface Props {
  onClearConversations: () => void;
}

export const ClearConve