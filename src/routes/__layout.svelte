<script lang="ts">
	import Header from '$lib/header.svelte'
	import Footer from '$lib/footer.svelte'
</script>

<Header />

<main>
	<slot />
</main>

<Footer />

<style lang="scss">
	main {
		padding-top: 40px;
		padding-left: 30px;
		padding-right: 40px;
	}
</style>
