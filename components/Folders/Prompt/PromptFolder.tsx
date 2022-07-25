
import { PromptComponent } from '@/components/Promptbar/Prompt';
import { Folder } from '@/types/folder';
import { Prompt } from '@/types/prompt';
import {
  IconCaretDown,
  IconCaretRight,
  IconCheck,
  IconPencil,
  IconTrash,
  IconX,
} from '@tabler/icons-react';
import { FC, KeyboardEvent, useEffect, useState } from 'react';

interface Props {