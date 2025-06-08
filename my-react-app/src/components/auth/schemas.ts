import { VALIDATION } from "@/common/constants/validation.constant";
import { z } from "zod";

export const emailSchema = z.object({
  email: z.string().email(VALIDATION.EMAIL.INVALID_EMAIL),
});

export const otpSchema = z.object({
  token: z
    .string()
    .min(6, VALIDATION.OTP.INVALID_MIN)
    .max(6, VALIDATION.OTP.INVALID_MAX),
});

export type EmailFormData = z.infer<typeof emailSchema>;
export type OTPFormData = z.infer<typeof otpSchema>;
