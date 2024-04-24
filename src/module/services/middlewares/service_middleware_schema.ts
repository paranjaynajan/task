import {string, z} from "zod";


export const serviceSchema = z.object({
    name: z.string(),
    type: z.enum(['Normal', 'VIP']),
    options: z.array(
      z.object({
        duration: z.string(),
        price: z.number().int().positive(),
        type: z.enum(['Hourly', 'Weekly', 'Monthly']),
      })
    )
  })
  export const updateServiceSchema = z.object({
    name: z.string().optional(),
    type: z.enum(['Normal', 'VIP']).optional(),
    options: z.array(
      z.object({
        duration: z.string().optional(),
        price: z.number().int().positive().optional(),
        type: z.enum(['Hourly', 'Weekly', 'Monthly']).optional(),
      })
    ).optional()
  })

