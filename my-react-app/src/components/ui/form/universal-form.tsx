import { useForm } from "react-hook-form";
import type { Path, UseFormProps } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "../button";
import { Input } from "../input";
import { Label } from "../label";
import type { UniversalFormProps } from "@/components/ui/form/types";

export function UniversalForm<TSchema extends z.ZodSchema>({
  schema,
  fields,
  onSubmit,
  submitButtonText,
  loadingText,
  isLoading,
  className = "",
  formOptions,
}: UniversalFormProps<TSchema>) {
  const form = useForm<z.infer<TSchema>>({
    resolver: zodResolver(schema),
    ...formOptions,
  });

  const handleSubmit = async (data: z.infer<TSchema>) => {
    await onSubmit(data);
  };

  return (
    <form
      onSubmit={form.handleSubmit(handleSubmit)}
      className={`space-y-4 ${className}`}
    >
      {fields.map((field) => (
        <div key={field.name} className="space-y-2">
          <Label htmlFor={field.name}>{field.label}</Label>
          <Input
            id={field.name}
            type={"text"}
            autoComplete={field.autoComplete}
            placeholder={field.placeholder}
            disabled={isLoading}
            maxLength={field.maxLength}
            {...form.register(field.name as Path<z.infer<TSchema>>)}
            className={
              form.formState.errors[field.name] ? "border-destructive" : ""
            }
          />
          {form.formState.errors[field.name] && (
            <p className="text-sm text-destructive">
              {form.formState.errors[field.name]?.message as string}
            </p>
          )}
          {field.description && (
            <p className="text-sm text-muted-foreground">{field.description}</p>
          )}
        </div>
      ))}

      <Button type="submit" disabled={isLoading} className="w-full">
        {isLoading ? loadingText : submitButtonText}
      </Button>
    </form>
  );
}

export function useUniversalForm<TSchema extends z.ZodSchema>(
  schema: TSchema,
  options?: UseFormProps<z.infer<TSchema>>
) {
  return useForm<z.infer<TSchema>>({
    resolver: zodResolver(schema),
    ...options,
  });
}
