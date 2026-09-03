
import Link from "next/link";
import FadeIn from "@/components/elements/FadeIn";

export default function Instrument() {
  return (
    <>
        <section className="instrument-style2">
            <div className="container">
                <div className="instrument-style2__top">
                    <div className="sec-title">
                        <div className="sub-title">
                            <h4>instruments</h4>
                        </div>
                        <h2>Leading Market Price List</h2>
                    </div>
                    <div className="btn-box">
                        <Link href="#">
                            See More Pairs
                            <i className="icon-right-arrow"></i>
                        </Link>
                    </div>
                </div>
                <div className="row">
                    
                    <div className="col-xl-6 col-lg-6">
                        <FadeIn direction="up" delay={0.0}>
                        <div className="single-instrument-style2">
                            <div className="left-box">
                                <Link href="#" className="icon icon1">
                                    <i className="icon-right-down"></i>
                                </Link>
                                <div className="text-box">
                                    <div className="top">
                                        <h6>usd</h6>
                                        <div className="icon2">
                                            <i className="icon-exchange"></i>
                                        </div>
                                        <h6>eur</h6>
                                    </div>
                                    <p>Buy at $1.06199</p>
                                </div>
                            </div>
                            <div className="right-box">
                                <div className="text-box">
                                    <p className="color color2">-0.14%</p>
                                    <p>Sell at 1.06185</p>
                                </div>
                                <div className="btn-box">
                                    <Link className="btn-one" href="#">
                                        <span className="txt">Trade</span>
                                        <i className="icon-right-arrow"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        </FadeIn>
                    </div>
                    

                    <div className="col-xl-6 col-lg-6">
                        <FadeIn direction="up" delay={0.0}>
                        <div className="single-instrument-style2">
                            <div className="left-box">
                                <Link href="#" className="icon">
                                    <i className="icon-right-up"></i>
                                </Link>
                                <div className="text-box">
                                    <div className="top">
                                        <h6>usd</h6>
                                        <div className="icon2">
                                            <i className="icon-exchange"></i>
                                        </div>
                                        <h6>jpy</h6>
                                    </div>
                                    <p>Buy at $1.06199</p>
                                </div>
                            </div>
                            <div className="right-box">
                                <div className="text-box">
                                    <p className="color">+0.08%</p>
                                    <p>Sell at 1.06185</p>
                                </div>
                                <div className="btn-box">
                                    <Link className="btn-one" href="#">
                                        <span className="txt">Trade</span>
                                        <i className="icon-right-arrow"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        </FadeIn>
                    </div>
                    

                    <div className="col-xl-6 col-lg-6">
                        <FadeIn direction="up" delay={0.1}>
                        <div className="single-instrument-style2">
                            <div className="left-box">
                                <Link href="#" className="icon">
                                    <i className="icon-right-up"></i>
                                </Link>
                                <div className="text-box">
                                    <div className="top">
                                        <h6>usd</h6>
                                        <div className="icon2">
                                            <i className="icon-exchange"></i>
                                        </div>
                                        <h6>Aus</h6>
                                    </div>
                                    <p>Buy at $1.06199</p>
                                </div>
                            </div>
                            <div className="right-box">
                                <div className="text-box">
                                    <p className="color">+0.25%</p>
                                    <p>Sell at 1.06185</p>
                                </div>
                                <div className="btn-box">
                                    <Link className="btn-one" href="#">
                                        <span className="txt">Trade</span>
                                        <i className="icon-right-arrow"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        </FadeIn>
                    </div>
                    

                    <div className="col-xl-6 col-lg-6">
                        <FadeIn direction="up" delay={0.1}>
                        <div className="single-instrument-style2">
                            <div className="left-box">
                                <Link href="#" className="icon">
                                    <i className="icon-right-up"></i>
                                </Link>
                                <div className="text-box">
                                    <div className="top">
                                        <h6>usd</h6>
                                        <div className="icon2">
                                            <i className="icon-exchange"></i>
                                        </div>
                                        <h6>Cad</h6>
                                    </div>
                                    <p>Buy at $1.06199</p>
                                </div>
                            </div>
                            <div className="right-box">
                                <div className="text-box">
                                    <p className="color">+0.06%</p>
                                    <p>Sell at 1.06185</p>
                                </div>
                                <div className="btn-box">
                                    <Link className="btn-one" href="#">
                                        <span className="txt">Trade</span>
                                        <i className="icon-right-arrow"></i>
                                    </Link>
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