import { IconCheck, IconKey, IconX } from '@tabler/icons-react';
import { useTranslation } from 'next-i18next';
import { FC, KeyboardEvent, useEffect, useRef, useState } from 'react';
import { SidebarButton } from '../Sidebar/SidebarButton';

interface Props {
  apiKey: string;
  onApiKeyChange: (apiKey: string) => void;
}

export const Key: FC<Props> = ({ apiKey, onApiKeyChange }) => {
  const { t } = useTranslation('sidebar');
  const [isChanging, setIsChanging] = useState(false);
  const [newKey, setNewKey] = useState(apiKey);
  const inputRef = useRef<HTML