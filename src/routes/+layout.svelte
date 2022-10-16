<script lang="ts">
	import { resolvedTheme } from "$lib/stores/theme"
	import Header from "$lib/header.svelte"
	import Footer from "$lib/footer.svelte"
</script>

<div id="page-container" class={$resolvedTheme + "-theme"}>
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
		overflow-y: auto;
		display: grid;
		grid-auto-rows: max-content;
	}

	@media screen and (max-width: 749px) {
		main {
			padding: 20px;
		}
	}

	@media screen and (min-width: 750px) and (max-width: 849px) {
		main {
			padding-top: 30px;
			padding-left: 30px;
			padding-right: 40px;
			padding-bottom: 30px;
		}
	}

	@media screen and (min-width: 850px) {
		main {
			padding-top: 30px;
			padding-left: 30px;
			padding-right: 40px;
			padding-bottom: 30px;
		}
	}

	@media screen and (min-width: 1100px) {
		main {
			padding-top: 30px;
			padding-left: 30px;
			padding-right: 40px;
			padding-bottom: 83px;
		}
	}
</style>
