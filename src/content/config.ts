import { defineCollection, z } from "astro:content";

export const collections = {
  experience: defineCollection({
    type: "content",
    schema: z.object({
      title: z.string(),
      description: z.string(),
      summary: z.array(z.string()),
      startDate: z.coerce.date(),
      endDate: z.coerce.date().optional() || z.string(),
      skills: z.array(z.string()),
      img: z.string(),
      img_alt: z.string().optional(),
    }),
  }),
  work: defineCollection({
    type: "content",
    schema: z.object({
      title: z.string(),
      description: z.string(),
      publishDate: z.coerce.date(),
      tags: z.array(z.string()),
      img: z.string(),
      img_alt: z.string().optional(),
    }),
  }),
};
