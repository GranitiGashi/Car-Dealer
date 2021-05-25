//Homepage Slider
$('.slider_img').slick({
  dots: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 1500,
  fade: true,
  fadeSpeed: 1000
})

//Single Cars Slider
$('.single_car_img').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  asNavFor: '.triple_car',
});
$('.triple_car').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.single_car_img',
  dots: false,
  centerMode: true,
  focusOnSelect: true,
  responsive: [
                            {
                              breakpoint: 1200,
                              settings: {
                                slidesToShow: 4,
                                slidesToScroll: 2
                              }
                            },
                            {
                              breakpoint: 1008,
                              settings: {
                                slidesToShow: 2,
                                slidesToScroll: 1
                              }
                            },
                            {
                              breakpoint: 991,
                              settings: {
                                slidesToShow: 3,
                                slidesToScroll: 1
                              }
                            },
                            {
                              breakpoint: 800,
                              settings: {
                                slidesToShow: 3,
                                slidesToScroll: 1
                              }
                            },
                            {
                              breakpoint: 768,
                              settings: {
                                slidesToShow: 2,
                                slidesToScroll: 1
                              }
                            },
                            {
                              breakpoint: 505,
                              settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                              }
                            }

                          ]
});