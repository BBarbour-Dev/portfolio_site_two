<script>
	export let data;

	let post = data.posts[0];
</script>

<svelte:head>
	<title>bbarbour.dev - {post.title}</title>
</svelte:head>
<h1 id="top"><a href={post.url}>{post.title}</a></h1>
<p class="posted">
	{new Date(post.published).toLocaleDateString()} &middot;
	{post.readingTimeMinutes} minute read &middot;
	{post.comments}
	{post.comments === 1 ? 'comment' : 'comments'} &middot;
	{post.views} views
</p>
<p class="dev">Orginally posted on <a href={post.url}>dev.to</a>.</p>
<article class="post-body">
	{@html post.body}
	<div class="links">
		<a href="#top">Return to Top</a> &middot;
		<a href="/blog">Return To Blog</a>
	</div>
</article>

<style>
	h1 {
		margin-top: 3rem;
		line-height: 3rem;
		width: 75%;
		text-underline-offset: 0%;
	}

	article {
		margin-top: 1.5rem;
	}

	.dev {
		margin-top: 1.5rem;
	}

	.posted {
		margin-top: 1.5rem;
	}

	.links {
		margin-top: 3rem;
		text-align: center;
	}
</style>
