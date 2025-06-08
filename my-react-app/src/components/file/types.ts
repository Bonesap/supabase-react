import type { Database } from "@/lib/supabase";

export type FileRow = Database["public"]["Tables"]["files"]["Row"];

export interface FilesListProps {
  refreshTrigger: number;
}

export interface StorageSummaryProps {
  filesCount: number;
  totalSize: number;
}
export interface FileUploadFormProps {
  onFileAdded: () => void;
}
export interface FilesListProps {
  refreshTrigger: number;
}

export interface FilesGridProps {
  files: FileRow[];
}

export interface FileCardProps {
  file: FileRow;
}
