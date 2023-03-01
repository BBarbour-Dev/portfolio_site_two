<script>
	import NovelCard from '../../lib/NovelCard.svelte';
	export let data;
	const { novels } = data;
</script>

<svelte:head>
	<title>bbarbour.dev - Novels</title>
</svelte:head>
<h1>My Novels</h1>
{#each novels as novel}
	<NovelCard {novel} />
{/each}

<style>
	h1 {
		color: var(--primary);
		text-shadow: 1px 3px var(--dark);
		padding-bottom: 1rem;
		margin: 3rem 0;
		font-family: 'Press Start 2P';
		line-height: 3rem;
	}
</style>
