"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Account() {

    // tab
    const [activeTab, setActiveTab] = useState("standard");

  return (
    <>
        <section className="account-style3">
            <div className="account-style3__shape1">
                <Image src="/assets/images/shapes/account-v3-shape1.png" alt="Image" width={517} height={254} priority />
            </div>
            <div className="container">
                <div className="sec-title text-center">
                    <div className="sub-title">
                        <h4>Account Types</h4>
                    </div>
                    <h2>Explore Our Account Options</h2>
                </div>
                <div className="account-style3__inner">
                    <div className="account-style3__tab">
                        <div className="row">
                            <div className="col-xl-3">
                                <div className="account-style3__tab-btn">
                                    <ul className="tabs-button-box clearfix">
                                        <li className={`tab-btn-item ${activeTab === "standard" ? "active-btn-item" : ""}`} onClick={() => setActiveTab("standard")}>
                                            <h3>Standard Account</h3>
                                            <div className="icon">
                                                <i className="icon-check"></i>
                                            </div>
                                        </li>
                                        <li className={`tab-btn-item ${activeTab === "mini" ? "active-btn-item" : ""}`} onClick={() => setActiveTab("mini")}>
                                            <h3>Mini Account</h3>
                                            <div className="icon">
                                                <i className="icon-check"></i>
                                            </div>
                                        </li>
                                        <li className={`tab-btn-item ${activeTab === "stp" ? "active-btn-item" : ""}`} onClick={() => setActiveTab("stp")}>
                                            <h3>STP Account</h3>
                                            <div className="icon">
                                                <i className="icon-check"></i>
                                            </div>
                                        </li>
                                        <li className={`tab-btn-item ${activeTab === "demo" ? "active-btn-item" : ""}`} onClick={() => setActiveTab("demo")}>
                                            <h3>Demo Account</h3>
                                            <div className="icon">
                                                <i className="icon-check"></i>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-xl-9">
                                <div className="tabs-content-box">

                                    {activeTab === "standard" && (
                                    <div className="tab-content-box-item tab-content-box-item-active fadeIn" id="standard">
                                        <div className="account-style3-tab-content-box-item">

                                            <div className="single-account-style3">
                                                <div className="row">
                                                    <div className="col-xl-7">
                                                        <div className="account-style3__left">
                                                            <div className="shape1"
                                                                style={{ backgroundImage: "url(/assets/images/pattern/account-v3-pattran1.png)" }}>
                                                            </div>
                                                            <div className="content-box">
                                                                <div className="title">
                                                                    <h3>Standard Account</h3>
                                                                    <p>Foresee the pain and trouble that are bound to
                                                                        ensueand equal blame belongs to those who fail
                                                                        in their duty as saying through shrinking.</p>
                                                                </div>
                                                                <div className="btn-box">
                                                                    <Link href="#">
                                                                        Open Your Account
                                                                        <i className="icon-right-arrow"></i>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                            <div className="img-box">
                                                                <Image src="/assets/images/resources/account-v3-1.png" alt="Image" width={344} height={228} priority />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-5">
                                                        <div className="account-style3__right">
                                                            <div className="top-box">
                                                                <h4>Payout Details 2023</h4>
                                                                <p>Blame belongs those who fail.</p>
                                                            </div>
                                                            <div className="img-box">
                                                                <Image src="/assets/images/resources/account-v3-2.png" alt="Image" width={330} height={363} priority />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    )}
                                    
                                    {activeTab === "mini" && (
                                    <div className="tab-content-box-item tab-content-box-item-active fadeIn" id="mini">
                                        <div className="account-style3-tab-content-box-item">
                                            <div className="single-account-style3">
                                                <div className="row">
                                                    <div className="col-xl-7">
                                                        <div className="account-style3__left">
                                                            <div className="shape1"
                                                                style={{ backgroundImage: "url(/assets/images/pattern/account-v3-pattran1.png)" }}>
                                                            </div>
                                                            <div className="content-box">
                                                                <div className="title">
                                                                    <h3>Mini Account</h3>
                                                                    <p>Foresee the pain and trouble that are bound to
                                                                        ensueand equal blame belongs to those who fail
                                                                        in their duty as saying through shrinking.</p>
                                                                </div>
                                                                <div className="btn-box">
                                                                    <Link href="#">
                                                                        Open Your Account
                                                                        <i className="icon-right-arrow"></i>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                            <div className="img-box">
                                                                <Image src="/assets/images/resources/account-v3-1.png" alt="Image" width={344} height={228} priority />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-5">
                                                        <div className="account-style3__right">
                                                            <div className="top-box">
                                                                <h4>Payout Details 2023</h4>
                                                                <p>Blame belongs those who fail.</p>
                                                            </div>
                                                            <div className="img-box">
                                                                <Image src="/assets/images/resources/account-v3-2.png" alt="Image" width={330} height={363} priority />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    )}
                                    
                                    {activeTab === "stp" && (
                                    <div className="tab-content-box-item tab-content-box-item-active fadeIn" id="stp">
                                        <div className="account-style3-tab-content-box-item">
                                            <div className="single-account-style3">
                                                <div className="row">
                                                    <div className="col-xl-7">
                                                        <div className="account-style3__left">
                                                            <div className="shape1"
                                                                style={{ backgroundImage: "url(/assets/images/pattern/account-v3-pattran1.png)" }}>
                                                            </div>
                                                            <div className="content-box">
                                                                <div className="title">
                                                                    <h3>STP Account</h3>
                                                                    <p>Foresee the pain and trouble that are bound to
                                                                        ensueand equal blame belongs to those who fail
                                                                        in their duty as saying through shrinking.</p>
                                                                </div>
                                                                <div className="btn-box">
                                                                    <Link href="#">
                                                                        Open Your Account
                                                                        <i className="icon-right-arrow"></i>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                            <div className="img-box">
                                                                <Image src="/assets/images/resources/account-v3-1.png" alt="Image" width={344} height={228} priority />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-5">
                                                        <div className="account-style3__right">
                                                            <div className="top-box">
                                                                <h4>Payout Details 2023</h4>
                                                                <p>Blame belongs those who fail.</p>
                                                            </div>
                                                            <div className="img-box">
                                                                <Image src="/assets/images/resources/account-v3-2.png" alt="Image" width={330} height={363} priority />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    )}
                                    {activeTab === "demo" && (
                                    <div className="tab-content-box-item tab-content-box-item-active fadeIn" id="demo">
                                        <div className="account-style3-tab-content-box-item">
                                            <div className="single-account-style3">
                                                <div className="row">
                                                    <div className="col-xl-7">
                                                        <div className="account-style3__left">
                                                            <div className="shape1"
                                                                style={{ backgroundImage: "url(/assets/images/pattern/account-v3-pattran1.png)" }}>
                                                            </div>
                                                            <div className="content-box">
                                                                <div className="title">
                                                                    <h3>Demo Account</h3>
                                                                    <p>Foresee the pain and trouble that are bound to
                                                                        ensueand equal blame belongs to those who fail
                                                                        in their duty as saying through shrinking.</p>
                                                                </div>
                                                                <div className="btn-box">
                                                                    <Link href="#">
                                                                        Open Your Account
                                                                        <i className="icon-right-arrow"></i>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                            <div className="img-box">
                                                                <Image src="/assets/images/resources/account-v3-1.png" alt="Image" width={344} height={228} priority />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-5">
                                                        <div className="account-style3__right">
                                                            <div className="top-box">
                                                                <h4>Payout Details 2023</h4>
                                                                <p>Blame belongs those who fail.</p>
                                                            </div>
                                                            <div className="img-box">
                                                                <Image src="/assets/images/resources/account-v3-2.png" alt="Image" width={330} height={363} priority />
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
            </div>
        </section>
    </>
  )
}