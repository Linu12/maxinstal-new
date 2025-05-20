<script>
    import { fade, scale } from 'svelte/transition';
    export let isOpen = false;
    export let close = () => {};
    export let images = [];
    export let description = "";
</script>

{#if isOpen}
    <div transition:fade={{ duration: 200 }} class="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
        <div transition:scale={{ duration: 250 }} class="bg-black rounded-xl p-4 w-full max-w-3xl relative shadow-lg">
            <button on:click={close} class="absolute top-2 right-2 text-blue-700 hover:text-gray-600 cursor-pointer text-xl font-bold">&times;</button>
            <div class="text-3xl text-blue-700 font-roboto font-semibold mb-4">{description}</div>

            <div class="flex overflow-x-auto space-x-4 scrollbar-hide">
                {#each images as img}
                    <img
                            src={img}
                            alt="Gallery image"
                            class="w-64 h-48 md:w-80 md:h-60 lg:w-96 lg:h-72 object-cover rounded-lg flex-shrink-0" />
                {/each}
            </div>
        </div>
    </div>
{/if}