import { useAuthState } from "@/hooks/useAuthState";
import { LoadingSpinner } from "@/components/ui/LoadingSpinner";
import { AuthenticatedApp } from "@/components/layout/AuthenticatedApp";
import { UnauthenticatedApp } from "@/components/layout/UnauthenticatedApp";

function App() {
  const { user, loading, signOut, isAuthenticated } = useAuthState();

  if (loading) {
    return <LoadingSpinner message="Loading..." fullScreen />;
  }

  if (!isAuthenticated) {
    return <UnauthenticatedApp />;
  }

  return <AuthenticatedApp user={user!} onSignOut={signOut} />;
}

export default App;
