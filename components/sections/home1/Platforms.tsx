"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";


export default function Platforms() {

    // tab
    const [activeTab, setActiveTab] = useState("trader-4");

  return (
    <>
        <section className="platforms-style1">
            <div className="container">
                <div className="sec-title white">
                    <div className="sub-title">
                        <h4>Platforms</h4>
                    </div>
                    <h2>Powerful Trading Platforms for Every Trader</h2>
                </div>
                <div className="platforms-style1__inner">

                    <div className="platforms-style1__tab">

                        <div className="platforms-style1__img">
                            <div className="shape">
                                <Image src="/assets/images/shapes/platforms-v1-shape1.png" alt="Shape" width={567} height={370} priority />
                            </div>
                            <div className="inner">
                                <Image src="/assets/images/resources/platforms-v1-1.png" alt="Image" width={455} height={565} priority />
                            </div>
                        </div>



                        <div className="platforms-style1__content">

                            <div className="platforms-style1__tab-btn">
                                <ul className="tabs-button-box clearfix">
                                    <li className={`tab-btn-item ${activeTab === "trader-4" ? "active-btn-item" : ""}`} onClick={() => setActiveTab("trader-4")}>
                                        <div className="icon">
                                            <i className="icon-check"></i>
                                        </div>
                                        <h4>Meta <br />Trader 4</h4>
                                    </li>
                                    <li className={`tab-btn-item ${activeTab === "trader-5" ? "active-btn-item" : ""}`} onClick={() => setActiveTab("trader-5")}>
                                        <div className="icon">
                                            <i className="icon-check"></i>
                                        </div>
                                        <h4>Meta <br />Trader 5</h4>
                                    </li>
                                </ul>
                            </div>

                            <div className="tabs-content-box">

                                {activeTab === "trader-4" && (
                                <div className="tab-content-box-item tab-content-box-item-active fadeIn" id="trader-4">
                                    <div className="platforms-style1-tab-content-box-item">

                                        
                                        <div className="single-platforms-style1-tab">
                                            <div className="text">
                                                <p>Denouncing pleasure and praising pain was born and will give complete
                                                    account of the system and expound.</p>
                                            </div>
                                            <ul className="list-item">
                                                <li>
                                                    <div className="icon">
                                                        <Image src="/assets/images/icon/icon-1.png" alt="Icon" width={6} height={14} priority />
                                                    </div>
                                                    <p>Extensive Technical Indicators</p>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <Image src="/assets/images/icon/icon-1.png" alt="Icon" width={6} height={14} priority />
                                                    </div>
                                                    <p>Automated Trading with Expert Advisors</p>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <Image src="/assets/images/icon/icon-1.png" alt="Icon" width={6} height={14} priority />
                                                    </div>
                                                    <p>Low Resource Requirements</p>
                                                </li>
                                            </ul>
                                        </div>
                                        

                                        <div className="platforms-style1-downlode">
                                            <div className="row">
                                                <div className="col-xl-4 col-lg-6 col-md-6">
                                                    <div className="platforms-style1-downlode-single">
                                                        <div className="platforms-style1-downlode-single__bg"
                                                            style={{ backgroundImage: "url(assets/images/shapes/platforms-v1-shape2.png)" }}>
                                                        </div>
                                                        <div className="shape1">
                                                            <Image src="/assets/images/shapes/platforms-v1-shape3.png" alt="Shape" width={370} height={217} priority className="zoominout" />
                                                        </div>
                                                        <div className="title">
                                                            <h3>For Mobile Users</h3>
                                                            <p>Available on Android and iPhone</p>
                                                        </div>
                                                        <div className="app-box">
                                                            <Link href="https://play.google.com/store/games?hl=en">
                                                                <span className="icon-google-play"><span
                                                                        className="path1"></span><span
                                                                        className="path2"></span><span
                                                                        className="path3"></span><span
                                                                        className="path4"></span></span>
                                                            </Link>
                                                            <Link href="https://www.apple.com/app-store/">
                                                                <span className="icon-app-store"></span>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-4 col-lg-6 col-md-6">
                                                    <div className="platforms-style1-downlode-single">
                                                        <div className="platforms-style1-downlode-single__bg"
                                                            style={{ backgroundImage: "url(/assets/images/shapes/platforms-v1-shape2.png)" }}>
                                                        </div>
                                                        <div className="shape2">
                                                            <Image src="/assets/images/shapes/platforms-v1-shape4.png" alt="Shape" width={370} height={206} priority className="zoominout" />
                                                        </div>
                                                        <div className="title">
                                                            <h3>For Desktop Users</h3>
                                                            <p>Available on Windows & MacOS.</p>
                                                        </div>
                                                        <div className="app-box">
                                                            <Link href="https://apps.microsoft.com/home?hl=en-US&gl=US">
                                                                <span className="icon-windows"><span
                                                                        className="path1"></span><span
                                                                        className="path2"></span><span
                                                                        className="path3"></span><span
                                                                        className="path4"></span></span>
                                                            </Link>
                                                            <Link href="https://www.apple.com/app-store/">
                                                                <span className="icon-apple"></span>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-4 col-lg-6 col-md-6">
                                                    <div className="platforms-style1-downlode-single">
                                                        <div className="platforms-style1-downlode-single__bg"
                                                            style={{ backgroundImage: "url(assets/images/shapes/platforms-v1-shape2.png)" }}>
                                                        </div>
                                                        <div className="shape1">
                                                            <Image src="/assets/images/shapes/platforms-v1-shape3.png" alt="Shape" width={370} height={217} priority className="zoominout" />
                                                        </div>
                                                        <div className="title">
                                                            <h3>For Web Terminal</h3>
                                                            <p>Trading directly via web browser.</p>
                                                        </div>
                                                        <div className="btn-box">
                                                            <Link className="btn-one"
                                                                href="https://fp-markets.net/stv/row-en/?fpm-affiliate-utm-source=Google/Paid&fpm-affiliate-pcode=G2548-NonBrCPA-trading-0924-S-D-gk-IN-125&gad_source=1&gclid=Cj0KCQjw6oi4BhD1ARIsAL6pox1w5ZI76A_EvENPmPcSiWM_nd0Syy3zb1zYbMMZQmElB5EjQZMUr3caAsF9EALw_wcB">
                                                                <span className="txt">Web Platform</span>
                                                                <i className="icon-right-arrow"></i>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                )}
                                
                                {activeTab === "trader-5" && (
                                <div className="tab-content-box-item tab-content-box-item-active fadeIn" id="trader-5">
                                    <div className="platforms-style1-tab-content-box-item">
                                        

                                        <div className="single-platforms-style1-tab">
                                            <div className="text">
                                                <p>Denouncing pleasure and praising pain was born and will give complete
                                                    account of the system and expound.</p>
                                            </div>
                                            <ul className="list-item">
                                                <li>
                                                    <div className="icon">
                                                        <Image src="/assets/images/icon/icon-1.png" alt="Icon" width={6} height={14} priority />
                                                    </div>
                                                    <p>Extensive Technical Indicators</p>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <Image src="/assets/images/icon/icon-1.png" alt="Icon" width={6} height={14} priority />
                                                    </div>
                                                    <p>Automated Trading with Expert Advisors</p>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <Image src="/assets/images/icon/icon-1.png" alt="Icon" width={6} height={14} priority />
                                                    </div>
                                                    <p>Low Resource Requirements</p>
                                                </li>
                                            </ul>
                                        </div>
                                        

                                        <div className="platforms-style1-downlode">
                                            <div className="row">
                                                <div className="col-xl-4 col-lg-6 col-md-6">
                                                    <div className="platforms-style1-downlode-single">
                                                        <div className="platforms-style1-downlode-single__bg"
                                                            style={{ backgroundImage: "url(assets/images/shapes/platforms-v1-shape2.png)" }}>
                                                        </div>
                                                        <div className="shape1">
                                                            <Image src="/assets/images/shapes/platforms-v1-shape3.png" alt="Shape" width={370} height={217} priority className="zoominout" />
                                                        </div>
                                                        <div className="title">
                                                            <h3>For Web Terminal</h3>
                                                            <p>Trading directly via web browser.</p>
                                                        </div>
                                                        <div className="btn-box">
                                                            <Link className="btn-one"
                                                                href="https://fp-markets.net/stv/row-en/?fpm-affiliate-utm-source=Google/Paid&fpm-affiliate-pcode=G2548-NonBrCPA-trading-0924-S-D-gk-IN-125&gad_source=1&gclid=Cj0KCQjw6oi4BhD1ARIsAL6pox1w5ZI76A_EvENPmPcSiWM_nd0Syy3zb1zYbMMZQmElB5EjQZMUr3caAsF9EALw_wcB">
                                                                <span className="txt">Web Platform</span>
                                                                <i className="icon-right-arrow"></i>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-4 col-lg-6 col-md-6">
                                                    <div className="platforms-style1-downlode-single">
                                                        <div className="platforms-style1-downlode-single__bg"
                                                            style={{ backgroundImage: "url(assets/images/shapes/platforms-v1-shape2.png)" }}>
                                                        </div>
                                                        <div className="shape1">
                                                            <Image src="/assets/images/shapes/platforms-v1-shape3.png" alt="Shape" width={370} height={217} priority className="zoominout" />
                                                        </div>
                                                        <div className="title">
                                                            <h3>For Mobile Users</h3>
                                                            <p>Available on Android and iPhone</p>
                                                        </div>
                                                        <div className="app-box">
                                                            <Link href="https://play.google.com/store/games?hl=en">
                                                                <span className="icon-google-play"><span
                                                                        className="path1"></span><span
                                                                        className="path2"></span><span
                                                                        className="path3"></span><span
                                                                        className="path4"></span></span>
                                                            </Link>
                                                            <Link href="https://www.apple.com/app-store/">
                                                                <span className="icon-app-store"></span>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-4 col-lg-6 col-md-6">
                                                    <div className="platforms-style1-downlode-single">
                                                        <div className="platforms-style1-downlode-single__bg"
                                                            style={{ backgroundImage: "url(assets/images/shapes/platforms-v1-shape2.png)" }}>
                                                        </div>
                                                        <div className="shape2">
                                                            <Image src="/assets/images/shapes/platforms-v1-shape3.png" alt="Shape" width={370} height={206} priority className="zoominout" />
                                                        </div>
                                                        <div className="title">
                                                            <h3>For Desktop Users</h3>
                                                            <p>Available on Windows & MacOS.</p>
                                                        </div>
                                                        <div className="app-box">
                                                            <Link href="https://apps.microsoft.com/home?hl=en-US&gl=US">
                                                                <span className="icon-windows"><span
                                                                        className="path1"></span><span
                                                                        className="path2"></span><span
                                                                        className="path3"></span><span
                                                                        className="path4"></span></span>
                                                            </Link>
                                                            <Link href="https://www.apple.com/app-store/">
                                                                <span className="icon-apple"></span>
                                                            </Link>
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
            </div>
        </section>
    </>
  )
}