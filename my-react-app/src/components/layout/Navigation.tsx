import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { LogOut, FolderOpen } from "lucide-react";
import type { NavigationProps } from "@/components/layout/types";

export function Navigation({ user, onSignOut }: NavigationProps) {
  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <FolderOpen className="h-6 w-6 text-primary" />
            <h1 className="text-xl font-semibold">Google Drive File Manager</h1>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-muted-foreground">{user.email}</span>
            <Separator orientation="vertical" className="h-6" />
            <Button onClick={onSignOut} variant="outline" size="sm">
              <LogOut className="mr-2 h-4 w-4" />
              Sign Out
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
