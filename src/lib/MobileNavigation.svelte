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
	style={`${drawerOpen ? 'visibility: visible; width: 50%;' : ''}`}
>
	{#if drawerOpen}
		<div class="drawer">
			<button class="close">&times;</button>
			<div class="mobile-logo">
				<a href="/">bbarbour.dev</a>
			</div>
			<div class="drawer-links">
				{#each links as link}
					<div class="links">
						<a
							href={link.href}
							target={link.external ? '_blank' : ''}
							rel={link.external ? 'noopener noreferrer' : ''}>{link.text}</a
						>
					</div>
				{/each}
			</div>
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
		background-color: #030c2e;
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
		padding: 0;
		margin-bottom: 1rem;
	}

	.mobile-logo a {
		font-size: 0.8rem;
		text-align: center;
		font-family: 'Press Start 2P';
		color: var(--background);
		letter-spacing: 2px;
		display: block;
		text-decoration: none;
		font-weight: bold;
		text-shadow: 1px 1px #8693a4;
	}

	.mobile-logo a:hover {
		color: var(--white);
	}

	.links {
		display: flex;
		justify-content: center;
		align-items: flex-end;
	}

	.links a {
		margin: 0.5rem 0;
		text-align: center;
		font-size: 1.25rem;
		color: #030c2e;
		display: block;
	}

	.links a:hover {
		color: #ffffff;
	}

	.close {
		position: absolute;
		bottom: 0;
		right: 25px;
		font-size: 2.25rem;
		margin-left: 50px;
		border: none;
		background-color: transparent;
		color: #030c2e;
	}

	.mobile-nav {
		display: none;
		visibility: hidden;
		height: 275px;
		width: 0%;
		position: fixed;
		z-index: 1;
		bottom: 0;
		right: 0;
		background-color: #2fc7a6;
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
