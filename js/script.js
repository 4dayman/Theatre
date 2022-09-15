var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  var swiper2 = new Swiper(".mySwiper1", {
    slidePerview: 2,
    grabCursor: true,

    breakpoints: {
        1910: {
            slidesPerView: 3,
        },
    },
    });