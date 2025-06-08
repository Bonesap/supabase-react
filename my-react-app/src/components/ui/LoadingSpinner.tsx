import { AppShell } from "../layout/AppShell";

interface LoadingSpinnerProps {
  message?: string;
  fullScreen?: boolean;
}

export function LoadingSpinner({
  message = "Loading...",
  fullScreen = false,
}: LoadingSpinnerProps) {
  const content = (
    <div className="flex justify-center items-center py-8">
      <div className="text-muted-foreground">{message}</div>
    </div>
  );

  if (fullScreen) {
    return (
      <AppShell>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-muted-foreground">{message}</div>
        </div>
      </AppShell>
    );
  }

  return content;
}
