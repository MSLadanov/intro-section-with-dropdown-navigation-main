function toggleMenu(e) {
  let elem = e.target;
  elem.nextElementSibling.classList.toggle("menu-active");
  elem
    .querySelectorAll(".arrow")
    .forEach((item) => item.classList.toggle("hidden"));
}

document
  .querySelectorAll(".menu-btn-head")
  .forEach((item) => item.addEventListener("click", (e) => toggleMenu(e)));
