/**
 * @type {import('@sveltejs/kit').PageServerLoad}
 */
export async function load() {
	const postImports = import.meta.glob('./**/*.svx')

	console.log(postImports)

	let postsMetadataPromises = []

	for (const path in postImports) {
		postsMetadataPromises.push(postImports[path]().then(({ metadata }) => metadata))
	}

	return {
		postsMetadata: await Promise.all(postsMetadataPromises),
	} as {
		postsMetadata: Array<{
			title: string
			slug: string
			readingTime: number
			publishedAt: string
		}>
	}
}
