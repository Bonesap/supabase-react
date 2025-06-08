import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { FileText } from "lucide-react";

export function EmptyFilesState() {
  return (
    <Card>
      <CardContent className="flex flex-col items-center justify-center py-8">
        <FileText className="h-12 w-12 text-muted-foreground mb-4" />
        <CardDescription className="text-center">
          No files added yet. Add your first Google Drive file!
        </CardDescription>
      </CardContent>
    </Card>
  );
}
