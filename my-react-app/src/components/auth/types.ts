import type { EmailFormData, OTPFormData } from "@/components/auth/schemas";

export interface EmailStepProps {
  onEmailSubmit: (data: EmailFormData) => void;
  onGitHubAuth: () => void;
  isLoading: boolean;
}

export interface OTPStepProps {
  userEmail: string;
  onOTPSubmit: (data: OTPFormData) => void;
  onBackToEmail: () => void;
  isLoading: boolean;
}
