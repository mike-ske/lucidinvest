'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import Link from "next/link";

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
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

export default function Highlights() {
  return (
    <>
        <section className="highlights-style2">
            <div className="container">
                <div className="sec-title text-center">
                    <div className="sub-title">
                        <h4>Highlights</h4>
                    </div>
                    <h2>Potential of MT4 and MT5</h2>
                </div>
                <div className="row">
                    <Swiper {...swiperOptions} className="highlights-style2-carousel">
                        <SwiperSlide>
                            <div className="single-highlights-style2">
                                <div className="arrow-box two marquee_mode-upToDown">
                                    <ul className="clearfix">
                                        <li>
                                            <span className="icon-angle-down"><span className="path1"></span><span
                                                    className="path2"></span></span>
                                        </li>
                                        <li>
                                            <span className="icon-angle-down"><span className="path1"></span><span
                                                    className="path2"></span></span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="icon-box">
                                    <span className="icon-employee"><span className="path1"></span><span
                                            className="path2"></span><span className="path3"></span><span
                                            className="path4"></span><span className="path5"></span>
                                    </span>
                                </div>
                                <div className="content-box">
                                    <h3><Link href="#">Friendly & Expert</Link></h3>
                                    <p>Duty or the obligation that business it will frequently occurs pleasure to be
                                        repudiated right extremely.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="single-highlights-style2">
                                <div className="arrow-box two marquee_mode-upToDown">
                                    <ul className="clearfix">
                                        <li className="color">
                                            <span className="icon-angle-down"><span className="path1"></span><span
                                                    className="path2"></span></span>
                                        </li>
                                        <li className="color">
                                            <span className="icon-angle-down"><span className="path1"></span><span
                                                    className="path2"></span></span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="icon-box">
                                    <span className="icon-protection-2"><span className="path1"></span><span
                                            className="path2"></span><span className="path3"></span><span className="path4"></span>
                                    </span>
                                </div>
                                <div className="content-box">
                                    <h3><Link href="#">Regulated & Secure</Link></h3>
                                    <p>It will frequently occur that pleasures have to be repudiated and annoyances
                                        accepted
                                        perfectly.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="single-highlights-style2">
                                <div className="arrow-box two marquee_mode-upToDown">
                                    <ul className="clearfix">
                                        <li className="color1">
                                            <span className="icon-angle-down"><span className="path1"></span><span
                                                    className="path2"></span></span>
                                        </li>
                                        <li className="color1">
                                            <span className="icon-angle-down"><span className="path1"></span><span
                                                    className="path2"></span></span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="icon-box">
                                    <span className="icon-dollar-sign"><span className="path1"></span><span
                                            className="path2"></span><span className="path3"></span><span className="path4"></span>
                                    </span>
                                </div>
                                <div className="content-box">
                                    <h3><Link href="#">24/5 Support</Link></h3>
                                    <p>Complete account of the system and expound the actual teachings of the great
                                        explorer
                                        of the truth.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="single-highlights-style2">
                                <div className="arrow-box two marquee_mode-upToDown">
                                    <ul className="clearfix">
                                        <li>
                                            <span className="icon-angle-down"><span className="path1"></span><span
                                                    className="path2"></span></span>
                                        </li>
                                        <li>
                                            <span className="icon-angle-down"><span className="path1"></span><span
                                                    className="path2"></span></span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="icon-box">
                                    <span className="icon-employee"><span className="path1"></span><span
                                            className="path2"></span><span className="path3"></span><span
                                            className="path4"></span><span className="path5"></span>
                                    </span>
                                </div>
                                <div className="content-box">
                                    <h3><Link href="#">Friendly & Expert</Link></h3>
                                    <p>Duty or the obligation that business it will frequently occurs pleasure to be
                                        repudiated right extremely.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="single-highlights-style2">
                                <div className="arrow-box two marquee_mode-upToDown">
                                    <ul className="clearfix">
                                        <li className="color">
                                            <span className="icon-angle-down"><span className="path1"></span><span
                                                    className="path2"></span></span>
                                        </li>
                                        <li className="color">
                                            <span className="icon-angle-down"><span className="path1"></span><span
                                                    className="path2"></span></span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="icon-box">
                                    <span className="icon-protection-2"><span className="path1"></span><span
                                            className="path2"></span><span className="path3"></span><span className="path4"></span>
                                    </span>
                                </div>
                                <div className="content-box">
                                    <h3><Link href="#">Regulated & Secure</Link></h3>
                                    <p>It will frequently occur that pleasures have to be repudiated and annoyances
                                        accepted
                                        perfectly.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="single-highlights-style2">
                                <div className="arrow-box two marquee_mode-upToDown">
                                    <ul className="clearfix">
                                        <li className="color1">
                                            <span className="icon-angle-down"><span className="path1"></span><span
                                                    className="path2"></span></span>
                                        </li>
                                        <li className="color1">
                                            <span className="icon-angle-down"><span className="path1"></span><span
                                                    className="path2"></span></span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="icon-box">
                                    <span className="icon-dollar-sign"><span className="path1"></span><span
                                            className="path2"></span><span className="path3"></span><span className="path4"></span>
                                    </span>
                                </div>
                                <div className="content-box">
                                    <h3><Link href="#">24/5 Support</Link></h3>
                                    <p>Complete account of the system and expound the actual teachings of the great
                                        explorer
                                        of the truth.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    <div className="owl-nav-style-one">
                        <div className="owl-nav">
                            <button className="owl-prev"><span className="left icon-arrow-left"></span></button>
                            <button className="owl-next"><span className="icon-arrow-right"></span></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}