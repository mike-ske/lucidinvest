"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Menu() {
  const pathname = usePathname();

  // Checks if a path is active
  const isActive = (path: string) => pathname === path;

  // Checks if a parent dropdown should be active
  const isDropdownActive = (paths: string[]) => paths.some((path) => pathname.startsWith(path));

  const toPortal = (path: "/login" | "/register") => {
    return `https://app.lucidglobalinvest.com${path}`;
  };

  const isCurrentOrPrefix = (paths: string[]) => {
    return paths.some((p) => pathname === p || pathname.startsWith(p));
  };

  return (
    <ul className="main-menu__list">
      {/* Home */}
      <li className={isActive("/") ? "current" : ""}>
        <Link href="/">Home</Link>
      </li>

      {/* Markets */}
      <li className={`dropdown ${isCurrentOrPrefix(["/markets", "/markets1-trade-forex", "/markets2-stock-market", "/markets3-commodities-market", "/markets4-crypto-market", "/markets5-futures-market", "/markets6-options-market"]) ? "current" : ""}`}>
        <Link href="#">Markets</Link>
        <ul className="megamenu clearfix">
          <li className={isCurrentOrPrefix(["/markets"]) ? "current" : ""}>
            <Link href="/markets">All Markets</Link>
          </li>
          <li className={isCurrentOrPrefix(["/markets1-trade-forex"]) ? "current" : ""}>
            <Link href="/markets1-trade-forex">Trade Forex</Link>
          </li>
          <li className={isCurrentOrPrefix(["/markets2-stock-market"]) ? "current" : ""}>
            <Link href="/markets2-stock-market">Stock Market</Link>
          </li>
          <li className={isCurrentOrPrefix(["/markets3-commodities-market"]) ? "current" : ""}>
            <Link href="/markets3-commodities-market">Commodities Market</Link>
          </li>
          <li className={isCurrentOrPrefix(["/markets4-crypto-market"]) ? "current" : ""}>
            <Link href="/markets4-crypto-market">Crypto Market</Link>
          </li>
          <li className={isCurrentOrPrefix(["/markets5-futures-market"]) ? "current" : ""}>
            <Link href="/markets5-futures-market">Futures Market</Link>
          </li>
          <li className={isCurrentOrPrefix(["/markets6-options-market"]) ? "current" : ""}>
            <Link href="/markets6-options-market">Options Market</Link>
          </li>
        </ul>
      </li>


      <li className={`dropdown ${isCurrentOrPrefix(["/courses", "/courses-details"]) ? "current" : ""}`}>
        <Link href="#">Education</Link>
        <ul className="megamenu clearfix">
          <li className={isCurrentOrPrefix(["/courses"]) ? "current" : ""}>
            <Link href="/courses">Courses</Link>
          </li>
          <li className={isCurrentOrPrefix(["/courses-details"]) ? "current" : ""}>
            <Link href="/courses-details">Course Details</Link>
          </li>
        </ul>
      </li>

      {/* About */}
      <li className={`dropdown ${isCurrentOrPrefix(["/about", "/history", "/team", "/testimonials", "/faq", "/coming-soon"]) ? "current" : ""}`}>
        <Link href="#">About</Link>
        <ul className="megamenu clearfix">
          <li className={isCurrentOrPrefix(["/about"]) ? "current" : ""}>
            <Link href="/about">About Us</Link>
          </li>
          <li className={isCurrentOrPrefix(["/history"]) ? "current" : ""}>
            <Link href="/history">History</Link>
          </li>
          <li className={isCurrentOrPrefix(["/team"]) ? "current" : ""}>
            <Link href="/team">Team Members</Link>
          </li>
          <li className={isCurrentOrPrefix(["/testimonials"]) ? "current" : ""}>
            <Link href="/testimonials">Testimonials</Link>
          </li>
          <li className={isCurrentOrPrefix(["/faq"]) ? "current" : ""}>
            <Link href="/faq">Faq&apos;s</Link>
          </li>
   
        </ul>
      </li>

      {/* Blog */}
      <li className={`dropdown ${isCurrentOrPrefix(["/blog-1", "/blog-2", "/blog-3", "/blog-4", "/blog-single"]) ? "current" : ""}`}>
        <Link href="#">Insights</Link>
        <ul className="megamenu clearfix">
          <li className={isCurrentOrPrefix(["/blog-1"]) ? "current" : ""}>
            <Link href="/blog-1">Market News</Link>
          </li>
          <li className={isCurrentOrPrefix(["/blog-2"]) ? "current" : ""}>
            <Link href="/blog-2">Trading Strategies</Link>
          </li>
          <li className={isCurrentOrPrefix(["/blog-3"]) ? "current" : ""}>
            <Link href="/blog-3">Investment Guides</Link>
          </li>
          <li className={isCurrentOrPrefix(["/blog-4"]) ? "current" : ""}>
            <Link href="/blog-4">Financial Education</Link>
          </li>
          <li className={isCurrentOrPrefix(["/blog-single"]) ? "current" : ""}>
            <Link href="/blog-single">Article Details</Link>
          </li>
        </ul>
      </li>

      {/* Contact */}
      <li>
        <Link href="/contact">Contact</Link>
      </li>
    </ul>
  );
}
