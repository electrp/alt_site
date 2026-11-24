import { defineCollection, getCollection, reference } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod'
import color from "color-string";

export function colorValidator(val: string) {
  try {
    return color.get(val) != null;
  } catch {
    return false;
  }
}

const tags = defineCollection({
  loader: file("src/data/page_tags.yaml"),
  schema: z.object({
    name: z.string(),
    color: z.string().refine(colorValidator),
    text_color: z.optional(z.string().refine(colorValidator)),
  })
})

const projects = defineCollection({
  loader: file("src/data/projects.yaml"),
  schema: z.object({
    name: z.string(),
    description: z.optional(z.string())
  })
})

const pages = defineCollection({
  loader: glob({ pattern: "**/*.(md|mdx)", base: "./src/md_pages" }),
  schema: z.object({
    title: z.string(),
    project: reference("projects"),
    tags: z.array(reference("tags")),
    // hero: z.optional()
  })
});

export const collections = { tags, projects, pages };