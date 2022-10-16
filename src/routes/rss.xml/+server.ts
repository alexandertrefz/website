import type { RequestHandler } from "./$types"

const postImports = import.meta.glob("./blog/*.svx")

let postsMetadataPromises = []

for (const path in postImports) {
	postsMetadataPromises.push(
		postImports[path]().then(({ metadata }) => metadata),
	)
}

export const GET: RequestHandler = async function GET() {
	const posts = await Promise.all(postsMetadataPromises)
	const body = xml(posts)

	return new Response(body, {
		headers: {
			"Cache-Control": "max-age=0, s-maxage=3600",
			"Content-Type": "application/xml",
		},
	})
}

const xml = (posts) => {
	return `<rss xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
				<channel>
					<title>Alexander Trefz</title>
					<link>https://alexander.trefz.me</link>
					<atom:link href="https://alexander.trefz.me/rss.xml" rel="self" type="application/rss+xml" />
					<description>A blog full of opinions on all things software.</description>
					${posts
						.map(
							(post) =>
								`<item>
									<title>${post.title}</title>
									<description>${post.description}</description>
									<link>https://alexander.trefz.me/blog/${post.slug}/</link>
									<guid>https://alexander.trefz.me/blog/${post.slug}/</guid>
									<pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
								</item>`,
						)
						.join("")}
				</channel>
			</rss>`
}
