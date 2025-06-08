export interface GoogleDriveFileMetadata {
  id: string;
  name: string;
  mimeType: string;
  size?: string;
}

export interface FileInsertData {
  user_id: string;
  google_drive_id: string;
  name: string;
  mime_type: string;
  size_bytes: number | null;
}

export interface ApiResponse<T = any> {
  success?: boolean;
  error?: string;
  details?: any;
  file?: T;
  metadata?: GoogleDriveFileMetadata;
}
