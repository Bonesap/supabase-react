import type { UseFormProps } from "react-hook-form";
import type { z } from "zod";

export interface FormField {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
  maxLength?: number;
  description?: string;
}

export interface UniversalFormProps<TSchema extends z.ZodSchema> {
  schema: TSchema;
  fields: FormField[];
  onSubmit: (data: z.infer<TSchema>) => Promise<void> | void;
  submitButtonText: string;
  loadingText: string;
  isLoading: boolean;
  className?: string;
  formOptions?: UseFormProps<z.infer<TSchema>>;
}
