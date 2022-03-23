<script>
	import Navbar from '../lib/Navbar.svelte';
</script>

<main>
	<div class="content-wrapper">
		<Navbar />
		<slot />
	</div>
</main>

<style>
	:global(body) {
		background-color: #030c2e;
		color: #6584ac;
	}

	:global(a) {
		color: #4bffd8dc;
	}

	:global(*) {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: Helvetica;
	}

	main {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.content-wrapper {
		padding: 1rem;
	}

	@media (min-width: 640px) {
		.content-wrapper {
			width: 50%;
		}
	}
</style>
