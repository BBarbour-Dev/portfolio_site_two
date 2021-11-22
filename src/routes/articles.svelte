<script>
	import Loader from '../lib/Loader.svelte';
	import Article from '../lib/Article.svelte';

	let loadingArticles = true;
	let articles = [];

	async function loadArticles() {
		const data = await fetch('http://localhost:3000/api/articles', {
			method: 'GET'
		});
		const all = await data.json();
		if (all) {
			articles = all.articles;
			loadingArticles = false;
		}
	}

	loadArticles();
</script>

<svelte:head>
	<title>bbarbour.dev - Articles</title>
</svelte:head>
<h1>Articles I've Written</h1>
<div>
	{#if loadingArticles}
		<p><Loader /></p>
	{/if}

	{#if articles}
		{#each articles as article}
			<Article {article} />
		{/each}
	{/if}
</div>

<style>
	h1 {
		margin: 3rem 0;
	}
</style>
