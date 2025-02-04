new Swiper(".card-wrapper", {
  loop: true,
  spaceBetween: 30,

  // Pagination bullets
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // Responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    1266: {
      slidesPerView: 1,
    },
    1366: {
      slidesPerView: 1.5,
    },
  },
});

document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".header__hamburger");
  const mobileMenu = document.querySelector(".header__mobile-menu");
  const body = document.body;

  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("active"); // Добавляем/убираем класс active
    mobileMenu.classList.toggle("active"); // Открываем/закрываем мобильное меню
    body.classList.toggle("menu-open"); // Отключаем/включаем прокрутку
  });

  // Закрытие меню при клике вне его
  mobileMenu.addEventListener("click", function (event) {
    if (event.target === mobileMenu) {
      mobileMenu.classList.remove("active"); // Закрываем мобильное меню
      hamburger.classList.remove("active"); // Убираем класс active у бургера
      body.classList.remove("menu-open"); // Включаем прокрутку
    }
  });
});
