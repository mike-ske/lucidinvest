import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/elements/FadeIn";

export default function Slogan() {
  return (
    <>
        <section className="slogan-style1">
            <div className="slogan-style1__bg" style={{ backgroundImage: "url(/assets/images/backgrounds/slogan-v1-bg.jpg)" }}>
            </div>
            <div className="slogan-style1__bg2" style={{ backgroundImage: "url(/assets/images/backgrounds/slogan-v1-bg2.jpg)" }}>
            </div>
            <div className="container">
                <FadeIn delay={0.0}>
                <div className="slogan-style1__content text-center">
                    <div className="title-box">
                        <h2>Discover New <br />Opportunities in Every Trade</h2>
                    </div>
                    <ul className="list-item clearfix">
                        <li>
                            <div className="icon">
                                <Image src="/assets/images/icon/icon-check-mark1.png" alt="Icon" width={18} height={18} priority />
                            </div>
                            <h4>Advanced Trading Tools</h4>
                        </li>
                        <li>
                            <div className="icon">
                                <Image src="/assets/images/icon/icon-check-mark1.png" alt="Icon" width={18} height={18} priority />
                            </div>
                            <h4>Mobile & Desktop Platforms</h4>
                        </li>
                        <li>
                            <div className="icon">
                                <Image src="/assets/images/icon/icon-check-mark1.png" alt="Icon" width={18} height={18} priority />
                            </div>
                            <h4>Regulated Broker</h4>
                        </li>
                    </ul>
                    <div className="contact-communicate">
                        <div className="contact-box box1">
                            <p>Have question?</p>
                            <Link href="#">
                                Explore our FAQ section
                                <i className="icon-right-arrow"></i>
                            </Link>
                        </div>
                        <div className="icon-box">
                            <Link href="#">
                                <span className="icon-guide"><span className="path1"></span><span className="path2"></span><span
                                        className="path3"></span><span className="path4"></span><span className="path5"></span><span
                                        className="path6"></span><span className="path7"></span><span className="path8"></span><span
                                        className="path9"></span><span className="path10"></span>
                                </span>
                            </Link>
                            <Link href="#" className="box1">
                                <span className="icon-read"><span className="path1"></span><span className="path2"></span><span
                                        className="path3"></span><span className="path4"></span>
                                </span>
                            </Link>
                        </div>
                        <div className="contact-box">
                            <p>Email Us</p>
                            <Link href="mailto:inquiries@hiringhub.com">inquiries@hiringhub.com</Link>
                        </div>
                    </div>
                </div>
                </FadeIn>
            </div>
        </section>
    </>
  )
}