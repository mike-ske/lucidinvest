'use client';

import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation, EffectFade],
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true, // fade effect works best with loop enabled
  effect: "fade", // 👈 enable fade effect
  fadeEffect: {
    crossFade: true, // smooth crossfade
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".owl-next",
    prevEl: ".owl-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: { slidesPerView: 1 },
    575: { slidesPerView: 1 },
    767: { slidesPerView: 1 },
    991: { slidesPerView: 1 },
    1199: { slidesPerView: 1 },
    1350: { slidesPerView: 1 },
  },
};

export default function Trading() {
  return (
    <>
        <section className="trading-tools-style1">
            <div className="trading-tools-style1__bgshape"
                style={{ backgroundImage: "url(/assets/images/shapes/trading-tools-style1__shape.png)" }}></div>
            <div className="trading-tools-style1__bgimg"
                style={{ backgroundImage: "url(/assets/images/backgrounds/trading-tools-style1__bg.jpg)" }}></div>
            <div className="container">
                <div className="trading-tools-style1__content">
                    <div className="sec-title">
                        <div className="sub-title">
                            <h4>Trading Tools</h4>
                        </div>
                        <h2>Powerful Tools<br /> for Smarter Trading</h2>
                    </div>
                    <div className="trading-tools-style1__content-inner">
                        <Swiper {...swiperOptions} className="tools-carousel">
                            <SwiperSlide>
                                <div className="single-slide">
                                    <div className="single-trading-tools-style1">
                                        <div className="icon">
                                            <span className="icon-transfer"><span className="path1"></span><span
                                                    className="path2"></span><span className="path3"></span><span
                                                    className="path4"></span><span className="path5"></span><span
                                                    className="path6"></span><span className="path7"></span><span
                                                    className="path8"></span></span>
                                        </div>
                                        <div className="title-box">
                                            <h3>
                                                <Link href="#">Free Currency Converter</Link>
                                            </h3>
                                            <div className="counting">01</div>
                                        </div>
                                        <div className="text-box">
                                            <p>Error voluptatem accusantium dolor
                                                emque laudantium totam aperio non
                                                inventore veritatis quasi.</p>
                                        </div>
                                        <div className="btn-box">
                                            <Link href="#">
                                                Use Our Tool
                                                <i className="icon-right-arrow"></i>
                                            </Link>
                                        </div>
                                        <div className="single-trading-tools-style1__nextitem">
                                            <div className="counting-box">02</div>
                                            <h3>Margin Calulator</h3>
                                        </div>
                                        <div className="single-trading-tools-style1__nextitem right">
                                            <div className="counting-box">03</div>
                                            <h3>Pip Value Calculator</h3>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="single-slide">
                                    <div className="single-trading-tools-style1">
                                        <div className="icon">
                                            <span className="icon-bill"><span className="path1"></span><span
                                                    className="path2"></span><span className="path3"></span><span
                                                    className="path4"></span><span className="path5"></span><span
                                                    className="path6"></span></span>
                                        </div>
                                        <div className="title-box">
                                            <h3>
                                                <Link href="#">Margin<br /> Calulator</Link>
                                            </h3>
                                            <div className="counting">02</div>
                                        </div>
                                        <div className="text-box">
                                            <p>
                                                Error voluptatem accusantium dolor
                                                emque laudantium totam aperio non
                                                inventore veritatis quasi.
                                            </p>
                                        </div>
                                        <div className="btn-box">
                                            <Link href="#">
                                                Use Our Tool
                                                <i className="icon-right-arrow"></i>
                                            </Link>
                                        </div>
                                        <div className="single-trading-tools-style1__nextitem">
                                            <div className="counting-box">03</div>
                                            <h3>Margin Calulator</h3>
                                        </div>
                                        <div className="single-trading-tools-style1__nextitem right">
                                            <div className="counting-box">01</div>
                                            <h3>Pip Value Calculator</h3>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="single-slide">
                                    <div className="single-trading-tools-style1">
                                        <div className="icon">
                                            <span className="icon-transfer"><span className="path1"></span><span
                                                    className="path2"></span><span className="path3"></span><span
                                                    className="path4"></span><span className="path5"></span><span
                                                    className="path6"></span><span className="path7"></span><span
                                                    className="path8"></span></span>
                                        </div>
                                        <div className="title-box">
                                            <h3>
                                                <Link href="#">Pip Value<br /> Calculator</Link>
                                            </h3>
                                            <div className="counting">03</div>
                                        </div>
                                        <div className="text-box">
                                            <p>
                                                Error voluptatem accusantium dolor
                                                emque laudantium totam aperio non
                                                inventore veritatis quasi.
                                            </p>
                                        </div>
                                        <div className="btn-box">
                                            <Link href="#">
                                                Use Our Tool
                                                <i className="icon-right-arrow"></i>
                                            </Link>
                                        </div>
                                        <div className="single-trading-tools-style1__nextitem">
                                            <div className="counting-box">01</div>
                                            <h3>Free Currency Converter</h3>
                                        </div>
                                        <div className="single-trading-tools-style1__nextitem right">
                                            <div className="counting-box">02</div>
                                            <h3>Margin Calulator</h3>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                        <div className="owl-nav-style-one">
                            <div className="owl-nav disabled">
                                <button className="owl-prev"><span className="left icon-arrow-left"></span></button>
                                <button className="owl-next"><span className="icon-arrow-right"></span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}