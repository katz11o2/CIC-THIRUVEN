<script>
    import { onMount } from "svelte";

    let statements = [];
    let emailDropdown = false;
    let emailRecipient = "";
    const emailOptions = ["EEE HOD", "Mech HOD", "CSE HOD"];

    onMount(() => {
        // Load statements from localStorage when the page loads
        statements = JSON.parse(localStorage.getItem("statements")) || [];
    });
</script>

<div class="p-6 bg-gray-100 min-h-screen">
    <h2 class="text-2xl font-bold mb-4">Challenge Submissions</h2>
    <div class="overflow-x-auto">
        <table class="w-full border-collapse border border-gray-300">
            <thead>
                <tr class="bg-gray-200">
                    <th class="border p-2">Category</th>
                    <th class="border p-2">Title</th>
                    <th class="border p-2">Description</th>
                    <th class="border p-2">Uniqueness</th>
                    <th class="border p-2">Existing Technologies</th>
                    <th class="border p-2">Gap Analysis</th>
                    <th class="border p-2">Patentability</th>
                    <th class="border p-2">Market Data</th>
                    <th class="border p-2">Financials</th>
                    <th class="border p-2">Attachments</th>
                </tr>
            </thead>
            <tbody>
                {#each statements as statement}
                    <tr class="bg-white border">
                        <td class="border p-2">{statement.category}</td>
                        <td class="border p-2">{statement.title}</td>
                        <td class="border p-2">{statement.description}</td>
                        <td class="border p-2">{statement.uniqueness}</td>
                        <td class="border p-2">{statement.existingTech}</td>
                        <td class="border p-2">{statement.gapAnalysis}</td>
                        <td class="border p-2">{statement.patentability}</td>
                        <td class="border p-2">{statement.marketData}</td>
                        <td class="border p-2">{statement.financials}</td>
                        <td class="border p-2">{statement.attachments}</td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>

    <!-- Send Email Section -->
    <div class="mt-6 bg-white p-4 rounded-lg shadow-md w-full max-w-md">
        <button on:click={() => emailDropdown = !emailDropdown} class="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600">
            Send Email
        </button>
        {#if emailDropdown}
            <div class="mt-2 bg-gray-100 p-2 rounded-md">
                {#each emailOptions as option}
                    <button on:click={() => emailRecipient = option} class="block w-full p-2 text-left hover:bg-gray-200">
                        {option}
                    </button>
                {/each}
            </div>
        {/if}
        {#if emailRecipient}
            <p class="mt-2 text-green-600">Sending to: {emailRecipient}</p>
        {/if}
    </div>
</div>

<style>
    table {
        width: 100%;
        border-collapse: collapse;
    }
    th, td {
        padding: 10px;
        border: 1px solid gray;
        text-align: left;
    }
</style>
