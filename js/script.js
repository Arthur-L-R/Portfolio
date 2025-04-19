document.querySelectorAll('a[href]').forEach(link => {
    // Ignora links que começam com #
    if (link.getAttribute('href').startsWith('#')) return;

    link.addEventListener('click', function (e) {
        e.preventDefault(); // Impede a troca imediata
        
        const destino = this.getAttribute('href');

        const tv = document.getElementById('tv-video-transition');
        // Ativa a animação
        tv.classList.add('ativa');

        const video = document.getElementById('tv-video-transition');
        video.muted = false; // Desmuta o vídeo
        video.play(); // Começa a tocar o vídeo

        // Espera a animação e troca de página
        setTimeout(() => {
            // Troca a página
            window.location.href = destino;
        }, 7000); // Duração do vídeo em milissegundos
    });
});