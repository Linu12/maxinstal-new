<script>
    import { createEventDispatcher } from 'svelte';
    import GalleryModal from './GalleryModal.svelte'; // Import komponentu modalu

    const dispatch = createEventDispatcher();

    const galleryItems = [
        {
            img: "/assets/images/inwest2.jpg",
            title: "Kompleks biurowy",
            description: "Kompleks biurowy z systemem klimatyzacji",
            date: "Warszawa, 2023",
            images: [
                "/assets/images/inwest1_1.jpg",
                "/assets/images/inwest1_2.jpg",
                "/assets/images/inwest1_3.jpg",
                "/assets/images/inwest1_4.jpg",
                "/assets/images/inwest1_5.jpg",
                "/assets/images/inwest1_6.jpg",
                "/assets/images/inwest1_7.jpg",
                "/assets/images/inwest1_8.jpg",
                "/assets/images/inwest1_9.jpg",
                "/assets/images/inwest1_10.jpg"
            ]
        },
        {
            img: "/assets/images/inwest3.jpg",
            title: "Nowoczesna hala",
            description: "Hala magazynowa z obszarem biurowym",
            date: "Kraków, 2022",
            images: [
                "/assets/images/inwest2_1.jpg",
                "/assets/images/inwest2_2.jpg",
                "/assets/images/inwest2_3.jpg",
                "/assets/images/inwest2_4.jpg",
                "/assets/images/inwest2_5.jpg",
                "/assets/images/inwest2_6.jpg",
                "/assets/images/inwest2_7.jpg",
                "/assets/images/inwest2_8.jpg",
                "/assets/images/inwest2_9.jpg",
                "/assets/images/inwest2_10.jpg"
            ]
        },
        {
            img: "/assets/images/inwest4.jpg",
            title: "Osiedle mieszkaniowe",
            description: "Osiedle z 200 nowoczesnymi apartamentami",
            date: "Wrocław, 2021",
            images: [
                "/assets/images/inwest3_1.jpg",
                "/assets/images/inwest3_2.jpg",
                "/assets/images/inwest3_3.jpg",
                "/assets/images/inwest3_4.jpg",
                "/assets/images/inwest3_5.jpg",
                "/assets/images/inwest3_6.jpg",
                "/assets/images/inwest3_7.jpg",
                "/assets/images/inwest3_8.jpg",
                "/assets/images/inwest3_9.jpg",
                "/assets/images/inwest3_10.jpg"
            ]
        }
    ];

    let isModalOpen = false;
    let selectedProject = null;

    function handleImageClick(project) {
        // Przekazywanie wybranego projektu do modalu
        selectedProject = project;
        isModalOpen = true;
    }
</script>

<section id="projects"  class="py-16 bg-[url('/assets/images/background.png')] font-roboto bg-gradient-to-b from-black to-blue-700 relative">
    <div class="max-w-7xl mx-auto px-4">
        <h3 class="text-3xl font-bold text-center mb-12 text-white">Nasze realizacje</h3>

        <div class="relative">
            <button
                    on:click={() => scrollContainer("left")}
                    class="hidden lg:flex absolute left-0 top-1/2 transform -translate-y-1/2 hover:bg-gray-400 p-2 cursor-pointer rounded-full text-white shadow-lg focus:outline-none"
            >
                ⬅
            </button>

            <div id="scrollable" class="flex space-x-4 overflow-x-auto scrollbar-hide scroll-smooth">
                {#each galleryItems as item}
                    <div class="flex-shrink-0 h-64 w-80 cursor-pointer relative" on:click={() => handleImageClick(item)}>
                        <img src={item.img} class="rounded-2xl object-cover h-full w-full" alt={item.title} />
                        <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent text-white p-4 rounded-b-2xl">
                            <h4 class="text-lg font-bold">{item.title}</h4>
                            <p class="text-sm">{item.description}</p>
                            <span class="text-xs opacity-75">{item.date}</span>
                        </div>
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

    {#if isModalOpen && selectedProject}
        <GalleryModal {selectedProject} on:close={() => (isModalOpen = false)} />
    {/if}
</section>