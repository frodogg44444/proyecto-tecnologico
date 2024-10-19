const form = document.getElementById('contactForm');
const formResponse = document.getElementById('formResponse');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const sugerencias = document.getElementById('sugerencias').value;
    // Aquí puedes agregar la lógica para enviar el formulario
    formResponse.textContent = `Gracias por tu sugerencia, ${sugerencias}!`;
});