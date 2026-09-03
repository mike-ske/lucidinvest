import Link from "next/link";
import Image from "next/image";

type SidebarPopupProps = {
  isOpen: boolean;
  onClose: () => void;
};

const SidebarPopup: React.FC<SidebarPopupProps> = ({ isOpen, onClose }) => {
  return (
    <div className={`xs-sidebar-group info-group info-sidebar ${isOpen ? "isActive" : ""}`}>
        <div className="xs-overlay xs-bg-black"></div>
        <div className="xs-sidebar-widget">
            <div className="sidebar-widget-container">
                <div className="widget-heading">
                    <Link href="#" className="close-side-widget" onClick={onClose}>X</Link>
                </div>
                <div className="sidebar-textwidget">
                    <div className="sidebar-info-contents">
                        <div className="content-inner">
                            <div className="logo">
                                <Link href="/">
<Image src="/assets/images/resources/lucid-global-invest-logo.png" alt="Lucid Global Invest Logo" width={142} height={71} priority />
                                </Link>
                            </div>
                            <div className="content-box">
                                <h3>Gateway to Global Markets</h3>
                                <div className="inner-text">
                                    <p>
                                        It is a long established fact that reader will be distracted by the readable
                                        content of a page when looking atlayout point of making here is that it has a
                                        more-or-less normal distribution all letters as opposed to using.
                                    </p>
                                </div>
                            </div>
                            <div className="sidebar-contact-info">
                                <h3>Conatct Us</h3>
                                <ul>
                                    <li>
                                        <div className="inner">
                                            <div className="text">
                                                <p>280/5 Granite Run Drive Suite, Houston - 90010.</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="inner">
                                            <div className="text">
                                                <p><Link href="tel:180098765432">+1 800.98.76.5432</Link></p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="inner">
                                            <div className="text">
                                                <p><Link href="mailto:sendmail@lucidglobalinvest.com">sendmail@lucidglobalinvest.com</Link></p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="inner">
                                            <div className="text">
                                                <p>Mon - Sat: 8.30am to 5.30pm</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className="side-content-newsletter-box">
                                <h3>Newsletter Subscription</h3>
                                <form action="index.html" method="post">
                                    <div className="form-group">
                                        <input type="email" name="email" placeholder="Enter Email Address" required />
                                        <button className="btn-one" type="submit">
                                            <span className="txt">
                                                subscribe now
                                                <i className="icon-right-arrow"></i>
                                            </span>
                                        </button>
                                    </div>
                                </form>
                            </div>

                            <div className="thm-social-link">
                                <ul className="clearfix">
                                    <li>
                                        <Link href="#">
                                            <i className="icon-facebook"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <i className="icon-twitter"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <i className="icon-social"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <i className="icon-youtube"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default SidebarPopup;
