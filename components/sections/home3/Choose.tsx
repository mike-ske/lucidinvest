
import FadeIn from "@/components/elements/FadeIn";
import Link from "next/link";

export default function Choose() {

  return (
    <>
        <section className="choose-style2">
            <div className="container">
                <div className="sec-title withtext text-center">
                    <div className="sub-title">
                        <h4>Why Choose Us</h4>
                    </div>
                    <h2>The Top Choice for Traders</h2>
                    <div className="text">
                        <p>
                            Discover the most competitive prices in the market, updated <br />regularly for
                            your advantage.
                        </p>
                    </div>
                </div>
                <FadeIn direction="up" delay={0.0}>
                <ul className="row clearfix">

                    
                    <li className="col-xl-4 col-lg-6 col-md-6">
                        <div className="single-choose-style2 text-center">
                            <div className="top-box">
                                <div className="icon">
                                    <span className="icon-businessman"><span className="path1"></span><span
                                            className="path2"></span><span className="path3"></span><span className="path4"></span>
                                    </span>
                                </div>
                                <div className="count">
                                    <h4>#1</h4>
                                </div>
                            </div>
                            <div className="content-box">
                                <h3><Link href="#">Friendly & Expert</Link></h3>
                                <p>Duty or the obligation that business pleasure to be repudiated.</p>
                            </div>
                        </div>
                    </li>
                    

                    <li className="col-xl-4 col-lg-6 col-md-6">
                        <div className="single-choose-style2 text-center">
                            <div className="top-box">
                                <div className="icon">
                                    <span className="icon-security"><span className="path1"></span><span
                                            className="path2"></span><span className="path3"></span>
                                    </span>
                                </div>
                                <div className="count">
                                    <h4>#2</h4>
                                </div>
                            </div>
                            <div className="content-box">
                                <h3><Link href="#">Regulated & Secure</Link></h3>
                                <p>Trouble that are bound to ensue and equal blame belongs.</p>
                            </div>
                        </div>
                    </li>
                    

                    <li className="col-xl-4 col-lg-6 col-md-6">
                        <div className="single-choose-style2 text-center">
                            <div className="top-box">
                                <div className="icon">
                                    <span className="icon-bill"><span className="path1"></span><span className="path2"></span><span
                                            className="path3"></span><span className="path4"></span><span
                                            className="path5"></span><span className="path6"></span>
                                    </span>
                                </div>
                                <div className="count">
                                    <h4>#3</h4>
                                </div>
                            </div>
                            <div className="content-box">
                                <h3><Link href="#">No Hidden Fees</Link></h3>
                                <p>Power of choice untrammelled and when nothing prevents.</p>
                            </div>
                        </div>
                    </li>
                    

                    <li className="col-xl-4 col-lg-6 col-md-6">
                        <div className="single-choose-style2 text-center">
                            <div className="top-box">
                                <div className="icon">
                                    <span className="icon-high-five"><span className="path1"></span><span
                                            className="path2"></span><span className="path3"></span>
                                    </span>
                                </div>
                                <div className="count">
                                    <h4>#4</h4>
                                </div>
                            </div>
                            <div className="content-box">
                                <h3><Link href="#">Trusted Broker</Link></h3>
                                <p>Power of choice untrammelled and when nothing prevents.</p>
                            </div>
                        </div>
                    </li>
                    

                    <li className="col-xl-4 col-lg-6 col-md-6">
                        <div className="single-choose-style2 text-center">
                            <div className="top-box">
                                <div className="icon">
                                    <span className="icon-trend"><span className="path1"></span><span className="path2"></span>
                                    </span>
                                </div>
                                <div className="count">
                                    <h4>#5</h4>
                                </div>
                            </div>
                            <div className="content-box">
                                <h3><Link href="#">Global Market Access</Link></h3>
                                <p>Duty or the obligation that business pleasure to be repudiated.</p>
                            </div>
                        </div>
                    </li>
                    

                    <li className="col-xl-4 col-lg-6 col-md-6">
                        <div className="single-choose-style2 text-center">
                            <div className="top-box">
                                <div className="icon">
                                    <span className="icon-24-hours"><span className="path1"></span><span
                                            className="path2"></span><span className="path3"></span><span className="path4"></span>
                                    </span>
                                </div>
                                <div className="count">
                                    <h4>#6</h4>
                                </div>
                            </div>
                            <div className="content-box">
                                <h3><Link href="#">24/6 Market Access</Link></h3>
                                <p>Trouble that are bound to ensue and equal blame belongs.</p>
                            </div>
                        </div>
                    </li>

                </ul>
                </FadeIn>
            </div>
        </section>
    </>
  )
}