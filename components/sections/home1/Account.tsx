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


export default function Account() {
  return (
    <>
        <section className="account-style1">
            <div className="container">
                <div className="sec-title">
                    <div className="sub-title">
                        <h4>Account Types</h4>
                    </div>
                    <h2>Explore Our Account Options</h2>
                </div>
                <div className="row">
                    <div className="col-xl-12 relative">
                        <Swiper {...swiperOptions} className="account-style1-carousel">
                            <SwiperSlide>
                                <div className="single-account-style1">
                                    <div className="content-box">
                                        <h3><Link href="#">Standard Account</Link></h3>
                                        <p>Mistaken idea denouncing pleasure of us ever undertakes secure...</p>
                                    </div>
                                    <div className="img-box">
                                        <div className="inner">
                                            <Image src="/assets/images/resources/account-v1-1.jpg" alt="Image" width={370} height={240} priority />
                                        </div>
                                        <div className="overlay-icon">
                                            <span className="icon-crown"><span className="path1"></span><span
                                                    className="path2"></span><span className="path3"></span><span
                                                    className="path4"></span><span className="path5"></span><span
                                                    className="path6"></span><span className="path7"></span><span
                                                    className="path8"></span><span className="path9"></span><span
                                                    className="path10"></span></span>
                                        </div>
                                    </div>
                                    <div className="bottom-box">
                                        <Link href="#">
                                            Read More
                                            <i className="icon-right-arrow"></i>
                                        </Link>
                                        <p>#01</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="single-account-style1">
                                    <div className="content-box">
                                        <h3><Link href="#">Mini Account</Link></h3>
                                        <p>Cases are perfectly simple and easy to distinguish in a free hour...</p>
                                    </div>
                                    <div className="img-box">
                                        <div className="inner">
                                            <Image src="/assets/images/resources/account-v1-2.jpg" alt="Image" width={370} height={240} priority />
                                        </div>
                                        <div className="overlay-icon">
                                            <span className="icon-star-1"><span className="path1"></span><span
                                                    className="path2"></span><span className="path3"></span><span
                                                    className="path4"></span><span className="path5"></span></span>
                                        </div>
                                    </div>
                                    <div className="bottom-box">
                                        <Link href="#">
                                            Read More
                                            <i className="icon-right-arrow"></i>
                                        </Link>
                                        <p>#02</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="single-account-style1">
                                    <div className="content-box">
                                        <h3><Link href="#">STP Account</Link></h3>
                                        <p>Holds in these matters to this principle of selection rejects pleasures...
                                        </p>
                                    </div>
                                    <div className="img-box">
                                        <div className="inner">
                                            <Image src="/assets/images/resources/account-v1-3.jpg" alt="Image" width={370} height={240} priority />
                                        </div>
                                        <div className="overlay-icon">
                                            <span className="icon-protection"><span className="path1"></span><span
                                                    className="path2"></span><span className="path3"></span><span
                                                    className="path4"></span></span>
                                        </div>
                                    </div>
                                    <div className="bottom-box">
                                        <Link href="#">
                                            Read More
                                            <i className="icon-right-arrow"></i>
                                        </Link>
                                        <p>#03</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="single-account-style1">
                                    <div className="content-box">
                                        <h3><Link href="#">Standard Account</Link></h3>
                                        <p>Mistaken idea denouncing pleasure of us ever undertakes secure...</p>
                                    </div>
                                    <div className="img-box">
                                        <div className="inner">
                                            <Image src="/assets/images/resources/account-v1-1.jpg" alt="Image" width={370} height={240} priority />
                                        </div>
                                        <div className="overlay-icon">
                                            <span className="icon-crown"><span className="path1"></span><span
                                                    className="path2"></span><span className="path3"></span><span
                                                    className="path4"></span><span className="path5"></span><span
                                                    className="path6"></span><span className="path7"></span><span
                                                    className="path8"></span><span className="path9"></span><span
                                                    className="path10"></span></span>
                                        </div>
                                    </div>
                                    <div className="bottom-box">
                                        <Link href="#">
                                            Read More
                                            <i className="icon-right-arrow"></i>
                                        </Link>
                                        <p>#01</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="single-account-style1">
                                    <div className="content-box">
                                        <h3><Link href="#">Mini Account</Link></h3>
                                        <p>Cases are perfectly simple and easy to distinguish in a free hour...</p>
                                    </div>
                                    <div className="img-box">
                                        <div className="inner">
                                            <Image src="/assets/images/resources/account-v1-2.jpg" alt="Image" width={370} height={240} priority />
                                        </div>
                                        <div className="overlay-icon">
                                            <span className="icon-star-1"><span className="path1"></span><span
                                                    className="path2"></span><span className="path3"></span><span
                                                    className="path4"></span><span className="path5"></span></span>
                                        </div>
                                    </div>
                                    <div className="bottom-box">
                                        <Link href="#">
                                            Read More
                                            <i className="icon-right-arrow"></i>
                                        </Link>
                                        <p>#02</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="single-account-style1">
                                    <div className="content-box">
                                        <h3><Link href="#">STP Account</Link></h3>
                                        <p>Holds in these matters to this principle of selection rejects pleasures...
                                        </p>
                                    </div>
                                    <div className="img-box">
                                        <div className="inner">
                                            <Image src="/assets/images/resources/account-v1-3.jpg" alt="Image" width={370} height={240} priority />
                                        </div>
                                        <div className="overlay-icon">
                                            <span className="icon-protection"><span className="path1"></span><span
                                                    className="path2"></span><span className="path3"></span><span
                                                    className="path4"></span></span>
                                        </div>
                                    </div>
                                    <div className="bottom-box">
                                        <Link href="#">
                                            Read More
                                            <i className="icon-right-arrow"></i>
                                        </Link>
                                        <p>#03</p>
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