<script lang="ts">
	import Metadata from "./metadata.svelte"

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

<style>
	article {
		display: grid;
		justify-self: center;
		max-width: var(--content-width);
		gap: 30px;
	}

	.title {
		display: grid;
		justify-items: center;
		gap: 10px;
	}

	h1 {
		font-family: var(--font-article-title);
		font-size: calc(var(--base-font-size) * 1.5);
		text-align: center;
		line-height: 1.3;
	}

	section {
		font-family: var(--font-text);
		font-size: var(--base-font-size);
	}

	section :global(p) {
		padding-bottom: 25px;
		line-height: 1.4;
		text-align: var(--alignment);
	}

	section :global(p):last-child {
		padding-bottom: 0px;
	}

	section :global(h2) {
		padding-top: 15px;
		padding-bottom: 15px;
		font-family: var(--font-article-title);
		font-size: calc(var(--base-font-size) * 1.25);
		text-align: center;
		font-style: italic;
		line-height: 1.4;
	}

	section :global(a) {
		color: var(--color-highlight-intense);
		text-decoration-style: underline;
		text-decoration-color: transparent;

		transition: text-decoration-color 200ms linear;
	}

	section :global(a):hover {
		text-decoration-color: var(--color-highlight-intense);
	}

	section :global(em) {
		color: var(--color-foreground-emphasis);
		font-style: italic;
	}

	section :global(strong) {
		color: var(--color-foreground-emphasis);
		font-weight: 700;
	}

	section :global(.subtle) {
		color: var(--color-foreground-medium);
	}

	section :global(code) {
		font-family: fira-mono, monospace;
		font-weight: 400;
		font-style: normal;
	}
</style>
