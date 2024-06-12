// Toggle class active

const navbarNav = document.querySelector(".navbar-nav");

// ketika menu di klik
document.querySelector("#menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik di luar sidebar untuk menghilangkan nav
const menus = document.querySelector("#menu");

document.addEventListener("click", function (e) {
  if (!menus.containts(e.target) && !navbarNav.containts(e.target)) {
    navbarNav.classList.remove("active");
  }
});
