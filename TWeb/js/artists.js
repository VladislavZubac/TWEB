document.addEventListener("DOMContentLoaded", function () {
    // Увеличение изображения при наведении
    document.querySelectorAll('.artist img').forEach(img => {
        img.addEventListener('mouseover', function () {
            this.style.transform = "scale(1.1)";
            this.style.transition = "0.3s ease-in-out";
        });
        img.addEventListener('mouseout', function () {
            this.style.transform = "scale(1)";
        });
    });

    // Всплывающее уведомление при клике на артиста
    document.querySelectorAll('.artist').forEach(artist => {
        artist.addEventListener('click', function () {
            const name = this.querySelector('h3').textContent;
            alert(`Вы выбрали артиста: ${name}`);
        });
    });

    // Смена изображения артиста при клике
    const artistImages = {
        "slava_kpss.jpg": "photo/slava_kpss_alt.jpg",
        "zamay.jpg": "photo/zamay_alt.jpg",
        "sd.jpg": "photo/sd_alt.jpg",
        "lida.jpg": "photo/lida_alt.jpg",
        "vorovskaya_lapa.jpg": "photo/vorovskaya_lapa_alt.jpg",
        "mazelov.jpg": "photo/mazelov_alt.jpg"
    };

    document.querySelectorAll('.artist img').forEach(img => {
        img.addEventListener('click', function (event) {
            event.stopPropagation(); 
            const src = this.src.split('/').pop(); // Получаем имя файла
            if (artistImages[src]) {
                this.src = artistImages[src]; // Меняем фото на альтернативное
            } else {
        
                this.src = `photo/${Object.keys(artistImages).find(key => artistImages[key] === src) || src}`;
            }
        });
    });
});
