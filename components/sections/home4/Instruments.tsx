
'use client'
import { useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import Image from "next/image";
import Link from "next/link";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import CustomSelect from "@/components/elements/CustomSelect";

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
            slidesPerView: 1,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
    }
}

export default function Instruments() {

    // lightbox
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);
    const slides = [
        { src: "/assets/images/resources/price-list-v1-trd-chart-1.png" },
        { src: "/assets/images/resources/price-list-v1-trd-chart-2.png" },
        { src: "/assets/images/resources/price-list-v1-trd-chart-3.png" },
    ];

    // select-box
    const options = [
        { value: "0", label: "0.50%" },
        { value: "1", label: "0.75%" },
        { value: "2", label: "1.00%" },
    ];

    const optionsTwo = [
        { value: "0", label: "0.50%" },
        { value: "1", label: "0.75%" },
        { value: "2", label: "1.00%" },
    ];

    const optionsThree = [
        { value: "0", label: "0.50%" },
        { value: "1", label: "0.75%" },
        { value: "2", label: "1.00%" },
    ];

    const handleSelectChange = (value: string) => {
        console.log("Selected value:", value);
    };

  return (
    <>
        <section className="instruments-style1 instruments-style1--style2">
            <div className="container">
                <div className="sec-title withtext white text-center">
                    <div className="sub-title">
                        <h4>instruments</h4>
                    </div>
                    <h2>Leading Market Price List</h2>
                    <div className="text">
                        <p>
                            Discover the most competitive prices in the market, updated <br />regularly for your
                            advantage.
                        </p>
                    </div>
                </div>
            </div>
            <div className="auto-container">
                <div className="row">
                    <div className="col-xl-12">
                        <Swiper {...swiperOptions} className="instruments-style1-carousel">
                            <SwiperSlide>
                                <div className="single-price-list-style1">
                                    <div className="single-price-list-style1__icon">
                                        <Link onClick={() => { setIndex(0); setOpen(true); }} className="lightbox-image" href="">
                                            <i className="icon-maximize"></i>
                                        </Link>
                                    </div>
                                    <div className="single-price-list-style1__inner">
                                        <div className="left-box">
                                            <div className="top-box">
                                                <div className="inner">
                                                    <div className="title">
                                                        <h3>usd</h3>
                                                        <p>American Dollar</p>
                                                    </div>
                                                    <div className="flag">
                                                        <span className="icon-usa"><span
                                                                className="path1"></span><span
                                                                className="path2"></span><span
                                                                className="path3"></span></span>
                                                    </div>
                                                </div>
                                                <div className="bottom-title">
                                                    <h4>Buys</h4>
                                                    <h4>144.191</h4>
                                                </div>
                                            </div>
                                            <div className="icon-box">
                                                <i className="icon-mobile-data"></i>
                                            </div>
                                            <div className="top-box bottom-box">
                                                <div className="inner">
                                                    <div className="title">
                                                        <h3>jpy</h3>
                                                        <p>Japanese Yen</p>
                                                    </div>
                                                    <div className="flag">
                                                        <span className="icon-japan"><span
                                                                className="path1"></span><span
                                                                className="path2"></span></span>
                                                    </div>
                                                </div>
                                                <div className="bottom-title">
                                                    <h4>Sells</h4>
                                                    <h4>144.210</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="right-box">
                                            <div className="percent-text">
                                                <div className="select-box clearfix">
                                                    <CustomSelect
                                                        options={options}
                                                        placeholder="0.25%"
                                                        onChange={handleSelectChange}
                                                    />
                                                </div>
                                            </div>
                                            <div className="time-box">
                                                <ul className="clearfix">
                                                    <li>
                                                        <input type="radio" id="day333" name="time1"
                                                            defaultChecked />
                                                        <label htmlFor="day333">
                                                            <i></i>
                                                            <span>1D</span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <input type="radio" id="month333"
                                                            name="time1" />
                                                        <label htmlFor="month333">
                                                            <i></i>
                                                            <span>1M</span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <input type="radio" id="year333"
                                                            name="time1" />
                                                        <label htmlFor="year333">
                                                            <i></i>
                                                            <span>1Y</span>
                                                        </label>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="bottom-box">
                                                <div className="img">
                                                    <Image src="/assets/images/resources/price-list-v1-trd-chart-1.png" alt="Chart Image" width={210} height={150} priority />
                                                </div>
                                                <ul className="list-item clearfix">
                                                    <li>
                                                        <span>2.8</span>
                                                    </li>
                                                    <li>
                                                        <span>2.7</span>
                                                    </li>
                                                    <li>
                                                        <span>2.6</span>
                                                    </li>
                                                    <li>
                                                        <span>2.5</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-price-list-style1__bottom">
                                        <div className="btn-box">
                                            <Link href="#">
                                                Start Your Trading
                                                <i className="icon-right-arrow"></i>
                                            </Link>
                                        </div>
                                        <div className="social-share-box">
                                            <div className="share">
                                                <p>Share price list</p>
                                                <span className="icon-share"></span>
                                            </div>
                                            <ul className="clearfix">
                                                <li>
                                                    <Link href="#">
                                                        <i className="icon-telegram"></i>
                                                        <p>Tg</p>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#">
                                                        <i className="icon-whatsapp"></i>
                                                        <p>Wa</p>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="single-price-list-style1">
                                    <div className="single-price-list-style1__icon">
                                        <Link onClick={() => { setIndex(1); setOpen(true); }} className="lightbox-image" href="">
                                            <i className="icon-maximize"></i>
                                        </Link>
                                    </div>
                                    <div className="single-price-list-style1__inner">
                                        <div className="left-box">
                                            <div className="top-box">
                                                <div className="inner">
                                                    <div className="title">
                                                        <h3>usd</h3>
                                                        <p>American Dollar</p>
                                                    </div>
                                                    <div className="flag">
                                                        <span className="icon-usa"><span
                                                                className="path1"></span><span
                                                                className="path2"></span><span
                                                                className="path3"></span></span>
                                                    </div>
                                                </div>
                                                <div className="bottom-title">
                                                    <h4>Buys</h4>
                                                    <h4>1.11463</h4>
                                                </div>
                                            </div>
                                            <div className="icon-box">
                                                <i className="icon-mobile-data"></i>
                                            </div>
                                            <div className="top-box bottom-box">
                                                <div className="inner">
                                                    <div className="title">
                                                        <h3>eur</h3>
                                                        <p>Canadian Dollar</p>
                                                    </div>
                                                    <div className="flag">
                                                        <span className="icon-canada"><span
                                                                className="path1"></span><span
                                                                className="path2"></span><span
                                                                className="path3"></span><span
                                                                className="path4"></span></span>
                                                    </div>
                                                </div>
                                                <div className="bottom-title">
                                                    <h4>Sells</h4>
                                                    <h4>1.11565</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="right-box">
                                            <div className="percent-text">
                                                <div className="select-box clearfix">
                                                    <CustomSelect
                                                        options={optionsTwo}
                                                        placeholder="0.25%"
                                                        onChange={handleSelectChange}
                                                    />
                                                </div>
                                            </div>
                                            <div className="time-box">
                                                <ul className="clearfix">
                                                    <li>
                                                        <input type="radio" id="day444" name="month"
                                                            defaultChecked />
                                                        <label htmlFor="day444">
                                                            <i></i>
                                                            <span>1D</span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <input type="radio" id="month444"
                                                            name="month" />
                                                        <label htmlFor="month444">
                                                            <i></i>
                                                            <span>1M</span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <input type="radio" id="year444"
                                                            name="month" />
                                                        <label htmlFor="year444">
                                                            <i></i>
                                                            <span>1Y</span>
                                                        </label>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="bottom-box">
                                                <div className="img">
                                                    <Image src="/assets/images/resources/price-list-v1-trd-chart-2.png" alt="Chart Image" width={210} height={150} priority />
                                                </div>
                                                <ul className="list-item clearfix">
                                                    <li>
                                                        <span>2.8</span>
                                                    </li>
                                                    <li>
                                                        <span>2.7</span>
                                                    </li>
                                                    <li>
                                                        <span>2.6</span>
                                                    </li>
                                                    <li>
                                                        <span>2.5</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-price-list-style1__bottom">
                                        <div className="btn-box">
                                            <Link href="#">
                                                Start Your Trading
                                                <i className="icon-right-arrow"></i>
                                            </Link>
                                        </div>
                                        <div className="social-share-box">
                                            <div className="share">
                                                <p>Share price list</p>
                                                <span className="icon-share"></span>
                                            </div>
                                            <ul className="clearfix">
                                                <li>
                                                    <Link href="#">
                                                        <i className="icon-telegram"></i>
                                                        <p>Tg</p>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#">
                                                        <i className="icon-whatsapp"></i>
                                                        <p>Wa</p>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="single-price-list-style1">
                                    <div className="single-price-list-style1__icon">
                                        <Link onClick={() => { setIndex(2); setOpen(true); }} className="lightbox-image" href="">
                                            <i className="icon-maximize"></i>
                                        </Link>
                                    </div>
                                    <div className="single-price-list-style1__inner">
                                        <div className="left-box">
                                            <div className="top-box">
                                                <div className="inner">
                                                    <div className="title">
                                                        <h3>usd</h3>
                                                        <p>American Dollar</p>
                                                    </div>
                                                    <div className="flag">
                                                        <span className="icon-usa"><span
                                                                className="path1"></span><span
                                                                className="path2"></span><span
                                                                className="path3"></span></span>
                                                    </div>
                                                </div>
                                                <div className="bottom-title">
                                                    <h4>Buys</h4>
                                                    <h4>0.78004</h4>
                                                </div>
                                            </div>
                                            <div className="icon-box">
                                                <i className="icon-mobile-data"></i>
                                            </div>
                                            <div className="top-box bottom-box">
                                                <div className="inner">
                                                    <div className="title">
                                                        <h3>aud</h3>
                                                        <p>Australian Dollar</p>
                                                    </div>
                                                    <div className="flag">
                                                        <span className="icon-australia"><span
                                                                className="path1"></span><span
                                                                className="path2"></span><span
                                                                className="path3"></span><span
                                                                className="path4"></span><span
                                                                className="path5"></span><span
                                                                className="path6"></span><span
                                                                className="path7"></span><span
                                                                className="path8"></span><span
                                                                className="path9"></span><span
                                                                className="path10"></span><span
                                                                className="path11"></span><span
                                                                className="path12"></span></span>
                                                    </div>
                                                </div>
                                                <div className="bottom-title">
                                                    <h4>Sells</h4>
                                                    <h4>0.78026</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="right-box">
                                            <div className="percent-text">
                                                <div className="select-box clearfix">
                                                    <CustomSelect
                                                        options={optionsThree}
                                                        placeholder="0.25%"
                                                        onChange={handleSelectChange}
                                                    />
                                                </div>
                                            </div>
                                            <div className="time-box">
                                                <ul className="clearfix">
                                                    <li>
                                                        <input type="radio" id="day555" name="year"
                                                            defaultChecked />
                                                        <label htmlFor="day555">
                                                            <i></i>
                                                            <span>1D</span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <input type="radio" id="month555"
                                                            name="year" />
                                                        <label htmlFor="month555">
                                                            <i></i>
                                                            <span>1M</span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <input type="radio" id="year555"
                                                            name="year" />
                                                        <label htmlFor="year555">
                                                            <i></i>
                                                            <span>1Y</span>
                                                        </label>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="bottom-box">
                                                <div className="img">
                                                    <Image src="/assets/images/resources/price-list-v1-trd-chart-2.png" alt="Chart Image" width={210} height={150} priority />
                                                </div>
                                                <ul className="list-item clearfix">
                                                    <li>
                                                        <span>2.8</span>
                                                    </li>
                                                    <li>
                                                        <span>2.7</span>
                                                    </li>
                                                    <li>
                                                        <span>2.6</span>
                                                    </li>
                                                    <li>
                                                        <span>2.5</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-price-list-style1__bottom">
                                        <div className="btn-box">
                                            <Link href="#">
                                                Start Your Trading
                                                <i className="icon-right-arrow"></i>
                                            </Link>
                                        </div>
                                        <div className="social-share-box">
                                            <div className="share">
                                                <p>Share price list</p>
                                                <span className="icon-share"></span>
                                            </div>
                                            <ul className="clearfix">
                                                <li>
                                                    <Link href="#">
                                                        <i className="icon-telegram"></i>
                                                        <p>Tg</p>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#">
                                                        <i className="icon-whatsapp"></i>
                                                        <p>Wa</p>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="single-price-list-style1">
                                    <div className="single-price-list-style1__icon">
                                        <Link onClick={() => { setIndex(3); setOpen(true); }} className="lightbox-image" href="">
                                            <i className="icon-maximize"></i>
                                        </Link>
                                    </div>
                                    <div className="single-price-list-style1__inner">
                                        <div className="left-box">
                                            <div className="top-box">
                                                <div className="inner">
                                                    <div className="title">
                                                        <h3>usd</h3>
                                                        <p>American Dollar</p>
                                                    </div>
                                                    <div className="flag">
                                                        <span className="icon-usa"><span
                                                                className="path1"></span><span
                                                                className="path2"></span><span
                                                                className="path3"></span></span>
                                                    </div>
                                                </div>
                                                <div className="bottom-title">
                                                    <h4>Buys</h4>
                                                    <h4>144.191</h4>
                                                </div>
                                            </div>
                                            <div className="icon-box">
                                                <i className="icon-mobile-data"></i>
                                            </div>
                                            <div className="top-box bottom-box">
                                                <div className="inner">
                                                    <div className="title">
                                                        <h3>jpy</h3>
                                                        <p>Japanese Yen</p>
                                                    </div>
                                                    <div className="flag">
                                                        <span className="icon-japan"><span
                                                                className="path1"></span><span
                                                                className="path2"></span></span>
                                                    </div>
                                                </div>
                                                <div className="bottom-title">
                                                    <h4>Sells</h4>
                                                    <h4>144.210</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="right-box">
                                            <div className="percent-text">
                                                <div className="select-box clearfix">
                                                    <CustomSelect
                                                        options={options}
                                                        placeholder="0.25%"
                                                        onChange={handleSelectChange}
                                                    />
                                                </div>
                                            </div>
                                            <div className="time-box">
                                                <ul className="clearfix">
                                                    <li>
                                                        <input type="radio" id="day333" name="time1"
                                                            defaultChecked />
                                                        <label htmlFor="day333">
                                                            <i></i>
                                                            <span>1D</span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <input type="radio" id="month333"
                                                            name="time1" />
                                                        <label htmlFor="month333">
                                                            <i></i>
                                                            <span>1M</span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <input type="radio" id="year333"
                                                            name="time1" />
                                                        <label htmlFor="year333">
                                                            <i></i>
                                                            <span>1Y</span>
                                                        </label>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="bottom-box">
                                                <div className="img">
                                                    <Image src="/assets/images/resources/price-list-v1-trd-chart-1.png" alt="Chart Image" width={210} height={150} priority />
                                                </div>
                                                <ul className="list-item clearfix">
                                                    <li>
                                                        <span>2.8</span>
                                                    </li>
                                                    <li>
                                                        <span>2.7</span>
                                                    </li>
                                                    <li>
                                                        <span>2.6</span>
                                                    </li>
                                                    <li>
                                                        <span>2.5</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-price-list-style1__bottom">
                                        <div className="btn-box">
                                            <Link href="#">
                                                Start Your Trading
                                                <i className="icon-right-arrow"></i>
                                            </Link>
                                        </div>
                                        <div className="social-share-box">
                                            <div className="share">
                                                <p>Share price list</p>
                                                <span className="icon-share"></span>
                                            </div>
                                            <ul className="clearfix">
                                                <li>
                                                    <Link href="#">
                                                        <i className="icon-telegram"></i>
                                                        <p>Tg</p>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#">
                                                        <i className="icon-whatsapp"></i>
                                                        <p>Wa</p>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="single-price-list-style1">
                                    <div className="single-price-list-style1__icon">
                                        <Link onClick={() => { setIndex(4); setOpen(true); }} className="lightbox-image" href="">
                                            <i className="icon-maximize"></i>
                                        </Link>
                                    </div>
                                    <div className="single-price-list-style1__inner">
                                        <div className="left-box">
                                            <div className="top-box">
                                                <div className="inner">
                                                    <div className="title">
                                                        <h3>usd</h3>
                                                        <p>American Dollar</p>
                                                    </div>
                                                    <div className="flag">
                                                        <span className="icon-usa"><span
                                                                className="path1"></span><span
                                                                className="path2"></span><span
                                                                className="path3"></span></span>
                                                    </div>
                                                </div>
                                                <div className="bottom-title">
                                                    <h4>Buys</h4>
                                                    <h4>1.11463</h4>
                                                </div>
                                            </div>
                                            <div className="icon-box">
                                                <i className="icon-mobile-data"></i>
                                            </div>
                                            <div className="top-box bottom-box">
                                                <div className="inner">
                                                    <div className="title">
                                                        <h3>eur</h3>
                                                        <p>Canadian Dollar</p>
                                                    </div>
                                                    <div className="flag">
                                                        <span className="icon-canada"><span
                                                                className="path1"></span><span
                                                                className="path2"></span><span
                                                                className="path3"></span><span
                                                                className="path4"></span></span>
                                                    </div>
                                                </div>
                                                <div className="bottom-title">
                                                    <h4>Sells</h4>
                                                    <h4>1.11565</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="right-box">
                                            <div className="percent-text">
                                                <div className="select-box clearfix">
                                                    <CustomSelect
                                                        options={optionsTwo}
                                                        placeholder="0.25%"
                                                        onChange={handleSelectChange}
                                                    />
                                                </div>
                                            </div>
                                            <div className="time-box">
                                                <ul className="clearfix">
                                                    <li>
                                                        <input type="radio" id="day444" name="month"
                                                            defaultChecked />
                                                        <label htmlFor="day444">
                                                            <i></i>
                                                            <span>1D</span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <input type="radio" id="month444"
                                                            name="month" />
                                                        <label htmlFor="month444">
                                                            <i></i>
                                                            <span>1M</span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <input type="radio" id="year444"
                                                            name="month" />
                                                        <label htmlFor="year444">
                                                            <i></i>
                                                            <span>1Y</span>
                                                        </label>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="bottom-box">
                                                <div className="img">
                                                    <Image src="/assets/images/resources/price-list-v1-trd-chart-2.png" alt="Chart Image" width={210} height={150} priority />
                                                </div>
                                                <ul className="list-item clearfix">
                                                    <li>
                                                        <span>2.8</span>
                                                    </li>
                                                    <li>
                                                        <span>2.7</span>
                                                    </li>
                                                    <li>
                                                        <span>2.6</span>
                                                    </li>
                                                    <li>
                                                        <span>2.5</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-price-list-style1__bottom">
                                        <div className="btn-box">
                                            <Link href="#">
                                                Start Your Trading
                                                <i className="icon-right-arrow"></i>
                                            </Link>
                                        </div>
                                        <div className="social-share-box">
                                            <div className="share">
                                                <p>Share price list</p>
                                                <span className="icon-share"></span>
                                            </div>
                                            <ul className="clearfix">
                                                <li>
                                                    <Link href="#">
                                                        <i className="icon-telegram"></i>
                                                        <p>Tg</p>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#">
                                                        <i className="icon-whatsapp"></i>
                                                        <p>Wa</p>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="single-price-list-style1">
                                    <div className="single-price-list-style1__icon">
                                        <Link onClick={() => { setIndex(5); setOpen(true); }} className="lightbox-image" href="">
                                            <i className="icon-maximize"></i>
                                        </Link>
                                    </div>
                                    <div className="single-price-list-style1__inner">
                                        <div className="left-box">
                                            <div className="top-box">
                                                <div className="inner">
                                                    <div className="title">
                                                        <h3>usd</h3>
                                                        <p>American Dollar</p>
                                                    </div>
                                                    <div className="flag">
                                                        <span className="icon-usa"><span
                                                                className="path1"></span><span
                                                                className="path2"></span><span
                                                                className="path3"></span></span>
                                                    </div>
                                                </div>
                                                <div className="bottom-title">
                                                    <h4>Buys</h4>
                                                    <h4>0.78004</h4>
                                                </div>
                                            </div>
                                            <div className="icon-box">
                                                <i className="icon-mobile-data"></i>
                                            </div>
                                            <div className="top-box bottom-box">
                                                <div className="inner">
                                                    <div className="title">
                                                        <h3>aud</h3>
                                                        <p>Australian Dollar</p>
                                                    </div>
                                                    <div className="flag">
                                                        <span className="icon-australia"><span
                                                                className="path1"></span><span
                                                                className="path2"></span><span
                                                                className="path3"></span><span
                                                                className="path4"></span><span
                                                                className="path5"></span><span
                                                                className="path6"></span><span
                                                                className="path7"></span><span
                                                                className="path8"></span><span
                                                                className="path9"></span><span
                                                                className="path10"></span><span
                                                                className="path11"></span><span
                                                                className="path12"></span></span>
                                                    </div>
                                                </div>
                                                <div className="bottom-title">
                                                    <h4>Sells</h4>
                                                    <h4>0.78026</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="right-box">
                                            <div className="percent-text">
                                                <div className="select-box clearfix">
                                                    <CustomSelect
                                                        options={optionsThree}
                                                        placeholder="0.25%"
                                                        onChange={handleSelectChange}
                                                    />
                                                </div>
                                            </div>
                                            <div className="time-box">
                                                <ul className="clearfix">
                                                    <li>
                                                        <input type="radio" id="day555" name="year"
                                                            defaultChecked />
                                                        <label htmlFor="day555">
                                                            <i></i>
                                                            <span>1D</span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <input type="radio" id="month555"
                                                            name="year" />
                                                        <label htmlFor="month555">
                                                            <i></i>
                                                            <span>1M</span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <input type="radio" id="year555"
                                                            name="year" />
                                                        <label htmlFor="year555">
                                                            <i></i>
                                                            <span>1Y</span>
                                                        </label>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="bottom-box">
                                                <div className="img">
                                                    <Image src="/assets/images/resources/price-list-v1-trd-chart-2.png" alt="Chart Image" width={210} height={150} priority />
                                                </div>
                                                <ul className="list-item clearfix">
                                                    <li>
                                                        <span>2.8</span>
                                                    </li>
                                                    <li>
                                                        <span>2.7</span>
                                                    </li>
                                                    <li>
                                                        <span>2.6</span>
                                                    </li>
                                                    <li>
                                                        <span>2.5</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-price-list-style1__bottom">
                                        <div className="btn-box">
                                            <Link href="#">
                                                Start Your Trading
                                                <i className="icon-right-arrow"></i>
                                            </Link>
                                        </div>
                                        <div className="social-share-box">
                                            <div className="share">
                                                <p>Share price list</p>
                                                <span className="icon-share"></span>
                                            </div>
                                            <ul className="clearfix">
                                                <li>
                                                    <Link href="#">
                                                        <i className="icon-telegram"></i>
                                                        <p>Tg</p>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#">
                                                        <i className="icon-whatsapp"></i>
                                                        <p>Wa</p>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <div className="owl-nav-style-one">
                                <div className="owl-nav">
                                    <button type="button" role="presentation" className="owl-prev"><span className="left icon-arrow-left"></span></button>
                                    <button type="button" role="presentation" className="owl-next"><span className="icon-arrow-right"></span></button>
                                </div>
                            </div>

                        </Swiper>
                    </div>
                </div>
            </div>
            <Lightbox
            open={open}
            index={index}
            close={() => setOpen(false)}
            slides={slides}
            />
        </section>
    </>
  )
}