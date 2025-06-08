import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { signOut as apiSignOut } from "@/api/auth";
import toast from "react-hot-toast";
import type { User } from "@supabase/supabase-js";
import { ERRORS } from "@/common/constants/errors.constant";

export function useAuthState() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const signOut = async () => {
    const result = await apiSignOut();

    if (!result.success) {
      toast.error(result.error || ERRORS.AUTH.SIGN_OUT);
    }
  };

  return {
    user,
    loading,
    signOut,
    isAuthenticated: !!user,
  };
}
