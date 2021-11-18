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
			articles = all.articles.filter((articles, index) => {
				return index < 5;
			});
			loadingArticles = false;
		}
	}

	loadArticles();
</script>

<div class="hero">
	<h1>My name is Brian.</h1>
	<h2>I'm a Sofware Engineer and Javascript enthusiast.</h2>
</div>
<hr />
<h3>Articles I've Written</h3>
<div class="articles">
	{#if loadingArticles}
		<p><Loader /></p>
	{/if}

	{#if articles}
		{#each articles as article}
			<Article {article} />
		{/each}
	{/if}
</div>
<h3>Personal Projects</h3>

<style>
	.hero {
		margin: 5rem 0;
		background-image: url('/endless-constellation.svg');
		min-height: 16rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 1rem;
		border: 1px solid #4bffd8dc;
	}

	h2 {
		margin-top: 1rem;
		color: #706f7c;
	}

	hr {
		margin: 3rem 0;
		border: 1px solid #6584ac;
	}

	h3 {
		padding: 1rem;
		border: 1px solid #4bffd8dc;
		width: 250px;
		margin-bottom: 2rem;
	}

	.articles {
		margin-bottom: 3rem;
	}
</style>
