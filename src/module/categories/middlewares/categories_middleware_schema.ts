import { z } from "zod";

export const categoriesSchema = z.object({
  name: z.string(),
});

export const updateCategoriesSchema = z.object({
  name: z.string().optional(),
  Service: z
    .array(
      z.object({
        name: z.string().optional(),
        type: z.enum(["VIP", "Normal"]).optional(),
      })
    )
    .optional(),
});
