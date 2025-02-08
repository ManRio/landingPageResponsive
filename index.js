document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".anchor-page");

  // Obtenemos la url actual
  const currentPage =
    window.location.pathname.split("/").pop().split("?")[0].toLowerCase() ||
    "Index.html";

  navLinks.forEach((link) => {
    if (link.getAttribute("href").split("?")[0].toLowerCase() === currentPage) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const menuContainer = document.querySelector(".menu-container");

  menuToggle.addEventListener("click", function () {
    menuContainer.classList.toggle("open");
  });
});
