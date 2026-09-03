import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/elements/FadeIn";

export default function About() {
  return (
    <>
        <section className="about-style2">
            <div className="container">
                <div className="row">

                    <div className="col-xl-7 col-lg-6">
                        <div className="about-style2__left">
                            <div className="shape1">
                                <Image src="/assets/images/shapes/about-v2-shape2.png" className="rotate-me" alt="Shape" width={456} height={456} priority />
                            </div>
                            <FadeIn direction="right" delay={0.0}>
                            <div className="img-box1">
                                <Image src="/assets/images/about/about-v2-1.jpg" alt="Image" width={300} height={465} priority />
                            </div>
                            </FadeIn>
                            <div className="img-box2">
                                <Image src="/assets/images/about/about-v2-2.jpg" alt="Image" width={310} height={205} priority />
                            </div>
                            <div className="experience-box">
                                <div className="experience-box__bg"
                                    style={{ backgroundImage: "url(/assets/images/shapes/about-v2-shape1.png)" }}>
                                </div>
                                <div className="icon">
                                    <span className="icon-bull"><span className="path1"></span><span className="path2"></span><span
                                            className="path3"></span><span className="path4"></span>
                                    </span>
                                </div>
                                <div className="title">
                                    <h2>24+ <span>Years</span></h2>
                                </div>
                                <div className="text">
                                    <h3>Experience in the Market</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-5 col-lg-6">
                        <FadeIn direction="left" delay={0.0}>
                        <div className="about-style2__right">
                            <div className="sec-title withtext">
                                <div className="sub-title">
                                    <h4>About Tradebro</h4>
                                </div>
                                <h2>Gateway to Global Markets</h2>
                                <div className="text">
                                    <p>
                                        It is a long established fact that reader will be distracted by the readable
                                        content of a page when looking atlayout point of making here is that it has a
                                        more-or-less normal distribution all letters as opposed to using.
                                    </p>
                                </div>
                            </div>
                            <div className="purpose-box">
                                <div className="icon">
                                    <span className="icon-medical-history"><span className="path1"></span><span
                                            className="path2"></span><span className="path3"></span><span
                                            className="path4"></span><span className="path5"></span><span
                                            className="path6"></span><span className="path7"></span><span
                                            className="path8"></span><span className="path9"></span><span
                                            className="path10"></span><span className="path11"></span>
                                    </span>
                                </div>
                                <div className="text">
                                    <h3>Our Journey</h3>
                                    <p>Nor again is there anyone who loves or pursues all itself because it is pain.</p>
                                </div>
                            </div>
                            <div className="btn-box">
                                <Link className="btn-one" href="/about">
                                    <span className="txt">Explore History</span>
                                    <i className="icon-right-arrow"></i>
                                </Link>
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