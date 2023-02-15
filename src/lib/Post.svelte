<script>
	export let post;
</script>

<div>
	<a href={`/blog/${post.slug}`}>{post.title}</a>
	<p>
		{new Date(post.published).toLocaleDateString()} &middot;
		{post.readingTimeMinutes} minute read &middot;
		{post.comments}
		{post.comments === 1 ? 'comment' : 'comments'} &middot;
		{post.views} views
	</p>
</div>

<style>
	div {
		margin-bottom: 1rem;
	}

	div p {
		margin-top: 0.5rem;
	}
</style>
