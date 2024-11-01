import { defineCollection, z } from 'astro:content'

const experienceCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      id: z.number(),
      company: z.string(),
      companyLogo: image(),
      duration: z.string(),
      stack: z.array(z.string()),
    }),
})

export const collections = {
  experiences: experienceCollection,
}
