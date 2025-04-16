<script>
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';

  let form = {
    title: "",
    category: "",
    description: "",
    uniqueness: "",
    existingTechnologies: "",
    gapAnalysis: "",
    patentability: "",
    Marketingdata : "",
    visualizedProduct: "",
    researchData: "",
    experimentalData: "",
    otherCategory: ""
  };

  function submitForm() {
    let submissions = JSON.parse(localStorage.getItem("submissions")) || [];
    submissions.push({ ...form }); // Add new entry
    localStorage.setItem("submissions", JSON.stringify(submissions));

    // Reset form
    form = {
      title: "",
      category: "",
      description: "",
      uniqueness: "",
      existingTechnologies: "",
      gapAnalysis: "",
      patentability: "",
      Marketingdata : "",
      visualizedProduct: "",
      researchData: "",
      experimentalData: "",
      otherCategory: ""
    };

    // Redirect to home screen
    goto("/");
  }

  // Watch for changes in the category to toggle the otherCategory field
  let showOtherCategory = false;
  $: if (form.category === "OTHERS") {
    showOtherCategory = true;
  } else {
    showOtherCategory = false;
  }

  // Watch for changes in the uniqueness field to toggle patent field
  let showPatentField = false;
  $: if (form.uniqueness === "Yes") {
    showPatentField = true;
  } else {
    showPatentField = false;
  }
</script>

<div class="min-h-screen flex justify-center items-center p-6 bg-gray-200">
  <div class="max-w-3xl w-full bg-white p-8 rounded-lg shadow-lg shadow-blue-400 transform transition duration-500 hover:scale-105">
    <h1 class="text-3xl font-bold text-center text-blue-700 mb-6">🚀 Submit Your Design Idea</h1>

    <form on:submit|preventDefault={submitForm}>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Title Field -->
        <input bind:value={form.title} placeholder="Title" class="p-3 border rounded-lg text-lg transition-all duration-200 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500">

        <!-- Category Dropdown -->
        <select bind:value={form.category} class="p-3 border rounded-lg text-lg transition-all duration-200 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="">Select Category</option>
          <option value="CSE">CSE</option>
          <option value="AIML">AIML</option>
          <option value="EEE">EEE</option>
          <option value="MECH">MECH</option>
          <option value="OTHERS">Others</option>
        </select>

        <!-- Other Category Field -->
        {#if showOtherCategory}
          <input bind:value={form.otherCategory} placeholder="Please specify the category" class="p-3 border rounded-lg text-lg col-span-2 transition-all duration-200 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
        {/if}

        <!-- Description Textarea -->
        <textarea bind:value={form.description} placeholder="Description" class="p-3 border rounded-lg text-lg col-span-2 transition-all duration-200 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>

        <!-- Uniqueness Dropdown -->
        <select bind:value={form.uniqueness} placeholder="Uniqueness" class="p-3 border rounded-lg text-lg transition-all duration-200 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="">Is there any uniqueness?</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>

        <!-- Patentability Field (If Uniqueness is Yes) -->
        {#if showPatentField}
          <input bind:value={form.patentability} placeholder="Patentability Information" class="p-3 border rounded-lg text-lg col-span-2 transition-all duration-200 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
        {/if}

        <!-- Other Fields -->
        <input bind:value={form.existingTechnologies} placeholder="Existing Technologies" class="p-3 border rounded-lg text-lg transition-all duration-200 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
        <input bind:value={form.gapAnalysis} placeholder="Gap-Analysis and problem-elimination" class="p-3 border rounded-lg text-lg transition-all duration-200 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
        <input bind:value={form.MarketData} placeholder="Market / Marketing data" class="p-3 border rounded-lg text-lg transition-all duration-200 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500">

        <!-- File Upload Field with Masked Text -->
        <label for="visualizedProduct" class="block text-lg font-medium text-blue-600 mb-2">Visualized Product</label>
        <div class="relative">
          <input type="file" id="visualizedProduct" bind:value={form.visualizedProduct} class="p-3 border rounded-lg text-lg transition-all duration-200 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 opacity-0 absolute inset-0 w-full h-full" accept="image/*,.pdf,.docx">
          <div class="absolute inset-0 bg-gray-200 flex justify-center items-center opacity-50 text-gray-600 text-xl"></div>
        </div>

      </div>

      <button type="submit" class="w-full mt-6 p-3 bg-blue-500 text-white rounded-lg text-xl transition-all duration-200 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Submit</button>
    </form>
  </div>
</div>
