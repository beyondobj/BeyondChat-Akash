import { SupportedExportFormats } from '@/types/export';
import { IconFileImport } from '@tabler/icons-react';
import { useTranslation } from 'next-i18next';
import { FC } from 'react';
import { SidebarButton } from '../Sidebar/SidebarButton';

interface Props {
  onImport: (data: SupportedExportFormats) => void;
}

export const Import: FC<Props> = ({ onImport }) => {
  const { t } = useTranslation('sidebar');
  return (
    <>
      <input
        id="import-file"
        className="sr-only"
        tabIndex={-1}
        type="file"
        accept=".json"
        onChange={(e) => {
          if (