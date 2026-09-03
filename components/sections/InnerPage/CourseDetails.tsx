'use client'
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";


export default function CoursesDetails() {

    // tab
    const [activeTab, setActiveTab] = useState("courses");

  return (
    <>
        <div className="course-details-style1__inner">
        <div className="course-details-style1__tab">

            <div className="course-details-style1__tab-btn">
                <ul className="tabs-button-box">
                    <li className={`tab-btn-item ${activeTab === "courses" ? "active-btn-item" : ""}`} onClick={() => setActiveTab("courses")}>
                        <h3>Our Courses</h3>
                    </li>
                    <li className={`tab-btn-item ${activeTab === "reviews" ? "active-btn-item" : ""}`} onClick={() => setActiveTab("reviews")}>
                        <h3>Traders Reviews</h3>
                    </li>
                    <li className={`tab-btn-item ${activeTab === "questions-answers" ? "active-btn-item" : ""}`} onClick={() => setActiveTab("questions-answers")}>
                        <h3>Questions & Answers</h3>
                    </li>
                </ul>
            </div>

            <div className="tabs-content-box">
                
                {activeTab === "courses" && (
                <div className="tab-content-box-item tab-content-box-item-active fadeIn" id="courses">
                    <div className="course-details-style1-tab-content-box-item">

                        <div className="single-course-details-style1">
                            <div className="lecture-duration">
                                <div className="icon">
                                    <i className="icon-read-1"></i>
                                </div>
                                <p>8 Lectures _ 2h 15 Mins Duration</p>
                            </div>
                            <ul className="syllabus">
                                <li>
                                    <Link href="#">
                                        <div className="left-box">
                                            <div className="icon">
                                                <i className="icon-video-camera"></i>
                                            </div>
                                            <p>What is Forex?</p>
                                        </div>
                                        <div className="right-box">
                                            <p>30 minutes</p>
                                            <div className="icon">
                                                <i className="icon-down"></i>
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <div className="left-box">
                                            <div className="icon">
                                                <i className="icon-video-camera"></i>
                                            </div>
                                            <p>How It&apos;s Work?</p>
                                        </div>
                                        <div className="right-box">
                                            <p>1 hr 25 minutes</p>
                                            <div className="icon">
                                                <i className="icon-down"></i>
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <div className="left-box">
                                            <div className="icon">
                                                <i className="icon-volume-up"></i>
                                            </div>
                                            <p>How to Start Forex Trading?</p>
                                        </div>
                                        <div className="right-box">
                                            <p>20 minutes</p>
                                            <div className="icon">
                                                <i className="icon-down"></i>
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                            <div className="what-is-forex">
                                <h3>What is Forex?</h3>
                                <p>Expound the actual teachings of the great explorer of the
                                    truth, the master-builder of human No one rejects, dislikes,
                                    or avoids pleasure itself, because it is pleasure, but
                                    because those who how to pursue pleasure rationally
                                    encounter consequences that are and pain can procure him
                                    power of choice is untrammelled
                                    and when nothing prevents.</p>
                            </div>
                            <div className="highlights-box">
                                <p className="color">
                                    Rationally encounter consequences that are
                                    extremely painful
                                </p>
                                <ul>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-check-1"><span
                                                    className="path1"></span><span
                                                    className="path2"></span>
                                            </span>
                                        </div>
                                        <p>Pleasure that has no annoying consequences.</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-check-1"><span
                                                    className="path1"></span><span
                                                    className="path2"></span>
                                            </span>
                                        </div>
                                        <p>The wise man therefore always holds</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-check-1"><span
                                                    className="path1"></span><span
                                                    className="path2"></span>
                                            </span>
                                        </div>
                                        <p>
                                            Rejects pleasures to secure other greater pleasures,
                                            or else he endures.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                            <div className="img-box">
                                <Image src="/assets/images/resources/course-details-v1-img2.jpg" alt="Image" width={770} height={500} priority />
                            </div>
                        </div>

                    </div>
                </div>
                )}
                
                {activeTab === "reviews" && (
                <div className="tab-content-box-item tab-content-box-item-active fadeIn" id="reviews">
                    <div className="course-details-style1-tab-content-box-item">

                        <div className="single-course-details-style1">
                            <div className="lecture-duration">
                                <div className="icon">
                                    <i className="icon-read-1"></i>
                                </div>
                                <p>8 Lectures _ 2h 15 Mins Duration</p>
                            </div>
                            <ul className="syllabus">
                                <li>
                                    <Link href="#">
                                        <div className="left-box">
                                            <div className="icon">
                                                <i className="icon-video-camera"></i>
                                            </div>
                                            <p>What is Forex?</p>
                                        </div>
                                        <div className="right-box">
                                            <p>30 minutes</p>
                                            <div className="icon">
                                                <i className="icon-down"></i>
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <div className="left-box">
                                            <div className="icon">
                                                <i className="icon-video-camera"></i>
                                            </div>
                                            <p>How It’s Work?</p>
                                        </div>
                                        <div className="right-box">
                                            <p>1 hr 25 minutes</p>
                                            <div className="icon">
                                                <i className="icon-down"></i>
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <div className="left-box">
                                            <div className="icon">
                                                <i className="icon-volume-up"></i>
                                            </div>
                                            <p>How to Start Forex Trading?</p>
                                        </div>
                                        <div className="right-box">
                                            <p>20 minutes</p>
                                            <div className="icon">
                                                <i className="icon-down"></i>
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                            <div className="what-is-forex">
                                <h3>What is Forex?</h3>
                                <p>Expound the actual teachings of the great explorer of the
                                    truth, the master-builder of human No one rejects, dislikes,
                                    or avoids pleasure itself, because it is pleasure, but
                                    because those who how to pursue pleasure rationally
                                    encounter consequences that are and pain can procure him
                                    power of choice is untrammelled
                                    and when nothing prevents.</p>
                            </div>
                            <div className="highlights-box">
                                <p className="color">
                                    Rationally encounter consequences that are
                                    extremely painful
                                </p>
                                <ul>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-check-1"><span
                                                    className="path1"></span><span
                                                    className="path2"></span>
                                            </span>
                                        </div>
                                        <p>Pleasure that has no annoying consequences.</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-check-1"><span
                                                    className="path1"></span><span
                                                    className="path2"></span>
                                            </span>
                                        </div>
                                        <p>The wise man therefore always holds</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-check-1"><span
                                                    className="path1"></span><span
                                                    className="path2"></span>
                                            </span>
                                        </div>
                                        <p>
                                            Rejects pleasures to secure other greater pleasures,
                                            or else he endures.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                            <div className="img-box">
                                <Image src="/assets/images/resources/course-details-v1-img2.jpg" alt="Image" width={770} height={500} priority />
                            </div>
                        </div>

                    </div>
                </div>
                )}
                
                {activeTab === "questions-answers" && (
                <div className="tab-content-box-item tab-content-box-item-active fadeIn" id="questions-answers">
                    <div className="course-details-style1-tab-content-box-item">

                        <div className="single-course-details-style1">
                            <div className="lecture-duration">
                                <div className="icon">
                                    <i className="icon-read-1"></i>
                                </div>
                                <p>8 Lectures _ 2h 15 Mins Duration</p>
                            </div>
                            <ul className="syllabus">
                                <li>
                                    <Link href="#">
                                        <div className="left-box">
                                            <div className="icon">
                                                <i className="icon-video-camera"></i>
                                            </div>
                                            <p>What is Forex?</p>
                                        </div>
                                        <div className="right-box">
                                            <p>30 minutes</p>
                                            <div className="icon">
                                                <i className="icon-down"></i>
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <div className="left-box">
                                            <div className="icon">
                                                <i className="icon-video-camera"></i>
                                            </div>
                                            <p>How It’s Work?</p>
                                        </div>
                                        <div className="right-box">
                                            <p>1 hr 25 minutes</p>
                                            <div className="icon">
                                                <i className="icon-down"></i>
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <div className="left-box">
                                            <div className="icon">
                                                <i className="icon-volume-up"></i>
                                            </div>
                                            <p>How to Start Forex Trading?</p>
                                        </div>
                                        <div className="right-box">
                                            <p>20 minutes</p>
                                            <div className="icon">
                                                <i className="icon-down"></i>
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                            </ul>

                            <div className="what-is-forex">
                                <h3>What is Forex?</h3>
                                <p>Expound the actual teachings of the great explorer of the
                                    truth, the master-builder of human No one rejects, dislikes,
                                    or avoids pleasure itself, because it is pleasure, but
                                    because those who how to pursue pleasure rationally
                                    encounter consequences that are and pain can procure him
                                    power of choice is untrammelled
                                    and when nothing prevents.</p>
                            </div>
                            <div className="highlights-box">
                                <p className="color">
                                    Rationally encounter consequences that are
                                    extremely painful
                                </p>
                                <ul>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-check-1"><span
                                                    className="path1"></span><span
                                                    className="path2"></span>
                                            </span>
                                        </div>
                                        <p>Pleasure that has no annoying consequences.</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-check-1"><span
                                                    className="path1"></span><span
                                                    className="path2"></span>
                                            </span>
                                        </div>
                                        <p>The wise man therefore always holds</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-check-1"><span
                                                    className="path1"></span><span
                                                    className="path2"></span>
                                            </span>
                                        </div>
                                        <p>
                                            Rejects pleasures to secure other greater pleasures,
                                            or else he endures.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                            <div className="img-box">
                                <Image src="/assets/images/resources/course-details-v1-img2.jpg" alt="Image" width={770} height={500} priority />
                            </div>
                        </div>

                    </div>
                </div>
                )}

            </div>
        </div>
    </div>
    </>
  )
}