import Link from "next/link";
import Image from "next/image";
import MobileMenu from "../MobileMenu";
import Menu from "../Menu";

// ✅ Define props type
type Header3Props = {
  scroll: boolean;
  handleMobileMenu: () => void;
  handlePopup: () => void;
  handleSidebar: () => void;
};

export default function Header3({ scroll, handleMobileMenu, handlePopup, handleSidebar }: Header3Props) {
  return (
    <>
      {/* main header */}
      <header className={`main-header main-header-style3 ${scroll ? "fixed-header" : ""}`}>
        
            <div className="main-header-style3__content">
                <div className="container">
                    <div className="main-header-style3__content-inner">
                        <ul className="main-header-style3__content-top">
                            <li>
                                <div className="icon">
                                    <i className="icon-register"></i>
                                </div>
                                <div className="text">
                                    <p>
                                        Join Now,
                                        <Link href="#">
                                            Login - or - Register
                                            <i className="icon-right-arrow"></i>
                                        </Link>
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="icon">
                                    <i className="icon-profit"></i>
                                </div>
                                <div className="text">
                                    <p>
                                        Start Trading Journey,
                                        <Link href="#">
                                            Open an Account
                                            <i className="icon-right-arrow"></i>
                                        </Link>
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="icon">
                                    <i className="icon-costumer-service"></i>
                                </div>
                                <div className="text">
                                    <p>
                                        Find Support in,
                                        <Link href="#">
                                            Help Center
                                            <i className="icon-right-arrow"></i>
                                        </Link>
                                    </p>
                                </div>
                            </li>
                        </ul>

                        <div className="main-header-style3__content-bottom">
                            <div className="main-header-style3__content-bottom-shape">
                                <Image src="/assets/images/shapes/header-v3-shape1.png" alt="Shape" width={395} height={100} priority />
                            </div>
                            <div className="main-header-style3__content-bottom-left">
                                <div className="header-logo-box-style3">
                                    <Link href="/index-3">
                                        <Image src="/assets/images/resources/lucid-global-invest-logo.png" alt="Lucid Global Invest Logo" width={142} height={71} priority />
                                    </Link>
                                </div>
                            </div>

                            <div className="main-header-style3__content-bottom-middle">
                                
                                <nav className="main-menu main-menu-style3">
                                    <div className="main-menu__wrapper clearfix">
                                        <div className="main-menu__wrapper-inner">
                                                    <div className="sticky-logo-box-style1">
                                                <Link href="/index-3">
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


                            <div className="main-header-style3__content-bottom-right">
                                <div className="box-search-style3">
                                    <Link href="#" className="search-toggler" onClick={handlePopup}>
                                        <span className="icon-search"></span>
                                    </Link>
                                </div>
                                <div className="side-content-button-style1">
                                    <div className="title">
                                        <h4>Quick Access</h4>
                                    </div>
                                    <Link className="navSidebar-button" href="#" onClick={handleSidebar}>
                                        <span className="icon-menu"></span>
                                    </Link>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

        {/* sticky header */}
        <div className={`stricky-header stricky-header--style2 stricked-menu main-menu ${scroll ? "animated slideInDown" : ""}`}>
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
