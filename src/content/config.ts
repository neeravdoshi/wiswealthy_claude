import { defineCollection, z } from "astro:content"

const journey = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    milestones: z.array(
      z.object({
        year: z.number(),
        event: z.string(),
      })
    ),
  }),
})

const services = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    keyFeatures: z.array(z.string()),
    icon: z.string(),
    order: z.number(),
  }),
})

const philosophy = defineCollection({
  type: "content",
  schema: z.object({
    headline: z.string(),
    advisoryApproach: z.string(),
  }),
})

const downloads = defineCollection({
  type: "data",
  schema: z.object({
    documentName: z.string(),
    category: z.string(),
    filePath: z.string(),
    description: z.string(),
  }),
})

export const collections = { journey, services, philosophy, downloads }
