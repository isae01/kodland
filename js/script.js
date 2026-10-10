document.addEventListener("DOMContentLoaded", function () {
  // 1. Abrir y cerrar el menú en celular con actualización de accesibilidad ARIA
  const menuButton = document.getElementById("menu-button");
  const menu = document.getElementById("menu");

  if (menuButton && menu) {
    menuButton.addEventListener("click", function () {
      const isActive = menu.classList.toggle("header__nav--active");

      // CORREGIDO: Actualiza dinámicamente el atributo de accesibilidad para lectores de pantalla
      menuButton.setAttribute("aria-expanded", isActive);
    });
  }

  // 2. Mostrar un mensaje al presionar comprar
  const buyButtons = document.querySelectorAll(".product-card__button");

  buyButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      alert("Спасибо за покупку!");
    });
  });
});
