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
			href: '/novels',
			text: 'Novels',
			external: false,
			action: false
		},
		{
			href: 'https://drive.google.com/file/d/1kV6Lo8Md7BCJ_Fe7pzGxReVKGyZsHNvr/view?usp=sharing',
			text: 'Resume',
			external: true,
			action: true
		}
	];
</script>

<FullNavigation {links} />
<MobileNavigation {links} />
