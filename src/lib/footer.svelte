<script lang="ts">
	import { page } from '$app/stores'
</script>

<footer>
	<div id="copyright">&copy; 2021 Alexander Trefz. All rights reserved.</div>
	{#if $page.path !== '/legal'}
		<a id="legal" href="/legal">Legal</a>
	{/if}
</footer>

<style lang="scss">
	footer {
		width: 100%;

		padding-left: 25px;
		padding-right: 25px;
		padding-bottom: 20px;
		padding-top: 20px;

		display: grid;
		grid-auto-flow: column;
		justify-content: space-between;

		border-top: 1px solid var(--color-background-offset);

		#copyright {
			font-family: var(--font-text);
			font-size: 12px;
			font-weight: 500;
			color: var(--color-foreground-medium);
		}

		#legal {
			font-family: var(--font-navigation);
			font-size: 12px;
			font-weight: 500;

			text-transform: uppercase;
			text-decoration: none;

			color: var(--color-foreground-medium);

			transition: all linear 200ms;

			&:hover {
				color: var(--color-foreground);
			}
		}
	}
</style>
