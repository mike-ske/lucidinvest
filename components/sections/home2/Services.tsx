
import FadeIn from "@/components/elements/FadeIn";
import Image from "next/image";
import Link from "next/link";


export default function Service() {
  return (
    <>
        <section className="service-style1">
            <div className="service-style1__shape1">
                <Image src="/assets/images/shapes/service-v1-shape1.png" className="float-bob-right" alt="Shape" width={600} height={630} priority />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-4 col-lg-12 col-md-12">
                        <div className="service-style1__content">
                            <FadeIn delay={0.0}>
                            <div className="sec-title withtext white"
                                data-wow-duration="1500ms">
                                <div className="sub-title">
                                    <h4>Services</h4>
                                </div>
                                <h2>Services for Every Traders</h2>
                                <div className="text">
                                    <p>
                                        Discover the most competitive prices in the market, updated regularly for your
                                        advantage.
                                    </p>
                                </div>
                            </div>
                            </FadeIn>
                            <FadeIn delay={0.3}>
                            <div className="service-style1__banner">
                                <div className="service-style1__banner-content">
                                    <div className="shape1">
                                            <Image src="/assets/images/shapes/service-v1-shape3.png" className="zoominout" alt="Shape" width={223} height={252} priority />
                                    </div>
                                    <div className="shape2">
                                        <Image src="/assets/images/pattern/service-v1-pattern1.png" alt="Shape" width={320} height={262} priority />
                                    </div>
                                    <div className="shape3"
                                        style={{ backgroundImage: "url(/assets/images/shapes/service-v1-shape2.png)" }}>
                                    </div>
                                    <div className="title">
                                        <h3>Tailored Services for Your Trading Success</h3>
                                    </div>
                                    <div className="text">
                                        <p>Provide the tools you need.</p>
                                    </div>
                                    <div className="btn-box">
                                        <Link className="btn-one" href="#">
                                            <span className="txt">Start Trading</span>
                                            <i className="icon-right-arrow"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            </FadeIn>
                        </div>
                    </div>

                    
                    <div className="col-xl-8">
                        
                        <div className="service-style1__right">
                            <div className="row">
                                

                                <div className="col-xl-6 col-lg-6 col-md-6">
                                    <FadeIn delay={0.0}>
                                    <div className="single-service-style1"
                                        data-wow-duration="1500ms">
                                        <div className="icon-box">
                                            <div className="overlay-bg">
                                                <Image src="/assets/images/shapes/service-v1-bg.png" alt="Bg" width={80} height={95} priority />
                                            </div>
                                            <span className="icon-analytics"><span className="path1"></span><span
                                                    className="path2"></span></span>
                                        </div>
                                        <div className="content-box">
                                            <div className="title">
                                                <span>We Offer</span>
                                                <h3>
                                                    <Link href="#">Technical Analysis</Link>
                                                </h3>
                                            </div>
                                            <div className="text">
                                                <p>Find fault with a man who chooses to annoying consequences.</p>
                                            </div>
                                            <div className="btn-box">
                                                <Link href="#">
                                                    Read More
                                                    <i className="icon-right-arrow"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    </FadeIn>
                                </div>
                                
                                
                                <div className="col-xl-6 col-lg-6 col-md-6">
                                    <FadeIn delay={0.0}>
                                    <div className="single-service-style1">
                                        <div className="icon-box">
                                            <div className="overlay-bg">
                                                <Image src="/assets/images/shapes/service-v1-bg.png" alt="Bg" width={80} height={95} priority />
                                            </div>
                                            <span className="icon-trading"><span className="path1"></span><span
                                                    className="path2"></span><span className="path3"></span><span
                                                    className="path4"></span><span className="path5"></span></span>
                                        </div>
                                        <div className="content-box">
                                            <div className="title">
                                                <span>We Offer</span>
                                                <h3>
                                                    <Link href="#">Trading Platforms</Link>
                                                </h3>
                                            </div>
                                            <div className="text">
                                                <p>
                                                    Perfectly simple easy to distinguish. In a free hour, when our
                                                    power.
                                                </p>
                                            </div>
                                            <div className="btn-box">
                                                <Link href="#">
                                                    Read More
                                                    <i className="icon-right-arrow"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    </FadeIn>
                                </div>
                                

                                <div className="col-xl-6 col-lg-6 col-md-6">
                                    <FadeIn delay={0.3}>
                                    <div className="single-service-style1">
                                        <div className="icon-box">
                                            <div className="overlay-bg">
                                                <Image src="/assets/images/shapes/service-v1-bg.png" alt="Bg" width={80} height={95} priority />
                                            </div>
                                            <span className="icon-user"><span className="path1"></span><span
                                                    className="path2"></span><span className="path3"></span><span
                                                    className="path4"></span><span className="path5"></span><span
                                                    className="path6"></span></span>
                                        </div>
                                        <div className="content-box">
                                            <div className="title">
                                                <span>We Offer</span>
                                                <h3>
                                                    <Link href="#">Account Management</Link>
                                                </h3>
                                            </div>
                                            <div className="text">
                                                <p>
                                                    The claims of duty or the obligations of business it will frequently
                                                    occur.
                                                </p>
                                            </div>
                                            <div className="btn-box">
                                                <Link href="#">
                                                    Read More
                                                    <i className="icon-right-arrow"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    </FadeIn>
                                </div>
                                

                                <div className="col-xl-6 col-lg-6 col-md-6">
                                    <FadeIn delay={0.3}>
                                    <div className="single-service-style1"
                                        data-wow-duration="1500ms">
                                        <div className="icon-box">
                                            <div className="overlay-bg">
                                                <Image src="/assets/images/shapes/service-v1-bg.png" alt="Bg" width={80} height={95} priority />
                                            </div>
                                            <span className="icon-book"><span className="path1"></span><span
                                                    className="path2"></span><span className="path3"></span><span
                                                    className="path4"></span><span className="path5"></span><span
                                                    className="path6"></span><span className="path7"></span></span>
                                        </div>
                                        <div className="content-box">
                                            <div className="title">
                                                <span>We Offer</span>
                                                <h3>
                                                    <Link href="#">Educational Resources</Link>
                                                </h3>
                                            </div>
                                            <div className="text">
                                                <p>
                                                    Rejects pleasures to secure other great pleasures, or else he
                                                    endures.
                                                </p>
                                            </div>
                                            <div className="btn-box">
                                                <Link href="#">
                                                    Read More
                                                    <i className="icon-right-arrow"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    </FadeIn>
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