<script>
	import MouseTooltip from './MouseTooltip.svelte';

	export let repo;
</script>

<MouseTooltip text="Click to view on Github.">
	<a href={repo.url} class="grid-card" target="_blank" rel="noopener noreferrer">
		<div class="project">
			<div class="repo item">
				<h2>&#x1F5A5 {repo.name}</h2>
			</div>
			<div class="created item">
				<p>Created &middot; {new Date(repo.created).toLocaleDateString()}</p>
			</div>
			<div class="description item">
				<p>{repo.description}</p>
			</div>
			<div class="stats item">
				<p>&#x2B50 {repo.stargazers}</p>
				<p>&#x1F531 {repo.forks}</p>
				<p>&#x1F441 {repo.watchers}</p>
			</div>
		</div>
	</a>
</MouseTooltip>

<style>
	.grid-card {
		text-decoration: none;
		color: var(--text);
		height: 100%;
		width: 100%;
		padding: 1rem;
		border: 2px solid var(--primary);
		box-shadow: 2px 2px var(--dark);
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.grid-card:hover {
		border: 2px solid var(--white);
	}

	.repo h2 {
		font-size: 1.25rem;
		color: var(--primary);
	}

	.created {
		font-size: 0.9rem;
	}

	.item {
		margin: 0.5rem;
	}

	.stats {
		display: flex;
		width: 100%;
	}

	.stats p {
		margin-right: 1rem;
	}
</style>
