import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HardDrive } from "lucide-react";
import type { StorageSummaryProps } from "./types";

export function StorageSummary({ filesCount, totalSize }: StorageSummaryProps) {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2">
          <HardDrive className="h-5 w-5" />
          Storage Summary
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">
            Total files: {filesCount}
          </span>
          <Badge variant="outline">{totalSize.toFixed(2)} MB</Badge>
        </div>
      </CardContent>
    </Card>
  );
}
