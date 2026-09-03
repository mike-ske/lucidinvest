
import RoundTextScript from "@/components/elements/CircleText";
import Image from "next/image";
import Link from "next/link";


export default function About() {
  return (
    <>
        <section className="about-style1">
            <RoundTextScript />
            <div className="container">
                <div className="row">

                    <div className="col-xl-6 col-lg-6">
                        <div className="about-style1__img">
                            <div className="img-box wow fadeInLeft animated" data-wow-delay="00ms"
                                data-wow-duration="1500ms">
                                <Image src="/assets/images/about/about-v1-1.jpg" alt="Image" width={420} height={375} priority />
                            </div>
                            <div className="about-style1__img-award text-center wow fadeInUp animated" data-wow-delay="00ms"
                                data-wow-duration="1500ms">
                                <div className="about-style1__img-award-top">
                                    <div className="top">
                                        <div className="shape1">
                                            <Image src="/assets/images/about/about-v1-badge.png" alt="Award" width={180} height={157} priority />
                                        </div>
                                        <div className="text">
                                            <h5>Top <br />Trading <br />Broker</h5>
                                            <h6>2023</h6>
                                        </div>
                                    </div>
                                    <div className="title">
                                        <h3>Top Trading <br />Platform - Year &apos;23.</h3>
                                        <p>By ADVFN International.</p>
                                    </div>
                                </div>
                                <div className="about-style1__img-award-bottom">
                                    <h3>Trade with award <br />winning broker</h3>
                                </div>
                            </div>

                            <div className="about-style1-round-text wow fadeInRight animated" data-wow-delay="00ms"
                                data-wow-duration="1500ms">
                                <div className="about-style1-round-text__dot1"></div>
                                <div className="about-style1-round-text__dot2"></div>
                                <div className="about-style1-round-text__top">
                                    Years of Trading Experience
                                </div>
                                <div className="about-style1-round-text__bottom">
                                    Expertise Built on Experience
                                </div>
                                <div className="overlay-text">
                                    <div className="inner">
                                        2<span>4</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-6 col-lg-6">
                        <div className="about-style1__content wow fadeInRight animated" data-wow-delay="00ms"
                            data-wow-duration="1500ms">
                            <div className="sec-title">
                                <div className="sub-title">
                                    <h4>About Tradebro</h4>
                                </div>
                                <h2>Trusted Partner <br />in Achieving Trading Success Globally</h2>
                            </div>
                            <div className="text">
                                <p>
                                    Give you a completed account of the system, and expounds the
                                    teaching of the great explorer the truth the master-builder human
                                    do not know how to pursue pleasure rationally.
                                </p>
                            </div>
                            <div className="title-box">
                                <h3>The Goal</h3>
                                <h6>Purpose-Driven and Goal-Oriented</h6>
                            </div>
                            <div className="text-box">
                                <div className="icon">
                                    <div className="inner">
                                        <span className="icon-target"><span className="path1"></span><span
                                                className="path2"></span><span className="path3"></span><span
                                                className="path4"></span><span className="path5"></span><span
                                                className="path6"></span><span className="path7"></span><span
                                                className="path8"></span><span className="path9"></span></span>
                                    </div>
                                </div>
                                <div className="text1">
                                    <p>
                                        Expound the actual teaching of the great of the
                                        master-builder human do not know how pursues
                                        business it will frequently.
                                    </p>
                                </div>
                            </div>
                            <div className="btn-box">
                                <Link href="/about">
                                    Read More
                                    <i className="icon-right-arrow"></i>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    </>
  )
}