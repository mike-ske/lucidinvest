import Layout from "@/components/layout/Layout";
import CoursesDetails from "@/components/sections/InnerPage/CourseDetails";
import Image from "next/image";
import Link from "next/link";


export default function Courses_Details_Page() {

    return (
        <div className="body-bg-1">
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Course Datails" breadcrumbTitleTwo="Education">
                <section className="course-details-style1">
                    <div className="container">
                        <div className="row">

                            <div className="col-xl-8 col-lg-7">
                                <div className="course-details-style1__left">
                                    <div className="info-box">
                                        <ul className="category clearfix">
                                            <li>
                                                <div className="icon">
                                                    <i className="icon-filter"></i>
                                                </div>
                                                <p>Day Trading</p>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <i className="icon-growth"></i>
                                                </div>
                                                <p>Beginner</p>
                                            </li>
                                        </ul>
                                        <div className="title">
                                            <h3>Strategies for Successful Day Trading</h3>
                                        </div>
                                        <div className="instructor">
                                            <div className="img">
                                                <Image src="/assets/images/resources/course-details-v1-img1.jpg" alt="Image" width={50} height={50} priority />
                                            </div>
                                            <div className="text">
                                                <h4>Liam Benjamin</h4>
                                                <p>Instructor</p>
                                            </div>
                                        </div>
                                        <div className="social">
                                            <Link href="#">
                                                <i className="icon-heart"></i>
                                            </Link>
                                            <Link href="#">
                                                <i className="icon-share-1"></i>
                                            </Link>
                                        </div>
                                    </div>

                                    <CoursesDetails/>

                                </div>
                            </div>

                            <div className="col-xl-4 col-lg-5">
                                <div className="course-details-style1__right">
                                    <div className="top-box">
                                        <div className="title">
                                            <h3>$54.00 <del>$79.00</del></h3>
                                            <p>2 days left at this price!</p>
                                        </div>
                                        <div className="rating-box">
                                            <ul className="icon">
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
                                            <p><span>4.9 </span>(2,726 Reviews)</p>
                                        </div>
                                    </div>
                                    <div className="border-line"></div>

                                    <div className="bottom-box">
                                        <ul>
                                            <li>
                                                <div className="left">
                                                    <div className="icon">
                                                        <i className="icon-language-1"></i>
                                                    </div>
                                                    <h3>Language</h3>
                                                </div>
                                                <p>English</p>
                                            </li>
                                            <li>
                                                <div className="left">
                                                    <div className="icon">
                                                        <i className="icon-clock"></i>
                                                    </div>
                                                    <h3>Access</h3>
                                                </div>
                                                <p>Lifetime</p>
                                            </li>
                                            <li>
                                                <div className="left">
                                                    <div className="icon">
                                                        <i className="icon-quality"></i>
                                                    </div>
                                                    <h3>Certificate</h3>
                                                </div>
                                                <p>Yes</p>
                                            </li>
                                            <li>
                                                <div className="left">
                                                    <div className="icon">
                                                        <i className="icon-add-user"></i>
                                                    </div>
                                                    <h3>Enrolled</h3>
                                                </div>
                                                <p>45 Students</p>
                                            </li>
                                        </ul>
                                        <div className="btn-box">
                                            <Link className="btn-one" href="#">
                                                <span className="txt">Buy Now</span>
                                                <i className="icon-right-arrow"></i>
                                            </Link>
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
