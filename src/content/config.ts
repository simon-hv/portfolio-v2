import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
  }),
});

const experienceCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      id: z.number(),
      company: z.string(),
      companyLogo: image(),
      duration: z.string(),
      stack: z.array(z.string()),
    }),
});

export const collections = {
  blog: blogCollection,
  experiences: experienceCollection,
};
