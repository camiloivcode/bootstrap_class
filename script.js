// VALIDACIÓN DEL FORMULARIO
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita envío

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (name === '' || email === '' || message === '') {
    alert('Por favor, completa todos los campos.');
  } else if (!emailRegex.test(email)) {
    alert('Por favor, ingresa un correo válido.');
  } else {
    alert('Formulario enviado correctamente.');
    document.getElementById('contactForm').reset();
  }
});
