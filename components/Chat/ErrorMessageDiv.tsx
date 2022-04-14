import { ErrorMessage } from '@/types/error';
import { IconCircleX } from '@tabler/icons-react';
import { FC } from 'react';

interface Props {
  error: ErrorMessage;
}

export const ErrorMessageDiv: