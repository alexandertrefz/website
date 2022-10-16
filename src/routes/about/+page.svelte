<script lang="ts">
	import Headline from "$lib/headline.svelte"
</script>

<svelte:head>
	<title>About Me – alexander.trefz.me</title>
	<meta
		name="description"
		content="Everything you need to know about Alexander Trefz."
	/>
</svelte:head>

<article class="about">
	<Headline>About Me</Headline>
	<p>
		Hi! I am Alexander Trefz, a Software Engineer specialising in Interface
		Development.
	</p>
	<p>
		I have been working in software engineering since 2010, and have worked on
		Apps & Websites used by millions of people since then.
	</p>
	<p>
		For a few years I have been using my free time to work on my programming
		language project, called
		<a target="_blank" href="https://alexandertrefz.github.io/essence/"
			>Essence</a
		>.
	</p>
	<p>
		On this blog I write, ramble, and rant about Software Development, Interface
		Design, and some other things.
	</p>
</article>

<style lang="scss">
	.about {
		display: grid;
		gap: 30px;

		justify-self: center;
		max-width: var(--content-width);

		p {
			font-family: var(--font-article-text);
			font-size: calc(var(--base-font-size) * 1.125);
			line-height: 1.3;
			text-align: var(--alignment);
		}

		a {
			color: var(--color-highlight-intense);
			text-decoration-style: underline;
			text-decoration-color: transparent;

			transition: text-decoration-color 200ms linear;

			&:hover {
				text-decoration-color: var(--color-highlight-intense);
			}
		}
	}
</style>
