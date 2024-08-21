import { z } from "zod";

// === manage profile schema ===
export const ManageProfileSchema = z.object({
  name: z.string().optional(),
  professional_title: z.string().optional(),
  bio: z.string().max(120, "Bio can be highest 120 characters").optional(),
  img: z.string().optional(),
  open_to_work: z.boolean().optional(),
  resume_url: z.string().optional(),
});

// === create new project schema ===
export const CreateProjectSchema = z.object({
  title: z.string().min(1, "Project title is required"),
  description: z.string().min(1, "Project description is required"),
  thumbnail_url: z.string().min(1, "Project thumbnail is required"),
  live_url: z.string().url("Invalid URL format").optional(),
});
