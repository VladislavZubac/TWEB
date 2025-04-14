document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact-form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    // Загружаем сохранённые данные
    nameInput.value = localStorage.getItem("name") || "";
    emailInput.value = localStorage.getItem("email") || "";
    messageInput.value = localStorage.getItem("message") || "";

    // Сохранение данных при вводе
    nameInput.addEventListener("input", () => localStorage.setItem("name", nameInput.value));
    emailInput.addEventListener("input", () => localStorage.setItem("email", emailInput.value));
    messageInput.addEventListener("input", () => localStorage.setItem("message", messageInput.value));

    // Валидация email
    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    // Обработчик отправки формы
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Останавливаем стандартную отправку

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();

        if (!name || !email || !message) {
            alert("Пожалуйста, заполните все поля.");
            return;
        }

        if (!validateEmail(email)) {
            alert("Введите корректный email.");
            return;
        }

        // Очистка localStorage и формы после успешной отправки
        localStorage.removeItem("name");
        localStorage.removeItem("email");
        localStorage.removeItem("message");
        form.reset();

        alert("Спасибо! Ваше сообщение отправлено.");
    });
});
