
import Marquee from "@/components/elements/Marquee";
import Layout from "@/components/layout/Layout";
import Platforms from "@/components/sections/home1/Platforms";
import Highlights from "@/components/sections/InnerPage/Highlights";
import Image from "next/image";
import Link from "next/link";

export default function Platform_Page() {

    return (
        <div className="body-bg-1">
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Platform" breadcrumbTitleTwo="Trading">
                <Highlights/>
                <Platforms/>

                <section className="mobile-app-style1">
                    <div className="container">
                        <div className="sec-title text-center">
                            <div className="sub-title">
                                <h4>Mobile App</h4>
                            </div>
                            <h2>Get the App and Trade <br />on the Go!</h2>
                        </div>
                        <div className="row">

                            <div className="col-xl-6 col-lg-6">
                                <div className="mobile-app-style1__img">
                                    <div className="inner">
                                        <div className="pattern"
                                            style={{ backgroundImage: "url(/assets/images/pattern/mobile-app-v1-pattern.png)" }}>
                                        </div>
                                        <Image src="/assets/images/resources/mobaile-app-v1-1.png" alt="Image" width={460} height={590} priority />
                                    </div>

                                    <div className="mobile-app-style1__big-title">
                                        <Marquee speed={25} direction="up" pauseOnHover className="mobile-app-style1__inner marquee_mode-downToUp">
                                            <ul>
                                                <li>Anywhere</li>
                                                <li>Anywhere</li>
                                            </ul>
                                        </Marquee>
                                    </div>

                                </div>
                            </div>

                            <div className="col-xl-6 col-lg-6">
                                <div className="mobile-app-style1__content">
                                    <div className="text">
                                        <p>Minus id quod maxime place at facere possimus, omnis voluptas assumenda omnis dolors
                                            repellendus tempor.</p>
                                    </div>
                                    <ul className="list-item">
                                        <li>
                                            <div className="icon">
                                                <span className="icon-right-chevron"><span className="path1"></span><span
                                                        className="path2"></span><span className="path3"></span>
                                                </span>
                                            </div>
                                            <div className="title">
                                                <h3>Market Updates</h3>
                                                <p>Natus error sit voluptatem accusantium laudantium.</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-right-chevron"><span className="path1"></span><span
                                                        className="path2"></span><span className="path3"></span>
                                                </span>
                                            </div>
                                            <div className="title">
                                                <h3>Notification Feature</h3>
                                                <p>Rem aperiam eaque ipsa quae ab illo inventore.</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-right-chevron"><span className="path1"></span><span
                                                        className="path2"></span><span className="path3"></span>
                                                </span>
                                            </div>
                                            <div className="title">
                                                <h3>24/7 Support</h3>
                                                <p>Best every pleasure is to be welcomed and every.</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-right-chevron"><span className="path1"></span><span
                                                        className="path2"></span><span className="path3"></span>
                                                </span>
                                            </div>
                                            <div className="title">
                                                <h3>Offline Access</h3>
                                                <p>Rem aperiam eaque ipsa quae ab illo inventore.</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-right-chevron"><span className="path1"></span><span
                                                        className="path2"></span><span className="path3"></span>
                                                </span>
                                            </div>
                                            <div className="title">
                                                <h3>Multilingual Support</h3>
                                                <p>Best every pleasure is to be welcomed and every.</p>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="app-box">
                                        <div className="icon-box">
                                            <Link href="https://apps.apple.com/us/app/apple-store/id375380948">
                                                <span className="icon-app-store"></span>
                                            </Link>
                                            <Link href="https://play.google.com/store/games?hl=es_419">
                                                <span className="icon-google-play"><span className="path1"></span><span
                                                        className="path2"></span><span className="path3"></span><span
                                                        className="path4"></span></span>
                                            </Link>
                                        </div>
                                        <div className="text">
                                            <p>Join with 2.5m <br />Traders.</p>
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
