<script lang="ts">
	import Metadata from './metadata.svelte'

	export let slug
	export let title
	export let readingTime
	export let publishedAt
</script>

<svelte:head>
	<title>{title} – alexander.trefz.me</title>
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
		margin-bottom: 25px;
		line-height: 1.35;
	}

	section :global(em) {
		font-style: italic;
	}

	section :global(strong) {
		font-weight: 700;
	}

	section :global(.subtle) {
		opacity: 0.5;
	}
</style>
