<script>
    // Lista logo producentów
    const logos = [
        "/assets/logos/fuji.jpg",
        "/assets/logos/jeven.png",
        "/assets/logos/klimor.jpg",
        // Możesz dodać więcej logotypów, jeśli jest taka potrzeba
        "/assets/logos/lennox.png",
        "/assets/logos/lg.png",
        "/assets/logos/mdv.png",
        "/assets/logos/midea.png",
        "/assets/logos/mit.jpg",
        "/assets/logos/swegon.jpg",
    ];
</script>

<div class="producers" id="producers">
    <h2 class="text-blue-950 text-3xl font-bold font-roboto">Nasi Producenci</h2>
    <div class="logos-carousel">
        {#each logos as logo}
            <div class="logo-item">
                <img src={logo} alt="Logo producenta" loading="lazy" />
            </div>
        {/each}
    </div>
</div>

<style>
    .producers {
        margin-top: 40px;
        text-align: center;
    }

    .logos-carousel {
        display: flex;
        overflow-x: auto; /* Włączenie przewijania poziomego */
        scroll-snap-type: x mandatory; /* Dodanie "zaczepów" */
        gap: 16px; /* Odstępy między logotypami */
        padding: 16px;
        scroll-behavior: smooth; /* Płynne przewijanie */
        justify-content: center;
    }

    .logo-item {
        flex: 0 0 auto; /* Zapewnienie, że elementy nie będą zawijać się w nowy rząd */
        width: 120px; /* Szerokość logotypu */
        height: 120px; /* Wysokość logotypu */
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 8px;
        /*box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); !* Opcjonalny cień *!*/
        scroll-snap-align: center; /* Wyrównanie logo do środka widocznego obszaru */
    }

    .logo-item img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain; /* Dopasowanie wymiarów logotypu */
        /*filter: grayscale(100%); !* Konwersja kolorowego obrazka na skalę szarości *!*/
    }

    .logos-carousel::-webkit-scrollbar {
        height: 8px; /* Dostosowanie widoczności scrollbara */
    }

    .logos-carousel::-webkit-scrollbar-thumb {
        background-color: #ccc;
        border-radius: 4px;
    }

    .logos-carousel::-webkit-scrollbar-track {
        background-color: #f9f9f9;
    }
</style>