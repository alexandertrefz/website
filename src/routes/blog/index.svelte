<script context="module" lang="ts">
	const postImports = import.meta.glob('./*.svx')

	let postsMetadataPromises = []

	for (const path in postImports) {
		postsMetadataPromises.push(postImports[path]().then(({ metadata }) => metadata))
	}

	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ url, params, fetch }) {
		return {
			props: {
				postsMetadata: await Promise.all(postsMetadataPromises),
			},
		}
	}
</script>

<script lang="ts">
	import Metadata from '$lib/article/metadata.svelte'
	import Headline from '$lib/headline.svelte'
	import Description from '$lib/description.svelte'
	export let postsMetadata: Array<{
		title: string
		slug: string
		readingTime: number
		publishedAt: string
	}>
</script>

<svelte:head>
	<title>Thoughts & Insights – alexander.trefz.me</title>
	<meta name="description" content="A blog full of opinions on all things software." />
</svelte:head>

<article class="blog">
	<div class="title">
		<Headline>Thoughts & Insights</Headline>
		<Description>Sharing my opinions about all things software</Description>
	</div>

	<ul>
		{#each postsMetadata as metadata}
			<li>
				<a href="/blog/{metadata.slug}">
					<article>
						<h2>{metadata.title}</h2>
						<Metadata {metadata} />
					</article>
				</a>
			</li>
		{/each}
	</ul>
</article>

<style lang="scss">
	.blog {
		display: grid;
		gap: 50px;

		.title {
			display: grid;
			gap: 10px;
		}
	}

	ul {
		display: grid;
		gap: 60px;

		li {
			a {
				cursor: pointer;
				color: var(--color-foreground);

				text-decoration: none;
				text-align: center;

				&:hover article h2 {
					text-decoration-color: var(--color-highlight-medium);
				}

				article {
					display: grid;
					gap: 10px;
					justify-items: center;

					h2 {
						font-family: var(--font-article-title);
						font-size: 24px;

						text-decoration: underline;
						text-decoration-color: transparent;
						transition: text-decoration-color linear 200ms;
					}
				}
			}
		}
	}
</style>
