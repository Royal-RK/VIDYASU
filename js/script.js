const menuBtn = document.querySelector(".navbar-toggler");
const navMenu = document.querySelector(".offcanvas");

let open = true;

menuBtn.addEventListener("click", () => {
  if (open == true) {
    menuBtn.classList.remove("showOn");
    navMenu.style.right = "-100%";
    document.body.classList.remove("no-scroll");
    open = false;
  } else {
    menuBtn.classList.add("showOn");
    navMenu.style.right = "0";
    document.body.classList.add("no-scroll");
    open = true;
  }
});
