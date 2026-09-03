import Layout from "@/components/layout/Layout";
import Image from "next/image";
import Link from "next/link";


export default function History_Page() {

    return (
        <div className="body-bg-1">
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Our History" breadcrumbTitleTwo="About">
                <section className="history-style1">
                    <div className="container">
                        <i className="border-line1"></i>
                        <ul className="history-style1__inner">


                            <li className="single-history-style1">
                                <div className="img-box">
                                    <Image src="/assets/images/resources/history-v1-img1.jpg" alt="History" width={370} height={295} priority />
                                </div>
                                <div className="year-box">
                                    <h3>2000</h3>
                                    <div className="border-line"></div>
                                </div>
                                <div className="content-box">
                                    <div className="title">
                                        <h6>Early Stage</h6>
                                        <h3><Link href="#">The Establishment</Link></h3>
                                    </div>
                                    <div className="text">
                                        <p>Denounce with righteous indigation dislike men who are so beguiled and demoralized by
                                            pleasure of the moment.</p>
                                    </div>
                                    <div className="btn-box">
                                        <Link href="#">
                                            Read More
                                            <i className="icon-right-arrow"></i>
                                        </Link>
                                    </div>
                                </div>
                            </li>
                            
                            
                            <li className="single-history-style1 instyle2">
                                <div className="img-box">
                                    <Image src="/assets/images/resources/history-v1-img2.jpg" alt="History" width={370} height={295} priority />
                                </div>
                                <div className="year-box">
                                    <h3>2004</h3>
                                    <div className="border-line"></div>
                                </div>
                                <div className="content-box">
                                    <div className="title">
                                        <h6>First Award</h6>
                                        <h3><Link href="#">Transparent Fx Broker</Link></h3>
                                    </div>
                                    <div className="text">
                                        <p>Owing to the claims of duty or the obliga- tions business it will frequently occurs
                                            that</p>
                                    </div>
                                    <div className="btn-box">
                                        <Link href="#">
                                            Read More
                                            <i className="icon-right-arrow"></i>
                                        </Link>
                                    </div>
                                </div>
                            </li>
                            

                            <li className="single-history-style1">
                                <div className="img-box">
                                    <Image src="/assets/images/resources/history-v1-img3.jpg" alt="History" width={370} height={295} priority />
                                </div>
                                <div className="year-box">
                                    <h3>2010</h3>
                                    <div className="border-line"></div>
                                </div>
                                <div className="content-box">
                                    <div className="title">
                                        <h6>New Headquarter</h6>
                                        <h3><Link href="#">Moved headquarters to USA</Link></h3>
                                    </div>
                                    <div className="text">
                                        <p>Righteous indigation dislike men who are so beguiled and demoralized.</p>
                                    </div>
                                    <div className="btn-box">
                                        <Link href="#">
                                            Read More
                                            <i className="icon-right-arrow"></i>
                                        </Link>
                                    </div>
                                </div>
                            </li>
                            

                            <li className="single-history-style1 instyle2">
                                <div className="img-box">
                                    <Image src="/assets/images/resources/history-v1-img4.jpg" alt="History" width={370} height={295} priority />
                                </div>
                                <div className="year-box">
                                    <h3>2012</h3>
                                    <div className="border-line"></div>
                                </div>
                                <div className="content-box">
                                    <div className="title">
                                        <h6>Milestone</h6>
                                        <h3><Link href="#">1m Traders Trusted Us</Link></h3>
                                    </div>
                                    <div className="text">
                                        <p>Denounce with righteous indigation dislike men who are so beguiled and demoralized by
                                            pleasure of the moment.</p>
                                    </div>
                                    <div className="btn-box">
                                        <Link href="#">
                                            Read More
                                            <i className="icon-right-arrow"></i>
                                        </Link>
                                    </div>
                                </div>
                            </li>

                        </ul>
                    </div>
                </section>
            </Layout>
        </div>
    )
}
