import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "./socialslider.css";

import {EffectCoverflow, Autoplay, Navigation } from "swiper";

const Socialslide = () => {
  return (
    <section id="social-slider" className="social-slider">
        <div className="container">
            <div className="testi-head pb-3">
              <h2>Follow us on social media</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply <br />dummy text of the printing and typesetting industry.</p>
            </div>
            <div className="row quote-area">
            <Swiper
                 effect={"coverflow"}
                 grabCursor={true}
                 centeredSlides={true}
                 slidesPerView={"auto"}
                 coverflowEffect={{
                   rotate: 50,
                   stretch: 0,
                   depth: 100,
                   modifier: 1,
                   slideShadows: true,
                 }}
                 autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                 }}
                pagination={{
                clickable: true,
                }}
                navigation={true}
                modules={[EffectCoverflow, Autoplay, Navigation]}
                className="mySwiper">
                <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-1.jpg"  className="img-fluid"/>
                </SwiperSlide>
                <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-2.jpg"  className="img-fluid"/>
                </SwiperSlide>
                <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-3.jpg" className="img-fluid" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-4.jpg"  className="img-fluid"/>
                </SwiperSlide>
                <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-5.jpg"  className="img-fluid"/>
                </SwiperSlide>
                <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-6.jpg" className="img-fluid" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-7.jpg" className="img-fluid" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-8.jpg"  className="img-fluid"/>
                </SwiperSlide>
                <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-9.jpg" className="img-fluid" />
                </SwiperSlide>
            </Swiper>
            
        </div>
      </div>
    </section>
  );
}

export default Socialslide