$(document).ready(function () {
    $('.contact-form').on('submit', function (e) {
        e.preventDefault(); // Отменяем стандартную отправку формы

        $.ajax({
            url: 'contact.php',
            type: 'POST',
            data: $(this).serialize(),
            success: function (response) {
                const html = $(response).find('.success, .error').html();
                if (html) {
                    $('.contact-form').before(`<p class="response">${html}</p>`);
                }
                $('.contact-form')[0].reset();
            },
            error: function () {
                $('.contact-form').before('<p class="error">Ошибка при отправке формы. Попробуйте позже.</p>');
            }
        });
    });
});

