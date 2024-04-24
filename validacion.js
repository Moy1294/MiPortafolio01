document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const nombre = document.querySelector('input[name="nombre"]');
    const email = document.querySelector('input[name="email"]');
    const asunto = document.querySelector('input[name="asunto"]');
    const mensaje = document.querySelector('textarea[name="mensaje"]');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Validar el campo de nombre
        if (nombre.value.trim() === '') {
            alert('Por favor, ingresa tu nombre.');
            nombre.focus();
            return;
        }

        // Validar el campo de email
        if (email.value.trim() === '') {
            alert('Por favor, ingresa tu email.');
            email.focus();
            return;
        } else if (!isValidEmail(email.value.trim())) {
            alert('Por favor, ingresa un email válido.');
            email.focus();
            return;
        }

        // Validar el campo de asunto
        if (asunto.value.trim() === '') {
            alert('Por favor, ingresa un asunto.');
            asunto.focus();
            return;
        }

        // Validar el campo de mensaje
        if (mensaje.value.trim() === '') {
            alert('Por favor, ingresa un mensaje.');
            mensaje.focus();
            return;
        }

        // Si todos los campos son válidos, enviar el formulario
        form.submit();
    });

    // Función para validar el formato de email
    function isValidEmail(email) {
        // Expresión regular para validar el formato de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});