import React from "react";
import Slider from "react-slick";




export default function SimpleSlider() {
  var settings = {
    centerMode: true,
    centerPadding: '60px',
    
    slidesToShow: 3,
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
  };
  return (
    <Slider {...settings}>
      <div className="swiper-slide">
      <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
      </div>
      <div className="swiper-slide">
      <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
      </div>
      <div className="swiper-slide">
      <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
      </div>
      <div className="swiper-slide">
      <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
      </div>
      <div className="swiper-slide">
      <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
      </div>
      <div className="swiper-slide">
      <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
      </div>
    </Slider>
  );
}
