<script>
	import { CIT, CHOSS, CIC, IISC } from '$lib';
	import { onMount } from 'svelte';
	import { fade, slide } from 'svelte/transition';
	
	let isMenuOpen = false;
	let scrollY = 0;

	const logos = [
		{ src: CIT, alt: 'CIT', class: 'h-8' },
		{ src: CIC, alt: 'CIC', class: 'h-7' },
		{ src: CHOSS, alt: 'CHOSS', class: 'h-9' }
	];

	const navLinks = [
		{ href: '/about', text: 'About' },
		{ href: '/programs', text: 'Programs' },
		{ href: '/Facilities', text: 'Facilities' },
		{ 
			text: 'Courses', 
			dropdown: [
				{ href: '/programs/ug', text: 'UG' },
				{ href: '/programs/pg', text: 'PG' }
			]
		},
		{ href: '/login', text: 'Login' },
		{ href: 'https://engg.cambridge.edu.in/photo-gallery/', text: 'Gallery' },
		{ href: '/contact', text: 'Contact' }
	];

	$: isScrolled = scrollY > 50;
	$: isCompact = scrollY > 100;

	const toggleMenu = () => (isMenuOpen = !isMenuOpen);

	let currentNewsIndex = 0;
	const news = [
		'Cambridge Institute named Top Innovation Hub 2024',
		'New Industry Partnership Program Launched',
		'Student Startups Raised $5M+ This Quarter',
		'Join Our Next Innovation Workshop'
	];

	onMount(() => {
		const newsInterval = setInterval(() => {
			currentNewsIndex = (currentNewsIndex + 1) % news.length;
		}, 4000);

		return () => clearInterval(newsInterval);
	});

	onMount(() => {
		const handleResize = () => {
			if (window.innerWidth >= 768) isMenuOpen = false;
		};
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	});

	$: headerHeight = isCompact ? 'h-2' : isScrolled ? 'h-2' : 'h-2';
	$: headerPadding = isCompact ? 'py-0' : isScrolled ? 'py-1' : 'py-2';
</script>

<svelte:window bind:scrollY />

<header class="fixed top-0 z-50 w-full bg-[#17194a] py-2">
	<div class="container mx-auto px-6">

		<!-- Mobile Header -->
		<div class="flex items-center justify-between md:hidden bg-[#000A30] w-full">
			<img src={CIT} alt="CIT" class="h-12 w-auto" />
			<button
				on:click={toggleMenu}
				class="rounded-lg p-2.5 text-white transition-colors hover:bg-white/10"
				aria-label="Toggle menu"
			>
				<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					{#if isMenuOpen}
						<path stroke-linecap="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
					{:else}
						<path stroke-linecap="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
					{/if}
				</svg>
			</button>
		</div>

		<!-- Desktop Navigation -->
		<div class="hidden md:block">
			<div class="flex items-center justify-between transition-all duration-300 {isCompact ? 'py-0' : 'py-1'}">
				
				<!-- Left: CIT and CIC with line -->
				<div class="flex items-center space-x-4 transition-all duration-300">
					<img
						src={logos[0].src}
						alt={logos[0].alt}
						class="{logos[0].class} w-auto transition-transform hover:scale-105"
					/>
					<div class="h-6 w-px bg-white/40"></div>
					<img
						src={logos[1].src}
						alt={logos[1].alt}
						class="{logos[1].class} w-auto transition-transform hover:scale-105"
					/>
				</div>

				<!-- Right: CHOSS -->
				<div class="flex items-center space-x-6 transition-all duration-300">
					<img
						src={logos[2].src}
						alt={logos[2].alt}
						class="{logos[2].class} w-auto transition-transform hover:scale-105"
					/>
				</div>
			</div>
		</div>

		<!-- Mobile Menu -->
		{#if isMenuOpen}
			<div
				class="absolute top-full right-0 left-0 border-t border-white/10 bg-slate-900/95 shadow-lg backdrop-blur-sm"
				transition:slide={{ duration: 300 }}
			>
				<nav class="divide-y divide-white/10">
					{#each navLinks as { href, text }}
						<a
							{href}
							class="block px-6 py-3 text-blue-100 transition-colors hover:bg-white/5 hover:text-white"
							on:click={toggleMenu}
						>
							{text}
						</a>
					{/each}
				</nav>
				<div class="grid grid-cols-2 gap-6 bg-slate-800/50 p-6">
					{#each logos as logo}
						<img src={logo.src} alt={logo.alt} class="mx-auto h-12 w-auto" />
					{/each}
				</div>
			</div>
		{/if}
	</div>
</header>

<div class="{headerHeight} transition-all duration-300"></div>

<style>
	header {
		box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
	}
	.nav-container {
		margin-top: 30px;
	}
	nav a {
		-webkit-tap-highlight-color: transparent;
	}
	p {
		min-width: 300px;
	}
	.invisible {
		visibility: hidden;
		pointer-events: none;
	}
</style>
