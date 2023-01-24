import rss, { pagesGlobToRssItems } from "@astrojs/rss"

export async function get(context) {
	return rss({
		title: "Alexander Trefz",
		description: "A blog full of opinions on all things software.",
		site: context.site,
		items: await pagesGlobToRssItems(import.meta.glob("./blog/**/*.{md,mdx}")),
	})
}
