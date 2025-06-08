import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatFileSize = (bytes: number | null) => {
  if (!bytes) return "Unknown";
  const mb = bytes / (1024 * 1024);
  return `${mb.toFixed(2)} MB`;
};

export const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

export const getMimeTypeColor = (mimeType: string | null) => {
  if (!mimeType) return "secondary";
  if (mimeType.includes("image")) return "default";
  if (mimeType.includes("video")) return "destructive";
  if (mimeType.includes("audio")) return "secondary";
  if (mimeType.includes("document") || mimeType.includes("text"))
    return "outline";
  return "secondary";
};
