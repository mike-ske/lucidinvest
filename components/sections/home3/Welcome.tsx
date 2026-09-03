import Link from "next/link";
import FadeIn from "@/components/elements/FadeIn";

export default function Welcome() {
  return (
    <>
        <section className="welcome-style1">
            <div className="container">
                <div className="sec-title withtext text-center">
                    <div className="sub-title">
                        <h4>Welcome</h4>
                    </div>
                    <h2>Empowering Traders Worldwide</h2>
                    <div className="text">
                        <p>
                            Discover the most competitive prices in the market, updated <br />regularly for your
                            advantage.
                        </p>
                    </div>
                </div>
                <div className="row">
                    
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <FadeIn delay={0.0}>
                        <div className="single-welcome-style1">
                            <div className="single-welcome-style1__inner">
                                <div className="top-box">
                                    <div className="icon">
                                        <div className="icon__bg"
                                            style={{ backgroundImage: "url(/assets/images/shapes/welcome-v1-shape1.png)" }}>
                                        </div>
                                        <span className="icon-graph"><span className="path1"></span><span
                                                className="path2"></span><span className="path3"></span><span
                                                className="path4"></span>
                                        </span>
                                    </div>
                                    <div className="right">
                                        <h6>What is trading?</h6>
                                        <h3>
                                            <Link href="/index-3">Trade Smart, Grow Strong</Link>
                                        </h3>
                                    </div>
                                </div>
                                <div className="text-box">
                                    <p>Foresee the pain and troubtle that are bound to ensue and all equal...</p>
                                </div>
                            </div>
                            <div className="btn-box">
                                <Link href="/index-3">
                                    Read More
                                    <i className="icon-right-arrow"></i>
                                </Link>
                            </div>
                        </div>
                        </FadeIn>
                    </div>
                    

                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <FadeIn delay={0.1}>
                        <div className="single-welcome-style1">
                            <div className="single-welcome-style1__inner">
                                <div className="top-box">
                                    <div className="icon">
                                        <div className="icon__bg"
                                            style={{ backgroundImage: "url(/assets/images/shapes/welcome-v1-shape1.png)" }}>
                                        </div>
                                        <span className="icon-badge"><span className="path1"></span><span
                                                className="path2"></span><span className="path3"></span>
                                        </span>
                                    </div>
                                    <div className="right">
                                        <h6>Why Tradebro?</h6>
                                        <h3>
                                            <Link href="/index-3">Trade Better with TradeBro</Link>
                                        </h3>
                                    </div>
                                </div>
                                <div className="text-box">
                                    <p>To the claims of duty or the business it will frequently occur that...</p>
                                </div>
                            </div>
                            <div className="btn-box">
                                <Link href="/index-3">
                                    Read More
                                    <i className="icon-right-arrow"></i>
                                </Link>
                            </div>
                        </div>
                        </FadeIn>
                    </div>
                    

                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <FadeIn delay={0.2}>
                        <div className="single-welcome-style1">
                            <div className="single-welcome-style1__inner">
                                <div className="top-box">
                                    <div className="icon">
                                        <div className="icon__bg"
                                            style={{ backgroundImage: "url(/assets/images/shapes/welcome-v1-shape1.png)" }}>
                                        </div>
                                        <span className="icon-open-book"><span className="path1"></span><span
                                                className="path2"></span><span className="path3"></span><span
                                                className="path4"></span><span className="path5"></span><span
                                                className="path6"></span><span className="path7"></span>
                                        </span>
                                    </div>
                                    <div className="right">
                                        <h6>How to trade</h6>
                                        <h3>
                                            <Link href="/index-3">Guide to Smarter Trading</Link>
                                        </h3>
                                    </div>
                                </div>
                                <div className="text-box">
                                    <p>Expound the actual teachings of the great explorer of the truth....</p>
                                </div>
                            </div>
                            <div className="btn-box">
                                <Link href="/index-3">
                                    Read More
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