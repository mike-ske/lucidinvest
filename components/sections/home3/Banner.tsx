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
        delay: 5000,
        disableOnInteraction: false,
    },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.banner-slider-button-prev',
        prevEl: '.banner-slider-button-next',
    },

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
        <section className="main-slider-style2">
            <Swiper {...swiperOptions} className="banner-slider">
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="image-layer" style={{ backgroundImage: "url(/assets/images/slides/slide-v2-1.jpg)" }}>
                        </div>
                        <div className="container">
                            <div className="content-box text-center">
                                <div className="big-title">
                                    <h2>Unlock</h2>
                                    <div className="icon">
                                        <span className="icon-extend"></span>
                                    </div>
                                </div>

                                <div className="big-title big-title--two">
                                    <h2>Global Markets</h2>
                                </div>
                                <div className="text-box">
                                    <ul>
                                        <li>
                                            <Image src="/assets/images/slides/main-slider2-thumb-1.jpg" alt="Image" width={63} height={63} priority />
                                        </li>
                                        <li>
                                            <Link href="tel:1222567890">
                                                <span className="icon-call"></span>
                                            </Link>
                                        </li>
                                    </ul>
                                    <div className="text-right">
                                        <p>Need assistance?<br /> Speak with our trading expert today.</p>
                                    </div>
                                </div>
                                <div className="btn-box">
                                    <Link className="" href="#">
                                        More
                                        <span className="icon-right-arrow"></span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="image-layer" style={{ backgroundImage: "url(/assets/images/slides/slide-v2-2.jpg)" }}>
                        </div>
                        <div className="container">
                            <div className="content-box text-center">
                                <div className="big-title">
                                    <h2>Expert</h2>
                                    <div className="icon">
                                        <span className="icon-computer"></span>
                                    </div>
                                </div>

                                <div className="big-title big-title--two">
                                    <h2>Trading Tools</h2>
                                </div>
                                <div className="text-box">
                                    <ul>
                                        <li>
                                            <Image src="/assets/images/slides/main-slider2-thumb-1.jpg" alt="Image" width={63} height={63} priority />
                                        </li>
                                        <li>
                                            <Link href="tel:1222567890">
                                                <span className="icon-call"></span>
                                            </Link>
                                        </li>
                                    </ul>
                                    <div className="text-right">
                                        <p>Need assistance?<br /> Speak with our trading expert today.</p>
                                    </div>
                                </div>
                                <div className="btn-box">
                                    <Link className="" href="#">
                                        More
                                        <span className="icon-right-arrow"></span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="image-layer" style={{ backgroundImage: "url(/assets/images/slides/slide-v2-3.jpg)" }}>
                        </div>
                        <div className="container">
                            <div className="content-box text-center">
                                <div className="big-title">
                                    <h2>Achieve</h2>
                                    <div className="icon">
                                        <span className="icon-entrepreneur"></span>
                                    </div>
                                </div>

                                <div className="big-title big-title--two">
                                    <h2>Financial Goal</h2>
                                </div>
                                <div className="text-box">
                                    <ul>
                                        <li>
                                            <Image src="/assets/images/slides/main-slider2-thumb-1.jpg" alt="Image" width={63} height={63} priority />
                                        </li>
                                        <li>
                                            <Link href="tel:1222567890">
                                                <span className="icon-call"></span>
                                            </Link>
                                        </li>
                                    </ul>
                                    <div className="text-right">
                                        <p>Need assistance?<br /> Speak with our trading expert today.</p>
                                    </div>
                                </div>
                                <div className="btn-box">
                                    <Link className="" href="#">
                                        More
                                        <span className="icon-right-arrow"></span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>


            <div className="banner-slider-nav banner-slider-nav--style2">
                <div className="banner-slider-control banner-slider-button-prev">
                    <span><i className="icon-arrow-left" aria-hidden="true"></i></span>
                </div>
                <div className="banner-slider-control banner-slider-button-next">
                    <span><i className="icon-arrow-right" aria-hidden="true"></i></span>
                </div>
            </div>
        </section>
    </>
  )
}