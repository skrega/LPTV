$(function () {
  let mainWrapperHeigth = $(".main-wrapper").height();
  if (mainWrapperHeigth) {
    $(".header").addClass("light");
    $(".header-btn").removeClass("btn-primary");
  }
  $(window).on("scroll", function () {
    let scrollPos = 0;
    let scroll = $(this).scrollTop();

    if (scroll > mainWrapperHeigth) {
      $(".header").removeClass("light");
      $(".header-btn").addClass("btn-primary");
    } else if (scroll === scrollPos && mainWrapperHeigth) {
      $(".header").addClass("light");
      $(".header-btn").removeClass("btn-primary");
    }

    scrollPos = scroll;
  });
  // btn menu
  $(".btn-menu").on("click", function () {
    $(this).toggleClass("open");
    $("body").toggleClass("overflow");
    $(".main-menu__inner").toggleClass("open");
  });
  $(".main-menu__inner a").on("click", function () {
    $(".btn-menu").removeClass("open");
    $("body").removeClass("overflow");
    $(".main-menu__inner").removeClass("open");
  });

  //swiper
  const mainSwiper = new Swiper(".main-swiper", {
    loop: false,
    speed: 900,
    effect: "fade",
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
      hide: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  const stepsItems = new Swiper(".steps__items", {
    slidesPerView: 1,
    spaceBetween: 10,
    slidesPerGroup: 1,
    // autoHeight: true,
    speed: 1000,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 32,
        slidesPerGroup: 2,
      },
      1366: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
      1440: {
        slidesPerView: 3,
        spaceBetween: 100,
      },
      1600: {
        slidesPerView: 3,
        spaceBetween: 100,
      },
    },
  });

  // if (video.paused) {
  //   video.play();
  // } else {
  //   video.pause();
  // }
  // video

  // let video = document.querySelector(".project-video");
  // video.addEventListener(
  //   "click",
  //   function () {
  //     if (video.paused) {
  //       video.play();
  //     } else {
  //       video.pause();
  //     }
  //   },
  //   false
  // );
  if ($(window).width() > 1101) {
    new Swiper(".project-gallary", {
      slidesPerView: "auto",
      spaceBetween: 2,
      freeMode: true,
      speed: 800,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }
  new Swiper(".projects-swiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    freeMode: true,
    speed: 1000,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1366: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });

  //spoller
  $.each($(".spoller.active"), function (index, val) {
    $(this).next().show();
  });
  $("body").on("click", ".spollers__item", function (event) {
    if (
      $(this).find(".spoller").find(".spoller").hasClass("mob") &&
      !isMobile.any()
    ) {
      return false;
    }
    if (
      $(this).find(".spoller").hasClass("closeall") &&
      !$(this).find(".spoller").hasClass("active")
    ) {
      $.each(
        $(this).closest(".spollers").find(".spoller"),
        function (index, val) {
          $(this).removeClass("active");
          $(this).next().slideUp(300);
        }
      );
    }
    $(this)
      .find(".spoller")
      .toggleClass("active")
      .next()
      .slideToggle(300, function (index, val) {
        if ($(this).parent().find(".slick-slider").length > 0) {
          $(this).parent().find(".slick-slider").slick("setPosition");
        }
      });
    return false;
  });

  // responsive
  let projectWrapper = $(".project-wrapper").height();
  if ($(window).width() < 1101) {
    $(".header-contacts").appendTo(".main-menu__box");
    if (projectWrapper > 0) {
      $(".header").removeClass("light");
      $(".header-btn").addClass("btn-primary");
      $(window).on("scroll", function () {
        $(".header").removeClass("light");
        $(".header-btn").addClass("btn-primary");
      });
    }
  }
});
