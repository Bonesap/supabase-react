import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { UniversalForm } from "@/components/ui/form/universal-form";
import { GitIcon } from "@/assets/GitIcon";
import { emailSchema } from "@/components/auth/schemas";
import { emailFields } from "@/common/constants/fields.constant";
import type { EmailStepProps } from "@/components/auth/types";

export function EmailStep({
  onEmailSubmit,
  onGitHubAuth,
  isLoading,
}: EmailStepProps) {
  return (
    <>
      <UniversalForm
        schema={emailSchema}
        fields={emailFields}
        onSubmit={onEmailSubmit}
        submitButtonText="Send Verification Code"
        loadingText="Sending..."
        isLoading={isLoading}
      />

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <Separator className="w-full" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>

      <Button
        onClick={onGitHubAuth}
        disabled={isLoading}
        variant="outline"
        className="w-full"
      >
        <GitIcon />
        GitHub
      </Button>
    </>
  );
}
