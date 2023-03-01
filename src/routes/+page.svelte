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
<div class="row">
	<p class="about-me">
		A cup of coffee and code is how I start my typical mornings. Self-improvement, emotional
		intelligence, and conquering new challenges drive me. Eleven years of experience in the tech
		industry ingrained a habit of constantly learning new things and staying up to date. I place all
		my skill points in logic, persistence, and creative writing. I'm a tech and code blogger on
		dev.to and have 12,000 followers. I also author Progression Fantasy and Sci-Fi novels as author
		Brian Philip.
	</p>
	<p class="about-me">
		<strong>Technologies:</strong> HTML5, CSS3, ES6, Node, React, React Native, Git, Vue, Svelte, SASS,
		Splunk, Bamboo, Autosys, Service Now, Jira, AppD, Java, Spring Boot, AWS, Production Support
	</p>
	<a href="/projects" class="view">View Coding Projects</a>
</div>

<h3>Tech Blog Posts</h3>
<div class="row">
	<div class="posts">
		{#if posts}
			{#each posts as post}
				<Post {post} />
			{/each}
		{/if}
	</div>
	<a href="/blog" class="view">View All Posts</a>
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

	.row {
		display: flex;
		align-items: flex-start;
		gap: 1.5rem;
		flex-wrap: wrap;
		width: 100%;
		margin-bottom: 5rem;
	}

	h2 {
		margin-top: 1rem;
		color: var(--dark-text);
	}

	h3 {
		color: var(--primary);
		text-shadow: 1px 3px var(--dark);
		margin-bottom: 3rem;
		font-family: 'Press Start 2P';
	}

	.view {
		flex: 1;
	}

	.posts {
		width: 100%;
	}

	@media screen and (max-width: 720px) {
		.hero {
			margin-top: 1rem;
		}
	}
</style>
