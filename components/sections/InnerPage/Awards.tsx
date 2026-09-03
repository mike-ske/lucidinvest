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

export default function Awards() {
  return (
    <>
        <section className="awards-style1">
            <div className="container">
                <div className="sec-title withtext text-center">
                    <div className="sub-title">
                        <h4>Awards & Honors</h4>
                    </div>
                    <h2>Proud Moments of Achievement</h2>
                    <div className="text">
                        <p>
                            Discover the most competitive prices in the market, updated <br />regularly for your
                            advantage.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        <Swiper {...swiperOptions} className="awards-style1-carousel">
                            <SwiperSlide>
                                <div className="single-awards-style1">
                                    <div className="single-awards-style1__shape1">
                                        <Image src="/assets/images/shapes/awards-v1-1.png" alt="Shape" width={165} height={175} priority />
                                    </div>
                                    <div className="icon">
                                        <span className="icon-trophy"><span className="path1"></span><span
                                                className="path2"></span><span className="path3"></span><span
                                                className="path4"></span><span className="path5"></span><span
                                                className="path6"></span><span className="path7"></span>
                                        </span>
                                    </div>
                                    <div className="title">
                                        <h3><Link href="#">Global Forex <br />Broker of the Year</Link></h3>
                                    </div>
                                    <div className="border-line"></div>
                                    <div className="text">
                                        <p>Global Forex Awards <br />Mar, 2021</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="single-awards-style1">
                                    <div className="single-awards-style1__shape1">
                                        <Image src="/assets/images/shapes/awards-v1-1.png" alt="Shape" width={165} height={175} priority />
                                    </div>
                                    <div className="icon">
                                        <span className="icon-trophy"><span className="path1"></span><span
                                                className="path2"></span><span className="path3"></span><span
                                                className="path4"></span><span className="path5"></span><span
                                                className="path6"></span><span className="path7"></span>
                                        </span>
                                    </div>
                                    <div className="title">
                                        <h3><Link href="#">Most Transparent <br />FX Broker</Link></h3>
                                    </div>
                                    <div className="border-line"></div>
                                    <div className="text">
                                        <p>The Forex Expo USA <br />Dec, 2018</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="single-awards-style1">
                                    <div className="single-awards-style1__shape1">
                                        <Image src="/assets/images/shapes/awards-v1-1.png" alt="Shape" width={165} height={175} priority />
                                    </div>
                                    <div className="icon">
                                        <span className="icon-trophy"><span className="path1"></span><span
                                                className="path2"></span><span className="path3"></span><span
                                                className="path4"></span><span className="path5"></span><span
                                                className="path6"></span><span className="path7"></span>
                                        </span>
                                    </div>
                                    <div className="title">
                                        <h3><Link href="#">Best Forex Rewards <br />Program</Link></h3>
                                    </div>
                                    <div className="border-line"></div>
                                    <div className="text">
                                        <p>Global Forex Awards <br />Jun, 2016</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="single-awards-style1">
                                    <div className="single-awards-style1__shape1">
                                        <Image src="/assets/images/shapes/awards-v1-1.png" alt="Shape" width={165} height={175} priority />
                                    </div>
                                    <div className="icon">
                                        <span className="icon-trophy"><span className="path1"></span><span
                                                className="path2"></span><span className="path3"></span><span
                                                className="path4"></span><span className="path5"></span><span
                                                className="path6"></span><span className="path7"></span>
                                        </span>
                                    </div>
                                    <div className="title">
                                        <h3><Link href="#">Global Forex <br />Broker of the Year</Link></h3>
                                    </div>
                                    <div className="border-line"></div>
                                    <div className="text">
                                        <p>Global Forex Awards <br />Mar, 2021</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="single-awards-style1">
                                    <div className="single-awards-style1__shape1">
                                        <Image src="/assets/images/shapes/awards-v1-1.png" alt="Shape" width={165} height={175} priority />
                                    </div>
                                    <div className="icon">
                                        <span className="icon-trophy"><span className="path1"></span><span
                                                className="path2"></span><span className="path3"></span><span
                                                className="path4"></span><span className="path5"></span><span
                                                className="path6"></span><span className="path7"></span>
                                        </span>
                                    </div>
                                    <div className="title">
                                        <h3><Link href="#">Most Transparent <br />FX Broker</Link></h3>
                                    </div>
                                    <div className="border-line"></div>
                                    <div className="text">
                                        <p>The Forex Expo USA <br />Dec, 2018</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="single-awards-style1">
                                    <div className="single-awards-style1__shape1">
                                        <Image src="/assets/images/shapes/awards-v1-1.png" alt="Shape" width={165} height={175} priority />
                                    </div>
                                    <div className="icon">
                                        <span className="icon-trophy"><span className="path1"></span><span
                                                className="path2"></span><span className="path3"></span><span
                                                className="path4"></span><span className="path5"></span><span
                                                className="path6"></span><span className="path7"></span>
                                        </span>
                                    </div>
                                    <div className="title">
                                        <h3><Link href="#">Best Forex Rewards <br />Program</Link></h3>
                                    </div>
                                    <div className="border-line"></div>
                                    <div className="text">
                                        <p>Global Forex Awards <br />Jun, 2016</p>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <div className="owl-nav-style-one">
                                <div className="owl-nav">
                                    <button className="owl-prev"><span className="left icon-arrow-left"></span></button>
                                    <button className="owl-next"><span className="icon-arrow-right"></span></button>
                                </div>
                            </div>

                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}