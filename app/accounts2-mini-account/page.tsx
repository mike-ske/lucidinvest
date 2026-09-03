
import Layout from "@/components/layout/Layout";
import Image from "next/image";
import Link from "next/link";

export default function Mini_Account() {

    return (
        <div className="body-bg-1">
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Mini Account" breadcrumbTitleTwo="Trading">
                <section className="account-detail-style1">
                    <div className="container">
                        <div className="row">

                            <div className="col-xl-4 col-lg-5">
                                <div className="account-detail-style1__sidebar">

                                    <div className="account-detail-style1__sidebar-single">
                                        <div className="title-box">
                                            <h3>Account Types</h3>
                                        </div>
                                        <div className="border-line"></div>
                                        <ul className="catagory">
                                            <li>
                                                <Link href="/accounts1-standard-account">
                                                    Standard Account
                                                    <i className="icon-right-arrow"></i>
                                                </Link>
                                            </li>
                                            <li className="active">
                                                <Link href="/accounts2-mini-account">
                                                    Mini Account
                                                    <i className="icon-right-arrow"></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/accounts3-stp-account">
                                                    STP Account
                                                    <i className="icon-right-arrow"></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/accounts4-demo-account">
                                                    Demo Account
                                                    <i className="icon-right-arrow"></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/accounts5-islamic-account">
                                                    Islamic Account
                                                    <i className="icon-right-arrow"></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/accounts6-corporate-account">
                                                    Corporate Account
                                                    <i className="icon-right-arrow"></i>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="account-detail-style1__sidebar-single">
                                        <div className="title-box">
                                            <h3>Download</h3>
                                        </div>
                                        <div className="border-line"></div>
                                        <ul className="download">
                                            <li>
                                                <div className="left-side">
                                                    <h4>
                                                        <Link href="#">
                                                            Trading Platform
                                                        </Link>
                                                    </h4>
                                                    <h6>pdf - 4.5 mb</h6>
                                                </div>
                                                <div className="right-side">
                                                    <div className="icon1">
                                                        <span className="icon-checked"><span className="path1"></span><span
                                                                className="path2"></span><span className="path3"></span><span
                                                                className="path4"></span><span className="path5"></span><span
                                                                className="path6"></span><span className="path7"></span><span
                                                                className="path8"></span><span className="path9"></span>
                                                        </span>
                                                    </div>
                                                    <div className="icon2">
                                                        <i className="icon-download"></i>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="left-side">
                                                    <h4>
                                                        <Link href="#">
                                                            Account Guide
                                                        </Link>
                                                    </h4>
                                                    <h6>pdf - 6.0 mb</h6>
                                                </div>
                                                <div className="right-side">
                                                    <div className="icon1">
                                                        <span className="icon-checked"><span className="path1"></span><span
                                                                className="path2"></span><span className="path3"></span><span
                                                                className="path4"></span><span className="path5"></span><span
                                                                className="path6"></span><span className="path7"></span><span
                                                                className="path8"></span><span className="path9"></span>
                                                        </span>
                                                    </div>
                                                    <div className="icon2">
                                                        <i className="icon-download"></i>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="account-detail-style1__sidebar-info">
                                        <div className="title-box">
                                            <h3>Contact Info</h3>
                                        </div>
                                        <div className="border-line"></div>
                                        <ul className="phn-email">
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-phone-vibration"><span className="path1"></span><span
                                                            className="path2"></span><span className="path3"></span><span
                                                            className="path4"></span><span className="path5"></span><span
                                                            className="path6"></span><span className="path7"></span><span
                                                            className="path8"></span><span className="path9"></span>
                                                    </span>
                                                </div>
                                                <div className="text">
                                                    <h4>Phone</h4>
                                                    <Link href="tel:+80098765432">+1 800.98.76.5432</Link>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon mt3">
                                                    <span className="icon-read"><span className="path1"></span><span
                                                            className="path2"></span><span className="path3"></span><span
                                                            className="path4"></span>
                                                    </span>
                                                </div>
                                                <div className="text">
                                                    <h4>Email</h4>
                                                    <Link href="mailto:sendyourmail@tradebro.com">sendyourmail@tradebro.com</Link>
                                                </div>
                                            </li>
                                        </ul>
                                        <div className="live-chat-box">
                                            <div className="live-chat-box__inner">
                                                <ul>
                                                    <li>
                                                        <div className="img">
                                                            <Image src="/assets/images/resources/account-detail-v1-img1.jpg" alt="Image" width={60} height={60} priority />
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="icon">
                                                            <i className="icon-comment"></i>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="link-box">
                                                <Link href="#">
                                                    Live Chat With Expert
                                                    <i className="icon-right-arrow"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>


                            <div className="col-xl-8 col-lg-7">
                                <div className="account-detail-style1__content">
                                    <div className="intro-box">
                                        <h2>Mini Account</h2>
                                        <p>Demoralized by the charms pleasure the moment blinded by desired that they cannot
                                            foresee that pain and trouble that are bound to ensue equal blame belongs to those
                                            who fail in their which is the same as saying through shrinking foresee the pain and
                                            trouble idea of denouncings master-builder of human happiness no one rejects
                                            dislikes or avoids.</p>
                                    </div>

                                    <div className="offers-box">
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-12 col-md-6">
                                                <div className="offers-box-img">
                                                    <Image src="/assets/images/resources/account-detail-v1-img2.jpg" alt="Image" width={350} height={375} priority />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-12 col-md-6">
                                                <div className="offers-box-text">
                                                    <div className="offers-box-text-benefits-box">
                                                        <div className="icon">
                                                            <span className="icon-checkmark-2"><span className="path1"></span><span
                                                                    className="path2"></span><span className="path3"></span>
                                                            </span>
                                                        </div>
                                                        <div className="title">
                                                            <h3>Benefits</h3>
                                                            <p>Trouble that are bound to ensue and equal blame desires to
                                                                obtain.</p>
                                                        </div>
                                                        <div className="list-item">
                                                            <ul>
                                                                <li>
                                                                    <p>Lower Spreads</p>
                                                                </li>
                                                                <li>
                                                                    <p>Access to Major Markets</p>
                                                                </li>
                                                                <li>
                                                                    <p>Full Market Access</p>
                                                                </li>
                                                                <li>
                                                                    <p>Educational Resources</p>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="offers-box-text-benefits-box offers-box-text-trading-technology">
                                                        <div className="icon">
                                                            <span className="icon-checkmark-2"><span className="path1"></span><span
                                                                    className="path2"></span><span className="path3"></span>
                                                            </span>
                                                        </div>
                                                        <div className="title">
                                                            <h3>Trading Technology</h3>
                                                            <p>
                                                                Holds in these matters to this principle of selection rejects.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="standard-account-info-box">
                                        <div className="title-box">
                                            <h3>Mini Account Info</h3>
                                            <p>Bound to ensue and equal blame belongs to those who fail in their,</p>
                                        </div>
                                        <div className="standard-account-info-box__inner">
                                            <div className="row">

                                                <div className="col-xl-6 col-lg-12 col-md-6">
                                                    <div className="single-standard-account-info-box">
                                                        <div className="left">
                                                            <div className="icon">
                                                                <span className="icon-right-arrow-2"><span
                                                                        className="path1"></span><span className="path2"></span>
                                                                </span>
                                                            </div>
                                                            <p>Initial Deposit</p>
                                                        </div>
                                                        <div className="right">
                                                            <p>$100</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-lg-12 col-md-6">
                                                    <div className="single-standard-account-info-box">
                                                        <div className="left">
                                                            <div className="icon">
                                                                <span className="icon-right-arrow-2"><span
                                                                        className="path1"></span><span className="path2"></span>
                                                                </span>
                                                            </div>
                                                            <p>Leverage</p>
                                                        </div>
                                                        <div className="right">
                                                            <p>Upto 1:3000</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-lg-12 col-md-6">
                                                    <div className="single-standard-account-info-box">
                                                        <div className="left">
                                                            <div className="icon">
                                                                <span className="icon-right-arrow-2"><span
                                                                        className="path1"></span><span className="path2"></span>
                                                                </span>
                                                            </div>
                                                            <p>Order Volume</p>
                                                        </div>
                                                        <div className="right">
                                                            <p>0.01 - 500 lots</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-lg-12 col-md-6">
                                                    <div className="single-standard-account-info-box">
                                                        <div className="left">
                                                            <div className="icon">
                                                                <span className="icon-right-arrow-2"><span
                                                                        className="path1"></span><span className="path2"></span>
                                                                </span>
                                                            </div>
                                                            <p>Spread</p>
                                                        </div>
                                                        <div className="right">
                                                            <p>Fixed from 3 pis</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-lg-12 col-md-6">
                                                    <div className="single-standard-account-info-box">
                                                        <div className="left">
                                                            <div className="icon">
                                                                <span className="icon-right-arrow-2"><span
                                                                        className="path1"></span><span className="path2"></span>
                                                                </span>
                                                            </div>
                                                            <p>24/7 Support</p>
                                                        </div>
                                                        <div className="right">
                                                            <p>Yes</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-lg-12 col-md-6">
                                                    <div className="single-standard-account-info-box">
                                                        <div className="left">
                                                            <div className="icon">
                                                                <span className="icon-right-arrow-2"><span
                                                                        className="path1"></span><span className="path2"></span>
                                                                </span>
                                                            </div>
                                                            <p>Multi Language CC</p>
                                                        </div>
                                                        <div className="right">
                                                            <p>Yes</p>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>


                                    <div className="why-choose-us">
                                        <div className="title-box">
                                            <h3>Why Choose Us</h3>
                                            <p>Denounce with righteous indignation and dislike men who are so beguiled, </p>
                                        </div>
                                        <div className="why-choose-us__inner">
                                            <div className="row">

                                                <div className="col-xl-6 col-lg-12 col-md-6">
                                                    <div className="single-why-choose-us">
                                                        <div className="icon-box">
                                                            <span className="icon-line-chart"><span className="path1"></span><span
                                                                    className="path2"></span><span className="path3"></span><span
                                                                    className="path4"></span><span className="path5"></span><span
                                                                    className="path6"></span><span className="path7"></span><span
                                                                    className="path8"></span><span className="path9"></span>
                                                            </span>
                                                        </div>
                                                        <div className="content-box">
                                                            <div className="title">
                                                                <h3>No Commissions</h3>
                                                            </div>
                                                            <div className="border-line"></div>
                                                            <div className="text">
                                                                <p>Foresee the pain & trouble that are bound to ensures all
                                                                    equal shrinking like best obligations.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-lg-12 col-md-6">
                                                    <div className="single-why-choose-us">
                                                        <div className="icon-box">
                                                            <span className="icon-statistics"><span className="path1"></span><span
                                                                    className="path2"></span><span className="path3"></span><span
                                                                    className="path4"></span>
                                                            </span>
                                                        </div>
                                                        <div className="content-box">
                                                            <div className="title">
                                                                <h3>Flexible Leverage</h3>
                                                            </div>
                                                            <div className="border-line"></div>
                                                            <div className="text">
                                                                <p>Frequently occur that pleasures have to be repudiated
                                                                    annoyances accepted perfectly repudiated.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-lg-12 col-md-6">
                                                    <div className="single-why-choose-us">
                                                        <div className="icon-box">
                                                            <span className="icon-deposit"><span className="path1"></span><span
                                                                    className="path2"></span><span className="path3"></span><span
                                                                    className="path4"></span><span className="path5"></span><span
                                                                    className="path6"></span><span className="path7"></span><span
                                                                    className="path8"></span><span className="path9"></span><span
                                                                    className="path10"></span>
                                                            </span>
                                                        </div>
                                                        <div className="content-box">
                                                            <div className="title">
                                                                <h3>Low Minimum Deposit</h3>
                                                            </div>
                                                            <div className="border-line"></div>
                                                            <div className="text">
                                                                <p>Obligation that business it will occurs pleasure to be
                                                                    repudiated business it will frequently.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-lg-12 col-md-6">
                                                    <div className="single-why-choose-us">
                                                        <div className="icon-box">
                                                            <span className="icon-chat"><span className="path1"></span><span
                                                                    className="path2"></span><span className="path3"></span><span
                                                                    className="path4"></span><span className="path5"></span><span
                                                                    className="path6"></span>
                                                            </span>
                                                        </div>
                                                        <div className="content-box">
                                                            <div className="title">
                                                                <h3>24/6 Support</h3>
                                                            </div>
                                                            <div className="border-line"></div>
                                                            <div className="text">
                                                                <p>Complete account of the system and expounds the actual
                                                                    teachings great explorer of the truth. </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
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
