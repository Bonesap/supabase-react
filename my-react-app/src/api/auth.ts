import { ERRORS } from "@/common/constants/errors.constant";
import { supabase } from "@/lib/supabase";
import type { AuthEmailData, AuthOTPData, AuthResult } from "@/api/types";

const REDIRECT_URI = import.meta.env.VITE_REDIRECT_URI;

export const signInWithEmail = async (
  data: AuthEmailData
): Promise<AuthResult> => {
  try {
    const { error } = await supabase.auth.signInWithOtp({
      email: data.email,
      options: {
        shouldCreateUser: true,
        emailRedirectTo: REDIRECT_URI,
        captchaToken: undefined,
      },
    });

    if (error) {
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : ERRORS.AUTH.SIGN_IN,
    };
  }
};

export const verifyOTP = async (data: AuthOTPData): Promise<AuthResult> => {
  try {
    const { error } = await supabase.auth.verifyOtp({
      email: data.email,
      token: data.token,
      type: "email",
    });

    if (error) {
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : ERRORS.AUTH.SIGN_IN,
    };
  }
};

export const signInWithGitHub = async (): Promise<AuthResult> => {
  try {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: REDIRECT_URI,
      },
    });

    if (error) {
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (error) {
    return {
      success: false,
      error:
        error instanceof Error
          ? error.message
          : ERRORS.AUTH.SIGN_IN_WITH_GITHUB,
    };
  }
};

export const signOut = async (): Promise<AuthResult> => {
  try {
    const { error } = await supabase.auth.signOut();

    if (error) {
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : ERRORS.AUTH.SIGN_OUT,
    };
  }
};
