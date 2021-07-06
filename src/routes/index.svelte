<script context="module">
	export async function load({ page, session, fetch, context }) {
		return {
			status: 302,
			redirect: '/blog',
		}
	}
</script>
