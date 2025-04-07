document.addEventListener("DOMContentLoaded", function () {
    // Плавный скролл по якорным ссылкам
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId.startsWith("#")) {
                document.querySelector(targetId).scrollIntoView({
                    behavior: 'smooth'
                });
            } else {
                window.location.href = targetId;
            }
        });
    });

    // Анимация кнопки при наведении
    const btn = document.querySelector('.btn');
    btn.addEventListener('mouseover', function () {
        this.style.background = "#ff4b2b";
        this.style.color = "#fff";
    });
    btn.addEventListener('mouseout', function () {
        this.style.background = "#fff";
        this.style.color = "#ff4b2b";
    });

    // Замена изображений при клике
    document.querySelectorAll('.artist img').forEach(img => {
        img.addEventListener('click', function () {
            if (this.src.includes("slava_kpss.jpg")) {
                this.src = "photo/zamay.jpg";
            } else {
                this.src = "photo/slava_kpss.jpg";
            }
        });
    });
});
