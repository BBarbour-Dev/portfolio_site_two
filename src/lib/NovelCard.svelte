<script>
	import MouseTooltip from './MouseTooltip.svelte';
	export let novel;
</script>

<MouseTooltip text="Click to view on Amazon.">
	<a href={novel.url} class="card" target="_blank" rel="noopener noreferrer">
		<div class="cover-image">
			<img alt={novel.title} src={`${novel.cover}?h=500`} />
		</div>
		<div class="content">
			<h2>{novel.title}</h2>
			<p>
				<strong>Published:</strong>
				{new Date(novel.published).toLocaleDateString()} &middot {novel.pages} Pages
			</p>
			<p>
				<strong>${novel.priceUsd.toFixed(2)}</strong> &middot; {novel.ku &&
					'Free On Kindle Unlimited'}
			</p>
			<div class="genres">
				{#each novel.genres as genre}
					<p class="genre">{genre}</p>
				{/each}
			</div>
			<p class="description">{novel.description}</p>
		</div>
	</a>
</MouseTooltip>

<style>
	h2 {
		font-size: 2rem;
		color: var(--primary);
		margin-bottom: 1rem;
	}

	.card {
		text-decoration: none;
		color: var(--text);
		padding: 1.5rem;
		border: 2px solid var(--primary);
		box-shadow: 2px 2px var(--dark);
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		margin-bottom: 4rem;
	}

	.card:hover {
		border: 2px solid var(--white);
	}

	.cover-image {
		height: 500px;
	}

	.cover-image img {
		height: 100%;
	}

	.content {
		flex: 2;
	}

	.content p {
		margin-bottom: 0.5rem;
	}

	.description {
		line-height: 1.5rem;
	}

	.genres {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
	}

	.genre {
		font-size: 0.8rem;
		background-color: var(--primary);
		color: var(--background);
		line-height: 0.8rem;
		padding: 0.5rem;
	}
</style>
