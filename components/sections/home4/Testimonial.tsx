'use client'
import Image from "next/image";
import Link from "next/link";

import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

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


export default function Testimonial() {
  return (
    <>
        <section className="testimonial-style2 pdtop120">
            <div className="container">
                <div className="testimonial-style2__top">
                    <div className="sec-title">
                        <div className="sub-title">
                            <h4>Testimonials</h4>
                        </div>
                        <h2>Real Experiences, Real Results</h2>
                    </div>
                </div>
                <div className="testimonial-style2__inner">
                    <Swiper {...swiperOptions} className="testimonial-style2-carousel">
                        <SwiperSlide>
                            <div className="single-testimonial-style2">
                                <div className="single-testimonial-style2__inner">
                                    <div className="title-box">
                                        <h3>Unique highly effective!</h3>
                                        <p>Loves or pursue desires to obtain pain because is pain but because occassion
                                            of all our circumstances.</p>
                                    </div>
                                    <div className="rating-box">
                                        <div className="rating-box-inner">
                                            <div className="icon">
                                                <i className="icon-star"></i>
                                            </div>
                                            <h4>4.5 out of 5</h4>
                                        </div>
                                    </div>
                                    <div className="bottom-box">
                                        <Link href="#" className="logo">
                                            <Image src="/assets/images/testimonial/testimonial-v2-logo1.png" alt="Logo" width={114} height={25} priority />
                                        </Link>
                                        <div className="author-box">
                                            <div className="img">
                                                <Image src="/assets/images/testimonial/testimonial-v2-img1.jpg" alt="Image" width={52} height={52} priority />
                                            </div>
                                            <div className="title">
                                                <h3>Dedrew Kowzel</h3>
                                                <p>Founder - Anaplan Info Tech</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="single-testimonial-style2">
                                <div className="single-testimonial-style2__inner">
                                    <div className="title-box">
                                        <h3>Amazing & Efficient</h3>
                                        <p>Cases are perfectly simple and easy todistinguish in a free hour, when our
                                            power choice is when nothing.</p>
                                    </div>
                                    <div className="rating-box">
                                        <div className="rating-box-inner">
                                            <div className="icon">
                                                <i className="icon-star"></i>
                                            </div>
                                            <h4>4.9 out of 5</h4>
                                        </div>
                                    </div>
                                    <div className="bottom-box">
                                        <Link href="#" className="logo">
                                            <Image src="/assets/images/testimonial/testimonial-v2-logo2.png" alt="Logo" width={141} height={25} priority />
                                        </Link>
                                        <div className="author-box">
                                            <div className="img">
                                                <Image src="/assets/images/testimonial/testimonial-v2-img2.jpg" alt="Image" width={52} height={52} priority />
                                            </div>
                                            <div className="title">
                                                <h3>Ediric Stanley</h3>
                                                <p>Project Head - Techtrady</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="single-testimonial-style2">
                                <div className="single-testimonial-style2__inner">
                                    <div className="title-box">
                                        <h3>My Favourite Tool</h3>
                                        <p>The claims of duty or the obligations business it will frequently occur
                                            pleasures repudiated annoyances.</p>
                                    </div>
                                    <div className="rating-box">
                                        <div className="rating-box-inner">
                                            <div className="icon">
                                                <i className="icon-star"></i>
                                            </div>
                                            <h4>4.5 out of 5</h4>
                                        </div>
                                    </div>
                                    <div className="bottom-box">
                                        <Link href="#" className="logo">
                                            <Image src="/assets/images/testimonial/testimonial-v2-logo3.png" alt="Logo" width={151} height={25} priority />
                                        </Link>
                                        <div className="author-box">
                                            <div className="img">
                                                <Image src="/assets/images/testimonial/testimonial-v2-img3.jpg" alt="Image" width={52} height={52} priority />
                                            </div>
                                            <div className="title">
                                                <h3>Newton Lester</h3>
                                                <p>Founder - Anaplan Info Tech</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="single-testimonial-style2">
                                <div className="single-testimonial-style2__inner">
                                    <div className="title-box">
                                        <h3>Unique highly effective!</h3>
                                        <p>Loves or pursue desires to obtain pain because is pain but because occassion
                                            of all our circumstances.</p>
                                    </div>
                                    <div className="rating-box">
                                        <div className="rating-box-inner">
                                            <div className="icon">
                                                <i className="icon-star"></i>
                                            </div>
                                            <h4>4.5 out of 5</h4>
                                        </div>
                                    </div>
                                    <div className="bottom-box">
                                        <Link href="#" className="logo">
                                            <Image src="/assets/images/testimonial/testimonial-v2-logo1.png" alt="Logo" width={114} height={25} priority />
                                        </Link>
                                        <div className="author-box">
                                            <div className="img">
                                                <Image src="/assets/images/testimonial/testimonial-v2-img1.jpg" alt="Image" width={52} height={52} priority />
                                            </div>
                                            <div className="title">
                                                <h3>Dedrew Kowzel</h3>
                                                <p>Founder - Anaplan Info Tech</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="single-testimonial-style2">
                                <div className="single-testimonial-style2__inner">
                                    <div className="title-box">
                                        <h3>Amazing & Efficient</h3>
                                        <p>Cases are perfectly simple and easy todistinguish in a free hour, when our
                                            power choice is when nothing.</p>
                                    </div>
                                    <div className="rating-box">
                                        <div className="rating-box-inner">
                                            <div className="icon">
                                                <i className="icon-star"></i>
                                            </div>
                                            <h4>4.9 out of 5</h4>
                                        </div>
                                    </div>
                                    <div className="bottom-box">
                                        <Link href="#" className="logo">
                                            <Image src="/assets/images/testimonial/testimonial-v2-logo2.png" alt="Logo" width={141} height={25} priority />
                                        </Link>
                                        <div className="author-box">
                                            <div className="img">
                                                <Image src="/assets/images/testimonial/testimonial-v2-img2.jpg" alt="Image" width={52} height={52} priority />
                                            </div>
                                            <div className="title">
                                                <h3>Ediric Stanley</h3>
                                                <p>Project Head - Techtrady</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="single-testimonial-style2">
                                <div className="single-testimonial-style2__inner">
                                    <div className="title-box">
                                        <h3>My Favourite Tool</h3>
                                        <p>The claims of duty or the obligations business it will frequently occur
                                            pleasures repudiated annoyances.</p>
                                    </div>
                                    <div className="rating-box">
                                        <div className="rating-box-inner">
                                            <div className="icon">
                                                <i className="icon-star"></i>
                                            </div>
                                            <h4>4.5 out of 5</h4>
                                        </div>
                                    </div>
                                    <div className="bottom-box">
                                        <Link href="#" className="logo">
                                            <Image src="/assets/images/testimonial/testimonial-v2-logo3.png" alt="Logo" width={151} height={25} priority />
                                        </Link>
                                        <div className="author-box">
                                            <div className="img">
                                                <Image src="/assets/images/testimonial/testimonial-v2-img3.jpg" alt="Image" width={52} height={52} priority />
                                            </div>
                                            <div className="title">
                                                <h3>Newton Lester</h3>
                                                <p>Founder - Anaplan Info Tech</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    <div className="owl-nav-style-one">
                        <div className="owl-nav">
                            <button type="button" role="presentation" className="owl-prev"><span className="left icon-arrow-left"></span></button>
                            <button type="button" role="presentation" className="owl-next"><span className="icon-arrow-right"></span></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}