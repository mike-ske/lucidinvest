'use client'

import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import RoundTextScript from "@/components/elements/CircleText";
import Image from "next/image";
import Link from "next/link";
import "swiper/css/effect-fade";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation, EffectFade],
  slidesPerView: 1,
  spaceBetween: 0,
  effect: "fade" as const, // 👈 fade transition
  fadeEffect: {
    crossFade: true, // smooth fade in/out
  },
  autoplay: {
    delay: 10000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".banner-slider-button-next",
    prevEl: ".banner-slider-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
};

export default function Banner() {
  return (
    <section className="main-slider-style4">
        <RoundTextScript />
      <div
        className="main-slider-style4__bg"
        style={{ backgroundImage: "url(/assets/images/shapes/slider-v4-bg1.jpg)" }}
      />
      <div
        className="main-slider-style4__bg2"
        style={{ backgroundImage: "url(/assets/images/shapes/slider-v4-shape1.png)" }}
      />

      {/* Swiper */}
      <Swiper {...swiperOptions} className="swiper-container banner-slider-two">
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="container">
            <div className="content-box">
              <div className="big-title">
                <h2>
                  Unlock the<br /> Markets.<br /> Unleash Your<br /> Potential.
                </h2>
              </div>
              <div className="btn-box">
                <div className="icon">
                  <i className="icon-candle"></i>
                </div>
                <div className="text">
                  <Link href="#">
                    Start <br />Trading Now
                    <i className="icon-right-arrow"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="container">
            <div className="content-box">
              <div className="big-title">
                <h2>
                  Experience<br /> Seamless<br /> Trading Across<br /> Markets!
                </h2>
              </div>
              <div className="btn-box">
                <div className="icon">
                  <i className="icon-candle"></i>
                </div>
                <div className="text">
                  <Link href="#">
                    Start <br />Trading Now
                    <i className="icon-right-arrow"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="container">
            <div className="content-box">
              <div className="big-title">
                <h2>
                  Experience<br /> Mobile Trading<br /> Like Never<br /> Before...
                </h2>
              </div>
              <div className="btn-box">
                <div className="icon">
                  <i className="icon-candle"></i>
                </div>
                <div className="text">
                  <Link href="#">
                    Start <br />Trading Now
                    <i className="icon-right-arrow"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="container">
        <div className="main-slider-style4__inner">
          <div className="trading-platforms">
            <div className="text">
              <div className="icon">
                <span className="icon-growth-chart">
                  <span className="path1"></span>
                  <span className="path2"></span>
                  <span className="path3"></span>
                  <span className="path4"></span>
                  <span className="path5"></span>
                </span>
              </div>
              <p>Platforms for <br />Traders</p>
            </div>
            <div className="btn-box">
              <Link href="#">
                Download Here
                <i className="icon-right-arrow"></i>
              </Link>
            </div>
          </div>

          <div className="experience-box">
            <div className="icon">
              <span className="icon-trading-1">
                <span className="path1"></span>
                <span className="path2"></span>
                <span className="path3"></span>
                <span className="path4"></span>
              </span>
            </div>
            <div className="text">
              <h2>24<sup>+</sup></h2>
              <p>Years of Trading Experience</p>
            </div>
          </div>

          <div className="img-mockup">
            <Image
              src="/assets/images/slides/slider-v4-img1.png"
              className="float-bob-y"
              alt="Mockup"
              width={345}
              height={690}
              priority
            />
          </div>

          <div className="mobile-app-box">
            <div className="mobile-app__inner">
              <div className="icon">
                <Link href="https://apps.apple.com/us/app/apple-store/id375380948">
                  <span className="icon-app-store"></span>
                </Link>
                <Link href="https://play.google.com/store/games?hl=es_419">
                  <span className="icon-google-play">
                    <span className="path1"></span>
                    <span className="path2"></span>
                    <span className="path3"></span>
                    <span className="path4"></span>
                  </span>
                </Link>
              </div>
              <div className="text">
                <p>Join with 2.5m <br />Traders.</p>
              </div>
            </div>
            <div className="mobile-app__btn">
              <Link href="#">
                Download
                <i className="icon-right-arrow"></i>
              </Link>
            </div>
          </div>

          <div className="shape1">
            <Image
              src="/assets/images/shapes/slider-v4-shape2.png"
              className="zoominout"
              alt="Shape"
              width={570}
              height={590}
              priority
            />
          </div>

          <div className="main-slider-style4-round-text">
            <div className="main-slider-style4-round-text__top">
              See the Stars, Trust the Service
            </div>
            <div className="main-slider-style4-round-text__bottom">
              See the Stars, Trust the Service
            </div>
            <div className="overlay-text">
              <div className="inner">
                <h3>4.9</h3>
                <ul>
                  <li><i className="icon-star"></i></li>
                  <li><i className="icon-star"></i></li>
                  <li><i className="icon-star"></i></li>
                  <li><i className="icon-star"></i></li>
                  <li><i className="icon-star"></i></li>
                </ul>
                <p>From 2.8k <br />Traders</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="banner-slider-nav">
        <div className="banner-slider-control banner-slider-button-prev">
          <span><i className="icon-arrow-left" aria-hidden="true"></i></span>
        </div>
        <div className="banner-slider-control banner-slider-button-next">
          <span><i className="icon-arrow-right" aria-hidden="true"></i></span>
        </div>
      </div>
    </section>
  );
}
