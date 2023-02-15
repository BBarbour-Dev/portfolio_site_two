<script>
	import NovelCard from '../../lib/NovelCard.svelte';
	export let data;
	const { novels } = data;
</script>

<svelte:head>
	<title>bbarbour.dev - Novels</title>
</svelte:head>
<h1>Novels By Me</h1>
{#each novels as novel}
	<NovelCard {novel} />
{/each}

<style>
	h1 {
		margin: 3rem 0;
	}
</style>
