<script>
	import Post from '../../lib/Post.svelte';

	export let data;
	const { posts } = data
</script>

<svelte:head>
	<title>bbarbour.dev - Tech Blog</title>
</svelte:head>
<h1>Tech Blog</h1>
<div>
	{#if posts}
		{#each posts as post}
			<Post {post} />
		{/each}
	{/if}
</div>

<style>
	h1 {
		margin: 3rem 0;
	}
</style>
