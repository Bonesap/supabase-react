import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useAuth } from "@/hooks/useAuth";
import { EmailStep } from "./EmailStep";
import { OTPStep } from "./OTPStep";

export function Auth() {
  const {
    isLoading,
    step,
    userEmail,
    handleEmailSubmit,
    handleOTPSubmit,
    handleGitHubAuth,
    handleBackToEmail,
  } = useAuth();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/50 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl text-center">
            Google Drive File Manager
          </CardTitle>
          <CardDescription className="text-center">
            {step === "email"
              ? "Sign in to manage your Google Drive files"
              : "Enter the verification code sent to your email"}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {step === "email" ? (
            <EmailStep
              onEmailSubmit={handleEmailSubmit}
              onGitHubAuth={handleGitHubAuth}
              isLoading={isLoading}
            />
          ) : (
            <OTPStep
              userEmail={userEmail}
              onOTPSubmit={handleOTPSubmit}
              onBackToEmail={handleBackToEmail}
              isLoading={isLoading}
            />
          )}
        </CardContent>
      </Card>
    </div>
  );
}
