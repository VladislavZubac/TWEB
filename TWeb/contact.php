<?php
// Обработка формы
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = strip_tags(trim($_POST["message"]));

    if ($name && $email && $message) {
        $date = date("Y-m-d H:i:s");
        $log = "Дата: $date\nИмя: $name\nEmail: $email\nСообщение: $message\n------------------------\n";

        file_put_contents("messages.json", $log, FILE_APPEND | LOCK_EX);

        $successMessage = "Спасибо! Ваше сообщение отправлено.";
    } else {
        $errorMessage = "Пожалуйста, заполните все поля.";
    }
}
?>

<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Контакты - Антихайп</title>
    <link rel="stylesheet" href="css/contact.css">
</head>
<body>
<header>
    <div class="container">
        <h1>Антихайп</h1>
        <nav>
            <ul>
                <li><a href="index.php">Главная</a></li>
                <li><a href="about.php">О нас</a></li>
                <li><a href="artists.php">Участники</a></li>
                <li><a href="music.php">Музыка</a></li>
                <li><a href="contact.php">Контакты</a></li>
            </ul>
        </nav>
    </div>
</header>
<main>
    <section class="contact">
        <div class="container">
            <h2>Свяжитесь с нами</h2>
            <p>Если у вас есть вопросы, предложения или идеи для сотрудничества, заполните форму ниже.</p>

            <?php if (!empty($successMessage)) : ?>
                <p class="success"><?= htmlspecialchars($successMessage) ?></p>
            <?php elseif (!empty($errorMessage)) : ?>
                <p class="error"><?= htmlspecialchars($errorMessage) ?></p>
            <?php endif; ?>

            <form class="contact-form" method="POST" action="contact.php">
                <label for="name">Ваше имя:</label>
                <input type="text" id="name" name="name" placeholder="Введите ваше имя" required>

                <label for="email">Ваш email:</label>
                <input type="email" id="email" name="email" placeholder="Введите ваш email" required>

                <label for="message">Сообщение:</label>
                <textarea id="message" name="message" rows="5" placeholder="Введите ваше сообщение" required></textarea>

                <button type="submit">Отправить</button>
            </form>
        </div>
    </section>
</main>
<footer>
    <div class="container">
        <p>&copy; 2025 Антихайп. Все права защищены.</p>
    </div>
</footer>
</body>
</html>
