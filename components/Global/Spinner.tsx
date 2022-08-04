import { FC } from 'react';

interface Props {
  size?: string;
  className?: string;
}

export const Spinner: FC<Props> = ({ size = '1em', classN