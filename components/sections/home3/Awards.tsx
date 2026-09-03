"use client";

import CountUp from "react-countup";
import Image from "next/image";
import FadeIn from "@/components/elements/FadeIn";

export default function Awards() {
  return (
    <>
        <section className="awards-fact-box">
            <div className="container">
                <FadeIn delay={0.0}>
                <div className="awards-fact-box__inner">
                    <div className="awards-fact-box__left">
                        <div className="title-box">
                            <h3>Celebrating Our Milestones: Awards <br />& Honors</h3>
                        </div>
                        <div className="award-box">
                            <ul>
                                <li>
                                    <div className="single-award-box">
                                        <div className="title">
                                            <h6>Best<br /> Broker</h6>
                                            <span>2025</span>
                                        </div>
                                        <div className="overlay-img">
                                            <Image src="/assets/images/shapes/award-img-1.png" alt="Image" width={110} height={94} priority />
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="single-award-box">
                                        <div className="title">
                                            <h6>Trader&apos;s <br />Choice</h6>
                                            <span>2023</span>
                                        </div>
                                        <div className="overlay-img">
                                            <Image src="/assets/images/shapes/award-img-2.png" alt="Image" width={110} height={94} priority />
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="single-award-box">
                                        <div className="title">
                                            <h6>ISO <br />Certified</h6>
                                            <span>2020</span>
                                        </div>
                                        <div className="overlay-img">
                                            <Image src="/assets/images/shapes/award-img-3.png" alt="Image" width={110} height={94} priority />
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="awards-fact-box__right">
                        <div className="count-box">
                            <div className="odometer-counting">
                                <h2 className="odometer"><CountUp end={1} duration={2.5} />.4</h2>
                                <span>m+</span>
                            </div>
                            <p>Trades Executed Daily, <br />Globally.</p>
                        </div>
                        <div className="icon-box">
                            <span className="icon-calendar"><span className="path1"></span><span className="path2"></span><span
                                    className="path3"></span><span className="path4"></span><span className="path5"></span><span
                                    className="path6"></span><span className="path7"></span><span className="path8"></span>
                            </span>
                        </div>
                    </div>
                </div>
                </FadeIn>
            </div>
        </section>
    </>
  )
}