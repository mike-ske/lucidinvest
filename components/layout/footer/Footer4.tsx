
import FadeIn from "@/components/elements/FadeIn";
import Image from "next/image";
import Link from "next/link"
import Language from "../Language";

export default function Footer4() {

    return (
        <>
        
        <footer className="footer-style4">

            <div className="footer-main-style4">
                <div className="footer-main-style4__bg"
                    style={{ backgroundImage: "url(/assets/images/shapes/footer-v4-bg.jpg)" }}>
                </div>
                <div className="footer-main-style4__img">
                    <Image src="/assets/images/shapes/footer-v4-img1.png" className="float-bob-y" alt="Image" width={174} height={170} priority />
                </div>
                <div className="footer-main-style4__shape1">
                    <Image src="/assets/images/shapes/footer-v4-shape1.png" className="float-bob-y" alt="Shape" width={477} height={293} priority />
                </div>
                <div className="footer-main-style4__shape2">
                    <Image src="/assets/images/shapes/footer-v4-shape2.png" className="" alt="Shape" width={476} height={293} priority />
                </div>
                <div className="container">
                    <FadeIn direction="up" delay={0.0}>
                    <div className="footer-main-style4__top">
                        <div className="footer-main-style4__top-left">
                            <div className="title">
                                <h4>Need Help? We're Here for Every Trade!</h4>
                            </div>
                            <div className="btn-box">
                                <Link href="#">
                                    Request Help
                                    <i className="icon-right-arrow"></i>
                                </Link>
                            </div>
                        </div>
                        <div className="footer-main-style4__top-right">
                            <div className="img">
                                <Image src="/assets/images/shapes/footer-v4-img2.png" alt="Image" width={80} height={74} priority />
                            </div>
                            <div className="text">
                                <p>Regulated by bkck and registered with <span>kencob</span>.</p>
                            </div>
                        </div>
                    </div>
                    </FadeIn>

                    <FadeIn direction="up" delay={0.1}>
                    <div className="footer-main-style4__middle">
                        <div className="title">
                            <h2>Make a Trade</h2>
                        </div>
                        <Link href="#" className="btn-box">
                            <i className="icon-arrow-right"></i>
                        </Link>
                    </div>
                    </FadeIn>

                    <FadeIn direction="up" delay={0.2}>
                    <div className="footer-main-style4__bottom">
                        <div className="footer-main-style4__bottom-left">
                            <div className="social-box">
                                <div className="text">
                                    <p>Get Social</p>
                                </div>
                                <ul className="clearfix">
                                    <li>
                                        <Link href="https://www.facebook.com/">
                                            <i className="icon-facebook"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://www.twitter.com/">
                                            <i className="icon-twitter"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://www.youtube.com/">
                                            <i className="icon-youtube"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://www.linkedin.com/login">
                                            <i className="icon-linkedin"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer-main-style4__bottom-middle text-center">
                            <div className="footer-logo-style4">
                                <Link href="/index-4">
                                    <Image src="/assets/images/resources/lucid-global-invest-logo.png" alt="Lucid Global Invest Logo" width={142} height={71} priority />
                                </Link>
                            </div>
                            <div className="copyright-text-style4">
                                <p>
Copyrights © {new Date().getFullYear()} <Link href="/">Lucid Global Invest. </Link> All rights reserved.
                                </p>
                            </div>
                        </div>

                        <div className="footer-main-style4__bottom-right">
                            <div className="language-switcher-style4">
                                <div className="icon">
                                    <i className="icon-language"></i>
                                </div>
                                <div className="text">
                                    <p>Lan:</p>
                                </div>
                                <Language/>
                            </div>
                        </div>
                    </div>
                    </FadeIn>

                </div>
            </div>
            
            <FadeIn direction="up" delay={0.3}>
            <div className="footer-bottom-style4">
                <div className="container">
                    <div className="footer-menu-style1 text-center">
                        <ul>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/markets">Markets</Link></li>
                            <li><Link href="/accounts">Trading</Link></li>
                            <li><Link href="/courses">Education</Link></li>
                            <li><Link href="/about">About</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            </FadeIn>
            

        </footer>

        </>
    )
}
