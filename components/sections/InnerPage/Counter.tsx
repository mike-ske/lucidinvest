"use client";

import CountUp from "react-countup";
import Image from "next/image";
import FadeIn from "@/components/elements/FadeIn";


export default function Counter() {
  return (
    <>
        <section className="fact-counter-style1 fact-counter-style1-instyle2">
            <div className="fact-counter-style1-instyle2__bg"
                style={{ backgroundImage: "url(/assets/images/backgrounds/fact-counter-v2__bg.jpg)" }}>
            </div>
            <div className="container">
                <div className="row">

                    <div className="col-xl-3 col-lg-3 col-md-12">
                        <FadeIn direction="up" delay={0.0}>
                        <div className="single-fact-counter-style1">
                            <div className="shape1">
                                <Image src="/assets/images/shapes/fact-counter-v1-shape3.png" alt="Shape" width={332} height={167} priority />
                            </div>
                            <div className="count-box">
                                <div className="odometer-counting">
                                    <h2 className="odometer"><CountUp end={1} duration={1.5} />.4</h2>
                                    <span>m+</span>
                                </div>
                                <p>Trades Executed <br />Daily</p>
                            </div>
                            <div className="bottom-box">
                                <div className="icon">
                                    <span className="icon-calendar"><span className="path1"></span><span
                                            className="path2"></span><span className="path3"></span><span
                                            className="path4"></span><span className="path5"></span><span
                                            className="path6"></span><span className="path7"></span><span
                                            className="path8"></span></span>
                                </div>
                                <h3>Trades</h3>
                            </div>
                        </div>
                        </FadeIn>
                    </div>

                    <div className="col-xl-3 col-lg-3 col-md-12">
                        <FadeIn direction="up" delay={0.1}>
                        <div className="single-fact-counter-style1">
                            <div className="shape1">
                                <Image src="/assets/images/shapes/fact-counter-v1-shape3.png" alt="Shape" width={332} height={167} priority />
                            </div>
                            <div className="count-box">
                                <div className="odometer-counting">
                                    <h2 className="odometer"><CountUp end={30} duration={2.5} /></h2>
                                    <span>+</span>
                                </div>
                                <p>Variety of Trading <br />Options.</p>
                            </div>
                            <div className="bottom-box">
                                <div className="icon">
                                    <span className="icon-statistics"><span className="path1"></span><span
                                            className="path2"></span><span className="path3"></span><span
                                            className="path4"></span></span>
                                </div>
                                <h3>Instruments</h3>
                            </div>
                        </div>
                        </FadeIn>
                    </div>

                    <div className="col-xl-3 col-lg-3 col-md-12">
                        <FadeIn direction="up" delay={0.2}>
                        <div className="single-fact-counter-style1">
                            <div className="shape1">
                                <Image src="/assets/images/shapes/fact-counter-v1-shape3.png" alt="Shape" width={332} height={167} priority />
                            </div>
                            <div className="count-box">
                                <div className="odometer-counting">
                                    <h2 className="odometer"><CountUp end={2} duration={1.5} />.5</h2>
                                    <span>m+</span>
                                </div>
                                <p>Active Traders in <br />Community</p>
                            </div>
                            <div className="bottom-box">
                                <div className="icon">
                                    <span className="icon-discussion"><span className="path1"></span><span
                                            className="path2"></span><span className="path3"></span><span
                                            className="path4"></span><span className="path5"></span><span
                                            className="path6"></span><span className="path7"></span><span
                                            className="path8"></span><span className="path9"></span><span
                                            className="path10"></span><span className="path11"></span><span
                                            className="path12"></span></span>
                                </div>
                                <h3>Trades</h3>
                            </div>
                        </div>
                        </FadeIn>
                    </div>

                    <div className="col-xl-3 col-lg-3 col-md-12">
                        <FadeIn direction="up" delay={0.3}>
                        <div className="single-fact-counter-style1">
                            <div className="shape1">
                                <Image src="/assets/images/shapes/fact-counter-v1-shape3.png" alt="Shape" width={332} height={167} priority />
                            </div>
                            <div className="count-box">
                                <div className="odometer-counting">
                                    <h2 className="odometer"><CountUp end={10} duration={2} /></h2>
                                    <span>+</span>
                                </div>
                                <p>Industry Awards <br />Won</p>
                            </div>
                            <div className="bottom-box">
                                <div className="icon">
                                    <span className="icon-certificate"><span className="path1"></span><span
                                            className="path2"></span><span className="path3"></span><span
                                            className="path4"></span><span className="path5"></span><span
                                            className="path6"></span><span className="path7"></span><span
                                            className="path8"></span><span className="path9"></span><span
                                            className="path10"></span><span className="path11"></span></span>
                                </div>
                                <h3>Recognition</h3>
                            </div>
                        </div>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}