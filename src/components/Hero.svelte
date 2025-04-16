<script>
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import { goto } from '$app/navigation';
	function scrollDown() {
		window.scrollBy({ top: 1000, behavior: 'smooth' });
	}

	const stats = [
		{ label: 'Industry Partners', value: '50+', prefix: '' },
		{ label: 'Patents Filed', value: '3000+', prefix: '' },
	];

	const news = [
		'Student Startups Raised $5M+ This Quarter',
		'Cambridge Institute named Top Innovation Hub 2024',
		'New Industry Partnership Program Launched',
		'Student Startups Raised $5M+ This Quarter',
		'Join Our Next Innovation Workshop',
		'Cambridge Institute named Top Innovation Hub 2024',
	];


	const navLinks = [
		{ href: '/about', text: 'About Us' },
		{ href: '/facilities', text: 'Facilities' },
		{ href: '/programs', text: 'Programs' },
		{
			text: 'Courses',
			dropdown: [
				{ href: '/programs/ug', text: 'UG' },
				{ href: '/programs/pg', text: 'PG' }
			]
		},
		{ href: '/register', text: 'Register' },
		{ href: '/contact', text: 'Contact Us' }
	];

	// Track which dropdown is open
	let openDropdown = null;

	// Toggle dropdown visibility
	function toggleDropdown(index) {
		openDropdown = openDropdown === index ? null : index;
	}

	let currentNewsIndex = 0;
	let isVisible = false;

	onMount(() => {
		isVisible = true;
		const interval = setInterval(() => {
			currentNewsIndex = (currentNewsIndex + 1) % news.length;
		}, 4000);

		return () => clearInterval(interval);
	});

	const opportunities = [
		{
			title: 'Industry Innovation',
			description: 'Transform your business challenges into opportunities',
			cta: 'Submit Challenge',
			icon: '🎯',
			link: "/innovation"
		},
		{
			title: 'Research Partnership',
			description: 'Access cutting-edge research and development facilities',
			cta: 'Partner With Us',
			icon: '🔬',
			link: "/research"
		}
	];
</script>


<nav class="flex items-center bg-white justify-between px-1 py-2 pl-65	0 pt-12">
	<!-- Menu Items centered with equal spacing -->
	<ul class="flex space-x-4 text-sm font-medium justify-evenly flex-1 mt-1 ">
		{#each navLinks as link, index}
			<li class="relative group">
				{#if !link.dropdown}
					<a href={link.href} class="hover:underline">{link.text}</a>
				{:else}
					<span
						class="hover:underline cursor-pointer"
						on:click={() => toggleDropdown(index)}
					>
						{link.text}
					</span>
					{#if openDropdown === index}
						<ul class="absolute left-0 mt-0 bg-white border shadow rounded w-32 z-10">
							{#each link.dropdown as sublink}
								<li>
									<a
										href={sublink.href}
										class="block px-4 py-2 text-sm text-black hover:bg-gray-100"
									>
										{sublink.text}
									</a>
								</li>
							{/each}
						</ul>
					{/if}
				{/if}
			</li>
		{/each}
	</ul>

	<!-- Search Box -->
	<div class="flex items-center">
		<input
			type="text"
			placeholder="Search..."
			class="border border-gray-300 rounded-md px-3 py-2 text-sm mt-1 mr-5	"
		/>
	</div>
</nav>

<div class="w-full h-[50px] bg-[#000A30] text-white flex items-center overflow-hidden">
	<!-- Static "News Updates" -->
	<div class="w-[20%] flex items-center justify-center text-[#f6d287] font-semibold">
	  News Updates
	</div>
  
	<!-- Scrolling Marquee -->
	<div class="w-[80%] marquee-container overflow-hidden relative">
	  <div class="marquee-content flex gap-6 animate-marquee whitespace-nowrap">
		<span class="news-span">Student Startups Raised $5M+ This Quarter</span>
		<span class="news-span">New Startups launching soon!</span>
		<span class="news-span">Student Startups Raised $5M+ This Quarter</span>
		<span class="news-span">New Startups launching soon!</span>
		<span class="news-span">Student Startups</span>
		<span class="news-span">Scholarships available for meritorious students</span>
		<span class="news-span">New Startups launching soon!</span>
		<span class="news-span">Student Startups</span>
		<span class="news-span">Scholarships available for meritorious students</span>
		<span class="news-span">New Startups launching soon!</span>
		<span class="news-span">Student Startups Raised $5M+ This Quarter</span>
		<span class="news-span">New Startups launching soon!</span>
		<span class="news-span">Student Startups Raised $5M+ This Quarter</span>
	   
	  </div>
	</div>
  </div>
  
  
  
<!-- ✅ Updated Top Banner with Circles and Line -->
<div class="top-banner bg-white h-[410px] relative">
	<!-- Image -->
	<a href="https://ibb.co/CKqGHgx9">
		<img 
		  src="https://i.ibb.co/9HJ5r6R4/thiru.png" 
		  alt="thiru" 
		  border="0"
		  class="absolute top-1 left-3 h-full object-contain"
		/>
	  </a>
	  
  
	<!-- Circles and Line Group -->
	<div class="absolute right-0 top-55 transform -translate-y-1/2 flex flex-col items-start space-y-8">
		<!-- 
		<div class="w-[2px] h-[240px] bg-gradient-to-b from-gray-500 to-gray-500 absolute right-56.5 top-0 z-0"></div>
	  Line -->
		<!-- Items -->
		<div class="flex items-center space-x-4">
			<!-- Clickable button -->
			<div 
				class="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-700 text-white flex items-center justify-center rounded-full shadow-md hover:shadow-xl transition-shadow duration-500 cursor-pointer" 
				style="animation: softGlow 3s ease-in-out infinite;"
				on:click={scrollDown}
			>
				1
			</div>
		
			<!-- Text -->
			<div class="text-gray-800 font-semibold text-base leading-tight">Shaping the Future</div>
		</div>
	  
		
		<div class="flex items-center space-x-4">
		  <div class="w-8 h-8 bg-gradient-to-br from-green-500 to-green-700 text-white flex items-center justify-center rounded-full shadow-md hover:shadow-xl transition-shadow duration-500" style="animation: softGlow 3s ease-in-out infinite;">
			2
		  </div>
		  <div class="text-gray-800 font-semibold text-base leading-tight">Industry Experts</div>
		</div>
	  
		<div class="flex items-center space-x-4">
		  <div class="w-8 h-8 bg-gradient-to-br from-red-500 to-red-700 text-white flex items-center justify-center rounded-full shadow-md hover:shadow-xl transition-shadow duration-500" style="animation: softGlow 3s ease-in-out infinite;">
			3
		  </div>
		  <div class="text-gray-800 font-semibold text-base leading-tight">Transform Your Ideas</div>
		</div>
	  
		<!-- Inverted Triangle 
		<div class="w-3 h-4 border-l-6 border-r-6 border-t-6 border-l-transparent border-r-transparent border-t-black-400 -ml-4"></div>
	  -->
		</div>
	  
	  
	  
  </div>
  


<!-- ✅ Wrapper div with flex add your code here for the -->

<!-- Fixed News Ticker -->



<!-- Animated Down Arrow Centered -->

  
<style>
   @keyframes softGlow {
    0%, 100% {
      box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
    }
    50% {
      box-shadow: 0 0 18px rgba(255, 255, 255, 0.6);
    }
  }
  
.flash-image {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	object-fit: cover;
	/* opacity: 0; */
	/* animation rules removed for testing */
}

@keyframes marquee {
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
}



.flash-loop {
	position: relative;
	width: 100%;
	height: 380px;
	overflow: hidden;
}

.flash-image {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	object-fit: cover;
	opacity: 0;
	animation-duration: 6s;
	animation-timing-function: ease-in-out;
	animation-iteration-count: infinite;
}

.image1 {
	animation-name: flashInOut1;
}

.image2 {
	animation-name: flashInOut2;
}

ul {
		list-style-type: none;
		padding: 0;
	}

@keyframes flashInOut1 {
	0%, 49.9% {
		opacity: 1;
	}
	50%, 100% {
		opacity: 0;
	}
}

@keyframes flashInOut2 {
	0%, 49.9% {
		opacity: 0;
	}
	50%, 100% {
		opacity: 1;
	}
}

@keyframes marquee {
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
}

.marquee-content {
  animation: marquee 70s linear infinite;
}


.marquee {
    width: 100%;
    overflow: hidden;
    position: relative;
  }

  .marquee-content {
    display: inline-flex;
    white-space: nowrap;
  }
  @keyframes scroll-marquee {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}


.animate-slow-marquee {
    animation: scroll-marquee 50s linear infinite;
  }


  .marquee-container {
  position: relative;
  overflow: hidden;
  height: 100%;
  display: flex;
  align-items: center;
}

@keyframes slow-marquee {
  0%   { transform: translateX(0%); }
  100% { transform: translateX(-50%); }
}



.animate-slow-marquee {
  animation: slow-marquee 30s linear infinite;
}

.glow-yellow {
	background-color: #abc0c3;
	box-shadow: 
		0 0 12px 4px rgba(35, 16, 202, 0.6),  /* soft yellow glow */
		0 0 20px 6px rgba(255, 255, 100, 0.8); /* brighter outer glow */
	animation: yellowPulse 2s ease-in-out infinite;
}

.glow-orange {
	background-color: #ddff00;
	box-shadow: 
		0 0 12px 4px rgba(35, 16, 202, 0.6),  /* soft yellow glow */
		0 0 20px 6px rgba(255, 255, 100, 0.8); /* brighter outer glow */
	animation: yellowPulse 2s ease-in-out infinite;
}

.glow-blue {
	background-color: #6622db;
	box-shadow: 
		0 0 12px 4px rgba(35, 16, 202, 0.6),  /* soft yellow glow */
		0 0 20px 6px rgba(255, 255, 100, 0.8); /* brighter outer glow */
	animation: yellowPulse 2s ease-in-out infinite;
}

.glow-green {
	background-color: #f44004;
	box-shadow: 
		0 0 12px 4px rgba(35, 16, 202, 0.6),  /* soft yellow glow */
		0 0 20px 6px rgba(255, 255, 100, 0.8); /* brighter outer glow */
	animation: yellowPulse 2s ease-in-out infinite;
}
	
	
	
@keyframes scrollX {
	0% {
		transform: translateX(0%);
	}
	100% {
		transform: translateX(-50%);
	}
}

.animate-scrollX {
	animation: scrollX 10s linear infinite;
}


@keyframes yellowPulse {
	0% {
		box-shadow: 0 0 6px 2px rgba(238, 241, 241, 0.4), 0 0 14px 5px rgba(242, 244, 242, 0.5);
	}
	50% {
		box-shadow: 0 0 6px 2px rgba(235, 246, 233, 0.9), 0 0 28px 10px rgb(179, 169, 197);
	}
	100% {
		box-shadow: 0 0 6px 2px rgba(223, 216, 225, 0.4), 0 0 14px 5px rgba(42, 10, 77, 0.5);
	}
}



.fixed-band {
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 50px;
	background-color: black;
	color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 50;
}

.band-text {
	font-size: 14px;
	font-weight: 500;
	letter-spacing: 0.5px;
}

	:global(html) {
		scroll-behavior: smooth;
		background: white;
		
	}





	.image-scroll-wrapper {
	width: 100%;
	height: 300px;
	overflow: hidden;
	position: relative;
}

.image-list {
	display: flex;
	flex-direction: row;
	gap: 20px;
	animation: scrollLeft 20s linear infinite;
	width: max-content;
}

.image-list img {
	width: 300px;
	height: 300px;
	object-fit: cover;
	border-radius: 12px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* DELETE THIS to stop vertical auto scroll */
@keyframes scrollLeft {
	0% {
		transform: translateX(0%);
	}
	100% {
		transform: translateX(-50%);
	}
}


h1 {
    font-size: 2rem; /* Big font */
    font-weight: 400; /* Extra bold */
    color: #000A30; /* Deep blue */
    text-align: left;
 
    text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 4.5rem; /* Responsive scaling */
    }

}
	p {
		position: relative;
		top: 23px;
		left: 15px;
		font-size: 14px;
		word-spacing: 6px;
		line-height: 28px;
	}
	button {
		all: unset; /* This resets everything so we can style from scratch */
		cursor: pointer;
		font-size: 12px;
		color: white;
		background-color: #000A30; /* Tailwind's blue-800 */
		padding: 12px 13px;
		border-radius: 8px;
		display: inline-flex;
		align-items: center;
		height: 18px;
		width: 77px;
		position: relative;
		left:14px;	
		bottom: 10PX;
		
		transition: background-color 0.5s ease;
	}

	button:hover {
		background-color: #1c3faa; /* slightly darker on hover */
	}

	svg {
		width: 12px;
		height: 12px;
		margin-left: 4px;
	}

	/* Optional: override notification dot positioning */
	button .absolute {
		display: none; /* Or adjust position as needed */
	}


	.group {
		padding: 0rem;
		transition: all 0.2s ease;
		margin-right: 20px;
	
	}
	.group .text-3xl {
		font-size: 1px;
	}
	.group .text-2xl {
		font-size: 15px;
	}
	.group .text-lg {
		font-size: 15px;
	}
	.grid {
		max-height: 800px;
	}
	main {
		height: 500px;
	}
	@keyframes bounce {
		0%, 100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(8px);
		}
	}
	.animate-bounce {
		animation: bounce 0.8s infinite;
	}
</style>
