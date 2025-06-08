import { VALIDATION } from "@/common/constants/validation.constant";
import { z } from "zod";

export const fileSchema = z.object({
  fileId: z.string().min(1, VALIDATION.FILE.REQUIRED),
});

export type FileFormData = z.infer<typeof fileSchema>;
