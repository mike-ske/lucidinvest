
import Image from "next/image";
import Link from "next/link"

export default function Footer3() {

    return (
        <>
        
            <footer className="footer-style3">
                

                <div className="footer-main-style3">
                    <div className="container">
                        <div className="row">
                            

                            <div className="col-xl-4 col-lg-6 col-md-6 single-widget">
                                <div className="single-footer-widget-style3 mr-minus20 wow fadeInUp" data-wow-duration="1500ms"
                                    data-wow-delay="000ms">
                                    <div className="single-footer-widget-style3__bg"
                                        style={{ backgroundImage: "url(/assets/images/shapes/footer-v3-single-bg.jpg)" }}>
                                    </div>
                                    <div className="single-footer-widget-style3-info">
                                        <div className="icon">
                                            <Image src="/assets/images/icon/footer-v3-icon1.png" alt="Icon" width={38} height={30} priority />
                                        </div>
                                        <div className="title2">
                                            <h3>Participate in <br />Our Discord Community.</h3>
                                            <p>Be a part of our update community.</p>
                                        </div>
                                        <div className="images-links">
                                            <ul className="clearfix">
                                                <li>
                                                    <div className="img-box img-box1">
                                                        <Image src="/assets/images/footer/footer-v3-members1.png" alt="Image" width={30} height={38} priority />
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="img-box img-box2">
                                                        <Image src="/assets/images/footer/footer-v3-members2.png" alt="Image" width={30} height={38} priority />
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="img-box img-box3">
                                                        <Image src="/assets/images/footer/footer-v3-members3.png" alt="Image" width={30} height={38} priority />
                                                    </div>
                                                </li>
                                            </ul>
                                            <div className="text">
                                                <p>25k Members <br />in Our Community</p>
                                            </div>
                                        </div>
                                        <div className="btn-box">
                                            <Link className="btn-one" href="#">
                                                <span className="txt">Accept Invite</span>
                                                <i className="icon-right-arrow"></i>
                                            </Link>
                                        </div>
                                        <div className="members-box">
                                            <div className="box"></div>
                                            <p>4,235 Online.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            

                            <div className="col-xl-4 col-lg-6 col-md-6 single-widget">
                                <div className="single-footer-widget-style3 plr30 wow fadeInDown" data-wow-duration="1500ms"
                                    data-wow-delay="000ms">
                                    <div className="title">
                                        <h3>Useful Links</h3>
                                    </div>
                                    <div className="footer-widget-links-style3">
                                        <ul className="clearfix">
                                            <li>
                                                <Link href="#">
                                                    About Us
                                                    <i className="icon-right-arrow"></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    Trading Platforms
                                                    <i className="icon-right-arrow"></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    Demo Account
                                                    <i className="icon-right-arrow"></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    Market Insights
                                                    <i className="icon-right-arrow"></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    Faq’s
                                                    <i className="icon-right-arrow"></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    Customer Support
                                                    <i className="icon-right-arrow"></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    Tutorials
                                                    <i className="icon-right-arrow"></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    Economic Calendar
                                                    <i className="icon-right-arrow"></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    Careers
                                                    <i className="icon-right-arrow"></i>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            

                            <div className="col-xl-4 col-lg-6 col-md-6 single-widget">
                                <div className="single-footer-widget-style3 ml20 wow fadeInUp" data-wow-duration="1500ms"
                                    data-wow-delay="000ms">
                                    <div className="single-footer-widget-style3__bg style2"
                                        style={{ backgroundImage: "url(/assets/images/shapes/footer-v3-single-bg.jpg)" }}>
                                    </div>
                                    <div className="title title1">
                                        <h3>Tips & Tricks</h3>
                                    </div>
                                    <ul className="single-footer-widget-style3-post clearfix">
                                        <li>
                                            <div className="img">
                                                <Image src="/assets/images/footer/footer-v3-post1.jpg" alt="Img" width={70} height={70} priority />
                                            </div>
                                            <div className="content">
                                                <div className="category">
                                                    <div className="icon">
                                                        <span className="icon-hashtag"></span>
                                                    </div>
                                                    <h6>Market Analysis</h6>
                                                </div>
                                                <div className="title2">
                                                    <h3>
                                                        <Link href="#">How Global Events are Shaping Commodity Prices</Link>
                                                    </h3>
                                                </div>
                                                <div className="btn-box">
                                                    <Link href="#">
                                                        4 Minutes read
                                                        <i className="icon-right-arrow"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="img">
                                                <Image src="/assets/images/footer/footer-v3-post2.jpg" alt="Img" width={70} height={70} priority />
                                            </div>
                                            <div className="content">
                                                <div className="category">
                                                    <div className="icon">
                                                        <span className="icon-hashtag"></span>
                                                    </div>
                                                    <h6>Economic News</h6>
                                                </div>
                                                <div className="title2">
                                                    <h3>
                                                        <Link href="#">The Effect of Fiscal Policies on Stock Market
                                                            Performance</Link>
                                                    </h3>
                                                </div>
                                                <div className="btn-box">
                                                    <Link href="#">
                                                        3 Minutes read
                                                        <i className="icon-right-arrow"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                

                <div className="footer-bottom-style3">
                    <div className="container">
                        <div className="bottom-inner-style3">
                            <div className="copyright-text-style3 wow fadeInLeft" data-wow-duration="1500ms"
                                data-wow-delay="000ms">
                                <p>
Copyrights © {new Date().getFullYear()} <Link href="/">Lucid Global Invest. </Link> All rights reserved.
                                </p>
                            </div>
                            <div className="payment-methods wow fadeInRight" data-wow-duration="1500ms" data-wow-delay="200ms">
                                <div className="text">
                                    <p>We Accept:</p>
                                </div>
                                <ul className="clearfix">
                                    <li>
                                        <Image src="/assets/images/footer/footer-v3-card1.png" alt="Card" width={48} height={30} priority />
                                    </li>
                                    <li>
                                        <Image src="/assets/images/footer/footer-v3-card2.png" alt="Card" width={48} height={30} priority />
                                    </li>
                                    <li>
                                        <Image src="/assets/images/footer/footer-v3-card3.png" alt="Card" width={48} height={30} priority />
                                    </li>
                                    <li>
                                        <Image src="/assets/images/footer/footer-v3-card4.png" alt="Card" width={48} height={30} priority />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}
