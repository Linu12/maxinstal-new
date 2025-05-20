<script>
    let isMobileMenuOpen = false; // Stan, czy hamburger jest otwarty
</script>

<header class="bg-blue-800 text-white">
    <div class="container mx-auto flex items-center justify-between p-5">
        <!-- Logo -->
        <div class="text-2xl font-semibold">
            <!-- Menu na laptopa -->
            <nav class="hidden lg:flex space-x-6 uppercase font-roboto font-bold text-xs ml-18 tracking-widest">
                <a href="#home" class="hover:text-gray-300">Home</a>
                <a href="#about" class="hover:text-gray-300">Dlaczego my?</a>
                <a href="#projects" class="hover:text-gray-300">Nasze Realizacje</a>
                <a href="#authorisations" class="hover:text-gray-300">Uprawnienia</a>
                <a href="#contact" class="hover:text-gray-300">Kontakt</a>
            </nav>


        </div>




        <!-- Hamburger menu na telefonie -->
        <button
                class="lg:hidden focus:outline-none"
                aria-label="Toggle menu"
                on:click={() => (isMobileMenuOpen = !isMobileMenuOpen)}
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-8 h-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
        </button>
    </div>

    <!-- Menu rozwijane na telefonie -->
    {#if isMobileMenuOpen }
        <nav class="lg:hidden bg-gradient-to-b from-blue-950 to-cyan-700 transition-all duration-500 uppercase text-xs font-bold text-white">
            <ul class="flex flex-col items-start text-center py-4 space-y-2 ml-5">
                <li><a href="#home" class="block hover:bg-blue-800 py-1">Home</a></li>
                <li><a href="#about" class="block hover:bg-blue-800 py-1">Dlaczego my?</a></li>
                <li><a href="#projects" class="block hover:bg-blue-800 py-1">Nasze realizacje</a></li>
              <li><a href="#authorisations" class="hover:text-gray-300">Uprawnienia</a></li>
                <li><a href="#contact" class="block hover:bg-blue-800 py-1">Kontakt</a></li>
            </ul>
        </nav>
    {/if}


</header>