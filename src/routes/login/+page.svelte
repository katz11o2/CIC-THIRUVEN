<script>
    import { goto } from '$app/navigation';
    let email = "";
    let password = "";

    function handleLogin() {
        console.log("Logging in with:", email, password);
        // Add authentication logic here
    }
</script>

<main class="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-900 via-indigo-800 to-purple-900 text-white py-12 px-6">
    <h1 class="text-4xl font-extrabold text-center mb-10 tracking-wide">Login Portal</h1>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        <!-- Students Box -->
        <div class="p-8 bg-blue-700 rounded-xl shadow-lg text-center w-80 transform transition duration-300 hover:scale-105">
            <h2 class="text-2xl font-semibold mb-4"> Students</h2>
            <p class="text-base text-gray-200">Post your Problem statement or Take up an industry related problem and solve it.</p>
            <button on:click={() => goto('/loginforboth')} 
                class="mt-6 py-3 px-6 bg-white text-blue-800 font-semibold rounded-lg w-full transition duration-300 hover:bg-gray-200">
                Login
            </button>
        </div>

        <!-- Faculty Box -->
        <div class="p-8 bg-green-700 rounded-xl shadow-lg text-center w-80 transform transition duration-300 hover:scale-105">
            <h2 class="text-2xl font-semibold mb-4">Academicians</h2>
            <p class="text-base text-gray-200">Manage Problem Statments, Track progress, and resources seamlessly.</p>
            <button on:click={() => goto('/facultylogin')} 
                class="mt-6 py-3 px-6 bg-white text-green-800 font-semibold rounded-lg w-full transition duration-300 hover:bg-gray-200">
                Login
            </button>
        </div>

        <!-- Industry Professionals Box -->
        <div class="p-8 bg-indigo-700 rounded-xl shadow-lg text-center w-80 transform transition duration-300 hover:scale-105">
            <h2 class="text-2xl font-semibold mb-4"> Industry Professionals</h2>
            <p class="text-base text-gray-200">Connect with our Institution and explore collaboration opportunities.</p>
            <button on:click={() => goto('/industry')} 
                class="mt-6 py-3 px-6 bg-white text-indigo-800 font-semibold rounded-lg w-full transition duration-300 hover:bg-gray-200">
                Login
            </button>
        </div>
    </div>
</main>
