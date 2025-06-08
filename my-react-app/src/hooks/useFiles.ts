import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { getFilesSummary } from "@/api/files";
import type { FileRow } from "@/api/types";
import { ERRORS } from "@/common/constants/errors.constant";

export function useFiles(refreshTrigger: number) {
  const [files, setFiles] = useState<FileRow[]>([]);
  const [totalSize, setTotalSize] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);

  const fetchFiles = async () => {
    try {
      setIsLoading(true);

      const summary = await getFilesSummary();
      setFiles(summary.files);
      setTotalSize(summary.totalSize);
    } catch (error) {
      toast.error(ERRORS.FILES.FETCH);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchFiles();
  }, [refreshTrigger]);

  const refetch = () => {
    fetchFiles();
  };

  return {
    files,
    totalSize,
    isLoading,
    refetch,
  };
}
