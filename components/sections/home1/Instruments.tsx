"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import CustomSelect from "@/components/elements/CustomSelect";

export default function Instruments() {

    // tab
    const [activeTab, setActiveTab] = useState("forex");

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
        <section className="instruments-style1">
            <div className="instruments-style1__shape1">
                <Image src="/assets/images/shapes/instruments--v1-shape1.png" alt="Shape" width={647} height={648} priority />
            </div>
            <div className="instruments-style1__shape2">
                <Image src="/assets/images/shapes/instruments--v1-shape2.png" alt="Shape" width={572} height={487} priority />
            </div>
            <div className="instruments-style1__tab">

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
                    <div className="instruments-style1__inner">

                        <div className="instruments-style1__tab-btn">
                            <ul className="tabs-button-box clearfix">
                                <li className={`tab-btn-item ${activeTab === "forex" ? "active-btn-item" : ""}`} onClick={() => setActiveTab("forex")}>
                                    <h4>Forex</h4>
                                    <div className="icon">
                                        <i className="icon-arrow-down"></i>
                                    </div>
                                </li>
                                <li className={`tab-btn-item ${activeTab === "energies" ? "active-btn-item" : ""}`} onClick={() => setActiveTab("energies")}>
                                    <h4>Energies</h4>
                                    <div className="icon">
                                        <i className="icon-arrow-down"></i>
                                    </div>
                                </li>
                                <li className={`tab-btn-item ${activeTab === "shares" ? "active-btn-item" : ""}`} onClick={() => setActiveTab("shares")}>
                                    <h4>Shares</h4>
                                    <div className="icon">
                                        <i className="icon-arrow-down"></i>
                                    </div>
                                </li>
                                <li className={`tab-btn-item ${activeTab === "indices" ? "active-btn-item" : ""}`} onClick={() => setActiveTab("indices")}>
                                    <h4>Indices</h4>
                                    <div className="icon">
                                        <i className="icon-arrow-down"></i>
                                    </div>
                                </li>
                                <li className={`tab-btn-item ${activeTab === "metals" ? "active-btn-item" : ""}`} onClick={() => setActiveTab("metals")}>
                                    <h4>Metals</h4>
                                    <div className="icon">
                                        <i className="icon-arrow-down"></i>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="tabs-content-box">
                            {activeTab === "forex" && (
                            <div className="tab-content-box-item tab-content-box-item-active fadeIn" id="forex">
                                <div className="instruments-style1-tab-content-box-item">
                                    
                                    <div className="single-instruments-style1">
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6">
                                                <div className="single-instruments-style1__img">
                                                    <Image src="/assets/images/resources/instruments-v1-1.jpg" alt="Chart Image" width={540} height={420} priority />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6">
                                                <div className="single-instruments-style1__content">
                                                    <div className="title">
                                                        <h2>Explore Global Currencies</h2>
                                                    </div>
                                                    <div className="text">
                                                        <p>Every pleasure is to be welcomed every pain avoided
                                                            duty or all that obligations of business.</p>
                                                    </div>
                                                    <ul className="list-item clearfix">
                                                        <li>
                                                            <div className="icon">
                                                                <span className="icon-checkmark"></span>
                                                            </div>
                                                            <div className="title1">
                                                                <h3>1:500</h3>
                                                                <p>Leverage options available.</p>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="icon">
                                                                <span className="icon-checkmark"></span>
                                                            </div>
                                                            <div className="title1">
                                                                <h3>0.1</h3>
                                                                <p>Pips is the starting spread you can enjoy.</p>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="icon">
                                                                <span className="icon-checkmark"></span>
                                                            </div>
                                                            <div className="title1">
                                                                <h3>40+</h3>
                                                                <p>Technical indicators & charting tools.</p>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    

                                    <div className="auto-container price-list-style1--outer">
                                        <div className="price-list-style1">
                                            <div className="row">
                                                
                                                <div className="col-xl-4 col-lg-6 col-md-12">
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
                                                                            <input type="radio" id="day" name="time1"
                                                                                defaultChecked />
                                                                            <label htmlFor="day">
                                                                                <i></i>
                                                                                <span>1D</span>
                                                                            </label>
                                                                        </li>
                                                                        <li>
                                                                            <input type="radio" id="month" name="time1" />
                                                                            <label htmlFor="month">
                                                                                <i></i>
                                                                                <span>1M</span>
                                                                            </label>
                                                                        </li>
                                                                        <li>
                                                                            <input type="radio" id="year" name="time1" />
                                                                            <label htmlFor="year">
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
                                                </div>
                                                

                                                <div className="col-xl-4 col-lg-6 col-md-12">
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
                                                                        <div className="select-box clearfix">
                                                                        <CustomSelect
                                                                            options={optionsTwo}
                                                                            placeholder="0.25%"
                                                                            onChange={handleSelectChange}
                                                                        />
                                                                    </div>
                                                                    </div>
                                                                </div>
                                                                <div className="time-box">
                                                                    <ul className="clearfix">
                                                                        <li>
                                                                            <input type="radio" id="day1" name="month"
                                                                                defaultChecked />
                                                                            <label htmlFor="day1">
                                                                                <i></i>
                                                                                <span>1D</span>
                                                                            </label>
                                                                        </li>
                                                                        <li>
                                                                            <input type="radio" id="month1"
                                                                                name="month" />
                                                                            <label htmlFor="month1">
                                                                                <i></i>
                                                                                <span>1M</span>
                                                                            </label>
                                                                        </li>
                                                                        <li>
                                                                            <input type="radio" id="year1" name="month" />
                                                                            <label htmlFor="year1">
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
                                                </div>
                                                

                                                <div className="col-xl-4 col-lg-6 col-md-12">
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
                                                                        <div className="select-box clearfix">
                                                                        <CustomSelect
                                                                            options={optionsThree}
                                                                            placeholder="0.25%"
                                                                            onChange={handleSelectChange}
                                                                        />
                                                                    </div>
                                                                    </div>
                                                                </div>
                                                                <div className="time-box">
                                                                    <ul className="clearfix">
                                                                        <li>
                                                                            <input type="radio" id="day2" name="year"
                                                                                defaultChecked />
                                                                            <label htmlFor="day2">
                                                                                <i></i>
                                                                                <span>1D</span>
                                                                            </label>
                                                                        </li>
                                                                        <li>
                                                                            <input type="radio" id="month2" name="year" />
                                                                            <label htmlFor="month2">
                                                                                <i></i>
                                                                                <span>1M</span>
                                                                            </label>
                                                                        </li>
                                                                        <li>
                                                                            <input type="radio" id="year2" name="year" />
                                                                            <label htmlFor="year2">
                                                                                <i></i>
                                                                                <span>1Y</span>
                                                                            </label>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div className="bottom-box">
                                                                    <div className="img">
                                                                        <Image src="/assets/images/resources/price-list-v1-trd-chart-3.png" alt="Chart Image" width={210} height={150} priority />
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
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            )}

                            {activeTab === "energies" && (
                            <div className="tab-content-box-item tab-content-box-item-active fadeIn" id="energies">
                                <div className="instruments-style1-tab-content-box-item">
                                    
                                    <div className="single-instruments-style1">
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6">
                                                <div className="single-instruments-style1__img">
                                                    <Image src="/assets/images/resources/instruments-v1-2.jpg" alt="Chart Image" width={540} height={420} priority />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6">
                                                <div className="single-instruments-style1__content">
                                                    <div className="title">
                                                        <h2>Explore Global Currencies</h2>
                                                    </div>
                                                    <div className="text">
                                                        <p>Every pleasure is to be welcomed every pain avoided
                                                            duty or all that obligations of business.</p>
                                                    </div>
                                                    <ul className="list-item clearfix">
                                                        <li>
                                                            <div className="icon">
                                                                <span className="icon-checkmark"></span>
                                                            </div>
                                                            <div className="title1">
                                                                <h3>1:500</h3>
                                                                <p>Leverage options available.</p>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="icon">
                                                                <span className="icon-checkmark"></span>
                                                            </div>
                                                            <div className="title1">
                                                                <h3>0.1</h3>
                                                                <p>Pips is the starting spread you can enjoy.</p>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="icon">
                                                                <span className="icon-checkmark"></span>
                                                            </div>
                                                            <div className="title1">
                                                                <h3>40+</h3>
                                                                <p>Technical indicators & charting tools.</p>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    

                                    <div className="auto-container price-list-style1--outer">
                                        <div className="price-list-style1">
                                            <div className="row">
                                                
                                                <div className="col-xl-4 col-lg-6 col-md-12">
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
                                                                            <input type="radio" id="day00" name="time1"
                                                                                defaultChecked />
                                                                            <label htmlFor="day00">
                                                                                <i></i>
                                                                                <span>1D</span>
                                                                            </label>
                                                                        </li>
                                                                        <li>
                                                                            <input type="radio" id="month00"
                                                                                name="time1" />
                                                                            <label htmlFor="month00">
                                                                                <i></i>
                                                                                <span>1M</span>
                                                                            </label>
                                                                        </li>
                                                                        <li>
                                                                            <input type="radio" id="year00"
                                                                                name="time1" />
                                                                            <label htmlFor="year00">
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
                                                </div>
                                                

                                                <div className="col-xl-4 col-lg-6 col-md-12">
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
                                                                            <input type="radio" id="day101" name="month"
                                                                                defaultChecked />
                                                                            <label htmlFor="day101">
                                                                                <i></i>
                                                                                <span>1D</span>
                                                                            </label>
                                                                        </li>
                                                                        <li>
                                                                            <input type="radio" id="month101"
                                                                                name="month" />
                                                                            <label htmlFor="month101">
                                                                                <i></i>
                                                                                <span>1M</span>
                                                                            </label>
                                                                        </li>
                                                                        <li>
                                                                            <input type="radio" id="year101"
                                                                                name="month" />
                                                                            <label htmlFor="year101">
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
                                                </div>
                                                

                                                <div className="col-xl-4 col-lg-6 col-md-12">
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
                                                                            <input type="radio" id="day202" name="year"
                                                                                defaultChecked />
                                                                            <label htmlFor="day202">
                                                                                <i></i>
                                                                                <span>1D</span>
                                                                            </label>
                                                                        </li>
                                                                        <li>
                                                                            <input type="radio" id="month202"
                                                                                name="year" />
                                                                            <label htmlFor="month202">
                                                                                <i></i>
                                                                                <span>1M</span>
                                                                            </label>
                                                                        </li>
                                                                        <li>
                                                                            <input type="radio" id="year202"
                                                                                name="year" />
                                                                            <label htmlFor="year202">
                                                                                <i></i>
                                                                                <span>1Y</span>
                                                                            </label>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div className="bottom-box">
                                                                    <div className="img">
                                                                        <Image src="/assets/images/resources/price-list-v1-trd-chart-3.png" alt="Chart Image" width={210} height={150} priority />
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
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            )}
                            
                            {activeTab === "shares" && (
                            <div className="tab-content-box-item tab-content-box-item-active fadeIn" id="shares">
                                <div className="instruments-style1-tab-content-box-item">

                                    <div className="single-instruments-style1">
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6">
                                                <div className="single-instruments-style1__img">
                                                    <Image src="/assets/images/resources/instruments-v1-3.jpg" alt="Chart Image" width={540} height={420} priority />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6">
                                                <div className="single-instruments-style1__content">
                                                    <div className="title">
                                                        <h2>Explore Global Currencies</h2>
                                                    </div>
                                                    <div className="text">
                                                        <p>Every pleasure is to be welcomed every pain avoided
                                                            duty or all that obligations of business.</p>
                                                    </div>
                                                    <ul className="list-item clearfix">
                                                        <li>
                                                            <div className="icon">
                                                                <span className="icon-checkmark"></span>
                                                            </div>
                                                            <div className="title1">
                                                                <h3>1:500</h3>
                                                                <p>Leverage options available.</p>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="icon">
                                                                <span className="icon-checkmark"></span>
                                                            </div>
                                                            <div className="title1">
                                                                <h3>0.1</h3>
                                                                <p>Pips is the starting spread you can enjoy.</p>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="icon">
                                                                <span className="icon-checkmark"></span>
                                                            </div>
                                                            <div className="title1">
                                                                <h3>40+</h3>
                                                                <p>Technical indicators & charting tools.</p>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    

                                    <div className="auto-container price-list-style1--outer">
                                        <div className="price-list-style1">
                                            <div className="row">
                                                
                                                <div className="col-xl-4 col-lg-6 col-md-12">
                                                    <div className="single-price-list-style1">
                                                        <div className="single-price-list-style1__icon">
                                                            <Link onClick={() => { setIndex(6); setOpen(true); }} className="lightbox-image" href="">
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
                                                                            <input type="radio" id="day505" name="time1"
                                                                                defaultChecked />
                                                                            <label htmlFor="day505">
                                                                                <i></i>
                                                                                <span>1D</span>
                                                                            </label>
                                                                        </li>
                                                                        <li>
                                                                            <input type="radio" id="month505"
                                                                                name="time1" />
                                                                            <label htmlFor="month505">
                                                                                <i></i>
                                                                                <span>1M</span>
                                                                            </label>
                                                                        </li>
                                                                        <li>
                                                                            <input type="radio" id="year505"
                                                                                name="time1" />
                                                                            <label htmlFor="year505">
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
                                                </div>
                                                

                                                <div className="col-xl-4 col-lg-6 col-md-12">
                                                    <div className="single-price-list-style1">
                                                        <div className="single-price-list-style1__icon">
                                                            <Link onClick={() => { setIndex(7); setOpen(true); }} className="lightbox-image" href="">
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
                                                                            <input type="radio" id="day606" name="month"
                                                                                defaultChecked />
                                                                            <label htmlFor="day606">
                                                                                <i></i>
                                                                                <span>1D</span>
                                                                            </label>
                                                                        </li>
                                                                        <li>
                                                                            <input type="radio" id="month606"
                                                                                name="month" />
                                                                            <label htmlFor="month606">
                                                                                <i></i>
                                                                                <span>1M</span>
                                                                            </label>
                                                                        </li>
                                                                        <li>
                                                                            <input type="radio" id="year606"
                                                                                name="month" />
                                                                            <label htmlFor="year606">
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
                                                </div>
                                                

                                                <div className="col-xl-4 col-lg-6 col-md-12">
                                                    <div className="single-price-list-style1">
                                                        <div className="single-price-list-style1__icon">
                                                            <Link onClick={() => { setIndex(8); setOpen(true); }} className="lightbox-image" href="">
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
                                                                            <input type="radio" id="day707" name="year"
                                                                                defaultChecked />
                                                                            <label htmlFor="day707">
                                                                                <i></i>
                                                                                <span>1D</span>
                                                                            </label>
                                                                        </li>
                                                                        <li>
                                                                            <input type="radio" id="month707"
                                                                                name="year" />
                                                                            <label htmlFor="month707">
                                                                                <i></i>
                                                                                <span>1M</span>
                                                                            </label>
                                                                        </li>
                                                                        <li>
                                                                            <input type="radio" id="year707"
                                                                                name="year" />
                                                                            <label htmlFor="year707">
                                                                                <i></i>
                                                                                <span>1Y</span>
                                                                            </label>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div className="bottom-box">
                                                                    <div className="img">
                                                                        <Image src="/assets/images/resources/price-list-v1-trd-chart-3.png" alt="Chart Image" width={210} height={150} priority />
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
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            )}
                            
                            {activeTab === "indices" && (
                            <div className="tab-content-box-item tab-content-box-item-active fadeIn" id="indices">
                                <div className="instruments-style1-tab-content-box-item">
                                    
                                    <div className="single-instruments-style1">
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6">
                                                <div className="single-instruments-style1__img">
                                                    <Image src="/assets/images/resources/instruments-v1-4.jpg" alt="Chart Image" width={540} height={420} priority />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6">
                                                <div className="single-instruments-style1__content">
                                                    <div className="title">
                                                        <h2>Explore Global Currencies</h2>
                                                    </div>
                                                    <div className="text">
                                                        <p>Every pleasure is to be welcomed every pain avoided
                                                            duty or all that obligations of business.</p>
                                                    </div>
                                                    <ul className="list-item clearfix">
                                                        <li>
                                                            <div className="icon">
                                                                <span className="icon-checkmark"></span>
                                                            </div>
                                                            <div className="title1">
                                                                <h3>1:500</h3>
                                                                <p>Leverage options available.</p>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="icon">
                                                                <span className="icon-checkmark"></span>
                                                            </div>
                                                            <div className="title1">
                                                                <h3>0.1</h3>
                                                                <p>Pips is the starting spread you can enjoy.</p>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="icon">
                                                                <span className="icon-checkmark"></span>
                                                            </div>
                                                            <div className="title1">
                                                                <h3>40+</h3>
                                                                <p>Technical indicators & charting tools.</p>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    

                                    <div className="auto-container price-list-style1--outer">
                                        <div className="price-list-style1">
                                            <div className="row">
                                                
                                                <div className="col-xl-4 col-lg-6 col-md-12">
                                                    <div className="single-price-list-style1">
                                                        <div className="single-price-list-style1__icon">
                                                            <Link onClick={() => { setIndex(9); setOpen(true); }} className="lightbox-image" href="">
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
                                                                            <input type="radio" id="day808" name="time1"
                                                                                defaultChecked />
                                                                            <label htmlFor="day808">
                                                                                <i></i>
                                                                                <span>1D</span>
                                                                            </label>
                                                                        </li>
                                                                        <li>
                                                                            <input type="radio" id="month808"
                                                                                name="time1" />
                                                                            <label htmlFor="month808">
                                                                                <i></i>
                                                                                <span>1M</span>
                                                                            </label>
                                                                        </li>
                                                                        <li>
                                                                            <input type="radio" id="year808"
                                                                                name="time1" />
                                                                            <label htmlFor="year808">
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
                                                </div>
                                                

                                                <div className="col-xl-4 col-lg-6 col-md-12">
                                                    <div className="single-price-list-style1">
                                                        <div className="single-price-list-style1__icon">
                                                            <Link onClick={() => { setIndex(10); setOpen(true); }} className="lightbox-image" href="">
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
                                                                            <input type="radio" id="day909" name="month"
                                                                                defaultChecked />
                                                                            <label htmlFor="day909">
                                                                                <i></i>
                                                                                <span>1D</span>
                                                                            </label>
                                                                        </li>
                                                                        <li>
                                                                            <input type="radio" id="month909"
                                                                                name="month" />
                                                                            <label htmlFor="month909">
                                                                                <i></i>
                                                                                <span>1M</span>
                                                                            </label>
                                                                        </li>
                                                                        <li>
                                                                            <input type="radio" id="year909"
                                                                                name="month" />
                                                                            <label htmlFor="year909">
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
                                                </div>
                                                

                                                <div className="col-xl-4 col-lg-6 col-md-12">
                                                    <div className="single-price-list-style1">
                                                        <div className="single-price-list-style1__icon">
                                                            <Link onClick={() => { setIndex(11); setOpen(true); }} className="lightbox-image" href="">
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
                                                                            <input type="radio" id="day111" name="year"
                                                                                defaultChecked />
                                                                            <label htmlFor="day111">
                                                                                <i></i>
                                                                                <span>1D</span>
                                                                            </label>
                                                                        </li>
                                                                        <li>
                                                                            <input type="radio" id="month222"
                                                                                name="year" />
                                                                            <label htmlFor="month222">
                                                                                <i></i>
                                                                                <span>1M</span>
                                                                            </label>
                                                                        </li>
                                                                        <li>
                                                                            <input type="radio" id="year222"
                                                                                name="year" />
                                                                            <label htmlFor="year222">
                                                                                <i></i>
                                                                                <span>1Y</span>
                                                                            </label>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div className="bottom-box">
                                                                    <div className="img">
                                                                        <Image src="/assets/images/resources/price-list-v1-trd-chart-3.png" alt="Chart Image" width={210} height={150} priority />
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
                                                </div>
                                                

                                            </div>
                                        </div>
                                    </div>
                                    

                                </div>
                            </div>
                            )}
                            
                            {activeTab === "metals" && (
                            <div className="tab-content-box-item tab-content-box-item-active fadeIn" id="metals">
                                <div className="instruments-style1-tab-content-box-item">
                                    
                                    <div className="single-instruments-style1">
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6">
                                                <div className="single-instruments-style1__img">
                                                    <Image src="/assets/images/resources/instruments-v1-5.jpg" alt="Chart Image" width={540} height={420} priority />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6">
                                                <div className="single-instruments-style1__content">
                                                    <div className="title">
                                                        <h2>Explore Global Currencies</h2>
                                                    </div>
                                                    <div className="text">
                                                        <p>Every pleasure is to be welcomed every pain avoided
                                                            duty or all that obligations of business.</p>
                                                    </div>
                                                    <ul className="list-item clearfix">
                                                        <li>
                                                            <div className="icon">
                                                                <span className="icon-checkmark"></span>
                                                            </div>
                                                            <div className="title1">
                                                                <h3>1:500</h3>
                                                                <p>Leverage options available.</p>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="icon">
                                                                <span className="icon-checkmark"></span>
                                                            </div>
                                                            <div className="title1">
                                                                <h3>0.1</h3>
                                                                <p>Pips is the starting spread you can enjoy.</p>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="icon">
                                                                <span className="icon-checkmark"></span>
                                                            </div>
                                                            <div className="title1">
                                                                <h3>40+</h3>
                                                                <p>Technical indicators & charting tools.</p>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    

                                    <div className="auto-container price-list-style1--outer">
                                        <div className="price-list-style1">
                                            <div className="row">
                                                
                                                <div className="col-xl-4 col-lg-6 col-md-12">
                                                    <div className="single-price-list-style1">
                                                        <div className="single-price-list-style1__icon">
                                                            <Link onClick={() => { setIndex(12); setOpen(true); }} className="lightbox-image" href="">
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
                                                </div>
                                                

                                                <div className="col-xl-4 col-lg-6 col-md-12">
                                                    <div className="single-price-list-style1">
                                                        <div className="single-price-list-style1__icon">
                                                            <Link onClick={() => { setIndex(13); setOpen(true); }} className="lightbox-image" href="">
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
                                                </div>
                                                

                                                <div className="col-xl-4 col-lg-6 col-md-12">
                                                    <div className="single-price-list-style1">
                                                        <div className="single-price-list-style1__icon">
                                                            <Link onClick={() => { setIndex(14); setOpen(true); }} className="lightbox-image" href="">
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
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            )}

                        </div>
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