import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/elements/FadeIn";

export default function Market() {
  return (
    <>
        <section className="market-style1">
            <div className="container">
                <div className="sec-title withtext text-center">
                    <div className="sub-title">
                        <h4>Markets</h4>
                    </div>
                    <h2>Wide Range of Markets</h2>
                    <div className="text">
                        <p>
                            Discover the most competitive prices in the market, updated <br />regularly for your
                            advantage.
                        </p>
                    </div>
                </div>
                <div className="row">
                    
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <FadeIn direction="up" delay={0.0}>
                        <div className="single-market-style1">
                            <div className="img-box img-box2">
                                <Image src="/assets/images/resources/market-v1-1.jpg" alt="Image" width={200} height={200} priority />
                            </div>
                            <div className="content-box">
                                <div className="shape"
                                    style={{ backgroundImage: "url(/assets/images/shapes/market-v2-shape1.png)" }}>
                                </div>
                                <div className="title">
                                    <h3>
                                        <Link href="#">Trade Forex</Link>
                                    </h3>
                                </div>
                                <div className="text">
                                    <div className="icon">
                                        <span className="icon-currency-exchange"><span className="path1"></span><span
                                                className="path2"></span><span className="path3"></span><span
                                                className="path4"></span><span className="path5"></span><span
                                                className="path6"></span>
                                        </span>
                                    </div>
                                    <p>Beguiled and demoralized by the charms of pleasure of the moment...</p>
                                </div>
                                <div className="btn-box">
                                    <Link className="btn-one" href="#">
                                        <span className="txt">Read More</span>
                                        <i className="icon-right-arrow"></i>
                                    </Link>
                                </div>
                                <div className="count-box">
                                    <h2>01.</h2>
                                </div>
                            </div>
                        </div>
                        </FadeIn>
                    </div>
                    

                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <FadeIn direction="up" delay={0.1}>
                        <div className="single-market-style1">
                            <div className="img-box img-box2">
                                <Image src="/assets/images/resources/market-v1-2.jpg" alt="Image" width={200} height={200} priority />
                            </div>
                            <div className="content-box">
                                <div className="shape"
                                    style={{ backgroundImage: "url(/assets/images/shapes/market-v2-shape1.png)" }}>
                                </div>
                                <div className="title">
                                    <h3>
                                        <Link href="#">Stock Market</Link>
                                    </h3>
                                </div>
                                <div className="text">
                                    <div className="icon">
                                        <span className="icon-pie-chart"><span className="path1"></span><span
                                                className="path2"></span>
                                        </span>
                                    </div>
                                    <p>Moment so blinded desire that they cannot foresee all are bound ensue...</p>
                                </div>
                                <div className="btn-box">
                                    <Link className="btn-one" href="#">
                                        <span className="txt">Read More</span>
                                        <i className="icon-right-arrow"></i>
                                    </Link>
                                </div>
                                <div className="count-box">
                                    <h2>02.</h2>
                                </div>
                            </div>
                        </div>
                        </FadeIn>
                    </div>
                    

                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <FadeIn direction="up" delay={0.2}>
                        <div className="single-market-style1">
                            <div className="img-box img-box2">
                                <Image src="/assets/images/resources/market-v1-3.jpg" alt="Image" width={200} height={200} priority />
                            </div>
                            <div className="content-box">
                                <div className="shape"
                                    style={{ backgroundImage: "url(/assets/images/shapes/market-v2-shape1.png)" }}>
                                </div>
                                <div className="title">
                                    <h3>
                                        <Link href="#">Commodities Market</Link>
                                    </h3>
                                </div>
                                <div className="text">
                                    <div className="icon">
                                        <span className="icon-gold"><span className="path1"></span><span
                                                className="path2"></span><span className="path3"></span><span
                                                className="path4"></span><span className="path5"></span><span
                                                className="path6"></span><span className="path7"></span><span
                                                className="path8"></span>
                                        </span>
                                    </div>
                                    <p>
                                        Matters to this principle of selection he rejects secure other greater pains...
                                    </p>
                                </div>
                                <div className="btn-box">
                                    <Link className="btn-one" href="#">
                                        <span className="txt">Read More</span>
                                        <i className="icon-right-arrow"></i>
                                    </Link>
                                </div>
                                <div className="count-box">
                                    <h2>03.</h2>
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