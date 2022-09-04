import {
  generateRandomString,
  programmingLanguages,
} from '@/utils/app/codeblock';
import { IconCheck, IconClipboard, IconDownload } from '@tabler/icons-react';
import { useTranslation } from 'next-i18next';
import { FC, memo, useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

interface Props {
  language: st