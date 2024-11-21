const btnMenuToggle = document.getElementById("btn-menu-toggle");
const menuResponsive = document.getElementById("menu-responsive");

btnMenuToggle.addEventListener("click", () => {
  menuResponsive.classList.remove("hidden");

  if (menuResponsive.classList.contains("slideDown")) {
    menuResponsive.classList.remove("slideDown");
    menuResponsive.classList.add("slideUp");
    setTimeout(() => {
      menuResponsive.classList.add("hidden");
    }, 559);
  } else {
    menuResponsive.classList.remove("slideUp");
    menuResponsive.classList.add("slideDown");
  }
});

window.addEventListener("resize", () => {
  if (innerWidth > 639) {
    menuResponsive.classList.add("hidden");
  }
});
