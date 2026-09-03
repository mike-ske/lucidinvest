import Link from "next/link";
import Image from "next/image";
import MobileMenu from "../MobileMenu";
import Menu from "../Menu";
import Language from "../Language";

// ✅ Define props type
type Header2Props = {
  scroll: boolean;
  handleMobileMenu: () => void;
  handlePopup: () => void;
};

export default function Header2({ scroll, handleMobileMenu, handlePopup }: Header2Props) {
  return (
    <>
      {/* main header */}
      <header className={`main-header main-header-style2 ${scroll ? "fixed-header" : ""}`}>
        <div className="main-header-style2__content">
          <div className="container">
            <div className="main-header-style2__content-inner">
              {/* Removed upper navbar block (Help / Market News / Platform / Calculator / Lan) */}

              <div className="main-header-style2__content-bottom">
                <div className="main-header-style2__content-bottom-left">
                  <div className="header-logo-box-style2">
                    <Link href="/">
<Image
                        src="/assets/images/resources/lucid-global-invest-logo.png"
                        alt="Lucid Global Invest Logo"
                        width={142}
                        height={71}
                        priority
                      />
                    </Link>
                  </div>

                  <nav className="main-menu main-menu-style2">
                    <div className="main-menu__wrapper clearfix">
                      <div className="main-menu__wrapper-inner">
                        <div className="sticky-logo-box-style1">
                          <Link href="/">
                            <Image
                              src="/assets/images/resources/lucid-global-invest-logo.png"
                              alt="Lucid Global Invest Logo"
                              width={142}
                              height={71}
                              priority
                            />
                          </Link>
                        </div>
                        <div className="main-menu-style1__left">
                          <div className="main-menu-box">
                            <Link
                              href="#"
                              className="mobile-nav__toggler"
                              onClick={handleMobileMenu}
                            >
                              <i className="fa fa-bars"></i>
                            </Link>

                            <Menu />
                          </div>
                        </div>
                      </div>
                    </div>
                  </nav>
                </div>

                <div className="main-header-style2__content-bottom-right">
                
                  <div className="header-btn-box-style2">
                    <Link className="btn-one" href="https://app.lucidglobalinvest.com/login">
                      <span className="txt">Login</span>
                      <i className="icon-right-arrow"></i>
                    </Link>
                  </div>
                  <div className="box-search-style2">
                    <Link
                      href="#"
                      className="search-toggler"
                      onClick={handlePopup}
                    >
                      <span className="icon-search"></span>
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
