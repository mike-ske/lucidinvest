'use client'
import { useState } from "react";

import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import Link from "next/link";
import Image from "next/image";

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.owl-prev',
        prevEl: '.owl-next',
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        575: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        767: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
    }
}


export const blogPosts = [
  {
    slug: "1",
    title: "How Global Events are Shaping Commodity Prices",
    category: "Market Analysis",
    date: "15.09.2025",
    readTime: "4 Minutes read",
    image: "/assets/images/blog/blog-v1-1.jpg",
    excerpt: "Desire that they cannot foresee all the pain business it will frequently occur...",
    content: `
      <p>Global events such as conflicts, trade policies, and climate conditions are reshaping commodity markets worldwide. Investors must stay vigilant as these events create volatility and opportunities.</p>
      <p>Commodity prices often respond first to supply chain disruptions and economic sanctions. Understanding how global trade dynamics interact with policy decisions helps anticipate market movement.</p>
    `,
  },
  {
    slug: "2",
    title: "The Effect of Fiscal Policies on Stock Market Performance",
    category: "Economic News",
    date: "31.08.2025",
    readTime: "3 Minutes read",
    excerpt: "Cases are perfectly simple to all distinguish desire that they cannot foresee...",
    content: `
      <p>Fiscal policy decisions such as government spending and taxation directly impact investor confidence and market performance...</p>
    `,
  },
  {
    slug: "3",
    title: "Understanding Leverage: The Pros and Cons",
    category: "Learning Center",
    date: "23.08.2025",
    readTime: "5 Minutes read",
    excerpt: "Foresee the pain trouble that are in bound trouble that are bound to ensue...",
    content: `
      <p>Leverage allows traders to control large positions with smaller capital outlays, magnifying both gains and losses...</p>
    `,
  },
];


export default function Blog() {

    // tab
    const [activeTab, setActiveTab] = useState("global-analysis");


  return (
    <>
        <section className="blog-style1">
            <div className="container">
                <div className="sec-title withtext text-center">
                    <div className="sub-title">
                        <h4>News & Updates</h4>
                    </div>
                    <h2>Latest Insights and Updates</h2>
                    <div className="text">
                        <p>Discover the most competitive prices in the market update.</p>
                    </div>
                </div>

                <div className="blog-style1__inner">
                    <div className="blog-style1__tab">

                        <div className="blog-style1__tab-btn">
                            <ul className="tabs-button-box clearfix">
                                <li className={`tab-btn-item ${activeTab === "global-analysis" ? "active-btn-item" : ""}`} onClick={() => setActiveTab("global-analysis")}>
                                    <h4>Global Analysis</h4>
                                </li>
                                <li className={`tab-btn-item ${activeTab === "market-analysis" ? "active-btn-item" : ""}`} onClick={() => setActiveTab("market-analysis")}>
                                    <h4>Market Analysis</h4>
                                </li>
                                <li className={`tab-btn-item ${activeTab === "trading-strategies" ? "active-btn-item" : ""}`} onClick={() => setActiveTab("trading-strategies")}>
                                    <h4>Trading Strategies</h4>
                                </li>
                                <li className={`tab-btn-item ${activeTab === "technical-analysis" ? "active-btn-item" : ""}`} onClick={() => setActiveTab("technical-analysis")}>
                                    <h4>Technical Analysis</h4>
                                </li>
                                <li className={`tab-btn-item ${activeTab === "economic-news" ? "active-btn-item" : ""}`} onClick={() => setActiveTab("economic-news")}>
                                    <h4>Economic News</h4>
                                </li>
                            </ul>
                        </div>

                        <div className="tabs-content-box">

                            {activeTab === "global-analysis" && (
                            <div className="tab-content-box-item tab-content-box-item-active fadeIn" id="global-analysis">
                                <div className="blog-style1-tab-content-box-item">
                                    <div className="row">
                                        <div className="col-xl-8 relative">
                                            <Swiper {...swiperOptions} className="blog-style1-carousel">
                                                <SwiperSlide>
                                                    <div className="single-item">
                                                        <div className="row">
                                                            <div className="col-xl-6 col-lg-6">
                                                                {blogPosts.slice(0, 1).map((post) => (
                                                                <div className="single-blog-style1" key={post.slug}>
                                                                    <div className="img-box">
                                                                        <Image
                                                                        src={post.image as string}
                                                                        alt="Image"
                                                                        width={370}
                                                                        height={270}
                                                                        priority
                                                                        />
                                                                    </div>
                                                                    <div className="content-box">
                                                                        <div className="top-box">
                                                                            <div className="category">
                                                                                <div className="icon"><i className="icon-hashtag"></i></div>
                                                                                <h6>{post.category}</h6>
                                                                            </div>
                                                                            <div className="date">
                                                                                <div className="icon"><i className="fa fa-calendar"></i></div>
                                                                                <h6>{post.date}</h6>
                                                                            </div>
                                                                        </div>
                                                                        <div className="title-box">
                                                                            <h3>
                                                                            <Link href={`/blog-1/${post.slug}`}>{post.title}</Link>
                                                                            </h3>
                                                                        </div>
                                                                        <div className="text-box">
                                                                            <p>{post.excerpt}</p>
                                                                        </div>
                                                                        <div className="btn-box">
                                                                            <Link className="show-btn" href={`/blog-1/${post.slug}`}>
                                                                            {post.readTime}
                                                                            <i className="icon-right-arrow"></i>
                                                                            </Link>
                                                                            <Link className="overlay-btn" href={`/blog-1/${post.slug}`}>
                                                                            Read More
                                                                            <i className="icon-right-arrow"></i>
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                ))}
                                                            </div>
                                                            
                                                            <div className="col-xl-6 col-lg-6">
                                                                {blogPosts.slice(1).map((post) => (
                                                                <div className="single-blog-style2" key={post.slug}>
                                                                    <div className="top-box">
                                                                        <div className="category">
                                                                            <div className="icon"><i className="icon-hashtag"></i></div>
                                                                            <h6>{post.category}</h6>
                                                                        </div>
                                                                        <div className="date">
                                                                            <div className="icon"><i className="fa fa-calendar"></i></div>
                                                                            <h6>{post.date}</h6>
                                                                        </div>
                                                                    </div>
                                                                    <div className="title-box">
                                                                        <h3>
                                                                            <Link href={`/blog-1/${post.slug}`}>{post.title}</Link>
                                                                        </h3>
                                                                    </div>
                                                                    <div className="text-box">
                                                                        <p>{post.excerpt}</p>
                                                                    </div>
                                                                    <div className="btn-box">
                                                                        <Link className="show-btn" href={`/blog-1/${post.slug}`}>
                                                                            {post.readTime}
                                                                            <i className="icon-right-arrow"></i>
                                                                        </Link>
                                                                        <Link className="overlay-btn" href={`/blog-1/${post.slug}`}>
                                                                            Read More
                                                                            <i className="icon-right-arrow"></i>
                                                                        </Link>
                                                                    </div>
                                                                    <div className="border-line"></div>
                                                                </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="single-item">
                                                        <div className="row">
                                                            <div className="col-xl-6 col-lg-6">
                                                                {blogPosts.slice(0, 1).map((post) => (
                                                                <div className="single-blog-style1" key={post.slug}>
                                                                    <div className="img-box">
                                                                        <Image
                                                                        src={post.image as string}
                                                                        alt="Image"
                                                                        width={370}
                                                                        height={270}
                                                                        priority
                                                                        />
                                                                    </div>
                                                                    <div className="content-box">
                                                                        <div className="top-box">
                                                                            <div className="category">
                                                                                <div className="icon"><i className="icon-hashtag"></i></div>
                                                                                <h6>{post.category}</h6>
                                                                            </div>
                                                                            <div className="date">
                                                                                <div className="icon"><i className="fa fa-calendar"></i></div>
                                                                                <h6>{post.date}</h6>
                                                                            </div>
                                                                        </div>
                                                                        <div className="title-box">
                                                                            <h3>
                                                                            <Link href={`/blog-1/${post.slug}`}>{post.title}</Link>
                                                                            </h3>
                                                                        </div>
                                                                        <div className="text-box">
                                                                            <p>{post.excerpt}</p>
                                                                        </div>
                                                                        <div className="btn-box">
                                                                            <Link className="show-btn" href={`/blog-1/${post.slug}`}>
                                                                            {post.readTime}
                                                                            <i className="icon-right-arrow"></i>
                                                                            </Link>
                                                                            <Link className="overlay-btn" href={`/blog-1/${post.slug}`}>
                                                                            Read More
                                                                            <i className="icon-right-arrow"></i>
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                ))}
                                                            </div>
                                                            
                                                            <div className="col-xl-6 col-lg-6">
                                                                {blogPosts.slice(1).map((post) => (
                                                                <div className="single-blog-style2" key={post.slug}>
                                                                    <div className="top-box">
                                                                        <div className="category">
                                                                            <div className="icon"><i className="icon-hashtag"></i></div>
                                                                            <h6>{post.category}</h6>
                                                                        </div>
                                                                        <div className="date">
                                                                            <div className="icon"><i className="fa fa-calendar"></i></div>
                                                                            <h6>{post.date}</h6>
                                                                        </div>
                                                                    </div>
                                                                    <div className="title-box">
                                                                        <h3>
                                                                            <Link href={`/blog-1/${post.slug}`}>{post.title}</Link>
                                                                        </h3>
                                                                    </div>
                                                                    <div className="text-box">
                                                                        <p>{post.excerpt}</p>
                                                                    </div>
                                                                    <div className="btn-box">
                                                                        <Link className="show-btn" href={`/blog-1/${post.slug}`}>
                                                                            {post.readTime}
                                                                            <i className="icon-right-arrow"></i>
                                                                        </Link>
                                                                        <Link className="overlay-btn" href={`/blog-1/${post.slug}`}>
                                                                            Read More
                                                                            <i className="icon-right-arrow"></i>
                                                                        </Link>
                                                                    </div>
                                                                    <div className="border-line"></div>
                                                                </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="single-item">
                                                        <div className="row">
                                                            <div className="col-xl-6 col-lg-6">
                                                                {blogPosts.slice(0, 1).map((post) => (
                                                                <div className="single-blog-style1" key={post.slug}>
                                                                    <div className="img-box">
                                                                        <Image
                                                                        src={post.image as string}
                                                                        alt="Image"
                                                                        width={370}
                                                                        height={270}
                                                                        priority
                                                                        />
                                                                    </div>
                                                                    <div className="content-box">
                                                                        <div className="top-box">
                                                                            <div className="category">
                                                                                <div className="icon"><i className="icon-hashtag"></i></div>
                                                                                <h6>{post.category}</h6>
                                                                            </div>
                                                                            <div className="date">
                                                                                <div className="icon"><i className="fa fa-calendar"></i></div>
                                                                                <h6>{post.date}</h6>
                                                                            </div>
                                                                        </div>
                                                                        <div className="title-box">
                                                                            <h3>
                                                                            <Link href={`/blog-1/${post.slug}`}>{post.title}</Link>
                                                                            </h3>
                                                                        </div>
                                                                        <div className="text-box">
                                                                            <p>{post.excerpt}</p>
                                                                        </div>
                                                                        <div className="btn-box">
                                                                            <Link className="show-btn" href={`/blog-1/${post.slug}`}>
                                                                            {post.readTime}
                                                                            <i className="icon-right-arrow"></i>
                                                                            </Link>
                                                                            <Link className="overlay-btn" href={`/blog-1/${post.slug}`}>
                                                                            Read More
                                                                            <i className="icon-right-arrow"></i>
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                ))}
                                                            </div>
                                                            
                                                            <div className="col-xl-6 col-lg-6">
                                                                {blogPosts.slice(1).map((post) => (
                                                                <div className="single-blog-style2" key={post.slug}>
                                                                    <div className="top-box">
                                                                        <div className="category">
                                                                            <div className="icon"><i className="icon-hashtag"></i></div>
                                                                            <h6>{post.category}</h6>
                                                                        </div>
                                                                        <div className="date">
                                                                            <div className="icon"><i className="fa fa-calendar"></i></div>
                                                                            <h6>{post.date}</h6>
                                                                        </div>
                                                                    </div>
                                                                    <div className="title-box">
                                                                        <h3>
                                                                            <Link href={`/blog-1/${post.slug}`}>{post.title}</Link>
                                                                        </h3>
                                                                    </div>
                                                                    <div className="text-box">
                                                                        <p>{post.excerpt}</p>
                                                                    </div>
                                                                    <div className="btn-box">
                                                                        <Link className="show-btn" href={`/blog-1/${post.slug}`}>
                                                                            {post.readTime}
                                                                            <i className="icon-right-arrow"></i>
                                                                        </Link>
                                                                        <Link className="overlay-btn" href={`/blog-1/${post.slug}`}>
                                                                            Read More
                                                                            <i className="icon-right-arrow"></i>
                                                                        </Link>
                                                                    </div>
                                                                    <div className="border-line"></div>
                                                                </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="single-item">
                                                        <div className="row">
                                                            <div className="col-xl-6 col-lg-6">
                                                                {blogPosts.slice(0, 1).map((post) => (
                                                                <div className="single-blog-style1" key={post.slug}>
                                                                    <div className="img-box">
                                                                        <Image
                                                                        src={post.image as string}
                                                                        alt="Image"
                                                                        width={370}
                                                                        height={270}
                                                                        priority
                                                                        />
                                                                    </div>
                                                                    <div className="content-box">
                                                                        <div className="top-box">
                                                                            <div className="category">
                                                                                <div className="icon"><i className="icon-hashtag"></i></div>
                                                                                <h6>{post.category}</h6>
                                                                            </div>
                                                                            <div className="date">
                                                                                <div className="icon"><i className="fa fa-calendar"></i></div>
                                                                                <h6>{post.date}</h6>
                                                                            </div>
                                                                        </div>
                                                                        <div className="title-box">
                                                                            <h3>
                                                                            <Link href={`/blog-1/${post.slug}`}>{post.title}</Link>
                                                                            </h3>
                                                                        </div>
                                                                        <div className="text-box">
                                                                            <p>{post.excerpt}</p>
                                                                        </div>
                                                                        <div className="btn-box">
                                                                            <Link className="show-btn" href={`/blog-1/${post.slug}`}>
                                                                            {post.readTime}
                                                                            <i className="icon-right-arrow"></i>
                                                                            </Link>
                                                                            <Link className="overlay-btn" href={`/blog-1/${post.slug}`}>
                                                                            Read More
                                                                            <i className="icon-right-arrow"></i>
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                ))}
                                                            </div>
                                                            
                                                            <div className="col-xl-6 col-lg-6">
                                                                {blogPosts.slice(1).map((post) => (
                                                                <div className="single-blog-style2" key={post.slug}>
                                                                    <div className="top-box">
                                                                        <div className="category">
                                                                            <div className="icon"><i className="icon-hashtag"></i></div>
                                                                            <h6>{post.category}</h6>
                                                                        </div>
                                                                        <div className="date">
                                                                            <div className="icon"><i className="fa fa-calendar"></i></div>
                                                                            <h6>{post.date}</h6>
                                                                        </div>
                                                                    </div>
                                                                    <div className="title-box">
                                                                        <h3>
                                                                            <Link href={`/blog-1/${post.slug}`}>{post.title}</Link>
                                                                        </h3>
                                                                    </div>
                                                                    <div className="text-box">
                                                                        <p>{post.excerpt}</p>
                                                                    </div>
                                                                    <div className="btn-box">
                                                                        <Link className="show-btn" href={`/blog-1/${post.slug}`}>
                                                                            {post.readTime}
                                                                            <i className="icon-right-arrow"></i>
                                                                        </Link>
                                                                        <Link className="overlay-btn" href={`/blog-1/${post.slug}`}>
                                                                            Read More
                                                                            <i className="icon-right-arrow"></i>
                                                                        </Link>
                                                                    </div>
                                                                    <div className="border-line"></div>
                                                                </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            </Swiper>
                                            <div className="owl-nav-style-one">
                                                <div className="owl-nav disabled">
                                                    <button className="owl-prev"><span className="left icon-arrow-left"></span></button>
                                                    <button className="owl-next"><span className="icon-arrow-right"></span></button>
                                                </div>
                                            </div>
                                        </div>

                                        
                                        <div className="col-xl-4 col-lg-6">
                                            <div className="blog-style1-subscribe">
                                                <div className="shape1">
                                                    <Image src="/assets/images/shapes/blog-v1-shape1.png" className="float-bob-x" alt="Shape" width={150} height={118} priority />
                                                </div>
                                                <div className="shape2">
                                                    <Image src="/assets/images/shapes/blog-v1-shape2.png" className="zoominout" alt="Shape" width={200} height={210} priority />
                                                </div>
                                                <div className="shape3">
                                                    <Image src="/assets/images/shapes/blog-v1-shape3.png" className="zoominout" alt="Shape" width={320} height={265} priority />
                                                </div>
                                                <div className="top-box">
                                                    <h3>Subscribe Us</h3>
                                                    <p>Get updates in your inbox diectly.</p>
                                                </div>
                                                <div className="blog-style1-subscribe__inner">
                                                    <ul className="clearfix">
                                                        <li>
                                                            <div className="icon">
                                                                <i className="icon-check"></i>
                                                            </div>
                                                            <p>Special Promotions</p>
                                                        </li>
                                                        <li>
                                                            <div className="icon">
                                                                <i className="icon-check"></i>
                                                            </div>
                                                            <p>Exclusive Market Insights</p>
                                                        </li>
                                                        <li>
                                                            <div className="icon">
                                                                <i className="icon-check"></i>
                                                            </div>
                                                            <p>Expert Trading Tips</p>
                                                        </li>
                                                    </ul>
                                                    <div className="blog-style1-subscribe-form">
                                                        <form action="#" method="POST">
                                                            <div className="form-group">
                                                                <input type="email" name="email"
                                                                    placeholder="Email address..." required />
                                                            </div>
                                                            <div className="checked-box1">
                                                                <input type="checkbox" name="agree"
                                                                    id="termsconditions2" defaultChecked />
                                                                <label htmlFor="termsconditions2">
                                                                    <span></span>I agree terms & conditions.
                                                                </label>
                                                            </div>
                                                            <div className="btn-box">
                                                                <button className="submit btn-one">
                                                                    <span className="txt">
                                                                        Subscribe
                                                                        <i className="icon-right-arrow"></i>
                                                                    </span>
                                                                </button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            )}
                            

                            {activeTab === "market-analysis" && (
                            <div className="tab-content-box-item tab-content-box-item-active fadeIn" id="market-analysis">
                                <div className="blog-style1-tab-content-box-item">
                                    <div className="row">
                                        <div className="col-xl-8 relative">
                                            <Swiper {...swiperOptions} className="blog-style1-carousel">
                                                <SwiperSlide>
                                                    <div className="single-item">
                                                        <div className="row">
                                                            <div className="col-xl-6 col-lg-6">
                                                                {blogPosts.slice(0, 1).map((post) => (
                                                                <div className="single-blog-style1" key={post.slug}>
                                                                    <div className="img-box">
                                                                        <Image
                                                                        src={post.image as string}
                                                                        alt="Image"
                                                                        width={370}
                                                                        height={270}
                                                                        priority
                                                                        />
                                                                    </div>
                                                                    <div className="content-box">
                                                                        <div className="top-box">
                                                                            <div className="category">
                                                                                <div className="icon"><i className="icon-hashtag"></i></div>
                                                                                <h6>{post.category}</h6>
                                                                            </div>
                                                                            <div className="date">
                                                                                <div className="icon"><i className="fa fa-calendar"></i></div>
                                                                                <h6>{post.date}</h6>
                                                                            </div>
                                                                        </div>
                                                                        <div className="title-box">
                                                                            <h3>
                                                                            <Link href={`/blog-1/${post.slug}`}>{post.title}</Link>
                                                                            </h3>
                                                                        </div>
                                                                        <div className="text-box">
                                                                            <p>{post.excerpt}</p>
                                                                        </div>
                                                                        <div className="btn-box">
                                                                            <Link className="show-btn" href={`/blog-1/${post.slug}`}>
                                                                            {post.readTime}
                                                                            <i className="icon-right-arrow"></i>
                                                                            </Link>
                                                                            <Link className="overlay-btn" href={`/blog-1/${post.slug}`}>
                                                                            Read More
                                                                            <i className="icon-right-arrow"></i>
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                ))}
                                                            </div>
                                                            
                                                            <div className="col-xl-6 col-lg-6">
                                                                {blogPosts.slice(1).map((post) => (
                                                                <div className="single-blog-style2" key={post.slug}>
                                                                    <div className="top-box">
                                                                        <div className="category">
                                                                            <div className="icon"><i className="icon-hashtag"></i></div>
                                                                            <h6>{post.category}</h6>
                                                                        </div>
                                                                        <div className="date">
                                                                            <div className="icon"><i className="fa fa-calendar"></i></div>
                                                                            <h6>{post.date}</h6>
                                                                        </div>
                                                                    </div>
                                                                    <div className="title-box">
                                                                        <h3>
                                                                            <Link href={`/blog-1/${post.slug}`}>{post.title}</Link>
                                                                        </h3>
                                                                    </div>
                                                                    <div className="text-box">
                                                                        <p>{post.excerpt}</p>
                                                                    </div>
                                                                    <div className="btn-box">
                                                                        <Link className="show-btn" href={`/blog-1/${post.slug}`}>
                                                                            {post.readTime}
                                                                            <i className="icon-right-arrow"></i>
                                                                        </Link>
                                                                        <Link className="overlay-btn" href={`/blog-1/${post.slug}`}>
                                                                            Read More
                                                                            <i className="icon-right-arrow"></i>
                                                                        </Link>
                                                                    </div>
                                                                    <div className="border-line"></div>
                                                                </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="single-item">
                                                        <div className="row">
                                                            <div className="col-xl-6 col-lg-6">
                                                                {blogPosts.slice(0, 1).map((post) => (
                                                                <div className="single-blog-style1" key={post.slug}>
                                                                    <div className="img-box">
                                                                        <Image
                                                                        src={post.image as string}
                                                                        alt="Image"
                                                                        width={370}
                                                                        height={270}
                                                                        priority
                                                                        />
                                                                    </div>
                                                                    <div className="content-box">
                                                                        <div className="top-box">
                                                                            <div className="category">
                                                                                <div className="icon"><i className="icon-hashtag"></i></div>
                                                                                <h6>{post.category}</h6>
                                                                            </div>
                                                                            <div className="date">
                                                                                <div className="icon"><i className="fa fa-calendar"></i></div>
                                                                                <h6>{post.date}</h6>
                                                                            </div>
                                                                        </div>
                                                                        <div className="title-box">
                                                                            <h3>
                                                                            <Link href={`/blog-1/${post.slug}`}>{post.title}</Link>
                                                                            </h3>
                                                                        </div>
                                                                        <div className="text-box">
                                                                            <p>{post.excerpt}</p>
                                                                        </div>
                                                                        <div className="btn-box">
                                                                            <Link className="show-btn" href={`/blog-1/${post.slug}`}>
                                                                            {post.readTime}
                                                                            <i className="icon-right-arrow"></i>
                                                                            </Link>
                                                                            <Link className="overlay-btn" href={`/blog-1/${post.slug}`}>
                                                                            Read More
                                                                            <i className="icon-right-arrow"></i>
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                ))}
                                                            </div>
                                                            
                                                            <div className="col-xl-6 col-lg-6">
                                                                {blogPosts.slice(1).map((post) => (
                                                                <div className="single-blog-style2" key={post.slug}>
                                                                    <div className="top-box">
                                                                        <div className="category">
                                                                            <div className="icon"><i className="icon-hashtag"></i></div>
                                                                            <h6>{post.category}</h6>
                                                                        </div>
                                                                        <div className="date">
                                                                            <div className="icon"><i className="fa fa-calendar"></i></div>
                                                                            <h6>{post.date}</h6>
                                                                        </div>
                                                                    </div>
                                                                    <div className="title-box">
                                                                        <h3>
                                                                            <Link href={`/blog-1/${post.slug}`}>{post.title}</Link>
                                                                        </h3>
                                                                    </div>
                                                                    <div className="text-box">
                                                                        <p>{post.excerpt}</p>
                                                                    </div>
                                                                    <div className="btn-box">
                                                                        <Link className="show-btn" href={`/blog-1/${post.slug}`}>
                                                                            {post.readTime}
                                                                            <i className="icon-right-arrow"></i>
                                                                        </Link>
                                                                        <Link className="overlay-btn" href={`/blog-1/${post.slug}`}>
                                                                            Read More
                                                                            <i className="icon-right-arrow"></i>
                                                                        </Link>
                                                                    </div>
                                                                    <div className="border-line"></div>
                                                                </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="single-item">
                                                        <div className="row">
                                                            <div className="col-xl-6 col-lg-6">
                                                                {blogPosts.slice(0, 1).map((post) => (
                                                                <div className="single-blog-style1" key={post.slug}>
                                                                    <div className="img-box">
                                                                        <Image
                                                                        src={post.image as string}
                                                                        alt="Image"
                                                                        width={370}
                                                                        height={270}
                                                                        priority
                                                                        />
                                                                    </div>
                                                                    <div className="content-box">
                                                                        <div className="top-box">
                                                                            <div className="category">
                                                                                <div className="icon"><i className="icon-hashtag"></i></div>
                                                                                <h6>{post.category}</h6>
                                                                            </div>
                                                                            <div className="date">
                                                                                <div className="icon"><i className="fa fa-calendar"></i></div>
                                                                                <h6>{post.date}</h6>
                                                                            </div>
                                                                        </div>
                                                                        <div className="title-box">
                                                                            <h3>
                                                                            <Link href={`/blog-1/${post.slug}`}>{post.title}</Link>
                                                                            </h3>
                                                                        </div>
                                                                        <div className="text-box">
                                                                            <p>{post.excerpt}</p>
                                                                        </div>
                                                                        <div className="btn-box">
                                                                            <Link className="show-btn" href={`/blog-1/${post.slug}`}>
                                                                            {post.readTime}
                                                                            <i className="icon-right-arrow"></i>
                                                                            </Link>
                                                                            <Link className="overlay-btn" href={`/blog-1/${post.slug}`}>
                                                                            Read More
                                                                            <i className="icon-right-arrow"></i>
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                ))}
                                                            </div>
                                                            
                                                            <div className="col-xl-6 col-lg-6">
                                                                {blogPosts.slice(1).map((post) => (
                                                                <div className="single-blog-style2" key={post.slug}>
                                                                    <div className="top-box">
                                                                        <div className="category">
                                                                            <div className="icon"><i className="icon-hashtag"></i></div>
                                                                            <h6>{post.category}</h6>
                                                                        </div>
                                                                        <div className="date">
                                                                            <div className="icon"><i className="fa fa-calendar"></i></div>
                                                                            <h6>{post.date}</h6>
                                                                        </div>
                                                                    </div>
                                                                    <div className="title-box">
                                                                        <h3>
                                                                            <Link href={`/blog-1/${post.slug}`}>{post.title}</Link>
                                                                        </h3>
                                                                    </div>
                                                                    <div className="text-box">
                                                                        <p>{post.excerpt}</p>
                                                                    </div>
                                                                    <div className="btn-box">
                                                                        <Link className="show-btn" href={`/blog-1/${post.slug}`}>
                                                                            {post.readTime}
                                                                            <i className="icon-right-arrow"></i>
                                                                        </Link>
                                                                        <Link className="overlay-btn" href={`/blog-1/${post.slug}`}>
                                                                            Read More
                                                                            <i className="icon-right-arrow"></i>
                                                                        </Link>
                                                                    </div>
                                                                    <div className="border-line"></div>
                                                                </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="single-item">
                                                        <div className="row">
                                                            <div className="col-xl-6 col-lg-6">
                                                                {blogPosts.slice(0, 1).map((post) => (
                                                                <div className="single-blog-style1" key={post.slug}>
                                                                    <div className="img-box">
                                                                        <Image
                                                                        src={post.image as string}
                                                                        alt="Image"
                                                                        width={370}
                                                                        height={270}
                                                                        priority
                                                                        />
                                                                    </div>
                                                                    <div className="content-box">
                                                                        <div className="top-box">
                                                                            <div className="category">
                                                                                <div className="icon"><i className="icon-hashtag"></i></div>
                                                                                <h6>{post.category}</h6>
                                                                            </div>
                                                                            <div className="date">
                                                                                <div className="icon"><i className="fa fa-calendar"></i></div>
                                                                                <h6>{post.date}</h6>
                                                                            </div>
                                                                        </div>
                                                                        <div className="title-box">
                                                                            <h3>
                                                                            <Link href={`/blog-1/${post.slug}`}>{post.title}</Link>
                                                                            </h3>
                                                                        </div>
                                                                        <div className="text-box">
                                                                            <p>{post.excerpt}</p>
                                                                        </div>
                                                                        <div className="btn-box">
                                                                            <Link className="show-btn" href={`/blog-1/${post.slug}`}>
                                                                            {post.readTime}
                                                                            <i className="icon-right-arrow"></i>
                                                                            </Link>
                                                                            <Link className="overlay-btn" href={`/blog-1/${post.slug}`}>
                                                                            Read More
                                                                            <i className="icon-right-arrow"></i>
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                ))}
                                                            </div>
                                                            
                                                            <div className="col-xl-6 col-lg-6">
                                                                {blogPosts.slice(1).map((post) => (
                                                                <div className="single-blog-style2" key={post.slug}>
                                                                    <div className="top-box">
                                                                        <div className="category">
                                                                            <div className="icon"><i className="icon-hashtag"></i></div>
                                                                            <h6>{post.category}</h6>
                                                                        </div>
                                                                        <div className="date">
                                                                            <div className="icon"><i className="fa fa-calendar"></i></div>
                                                                            <h6>{post.date}</h6>
                                                                        </div>
                                                                    </div>
                                                                    <div className="title-box">
                                                                        <h3>
                                                                            <Link href={`/blog-1/${post.slug}`}>{post.title}</Link>
                                                                        </h3>
                                                                    </div>
                                                                    <div className="text-box">
                                                                        <p>{post.excerpt}</p>
                                                                    </div>
                                                                    <div className="btn-box">
                                                                        <Link className="show-btn" href={`/blog-1/${post.slug}`}>
                                                                            {post.readTime}
                                                                            <i className="icon-right-arrow"></i>
                                                                        </Link>
                                                                        <Link className="overlay-btn" href={`/blog-1/${post.slug}`}>
                                                                            Read More
                                                                            <i className="icon-right-arrow"></i>
                                                                        </Link>
                                                                    </div>
                                                                    <div className="border-line"></div>
                                                                </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            </Swiper>
                                            <div className="owl-nav-style-one">
                                                <div className="owl-nav disabled">
                                                    <button className="owl-prev"><span className="left icon-arrow-left"></span></button>
                                                    <button className="owl-next"><span className="icon-arrow-right"></span></button>
                                                </div>
                                            </div>
                                        </div>

                                        
                                        <div className="col-xl-4 col-lg-6">
                                            <div className="blog-style1-subscribe">
                                                <div className="shape1">
                                                    <Image src="/assets/images/shapes/blog-v1-shape1.png" className="float-bob-x" alt="Shape" width={150} height={118} priority />
                                                </div>
                                                <div className="shape2">
                                                    <Image src="/assets/images/shapes/blog-v1-shape2.png" className="zoominout" alt="Shape" width={200} height={210} priority />
                                                </div>
                                                <div className="shape3">
                                                    <Image src="/assets/images/shapes/blog-v1-shape3.png" className="zoominout" alt="Shape" width={320} height={265} priority />
                                                </div>
                                                <div className="top-box">
                                                    <h3>Subscribe Us</h3>
                                                    <p>Get updates in your inbox diectly.</p>
                                                </div>
                                                <div className="blog-style1-subscribe__inner">
                                                    <ul className="clearfix">
                                                        <li>
                                                            <div className="icon">
                                                                <i className="icon-check"></i>
                                                            </div>
                                                            <p>Special Promotions</p>
                                                        </li>
                                                        <li>
                                                            <div className="icon">
                                                                <i className="icon-check"></i>
                                                            </div>
                                                            <p>Exclusive Market Insights</p>
                                                        </li>
                                                        <li>
                                                            <div className="icon">
                                                                <i className="icon-check"></i>
                                                            </div>
                                                            <p>Expert Trading Tips</p>
                                                        </li>
                                                    </ul>
                                                    <div className="blog-style1-subscribe-form">
                                                        <form action="#" method="POST">
                                                            <div className="form-group">
                                                                <input type="email" name="email"
                                                                    placeholder="Email address..." required />
                                                            </div>
                                                            <div className="checked-box1">
                                                                <input type="checkbox" name="agree"
                                                                    id="termsconditions1" />
                                                                <label htmlFor="termsconditions1">
                                                                    <span></span>I agree terms & conditions.
                                                                </label>
                                                            </div>
                                                            <div className="btn-box">
                                                                <button className="submit btn-one">
                                                                    <span className="txt">
                                                                        Subscribe
                                                                        <i className="icon-right-arrow"></i>
                                                                    </span>
                                                                </button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            )}
                            
                            {activeTab === "trading-strategies" && (
                            <div className="tab-content-box-item tab-content-box-item-active fadeIn" id="trading-strategies">
                                <div className="blog-style1-tab-content-box-item">
                                    <div className="row">
                                        <div className="col-xl-8 relative">
                                            <Swiper {...swiperOptions} className="blog-style1-carousel">
                                                <SwiperSlide>
                                                    <div className="single-item">
                                                        <div className="row">
                                                            <div className="col-xl-6 col-lg-6">
                                                                {blogPosts.slice(0, 1).map((post) => (
                                                                <div className="single-blog-style1" key={post.slug}>
                                                                    <div className="img-box">
                                                                        <Image
                                                                        src={post.image as string}
                                                                        alt="Image"
                                                                        width={370}
                                                                        height={270}
                                                                        priority
                                                                        />
                                                                    </div>
                                                                    <div className="content-box">
                                                                        <div className="top-box">
                                                                            <div className="category">
                                                                                <div className="icon"><i className="icon-hashtag"></i></div>
                                                                                <h6>{post.category}</h6>
                                                                            </div>
                                                                            <div className="date">
                                                                                <div className="icon"><i className="fa fa-calendar"></i></div>
                                                                                <h6>{post.date}</h6>
                                                                            </div>
                                                                        </div>
                                                                        <div className="title-box">
                                                                            <h3>
                                                                            <Link href={`/blog-1/${post.slug}`}>{post.title}</Link>
                                                                            </h3>
                                                                        </div>
                                                                        <div className="text-box">
                                                                            <p>{post.excerpt}</p>
                                                                        </div>
                                                                        <div className="btn-box">
                                                                            <Link className="show-btn" href={`/blog-1/${post.slug}`}>
                                                                            {post.readTime}
                                                                            <i className="icon-right-arrow"></i>
                                                                            </Link>
                                                                            <Link className="overlay-btn" href={`/blog-1/${post.slug}`}>
                                                                            Read More
                                                                            <i className="icon-right-arrow"></i>
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                ))}
                                                            </div>
                                                            
                                                            <div className="col-xl-6 col-lg-6">
                                                                {blogPosts.slice(1).map((post) => (
                                                                <div className="single-blog-style2" key={post.slug}>
                                                                    <div className="top-box">
                                                                        <div className="category">
                                                                            <div className="icon"><i className="icon-hashtag"></i></div>
                                                                            <h6>{post.category}</h6>
                                                                        </div>
                                                                        <div className="date">
                                                                            <div className="icon"><i className="fa fa-calendar"></i></div>
                                                                            <h6>{post.date}</h6>
                                                                        </div>
                                                                    </div>
                                                                    <div className="title-box">
                                                                        <h3>
                                                                            <Link href={`/blog-1/${post.slug}`}>{post.title}</Link>
                                                                        </h3>
                                                                    </div>
                                                                    <div className="text-box">
                                                                        <p>{post.excerpt}</p>
                                                                    </div>
                                                                    <div className="btn-box">
                                                                        <Link className="show-btn" href={`/blog-1/${post.slug}`}>
                                                                            {post.readTime}
                                                                            <i className="icon-right-arrow"></i>
                                                                        </Link>
                                                                        <Link className="overlay-btn" href={`/blog-1/${post.slug}`}>
                                                                            Read More
                                                                            <i className="icon-right-arrow"></i>
                                                                        </Link>
                                                                    </div>
                                                                    <div className="border-line"></div>
                                                                </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="single-item">
                                                        <div className="row">
                                                            <div className="col-xl-6 col-lg-6">
                                                                {blogPosts.slice(0, 1).map((post) => (
                                                                <div className="single-blog-style1" key={post.slug}>
                                                                    <div className="img-box">
                                                                        <Image
                                                                        src={post.image as string}
                                                                        alt="Image"
                                                                        width={370}
                                                                        height={270}
                                                                        priority
                                                                        />
                                                                    </div>
                                                                    <div className="content-box">
                                                                        <div className="top-box">
                                                                            <div className="category">
                                                                                <div className="icon"><i className="icon-hashtag"></i></div>
                                                                                <h6>{post.category}</h6>
                                                                            </div>
                                                                            <div className="date">
                                                                                <div className="icon"><i className="fa fa-calendar"></i></div>
                                                                                <h6>{post.date}</h6>
                                                                            </div>
                                                                        </div>
                                                                        <div className="title-box">
                                                                            <h3>
                                                                            <Link href={`/blog-1/${post.slug}`}>{post.title}</Link>
                                                                            </h3>
                                                                        </div>
                                                                        <div className="text-box">
                                                                            <p>{post.excerpt}</p>
                                                                        </div>
                                                                        <div className="btn-box">
                                                                            <Link className="show-btn" href={`/blog-1/${post.slug}`}>
                                                                            {post.readTime}
                                                                            <i className="icon-right-arrow"></i>
                                                                            </Link>
                                                                            <Link className="overlay-btn" href={`/blog-1/${post.slug}`}>
                                                                            Read More
                                                                            <i className="icon-right-arrow"></i>
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                ))}
                                                            </div>
                                                            
                                                            <div className="col-xl-6 col-lg-6">
                                                                {blogPosts.slice(1).map((post) => (
                                                                <div className="single-blog-style2" key={post.slug}>
                                                                    <div className="top-box">
                                                                        <div className="category">
                                                                            <div className="icon"><i className="icon-hashtag"></i></div>
                                                                            <h6>{post.category}</h6>
                                                                        </div>
                                                                        <div className="date">
                                                                            <div className="icon"><i className="fa fa-calendar"></i></div>
                                                                            <h6>{post.date}</h6>
                                                                        </div>
                                                                    </div>
                                                                    <div className="title-box">
                                                                        <h3>
                                                                            <Link href={`/blog-1/${post.slug}`}>{post.title}</Link>
                                                                        </h3>
                                                                    </div>
                                                                    <div className="text-box">
                                                                        <p>{post.excerpt}</p>
                                                                    </div>
                                                                    <div className="btn-box">
                                                                        <Link className="show-btn" href={`/blog-1/${post.slug}`}>
                                                                            {post.readTime}
                                                                            <i className="icon-right-arrow"></i>
                                                                        </Link>
                                                                        <Link className="overlay-btn" href={`/blog-1/${post.slug}`}>
                                                                            Read More
                                                                            <i className="icon-right-arrow"></i>
                                                                        </Link>
                                                                    </div>
                                                                    <div className="border-line"></div>
                                                                </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="single-item">
                                                        <div className="row">
                                                            <div className="col-xl-6 col-lg-6">
                                                                {blogPosts.slice(0, 1).map((post) => (
                                                                <div className="single-blog-style1" key={post.slug}>
                                                                    <div className="img-box">
                                                                        <Image
                                                                        src={post.image as string}
                                                                        alt="Image"
                                                                        width={370}
                                                                        height={270}
                                                                        priority
                                                                        />
                                                                    </div>
                                                                    <div className="content-box">
                                                                        <div className="top-box">
                                                                            <div className="category">
                                                                                <div className="icon"><i className="icon-hashtag"></i></div>
                                                                                <h6>{post.category}</h6>
                                                                            </div>
                                                                            <div className="date">
                                                                                <div className="icon"><i className="fa fa-calendar"></i></div>
                                                                                <h6>{post.date}</h6>
                                                                            </div>
                                                                        </div>
                                                                        <div className="title-box">
                                                                            <h3>
                                                                            <Link href={`/blog-1/${post.slug}`}>{post.title}</Link>
                                                                            </h3>
                                                                        </div>
                                                                        <div className="text-box">
                                                                            <p>{post.excerpt}</p>
                                                                        </div>
                                                                        <div className="btn-box">
                                                                            <Link className="show-btn" href={`/blog-1/${post.slug}`}>
                                                                            {post.readTime}
                                                                            <i className="icon-right-arrow"></i>
                                                                            </Link>
                                                                            <Link className="overlay-btn" href={`/blog-1/${post.slug}`}>
                                                                            Read More
                                                                            <i className="icon-right-arrow"></i>
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                ))}
                                                            </div>
                                                            
                                                            <div className="col-xl-6 col-lg-6">
                                                                {blogPosts.slice(1).map((post) => (
                                                                <div className="single-blog-style2" key={post.slug}>
                                                                    <div className="top-box">
                                                                        <div className="category">
                                                                            <div className="icon"><i className="icon-hashtag"></i></div>
                                                                            <h6>{post.category}</h6>
                                                                        </div>
                                                                        <div className="date">
                                                                            <div className="icon"><i className="fa fa-calendar"></i></div>
                                                                            <h6>{post.date}</h6>
                                                                        </div>
                                                                    </div>
                                                                    <div className="title-box">
                                                                        <h3>
                                                                            <Link href={`/blog-1/${post.slug}`}>{post.title}</Link>
                                                                        </h3>
                                                                    </div>
                                                                    <div className="text-box">
                                                                        <p>{post.excerpt}</p>
                                                                    </div>
                                                                    <div className="btn-box">
                                                                        <Link className="show-btn" href={`/blog-1/${post.slug}`}>
                                                                            {post.readTime}
                                                                            <i className="icon-right-arrow"></i>
                                                                        </Link>
                                                                        <Link className="overlay-btn" href={`/blog-1/${post.slug}`}>
                                                                            Read More
                                                                            <i className="icon-right-arrow"></i>
                                                                        </Link>
                                                                    </div>
                                                                    <div className="border-line"></div>
                                                                </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="single-item">
                                                        <div className="row">
                                                            <div className="col-xl-6 col-lg-6">
                                                                {blogPosts.slice(0, 1).map((post) => (
                                                                <div className="single-blog-style1" key={post.slug}>
                                                                    <div className="img-box">
                                                                        <Image
                                                                        src={post.image as string}
                                                                        alt="Image"
                                                                        width={370}
                                                                        height={270}
                                                                        priority
                                                                        />
                                                                    </div>
                                                                    <div className="content-box">
                                                                        <div className="top-box">
                                                                            <div className="category">
                                                                                <div className="icon"><i className="icon-hashtag"></i></div>
                                                                                <h6>{post.category}</h6>
                                                                            </div>
                                                                            <div className="date">
                                                                                <div className="icon"><i className="fa fa-calendar"></i></div>
                                                                                <h6>{post.date}</h6>
                                                                            </div>
                                                                        </div>
                                                                        <div className="title-box">
                                                                            <h3>
                                                                            <Link href={`/blog-1/${post.slug}`}>{post.title}</Link>
                                                                            </h3>
                                                                        </div>
                                                                        <div className="text-box">
                                                                            <p>{post.excerpt}</p>
                                                                        </div>
                                                                        <div className="btn-box">
                                                                            <Link className="show-btn" href={`/blog-1/${post.slug}`}>
                                                                            {post.readTime}
                                                                            <i className="icon-right-arrow"></i>
                                                                            </Link>
                                                                            <Link className="overlay-btn" href={`/blog-1/${post.slug}`}>
                                                                            Read More
                                                                            <i className="icon-right-arrow"></i>
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                ))}
                                                            </div>
                                                            
                                                            <div className="col-xl-6 col-lg-6">
                                                                {blogPosts.slice(1).map((post) => (
                                                                <div className="single-blog-style2" key={post.slug}>
                                                                    <div className="top-box">
                                                                        <div className="category">
                                                                            <div className="icon"><i className="icon-hashtag"></i></div>
                                                                            <h6>{post.category}</h6>
                                                                        </div>
                                                                        <div className="date">
                                                                            <div className="icon"><i className="fa fa-calendar"></i></div>
                                                                            <h6>{post.date}</h6>
                                                                        </div>
                                                                    </div>
                                                                    <div className="title-box">
                                                                        <h3>
                                                                            <Link href={`/blog-1/${post.slug}`}>{post.title}</Link>
                                                                        </h3>
                                                                    </div>
                                                                    <div className="text-box">
                                                                        <p>{post.excerpt}</p>
                                                                    </div>
                                                                    <div className="btn-box">
                                                                        <Link className="show-btn" href={`/blog-1/${post.slug}`}>
                                                                            {post.readTime}
                                                                            <i className="icon-right-arrow"></i>
                                                                        </Link>
                                                                        <Link className="overlay-btn" href={`/blog-1/${post.slug}`}>
                                                                            Read More
                                                                            <i className="icon-right-arrow"></i>
                                                                        </Link>
                                                                    </div>
                                                                    <div className="border-line"></div>
                                                                </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            </Swiper>
                                            <div className="owl-nav-style-one">
                                                <div className="owl-nav disabled">
                                                    <button className="owl-prev"><span className="left icon-arrow-left"></span></button>
                                                    <button className="owl-next"><span className="icon-arrow-right"></span></button>
                                                </div>
                                            </div>
                                        </div>

                                        
                                        <div className="col-xl-4 col-lg-6">
                                            <div className="blog-style1-subscribe">
                                                <div className="shape1">
                                                    <Image src="/assets/images/shapes/blog-v1-shape1.png" className="float-bob-x" alt="Shape" width={150} height={118} priority />
                                                </div>
                                                <div className="shape2">
                                                    <Image src="/assets/images/shapes/blog-v1-shape2.png" className="zoominout" alt="Shape" width={200} height={210} priority />
                                                </div>
                                                <div className="shape3">
                                                    <Image src="/assets/images/shapes/blog-v1-shape3.png" className="zoominout" alt="Shape" width={320} height={265} priority />
                                                </div>
                                                <div className="top-box">
                                                    <h3>Subscribe Us</h3>
                                                    <p>Get updates in your inbox diectly.</p>
                                                </div>
                                                <div className="blog-style1-subscribe__inner">
                                                    <ul className="clearfix">
                                                        <li>
                                                            <div className="icon">
                                                                <i className="icon-check"></i>
                                                            </div>
                                                            <p>Special Promotions</p>
                                                        </li>
                                                        <li>
                                                            <div className="icon">
                                                                <i className="icon-check"></i>
                                                            </div>
                                                            <p>Exclusive Market Insights</p>
                                                        </li>
                                                        <li>
                                                            <div className="icon">
                                                                <i className="icon-check"></i>
                                                            </div>
                                                            <p>Expert Trading Tips</p>
                                                        </li>
                                                    </ul>
                                                    <div className="blog-style1-subscribe-form">
                                                        <form action="#" method="POST">
                                                            <div className="form-group">
                                                                <input type="email" name="email"
                                                                    placeholder="Email address..." />
                                                            </div>
                                                            <div className="checked-box1">
                                                                <input type="checkbox" name="agree"
                                                                    id="termsconditions3" />
                                                                <label htmlFor="termsconditions3">
                                                                    <span></span>I agree terms & conditions.
                                                                </label>
                                                            </div>
                                                            <div className="btn-box">
                                                                <button className="submit btn-one">
                                                                    <span className="txt">
                                                                        Subscribe
                                                                        <i className="icon-right-arrow"></i>
                                                                    </span>
                                                                </button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            )}
                            
                            {activeTab === "technical-analysis" && (
                            <div className="tab-content-box-item tab-content-box-item-active fadeIn" id="technical-analysis">
                                <div className="blog-style1-tab-content-box-item">
                                    <div className="row">
                                        <div className="col-xl-8 relative">
                                            <Swiper {...swiperOptions} className="blog-style1-carousel">
                                                <SwiperSlide>
                                                    <div className="single-item">
                                                        <div className="row">
                                                            <div className="col-xl-6 col-lg-6">
                                                                {blogPosts.slice(0, 1).map((post) => (
                                                                <div className="single-blog-style1" key={post.slug}>
                                                                    <div className="img-box">
                                                                        <Image
                                                                        src={post.image as string}
                                                                        alt="Image"
                                                                        width={370}
                                                                        height={270}
                                                                        priority
                                                                        />
                                                                    </div>
                                                                    <div className="content-box">
                                                                        <div className="top-box">
                                                                            <div className="category">
                                                                                <div className="icon"><i className="icon-hashtag"></i></div>
                                                                                <h6>{post.category}</h6>
                                                                            </div>
                                                                            <div className="date">
                                                                                <div className="icon"><i className="fa fa-calendar"></i></div>
                                                                                <h6>{post.date}</h6>
                                                                            </div>
                                                                        </div>
                                                                        <div className="title-box">
                                                                            <h3>
                                                                            <Link href={`/blog-1/${post.slug}`}>{post.title}</Link>
                                                                            </h3>
                                                                        </div>
                                                                        <div className="text-box">
                                                                            <p>{post.excerpt}</p>
                                                                        </div>
                                                                        <div className="btn-box">
                                                                            <Link className="show-btn" href={`/blog-1/${post.slug}`}>
                                                                            {post.readTime}
                                                                            <i className="icon-right-arrow"></i>
                                                                            </Link>
                                                                            <Link className="overlay-btn" href={`/blog-1/${post.slug}`}>
                                                                            Read More
                                                                            <i className="icon-right-arrow"></i>
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                ))}
                                                            </div>
                                                            
                                                            <div className="col-xl-6 col-lg-6">
                                                                {blogPosts.slice(1).map((post) => (
                                                                <div className="single-blog-style2" key={post.slug}>
                                                                    <div className="top-box">
                                                                        <div className="category">
                                                                            <div className="icon"><i className="icon-hashtag"></i></div>
                                                                            <h6>{post.category}</h6>
                                                                        </div>
                                                                        <div className="date">
                                                                            <div className="icon"><i className="fa fa-calendar"></i></div>
                                                                            <h6>{post.date}</h6>
                                                                        </div>
                                                                    </div>
                                                                    <div className="title-box">
                                                                        <h3>
                                                                            <Link href={`/blog-1/${post.slug}`}>{post.title}</Link>
                                                                        </h3>
                                                                    </div>
                                                                    <div className="text-box">
                                                                        <p>{post.excerpt}</p>
                                                                    </div>
                                                                    <div className="btn-box">
                                                                        <Link className="show-btn" href={`/blog-1/${post.slug}`}>
                                                                            {post.readTime}
                                                                            <i className="icon-right-arrow"></i>
                                                                        </Link>
                                                                        <Link className="overlay-btn" href={`/blog-1/${post.slug}`}>
                                                                            Read More
                                                                            <i className="icon-right-arrow"></i>
                                                                        </Link>
                                                                    </div>
                                                                    <div className="border-line"></div>
                                                                </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="single-item">
                                                        <div className="row">
                                                            <div className="col-xl-6 col-lg-6">
                                                                {blogPosts.slice(0, 1).map((post) => (
                                                                <div className="single-blog-style1" key={post.slug}>
                                                                    <div className="img-box">
                                                                        <Image
                                                                        src={post.image as string}
                                                                        alt="Image"
                                                                        width={370}
                                                                        height={270}
                                                                        priority
                                                                        />
                                                                    </div>
                                                                    <div className="content-box">
                                                                        <div className="top-box">
                                                                            <div className="category">
                                                                                <div className="icon"><i className="icon-hashtag"></i></div>
                                                                                <h6>{post.category}</h6>
                                                                            </div>
                                                                            <div className="date">
                                                                                <div className="icon"><i className="fa fa-calendar"></i></div>
                                                                                <h6>{post.date}</h6>
                                                                            </div>
                                                                        </div>
                                                                        <div className="title-box">
                                                                            <h3>
                                                                            <Link href={`/blog-1/${post.slug}`}>{post.title}</Link>
                                                                            </h3>
                                                                        </div>
                                                                        <div className="text-box">
                                                                            <p>{post.excerpt}</p>
                                                                        </div>
                                                                        <div className="btn-box">
                                                                            <Link className="show-btn" href={`/blog-1/${post.slug}`}>
                                                                            {post.readTime}
                                                                            <i className="icon-right-arrow"></i>
                                                                            </Link>
                                                                            <Link className="overlay-btn" href={`/blog-1/${post.slug}`}>
                                                                            Read More
                                                                            <i className="icon-right-arrow"></i>
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                ))}
                                                            </div>
                                                            
                                                            <div className="col-xl-6 col-lg-6">
                                                                {blogPosts.slice(1).map((post) => (
                                                                <div className="single-blog-style2" key={post.slug}>
                                                                    <div className="top-box">
                                                                        <div className="category">
                                                                            <div className="icon"><i className="icon-hashtag"></i></div>
                                                                            <h6>{post.category}</h6>
                                                                        </div>
                                                                        <div className="date">
                                                                            <div className="icon"><i className="fa fa-calendar"></i></div>
                                                                            <h6>{post.date}</h6>
                                                                        </div>
                                                                    </div>
                                                                    <div className="title-box">
                                                                        <h3>
                                                                            <Link href={`/blog-1/${post.slug}`}>{post.title}</Link>
                                                                        </h3>
                                                                    </div>
                                                                    <div className="text-box">
                                                                        <p>{post.excerpt}</p>
                                                                    </div>
                                                                    <div className="btn-box">
                                                                        <Link className="show-btn" href={`/blog-1/${post.slug}`}>
                                                                            {post.readTime}
                                                                            <i className="icon-right-arrow"></i>
                                                                        </Link>
                                                                        <Link className="overlay-btn" href={`/blog-1/${post.slug}`}>
                                                                            Read More
                                                                            <i className="icon-right-arrow"></i>
                                                                        </Link>
                                                                    </div>
                                                                    <div className="border-line"></div>
                                                                </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="single-item">
                                                        <div className="row">
                                                            <div className="col-xl-6 col-lg-6">
                                                                {blogPosts.slice(0, 1).map((post) => (
                                                                <div className="single-blog-style1" key={post.slug}>
                                                                    <div className="img-box">
                                                                        <Image
                                                                        src={post.image as string}
                                                                        alt="Image"
                                                                        width={370}
                                                                        height={270}
                                                                        priority
                                                                        />
                                                                    </div>
                                                                    <div className="content-box">
                                                                        <div className="top-box">
                                                                            <div className="category">
                                                                                <div className="icon"><i className="icon-hashtag"></i></div>
                                                                                <h6>{post.category}</h6>
                                                                            </div>
                                                                            <div className="date">
                                                                                <div className="icon"><i className="fa fa-calendar"></i></div>
                                                                                <h6>{post.date}</h6>
                                                                            </div>
                                                                        </div>
                                                                        <div className="title-box">
                                                                            <h3>
                                                                            <Link href={`/blog-1/${post.slug}`}>{post.title}</Link>
                                                                            </h3>
                                                                        </div>
                                                                        <div className="text-box">
                                                                            <p>{post.excerpt}</p>
                                                                        </div>
                                                                        <div className="btn-box">
                                                                            <Link className="show-btn" href={`/blog-1/${post.slug}`}>
                                                                            {post.readTime}
                                                                            <i className="icon-right-arrow"></i>
                                                                            </Link>
                                                                            <Link className="overlay-btn" href={`/blog-1/${post.slug}`}>
                                                                            Read More
                                                                            <i className="icon-right-arrow"></i>
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                ))}
                                                            </div>
                                                            
                                                            <div className="col-xl-6 col-lg-6">
                                                                {blogPosts.slice(1).map((post) => (
                                                                <div className="single-blog-style2" key={post.slug}>
                                                                    <div className="top-box">
                                                                        <div className="category">
                                                                            <div className="icon"><i className="icon-hashtag"></i></div>
                                                                            <h6>{post.category}</h6>
                                                                        </div>
                                                                        <div className="date">
                                                                            <div className="icon"><i className="fa fa-calendar"></i></div>
                                                                            <h6>{post.date}</h6>
                                                                        </div>
                                                                    </div>
                                                                    <div className="title-box">
                                                                        <h3>
                                                                            <Link href={`/blog-1/${post.slug}`}>{post.title}</Link>
                                                                        </h3>
                                                                    </div>
                                                                    <div className="text-box">
                                                                        <p>{post.excerpt}</p>
                                                                    </div>
                                                                    <div className="btn-box">
                                                                        <Link className="show-btn" href={`/blog-1/${post.slug}`}>
                                                                            {post.readTime}
                                                                            <i className="icon-right-arrow"></i>
                                                                        </Link>
                                                                        <Link className="overlay-btn" href={`/blog-1/${post.slug}`}>
                                                                            Read More
                                                                            <i className="icon-right-arrow"></i>
                                                                        </Link>
                                                                    </div>
                                                                    <div className="border-line"></div>
                                                                </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="single-item">
                                                        <div className="row">
                                                            <div className="col-xl-6 col-lg-6">
                                                                {blogPosts.slice(0, 1).map((post) => (
                                                                <div className="single-blog-style1" key={post.slug}>
                                                                    <div className="img-box">
                                                                        <Image
                                                                        src={post.image as string}
                                                                        alt="Image"
                                                                        width={370}
                                                                        height={270}
                                                                        priority
                                                                        />
                                                                    </div>
                                                                    <div className="content-box">
                                                                        <div className="top-box">
                                                                            <div className="category">
                                                                                <div className="icon"><i className="icon-hashtag"></i></div>
                                                                                <h6>{post.category}</h6>
                                                                            </div>
                                                                            <div className="date">
                                                                                <div className="icon"><i className="fa fa-calendar"></i></div>
                                                                                <h6>{post.date}</h6>
                                                                            </div>
                                                                        </div>
                                                                        <div className="title-box">
                                                                            <h3>
                                                                            <Link href={`/blog-1/${post.slug}`}>{post.title}</Link>
                                                                            </h3>
                                                                        </div>
                                                                        <div className="text-box">
                                                                            <p>{post.excerpt}</p>
                                                                        </div>
                                                                        <div className="btn-box">
                                                                            <Link className="show-btn" href={`/blog-1/${post.slug}`}>
                                                                            {post.readTime}
                                                                            <i className="icon-right-arrow"></i>
                                                                            </Link>
                                                                            <Link className="overlay-btn" href={`/blog-1/${post.slug}`}>
                                                                            Read More
                                                                            <i className="icon-right-arrow"></i>
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                ))}
                                                            </div>
                                                            
                                                            <div className="col-xl-6 col-lg-6">
                                                                {blogPosts.slice(1).map((post) => (
                                                                <div className="single-blog-style2" key={post.slug}>
                                                                    <div className="top-box">
                                                                        <div className="category">
                                                                            <div className="icon"><i className="icon-hashtag"></i></div>
                                                                            <h6>{post.category}</h6>
                                                                        </div>
                                                                        <div className="date">
                                                                            <div className="icon"><i className="fa fa-calendar"></i></div>
                                                                            <h6>{post.date}</h6>
                                                                        </div>
                                                                    </div>
                                                                    <div className="title-box">
                                                                        <h3>
                                                                            <Link href={`/blog-1/${post.slug}`}>{post.title}</Link>
                                                                        </h3>
                                                                    </div>
                                                                    <div className="text-box">
                                                                        <p>{post.excerpt}</p>
                                                                    </div>
                                                                    <div className="btn-box">
                                                                        <Link className="show-btn" href={`/blog-1/${post.slug}`}>
                                                                            {post.readTime}
                                                                            <i className="icon-right-arrow"></i>
                                                                        </Link>
                                                                        <Link className="overlay-btn" href={`/blog-1/${post.slug}`}>
                                                                            Read More
                                                                            <i className="icon-right-arrow"></i>
                                                                        </Link>
                                                                    </div>
                                                                    <div className="border-line"></div>
                                                                </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            </Swiper>
                                            <div className="owl-nav-style-one">
                                                <div className="owl-nav disabled">
                                                    <button className="owl-prev"><span className="left icon-arrow-left"></span></button>
                                                    <button className="owl-next"><span className="icon-arrow-right"></span></button>
                                                </div>
                                            </div>
                                        </div>

                                        
                                        <div className="col-xl-4 col-lg-6">
                                            <div className="blog-style1-subscribe">
                                                <div className="shape1">
                                                    <Image src="/assets/images/shapes/blog-v1-shape1.png" className="float-bob-x" alt="Shape" width={150} height={118} priority />
                                                </div>
                                                <div className="shape2">
                                                    <Image src="/assets/images/shapes/blog-v1-shape2.png" className="zoominout" alt="Shape" width={200} height={210} priority />
                                                </div>
                                                <div className="shape3">
                                                    <Image src="/assets/images/shapes/blog-v1-shape3.png" className="zoominout" alt="Shape" width={320} height={265} priority />
                                                </div>
                                                <div className="top-box">
                                                    <h3>Subscribe Us</h3>
                                                    <p>Get updates in your inbox diectly.</p>
                                                </div>
                                                <div className="blog-style1-subscribe__inner">
                                                    <ul className="clearfix">
                                                        <li>
                                                            <div className="icon">
                                                                <i className="icon-check"></i>
                                                            </div>
                                                            <p>Special Promotions</p>
                                                        </li>
                                                        <li>
                                                            <div className="icon">
                                                                <i className="icon-check"></i>
                                                            </div>
                                                            <p>Exclusive Market Insights</p>
                                                        </li>
                                                        <li>
                                                            <div className="icon">
                                                                <i className="icon-check"></i>
                                                            </div>
                                                            <p>Expert Trading Tips</p>
                                                        </li>
                                                    </ul>
                                                    <div className="blog-style1-subscribe-form">
                                                        <form action="#" method="POST">
                                                            <div className="form-group">
                                                                <input type="email" name="email"
                                                                    placeholder="Email address..." required />
                                                            </div>
                                                            <div className="checked-box1">
                                                                <input type="checkbox" name="agree"
                                                                    id="termsconditions4" />
                                                                <label htmlFor="termsconditions4">
                                                                    <span></span>I agree terms & conditions.
                                                                </label>
                                                            </div>
                                                            <div className="btn-box">
                                                                <button className="submit btn-one">
                                                                    <span className="txt">
                                                                        Subscribe
                                                                        <i className="icon-right-arrow"></i>
                                                                    </span>
                                                                </button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            )}
                            
                            {activeTab === "economic-news" && (
                            <div className="tab-content-box-item tab-content-box-item-active fadeIn" id="economic-news">
                                <div className="blog-style1-tab-content-box-item">
                                    <div className="row">
                                        <div className="col-xl-8 relative">
                                            <Swiper {...swiperOptions} className="blog-style1-carousel">
                                                <SwiperSlide>
                                                    <div className="single-item">
                                                        <div className="row">
                                                            <div className="col-xl-6 col-lg-6">
                                                                {blogPosts.slice(0, 1).map((post) => (
                                                                <div className="single-blog-style1" key={post.slug}>
                                                                    <div className="img-box">
                                                                        <Image
                                                                        src={post.image as string}
                                                                        alt="Image"
                                                                        width={370}
                                                                        height={270}
                                                                        priority
                                                                        />
                                                                    </div>
                                                                    <div className="content-box">
                                                                        <div className="top-box">
                                                                            <div className="category">
                                                                                <div className="icon"><i className="icon-hashtag"></i></div>
                                                                                <h6>{post.category}</h6>
                                                                            </div>
                                                                            <div className="date">
                                                                                <div className="icon"><i className="fa fa-calendar"></i></div>
                                                                                <h6>{post.date}</h6>
                                                                            </div>
                                                                        </div>
                                                                        <div className="title-box">
                                                                            <h3>
                                                                            <Link href={`/blog-1/${post.slug}`}>{post.title}</Link>
                                                                            </h3>
                                                                        </div>
                                                                        <div className="text-box">
                                                                            <p>{post.excerpt}</p>
                                                                        </div>
                                                                        <div className="btn-box">
                                                                            <Link className="show-btn" href={`/blog-1/${post.slug}`}>
                                                                            {post.readTime}
                                                                            <i className="icon-right-arrow"></i>
                                                                            </Link>
                                                                            <Link className="overlay-btn" href={`/blog-1/${post.slug}`}>
                                                                            Read More
                                                                            <i className="icon-right-arrow"></i>
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                ))}
                                                            </div>
                                                            
                                                            <div className="col-xl-6 col-lg-6">
                                                                {blogPosts.slice(1).map((post) => (
                                                                <div className="single-blog-style2" key={post.slug}>
                                                                    <div className="top-box">
                                                                        <div className="category">
                                                                            <div className="icon"><i className="icon-hashtag"></i></div>
                                                                            <h6>{post.category}</h6>
                                                                        </div>
                                                                        <div className="date">
                                                                            <div className="icon"><i className="fa fa-calendar"></i></div>
                                                                            <h6>{post.date}</h6>
                                                                        </div>
                                                                    </div>
                                                                    <div className="title-box">
                                                                        <h3>
                                                                            <Link href={`/blog-1/${post.slug}`}>{post.title}</Link>
                                                                        </h3>
                                                                    </div>
                                                                    <div className="text-box">
                                                                        <p>{post.excerpt}</p>
                                                                    </div>
                                                                    <div className="btn-box">
                                                                        <Link className="show-btn" href={`/blog-1/${post.slug}`}>
                                                                            {post.readTime}
                                                                            <i className="icon-right-arrow"></i>
                                                                        </Link>
                                                                        <Link className="overlay-btn" href={`/blog-1/${post.slug}`}>
                                                                            Read More
                                                                            <i className="icon-right-arrow"></i>
                                                                        </Link>
                                                                    </div>
                                                                    <div className="border-line"></div>
                                                                </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="single-item">
                                                        <div className="row">
                                                            <div className="col-xl-6 col-lg-6">
                                                                {blogPosts.slice(0, 1).map((post) => (
                                                                <div className="single-blog-style1" key={post.slug}>
                                                                    <div className="img-box">
                                                                        <Image
                                                                        src={post.image as string}
                                                                        alt="Image"
                                                                        width={370}
                                                                        height={270}
                                                                        priority
                                                                        />
                                                                    </div>
                                                                    <div className="content-box">
                                                                        <div className="top-box">
                                                                            <div className="category">
                                                                                <div className="icon"><i className="icon-hashtag"></i></div>
                                                                                <h6>{post.category}</h6>
                                                                            </div>
                                                                            <div className="date">
                                                                                <div className="icon"><i className="fa fa-calendar"></i></div>
                                                                                <h6>{post.date}</h6>
                                                                            </div>
                                                                        </div>
                                                                        <div className="title-box">
                                                                            <h3>
                                                                            <Link href={`/blog-1/${post.slug}`}>{post.title}</Link>
                                                                            </h3>
                                                                        </div>
                                                                        <div className="text-box">
                                                                            <p>{post.excerpt}</p>
                                                                        </div>
                                                                        <div className="btn-box">
                                                                            <Link className="show-btn" href={`/blog-1/${post.slug}`}>
                                                                            {post.readTime}
                                                                            <i className="icon-right-arrow"></i>
                                                                            </Link>
                                                                            <Link className="overlay-btn" href={`/blog-1/${post.slug}`}>
                                                                            Read More
                                                                            <i className="icon-right-arrow"></i>
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                ))}
                                                            </div>
                                                            
                                                            <div className="col-xl-6 col-lg-6">
                                                                {blogPosts.slice(1).map((post) => (
                                                                <div className="single-blog-style2" key={post.slug}>
                                                                    <div className="top-box">
                                                                        <div className="category">
                                                                            <div className="icon"><i className="icon-hashtag"></i></div>
                                                                            <h6>{post.category}</h6>
                                                                        </div>
                                                                        <div className="date">
                                                                            <div className="icon"><i className="fa fa-calendar"></i></div>
                                                                            <h6>{post.date}</h6>
                                                                        </div>
                                                                    </div>
                                                                    <div className="title-box">
                                                                        <h3>
                                                                            <Link href={`/blog-1/${post.slug}`}>{post.title}</Link>
                                                                        </h3>
                                                                    </div>
                                                                    <div className="text-box">
                                                                        <p>{post.excerpt}</p>
                                                                    </div>
                                                                    <div className="btn-box">
                                                                        <Link className="show-btn" href={`/blog-1/${post.slug}`}>
                                                                            {post.readTime}
                                                                            <i className="icon-right-arrow"></i>
                                                                        </Link>
                                                                        <Link className="overlay-btn" href={`/blog-1/${post.slug}`}>
                                                                            Read More
                                                                            <i className="icon-right-arrow"></i>
                                                                        </Link>
                                                                    </div>
                                                                    <div className="border-line"></div>
                                                                </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="single-item">
                                                        <div className="row">
                                                            <div className="col-xl-6 col-lg-6">
                                                                {blogPosts.slice(0, 1).map((post) => (
                                                                <div className="single-blog-style1" key={post.slug}>
                                                                    <div className="img-box">
                                                                        <Image
                                                                        src={post.image as string}
                                                                        alt="Image"
                                                                        width={370}
                                                                        height={270}
                                                                        priority
                                                                        />
                                                                    </div>
                                                                    <div className="content-box">
                                                                        <div className="top-box">
                                                                            <div className="category">
                                                                                <div className="icon"><i className="icon-hashtag"></i></div>
                                                                                <h6>{post.category}</h6>
                                                                            </div>
                                                                            <div className="date">
                                                                                <div className="icon"><i className="fa fa-calendar"></i></div>
                                                                                <h6>{post.date}</h6>
                                                                            </div>
                                                                        </div>
                                                                        <div className="title-box">
                                                                            <h3>
                                                                            <Link href={`/blog-1/${post.slug}`}>{post.title}</Link>
                                                                            </h3>
                                                                        </div>
                                                                        <div className="text-box">
                                                                            <p>{post.excerpt}</p>
                                                                        </div>
                                                                        <div className="btn-box">
                                                                            <Link className="show-btn" href={`/blog-1/${post.slug}`}>
                                                                            {post.readTime}
                                                                            <i className="icon-right-arrow"></i>
                                                                            </Link>
                                                                            <Link className="overlay-btn" href={`/blog-1/${post.slug}`}>
                                                                            Read More
                                                                            <i className="icon-right-arrow"></i>
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                ))}
                                                            </div>
                                                            
                                                            <div className="col-xl-6 col-lg-6">
                                                                {blogPosts.slice(1).map((post) => (
                                                                <div className="single-blog-style2" key={post.slug}>
                                                                    <div className="top-box">
                                                                        <div className="category">
                                                                            <div className="icon"><i className="icon-hashtag"></i></div>
                                                                            <h6>{post.category}</h6>
                                                                        </div>
                                                                        <div className="date">
                                                                            <div className="icon"><i className="fa fa-calendar"></i></div>
                                                                            <h6>{post.date}</h6>
                                                                        </div>
                                                                    </div>
                                                                    <div className="title-box">
                                                                        <h3>
                                                                            <Link href={`/blog-1/${post.slug}`}>{post.title}</Link>
                                                                        </h3>
                                                                    </div>
                                                                    <div className="text-box">
                                                                        <p>{post.excerpt}</p>
                                                                    </div>
                                                                    <div className="btn-box">
                                                                        <Link className="show-btn" href={`/blog-1/${post.slug}`}>
                                                                            {post.readTime}
                                                                            <i className="icon-right-arrow"></i>
                                                                        </Link>
                                                                        <Link className="overlay-btn" href={`/blog-1/${post.slug}`}>
                                                                            Read More
                                                                            <i className="icon-right-arrow"></i>
                                                                        </Link>
                                                                    </div>
                                                                    <div className="border-line"></div>
                                                                </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="single-item">
                                                        <div className="row">
                                                            <div className="col-xl-6 col-lg-6">
                                                                {blogPosts.slice(0, 1).map((post) => (
                                                                <div className="single-blog-style1" key={post.slug}>
                                                                    <div className="img-box">
                                                                        <Image
                                                                        src={post.image as string}
                                                                        alt="Image"
                                                                        width={370}
                                                                        height={270}
                                                                        priority
                                                                        />
                                                                    </div>
                                                                    <div className="content-box">
                                                                        <div className="top-box">
                                                                            <div className="category">
                                                                                <div className="icon"><i className="icon-hashtag"></i></div>
                                                                                <h6>{post.category}</h6>
                                                                            </div>
                                                                            <div className="date">
                                                                                <div className="icon"><i className="fa fa-calendar"></i></div>
                                                                                <h6>{post.date}</h6>
                                                                            </div>
                                                                        </div>
                                                                        <div className="title-box">
                                                                            <h3>
                                                                            <Link href={`/blog-1/${post.slug}`}>{post.title}</Link>
                                                                            </h3>
                                                                        </div>
                                                                        <div className="text-box">
                                                                            <p>{post.excerpt}</p>
                                                                        </div>
                                                                        <div className="btn-box">
                                                                            <Link className="show-btn" href={`/blog-1/${post.slug}`}>
                                                                            {post.readTime}
                                                                            <i className="icon-right-arrow"></i>
                                                                            </Link>
                                                                            <Link className="overlay-btn" href={`/blog-1/${post.slug}`}>
                                                                            Read More
                                                                            <i className="icon-right-arrow"></i>
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                ))}
                                                            </div>
                                                            
                                                            <div className="col-xl-6 col-lg-6">
                                                                {blogPosts.slice(1).map((post) => (
                                                                <div className="single-blog-style2" key={post.slug}>
                                                                    <div className="top-box">
                                                                        <div className="category">
                                                                            <div className="icon"><i className="icon-hashtag"></i></div>
                                                                            <h6>{post.category}</h6>
                                                                        </div>
                                                                        <div className="date">
                                                                            <div className="icon"><i className="fa fa-calendar"></i></div>
                                                                            <h6>{post.date}</h6>
                                                                        </div>
                                                                    </div>
                                                                    <div className="title-box">
                                                                        <h3>
                                                                            <Link href={`/blog-1/${post.slug}`}>{post.title}</Link>
                                                                        </h3>
                                                                    </div>
                                                                    <div className="text-box">
                                                                        <p>{post.excerpt}</p>
                                                                    </div>
                                                                    <div className="btn-box">
                                                                        <Link className="show-btn" href={`/blog-1/${post.slug}`}>
                                                                            {post.readTime}
                                                                            <i className="icon-right-arrow"></i>
                                                                        </Link>
                                                                        <Link className="overlay-btn" href={`/blog-1/${post.slug}`}>
                                                                            Read More
                                                                            <i className="icon-right-arrow"></i>
                                                                        </Link>
                                                                    </div>
                                                                    <div className="border-line"></div>
                                                                </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            </Swiper>
                                            <div className="owl-nav-style-one">
                                                <div className="owl-nav disabled">
                                                    <button className="owl-prev"><span className="left icon-arrow-left"></span></button>
                                                    <button className="owl-next"><span className="icon-arrow-right"></span></button>
                                                </div>
                                            </div>
                                        </div>

                                        
                                        <div className="col-xl-4 col-lg-6">
                                            <div className="blog-style1-subscribe">
                                                <div className="shape1">
                                                    <Image src="/assets/images/shapes/blog-v1-shape1.png" className="float-bob-x" alt="Shape" width={150} height={118} priority />
                                                </div>
                                                <div className="shape2">
                                                    <Image src="/assets/images/shapes/blog-v1-shape2.png" className="zoominout" alt="Shape" width={200} height={210} priority />
                                                </div>
                                                <div className="shape3">
                                                    <Image src="/assets/images/shapes/blog-v1-shape3.png" className="zoominout" alt="Shape" width={320} height={265} priority />
                                                </div>
                                                <div className="top-box">
                                                    <h3>Subscribe Us</h3>
                                                    <p>Get updates in your inbox diectly.</p>
                                                </div>
                                                <div className="blog-style1-subscribe__inner">
                                                    <ul className="clearfix">
                                                        <li>
                                                            <div className="icon">
                                                                <i className="icon-check"></i>
                                                            </div>
                                                            <p>Special Promotions</p>
                                                        </li>
                                                        <li>
                                                            <div className="icon">
                                                                <i className="icon-check"></i>
                                                            </div>
                                                            <p>Exclusive Market Insights</p>
                                                        </li>
                                                        <li>
                                                            <div className="icon">
                                                                <i className="icon-check"></i>
                                                            </div>
                                                            <p>Expert Trading Tips</p>
                                                        </li>
                                                    </ul>
                                                    <div className="blog-style1-subscribe-form">
                                                        <form action="#" method="POST">
                                                            <div className="form-group">
                                                                <input type="email" name="email"
                                                                    placeholder="Email address..." required />
                                                            </div>
                                                            <div className="checked-box1">
                                                                <input type="checkbox" name="agree"
                                                                    id="termsconditions5" />
                                                                <label htmlFor="termsconditions5">
                                                                    <span></span>I agree terms & conditions.
                                                                </label>
                                                            </div>
                                                            <div className="btn-box">
                                                                <button className="submit btn-one">
                                                                    <span className="txt">
                                                                        Subscribe
                                                                        <i className="icon-right-arrow"></i>
                                                                    </span>
                                                                </button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            )}


                        </div>

                    </div>
                </div>
            </div>
        </section>
    </>
  )
}