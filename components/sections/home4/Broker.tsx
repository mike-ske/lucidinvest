
import FadeIn from "@/components/elements/FadeIn";
import Link from "next/link";
import Image from "next/image";

export default function Broker() {
  return (
    <>
        <section className="trader-broker-style1 trader-broker-style1--style2">
            <div className="container">
                <div className="sec-title withtext text-center">
                    <div className="sub-title">
                        <h4>Trader&apos;s Broker</h4>
                    </div>
                    <h2>Trusted Trading Broker Facts</h2>
                    <div className="text">
                        <p>
                            Discover the most competitive prices in the market, updated <br />regularly for your
                            advantage.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-4">
                        <ul className="trader-broker-style1__content clearfix">
                            <li className="single-trader-broker-style1 wow fadeInLeft animated" data-wow-delay="00ms"
                                data-wow-duration="1500ms">
                                <div className="title">
                                    <h3>99.9% uptime reliability</h3>
                                </div>
                                <div className="icon">
                                    <span className="icon-angle-double-small-right"><span className="path1"></span><span
                                            className="path2"></span>
                                    </span>
                                </div>
                            </li>
                            <li className="single-trader-broker-style1">
                                <div className="icon">
                                    <span className="icon-angle-double-small-right"><span className="path1"></span><span
                                            className="path2"></span>
                                    </span>
                                </div>
                                <div className="title title2">
                                    <h3>Starting from 0.0 pips</h3>
                                </div>
                            </li>
                            <li className="single-trader-broker-style1"
                                data-wow-duration="1500ms">
                                <div className="title">
                                    <h3>100,000 active traders</h3>
                                </div>
                                <div className="icon">
                                    <span className="icon-angle-double-small-right"><span className="path1"></span><span
                                            className="path2"></span>
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="col-xl-4">
                        <FadeIn delay={0}>
                        <div className="trader-broker-style1__img">
                            <div className="pattern">
                                <Image src="/assets/images/pattern/trader-broker-v2__pattern.png" alt="Pattern" width={640} height={480} priority />
                            </div>
                            <div className="inner">
                                <Image src="/assets/images/resources/trader-broker-v1-1.jpg" alt="Image" width={370} height={370} priority />
                            </div>
                        </div>
                        </FadeIn>
                    </div>

                    <div className="col-xl-4">
                        <ul className="trader-broker-style1__content clearfix">
                            <li className="single-trader-broker-style1">
                                <div className="icon icon2">
                                    <span className="icon-angle-double-small-right"><span className="path1"></span><span
                                            className="path2"></span>
                                    </span>
                                </div>
                                <div className="title title2">
                                    <h3>60+ currency pairs</h3>
                                </div>
                            </li>
                            <li className="single-trader-broker-style1"
                                data-wow-duration="1500ms">
                                <div className="title">
                                    <h3>Leverage up to 1:500</h3>
                                </div>
                                <div className="icon icon2">
                                    <span className="icon-angle-double-small-right"><span className="path1"></span><span
                                            className="path2"></span>
                                    </span>
                                </div>
                            </li>
                            <li className="single-trader-broker-style1">
                                <div className="icon icon2">
                                    <span className="icon-angle-double-small-right"><span className="path1"></span><span
                                            className="path2"></span>
                                    </span>
                                </div>
                                <div className="title title2">
                                    <h3>24/5 Customer Support</h3>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="trader-broker-style1__text text-center">
                    <p>
                        Explore Our Answers to 100+ Questions.
                        <Link href="#">
                            Read More faq&apos;s
                            <i className="icon-right-arrow"></i>
                        </Link>
                    </p>
                </div>

            </div>
        </section>
    </>
  )
}