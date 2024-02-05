import { Conversation, Message } from './chat';
import { Folder } from './folder';
import { LLM } from './llms';
import { Prompt } from './prompt';

export type SupportedExportFormats =
  | ExportFormatV1
  | ExportFormatV2
  | ExportFormatV3
  | ExportFormatV4;
export type LatestExportFormat = ExportFormatV4;

/////////////////////////////////////////