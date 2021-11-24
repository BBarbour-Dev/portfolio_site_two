<script>
	const projects = [
		{
			name: 'Saga of the Old Gods',
			url: 'http://sagaoftheoldgods.com',
			github: 'https://github.com/steelvoltage/sotog',
			description: "A comic author's website built in Nuxt with Sanity.io as the CMS.",
			image: '/saga.png'
		},
		{
			name: 'Dinner Hunt',
			url: 'https://dinnerhunt.netlify.com/',
			github: 'https://github.com/steelvoltage/dinner-hunt',
			description:
				'A React app that taps into the Edaman API to run queries and displays recipes in a friendly grid.',
			image: '/hunt.png'
		},
		{
			name: 'The Black Hack: Beyond',
			url: 'https://tbhbeyond.netlify.app',
			github: 'https://github.com/steelvoltage/tbhbeyond',
			description:
				'A tabletop RPG web app built in React that lets you create and store characters. Uses Firebase on the back end.',
			image: '/hack.png'
		}
	];
</script>

<h1>Projects</h1>
{#each projects as project}
<div class="project">
	<div class="image">
		<img src={project.image} alt={project.name} />
	</div>
	<div class="text">
	<h3><a href={project.url} target="_blank" rel="noopener noreferrer">{project.name}</a></h3>
	<p>{project.description}</p>
	<a href={project.github} target="_blank" rel="noopener noreferrer">Github</a>
	</div>
</div>


{/each}

<style>
	h1 {
		margin: 3rem 0;
	}

	.project {
		display: flex;
		justify-content: space-evenly;
		padding: 1rem;
		border: 1px solid #4bffd8dc;
		margin-bottom: 1rem;
	}

	.text {
		width: 400px;
		margin-left: 1rem;
	}

	.text h3 {
		margin-bottom: 1rem;
	}

	.text p {
		margin-bottom: 1rem;
	}

	.image img {
		width: 250px;
		height: auto;
	}
</style>
