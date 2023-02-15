<script>
	import FullNavigation from './FullNavigation.svelte';
	import MobileNavigation from './MobileNavigation.svelte';

	const links = [
		{
			href: '/blog',
			text: 'Tech Blog',
			external: false,
			action: false
		},
		{
			href: '/projects',
			text: 'Coding Projects',
			external: false,
			action: false
		},
		{
			href: 'https://amazon.com/author/author_brian_philip',
			text: 'Novels',
			external: true,
			action: false
		},
		{
			href: 'https://drive.google.com/file/d/1kV6Lo8Md7BCJ_Fe7pzGxReVKGyZsHNvr/view?usp=sharing',
			text: 'Resume',
			external: true,
			action: true
		}
	];

	let drawerOpen = false;
</script>

<FullNavigation {links} class="nav" />
<MobileNavigation {links} class="nav" />
