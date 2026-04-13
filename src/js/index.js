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

const toggle = document.querySelector(".nav__toggle");
const menu = document.querySelector(".nav__menu");
const links = document.querySelectorAll(".nav__link");

toggle.addEventListener("click", () => {
  toggle.classList.toggle("open");
  menu.classList.toggle("open");

  document.body.classList.toggle("no-scroll");
});

links.forEach(link => {
  link.addEventListener("click", () => {
    toggle.classList.remove("open");
    menu.classList.remove("open");
    document.body.classList.remove("no-scroll");
  });
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    toggle.classList.remove("open");
    menu.classList.remove("open");
    document.body.classList.remove("no-scroll");
  }
});