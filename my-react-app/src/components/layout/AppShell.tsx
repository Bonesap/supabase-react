import type { AppShellProps } from "@/components/layout/types";

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/50">
      {children}
    </div>
  );
}
