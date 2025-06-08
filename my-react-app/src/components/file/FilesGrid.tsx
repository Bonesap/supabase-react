import { FileCard } from "./FileCard";
import { EmptyFilesState } from "./EmptyFilesState";
import type { FilesGridProps } from "./types";

export function FilesGrid({ files }: FilesGridProps) {
  if (files.length === 0) {
    return <EmptyFilesState />;
  }

  return (
    <div className="space-y-4">
      {files.map((file) => (
        <FileCard key={file.id} file={file} />
      ))}
    </div>
  );
}
