
import Link from "next/link";
import FadeIn from "@/components/elements/FadeIn";
import VideoModal from "@/components/elements/VideoPopup";


export default function Service() {
  return (
    <>
        <section className="service-style2">
            <div className="container">
                <div className="service-style2__top">
                    <div className="sec-title">
                        <div className="sub-title">
                            <h4>Services</h4>
                        </div>
                        <h2>Services for Every Traders</h2>
                    </div>
                    <div className="text">
                        <p>Discover the most competitive prices in the market, updated regularly for your advantage.</p>
                    </div>
                </div>
                <div className="row">
                    
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <FadeIn direction="up" delay={0.0}>
                        <div className="single-service-style2">
                            <div className="icon-box">
                                <div className="icon-box__inner">
                                    <span className="icon-analytics"><span className="path1"></span><span className="path2"></span>
                                    </span>
                                </div>
                            </div>
                            <div className="content-box">
                                <div className="title">
                                    <h6>We Offer</h6>
                                    <h3>
                                        <Link href="/service-detalis">Technical Analysis</Link>
                                    </h3>
                                </div>
                                <div className="text">
                                    <p>Find fault with a man who chooses to annoying consequences.</p>
                                </div>
                                <div className="btn-box">
                                    <Link href="#" className="link">
                                        Read More
                                        <i className="icon-right-arrow"></i>
                                    </Link>
                                    <VideoModal/>
                                </div>
                            </div>
                        </div>
                        </FadeIn>
                    </div>
                    

                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <FadeIn direction="up" delay={0.1}>
                        <div className="single-service-style2">
                            <div className="icon-box">
                                <div className="icon-box__inner">
                                    <span className="icon-trading"><span className="path1"></span><span
                                            className="path2"></span><span className="path3"></span><span
                                            className="path4"></span><span className="path5"></span>
                                    </span>
                                </div>
                            </div>
                            <div className="content-box">
                                <div className="title">
                                    <h6>We Offer</h6>
                                    <h3>
                                        <Link href="/service-detalis">Trading Platforms</Link>
                                    </h3>
                                </div>
                                <div className="text">
                                    <p>Perfectly simple easy to distinguish in afree hour, when our power.</p>
                                </div>
                                <div className="btn-box">
                                    <Link href="#" className="link">
                                        Read More
                                        <i className="icon-right-arrow"></i>
                                    </Link>
                                    <VideoModal/>
                                </div>
                            </div>
                        </div>
                        </FadeIn>
                    </div>
                    

                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <FadeIn direction="up" delay={0.2}>
                        <div className="single-service-style2">
                            <div className="icon-box">
                                <div className="icon-box__inner">
                                    <span className="icon-user"><span className="path1"></span><span className="path2"></span><span
                                            className="path3"></span><span className="path4"></span><span
                                            className="path5"></span><span className="path6"></span>
                                    </span>
                                </div>
                            </div>
                            <div className="content-box">
                                <div className="title">
                                    <h6>We Offer</h6>
                                    <h3>
                                        <Link href="/service-detalis">Account Management</Link>
                                    </h3>
                                </div>
                                <div className="text">
                                    <p>The claims of duty or the obligations business it will frequently occur.</p>
                                </div>
                                <div className="btn-box">
                                    <Link href="#" className="link">
                                        Read More
                                        <i className="icon-right-arrow"></i>
                                    </Link>
                                    <VideoModal/>
                                </div>
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