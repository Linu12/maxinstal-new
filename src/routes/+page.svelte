<script>
    import Header from '$lib/components/header.svelte';
    import Hero from '$lib/components/hero.svelte';
    import Services from '$lib/components/services.svelte';
    import About from '$lib/components/about.svelte';
    import Projects from '$lib/components/projects.svelte';
    import Contact from '$lib/components/contact.svelte';
    import Footer from '$lib/components/footer.svelte';
    import GalleryModal from '$lib/components/galleryModal.svelte';


    let modalOpen = false;
    let modalImages = [];
    let modalDescription = "";

    function openGallery(images, description) {
        modalImages = images;
        modalDescription = description;
        modalOpen = true;
    }

    function closeGallery() {
        modalOpen = false;
    }
</script>

<main>
    <Header />
    <Hero />
    <About />
    <!-- Przekazanie funkcji do Projects -->
    <Projects on:openGallery={(e) => openGallery(e.detail.images, e.detail.description)} />
    <Contact />
    <Footer />
</main>

<GalleryModal isOpen={modalOpen} close={closeGallery} images={modalImages} description={modalDescription} />
