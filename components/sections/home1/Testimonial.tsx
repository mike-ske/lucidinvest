
import Marquee from "@/components/elements/Marquee";
import Image from "next/image";


export default function Testimonial() {

  return (
    <>
        <section className="testimonial-style1">
            <div className="container">
                <div className="sec-title white">
                    <div className="sub-title">
                        <h4>Testimonials</h4>
                    </div>
                    <h2>Real Experiences, Real Results</h2>
                </div>
            </div>
            <div className="testimonial-style1__inner">

                <Marquee speed={25} direction="left" pauseOnHover className="marquee_mode-rightToLeft">
                    
                    <li className="single-testimonial-style1">
                        <div className="top-box">
                            <div className="left">
                                <div className="percent">
                                    <p>35%</p>
                                </div>
                                <div className="text">
                                    <p>Profit within Three <br />Months.</p>
                                </div>
                            </div>
                            <div className="right">
                                <div className="point">
                                    <p>5.0</p>
                                </div>
                                <ul className="rating">
                                    <li>
                                        <i className="icon-star"></i>
                                    </li>
                                    <li>
                                        <i className="icon-star"></i>
                                    </li>
                                    <li>
                                        <i className="icon-star"></i>
                                    </li>
                                    <li>
                                        <i className="icon-star"></i>
                                    </li>
                                    <li>
                                        <i className="icon-star"></i>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="text-box">
                            <p>The platform's tools and resources significantly improved
                                my trading strategy. Tradebrohas been instrumental in my
                                trading success.</p>
                        </div>
                        <div className="bottom-box">
                            <div className="icon">
                                <span className="icon-spain"><span className="path1"></span><span className="path2"></span></span>
                            </div>
                            <h3>Newton Lester, <span>Forex Trader.</span></h3>
                        </div>
                        <div className="quote-icon">
                            <Image src="/assets/images/icon/icon-quote.png" alt="Quote Icon" width={95} height={68} priority />
                        </div>
                    </li>
                    
                    <li className="single-testimonial-style1">
                        <div className="top-box">
                            <div className="left">
                                <div className="percent">
                                    <p>40%</p>
                                </div>
                                <div className="text">
                                    <p>Trading Performance <br />Improved.</p>
                                </div>
                            </div>
                            <div className="right">
                                <div className="point">
                                    <p>4.9</p>
                                </div>
                                <ul className="rating">
                                    <li>
                                        <i className="icon-star"></i>
                                    </li>
                                    <li>
                                        <i className="icon-star"></i>
                                    </li>
                                    <li>
                                        <i className="icon-star"></i>
                                    </li>
                                    <li>
                                        <i className="icon-star"></i>
                                    </li>
                                    <li>
                                        <i className="icon-star"></i>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="text-box">
                            <p>I&apos;ve found Tradebroto be incredibly reliable and user-friendly.
                                The educational resources and market analysis have been
                                instrumental in helping me.</p>
                        </div>
                        <div className="bottom-box">
                            <div className="icon">
                                <span className="icon-france"><span className="path1"></span><span className="path2"></span><span
                                        className="path3"></span></span>
                            </div>
                            <h3>Oakley Hamilton, <span>Day Trader.</span></h3>
                        </div>
                        <div className="quote-icon">
                            <Image src="/assets/images/icon/icon-quote.png" alt="Quote Icon" width={95} height={68} priority />
                        </div>
                    </li>
                    
                    <li className="single-testimonial-style1">
                        <div className="top-box">
                            <div className="left">
                                <div className="percent">
                                    <p>20%</p>
                                </div>
                                <div className="text">
                                    <p>Return on my Investments <br />Last Quarter.</p>
                                </div>
                            </div>
                            <div className="right">
                                <div className="point">
                                    <p>5.0</p>
                                </div>
                                <ul className="rating">
                                    <li>
                                        <i className="icon-star"></i>
                                    </li>
                                    <li>
                                        <i className="icon-star"></i>
                                    </li>
                                    <li>
                                        <i className="icon-star"></i>
                                    </li>
                                    <li>
                                        <i className="icon-star"></i>
                                    </li>
                                    <li>
                                        <i className="icon-star"></i>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="text-box">
                            <p>Trading with Tradebrohas been a great experience. The
                                platform is easy to use, and the insights provided have helped
                                me consistently improve my trading.</p>
                        </div>
                        <div className="bottom-box">
                            <div className="icon">
                                <Image src="/assets/images/resources/flag1.png" alt="Flag Image" width={35} height={35} priority />
                            </div>
                            <h3>Edric Stanley, <span>Stock Trader.</span></h3>
                        </div>
                        <div className="quote-icon">
                            <Image src="/assets/images/icon/icon-quote.png" alt="Quote Icon" width={95} height={68} priority />
                        </div>
                    </li>
                </Marquee>


                <Marquee speed={25} direction="right" pauseOnHover className="marquee_mode-leftToRight">
                    
                    <li className="single-testimonial-style1">
                        <div className="top-box">
                            <div className="left">
                                <div className="percent">
                                    <p>20%</p>
                                </div>
                                <div className="text">
                                    <p>Return on my Investments <br />Last Quarter.</p>
                                </div>
                            </div>
                            <div className="right">
                                <div className="point">
                                    <p>5.0</p>
                                </div>
                                <ul className="rating">
                                    <li>
                                        <i className="icon-star"></i>
                                    </li>
                                    <li>
                                        <i className="icon-star"></i>
                                    </li>
                                    <li>
                                        <i className="icon-star"></i>
                                    </li>
                                    <li>
                                        <i className="icon-star"></i>
                                    </li>
                                    <li>
                                        <i className="icon-star"></i>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="text-box">
                            <p>Trading with Tradebrohas been a great experience. The
                                platform is easy to use, and the insights provided have helped
                                me consistently improve my trading.</p>
                        </div>
                        <div className="bottom-box">
                            <div className="icon">
                                <Image src="/assets/images/resources/flag1.png" alt="Flag Image" width={35} height={35} priority />
                            </div>
                            <h3>Edric Stanley, <span>Stock Trader.</span></h3>
                        </div>
                        <div className="quote-icon">
                            <Image src="/assets/images/icon/icon-quote.png" alt="Quote Icon" width={95} height={68} priority />
                        </div>
                    </li>
                    
                    <li className="single-testimonial-style1">
                        <div className="top-box">
                            <div className="left">
                                <div className="percent">
                                    <p>35%</p>
                                </div>
                                <div className="text">
                                    <p>Profit within Three <br />Months.</p>
                                </div>
                            </div>
                            <div className="right">
                                <div className="point">
                                    <p>5.0</p>
                                </div>
                                <ul className="rating">
                                    <li>
                                        <i className="icon-star"></i>
                                    </li>
                                    <li>
                                        <i className="icon-star"></i>
                                    </li>
                                    <li>
                                        <i className="icon-star"></i>
                                    </li>
                                    <li>
                                        <i className="icon-star"></i>
                                    </li>
                                    <li>
                                        <i className="icon-star"></i>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="text-box">
                            <p>The platform's tools and resources significantly improved
                                my trading strategy. Tradebrohas been instrumental in my
                                trading success.</p>
                        </div>
                        <div className="bottom-box">
                            <div className="icon">
                                <span className="icon-spain"><span className="path1"></span><span className="path2"></span></span>
                            </div>
                            <h3>Newton Lester, <span>Forex Trader.</span></h3>
                        </div>
                        <div className="quote-icon">
                            <Image src="/assets/images/icon/icon-quote.png" alt="Quote Icon" width={95} height={68} priority />
                        </div>
                    </li>
                    

                    <li className="single-testimonial-style1">
                        <div className="top-box">
                            <div className="left">
                                <div className="percent">
                                    <p>40%</p>
                                </div>
                                <div className="text">
                                    <p>Trading Performance <br />Improved.</p>
                                </div>
                            </div>
                            <div className="right">
                                <div className="point">
                                    <p>4.9</p>
                                </div>
                                <ul className="rating">
                                    <li>
                                        <i className="icon-star"></i>
                                    </li>
                                    <li>
                                        <i className="icon-star"></i>
                                    </li>
                                    <li>
                                        <i className="icon-star"></i>
                                    </li>
                                    <li>
                                        <i className="icon-star"></i>
                                    </li>
                                    <li>
                                        <i className="icon-star"></i>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="text-box">
                            <p>I&apos;ve found Tradebroto be incredibly reliable and user-friendly.
                                The educational resources and market analysis have been
                                instrumental in helping me.</p>
                        </div>
                        <div className="bottom-box">
                            <div className="icon">
                                <span className="icon-france"><span className="path1"></span><span className="path2"></span><span
                                        className="path3"></span></span>
                            </div>
                            <h3>Oakley Hamilton, <span>Day Trader.</span></h3>
                        </div>
                        <div className="quote-icon">
                            <Image src="/assets/images/icon/icon-quote.png" alt="Quote Icon" width={95} height={68} priority />
                        </div>
                    </li>
                </Marquee>
            </div>
        </section>
    </>
  )
}