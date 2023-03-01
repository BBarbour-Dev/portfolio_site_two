<script>
	import Post from '../../lib/Post.svelte';

	export let data;
	const { posts } = data;
</script>

<svelte:head>
	<title>bbarbour.dev - Tech Blog</title>
</svelte:head>
<h1 id="#top">Tech Blog</h1>
<div>
	{#if posts}
		{#each posts as post}
			<Post {post} />
		{/each}
	{/if}
</div>
<div class="links">
	<a href="#top">Return to Top</a>
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

	.links {
		margin-top: 3rem;
		text-align: center;
	}
</style>
