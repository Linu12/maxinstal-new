<script>
    import Header from '$lib/components/header.svelte';
    import Hero from '$lib/components/hero.svelte';
    // import Services from '$lib/components/services.svelte';
    import About from '$lib/components/about.svelte';
    // import Projects from '$lib/components/projects.svelte';
    import Producers from '$lib/components/producers.svelte';
    import Contact from '$lib/components/contact.svelte';
    import Footer from '$lib/components/footer.svelte';
    import Licences from '$lib/components/licences.svelte';
    // import AnimatedBackground from "$lib/components/animatedBackground.svelte";

    import '../app.css';


</script>

<main>
    <Header />
<!--    <AnimatedBackground />-->
    <Hero />
    <Licences />
    <About />
    <!-- Przekazanie funkcji do Projects -->
<!--    <Projects />-->
   <Producers />
    <Contact />
    <Footer />
</main>


