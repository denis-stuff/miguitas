import '../styles/main.scss';

document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const nombre = document.getElementById("name").value;
  const correo = document.getElementById("email").value;
  const mensaje = document.getElementById("message").value;

  const texto = `Hola, tengo un antojo 🍰%0A
Nombre: ${nombre}%0A
Correo: ${correo}%0A
Mensaje: ${mensaje}`;

  const numero = "50230002206";

  const url = `https://wa.me/${numero}?text=${texto}`;

  window.open(url, "_blank");
});