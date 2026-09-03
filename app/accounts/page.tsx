
import Layout from "@/components/layout/Layout";
import Work from "@/components/sections/home1/Work";
import Choose from "@/components/sections/home3/Choose";
import Image from "next/image";
import Link from "next/link";

export default function Accounts_Page() {

    return (
        <div className="body-bg-1">
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Our Accounts" breadcrumbTitleTwo="Trading">
                <section className="account-style1 account-style1--style1">
                    <div className="container">
                        <div className="account-style1__top">
                            <div className="sec-title sec-title1">
                                <div className="sub-title">
                                    <h4>Account Types</h4>
                                </div>
                                <h2>Explore Our Account Options</h2>
                            </div>
                            <div className="right-box">
                                <ul>
                                    <li>
                                        <div className="img">
                                            <Image src="/assets/images/resources/account-v1-top1.jpg" alt="Image" width={60} height={60} priority />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className="icon-call"></i>
                                        </div>
                                    </li>
                                </ul>
                                <div className="text">
                                    <p><span>Not Sure?</span><br />Guide You to the Right Choice!</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">

                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="single-account-style1">
                                    <div className="content-box">
                                        <h3><Link href="/accounts1-standard-account">Standard Account</Link></h3>
                                        <p>Mistaken idea denouncing pleasure of us ever undertakes secure...</p>
                                    </div>
                                    <div className="img-box">
                                        <div className="inner">
                                            <Image src="/assets/images/resources/account-v1-1.jpg" alt="Image" width={370} height={240} priority />
                                        </div>
                                        <div className="overlay-icon">
                                            <span className="icon-crown"><span className="path1"></span><span className="path2"></span><span
                                                    className="path3"></span><span className="path4"></span><span
                                                    className="path5"></span><span className="path6"></span><span
                                                    className="path7"></span><span className="path8"></span><span
                                                    className="path9"></span><span className="path10"></span></span>
                                        </div>
                                    </div>
                                    <div className="bottom-box">
                                        <Link href="/accounts1-standard-account">
                                            Read More
                                            <i className="icon-right-arrow"></i>
                                        </Link>
                                        <p>#01</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="single-account-style1">
                                    <div className="content-box">
                                        <h3><Link href="/accounts2-mini-account">Mini Account</Link></h3>
                                        <p>Cases are perfectly simple and easy to distinguish in a free hour...</p>
                                    </div>
                                    <div className="img-box">
                                        <div className="inner">
                                            <Image src="/assets/images/resources/account-v1-2.jpg" alt="Image" width={370} height={240} priority />
                                        </div>
                                        <div className="overlay-icon">
                                            <span className="icon-star-1"><span className="path1"></span><span
                                                    className="path2"></span><span className="path3"></span><span
                                                    className="path4"></span><span className="path5"></span></span>
                                        </div>
                                    </div>
                                    <div className="bottom-box">
                                        <Link href="/accounts2-mini-account">
                                            Read More
                                            <i className="icon-right-arrow"></i>
                                        </Link>
                                        <p>#02</p>
                                    </div>
                                </div>
                            </div>
                            

                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="single-account-style1">
                                    <div className="content-box">
                                        <h3><Link href="/accounts3-stp-account">STP Account</Link></h3>
                                        <p>Holds in these matters to this principle of selection rejects pleasures...
                                        </p>
                                    </div>
                                    <div className="img-box">
                                        <div className="inner">
                                            <Image src="/assets/images/resources/account-v1-3.jpg" alt="Image" width={370} height={240} priority />
                                        </div>
                                        <div className="overlay-icon">
                                            <span className="icon-protection"><span className="path1"></span><span
                                                    className="path2"></span><span className="path3"></span><span
                                                    className="path4"></span></span>
                                        </div>
                                    </div>
                                    <div className="bottom-box">
                                        <Link href="/accounts3-stp-account">
                                            Read More
                                            <i className="icon-right-arrow"></i>
                                        </Link>
                                        <p>#03</p>
                                    </div>
                                </div>
                            </div>
                            

                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="single-account-style1">
                                    <div className="content-box">
                                        <h3><Link href="/accounts4-demo-account">Demo Account</Link></h3>
                                        <p>
                                            Holds in these matters to this principle of selection rejects pleasures...
                                        </p>
                                    </div>
                                    <div className="img-box">
                                        <div className="inner">
                                            <Image src="/assets/images/resources/account-v1-4.jpg" alt="Image" width={370} height={240} priority />
                                        </div>
                                        <div className="overlay-icon">
                                            <span className="icon-desktop-computer"><span className="path1"></span><span
                                                    className="path2"></span><span className="path3"></span><span
                                                    className="path4"></span><span className="path5"></span><span
                                                    className="path6"></span><span className="path7"></span><span
                                                    className="path8"></span><span className="path9"></span><span
                                                    className="path10"></span><span className="path11"></span><span
                                                    className="path12"></span><span className="path13"></span><span
                                                    className="path14"></span><span className="path15"></span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="bottom-box">
                                        <Link href="/accounts4-demo-account">
                                            Read More
                                            <i className="icon-right-arrow"></i>
                                        </Link>
                                        <p>#04</p>
                                    </div>
                                </div>
                            </div>
                            

                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="single-account-style1">
                                    <div className="content-box">
                                        <h3><Link href="/accounts5-islamic-account">Islamic Account</Link></h3>
                                        <p>Mistaken idea denouncing pleasure of us ever undertakes secure...</p>
                                    </div>
                                    <div className="img-box">
                                        <div className="inner">
                                            <Image src="/assets/images/resources/account-v1-1.jpg" alt="Image" width={370} height={240} priority />
                                        </div>
                                        <div className="overlay-icon">
                                            <span className="icon-idea"><span className="path1"></span><span className="path2"></span><span
                                                    className="path3"></span><span className="path4"></span><span
                                                    className="path5"></span><span className="path6"></span><span
                                                    className="path7"></span><span className="path8"></span><span
                                                    className="path9"></span><span className="path10"></span><span
                                                    className="path11"></span><span className="path12"></span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="bottom-box">
                                        <Link href="/accounts5-islamic-account">
                                            Read More
                                            <i className="icon-right-arrow"></i>
                                        </Link>
                                        <p>#05</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="single-account-style1">
                                    <div className="content-box">
                                        <h3><Link href="/accounts6-corporate-account">Corporate Account</Link></h3>
                                        <p>Cases are perfectly simple and easy to distinguish in a free hour...</p>
                                    </div>
                                    <div className="img-box">
                                        <div className="inner">
                                            <Image src="/assets/images/resources/account-v1-6.jpg" alt="Image" width={370} height={240} priority />
                                        </div>
                                        <div className="overlay-icon">
                                            <span className="icon-relations"><span className="path1"></span><span
                                                    className="path2"></span><span className="path3"></span><span
                                                    className="path4"></span><span className="path5"></span><span
                                                    className="path6"></span><span className="path7"></span><span
                                                    className="path8"></span><span className="path9"></span><span
                                                    className="path10"></span><span className="path11"></span><span
                                                    className="path12"></span><span className="path13"></span><span
                                                    className="path14"></span><span className="path15"></span><span
                                                    className="path16"></span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="bottom-box">
                                        <Link href="/accounts6-corporate-account">
                                            Read More
                                            <i className="icon-right-arrow"></i>
                                        </Link>
                                        <p>#06</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                
                <section className="account-style2 account-style2--style1">
                    <div className="account-style2--style1__bgleft"></div>
                    <div className="container">
                        <div className="sec-title text-center">
                            <div className="sub-title">
                                <h4>Account Types</h4>
                            </div>
                            <h2>Explore Our Account Options</h2>
                        </div>
                        <div className="row">
                            
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="single-account-style2 single-account-style2--style1">
                                <div className="value-box">
                                    <h3>Standard a/c</h3>
                                    <p>Ideal for traders with low spreads.</p>
                                </div>
                                <div className="price-box">
                                    <div className="left">
                                        <div className="title">
                                            <h2>$100</h2>
                                        </div>
                                        <div className="text">
                                            <p>Min. <br />Deposit </p>
                                        </div>
                                    </div>
                                    <div className="icon">
                                        <span className="icon-star-2"><span className="path1"></span><span className="path2"></span>
                                        </span>
                                    </div>
                                </div>
                                <ul className="list-box clearfix">
                                    <li>
                                        <p className="color">Leverage</p>
                                        <p>Up to 1:3000</p>
                                    </li>
                                    <li className="bg">
                                        <p className="color">Order Volume</p>
                                        <p>0.01 - 500 lots</p>
                                    </li>
                                    <li>
                                        <p className="color">Spread</p>
                                        <p>Fixed from 3 pips</p>
                                    </li>
                                    <li className="bg">
                                        <p className="color">Commission</p>
                                        <p>Free</p>
                                    </li>
                                    <li>
                                        <p className="color">Platform</p>
                                        <p>mt4/mt5</p>
                                    </li>
                                </ul>
                                <div className="btn-box">
                                    <Link href="#" className="btn-one">
                                        <span className="txt">
                                            Open Account
                                            <i className="icon-right-arrow"></i>
                                        </span>
                                    </Link>
                                    <Link href="#" className="btn-one2">
                                        More Info
                                    </Link>
                                </div>
                            </div>
                        </div>
                        

                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="single-account-style2 single-account-style2--style1">
                                <div className="value-box">
                                    <h3>Commission a/c</h3>
                                    <p>Access to the interbank market.</p>
                                </div>
                                <div className="price-box">
                                    <div className="left">
                                        <div className="title">
                                            <h2>$500</h2>
                                        </div>
                                        <div className="text">
                                            <p>Min. <br />Deposit </p>
                                        </div>
                                    </div>
                                    <div className="icon">
                                        <span className="icon-star-3"><span className="path1"></span><span
                                                className="path2"></span><span className="path3"></span><span
                                                className="path4"></span><span className="path5"></span><span
                                                className="path6"></span><span className="path7"></span>
                                        </span>
                                    </div>
                                </div>
                                <ul className="list-box clearfix">
                                    <li>
                                        <p className="color">Leverage</p>
                                        <p>Up to 1:3000</p>
                                    </li>
                                    <li className="bg">
                                        <p className="color">Order Volume</p>
                                        <p>0.01 - 500 lots</p>
                                    </li>
                                    <li>
                                        <p className="color">Spread</p>
                                        <p>Fixed from 3 pips</p>
                                    </li>
                                    <li className="bg">
                                        <p className="color">Commission</p>
                                        <p>Free</p>
                                    </li>
                                    <li>
                                        <p className="color">Platform</p>
                                        <p>mt4/mt5</p>
                                    </li>
                                </ul>
                                <div className="btn-box">
                                    <Link href="#" className="btn-one">
                                        <span className="txt">
                                            Open Account
                                            <i className="icon-right-arrow"></i>
                                        </span>
                                    </Link>
                                    <Link href="#" className="btn-one2">
                                        More Info
                                    </Link>
                                </div>
                            </div>
                        </div>
                        

                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="single-account-style2 single-account-style2--style1">
                                <div className="value-box">
                                    <h3>STP Pro a/c</h3>
                                    <p>Ideal for high-net-worth individuals.</p>
                                </div>
                                <div className="price-box">
                                    <div className="left">
                                        <div className="title">
                                            <h2>$10k</h2>
                                        </div>
                                        <div className="text">
                                            <p>Min. <br />Deposit </p>
                                        </div>
                                    </div>
                                    <div className="icon">
                                        <span className="icon-star-4"><span className="path1"></span><span
                                                className="path2"></span><span className="path3"></span><span
                                                className="path4"></span><span className="path5"></span><span
                                                className="path6"></span><span className="path7"></span>
                                        </span>
                                    </div>
                                </div>
                                <ul className="list-box clearfix">
                                    <li>
                                        <p className="color">Leverage</p>
                                        <p>Up to 1:3000</p>
                                    </li>
                                    <li className="bg">
                                        <p className="color">Order Volume</p>
                                        <p>0.01 - 500 lots</p>
                                    </li>
                                    <li>
                                        <p className="color">Spread</p>
                                        <p>Fixed from 3 pips</p>
                                    </li>
                                    <li className="bg">
                                        <p className="color">Commission</p>
                                        <p>Free</p>
                                    </li>
                                    <li>
                                        <p className="color">Platform</p>
                                        <p>mt4/mt5</p>
                                    </li>
                                </ul>
                                <div className="btn-box">
                                    <Link href="#" className="btn-one">
                                        <span className="txt">
                                            Open Account
                                            <i className="icon-right-arrow"></i>
                                        </span>
                                    </Link>
                                    <Link href="#" className="btn-one2">
                                        More Info
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                </section>
                <Work/>
                <Choose/>
            </Layout>
        </div>
    )
}
