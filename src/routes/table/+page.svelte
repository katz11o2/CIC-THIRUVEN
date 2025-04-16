<script>
    import { writable } from 'svelte/store';
    import { goto } from '$app/navigation'; // SvelteKit's built-in navigation
    import { selectedSubmission } from '../../stores/selectedSubmission';  // Import the store
  
    let submissions = [];
    let comment = '';  // This will hold the comment input
  
    import { onMount } from 'svelte';
  
    onMount(() => {
      // Fetching data from localStorage for submissions
      submissions = JSON.parse(localStorage.getItem("submissions")) || [];
    });
  
    // Function to open a file
    function openFile(url) {
      window.open(url, '_blank');
    }
  
    // Function to send selected submission to the HOD page
    function sendToNextPage(submission) {
      // Store the selected submission and comment in the store
      selectedSubmission.set({ ...submission, comment });
  
      // Navigate to the HOD page
      goto('/hodall'); // Adjust the URL based on your structure
    }
  </script>
  
  <div class="min-h-screen p-6 bg-gradient-to-r from-purple-400 via-blue-500 to-indigo-600">
    <h1 class="text-4xl font-extrabold text-center text-white mb-8">📋 View Submitted Ideas</h1>
  
    {#if submissions.length === 0}
      <p class="text-center text-gray-200 mt-4 text-lg">No submissions yet.</p>
    {:else}
      <div class="overflow-x-auto mt-6 bg-white shadow-lg rounded-lg p-4">
        <table class="w-full table-auto border-collapse border border-gray-300">
          <thead class="bg-blue-600 text-white">
            <tr>
              <th class="border px-4 py-2">Title</th>
              <th class="border px-4 py-2">Category</th>
              <th class="border px-4 py-2">Description</th>
              <th class="border px-4 py-2">Uniqueness</th>
              <th class="border px-4 py-2">Existing Technologies</th>
              <th class="border px-4 py-2">Gap Analysis</th>
              <th class="border px-4 py-2">Patentability</th>
              <th class="border px-4 py-2">Market Data</th>
              <th class="border px-4 py-2">Visualized Product</th>
              <th class="border px-4 py-2">Other Category</th>
              <th class="border px-4 py-2">Comments</th>
              <th class="border px-4 py-2">Send To HOD</th>
            </tr>
          </thead>
  
          <tbody>
            {#each submissions as submission}
              <tr class="border-b hover:bg-gray-100">
                <td class="border px-4 py-2">{submission.title}</td>
                <td class="border px-4 py-2">{submission.category}</td>
                <td class="border px-4 py-2">{submission.description}</td>
                <td class="border px-4 py-2">{submission.uniqueness}</td>
                <td class="border px-4 py-2">{submission.existingTechnologies}</td>
                <td class="border px-4 py-2">{submission.gapAnalysis}</td>
                <td class="border px-4 py-2">{submission.patentability}</td>
                <td class="border px-4 py-2">{submission.MarketData}</td>
                <td class="border px-4 py-2">
                  {#if submission.visualizedProduct}
                    <button class="bg-blue-500 text-white p-2 rounded" on:click={() => openFile(submission.visualizedProduct)}>
                      View File
                    </button>
                  {:else}
                    No file uploaded
                  {/if}
                </td>
                <td class="border px-4 py-2">{submission.otherCategory || "N/A"}</td>
                <td class="border px-4 py-2">
                  <input 
                    type="text" 
                    placeholder="Add comments..." 
                    bind:value={comment} 
                    class="border p-2 rounded-md w-full" />
                </td>
                <td class="border px-4 py-2">
                  <button class="mt-2 bg-green-500 text-white px-4 py-2 rounded-md" on:click={() => sendToNextPage(submission)}>
                    Continue Conversation
                  </button>
                </td>
              </tr>
            {/each}
          </tbody>
        </table>
      </div>
    {/if}
  </div>
  