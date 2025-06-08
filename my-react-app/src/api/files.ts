import type { FileRow, FilesSummary } from "@/api/types";
import { supabase } from "@/lib/supabase";

export async function getAllFiles(): Promise<FileRow[]> {
  const { data, error } = await supabase
    .from("files")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    throw error;
  }

  return data || [];
}

export async function getTotalFileSize(): Promise<number> {
  const { data, error } = await supabase.rpc("get_total_file_size");

  if (error) {
    throw error;
  }

  return data || 0;
}

export async function getFilesSummary(): Promise<FilesSummary> {
  const [files, totalSize] = await Promise.all([
    getAllFiles(),
    getTotalFileSize(),
  ]);

  return {
    files,
    totalSize,
  };
}
