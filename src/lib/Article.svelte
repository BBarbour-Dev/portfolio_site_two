<script>
	export let article;
</script>

<p>
	<a href={article.url} target="_blank" rel="noopener noreferrer">{article.title}</a> &middot;
	{new Date(article.published).toLocaleDateString()} &middot;
	{article.readingTimeMinutes} minute read &middot;
	{article.comments}
	{article.comments === 1 ? 'comment' : 'comments'} &middot;
	{article.views} views
</p>

<style>
	p {
		margin-bottom: 1rem;
	}
</style>
