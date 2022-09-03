/** @type {import('./$types').PageLoad} */
export async function load() {
	const postImports = import.meta.glob('./**/*.svx')

	let postsMetadataPromises = []

	for (const path in postImports) {
		postsMetadataPromises.push(postImports[path]().then(({ metadata }) => metadata))
	}

	let postsMetadata: Array<{
		title: string
		slug: string
		readingTime: number
		publishedAt: string
	}> = await Promise.all(postsMetadataPromises)

	return { postsMetadata }
}
