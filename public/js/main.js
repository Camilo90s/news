const iconMenu = document.querySelector("#icon");
const menu = document.querySelector("#menu");
const panel = document.querySelector("#panel");

const menuStates = {
  open: "bg-menu-open",
  close: "bg-menu-close"
}

iconMenu.addEventListener("click", () => {

  if (iconMenu.classList.contains(menuStates.open)) {

    // ABRIR
    iconMenu.classList.replace(menuStates.open, menuStates.close);
    menu.classList.remove("opacity-0", "pointer-events-none");

    // BLOQUEAR SCROLL
    document.body.classList.add("overflow-hidden");

    // pequeño delay para que el fondo aparezca primero
    setTimeout(() => {
      panel.classList.remove("translate-x-full");
      panel.classList.add("translate-x-0");
    }, 80);

  } else {
    closeMenu();
  }

});


function closeMenu() {
    // CERRAR
    iconMenu.classList.replace(menuStates.close, menuStates.open);
    panel.classList.remove("translate-x-0");
    panel.classList.add("translate-x-full");

    menu.classList.add("opacity-0", "pointer-events-none");

    // RESTAURAR SCROLL
    document.body.classList.remove("overflow-hidden");
}

menu.addEventListener("click", (e) => {

  if (e.target === e.currentTarget) {
    closeMenu();
  }

});


window.addEventListener('resize', () => {
    iconMenu.classList.replace(menuStates.close, menuStates.open);

    panel.classList.remove("translate-x-0");
    menu.classList.add("opacity-0");
    menu.classList.add("pointer-events-none");

    // RESTAURAR SCROLL
  document.body.classList.remove("overflow-hidden");
})