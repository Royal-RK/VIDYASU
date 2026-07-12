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

// About Swiper slider
let swiper = new Swiper(".prgrm-swiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 3000,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      // spaceBetween: 50,
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});
