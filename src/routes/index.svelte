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

<svelte:head>
	<title>bbarbour.dev - Home</title>
</svelte:head>
<div class="hero">
	<h1>My name is Brian.</h1>
	<h2>I'm a Sofware Engineer and Javascript enthusiast.</h2>
</div>
<hr />
<h3>About Me</h3>
<p class="about-me">
	A cup of coffee and code is typically how I start my mornings. I'm fueled by self improvement and
	conquering new challenges. With ten years experience in the tech industry, learning has become my
	greatest habit.
</p>
<p class="about-me">
	As a Javascript enthusiast, I've written millions of lines of the language. Through that
	discovering its many quirks and nuances, which I use to my advantage. The tools and tech stack I
	use everyday includes Node.js, Express, MongoDB, React, and React Native--but I also love other
	frameworks like Svelte, Vue, Socket-io, and Fastify.
</p>
<div class="right">
	<a href="/projects">View My Projects...</a>
</div>
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
	<div class="right">
		<a href="/articles">View More Articles...</a>
	</div>
</div>

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
		margin: 2rem 0;
	}

	.articles {
		margin-bottom: 3rem;
	}

	.about-me {
		text-align: justify;
		margin-bottom: 1rem;
		line-height: 1.5rem;
	}

	.right {
		text-align: right;
	}
</style>
