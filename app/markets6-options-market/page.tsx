"use client";
import { useState } from "react";
import CountUp from "react-countup";
import Layout from "@/components/layout/Layout";
import Image from "next/image";
import Link from "next/link";
import VideoModal from "@/components/elements/VideoPopup";
import Video from "@/components/sections/home3/Video";
import Broker from "@/components/sections/home2/Broker";

export default function Options_Market() {

    // tab
    const [activeTab, setActiveTab] = useState("popular");

    return (
        <div className="body-bg-1">
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Options Market" breadcrumbTitleTwo="Markets">
                <section className="trade-forex-style1">
                    <div className="trade-forex-style1__inner">
                        <div className="trade-forex-style1__pattern"
                            style={{ backgroundImage: "url(/assets/images/pattern/trade-forex-v1-pattern.jpg)" }}>
                        </div>
                        <div className="container">
                            <div className="row">

                                <div className="col-xl-6">
                                    <div className="trade-forex-style1__content">
                                        <div className="sec-title">
                                            <div className="sub-title">
                                                <h4>Trade Forex</h4>
                                            </div>
                                            <h2>Discover the Dynamics of Forex</h2>
                                        </div>
                                        <div className="text">
                                            <p>Business it will frequently occur that pleasures have to be repudiated and
                                                annoyances accepted.</p>
                                        </div>
                                        <div className="total-pairs">
                                            <div className="icon">
                                                <span className="icon-right-chevron"><span className="path1"></span><span
                                                        className="path2"></span><span className="path3"></span>
                                                </span>
                                            </div>
                                            <div className="title">
                                                <h3>Trade Over 40 FX Pairs</h3>
                                                <p>Trouble that are bound to ensue and equal blame.</p>
                                            </div>
                                        </div>
                                        <div className="fact-counter">
                                            <div className="odometer-counting">
                                                <h2 className="odometer"><CountUp end={4} duration={2} />.6</h2>
                                                <span>k+</span>
                                            </div>
                                            <div className="text">
                                                <p>Trades Executed Daily</p>
                                            </div>
                                        </div>
                                        <div className="btn-box">
                                            <Link href="#">
                                                Start Trading Now
                                                <i className="icon-right-arrow"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-6">
                                    <div className="trade-forex-style1__img">
                                        <Image src="/assets/images/resources/trade-forex-v1-img1.jpg" alt="Image" width={570} height={525} priority />
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </section>

                <section className="currency-pairs-style1">
                    <div className="container">
                        <div className="sec-title withtext text-center">
                            <div className="sub-title">
                                <h4>Currency Pairs</h4>
                            </div>
                            <h2>Most Popular Currency Pairs</h2>
                            <div className="text">
                                <p>Discover the most competitive prices in the market, updated <br />regularly for your
                                    advantage.</p>
                            </div>
                        </div>

                        <div className="currency-pairs-style1__inner">

                            <div className="currency-pairs-style1__tab">
                                <div className="currency-pairs-style1__tab-btn">
                                    <ul className="tabs-button-box clearfix">
                                        <li className={`tab-btn-item ${activeTab === "popular" ? "active-btn-item" : ""}`} onClick={() => setActiveTab("popular")}>
                                            <h3>Popular</h3>
                                            <div className="icon">
                                                <i className="icon-arrow-down"></i>
                                            </div>
                                        </li>
                                        <li className={`tab-btn-item ${activeTab === "majors" ? "active-btn-item" : ""}`} onClick={() => setActiveTab("majors")}>
                                            <h3>Majors</h3>
                                            <div className="icon">
                                                <i className="icon-arrow-down"></i>
                                            </div>
                                        </li>
                                        <li className={`tab-btn-item ${activeTab === "minors" ? "active-btn-item" : ""}`} onClick={() => setActiveTab("minors")}>
                                            <h3>Minors</h3>
                                            <div className="icon">
                                                <i className="icon-arrow-down"></i>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="search-box">
                                        <form className="search-form" action="#">
                                            <input placeholder="Search the instruments..." type="text" />
                                            <button type="submit">
                                                <i className="icon-search"></i>
                                            </button>
                                        </form>
                                    </div>
                                </div>

                                <div className="tabs-content-box">

                                    {activeTab === "popular" && (
                                    <div className="tab-content-box-item tab-content-box-item-active fadeIn" id="popular">
                                        <div className="currency-pairs-style1-tab-content-box-item">

                                            <div className="single-currency-pairs-style1">
                                                <div className="table-outer">
                                                    <table className="pricing-table">
                                                        <thead className="table-header">
                                                            <tr>
                                                                <th className="name">Instrument</th>

                                                                <th>Sell</th>
                                                                <th>Buy</th>
                                                                <th>Spread</th>
                                                                <th>Chart</th>
                                                                <th>&nbsp;</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            
                                                            <tr>
                                                                <td>
                                                                    <div className="title">
                                                                        <h6>eur</h6>
                                                                        <div className="icon-box">
                                                                            <i className="icon-exchange"></i>
                                                                        </div>
                                                                        <h6>usd</h6>
                                                                    </div>
                                                                </td>

                                                                <td className="sell">
                                                                    $1.06199
                                                                </td>
                                                                <td className="buy">
                                                                    $1.06185
                                                                </td>
                                                                <td className="spread">
                                                                    -0.14%
                                                                </td>
                                                                <td>
                                                                    <div className="chart-box">
                                                                        <Image src="/assets/images/shapes/currency-v1-shape1.png" alt="Image" width={110} height={28} priority />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="btn-box">
                                                                        <VideoModal/>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            

                                                            <tr>
                                                                <td>
                                                                    <div className="title">
                                                                        <h6>usd</h6>
                                                                        <div className="icon-box">
                                                                            <i className="icon-exchange"></i>
                                                                        </div>
                                                                        <h6>jpy</h6>
                                                                    </div>
                                                                </td>
                                                                <td className="sell">
                                                                    $1.22195
                                                                </td>
                                                                <td className="buy">
                                                                    $1.22199
                                                                </td>
                                                                <td className="spread green">
                                                                    +0.04%
                                                                </td>
                                                                <td>
                                                                    <div className="chart-box">
                                                                        <Image src="/assets/images/shapes/currency-v1-shape3.png" alt="Image" width={110} height={28} priority />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="btn-box">
                                                                        <VideoModal/>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            
                                                            <tr>
                                                                <td>
                                                                    <div className="title">
                                                                        <h6>gbp</h6>
                                                                        <div className="icon-box">
                                                                            <i className="icon-exchange"></i>
                                                                        </div>
                                                                        <h6>usd</h6>
                                                                    </div>
                                                                </td>
                                                                <td className="sell">
                                                                    $0.65982
                                                                </td>
                                                                <td className="buy">
                                                                    $0.65994
                                                                </td>
                                                                <td className="spread green">
                                                                    +0.12%
                                                                </td>
                                                                <td>
                                                                    <div className="chart-box">
                                                                        <Image src="/assets/images/shapes/currency-v1-shape3.png" alt="Image" width={110} height={28} priority />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="btn-box">
                                                                        <VideoModal/>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            
                                                            <tr>
                                                                <td>
                                                                    <div className="title">
                                                                        <h6>aud</h6>
                                                                        <div className="icon-box">
                                                                            <i className="icon-exchange"></i>
                                                                        </div>
                                                                        <h6>usd</h6>
                                                                    </div>
                                                                </td>
                                                                <td className="sell">
                                                                    $0.89652
                                                                </td>
                                                                <td className="buy">
                                                                    $0.89665
                                                                </td>
                                                                <td className="spread green">
                                                                    +0.13%
                                                                </td>
                                                                <td>
                                                                    <div className="chart-box">
                                                                        <Image src="/assets/images/shapes/currency-v1-shape4.png" alt="Image" width={110} height={28} priority />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="btn-box">
                                                                        <VideoModal/>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            
                                                            <tr>
                                                                <td>
                                                                    <div className="title">
                                                                        <h6>eur</h6>
                                                                        <div className="icon-box">
                                                                            <i className="icon-exchange"></i>
                                                                        </div>
                                                                        <h6>gbp</h6>
                                                                    </div>
                                                                </td>
                                                                <td className="sell">
                                                                    $25.458
                                                                </td>
                                                                <td className="buy">
                                                                    $22.398
                                                                </td>
                                                                <td className="spread">
                                                                    -3.06%
                                                                </td>
                                                                <td>
                                                                    <div className="chart-box">
                                                                        <Image src="/assets/images/shapes/currency-v1-shape5.png" alt="Image" width={110} height={28} priority />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="btn-box">
                                                                        <VideoModal/>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            
                                                            <tr>
                                                                <td>
                                                                    <div className="title">
                                                                        <h6>aud</h6>
                                                                        <div className="icon-box">
                                                                            <i className="icon-exchange"></i>
                                                                        </div>
                                                                        <h6>cad</h6>
                                                                    </div>
                                                                </td>
                                                                <td className="sell">
                                                                    $14.785
                                                                </td>
                                                                <td className="buy">
                                                                    $13.625
                                                                </td>
                                                                <td className="spread">
                                                                    -1.16%
                                                                </td>
                                                                <td>
                                                                    <div className="chart-box">
                                                                        <Image src="/assets/images/shapes/currency-v1-shape6.png" alt="Image" width={110} height={28} priority />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="btn-box">
                                                                        <VideoModal/>
                                                                    </div>
                                                                </td>
                                                            </tr>

                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    )}

                                    {activeTab === "majors" && (
                                    <div className="tab-content-box-item tab-content-box-item-active fadeIn" id="majors">
                                        <div className="currency-pairs-style1-tab-content-box-item">

                                            <div className="single-currency-pairs-style1">
                                                <div className="table-outer">
                                                    <table className="pricing-table">
                                                        <thead className="table-header">
                                                            <tr>
                                                                <th className="name">Instrument</th>

                                                                <th>Sell</th>
                                                                <th>Buy</th>
                                                                <th>Spread</th>
                                                                <th>Chart</th>
                                                                <th>&nbsp;</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            
                                                            <tr>
                                                                <td>
                                                                    <div className="title">
                                                                        <h6>eur</h6>
                                                                        <div className="icon-box">
                                                                            <i className="icon-exchange"></i>
                                                                        </div>
                                                                        <h6>usd</h6>
                                                                    </div>
                                                                </td>

                                                                <td className="sell">
                                                                    $1.06199
                                                                </td>
                                                                <td className="buy">
                                                                    $1.06185
                                                                </td>
                                                                <td className="spread">
                                                                    -0.14%
                                                                </td>
                                                                <td>
                                                                    <div className="chart-box">
                                                                        <Image src="/assets/images/shapes/currency-v1-shape1.png" alt="Image" width={110} height={28} priority />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="btn-box">
                                                                        <VideoModal/>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            

                                                            <tr>
                                                                <td>
                                                                    <div className="title">
                                                                        <h6>usd</h6>
                                                                        <div className="icon-box">
                                                                            <i className="icon-exchange"></i>
                                                                        </div>
                                                                        <h6>jpy</h6>
                                                                    </div>
                                                                </td>
                                                                <td className="sell">
                                                                    $1.22195
                                                                </td>
                                                                <td className="buy">
                                                                    $1.22199
                                                                </td>
                                                                <td className="spread green">
                                                                    +0.04%
                                                                </td>
                                                                <td>
                                                                    <div className="chart-box">
                                                                        <Image src="/assets/images/shapes/currency-v1-shape3.png" alt="Image" width={110} height={28} priority />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="btn-box">
                                                                        <VideoModal/>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            
                                                            <tr>
                                                                <td>
                                                                    <div className="title">
                                                                        <h6>gbp</h6>
                                                                        <div className="icon-box">
                                                                            <i className="icon-exchange"></i>
                                                                        </div>
                                                                        <h6>usd</h6>
                                                                    </div>
                                                                </td>
                                                                <td className="sell">
                                                                    $0.65982
                                                                </td>
                                                                <td className="buy">
                                                                    $0.65994
                                                                </td>
                                                                <td className="spread green">
                                                                    +0.12%
                                                                </td>
                                                                <td>
                                                                    <div className="chart-box">
                                                                        <Image src="/assets/images/shapes/currency-v1-shape3.png" alt="Image" width={110} height={28} priority />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="btn-box">
                                                                        <VideoModal/>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            
                                                            <tr>
                                                                <td>
                                                                    <div className="title">
                                                                        <h6>aud</h6>
                                                                        <div className="icon-box">
                                                                            <i className="icon-exchange"></i>
                                                                        </div>
                                                                        <h6>usd</h6>
                                                                    </div>
                                                                </td>
                                                                <td className="sell">
                                                                    $0.89652
                                                                </td>
                                                                <td className="buy">
                                                                    $0.89665
                                                                </td>
                                                                <td className="spread green">
                                                                    +0.13%
                                                                </td>
                                                                <td>
                                                                    <div className="chart-box">
                                                                        <Image src="/assets/images/shapes/currency-v1-shape4.png" alt="Image" width={110} height={28} priority />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="btn-box">
                                                                        <VideoModal/>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            
                                                            <tr>
                                                                <td>
                                                                    <div className="title">
                                                                        <h6>eur</h6>
                                                                        <div className="icon-box">
                                                                            <i className="icon-exchange"></i>
                                                                        </div>
                                                                        <h6>gbp</h6>
                                                                    </div>
                                                                </td>
                                                                <td className="sell">
                                                                    $25.458
                                                                </td>
                                                                <td className="buy">
                                                                    $22.398
                                                                </td>
                                                                <td className="spread">
                                                                    -3.06%
                                                                </td>
                                                                <td>
                                                                    <div className="chart-box">
                                                                        <Image src="/assets/images/shapes/currency-v1-shape5.png" alt="Image" width={110} height={28} priority />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="btn-box">
                                                                        <VideoModal/>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            
                                                            <tr>
                                                                <td>
                                                                    <div className="title">
                                                                        <h6>aud</h6>
                                                                        <div className="icon-box">
                                                                            <i className="icon-exchange"></i>
                                                                        </div>
                                                                        <h6>cad</h6>
                                                                    </div>
                                                                </td>
                                                                <td className="sell">
                                                                    $14.785
                                                                </td>
                                                                <td className="buy">
                                                                    $13.625
                                                                </td>
                                                                <td className="spread">
                                                                    -1.16%
                                                                </td>
                                                                <td>
                                                                    <div className="chart-box">
                                                                        <Image src="/assets/images/shapes/currency-v1-shape6.png" alt="Image" width={110} height={28} priority />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="btn-box">
                                                                        <VideoModal/>
                                                                    </div>
                                                                </td>
                                                            </tr>

                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    )}

                                    {activeTab === "minors" && (
                                    <div className="tab-content-box-item tab-content-box-item-active fadeIn" id="minors">
                                        <div className="currency-pairs-style1-tab-content-box-item">

                                            <div className="single-currency-pairs-style1">
                                                <div className="table-outer">
                                                    <table className="pricing-table">
                                                        <thead className="table-header">
                                                            <tr>
                                                                <th className="name">Instrument</th>

                                                                <th>Sell</th>
                                                                <th>Buy</th>
                                                                <th>Spread</th>
                                                                <th>Chart</th>
                                                                <th>&nbsp;</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            
                                                            <tr>
                                                                <td>
                                                                    <div className="title">
                                                                        <h6>eur</h6>
                                                                        <div className="icon-box">
                                                                            <i className="icon-exchange"></i>
                                                                        </div>
                                                                        <h6>usd</h6>
                                                                    </div>
                                                                </td>

                                                                <td className="sell">
                                                                    $1.06199
                                                                </td>
                                                                <td className="buy">
                                                                    $1.06185
                                                                </td>
                                                                <td className="spread">
                                                                    -0.14%
                                                                </td>
                                                                <td>
                                                                    <div className="chart-box">
                                                                        <Image src="/assets/images/shapes/currency-v1-shape1.png" alt="Image" width={110} height={28} priority />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="btn-box">
                                                                        <VideoModal/>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            

                                                            <tr>
                                                                <td>
                                                                    <div className="title">
                                                                        <h6>usd</h6>
                                                                        <div className="icon-box">
                                                                            <i className="icon-exchange"></i>
                                                                        </div>
                                                                        <h6>jpy</h6>
                                                                    </div>
                                                                </td>
                                                                <td className="sell">
                                                                    $1.22195
                                                                </td>
                                                                <td className="buy">
                                                                    $1.22199
                                                                </td>
                                                                <td className="spread green">
                                                                    +0.04%
                                                                </td>
                                                                <td>
                                                                    <div className="chart-box">
                                                                        <Image src="/assets/images/shapes/currency-v1-shape3.png" alt="Image" width={110} height={28} priority />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="btn-box">
                                                                        <VideoModal/>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            
                                                            <tr>
                                                                <td>
                                                                    <div className="title">
                                                                        <h6>gbp</h6>
                                                                        <div className="icon-box">
                                                                            <i className="icon-exchange"></i>
                                                                        </div>
                                                                        <h6>usd</h6>
                                                                    </div>
                                                                </td>
                                                                <td className="sell">
                                                                    $0.65982
                                                                </td>
                                                                <td className="buy">
                                                                    $0.65994
                                                                </td>
                                                                <td className="spread green">
                                                                    +0.12%
                                                                </td>
                                                                <td>
                                                                    <div className="chart-box">
                                                                        <Image src="/assets/images/shapes/currency-v1-shape3.png" alt="Image" width={110} height={28} priority />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="btn-box">
                                                                        <VideoModal/>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            
                                                            <tr>
                                                                <td>
                                                                    <div className="title">
                                                                        <h6>aud</h6>
                                                                        <div className="icon-box">
                                                                            <i className="icon-exchange"></i>
                                                                        </div>
                                                                        <h6>usd</h6>
                                                                    </div>
                                                                </td>
                                                                <td className="sell">
                                                                    $0.89652
                                                                </td>
                                                                <td className="buy">
                                                                    $0.89665
                                                                </td>
                                                                <td className="spread green">
                                                                    +0.13%
                                                                </td>
                                                                <td>
                                                                    <div className="chart-box">
                                                                        <Image src="/assets/images/shapes/currency-v1-shape4.png" alt="Image" width={110} height={28} priority />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="btn-box">
                                                                        <VideoModal/>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            
                                                            <tr>
                                                                <td>
                                                                    <div className="title">
                                                                        <h6>eur</h6>
                                                                        <div className="icon-box">
                                                                            <i className="icon-exchange"></i>
                                                                        </div>
                                                                        <h6>gbp</h6>
                                                                    </div>
                                                                </td>
                                                                <td className="sell">
                                                                    $25.458
                                                                </td>
                                                                <td className="buy">
                                                                    $22.398
                                                                </td>
                                                                <td className="spread">
                                                                    -3.06%
                                                                </td>
                                                                <td>
                                                                    <div className="chart-box">
                                                                        <Image src="/assets/images/shapes/currency-v1-shape5.png" alt="Image" width={110} height={28} priority />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="btn-box">
                                                                        <VideoModal/>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            
                                                            <tr>
                                                                <td>
                                                                    <div className="title">
                                                                        <h6>aud</h6>
                                                                        <div className="icon-box">
                                                                            <i className="icon-exchange"></i>
                                                                        </div>
                                                                        <h6>cad</h6>
                                                                    </div>
                                                                </td>
                                                                <td className="sell">
                                                                    $14.785
                                                                </td>
                                                                <td className="buy">
                                                                    $13.625
                                                                </td>
                                                                <td className="spread">
                                                                    -1.16%
                                                                </td>
                                                                <td>
                                                                    <div className="chart-box">
                                                                        <Image src="/assets/images/shapes/currency-v1-shape6.png" alt="Image" width={110} height={28} priority />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="btn-box">
                                                                        <VideoModal/>
                                                                    </div>
                                                                </td>
                                                            </tr>

                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    )}
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                <Video/>
                <Broker/>

            </Layout>
        </div>
    )
}
