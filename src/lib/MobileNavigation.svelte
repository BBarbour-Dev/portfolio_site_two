<script>
	export let links;
	let drawerOpen = false;

	function toggleDrawer() {
		drawerOpen = !drawerOpen;
	}
</script>

<div class="hamburger" style={`${drawerOpen ? 'visibility: hidden;' : ''}`}>
	<button on:click={toggleDrawer}>&#9776;</button>
</div>

<nav
	class="mobile-nav"
	on:click={toggleDrawer}
	on:keydown={toggleDrawer}
	style={`${drawerOpen ? 'visibility: visible; width: 350px;' : ''}`}
>
	{#if drawerOpen}
		<div class="drawer">
			<button class="close">&times;</button>
			<div>
				<span class="mobile-logo">bbarbour.dev</span>
			</div>
			<div>
				<span class="mobile-logo main-menu">Main Menu</span>
			</div>
				<div class="link"><a href="/">Home</a></div>
				{#each links as link}
					<div class="link">
						<a
							href={link.href}
							target={link.external ? '_blank' : ''}
							rel={link.external ? 'noopener noreferrer' : ''}>{link.text}</a
						>
					</div>
				{/each}
		</div>
	{/if}
</nav>

<style>
	.hamburger {
		width: 100%;
		display: none;
		z-index: 1;
		border-bottom: 0;
		box-shadow: none;
		position: fixed;
		bottom: 1%;
		left: 80%;
	}

	.hamburger button {
		height: 4rem;
		width: 4rem;
		background-color: var(--background);
		border: 3px solid #4bffd8dc;
		font-size: 2.25rem;
		color: var(--primary);
		border-radius: 50%;
	}

	.drawer {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		overflow: hidden;
		transition: 0.3s;
	}

	.mobile-logo {
		margin-bottom: 1rem;
	}

	.mobile-logo {
		font-size: 1rem;
		text-align: center;
		font-family: 'Press Start 2P';
		color: var(--background);
		letter-spacing: 2px;
		display: block;
		text-decoration: none;
		font-weight: bold;
	}

	.main-menu {
		font-size: .75rem;
	}

	.link {
		margin-bottom: 1rem;
	}

	.link a {
		text-align: center;
		font-size: .75rem;
		color: var(--background);
		display: block;
		font-family: "Press Start 2P";
		text-underline-offset: 0%;
	}

	.link a:hover {
		color: var(--dark-text);
	}

	.close {
		position: absolute;
		bottom: 0;
		right: 25px;
		font-size: 2.25rem;
		margin-left: 50px;
		border: none;
		background-color: transparent;
		color: var(--background);
	}

	.mobile-nav {
		display: none;
		visibility: hidden;
		height: 350px;
		width: 0%;
		position: fixed;
		z-index: 1;
		bottom: 0;
		right: 0;
		background-color: var(--primary);
		overflow-x: hidden;
		transition: 0.3s;
	}

	@media screen and (max-width: 720px) {
		.hamburger {
			display: block;
		}

		.mobile-nav {
			display: flex;
		}
	}
</style>
