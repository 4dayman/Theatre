$(function() {
  let header = $('.header');
  let hederHeight = header.height(); // вычисляем высоту шапки
  let mobileTel = $('.header__tel').first();  // сохранем в переменную первый элемент с классом header__tel
 
  if($(this).scrollTop() > 500) {
    mobileTel.fadeOut();
  } else {
    mobileTel.fadeIn();
  }
  $(window).scroll(function() {
    if($(this).scrollTop() > 1) {
     header.addClass('header_fixed');
     $('body').css({
        'paddingTop': hederHeight+'px' // делаем отступ у body, равный высоте шапки
     });
    } else {
     header.removeClass('header_fixed');
     $('body').css({
      'paddingTop': 0 // удаляю отступ у body, равный высоте шапки
     })
    }
  });
 });




var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
    // loop: true,
    navigation: {
      nextEl: ".custom-next,.swiper-button-next",
      prevEl: ".custom-prev,.swiper-button-prev",
    },
  });
  var swiper = new Swiper(".mySwiper1", {
    slidesPerView: 3,
    // loop: true,
    grabCursor: true,
    simulateTouch: true,
    initialSlide: 0,
breakpoints: {
        320: {
          slidesPerView: 0.5,
        },
        425: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1,
        },
        1024: {
          slidesPerView: 1,
        },
      },
    });
    var swiper = new Swiper(".partners_container", {
      slidesPerView: 1,
      // loop: true,
      grabCursor: true,
      simulateTouch: true,
      initialSlide: 0,
      // centeredSlides: true,
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        425: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1,
        },
        1024: {
          slidesPerView: 1.3,
        },
      },
      });
  