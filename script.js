// Dropdown

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

const handleOverEvent = function (e) {
  toggleMenu(e);
};

const handleOutEvent = function (e) {
  toggleOpenedMenu(e);
};

function toggleOpenedMenu(e) {
  e.target.parentElement.addEventListener("mouseleave", (event) => {
    toggleMenu(event);
  });
}

document
  .querySelectorAll(".menu-btn-head")
  .forEach((item) => item.addEventListener("mouseover", handleOverEvent));
document
  .querySelectorAll(".menu-btn-head")
  .forEach((item) => item.addEventListener("mouseout", handleOutEvent));

// Side menu mobile/tablet

function openMobileMenu() {
  document.querySelector(".mobile-navbar-body").style.width = "75%";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeMobileMenu() {
  document.querySelector(".mobile-navbar-body").style.width = "0";
  document.body.style.backgroundColor = "white";
}

document
  .querySelector(".navbar-burger")
  .addEventListener("click", openMobileMenu);
document
  .querySelector(".navbar-burger-close")
  .addEventListener("click", closeMobileMenu);

document
  .querySelectorAll(".mobile-navbar .mobile-menu-btn-head")
  .forEach((item) => {
    item.addEventListener("click", function () {
      let panel = item.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
        item
        .querySelectorAll(".arrow")
        .forEach((item) => item.classList.toggle("hidden"));
      } else {
        panel.style.maxHeight = panel.scrollHeight + 30 + "px";
        item
        .querySelectorAll(".arrow")
        .forEach((item) => item.classList.toggle("hidden"));
      }
    });
  });

document.querySelector('.container').addEventListener("click", () => {
  if(!!document.querySelector(".mobile-navbar-body").style.width){
      document.querySelector(".mobile-navbar-body").style.width = "0px";
      document.body.style.backgroundColor = "rgba(0,0,0,0)";
  }
}
);
