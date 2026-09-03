"use client";

import CountUp from "react-countup";
import Image from "next/image";


export default function Counter() {
  return (
    <>
        <section className="fact-counter-style1">

            <div className="fact-counter-style1__shape1">
                <Image src="/assets/images/shapes/fact-counter-v1-shape1.png" alt="Shape" width={600} height={622} priority />
            </div>
            <div className="fact-counter-style1__shape2">
                <Image src="/assets/images/shapes/fact-counter-v1-shape2.png" alt="Shape" width={599} height={630} priority />
            </div>

            <div className="container">
                <div className="row">

                    <div className="col-xl-3 col-lg-3 col-md-12">
                        <div className="fact-counter-style1__inner">
                            
                            <div className="single-fact-counter-style1 wow fadeInDown animated" data-wow-delay="00ms"
                                data-wow-duration="1500ms">
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
                            
                            <div className="single-fact-counter-style1 wow fadeInLeft animated" data-wow-delay="00ms"
                                data-wow-duration="1500ms">
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
                            
                        </div>
                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-12">
                        <div className="fact-counter-style1__progress wow fadeInUp animated" data-wow-delay="00ms"
                            data-wow-duration="1500ms">
                            <div className="sec-title text-center">
                                <div className="sub-title">
                                    <h4>Interesting Numbers</h4>
                                </div>
                                <h2>Fascinating Facts</h2>
                            </div>

                            <div className="progress-levels">
                                
                                <div className="progress-box wow">
                                    <div className="top">
                                        <h4>Platform Uptime</h4>
                                    </div>
                                    <div className="inner count-box">
                                        <div className="bar">
                                            <div className="skill-percent">
                                                <span className="count-text" data-speed="2000">99.9</span>
                                                <span className="percent">%</span>
                                            </div>
                                            <div className="bar-innner">
                                                <div className="bar-fill" style={{ width: '99.9%' }}>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="progress-box wow">
                                    <div className="top">
                                        <h4>Community Growth</h4>
                                    </div>
                                    <div className="inner count-box">
                                        <div className="bar">
                                            <div className="skill-percent">
                                                <span className="count-text" data-speed="2000">80</span>
                                                <span className="percent">%</span>
                                            </div>
                                            <div className="bar-innner">
                                                <div className="bar-fill" style={{ width: '80%' }}>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="progress-box wow">
                                    <div className="top">
                                        <h4>Trade Success Rate</h4>
                                    </div>
                                    <div className="inner count-box">
                                        <div className="bar">
                                            <div className="skill-percent">
                                                <span className="count-text" data-speed="2000">85</span>
                                                <span className="percent">%</span>
                                            </div>
                                            <div className="bar-innner">
                                                <div className="bar-fill" style={{ width: '85%' }}>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-lg-3 col-md-12">
                        <div className="fact-counter-style1__inner">
                            
                            <div className="single-fact-counter-style1 wow fadeInDown animated" data-wow-delay="00ms"
                                data-wow-duration="1500ms">
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
                            
                            <div className="single-fact-counter-style1 wow fadeInRight animated" data-wow-delay="00ms"
                                data-wow-duration="1500ms">
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

                        </div>
                    </div>

                </div>
            </div>
        </section>
    </>
  )
}