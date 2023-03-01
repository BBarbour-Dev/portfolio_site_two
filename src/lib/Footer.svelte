<script>
	const date = new Date();
	const year = date.getFullYear();
</script>

<footer>
	<div class="container">
		<p class="footer-text">Social Links</p>
		<div class="social-links">
			<a href="https://www.linkedin.com/in/brian-barbour/" target="_blank" rel="noopener noreferrer"
				>linkedin</a
			>
			<a href="https://dev.to/bbarbour" target="_blank" rel="noopener noreferrer">dev.to</a>
			<a href="https://github.com/BBarbour-Dev" target="_blank" rel="noopener noreferrer">github</a>
			<a href="https://twitter.com/BBarbourDev" target="_blank" rel="noopener noreferrer">twitter</a
			>
		</div>
		<p class="footer-text small">
			Handcrafted with love using SvelteKit. ©{year} <a href="http://bbarbour.dev">bbarbour.dev</a>.
		</p>
	</div>
</footer>

<style>
	footer {
		margin-top: 5rem;
		border-top: 2px solid var(--primary);
		padding: 1rem;
		display: flex;
		width: 100%;
		justify-content: center;
	}

	.footer-text {
		margin-bottom: 1rem;
		text-align: center;
	}

	.small {
		font-size: 12px;
	}

	.social-links {
		margin-bottom: 1rem;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}

	.social-links a {
		text-align: center;
	}

	@media screen and (max-width: 720px) {
		.social-links {
			flex-direction: column;
			padding: 0;
		}

		.social-links a {
			margin-bottom: 0.5rem;
		}
	}
</style>
