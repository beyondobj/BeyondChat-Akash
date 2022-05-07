import { IconRefresh } from '@tabler/icons-react';
import { useTranslation } from 'next-i18next';
import { FC } from 'react';

interface Props {
  onRegenerate: () => void;
}

export co