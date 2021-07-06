<script lang="ts">
	import { resolvedTheme } from '$lib/themeStores'
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
	#container {
		visibility: unset !important;
	}
	main {
		padding-top: 40px;
		padding-left: 30px;
		padding-right: 40px;
	}
</style>
