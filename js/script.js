$(function () {
  "use strict"
  // Navbar Toggle Line Style add
  $('.toggle_btn').click(function () {
    $('.line1').toggleClass("active_line1");
    $('.line2').toggleClass("line_none");
    $('.line3').toggleClass("line_none");
    $('.line4').toggleClass("active_line2");
  });

  // Sticky Menu 
  $(window).scroll(function () {
    var sticky = $(this).scrollTop();
    if (sticky > 100) {
      $('.header').addClass('add');
    } else {
      $('.header').removeClass('add');
    }
  });


  //Back to Top Scroll
  $(".back_to_top").click(function () {
    $("html,body").animate({
      scrollTop: 0
    }, 1500)
  })



  // Story Part VenuBox
  $('.venobox').venobox();

  // Feedback Slider js
  $('.feedback_slider').slick({
    autoplay: true,
    infinite: true,
    arrows: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  // Whom Slider Part Start
  $('.whom_text_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.whom_slider_title'
  });
  $('.whom_slider_title').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.whom_text_slider',
    autoplay: true,
    dots: false,
    arrows: true,
    prevArrow: '<i class="fa fa-chevron-left prev_whom"></i>',
    nextArrow: '<i class="fa fa-chevron-right next_whom"></i>',
    centerMode: true,
    centerPadding: "0px",
    focusOnSelect: true
  });

  // Back To Top Button
  $(window).scroll(function () {
    var top = $(this).scrollTop();
    if (top > 300) {
      $(".back_to_top").addClass('show');
    } else {
      $(".back_to_top").removeClass('show');
    }
  })

  $(".back_to_top").click(function () {
    $("html,body").animate({
      scrollTop: 0
    }, 1500)
  })
});

var swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 30,
  effect: "fade",
  autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});



// Reset Files
function resetFile() {
  const file = document.querySelector('#admissionFile');
  const nationalId = document.querySelector('#nationalId');
  const eduCartificat = document.querySelector('#eduCartificat');
  file.value = '';
  nationalId.value = '';
  eduCartificat.value = '';
}