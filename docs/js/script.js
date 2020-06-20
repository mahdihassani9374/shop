$(function () {

  // setTimeout(function () {
  //    toastr.success('سلام خوش آمدید ');
  // }, 2000);

  // Swal.fire({
  //   icon: 'success',
  //   title: 'تبریک',
  //   text: 'عملیات با موفقیت انجام شد ',  
  //   confirmButtonText:'بستن'  
  // })

  $('.slick__item').slick({
    infinite: false,
    // centerMode: false,
    // centerPadding: '60px',
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    focusOnSelect: false,
    accessibility: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

  $('[data-role="slick-left"]').on('click', function () {
    $('.slick__item').slick('slickPrev');
  })
  $('[data-role="slick-right"]').on('click', function () {
    $('.slick__item').slick('slickNext');
  })
})