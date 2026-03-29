import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const team = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/team" }),
  schema: z.object({
    draft: z.boolean(),
    name: z.string(),
    title: z.string(),
    avatar: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    publishDate: z.string().transform((str) => new Date(str)),
  }),
});

const docsSchema = z.object({
  draft: z.boolean().default(false),
  title: z.string(),
  description: z.string(),
  category: z.enum([
    "Get Started",
    "Core Workflows",
    "Use Cases",
    "Troubleshooting",
  ]),
  order: z.number().default(100),
  audience: z
    .array(z.enum(["new-users", "operators", "sales", "admins"]))
    .default(["new-users"]),
  updatedAt: z.string().transform((str) => new Date(str)),
  related: z.array(z.string()).default([]),
});

const docs = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/docs" }),
  schema: docsSchema,
});

const docsZh = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/docs-zh" }),
  schema: docsSchema,
});

export const collections = {
  team,
  docs,
  "docs-zh": docsZh,
};
