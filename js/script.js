document.addEventListener("DOMContentLoaded", function () {
  // 1. Abrir y cerrar el menú en celular
  const menuButton = document.getElementById("menu-button");
  const menu = document.getElementById("menu");

  if (menuButton && menu) {
    menuButton.addEventListener("click", function () {
      menu.classList.toggle("header__nav--active");
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
