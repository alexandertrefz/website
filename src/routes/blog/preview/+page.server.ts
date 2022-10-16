import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async function load() {
	const postImports = import.meta.glob('./**/*.svx')

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
