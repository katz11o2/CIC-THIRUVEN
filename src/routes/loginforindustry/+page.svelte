<script>
    import { goto } from '$app/navigation';
    let username = "";
    let password = "";

    function handleLogin() {
        if (username === "123" && password === "123") {
            alert("Login successful!");
            goto('/industrysdashboard'); // Redirect after successful login
        } else {
            alert("Invalid username or password. Try again.");
        }
    }
</script>

<main class="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-300 to-blue-500 text-gray-900">
    <div class="p-8 bg-white rounded-xl shadow-xl w-96 text-center transition-transform transform hover:scale-105">
        <h1 class="text-3xl font-extrabold text-gray-800 mb-4">Industry Login</h1>
        <p class="text-gray-600 mb-6">Enter your credentials to continue</p>
        
        <form on:submit|preventDefault={handleLogin} class="space-y-5">
            <div class="text-left">
                <label for="username" class="block text-sm font-medium text-gray-700">Username</label>
                <input type="text" id="username" bind:value={username} required 
                    class="w-full p-3 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all" 
                    placeholder="Enter your username" />
            </div>
            <div class="text-left">
                <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
                <input type="password" id="password" bind:value={password} required 
                    class="w-full p-3 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                    placeholder="Enter your password" />
            </div>
            <button type="submit" 
                class="w-full py-3 mt-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all">
                Login
            </button>
        </form>

        <p class="mt-4 text-sm text-gray-600">Forgot password? <a href="#" class="text-blue-600 hover:underline">Reset here</a></p>
    </div>
</main>

<!-- Student Dashboard Page -->
<script context="module">
    export let page = 'dashboard';
</script>

{#if page === 'dashboard'}
    <main class="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-green-300 to-green-500 text-gray-900">
        <div class="p-8 bg-white rounded-xl shadow-xl w-96 text-center transition-transform transform hover:scale-105">
            <h1 class="text-3xl font-extrabold text-gray-800 mb-4">Welcome, Thiru!</h1>
            <p class="text-gray-600 mb-6">You have successfully logged in.</p>
        </div>
    </main>
{/if}
