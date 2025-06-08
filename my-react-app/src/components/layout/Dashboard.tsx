import { useState } from "react";
import { FileUploadForm } from "@/components/file/FileUploadForm";
import { FilesList } from "@/components/file/FilesList";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Plus, FolderOpen } from "lucide-react";

export function Dashboard() {
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const handleFileAdded = () => {
    setRefreshTrigger((prev) => prev + 1);
  };

  return (
    <main className="container mx-auto py-8 px-4 sm:px-6 lg:px-8 max-w-4xl">
      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Plus className="h-5 w-5" />
              Add Google Drive File
            </CardTitle>
            <CardDescription>
              Enter a Google Drive file ID to add it to your collection
            </CardDescription>
          </CardHeader>
          <CardContent>
            <FileUploadForm onFileAdded={handleFileAdded} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FolderOpen className="h-5 w-5" />
              Your Files
            </CardTitle>
            <CardDescription>
              Manage and view your Google Drive files
            </CardDescription>
          </CardHeader>
          <CardContent>
            <FilesList refreshTrigger={refreshTrigger} />
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
