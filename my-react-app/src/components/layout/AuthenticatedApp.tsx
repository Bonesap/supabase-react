import { Navigation } from "@/components/layout/Navigation";
import { Dashboard } from "@/components/layout/Dashboard";
import { AppShell } from "@/components/layout/AppShell";
import { Toaster } from "react-hot-toast";
import type { AuthenticatedAppProps } from "@/components/layout/types";

export function AuthenticatedApp({ user, onSignOut }: AuthenticatedAppProps) {
  return (
    <AppShell>
      <Navigation user={user} onSignOut={onSignOut} />
      <Dashboard />
      <Toaster position="top-right" />
    </AppShell>
  );
}
