import { Conversation } from '@/types/chat';
import { IconPlus } from '@tabler/icons-react';
import { FC } from 'react';

interface Props {
  selectedConversation: Conversation;
  onNewConversation: () => void;
}

export const Navbar: FC<Props> = ({
  selectedConversation,
  onNewConversation,
}) => {
  return (
    <nav className="z-10 flex w-full justify-between bg-[#242424] py-3 px-4">
      <div className="mr-4"></div>

      {/*hide temporary
      <div className="max-w-[240px] overflow-hidden text-ellipsis