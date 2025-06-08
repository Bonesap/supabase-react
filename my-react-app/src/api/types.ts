export interface AuthEmailData {
  email: string;
}

export interface AuthOTPData {
  email: string;
  token: string;
}

export interface AuthResult {
  success: boolean;
  error?: string;
}

export type FileRow = {
  id: string;
  user_id: string;
  google_drive_id: string;
  name: string;
  mime_type: string | null;
  size_bytes: number | null;
  created_at: string;
  updated_at: string;
};

export type FilesSummary = {
  files: FileRow[];
  totalSize: number;
};
