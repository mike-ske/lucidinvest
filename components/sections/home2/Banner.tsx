'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import Image from "next/image";
import Link from "next/link";

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 10000,
        disableOnInteraction: false,
    },
    loop: true,

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        575: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        767: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
    }
}


export default function Banner() {
  return (
    <>
        <section className="banner-style1">
            <div className="banner-style1__pattern"
                style={{ backgroundImage: "url(/assets/images/pattern/banner-v1__pattern.png)" }}>
            </div>
            <Swiper {...swiperOptions} className="bg-image-carousel">
                <SwiperSlide>
                    <div className="slider-bg-slide" style={{ backgroundImage: "url(/assets/images/banner/banner-style1__img1.jpg)" }}></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider-bg-slide" style={{ backgroundImage: "url(/assets/images/banner/banner-style1__img2.jpg)" }}></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider-bg-slide" style={{ backgroundImage: "url(/assets/images/banner/banner-style1__img3.jpg)" }}></div>
                </SwiperSlide>
            </Swiper>
            <div className="banner-style1__content">
                <div className="banner-style1__content-inner">
                    <div className="sub-title">
                        <h6>Global market</h6>
                    </div>
                    <div className="big-title">
                        <h2>Unlock Global<br /> Markets with Ease</h2>
                    </div>
                    <div className="text-box">
                        <p>Invest confidently with advanced security measures<br /> tailored to protect your trades.</p>
                    </div>
                    <div className="highlights-box">
                        <ul>
                            <li>
                                <div className="icon">
                                    <span className="icon-success"><span className="path1"></span><span
                                            className="path2"></span><span className="path3"></span>
                                    </span>
                                </div>
                                <div className="title">
                                    <h4><span>Up to</span> $500 Bonus.</h4>
                                </div>
                            </li>
                            <li>
                                <div className="icon">
                                    <span className="icon-success"><span className="path1"></span><span
                                            className="path2"></span><span className="path3"></span>
                                    </span>
                                </div>
                                <div className="title">
                                    <h4><span>Free</span> Demo Account.</h4>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="bottom-box">
                        <div className="btn-box">
                            <Link className="btn-one" href="/markets">
                                <span className="txt">Explore Markets</span>
                                <i className="icon-right-arrow"></i>
                            </Link>
                        </div>
                        <div className="header-btn-box-style2">
                            <Link className="btn-one" href="https://app.lucidglobalinvest.com/login">
                                <span className="txt">Login</span>
                                <i className="icon-right-arrow"></i>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="banner-style1-dashboard">
                    <div className="banner-style1-dashboard__pattern"
                        style={{ backgroundImage: "url(/assets/images/pattern/banner-v1__pattern3.png)" }}>
                    </div>
                    <div className="banner-style1-dashboard__shape">
                        <Image src="/assets/images/shapes/banner-v1-shape1.png" alt="Shape" width={300} height={192} priority />
                    </div>
                    <div className="banner-style1-dashboard__inner">
                        <div className="top-box">
                            <h2>10x</h2>
                            <p>More Insightful and Detailed Market Analysis.</p>
                        </div>
                        <div className="title">
                            <h3>Trading Opportunities</h3>
                        </div>
                        <div className="img-box">
                            <div className="img-box-shape1">
                                <Image src="/assets/images/shapes/banner-v1-shape2.png" alt="Shape" width={300} height={240} priority />
                            </div>
                            <div className="inner">
                                <Image src="/assets/images/pattern/banner-v1__pattern2.png" alt="Image" width={224} height={128} priority />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    </>
  )
}
