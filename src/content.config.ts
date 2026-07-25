// 1. Import utilities from `astro:content`
import { defineCollection } from "astro:content"
import { z } from "astro/zod"

// 2. Import loader(s)
import { glob } from "astro/loaders"

// 3. Define your collection(s)
const blog = defineCollection({
	loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/pages/blog" }),
	schema: z.object({
		layout: z.string(),
		title: z.string(),
		description: z.string(),
		readingTime: z.number(),
		// Kept as a string (it flows into datetime attributes and
		// Intl.DateTimeFormat as-is), but validated so a malformed date
		// fails the build instead of silently rendering "Invalid Date".
		pubDate: z
			.string()
			.refine((value) => !Number.isNaN(Date.parse(value)), {
				message: "pubDate must be a parseable date",
			}),
	}),
})

// 4. Export a single `collections` object to register your collection(s)
export const collections = { blog }
