<script>

import { fade, scale } from 'svelte/transition';

function goTo(page) {
        window.location.href = page;
    }
    const stats = [
        { icon: '⩇', value: '10+', label: 'Years Experience' },
        { icon: '𖣠 ', value: '50+', label: 'Industry Partners' },
        { icon: '✧', value: '100+', label: 'Success Stories' },
        { icon: ' ⌕', value: '25+', label: 'Expert Mentors' }
    ];

    const studentStartups = [
        { name: 'Miceter.Tech', description: 'AI Solutions',  status: 'Active' },
        { name: 'Gananiya', description: 'Eco-Friendly Products',  status: 'Active' },
        { name: 'Koko Shell', description: 'Decoratives',  status: 'Active'  },
        { name: 'Naticutz', description: 'Animal Husbandry',  status: 'Active'  }
    ];

    const achievements = [
        { year: '2024', title: 'Innovation Excellence Award' },
        { year: '2023', title: 'Best Incubator Program' },
        { year: '2023', title: 'Top Research Institution' }
    ];

    const facultyAchievements = [
        {
            name: 'Industry 1',
           /// title: 'Head of Innovation',
            achievements: [
                'Research Excellence Award 2024',
                'Published in Nature Technology',
                '5 Patents Filed'
            ],
           /// image: 'src/lib/logos/image-2[1].png'
        },

        {
            name: 'Industry 2',
           /// title: 'Head of Innovation',
            achievements: [
                'Research Excellence Award 2024',
                'Published in Nature Technology',
                '5 Patents Filed'
            ],
           /// image: 'src/lib/logos/image-2[1].png'
        },
        {
            name: 'Industry 3',
           /// title: 'Lead Research Mentor',
            achievements: [
                'Best Mentor Award 2023',
                'Industry Innovation Prize',
                '10+ Startups Mentored'
            ],
           /// image: 'src/lib/logos/WhatsApp Image 2025-04-02 at 08.45.11_4c753bca.jpg'
        },
        {
            name: 'Industry 4',
           /// title: 'Lead Scientist',
            achievements: [
                'Tech Innovation Award',
                'IEEE Fellow',
                '15+ Research Papers'
            ],
           /// image: 'https://media.licdn.com/dms/image/v2/D5603AQGPKisYexfYeA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1696911278245?e=1749081600&v=beta&t=Bm9ZB_4xK7LLJvie0WdZJ32s8T8AOO-ua-66aw_x0JE'
        },

      
       
    ];
</script>

<link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet">


<!-- Logo Image Section -->
<div class="w-full bg-white flex justify-center pl-40 pt-10">
  <a href="https://ibb.co/p6PVbc6C">
    <img 
      src="https://i.ibb.co/HL2wB6Lm/Frame-5.png" 
      alt="Frame-5" 
      border="0"
      class="w-[85%] h-auto object-contain"
    />
  </a>
</div>





<div class="w-full bg-white flex justify-center py-4 pt-20">
  <a href="https://ibb.co/zhhPX8CZ">
    <img 
      src="https://i.ibb.co/0jjYCB1r/Frame-3.png" 
      alt="Frame-3" 
      border="0"
      class="w-[100%] h-[100%]  object-contain"
    />
  </a>
</div>

<div class="w-full bg-white flex justify-center py-4 pt-20">
  <a href="https://ibb.co/QjYsR3rm">
    <img 
      src="https://i.ibb.co/BKT8x5qs/Frame-18.png" 
      alt="Frame-18" 
      border="0"
      class="w-[100%] h-auto object-contain"
    />
  </a>
</div>


  
<div class="w-full bg-white flex justify-center py-4 pt-20"> 
  <a href="https://ibb.co/SD4p9Twy">
    <img 
      src="https://i.ibb.co/BH5RSD23/Frame-19.png" 
      alt="Frame-19" 
      border="0"
      class="w-[100%] h-auto object-contain"
    />
  </a>
</div>


<div class="w-full bg-white flex justify-center py-2 "> 
  <a href="https://ibb.co/XYvC92w">
    <img 
      src="https://i.ibb.co/nSdwnJG/Frame-20.png" 
      alt="Frame-20" 
      border="0"
      class="w-[80%] h-auto ml-30  object-contain"
    />
  </a>
</div>

  

 



<style>

.news-span {
  min-width: max-content;
  display: inline-block;
  letter-spacing: 1px;
  white-space: nowrap;
  padding-right: 3rem;
}


  .logo {
    height: 80px;
    margin: 0 2rem;
  }
  
.animate-scroll-marquee {
  animation: scroll-marquee 50s linear infinite;
}




  @media (max-width: 768px) {
    .logo {
      height: 60px;
      margin: 0 1rem;
    }
  }



  @keyframes scroll-marquee {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}






h1,h2{
  font-size: 1.6rem;
    font-weight: 700;
    letter-spacing: 2px;
    font-family: 'source sans pro';
    color: #000A30;
    max-width: 1200px;
    line-height: 1;
    margin-bottom: 1.5rem;



}
    p {
		position: relative;
	    top:12px;
		font-size: 17px;
		word-spacing: 6px;
		line-height: 28px;
        font-family: 'source sans pro';
	}

    
	

  .red{
    font-size: 1.2rem; /* Big font */
    font-weight: 500; /* Extra bold */
    color: #000A30; /* Deep blue */
    text-align: center;
   
    text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
    font-family: 'Poppins', Tahoma, Geneva, Verdana, sans-serif;
  }

  

  @media (max-width: 768px) {
    h1 {
      font-size: 2.6rem;
    }
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
		width: 100px;
		position: relative;

		top:20PX;
		
		transition: background-color 0.5s ease;
	}

	button:hover {
		background-color: #1c3faa; /* slightly darker on hover */
	}

    </style>
    