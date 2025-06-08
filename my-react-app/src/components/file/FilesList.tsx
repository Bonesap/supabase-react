import { useFiles } from "@/hooks/useFiles";
import { LoadingSpinner } from "../ui/LoadingSpinner";
import { StorageSummary } from "./StorageSummary";
import { FilesGrid } from "./FilesGrid";
import type { FilesListProps } from "./types";

export function FilesList({ refreshTrigger }: FilesListProps) {
  const { files, totalSize, isLoading } = useFiles(refreshTrigger);

  if (isLoading) {
    return <LoadingSpinner message="Loading files..." />;
  }

  return (
    <div className="space-y-6">
      <StorageSummary filesCount={files.length} totalSize={totalSize} />
      <FilesGrid files={files} />
    </div>
  );
}
