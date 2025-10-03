<script>
    let isMobileMenuOpen = false; // Stan, czy hamburger jest otwarty

    // Funkcja obsługująca zamykanie menu
    function handleNavigation() {
        isMobileMenuOpen = false; // Zamyka menu po kliknięciu linku
    }
</script>
<!--changes-->

<header class="bg-fuchsia-950 text-white">
    <div class="container mx-auto flex items-center justify-between p-5">
        <!-- Logo -->
        <img src="/assets/images/logo_white.png" alt="MaxInstal Logo" class="h-8 block sm:ml-14 tex">

        <div class="text-2xl font-semibold">
            <!-- Menu na laptopa -->
            <nav class="hidden lg:flex space-x-6 uppercase font-roboto font-bold text-xs ml-18 tracking-widest">
                <a href="#home" class="hover:text-gray-300">Home</a>
                <a href="#about" class="hover:text-gray-300">Dlaczego my?</a>
                <a href="#projects" class="hover:text-gray-300">Nasze Realizacje</a>
                <a href="#producers" class="hover:text-gray-300">Nasi Producenci</a>
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
    <div
            class="lg:hidden bg-gradient-to-b from-blue-950 to-blue-600 uppercase text-xs font-bold text-white overflow-hidden transition-[max-height] duration-500 ease-in-out fixed top-0 left-0 right-0 z-40"
            style="max-height: {isMobileMenuOpen ? '300px' : '0px'}"
    >
        <!-- Przyciski nawigacyjne -->
        <div class="flex justify-between items-center px-4 py-2">
            <button
                    class="text-white text-2xl font-bold focus:outline-none"
                    on:click={() => (isMobileMenuOpen = false)}
            >
                &times; <!-- X w HTML -->
            </button>
        </div>

        <nav>
            <ul class="flex flex-col items-start text-center py-4 space-y-2 ml-5">
                <li><a href="#home" class="block hover:bg-blue-800 py-1" on:click={handleNavigation}>Home</a></li>
                <li><a href="#about" class="block hover:bg-blue-800 py-1" on:click={handleNavigation}>Dlaczego my?</a></li>
                <li><a href="#projects" class="block hover:bg-blue-800 py-1" on:click={handleNavigation}>Nasze Realizacje</a></li>
                <li><a href="#producers" class="block hover:bg-blue-800 py-1" on:click={handleNavigation}>Nasi Producenci</a></li>
                <li><a href="#authorisations" class="block hover:bg-blue-800 py-1" on:click={handleNavigation}>Uprawnienia</a></li>
                <li><a href="#contact" class="block hover:bg-blue-800 py-1" on:click={handleNavigation}>Kontakt</a></li>
            </ul>
        </nav>
    </div>
</header>