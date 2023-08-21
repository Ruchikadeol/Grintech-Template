import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./testimonial.css";
import testimonialbg from "../../assets/images/testi-bg.webp"
import t1 from "../../assets/images/t1.png";
import qlt from "../../assets/images/q-lt.png";
import qrt from "../../assets/images/q-rt.png";

// import required modules
import { Autoplay, Navigation } from "swiper";

const Testim = () => {
  return (
    <section id="testimonial-slider" className="testimonial-slider"  style={{backgroundImage: `url(${testimonialbg})` }}>
        <div className="container">
            <div className="testi-head pb-3">
              <h2>What Our Client Says</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply <br />dummy text of the printing and typesetting industry.</p>
            </div>
            <div className="row quote-area">
            <img src={qlt} className="q-lt"  alt="left quote"/>
            <img src={qrt} className="q-rt"  alt="right quote"/>
            <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                    }}
                    pagination={{
                    clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Navigation]}
                    className="mySwiper">
                <SwiperSlide>
                    <div className="main-slide col-lg-6 mx-auto">
                        <img src={t1} className="img-fluid rounded-circle"  alt="t1"/>
                        <div className="myCarousel">
                            <div class="ratings">
                                <i class="fa fa-star rating-color"></i>
                                <i class="fa fa-star rating-color"></i>
                                <i class="fa fa-star rating-color"></i>
                                <i class="fa fa-star rating-color"></i>
                                <i class="fa fa-star rating-color"></i>
                            </div>
                            <h5 className="mb-0">Shirley Fultz</h5>
                            <small>Sydney, Australia</small>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="main-slide col-lg-6 mx-auto">
                        <img src={t1} className="img-fluid rounded-circle"  alt="t1"/>
                        <div className="myCarousel">
                            <div class="ratings">
                                <i class="fa fa-star rating-color"></i>
                                <i class="fa fa-star rating-color"></i>
                                <i class="fa fa-star rating-color"></i>
                                <i class="fa fa-star rating-color"></i>
                                <i class="fa fa-star rating-color"></i>
                            </div>
                            <h5 className="mb-0">Shirley Fultz</h5>
                            <small>Sydney, Australia</small>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="main-slide col-lg-6 mx-auto">
                        <img src={t1} className="img-fluid rounded-circle"  alt="t1"/>
                        <div className="myCarousel">
                            <div class="ratings">
                                <i class="fa fa-star rating-color"></i>
                                <i class="fa fa-star rating-color"></i>
                                <i class="fa fa-star rating-color"></i>
                                <i class="fa fa-star rating-color"></i>
                                <i class="fa fa-star rating-color"></i>
                            </div>
                            <h5 className="mb-0">Shirley Fultz</h5>
                            <small>Sydney, Australia</small>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="main-slide col-lg-6 mx-auto">
                        <img src={t1} className="img-fluid rounded-circle"  alt="t1"/>
                        <div className="myCarousel">
                            <div class="ratings">
                                <i class="fa fa-star rating-color"></i>
                                <i class="fa fa-star rating-color"></i>
                                <i class="fa fa-star rating-color"></i>
                                <i class="fa fa-star rating-color"></i>
                                <i class="fa fa-star rating-color"></i>
                            </div>
                            <h5 className="mb-0">Shirley Fultz</h5>
                            <small>Sydney, Australia</small>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Testim