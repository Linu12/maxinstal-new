<section id="about" class="font-roboto bg-[url('/assets/images/background.png')] py-16 bg-gradient-to-b from-black to-blue-900">
    <div class="max-w-5xl mx-auto px-4 text-center">
        <h3 class="text-3xl font-bold mb-8  text-white">Dlaczego MaxInstal?</h3>
        <p class="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 via-fuchsia-400 to-white border text-base/10 border-white py-3 px-6 rounded-lg lg:border-0 lg:text-2xl text-shadow-lg leading-relaxed text-left mb-12">
            Firma Max-Instal powstała w roku 2005. Działamy w branży wentylacji, klimatyzacji, ogrzewania i chłodnictwa. Specjalizujemy się w projektowaniu, montażu i serwisie instalacji.
            Wykonujemy instalacje w domach prywatnych, budynkach użyteczności publicznej, zakładach przemysłowych, obiektach zabytkowych. Posiadamy doświadczenie w zakresie montażu instalacji w wykonaniu zwykłym i specjalnym.
        </p>

        <!-- Sekcja FAQ -->
        <div class="text-left ">
            <h4 class="text-2xl font-semibold mb-6 text-white text-center">Najczęściej zadawane pytania (FAQ)</h4>

            <!-- Pytanie 1 -->
            <div class="p-4 mb-4 rounded-lg shadow-2xl">
                <button
                        on:click={() => toggle(1)}
                        class="w-full text-left cursor-pointer text-white text-lg font-semibold focus:outline-none"
                >
                    Jak długo trwa instalacja systemu wentylacyjnego?
                </button>
                {#if openIndex === 1}
                    <p class="text-gray-300 mt-2 text-sm">
                        Czas instalacji systemu wentylacyjnego zależy od wielkości i specyfiki budynku. W większości przypadków montaż trwa od 2 do 5 dni.
                    </p>
                {/if}
            </div>

            <!-- Pytanie 2 -->
            <div class="p-4 mb-4 rounded-lg shadow-2xl">
                <button
                        on:click={() => toggle(2)}
                        class="w-full text-left cursor-pointer text-white text-lg font-semibold focus:outline-none"
                >
                    Czy oferujecie serwis urządzeń po montażu?
                </button>
                {#if openIndex === 2}
                    <p class="text-gray-300 mt-2 text-sm">
                        Tak, oferujemy serwis urządzeń zarówno w okresie gwarancyjnym, jak i pogwarancyjnym. Zawsze możesz liczyć na nasze wsparcie techniczne.
                    </p>
                {/if}
            </div>

            <!-- Pytanie 3 -->
            <div class="p-4 mb-4 rounded-lg shadow-2xl">
                <button
                        on:click={() => toggle(3)}
                        class="w-full text-left cursor-pointer text-white text-lg font-semibold focus:outline-none"
                >
                    Jakie systemy instalacyjne oferujecie?
                </button>
                {#if openIndex === 3}
                    <p class="text-gray-300 mt-2 text-sm">
                        Specjalizujemy się w instalacji systemów klimatyzacyjnych, wentylacyjnych, grzewczych oraz systemów z rekuperacją. Współpracujemy z czołowymi producentami.
                    </p>
                {/if}
            </div>
        </div>
    </div>
</section>

<script>
    import { writable } from 'svelte/store';

    let openIndex = null;

    // Funkcja do otwierania/zamykania odpowiedzi
    function toggle(index) {
        openIndex = openIndex === index ? null : index;
    }
</script>