<script>
    export let selectedProject;
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    function closeModal() {
        dispatch('close');
    }
</script>

<div class="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
    <div class="bg-white rounded-lg max-w-4xl w-full p-6 overflow-y-auto max-h-[90vh] relative">
        <button class="absolute top-2 right-2 text-black text-2xl" on:click={closeModal}>×</button>

        <h2 class="text-xl font-bold mb-2">{selectedProject.title}</h2>
        <p class="mb-4">{selectedProject.description}</p>

        <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
            {#each selectedProject.images as image}
                <img src={image} alt="Gallery image" class="rounded-lg object-cover w-full h-48" />
            {/each}
        </div>
    </div>
</div>
