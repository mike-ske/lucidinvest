import Layout from "@/components/layout/Layout";
import Choose from "@/components/sections/home1/Choose";
import Awards from "@/components/sections/InnerPage/Awards";
import Counter from "@/components/sections/InnerPage/Counter";
import Partners from "@/components/sections/InnerPage/Partners";
import Statement from "@/components/sections/InnerPage/Statement";
import Image from "next/image";
import Link from "next/link";


export default function About_Page() {

    return (
        <div className="body-bg-1">
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="About Us" breadcrumbTitleTwo="About">
                <section className="about-style2 pdtop">
                    <div className="container">
                        <div className="row">

                            <div className="col-xl-7 col-lg-6">
                                <div className="about-style2__left about-style2__left-style3">
                                    <div className="shape1">
                                        <Image src="/assets/images/shapes/about-v2-shape22.png" alt="Shape" width={456} height={456} priority />
                                    </div>
                                    <div className="img-box1">
                                        <Image src="/assets/images/about/about-v2-11.jpg" alt="Image" width={300} height={460} priority />
                                    </div>
                                    <div className="img-box2">
                                        <Image src="/assets/images/about/about-v2-2.jpg" alt="Image" width={310} height={205} priority />
                                    </div>
                                    <div className="experience-box">
                                        <div className="experience-box__bg"
                                            style={{ backgroundImage: "url(/assets/images/shapes/about-v2-shape11.png)" }}>
                                        </div>
                                        <div className="icon">
                                            <span className="icon-bull"><span className="path1"></span><span className="path2"></span><span
                                                    className="path3"></span><span className="path4"></span>
                                            </span>
                                        </div>
                                        <div className="title">
                                            <h2>24+ <span>Years</span></h2>
                                        </div>
                                        <div className="text">
                                            <h3>Experience in the Market</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-5 col-lg-6">
                                <div className="about-style2__right">
                                    <div className="sec-title withtext">
                                        <div className="sub-title">
                                            <h4>About Tradebro</h4>
                                        </div>
                                        <h2>Gateway to Global Markets</h2>
                                        <div className="text">
                                            <p>
                                                It is a long established fact that reader will be distracted by the readable
                                                content of a page when looking atlayout point of making here is that it has a
                                                more-or-less normal distribution all letters as opposed to using.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="purpose-box">
                                        <div className="icon">
                                            <span className="icon-medical-history"><span className="path1"></span><span
                                                    className="path2"></span><span className="path3"></span><span
                                                    className="path4"></span><span className="path5"></span><span
                                                    className="path6"></span><span className="path7"></span><span
                                                    className="path8"></span><span className="path9"></span><span
                                                    className="path10"></span><span className="path11"></span>
                                            </span>
                                        </div>
                                        <div className="text">
                                            <h3>Our Journey</h3>
                                            <p>Nor again is there anyone who loves or pursues all itself because it is pain.</p>
                                        </div>
                                    </div>
                                    <div className="btn-box">
                                        <Link className="btn-one" href="/about">
                                            <span className="txt">Explore History</span>
                                            <i className="icon-right-arrow"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                <Statement/>
                <Choose/>
                <Counter/>
                <section className="team-style1">
                    <div className="container">
                        <div className="sec-title withtext text-center">
                            <div className="sub-title">
                                <h4>Team members</h4>
                            </div>
                            <h2>Leadership & Skilled Team</h2>
                            <div className="text">
                                <p>
                                    Discover the most competitive prices in the market, updated <br />regularly for your
                                    advantage.
                                </p>
                            </div>
                        </div>
                        <div className="row">

                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="single-team-style1">
                                    <div className="top-box">
                                        <div className="img-box">
                                            <Image src="/assets/images/team/team-v1-1.jpg" alt="Image" width={170} height={170} priority />
                                        </div>
                                        <div className="text-box">
                                            <h6>8+ years of experience in markets.</h6>
                                            <Link href="#">
                                                <i className="icon-play"></i>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="middle-box">
                                        <h3><Link href="#">G.Davidson</Link></h3>
                                        <p>Chief Executive Officer</p>
                                    </div>
                                    <div className="bottom-box">
                                        <div className="left">
                                            <div className="icon">
                                                <span className="icon-message"><span className="path1"></span><span
                                                        className="path2"></span><span className="path3"></span><span
                                                        className="path4"></span><span className="path5"></span><span
                                                        className="path6"></span>
                                                </span>
                                            </div>
                                            <Link href="mailto:getsupport@gmail.com">Email me</Link>
                                        </div>
                                        <ul className="right">
                                            <li>
                                                <Link href="https://www.facebook.com/">
                                                    <i className="icon-facebook"></i>
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
                            </div>
                            
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="single-team-style1">
                                    <div className="top-box">
                                        <div className="img-box">
                                            <Image src="/assets/images/team/team-v1-2.jpg" alt="Image" width={170} height={170} priority />
                                        </div>
                                        <div className="text-box">
                                            <h6>5+ years of experience in markets.</h6>
                                            <Link href="#">
                                                <i className="icon-play"></i>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="middle-box">
                                        <h3><Link href="#">K.Michael</Link></h3>
                                        <p>Chief Technology Officer</p>
                                    </div>
                                    <div className="bottom-box">
                                        <div className="left">
                                            <div className="icon">
                                                <span className="icon-message"><span className="path1"></span><span
                                                        className="path2"></span><span className="path3"></span><span
                                                        className="path4"></span><span className="path5"></span><span
                                                        className="path6"></span>
                                                </span>
                                            </div>
                                            <Link href="mailto:getsupport@gmail.com">Email me</Link>
                                        </div>
                                        <ul className="right">
                                            <li>
                                                <Link href="https://www.facebook.com/">
                                                    <i className="icon-facebook"></i>
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
                            </div>
                            
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="single-team-style1">
                                    <div className="top-box">
                                        <div className="img-box">
                                            <Image src="/assets/images/team/team-v1-3.jpg" alt="Image" width={170} height={170} priority />
                                        </div>
                                        <div className="text-box">
                                            <h6>6+ years of experience in markets.</h6>
                                            <Link href="#">
                                                <i className="icon-play"></i>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="middle-box">
                                        <h3><Link href="#">M.Frederick</Link></h3>
                                        <p>Head of Market Research</p>
                                    </div>
                                    <div className="bottom-box">
                                        <div className="left">
                                            <div className="icon">
                                                <span className="icon-message"><span className="path1"></span><span
                                                        className="path2"></span><span className="path3"></span><span
                                                        className="path4"></span><span className="path5"></span><span
                                                        className="path6"></span>
                                                </span>
                                            </div>
                                            <Link href="mailto:getsupport@gmail.com">Email me</Link>
                                        </div>
                                        <ul className="right">
                                            <li>
                                                <Link href="https://www.facebook.com/">
                                                    <i className="icon-facebook"></i>
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
                            </div>

                        </div>
                        <div className="team-style1__btn">
                            <Link href="#">
                                View all Members
                                <i className="icon-right-arrow"></i>
                            </Link>
                        </div>
                    </div>
                </section>
                <Partners/>
                <Awards/>
            </Layout>
        </div>
    )
}
