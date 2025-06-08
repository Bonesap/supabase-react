import type { User } from "@supabase/supabase-js";
import type { ReactNode } from "react";

export interface AppShellProps {
  children: ReactNode;
}

export interface AuthenticatedAppProps {
  user: User;
  onSignOut: () => void;
}
export interface NavigationProps {
  user: User;
  onSignOut: () => void;
}
