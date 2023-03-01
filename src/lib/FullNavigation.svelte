<script>
	export let links;
</script>

<nav class="desktop-nav">
	<div class="home-link">
		<div>
			<a href="/">bbarbour.dev</a>
		</div>
	</div>
	<div class="nav-right">
		{#each links as link}
			<a
				class={link.action ? 'action-button' : ''}
				href={link.href}
				target={link.external ? '_blank' : ''}
				rel={link.external ? 'noopener noreferrer' : ''}>{link.text}</a
			>
		{/each}
	</div>
</nav>

<style>
	@media screen and (max-width: 720px) {
		.desktop-nav {
			display: none;
		}
	}

	nav {
		display: flex;
		justify-content: space-between;
		border-bottom: 2px solid var(--primary);
		width: 100%;
		padding: 1rem;
	}

	.home-link {
		display: flex;
		margin-top: 0.5rem;
		align-items: center;
	}

	.home-link a {
		font-family: 'Press Start 2P';
		text-decoration: none;
		font-weight: bold;
		text-shadow: 1px 3px var(--dark);
	}

	.nav-right {
		display: flex;
		flex-grow: 2;
		justify-content: right;
		align-items: center;
		gap: 1rem;
	}

	.nav-right a {
		font-size: 1.2rem;
		font-weight: bold;
		text-align: center;
		line-height: 2rem;
	}

	.nav-right .action-button {
		font-weight: normal;
		padding: 0.75rem;
		background-color: var(--background);
		text-decoration: none;
		color: var(--primary);
		border: 2px solid var(--primary);
		box-shadow: 2px 2px var(--dark);
		cursor: pointer;
	}

	.action-button:hover {
		background-color: var(--primary);
		color: var(--background);
	}
</style>
