function toggleMenu(e) {
  if (!document.querySelectorAll(".menu-active").length) {
    if (e.target.className === "menu-btn-head") {
      let elem = e.target;
      elem.nextElementSibling.classList.toggle("menu-active");
      elem
        .querySelectorAll(".arrow")
        .forEach((item) => item.classList.toggle("hidden"));
    }
  } else {
    document.querySelectorAll(".menu-active").forEach((item) => {
      if (item.classList.contains("menu-active")) {
        item.classList.toggle("menu-active");
        e.target
          .querySelectorAll(".arrow")
          .forEach((item) => item.classList.toggle("hidden"));
      }
    });
  }
}

function toggleOpenedMenu(e) {
  e.target.parentElement.addEventListener("mouseleave", (event) => {
    toggleMenu(event);
  });
}

document
  .querySelectorAll(".menu-btn-head")
  .forEach((item) => item.addEventListener("mouseover", (e) => toggleMenu(e)));
document.querySelectorAll(".menu-btn-head").forEach((item) =>
  item.addEventListener("mouseout", (e) => {
    toggleOpenedMenu(e);
  })
);
