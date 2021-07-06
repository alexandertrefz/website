<script lang="ts">
	import { resolvedTheme, selectedTheme } from '$lib/themeStores'
	import Header from '$lib/header.svelte'
	import Footer from '$lib/footer.svelte'
</script>

<div id="page-container" class={$resolvedTheme + '-theme'}>
	<div id="container">
		<Header />

		<main>
			<slot />
		</main>

		<Footer />
	</div>
</div>

<style lang="scss">
	main {
		padding-top: 40px;
		padding-left: 30px;
		padding-right: 40px;
	}

	#page-container {
		display: grid;
		background-color: var(--color-page-background);

		padding-top: calc(var(--page-padding) + env(safe-area-inset-top, 0px));
		padding-right: calc(var(--page-padding) + env(safe-area-inset-right, 0px));
		padding-bottom: calc(var(--page-padding) + env(safe-area-inset-bottom, 0px));
		padding-left: calc(var(--page-padding) + env(safe-area-inset-left, 0px));
	}

	#container {
		border-radius: 15px;
		background-color: var(--color-background);
		box-shadow: 0 0px 1.8px hsl(var(--color-boxshadow) / 20%),
			0 0px 5px hsl(var(--color-boxshadow) / 13%), 0 0px 12.1px hsl(var(--color-boxshadow) / 10%),
			0 0px 40px hsl(var(--color-boxshadow) / 7%);

		position: relative;
		display: grid;

		grid-template-rows: max-content 1fr max-content;

		color: var(--color-foreground);
	}
</style>
