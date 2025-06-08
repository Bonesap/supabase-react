import { Button } from "@/components/ui/button";
import { UniversalForm } from "@/components/ui/form/universal-form";
import { otpSchema } from "@/components/auth/schemas";
import { otpFields } from "@/common/constants/fields.constant";
import type { OTPStepProps } from "@/components/auth/types";

export function OTPStep({
  userEmail,
  onOTPSubmit,
  onBackToEmail,
  isLoading,
}: OTPStepProps) {
  return (
    <>
      <div className="text-center">
        <p className="text-sm text-muted-foreground mb-4">
          Code sent to:{" "}
          <span className="font-medium text-foreground">{userEmail}</span>
        </p>
      </div>

      <UniversalForm
        schema={otpSchema}
        fields={otpFields}
        onSubmit={onOTPSubmit}
        submitButtonText="Verify Code"
        loadingText="Verifying..."
        isLoading={isLoading}
      />

      <Button
        onClick={onBackToEmail}
        variant="outline"
        className="w-full"
        disabled={isLoading}
      >
        Back to Email
      </Button>
    </>
  );
}
