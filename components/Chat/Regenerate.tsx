import { IconRefresh } from '@tabler/icons-react';
import { useTranslation } from 'next-i18next';
import { FC } from 'react';

interface Props {
  onRegenerate: () => void;
}

export const Regenerate: FC<Props> = ({ onRegenerate }) => {
  const { t } = useTranslation('chat');
  return (
    <div className="fixed bottom-4 left-0 right-0 ml-auto mr-auto w-full px-2 sm:absolute sm:bot