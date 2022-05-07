<script context="module">
	export async function load({ url, params, session, fetch, context }) {
		return {
			status: 302,
			redirect: '/blog',
		}
	}
</script>
