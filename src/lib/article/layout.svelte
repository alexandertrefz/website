<script lang="ts">
	import Metadata from './metadata.svelte'

	export let slug
	export let title
	export let description
	export let readingTime
	export let publishedAt
</script>

<svelte:head>
	<title>{title} – alexander.trefz.me</title>
	<meta name="description" content={description} />
</svelte:head>

<article>
	<div class="title">
		<h1>{title}</h1>
		<Metadata metadata={{ slug, title, readingTime, publishedAt }} />
	</div>

	<section>
		<slot />
	</section>
</article>

<style lang="scss">
	article {
		display: grid;
		justify-items: center;
		gap: 30px;
	}

	.title {
		display: grid;
		justify-items: center;
		gap: 10px;
	}

	h1 {
		font-family: var(--font-article-title);
		font-size: 24px;
		text-align: center;
		line-height: 1.3;
	}

	section {
		max-width: 600px;

		font-family: var(--font-text);
		font-size: 16px;
	}

	section :global(p) {
		padding-bottom: 25px;
		line-height: 1.35;
		text-align: justify;
	}

	section :global(h2) {
		padding-top: 15px;
		padding-bottom: 15px;
		font-family: var(--font-article-title);
		font-size: 20px;
		text-align: center;
		font-style: italic;
	}

	section :global(a) {
		color: var(--color-highlight-intense);
		text-decoration: transparent underline;
		text-underline-offset: 1px;
		transition: text-decoration-color 200ms linear;

		&:hover {
			text-decoration-color: var(--color-highlight-intense);
		}
	}

	section :global(em) {
		font-style: italic;
	}

	section :global(strong) {
		font-weight: 700;
	}

	section :global(.subtle) {
		color: var(--color-foreground-medium);
	}
</style>
