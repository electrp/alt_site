import { defineCollection, getCollection, reference } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod'

const tags = defineCollection({
  loader: file("src/data/page_tags.yaml"),
  schema: z.object({
    name: z.string(),
  })
})

const projects = defineCollection({
  loader: file("src/data/projects.yaml"),
  schema: z.object({
    name: z.string(),
    organizatin: z.optional(z.string())
  })
})

const pages = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/md_pages" }),
  schema: z.object({
    title: z.string(),
    project: z.string(),
    tags: z.array(reference("tags")),
    // hero: z.optional()
  })
});

export const collections = { tags, projects, pages };