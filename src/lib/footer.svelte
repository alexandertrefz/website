<script lang="ts">
	import { page } from "$app/stores"
</script>

<footer>
	<div id="copyright">
		<span>&copy; 2021 - 2022 Alexander Trefz</span>
		<span>All rights reserved</span>
	</div>
	{#if $page.url.pathname !== "/legal"}
		<a id="legal" href="/legal">Legal</a>
	{/if}
</footer>

<style lang="scss">
	footer {
		display: grid;
		grid-auto-flow: column;
		justify-content: space-between;

		-webkit-user-select: none;
		user-select: none;

		width: 100%;

		padding-left: 25px;
		padding-right: 25px;
		padding-bottom: 20px;
		padding-top: 20px;

		transition: padding linear 200ms;

		@media screen and (max-width: 399px) {
			padding-left: 15px;
			padding-right: 15px;
			padding-bottom: 10px;
			padding-top: 10px;
		}

		@media screen and (min-width: 400px) and (max-width: 649px) {
			padding-left: 20px;
			padding-right: 20px;
			padding-bottom: 15px;
			padding-top: 15px;
		}

		@media screen and (max-width: 1099px) {
			border-top: 1px solid var(--color-background-offset);
		}

		@media screen and (min-width: 1100px) {
			position: absolute;
			left: 0px;
			right: 0px;
			bottom: 0px;
		}

		#copyright {
			font-family: var(--font-text);
			font-size: 12px;
			font-weight: 500;
			color: var(--color-foreground-medium);

			transition: all linear 200ms;

			@media (max-width: 1099px) {
				span::after {
					content: ".";
				}
			}

			@media screen and (min-width: 1100px) {
				display: grid;
				gap: 6px;
			}

			@media (max-width: 350px) {
				font-size: 11px;
			}
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

			@media screen and (min-width: 1100px) {
				align-self: end;
			}
		}
	}
</style>
