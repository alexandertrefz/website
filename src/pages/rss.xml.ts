import rss from "@astrojs/rss"

export const get = () =>
	rss({
		title: "Alexander Trefz",
		description: "A blog full of opinions on all things software.",
		site: import.meta.env.SITE,
		items: import.meta.glob("./blog/**/*.{md,mdx}"),
	})
