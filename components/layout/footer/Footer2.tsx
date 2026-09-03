"use client";
import Image from "next/image";
import Link from "next/link"
import CustomSelect from "@/components/elements/CustomSelect";

export default function Footer2() {

    const options = [
        { value: "0", label: "Houston, Usa" },
        { value: "1", label: "California, Usa" },
        { value: "2", label: "New York, Usa" },
    ];

    const handleSelectChange = (value: string) => {
        console.log("Selected value:", value);
    };

    return (
        <>
        
            <footer className="footer-style2">
                <div className="footer-style2__border-box">
                    <div className="border-line1"></div>
                    <div className="border-line2"></div>
                    <div className="border-line3"></div>
                    <div className="border-line4"></div>
                </div>

                
                <div className="footer-main-style2">
                    <div className="container">

                        <div className="row">
                            
                            <div className="col-xl-6 col-lg-12 col-md-12 single-widget">
                                <div className="single-footer-widget-style2">
                                    <div className="footer-logo-style2">
                                        <Link href="/">
                                            <Image src="/assets/images/resources/lucid-global-invest-logo.png" alt="Lucid Global Invest Logo" width={142} height={71} priority />
                                        </Link>
                                    </div>
                                    <div className="single-footer-widget-style2__inner">
                                        <div className="row">
                                            <div className="col-xl-8 col-lg-6 col-md-6 single-widget--style1 wow fadeInUp"
                                                data-wow-duration="1200ms" data-wow-delay="000ms">
                                                <div className="single-footer-widget-contact-style2">
                                                    <div className="text-box">
                                                        <p>280/5, Granite Run Drive Suite, Houston - 90010.</p>
                                                    </div>
                                                    <div className="btn-box">
                                                        <Link
                                                            href="https://www.google.com/maps/dir//5850+San+Felipe+Street+%23500,+Houston,+Texas+77057/@29.7501786,-95.5654091,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x8640c3e6acc9f759:0x5529785ff6480564!2m2!1d-95.4830077!2d29.7502041?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D">
                                                            Find On Map
                                                            <i className="icon-right-arrow"></i>
                                                        </Link>
                                                    </div>
                                                    <div className="email-phn">
<p>
                                                            <Link href="mailto:sendyourmail@lucidglobalinvest.com">
                                                                support@lucidglobalinvest.com
                                                            </Link>
                                                        </p>
                                                        <p className="color">
                                                            <Link href="tel:180098765432">+1 800.98.76.5432</Link>
                                                        </p>
                                                    </div>
                                                    <div className="select-box clearfix">
                                                        <CustomSelect
                                                            options={options}
                                                            placeholder="Select Address"
                                                            onChange={handleSelectChange}
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInDown"
                                                data-wow-duration="1200ms" data-wow-delay="200ms">
                                                <ul className="single-footer-widget-social clearfix">
                                                    <li>
                                                        <Link href="https://web.whatsapp.com/">
                                                            <i className="icon-whatsapp-1"></i>
                                                            Whats App
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="https://www.facebook.com/">
                                                            <i className="icon-facebook"></i>
                                                            Facebook
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="https://www.linkedin.com/">
                                                            <i className="icon-linkedin"></i>
                                                            Linkedin
                                                        </Link>
                                                    </li>
                                             
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            

                            <div className="col-xl-3 col-lg-6 col-md-6 single-widget">
                                <div className="single-footer-widget-style2 pl36 wow fadeInDown" data-wow-duration="1500ms"
                                    data-wow-delay="300ms">
                                    <div className="title">
                                        <h3>Trading</h3>
                                    </div>
                                    <div className="footer-widget-links-style2">
                                        <ul className="clearfix">
                                            <li>
                                                <Link href="#">
                                                    <i className="icon-right-arrow"></i>
                                                    Forex Trading
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <i className="icon-right-arrow"></i>
                                                    Commodities
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <i className="icon-right-arrow"></i>
                                                    Indices
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <i className="icon-right-arrow"></i>
                                                    Stocks
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <i className="icon-right-arrow"></i>
                                                    Cryptocurrencies
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <i className="icon-right-arrow"></i>
                                                    ETFs
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <i className="icon-right-arrow"></i>
                                                    Futures
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <i className="icon-right-arrow"></i>
                                                    Bonds
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            

                            <div className="col-xl-3 col-lg-6 col-md-6 single-widget">
                                <div className="single-footer-widget-style2 pl29 wow fadeInUp" data-wow-duration="1500ms"
                                    data-wow-delay="400ms">
                                    <div className="title">
                                        <h3>Trading</h3>
                                    </div>
                                    <div className="footer-widget-links-style2">
                                        <ul className="clearfix">
                                            <li>
                                                <Link href="#">
                                                    <i className="icon-right-arrow"></i>
                                                    About Us
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <i className="icon-right-arrow"></i>
                                                    Leadership Team
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <i className="icon-right-arrow"></i>
                                                    Press & Media
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <i className="icon-right-arrow"></i>
                                                    Benefits
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <i className="icon-right-arrow"></i>
                                                    Recognition
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <i className="icon-right-arrow"></i>
                                                    Responsibility
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <i className="icon-right-arrow"></i>
                                                    Careers
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                

                <div className="footer-bottom-style2">
                    <div className="container">
                        <div className="bottom-inner-style2">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6">
                                    <div className="footer-bottom-style2__left">
                                        <div className="footer-menu-style2 wow fadeInRight" data-wow-duration="1500ms"
                                            data-wow-delay="000ms">
                                            <ul className="clearfix">
                                                <li>
                                                    <p><Link href="#">Privacy Policy</Link></p>
                                                </li>
                                                <li>
                                                    <p><Link href="#">Terms of Service</Link></p>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="copyright-text-style2 wow fadeInLeft" data-wow-duration="1500ms"
                                            data-wow-delay="000ms">
                                            <p>
Copyrights © {new Date().getFullYear()} <Link href="/">Lucid Global Invest. </Link> All rights reserved.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-3 col-lg-3">
                                    <div className="footer-bottom-style2__rating">
                                        <div className="point">
                                            <h4>4.9</h4>
                                        </div>
                                        <div className="text">
                                            <ul className="clearfix">
                                                <li>
                                                    <i className="icon-star"></i>
                                                </li>
                                                <li>
                                                    <i className="icon-star"></i>
                                                </li>
                                                <li>
                                                    <i className="icon-star"></i>
                                                </li>
                                                <li>
                                                    <i className="icon-star"></i>
                                                </li>
                                                <li>
                                                    <i className="icon-star"></i>
                                                </li>
                                            </ul>
                                            <p>From 2.8k Traders</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-3 col-lg-3">
                                    <div className="footer-bottom-style2__cretified">
                                        <div className="img">
                                            <Image src="/assets/images/footer/footer-v2-cretified1.png" alt="Logo" width={42} height={42} priority />
                                        </div>
                                        <div className="text">
                                            <p>Cretified Broker for Traders.</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </footer>

        </>
    )
}
