<script lang="ts">
	export let metadata
	export let alignLeft = false
	export const readingTimeDate = new Date(metadata.publishedAt)
</script>

<div class="metadata" class:alignLeft>
	<span class="readingTime">
		<strong>{metadata.readingTime}</strong>
		Minute Read
	</span>
	<time datetime={metadata.publishedAt}>
		{new Intl.DateTimeFormat("en-GB", { month: "long" }).format(
			readingTimeDate,
		)}
		<strong
			>{new Intl.DateTimeFormat("en-GB", { year: "numeric" }).format(
				readingTimeDate,
			)}</strong
		>
	</time>
</div>

<style lang="scss">
	.metadata {
		font-family: var(--font-article-metadata);
		font-size: calc(var(--base-font-size) * 0.75);
		font-weight: 500;

		font-feature-settings: "cpsp";
		text-transform: uppercase;

		display: inline-grid;
		grid-auto-flow: column;
		gap: 10px;

		strong {
			font-weight: 700;
		}
	}
</style>
