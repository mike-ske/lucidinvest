"use client";

import CountUp from "react-countup";
import FadeIn from "@/components/elements/FadeIn";
import Image from "next/image";
import Link from "next/link";


export default function Partners() {
  return (
    <>
        <section className="partner-style1">
            <div className="container">
                <div className="partner-style1__top">
                    <div className="sec-title">
                        <div className="sub-title">
                            <h4>Our Partners</h4>
                        </div>
                        <h2>Partnering with Industry Leaders</h2>
                    </div>
                    <div className="btn-box">
                        <Link href="/index-2">
                            View all Partners
                            <i className="icon-right-arrow"></i>
                        </Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                        <FadeIn delay={0.0}>
                        <div className="partner-style1__img">
                            <Image src="/assets/images/brand/partners-v1-img1.jpg" alt="Image" width={570} height={454} priority />
                        </div>
                        </FadeIn>
                    </div>

                    <div className="col-xl-6 col-lg-6">
                        <FadeIn direction="down" delay={0.0}>
                        <div className="partner-style1__brand">
                            <ul className="clearfix">
                                <li>
                                    <Link href="#">
                                        <Image src="/assets/images/brand/brand-1-1.png" alt="Image" width={285} height={150} priority />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <Image src="/assets/images/brand/brand-1-2.png" alt="Image" width={285} height={150} priority />
                                    </Link>
                                </li>
                            </ul>
                            <ul className="middle-box clearfix">
                                <li>
                                    <Link href="#">
                                        <Image src="/assets/images/brand/brand-1-3.png" alt="Image" width={285} height={150} priority />
                                    </Link>
                                </li>
                                <li className="counting-box">
                                    <div className="count-box text-center">
                                        <div className="odometer-counting">
                                            <h2 className="odometer"><CountUp end={15} duration={2.5} /></h2>
                                            <span>+</span>
                                        </div>
                                        <p>Industry Leaders <br />with Us</p>
                                    </div>
                                </li>
                                <li>
                                    <Link href="#">
                                        <Image src="/assets/images/brand/brand-1-4.png" alt="Image" width={285} height={150} priority />
                                    </Link>
                                </li>
                            </ul>
                            <ul className="clearfix">
                                <li>
                                    <Link href="#">
                                        <Image src="/assets/images/brand/brand-1-5.png" alt="Image" width={285} height={150} priority />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <Image src="/assets/images/brand/brand-1-6.png" alt="Image" width={285} height={150} priority />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        </FadeIn>
                    </div>

                </div>
            </div>
        </section>
    </>
  )
}