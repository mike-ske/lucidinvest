
import ContactForm from "@/components/elements/ContactForm";
import Layout from "@/components/layout/Layout";
import Link from "next/link";


export default function Courses_Page() {

    return (
        <div className="body-bg-1">
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Contact Us">
                <section className="quick-contact-style1">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4 col-lg-5">
                                <div className="quick-contact-style1__content">
                                    <div className="sec-title withtext">
                                        <div className="sub-title">
                                            <h4>Contact</h4>
                                        </div>
                                        <h2>Let&apos;s Talk, Experts Ready Help You</h2>
                                        <div className="text">
                                            <p>Get the professional guidance and support you need from our experts.</p>
                                        </div>
                                    </div>
                                    <div className="social-link">
                                        <h4>Get Social</h4>
                                        <ul>
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
                                                <Link href="https://www.instagram.com/">
                                                    <i className="icon-social"></i>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                         
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-7">
                                <div className="quick-contact-style1__inner">

                                    <div className="single-quick-contact-style1">
                                        <div className="icon">
                                            <span className="icon-telephone"><span className="path1"></span><span
                                                    className="path2"></span><span className="path3"></span><span
                                                    className="path4"></span><span className="path5"></span><span
                                                    className="path6"></span><span className="path7"></span>
                                            </span>
                                        </div>
                                        <div className="title">
                                            <h3>Request Call Back</h3>
                                            <p>Share your ph num, we will back.</p>
                                        </div>
                                        <form id="quick-contact-form" name="quick-contact_form" className="default-form1"
                                            action="#" method="post">
                                            <div className="form-group">
                                                <div className="input-box">
                                                    <input type="text" name="form_phone" id="formPhonee"
                                                        placeholder="Enter ph num" />
                                                </div>
                                            </div>
                                            <button type="submit" data-loading-text="Please wait...">
                                                <i className="icon-right-arrow"></i>
                                            </button>
                                        </form>
                                    </div>
                                    <div className="single-quick-contact-style1">
                                        <div className="icon">
                                            <span className="icon-chat-1"><span className="path1"></span><span
                                                    className="path2"></span><span className="path3"></span><span className="path4"></span>
                                            </span>
                                        </div>
                                        <div className="title">
                                            <h3>Live Chat</h3>
                                            <p>Chat live with our forex specialist.
                                            </p>
                                        </div>
                                        <div className="btn-box">
                                            <Link className="btn-one" href="#">
                                                <span className="txt">Start Chat</span>
                                                <i className="icon-right-arrow"></i>
                                            </Link>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6">
                                <div className="quick-contact-style1-info">
                                    <div className="inner-title">
                                        <h3>Contact Info</h3>
                                    </div>
                                    <div className="list-item">
                                        <ul>
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-map"><span className="path1"></span><span
                                                            className="path2"></span><span className="path3"></span><span
                                                            className="path4"></span><span className="path5"></span><span
                                                            className="path6"></span>
                                                    </span>
                                                </div>
                                                <div className="text">
                                                    <h4>United States</h4>
                                                    <p>280/5 Granite Run Drive Suite, Houston - 90010.</p>
                                                </div>
                                            </li>
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
                                                    <p><Link href="tel:180098765432">+1 800.98.76.5432</Link></p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-read"><span className="path1"></span><span
                                                            className="path2"></span><span className="path3"></span><span
                                                            className="path4"></span>
                                                    </span>
                                                </div>
                                                <div className="text">
                                                    <h4>Email</h4>
                                                    <p><Link href="mailto:support@lucidglobalinvest.com">support@lucidglobalinvest.com</Link></p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-alarm-clock"><span className="path1"></span><span
                                                            className="path2"></span><span className="path3"></span><span
                                                            className="path4"></span><span className="path5"></span><span
                                                            className="path6"></span><span className="path7"></span><span
                                                            className="path8"></span><span className="path9"></span>
                                                    </span>
                                                </div>
                                                <div className="text">
                                                    <h4>Office Hours</h4>
                                                    <p>Mon - Sat: 8.30am to 5.30pm</p>
                                                </div>
                                            </li>
                                        </ul>
                                        <div className="btn-box">
                                            <Link className="btn-one"
                                                href="https://www.google.com/maps/search/280%2F5++Granite+Run+Drive+Suite,+%0D%0AHouston+-+90010./@29.8155408,-96.0607242,9z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI0MTEwNS4wIKXMDSoASAFQAw%3D%3D">
                                                <span className="txt">View On Map</span>
                                                <i className="icon-right-arrow"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="main-contact-form">
                    <div className="container">
                        <div className="sec-title text-center">
                            <div className="sub-title">
                                <h4>Send Message</h4>
                            </div>
                            <h2>Send Us a Message Anytime</h2>
                        </div>
                        <div className="row">
                            
                            <div className="col-xl-12">
                                <div className="contact-form">
                                    <ContactForm/>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </div>
    )
}
