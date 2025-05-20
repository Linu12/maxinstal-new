<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    const galleryImages = [
        "/assets/images/inwest2.jpg",
        "/assets/images/inwest3.jpg",
        "/assets/images/inwest4.jpg",
        "/assets/images/inwest2.jpg",
        "/assets/images/inwest3.jpg"
    ];

    const description = [
        "Inwestycja: kompleks biurowy z systemem klimatyzacji, Warszawa 2023",

    ]

    function handleImageClick() {
        dispatch("openGallery", {
            images: galleryImages,
            description
        });
    }

    function scrollContainer(direction) {
        const scrollable = document.getElementById("scrollable");
        const scrollAmount = 400;
        if (direction === "left") {
            scrollable.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        } else {
            scrollable.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    }
</script>

<section id="projects" class="py-16 font-roboto bg-gradient-to-b from-black to-blue-700 relative">
    <div class="max-w-7xl mx-auto px-4">
        <h3 class="text-3xl font-bold text-center mb-12 text-white">Nasze realizacje</h3>

        <div class="relative">
            <button
                    on:click={() => scrollContainer("left")}
                    class="hidden lg:flex absolute left-0 top-1/2 transform -translate-y-1/2 hover:bg-gray-400 p-2 cursor-pointer rounded-full text-white shadow-lg focus:outline-none"
            >
                ⬅
            </button>

            <!-- Kliknięcie w kontener zdjęć odpala modal -->
            <div id="scrollable" class="flex space-x-4 overflow-x-auto scrollbar-hide scroll-smooth">
                {#each galleryImages as img}
                    <div class="flex-shrink-0 h-48 w-64 lg:h-64 lg:w-80 cursor-pointer" on:click={handleImageClick}>
                        <img src={img} class="rounded-2xl object-cover h-full w-full" alt="Projekt realizacji" />
                    </div>
                {/each}
            </div>

            <button
                    on:click={() => scrollContainer("right")}
                    class="hidden lg:flex absolute right-0 top-1/2 transform -translate-y-1/2 hover:bg-gray-400 p-2 cursor-pointer rounded-full text-white shadow-lg focus:outline-none"
            >
                ➡
            </button>
        </div>
    </div>
</section>

<style>
    .scrollbar-hide {
        scrollbar-width: none;
        -ms-overflow-style: none;
    }
    .scrollbar-hide::-webkit-scrollbar {
        display: none;
    }
</style>
