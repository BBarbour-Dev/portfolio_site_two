<script>
	import RepoCard from '$lib/RepoCard.svelte';
	import Loader from '../../lib/Loader.svelte';

	export let data;
	const { repos } = data;
</script>

<svelte:head>
	<title>bbarbour.dev - Coding Projects</title>
</svelte:head>
<h1>Coding Projects</h1>
<div class="grid-wrapper">
	{#each repos as repo}
		<RepoCard {repo} />
	{/each}
</div>

<style>
	h1 {
		color: var(--primary);
		text-shadow: 1px 3px var(--dark);
		padding-bottom: 1rem;
		margin: 3rem 0;
		font-family: 'Press Start 2P';
		line-height: 3rem;
	}

	.grid-wrapper {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(275px, 1fr));
		gap: 1rem;
		margin-bottom: 2rem;
	}
</style>
