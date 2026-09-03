import FadeIn from "@/components/elements/FadeIn";
import Marquee from "@/components/elements/Marquee";
import Image from "next/image";
import Link from "next/link";


export default function Choose() {

  return (
    <>
        <section className="choose-style1">
            <div className="big-title">
                <Marquee speed={50} direction="right" pauseOnHover className="choose-style1-scrolling-text">
                    <ul className="list marquee_mode">
                        <li className="item">Tradebro Tradebro</li>
                        <li className="item">Tradebro Tradebro</li>
                        <li className="item">Tradebro Tradebro</li>
                    </ul>
                </Marquee>
            </div>
            <div className="container">
                <div className="sec-title withtext text-center">
                    <div className="sub-title">
                        <h4>Why Choose Us</h4>
                    </div>
                    <h2>The Top Choice for Traders</h2>
                    <div className="text">
                        <p>Discover the most competitive prices in the market, updated <br />regularly for your
                            advantage.</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xl-3 col-lg-3">
                        <ul className="clearfix">
                            <FadeIn delay={0.0}>
                            <li className="single-choose-style1">
                                <div className="shape1">
                                    <Image src="/assets/images/shapes/choose-v1-shape1.png" alt="Shape" width={85} height={85} priority />
                                    <div className="overlay">
                                        <Image src="/assets/images/shapes/choose-v1-shape1-overlay.png" alt="Shape" width={85} height={85} priority />
                                    </div>
                                </div>
                                <Marquee speed={5} direction="down" className="arrow-box marquee_mode-upToDown">
                                    <ul className="clearfix">
                                        <li>
                                            <span className="icon-angle-down"><span className="path1"></span><span
                                                    className="path2"></span></span>
                                        </li>
                                        <li>
                                            <span className="icon-angle-down"><span className="path1"></span><span
                                                    className="path2"></span></span>
                                        </li>
                                        <li>
                                            <span className="icon-angle-down"><span className="path1"></span><span
                                                    className="path2"></span></span>
                                        </li>
                                    </ul>
                                </Marquee>
                                <div className="icon">
                                    <span className="icon-favorite"><span className="path1"></span><span
                                            className="path2"></span><span className="path3"></span><span
                                            className="path4"></span><span className="path5"></span><span
                                            className="path6"></span><span className="path7"></span><span
                                            className="path8"></span></span>
                                </div>
                                <div className="title">
                                    <h3><Link href="#">Friendly & Expert</Link></h3>
                                </div>
                                <div className="text">
                                    <p>Duty or the obligation that business it will frequently occurs pleasure to be
                                        repudiated.</p>
                                </div>
                            </li>
                            </FadeIn>

                            <FadeIn delay={0.3}>
                            <li className="single-choose-style1 style">
                                <div className="shape2">
                                    <Image src="/assets/images/shapes/choose-v1-shape2.png" alt="Shape" width={85} height={85} priority />
                                    <div className="overlay">
                                        <Image src="/assets/images/shapes/choose-v1-shape2-overlay.png" alt="Shape" width={85} height={85} priority />
                                    </div>
                                </div>

                                <Marquee speed={5} direction="down" className="arrow-box three marquee_mode-upToDown">
                                    <ul className="clearfix">
                                        <li>
                                            <span className="icon-angle-down"><span className="path1"></span><span
                                                    className="path2"></span></span>
                                        </li>
                                        <li>
                                            <span className="icon-angle-down"><span className="path1"></span><span
                                                    className="path2"></span></span>
                                        </li>
                                        <li>
                                            <span className="icon-angle-down"><span className="path1"></span><span
                                                    className="path2"></span></span>
                                        </li>
                                    </ul>
                                </Marquee>
                                <div className="title">
                                    <h3><Link href="#">No Hidden Fees</Link></h3>
                                </div>
                                <div className="text">
                                    <p>Right to find fault with a man who chooses to enjoy a pleasure that annoying
                                        consequence.</p>
                                </div>
                                <div className="icon">
                                    <span className="icon-dollar"><span className="path1"></span><span
                                            className="path2"></span><span className="path3"></span><span
                                            className="path4"></span><span className="path5"></span><span
                                            className="path6"></span><span className="path7"></span><span
                                            className="path8"></span><span className="path9"></span><span
                                            className="path10"></span></span>
                                </div>
                            </li>
                            </FadeIn>
                        </ul>
                    </div>

                    <div className="col-xl-6 col-lg-6">
                        <FadeIn delay={0.0}>
                        <div className="choose-style1__img">
                            <div className="inner">
                                <Image src="/assets/images/resources/choose-v1-1.png" alt="Image" width={370} height={570} priority />
                            </div>
                            <div className="box1"></div>
                            <div className="box2"></div>
                            <div className="box3"></div>
                            <div className="box4"></div>
                        </div>
                        </FadeIn>
                    </div>

                    <div className="col-xl-3 col-lg-3">
                        <ul className="clearfix">
                            <FadeIn delay={0.0}>
                            <li className="single-choose-style1 style1">
                                <div className="shape3">
                                    <Image src="/assets/images/shapes/choose-v1-shape3.png" alt="Shape" width={85} height={85} priority />
                                    <div className="overlay">
                                        <Image src="/assets/images/shapes/choose-v1-shape3-overlay.png" alt="Shape" width={85} height={85} priority />
                                    </div>
                                </div>
                                <Marquee speed={5} direction="down" className="arrow-box two marquee_mode-upToDown">
                                    <ul className="clearfix">
                                        <li>
                                            <span className="icon-angle-down"><span className="path1"></span><span
                                                    className="path2"></span></span>
                                        </li>
                                        <li>
                                            <span className="icon-angle-down"><span className="path1"></span><span
                                                    className="path2"></span></span>
                                        </li>
                                        <li>
                                            <span className="icon-angle-down"><span className="path1"></span><span
                                                    className="path2"></span></span>
                                        </li>
                                    </ul>
                                </Marquee>
                                <div className="icon">
                                    <span className="icon-favorite"><span className="path1"></span><span
                                            className="path2"></span><span className="path3"></span><span
                                            className="path4"></span><span className="path5"></span><span
                                            className="path6"></span><span className="path7"></span><span
                                            className="path8"></span></span>
                                </div>
                                <div className="title">
                                    <h3><Link href="#">Regulated & Secure</Link></h3>
                                </div>
                                <div className="text">
                                    <p>Frequently occur that pleasures have to be repudiated accepted always
                                        holds.</p>
                                </div>
                            </li>
                            </FadeIn>

                            <FadeIn delay={0.3}>
                            <li className="single-choose-style1 style style3">
                                <div className="shape4">
                                    <Image src="/assets/images/shapes/choose-v1-shape4.png" alt="Shape" width={85} height={85} priority />
                                    <div className="overlay">
                                        <Image src="/assets/images/shapes/choose-v1-shape4-overlay.png" alt="Shape" width={85} height={85} priority />
                                    </div>
                                </div>
                                <Marquee speed={5} direction="down" className="arrow-box four marquee_mode-upToDown">
                                    <ul className="clearfix">
                                        <li>
                                            <span className="icon-angle-down"><span className="path1"></span><span
                                                    className="path2"></span></span>
                                        </li>
                                        <li>
                                            <span className="icon-angle-down"><span className="path1"></span><span
                                                    className="path2"></span></span>
                                        </li>
                                        <li>
                                            <span className="icon-angle-down"><span className="path1"></span><span
                                                    className="path2"></span></span>
                                        </li>
                                    </ul>
                                </Marquee>
                                <div className="title">
                                    <h3><Link href="#">24/6 Support</Link></h3>
                                </div>
                                <div className="text">
                                    <p>Great pleasure. To take a trivial example, which of us ever undertakes laborious.
                                    </p>
                                </div>
                                <div className="icon">
                                    <span className="icon-dollar"><span className="path1"></span><span
                                            className="path2"></span><span className="path3"></span><span
                                            className="path4"></span><span className="path5"></span><span
                                            className="path6"></span><span className="path7"></span><span
                                            className="path8"></span><span className="path9"></span><span
                                            className="path10"></span></span>
                                </div>
                            </li>
                            </FadeIn>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}