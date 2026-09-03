'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
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
        nextEl: '.owl-prev',
        prevEl: '.owl-next',
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
            slidesPerView: 2,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    }
}

export default function Work() {
  return (
    <>
        <section className="how-it-work-style1">
            <div className="container">
                <div className="how-it-work-style1__top">
                    <div className="sec-title white">
                        <div className="sub-title">
                            <h4>How it&apos;s Work</h4>
                        </div>
                        <h2>Step-by-Step Trading Guide</h2>
                    </div>
                    <div className="text">
                        <p>Pleasure and praising pain was born and will give complete system.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        <div className="slider-content relative">
                            <Swiper {...swiperOptions} className="how-it-work-style1-carousel">
                                <SwiperSlide>
                                    <div className="single-how-it-work-style1">
                                        <div className="count-box">
                                            <div className="step">
                                                <h6>Step 01</h6>
                                            </div>
                                        </div>
                                        <div className="content-box">
                                            <div className="title">
                                                <h3><Link href="#">Open Your Account</Link></h3>
                                                <p>Always holds these matters to this principle of selection or else cases
                                                    he endures pains.</p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="single-how-it-work-style1">
                                        <div className="count-box">
                                            <div className="step">
                                                <h6>Step 02</h6>
                                            </div>
                                        </div>
                                        <div className="content-box">
                                            <div className="title">
                                                <h3><Link href="#">Fund Your Account</Link></h3>
                                                <p>Beguiled and demoralized the charms of pleasure of the moment, so blinded
                                                    by desire that they foresee.</p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="single-how-it-work-style1">
                                        <div className="count-box">
                                            <div className="step">
                                                <h6>Step 03</h6>
                                            </div>
                                        </div>
                                        <div className="content-box">
                                            <div className="title">
                                                <h3><Link href="#">Choose Your Asset</Link></h3>
                                                <p>Business it will frequently occur that pleasures have to be repudiated
                                                    and annoyances accepted.</p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="single-how-it-work-style1">
                                        <div className="count-box">
                                            <div className="step">
                                                <h6>Step 04</h6>
                                            </div>
                                        </div>
                                        <div className="content-box">
                                            <div className="title">
                                                <h3><Link href="#">Open Your Account</Link></h3>
                                                <p>Always holds these matters to this principle of selection or else cases
                                                    he endures pains.</p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="single-how-it-work-style1">
                                        <div className="count-box">
                                            <div className="step">
                                                <h6>Step 05</h6>
                                            </div>
                                        </div>
                                        <div className="content-box">
                                            <div className="title">
                                                <h3><Link href="#">Fund Your Account</Link></h3>
                                                <p>Beguiled and demoralized the charms of pleasure of the moment, so blinded
                                                    by desire that they foresee.</p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="single-how-it-work-style1">
                                        <div className="count-box">
                                            <div className="step">
                                                <h6>Step 06</h6>
                                            </div>
                                        </div>
                                        <div className="content-box">
                                            <div className="title">
                                                <h3><Link href="#">Choose Your Asset</Link></h3>
                                                <p>Business it will frequently occur that pleasures have to be repudiated
                                                    and annoyances accepted.</p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <div className="owl-nav-style-one">
                                    <div className="owl-nav disabled">
                                        <button className="owl-prev"><span className="left icon-arrow-left"></span></button>
                                        <button className="owl-next"><span className="icon-arrow-right"></span></button>
                                    </div>
                                </div>

                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}