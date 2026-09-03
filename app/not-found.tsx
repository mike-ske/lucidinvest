import FullHeightWrapper from "@/components/elements/FullHeightWrapper";
import MarqueeWrapper from "@/components/elements/Marquee";
import Image from "next/image";
import Link from "next/link"
export default function error() {

    return (
        <div className="body-bg-2">
            <div className="page-wrapper boxed_wrapper">
                <FullHeightWrapper className="error-page full-height">
                    <div className="error-page__shape1">
                        <Image src="/assets/images/shapes/404-shape1.png" alt="Shape" width={453} height={529} priority />
                    </div>
                    <div className="error-page__shape2">
                        <Image src="/assets/images/shapes/404-shape2.png" alt="Shape" width={478} height={712} priority />
                    </div>
                    <div className="error-page__scrolling">
                        <div className="inner">
                            <MarqueeWrapper direction="left" speed={60} className="marquee_mode-rightToLeft">
                                <li>
                                    Page Not Found
                                </li>
                                <li>
                                    Page Not Found
                                </li>
                                <li>
                                    Page Not Found
                                </li>
                                <li>
                                    Page Not Found
                                </li>
                                <li>
                                    Page Not Found
                                </li>
                                <li>
                                    Page Not Found
                                </li>
                                <li>
                                    Page Not Found
                                </li>
                                <li>
                                    Page Not Found
                                </li>
                            </MarqueeWrapper>
                        </div>
                    </div>

                    <div className="error-page__scrolling error-page__scrolling2">
                        <div className="inner">
                            <MarqueeWrapper direction="right" speed={60} className="marquee_mode">
                                <li>
                                    Page Not Found
                                </li>
                                <li>
                                    Page Not Found
                                </li>
                                <li>
                                    Page Not Found
                                </li>
                                <li>
                                    Page Not Found
                                </li>
                                <li>
                                    Page Not Found
                                </li>
                                <li>
                                    Page Not Found
                                </li>
                                <li>
                                    Page Not Found
                                </li>
                                <li>
                                    Page Not Found
                                </li>
                            </MarqueeWrapper>
                        </div>
                    </div>


                    <div className="big-title">404</div>
                    <div className="error-page-content-box text-center">
                        <div className="error-page-img1">
                            <Image src="/assets/images/resources/404-img1.png" alt="Image" width={140} height={114} priority />
                        </div>
                        <div className="icon-box">
                            <span className="icon-error"><span className="path1"></span><span className="path2"></span><span
                                    className="path3"></span><span className="path4"></span>
                            </span>
                        </div>
                        <div className="title">
                            <h2>Page Not Found</h2>
                        </div>
                        <div className="text">
                            <p>Try refining your search or use the navigation below to <br />return to the main home page.</p>
                        </div>
                        <div className="btn-box">
                            <Link className="btn-one" href="/">
                                <span className="txt">Back to Home</span>
                                <i className="icon-right-arrow"></i>
                            </Link>
                        </div>
                    </div>
                </FullHeightWrapper>
            </div>
        </div>
    )
}
