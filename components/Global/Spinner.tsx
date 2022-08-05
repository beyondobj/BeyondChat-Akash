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
      strokeLinejoin="round"
      className={`animate-spin ${className}`}
      height={size}
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1="12" y1="2" x2="12" y