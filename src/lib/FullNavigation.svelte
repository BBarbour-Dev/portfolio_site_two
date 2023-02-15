<script>
	export let links;
</script>

<nav class={`${$$restProps.class || ''} desktop-nav`}>
	<div class="home-link">
		<div>
			<a href="/">bbarbour.dev</a>
		</div>
	</div>
	<div class="nav-right">
		{#each links as link}
			<div class={link.action && 'resume-button'}>
				<a
					href={link.href}
					target={link.external ? '_blank' : ''}
					rel={link.external && 'noopener noreferrer'}>{link.text}</a
				>
			</div>
		{/each}
	</div>
</nav>

<style>
	@media screen and (max-width: 720px) {
		.desktop-nav {
			display: none;
		}
	}

	.home-link {
		display: flex;
		flex-grow: 1;
		align-items: center;
	}

	.home-link a {
		font-family: 'Press Start 2P', Helvetica;
		font-size: 0.8rem;
		display: block;
		text-decoration: none;
		font-weight: bold;
		text-shadow: 1px 3px var(--dark);
		margin: 1rem;
		text-align: center;
	}

	.nav-right {
		display: flex;
		flex-grow: 1;
		justify-content: right;
	}

	.nav-right a {
		display: block;
		margin: 1rem;
		text-align: center;
	}

	.resume-button {
		background-color: var(--primary);
	}

	.resume-button a {
		text-decoration: none;
		color: var(--background);
	}
</style>
