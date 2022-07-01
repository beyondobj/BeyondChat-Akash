import { IconCheck, IconTrash, IconX } from '@tabler/icons-react';
import { useTranslation } from 'next-i18next';
import { FC, useState } from 'react';
import { SidebarButton } from '../Sidebar/SidebarButton';

interface Props {
  onClearConversations: () => void;
}

export const ClearConversations: FC<Props> = ({ onClearConversations }) => {
  const [isConfirming, setIsConfirming] = useState<boolean>(false);

  const { t } = useTranslation('sidebar');

  const handleClearConversations = () => {
    onClearConversations();
    setIsConfirming(false);
  };

  return isConfirming ? (
    <div className="flex w-full cursor-pointer items-center rounded-lg 