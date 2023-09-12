

$(function () {
  $('.center2').slick({
    centerPadding: '0',
    slidesToShow: 1,
    initialSlide: 0,
    infinite: false,
    focusOnSelect: true,
    variableWidth: true,
    prevArrow: document.getElementsByClassName('CommunityPrevBtn'),
    nextArrow: document.getElementsByClassName('CommunityNextBtn'),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerMode:true,
          centerPadding: '0',
          slidesToShow: 1,
          initialSlide: 1,
          variableWidth: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          autoplay:false,
          centerMode: true,
          centerPadding: '0',
          slidesToShow: 1,
          initialSlide: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: true,
          centerPadding: '0',
          slidesToShow: 1,
          initialSlide: 1,
        }
      }
    ]
  });
  })
  
  