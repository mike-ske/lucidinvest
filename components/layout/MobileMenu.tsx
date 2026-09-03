
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

type MobileMenuProps = {
  isSidebar: boolean;
  handleMobileMenu: () => void;
};

export default function MobileMenu({ handleMobileMenu }: MobileMenuProps) {
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const pathname = usePathname();

    // Checks if a path is active
  const isActive = (path: string) => pathname === path;

  const toggleDropdown = (key: number) => {
    if (activeDropdown === key) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(key);
    }
  };

  return (
    <>
      {/* Mobile Menu */}
      <div className="mobile-nav__wrapper">
        <div className="mobile-nav__overlay mobile-nav__toggler" onClick={handleMobileMenu}></div>
        <div className="mobile-nav__content">
          <span className="mobile-nav__close mobile-nav__toggler" onClick={handleMobileMenu}>
            <i className="fa fa-times-circle"></i>
          </span>

          <div className="logo-box">
              <Link href="/" aria-label="logo image">
<Image src="/assets/images/resources/lucid-global-invest-logo.png" alt="Lucid Global Invest Logo" width={142} height={71} priority />
              </Link>
          </div>

          <div className="mobile-nav-search-box">
              <form className="search-form" action="#">
                  <input placeholder="Keyword" type="text" />
                  <button type="submit">
                      <i className="fa fa-search"></i>
                  </button>
              </form>
          </div>

          <div className="mobile-nav__container">
            <ul className="main-menu__list">

              {/* Home */}
              <li className={isActive("/") ? "current" : ""}>
                <Link href="/" onClick={handleMobileMenu}>
                  Home
                </Link>
              </li>

              {/* Markets */}
              <li className={`dropdown ${activeDropdown === 2 ? "current" : ""}`}>
                <Link href="#">Markets</Link>
                <ul style={{ display: activeDropdown === 2 ? "block" : "none" }}>
                  <li><Link href="/markets" onClick={handleMobileMenu}>All Markets</Link></li>
                  <li><Link href="/markets1-trade-forex" onClick={handleMobileMenu}>Trade Forex</Link></li>
                  <li><Link href="/markets2-stock-market" onClick={handleMobileMenu}>Stock Market</Link></li>
                  <li><Link href="/markets3-commodities-market" onClick={handleMobileMenu}>Commodities Market</Link></li>
                  <li><Link href="/markets4-crypto-market" onClick={handleMobileMenu}>Crypto Market</Link></li>
                  <li><Link href="/markets5-futures-market" onClick={handleMobileMenu}>Futures Market</Link></li>
                  <li><Link href="/markets6-options-market" onClick={handleMobileMenu}>Options Market</Link></li>
                </ul>
                <div className={`dropdown-btn ${activeDropdown === 2 ? "open" : ""}`} onClick={() => toggleDropdown(2)}>
                  <span className="fa fa-angle-right" />
                </div>
              </li>

              {/* Trading */}
              <li className={`dropdown ${activeDropdown === 3 ? "current" : ""}`}>
                <Link href="#">Trading</Link>
                <ul style={{ display: activeDropdown === 3 ? "block" : "none" }}>
                  <li><Link href="/accounts" onClick={handleMobileMenu}>All Accounts</Link></li>
                  <li><Link href="/platform" onClick={handleMobileMenu}>Platform</Link></li>
                  <li><Link href="/accounts1-standard-account" onClick={handleMobileMenu}>Standard Account</Link></li>
                  <li><Link href="/accounts2-mini-account" onClick={handleMobileMenu}>Mini Account</Link></li>
                  <li><Link href="/accounts3-stp-account" onClick={handleMobileMenu}>STP Account</Link></li>
                  <li><Link href="/accounts4-demo-account" onClick={handleMobileMenu}>Demo Account</Link></li>
                  <li><Link href="/accounts5-islamic-account" onClick={handleMobileMenu}>Islamic Account</Link></li>
                  <li><Link href="/accounts6-corporate-account" onClick={handleMobileMenu}>Corporate Account</Link></li>
                </ul>
                <div className={`dropdown-btn ${activeDropdown === 3 ? "open" : ""}`} onClick={() => toggleDropdown(3)}>
                  <span className="fa fa-angle-right" />
                </div>
              </li>

              {/* Education */}
              <li className={`dropdown ${activeDropdown === 4 ? "current" : ""}`}>
                <Link href="#">Education</Link>
                <ul style={{ display: activeDropdown === 4 ? "block" : "none" }}>
                  <li><Link href="/courses" onClick={handleMobileMenu}>Courses</Link></li>
                  <li><Link href="/courses-details" onClick={handleMobileMenu}>Course Details</Link></li>
                </ul>
                <div className={`dropdown-btn ${activeDropdown === 4 ? "open" : ""}`} onClick={() => toggleDropdown(4)}>
                  <span className="fa fa-angle-right" />
                </div>
              </li>

              {/* About */}
              <li className={`dropdown ${activeDropdown === 5 ? "current" : ""}`}>
                <Link href="#">About</Link>
                <ul style={{ display: activeDropdown === 5 ? "block" : "none" }}>
                  <li><Link href="/about" onClick={handleMobileMenu}>About Us</Link></li>
                  <li><Link href="/history" onClick={handleMobileMenu}>History</Link></li>
                  <li><Link href="/team" onClick={handleMobileMenu}>Team Members</Link></li>
                  <li><Link href="/testimonials" onClick={handleMobileMenu}>Testimonials</Link></li>
                  <li><Link href="/faq" onClick={handleMobileMenu}>Faq&apos;s</Link></li>
                </ul>
                <div className={`dropdown-btn ${activeDropdown === 5 ? "open" : ""}`} onClick={() => toggleDropdown(5)}>
                  <span className="fa fa-angle-right" />
                </div>
              </li>

                {/* Blog */}
                <li className={`dropdown ${activeDropdown === 6 ? "current" : ""}`}>
                  <Link href="#">Insights</Link>
                  <ul style={{ display: activeDropdown === 6 ? "block" : "none" }}>
                    <li>
                      <Link href="/blog-1" onClick={handleMobileMenu}>
                        Market News
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog-2" onClick={handleMobileMenu}>
                        Trading Strategies
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog-3" onClick={handleMobileMenu}>
                        Investment Guides
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog-4" onClick={handleMobileMenu}>
                        Financial Education
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog-single" onClick={handleMobileMenu}>
                        Article Details
                      </Link>
                    </li>
                  </ul>

                  <div
                    className={`dropdown-btn ${activeDropdown === 6 ? "open" : ""}`}
                    onClick={() => toggleDropdown(6)}
                  >
                    <span className="fa fa-angle-right" />
                  </div>
                </li>

              {/* Contact */}
              <li><Link href="/contact">Contact</Link></li>

            </ul>
          </div>

          <ul className="mobile-nav__contact list-unstyled">
              <li>
                  <i className="fa fa-envelope"></i>
                  <Link href="mailto:info@example.com">info@example.com</Link>
              </li>
              <li>
                  <i className="fa fa-phone-alt"></i>
                  <a href="tel:123456789">444 000 777 66</a>
              </li>
          </ul>
          <div className="mobile-nav__social">
              <Link href="#" className="fab fa-twitter"></Link>
              <Link href="#" className="fab fa-facebook-square"></Link>
              <Link href="#" className="fab fa-pinterest-p"></Link>
              <Link href="#" className="fab fa-instagram"></Link>
          </div>
        </div>

      </div>

      {/* Overlay */}
      <div
        className="nav-overlay"
      />
    </>
  );
}
