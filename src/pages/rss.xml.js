import rss, { pagesGlobToRssItems } from "@astrojs/rss"

export async function GET(context) {
	const items = await pagesGlobToRssItems(
		import.meta.glob("./blog/**/*.{md,mdx}"),
	)

	// pagesGlobToRssItems preserves glob (filename) order; feeds are
	// expected to be newest-first.
	items.sort((a, b) => new Date(b.pubDate).valueOf() - new Date(a.pubDate).valueOf())

	return rss({
		title: "Alexander Trefz",
		description: "A blog full of opinions on all things software.",
		site: context.site,
		items,
	})
}
