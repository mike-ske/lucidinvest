import Marquee from "@/components/elements/Marquee";
import Layout from "@/components/layout/Layout";
import Courses from "@/components/sections/InnerPage/Courses";
import Image from "next/image";
import Link from "next/link";


export default function Courses_Page() {

    return (
        <div className="body-bg-1">
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Courses" breadcrumbTitleTwo="Education">
                <Courses/>
                <section className="ebook-style1 ebook-style1--style2">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-5">
                                <div className="ebook-style1__img">
                                    <div className="ebook-style1__img-pattern"
                                        style={{ backgroundImage: "url(/assets/images/pattern/ebook-v1-pattern1.png)" }}></div>
                                    <div className="inner">
                                        <Image src="/assets/images/resources/ebook-v1-img1.png" alt="Image" width={397} height={501} priority />
                                    </div>
                                    <div className="ebook-style1__big-title">
                                        <Marquee speed={20} direction="up" className="ebook-style1__inner marquee_mode-downToUp">
                                            <ul>
                                                <li>Succeed</li>
                                                <li>Succeed</li>
                                            </ul>
                                        </Marquee>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-6 col-lg-7">
                                <div className="ebook-style1__content">
                                    <div className="sec-title withtext">
                                        <div className="sub-title">
                                            <h4>Ebook</h4>
                                        </div>
                                        <h2>Essential eBooks for Every Trader</h2>
                                        <div className="text">
                                            <p>
                                                Minus id quod maxime place at facere possimus, omnis voluptas
                                                assumenda omnis dolors repellendus tempor.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="list-item">
                                        <div className="inner-title">
                                            <h3>Ebook Highlights</h3>
                                        </div>
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <ul className="clearfix">
                                                    <li>
                                                        <div className="icon">
                                                            <span className="icon-checkmark-1"><span className="path1"></span><span
                                                                    className="path2"></span>
                                                            </span>
                                                        </div>
                                                        <div className="text">
                                                            <p>Beginner&apos;s Guide to <br />Forex Trading</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="icon">
                                                            <span className="icon-checkmark-1"><span className="path1"></span><span
                                                                    className="path2"></span>
                                                            </span>
                                                        </div>
                                                        <div className="text">
                                                            <p>Risk Management in <br />Trading</p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <ul className="clearfix">
                                                    <li>
                                                        <div className="icon">
                                                            <span className="icon-checkmark-1"><span className="path1"></span><span
                                                                    className="path2"></span>
                                                            </span>
                                                        </div>
                                                        <div className="text">
                                                            <p>Fundamental Analysis <br />Explained</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="icon">
                                                            <span className="icon-checkmark-1"><span className="path1"></span><span
                                                                    className="path2"></span>
                                                            </span>
                                                        </div>
                                                        <div className="text">
                                                            <p>Building a Successful <br />Trading Plan</p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bottom-box">
                                        <div className="icon">
                                            <i className="icon-download"></i>
                                        </div>
                                        <div className="btn-box">
                                            <Link href="#">
                                                Download Now
                                                <i className="icon-right-arrow"></i>
                                            </Link>
                                            <h6>pdf - 4.5 mb</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </Layout>
        </div>
    )
}
