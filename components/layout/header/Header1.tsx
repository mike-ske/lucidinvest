import Link from "next/link";
import Image from "next/image";
import MobileMenu from "../MobileMenu";
import Menu from "../Menu";
import Language from "../Language";

// ✅ Define props type
type Header1Props = {
  scroll: boolean;
  handleMobileMenu: () => void;
  handlePopup: () => void;
};

export default function Header1({ scroll, handleMobileMenu, handlePopup }: Header1Props) {
  return (
    <>
      {/* main header */}
      <header className={`main-header main-header-style1 ${scroll ? "fixed-header" : ""}`}>
        
        <div className="main-header-style1__content">
            <div className="container">
                <div className="main-header-style1__content-inner">
                    <div className="main-header-style1__content-top">
                        <div className="main-header-style1__content-top-left">
                            <div className="header-logo-box-style1">
                                <Link href="/">
<Image src="/assets/images/resources/lucid-global-invest-logo.png" alt="Lucid Global Invest Logo" width={142} height={71} priority />
                                </Link>
                            </div>
                        
                        </div>


                        <div className="main-header-style1__content-top-right">
                            <div className="header-login-register-style1">
                                <div className="icon">
                                    <span className="icon-lock"><span className="path1"></span><span
                                            className="path2"></span><span className="path3"></span><span
                                            className="path4"></span><span className="path5"></span><span
                                            className="path6"></span><span className="path7"></span><span
                                            className="path8"></span>
                                    </span>
                                </div>
                                <div className="title">
                                    <h3>My Portal</h3>
                                    <p><Link href="#">Login - or - Register</Link></p>
                                    <ul className="clearfix">
                                        <li>
                                            <div className="icon1">
                                                <Image src="/assets/images/icon/icon-login.png" alt="Icon" width={26} height={26} priority />
                                            </div>
                                            <div className="text1">
                                                <h4><Link href="https://app.lucidglobalinvest.com/login">Login</Link></h4>
                                                <p>Enter to Trade</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon1">
                                                <Image src="/assets/images/icon/icon-register.png" alt="Icon" width={26} height={26} priority />
                                            </div>
                                            <div className="text1">
                                                <h4><Link href="https://app.lucidglobalinvest.com/register">Register</Link></h4>
                                                <p>Start Your Journey</p>
                                            </div>
                                        </li>
                              
                                    </ul>
                                </div>
                            </div>


                        </div>

                    </div>

                    <div className="main-header-style1__content-bottom">
                        <div className="main-header-style1__content-bottom-left">


                            <nav className="main-menu main-menu-style1">
                                <div className="main-menu__wrapper clearfix">
                                    <div className="main-menu__wrapper-inner">
                                        <div className="sticky-logo-box-style1">
                                            <Link href="/">
                                                <Image src="/assets/images/resources/lucid-global-invest-logo.png" alt="Lucid Global Invest Logo" width={142} height={71} priority />
                                            </Link>
                                        </div>
                                        <div className="main-menu-style1__left">
                                            <div className="main-menu-box">
                                                <Link href="#" className="mobile-nav__toggler" onClick={handleMobileMenu}>
                                                    <i className="fa fa-bars"></i>
                                                </Link>

                                                <Menu/>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                            
                        </div>

                        <div className="main-header-style1__content-bottom-right">
                       
                            <div className="header-btn-box-style1">
                                <div className="icon">
                                    <i className="icon-candle"></i>
                                </div>
                                <div className="text">
                                    <Link href="https://app.lucidglobalinvest.com/login">
                                        Start <br />Trading
                                        <i className="icon-right-arrow"></i>
                                    </Link>
                                </div>
                            </div>
                            <div className="box-search-style1">
                                <Link href="#" className="search-toggler" onClick={handlePopup}>
                                    <span className="icon-search"></span>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        {/* sticky header */}
        <div className={`stricky-header stricky-header--style1 stricked-menu main-menu ${scroll ? "animated slideInDown" : ""}`}>
          <div className="sticky-header__content">
                <div className="main-menu__wrapper clearfix">
                    <div className="main-menu__wrapper-inner">
                        <div className="sticky-logo-box-style1">
                            <Link href="/">
                                <Image src="/assets/images/resources/lucid-global-invest-logo.png" alt="Lucid Global Invest Logo" width={142} height={71} priority />
                            </Link>
                        </div>
                        <div className="main-menu-style1__left">
                            <div className="main-menu-box">
                                <Link href="#" className="mobile-nav__toggler" onClick={handleMobileMenu}>
                                    <i className="fa fa-bars"></i>
                                </Link>

                                <Menu/>

                            </div>
                        </div>
                        
                    </div>

                </div>
            </div>
        </div>

        {/* ✅ Fixed MobileMenu props */}
        <MobileMenu
          isSidebar={false}
          handleMobileMenu={handleMobileMenu}
        />
      </header>
    </>
  );
}
