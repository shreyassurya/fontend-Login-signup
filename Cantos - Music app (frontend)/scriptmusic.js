const menuOpen = document.getElementById("menu-open");
const menuClose = document.getElementById("menu-close");
const sidebar = document.querySelector(".container .sidebar");

menuOpen.addEventListener("click", () => (sidebar.style.left = "0"));

menuClose.addEventListener("click", () => (sidebar.style.left = "-100%"));

// ----------------------------------------------------------------------------

let profileDropdownList = document.querySelector(
  ".container .right-section .profile .profile-dropdown-list"
);
let btn = document.querySelector(".container .right-section .profile .left");

let classList = profileDropdownList.classList;

const toggle = () => classList.toggle("active");

window.addEventListener("click", function (e) {
  if (!btn.contains(e.target)) classList.remove("active");
});
