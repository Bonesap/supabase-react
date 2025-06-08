import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileText } from "lucide-react";
import { formatFileSize, formatDate, getMimeTypeColor } from "@/lib/utils";
import type { FileCardProps } from "./types";

export function FileCard({ file }: FileCardProps) {
  return (
    <Card key={file.id} className="transition-all hover:shadow-md">
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div className="flex-1 space-y-2">
            <div className="flex items-center gap-2">
              <FileText className="h-4 w-4 text-muted-foreground" />
              <h4 className="font-semibold">{file.name}</h4>
            </div>

            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span>Type:</span>
                <Badge
                  variant={getMimeTypeColor(file.mime_type || "unknown")}
                  className="text-xs"
                >
                  {file.mime_type || "Unknown"}
                </Badge>
              </div>
              <span>Size: {formatFileSize(file.size_bytes || 0)}</span>
            </div>

            <p className="text-xs text-muted-foreground">
              Added: {formatDate(file.created_at)}
            </p>
          </div>

          <Button variant="outline" size="sm" asChild className="ml-4">
            <a
              href={`https://drive.google.com/file/d/${file.google_drive_id}/view`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <ExternalLink className="h-3 w-3" />
              View in Drive
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
