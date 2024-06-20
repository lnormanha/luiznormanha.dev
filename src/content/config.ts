import { defineCollection, z } from "astro:content";

export const collections = {
  home: defineCollection({
    schema: z.object({
      title: z.string(),
      description: z.string(),
      skills_title: z.string(),
      skills_description: z.string(),
      featured_projects_title: z.string(),
      featured_articles_title: z.string(),
    }),
  }),
  jobs: defineCollection({
    schema: z.object({
      title: z.string(),
      company: z.string(),
      city: z.string(),
      period: z.string(),
    })
  })
};
