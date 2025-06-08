import { useState } from "react";
import toast from "react-hot-toast";
import { signInWithEmail, signInWithGitHub, verifyOTP } from "@/api/auth";
import { useUniversalForm } from "@/components/ui/form/universal-form";
import {
  otpSchema,
  type EmailFormData,
  type OTPFormData,
} from "@/components/auth/schemas";
import type { AuthEmailData, AuthOTPData } from "@/api/types";
import { ERRORS } from "@/common/constants/errors.constant";
import { SUCCESS } from "@/common/constants/toast.constant";

export function useAuth() {
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState<"email" | "otp">("email");
  const [userEmail, setUserEmail] = useState("");

  const otpForm = useUniversalForm(otpSchema);

  const handleEmailSubmit = async (data: EmailFormData) => {
    setIsLoading(true);

    const result = await signInWithEmail(data as AuthEmailData);

    if (result.success) {
      setUserEmail(data.email);
      setStep("otp");
      toast.success(SUCCESS.AUTH.CHECK_EMAIL);
    } else {
      toast.error(result.error || ERRORS.AUTH.SIGN_IN_WITH_EMAIL);
    }

    setIsLoading(false);
  };

  const handleOTPSubmit = async (data: OTPFormData) => {
    setIsLoading(true);

    const result = await verifyOTP({
      email: userEmail,
      token: data.token,
    } as AuthOTPData);

    if (!result.success) {
      toast.error(result.error || ERRORS.AUTH.SIGN_IN_WITH_OTP);
      setIsLoading(false);
    }
  };

  const handleGitHubAuth = async () => {
    setIsLoading(true);

    const result = await signInWithGitHub();

    if (!result.success) {
      toast.error(result.error || ERRORS.AUTH.SIGN_IN_WITH_GITHUB);
      setIsLoading(false);
    }
  };

  const handleBackToEmail = () => {
    setStep("email");
    setUserEmail("");
    otpForm.reset();
  };

  return {
    isLoading,
    step,
    userEmail,
    handleEmailSubmit,
    handleOTPSubmit,
    handleGitHubAuth,
    handleBackToEmail,
  };
}
