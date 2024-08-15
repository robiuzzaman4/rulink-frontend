import { z } from "zod";

// === manage profile schema ===
export const ManageProfileSchema = z.object({
  name: z.string().optional(),
  professional_title: z.string().optional(),
  bio: z
    .string()
    .min(10, {
      message: "Bio must be at least 10 characters.",
    })
    .max(120, "Bio can be highest 120 characters")
    .optional(),
  img: z.string().optional(),
  open_to_work: z.boolean().optional(),
});
