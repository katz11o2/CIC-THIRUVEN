<script>
    import { onMount } from "svelte";
  
    let statements = [];
    let newStatement = {
        category: "",
        title: "",
        description: "",
        uniqueness: "",
        existingTech: "",
        gapAnalysis: "",
        patentability: "",
        marketData: "",
        financials: "",
        attachments: ""
    };
  
    const categories = [
        "New Product Development",
        "New Process Development",
        "New Features in Existing Product",
        "Problems in Existing Product",
        "Problems in Existing Processes"
    ];
  
    function addStatement() {
        if (newStatement.title.trim() !== "") {
            // Retrieve previous statements from localStorage
            let savedStatements = JSON.parse(localStorage.getItem("statements")) || [];
            savedStatements = [newStatement, ...savedStatements];
  
            // Save updated statements to localStorage
            localStorage.setItem("statements", JSON.stringify(savedStatements));
  
            // Update the local list
            statements = savedStatements;
  
            // Reset input fields
            newStatement = {
                category: "",
                title: "",
                description: "",
                uniqueness: "",
                existingTech: "",
                gapAnalysis: "",
                patentability: "",
                marketData: "",
                financials: "",
                attachments: ""
            };
        }
    }
  
    onMount(() => {
        // Load statements from localStorage when the page loads
        statements = JSON.parse(localStorage.getItem("statements")) || [];
    });
  </script>
  
  <div class="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-300 to-purple-300">
    <div class="w-full max-w-3xl bg-white p-8 rounded-lg shadow-xl transform transition-all hover:scale-105 duration-300">
        <h2 class="text-3xl font-bold mb-6 text-center text-gray-800">Submit a Challenge</h2>
        <label class="block font-semibold text-gray-700 mb-2">Category</label>
        <select bind:value={newStatement.category} class="w-full p-3 border-2 rounded-lg bg-gray-50 transition duration-300 focus:ring-2 focus:ring-blue-500">
            <option value="" disabled>Select a category</option>
            {#each categories as category}
                <option value={category}>{category}</option>
            {/each}
        </select>
  
        <label class="block font-semibold text-gray-700 mt-4">Title</label>
        <input bind:value={newStatement.title} class="w-full p-3 border-2 rounded-lg bg-gray-50 transition duration-300 focus:ring-2 focus:ring-blue-500" placeholder="Enter title..." />
  
        <label class="block font-semibold text-gray-700 mt-4">Description</label>
        <textarea bind:value={newStatement.description} class="w-full p-3 border-2 rounded-lg bg-gray-50 transition duration-300 focus:ring-2 focus:ring-blue-500"></textarea>
  
        <label class="block font-semibold text-gray-700 mt-4">Uniqueness</label>
        <input bind:value={newStatement.uniqueness} class="w-full p-3 border-2 rounded-lg bg-gray-50 transition duration-300 focus:ring-2 focus:ring-blue-500" />
  
        <label class="block font-semibold text-gray-700 mt-4">Existing Technologies</label>
        <input bind:value={newStatement.existingTech} class="w-full p-3 border-2 rounded-lg bg-gray-50 transition duration-300 focus:ring-2 focus:ring-blue-500" />
  
        <label class="block font-semibold text-gray-700 mt-4">Gap Analysis</label>
        <input bind:value={newStatement.gapAnalysis} class="w-full p-3 border-2 rounded-lg bg-gray-50 transition duration-300 focus:ring-2 focus:ring-blue-500" />
  
        <label class="block font-semibold text-gray-700 mt-4">Patentability</label>
        <input bind:value={newStatement.patentability} class="w-full p-3 border-2 rounded-lg bg-gray-50 transition duration-300 focus:ring-2 focus:ring-blue-500" />
  
        <label class="block font-semibold text-gray-700 mt-4">Market Data</label>
        <input bind:value={newStatement.marketData} class="w-full p-3 border-2 rounded-lg bg-gray-50 transition duration-300 focus:ring-2 focus:ring-blue-500" />
  
        <label class="block font-semibold text-gray-700 mt-4">Financials</label>
        <input bind:value={newStatement.financials} class="w-full p-3 border-2 rounded-lg bg-gray-50 transition duration-300 focus:ring-2 focus:ring-blue-500" />
  
        <label class="block font-semibold text-gray-700 mt-4">Attachments</label>
        <input type="file" bind:value={newStatement.attachments} class="w-full p-3 border-2 rounded-lg bg-gray-50 transition duration-300 focus:ring-2 focus:ring-blue-500" />
  
        <button on:click={addStatement} class="mt-6 w-full bg-blue-500 text-white p-3 rounded-lg transform transition duration-300 hover:bg-blue-600 hover:scale-105 focus:ring-4 focus:ring-blue-500">
            Submit
        </button>
    </div>
  </div>
  
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
  
    .font-roboto {
        font-family: 'Roboto', sans-serif;
    }
  
    textarea {
        min-height: 100px;
    }
  
    input, textarea, select {
        font-family: 'Roboto', sans-serif;
    }
  
    /* Hover effect for inputs and buttons */
    input:hover, textarea:hover, select:hover {
        border-color: #4CAF50;
        box-shadow: 0 0 5px rgba(0, 128, 0, 0.2);
    }
  
    /* Smooth transition for elements */
    .transition {
        transition: all 0.3s ease;
    }
  
    
    /* Centered form background */
    .bg-gradient-to-r {
        background: linear-gradient(135deg, #00c6ff, #0072ff);
    }
  
    /* Form content shadow */
    .shadow-xl {
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    }
  
    /* Hover scale effect */
    .transform:hover {
        transform: scale(1);
    }
  </style>
  