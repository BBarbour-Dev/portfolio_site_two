<script>
	import Post from '../lib/Post.svelte';

	export let data;
	let posts = data.posts;
</script>

<svelte:head>
	<title>bbarbour.dev - Home</title>
</svelte:head>
<div class="hero">
	<h1>My name is Brian.</h1>
	<h2>I'm a Sofware Engineer and Writer.</h2>
</div>
<h3>About Me</h3>
<p class="about-me">
	A cup of coffee and code is how I start my typical mornings. Self-improvement, emotional
	intelligence, and conquering new challenges keep me driven. Eleven years of experience in the tech
	industry gives me an edge, constantly learning new things and staying up to date. I place my skill
	points in logic, persistence, and creative writing. I'm a tech blogger on dev.to and have 12,000
	followers. I also author progression fantasy and sci-fi novels under the pseudonym Brian Philip.
</p>
<p class="about-me">
	<strong>Proficient Techs:</strong> HTML5, CSS3, ES6, Node, React, React Native, Git, Vue, Svelte, SASS,
	Splunk, Bamboo, Autosys, Service Now, Jira, AppD, Java, Spring Boot, AWS, Product Support
</p>
<div class="right">
	<a href="/projects">View Coding Projets...</a>
</div>
<h3>Tech Blog Posts</h3>
<div class="posts">
	{#if posts}
		{#each posts as post}
			<Post {post} />
		{/each}
	{/if}
	<div class="right">
		<a href="/posts">View More Posts...</a>
	</div>
</div>

<style>
	.hero {
		margin: 3rem 0;
		background-image: url('/endless-constellation.svg');
		min-height: 16rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 1rem;
		border: 2px solid var(--primary);
		box-shadow: 3px 3px var(--dark);
	}

	h2 {
		margin-top: 1rem;
		color: var(--dark-text);
	}

	h3 {
		color: var(--primary);
		text-shadow: 1px 3px var(--dark);
		width: 250px;
		margin: 2rem 0;
	}

	.posts {
		margin-bottom: 3rem;
	}

	.about-me {
		margin-bottom: 1rem;
		line-height: 1.5rem;
	}

	.right {
		text-align: right;
		margin-bottom: 5rem;
	}

	@media screen and (max-width: 720px) {
		.hero {
			margin-top: 1rem;
		}
	}
</style>
