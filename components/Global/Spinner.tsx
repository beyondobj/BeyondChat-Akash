import { FC } from 'react';

interface Props {
  size?: string;
  className?: string;
}

export const Spinner: FC<Props> = ({ size = '1em', className = '' }) => {
  return (
    <svg
      stroke="currentColor"
      fill="none"
      strokeWidth="2"
      viewBox="0 0 24 24"
      strokeLinecap="round"
      s