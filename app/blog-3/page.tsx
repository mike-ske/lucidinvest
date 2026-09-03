"use client";

import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import Image from "next/image";

const blogPosts = [
  {
    slug: "1",
    title: "Global Shocks, Global Prices—Commodities in Motion",
    category: "Market Analysis",
    date: "15.09.2025",
    author: "N.Isabella",
    comment: "45 Cmts",
    readTime: "4 Minutes read",
    image: "/assets/images/blog/blog-v5-1.jpg",
    excerpt: "Desire that they cannot foresee all the pain business it will frequently occur business it will frequently occur that pleasures have to be repudiated...",
  },
  {
    slug: "2",
    title: "Fiscal Fixes, Stock Prices—Performance in Focus",

    category: "Economic News",
    date: "31.08.2025",
    author: "t.maverick",
    comment: "10 Cmts",
    readTime: "3 Minutes read",
    image: "/assets/images/blog/blog-v5-2.jpg",
    excerpt: "Cases are perfectly simple to all distinguishdesire that they cannot foresee beguiled and demoralized by the charms of pleasure of the moment so blinded ...",
  },
  {
    slug: "3",
    title: "Understanding Leverage: The Pros and Cons",
    category: "Learning Center",
    date: "23.08.2025",
    author: "z.olivia",
    comment: "24 Cmts",
    readTime: "5 Minutes read",
    image: "/assets/images/blog/blog-v5-3.jpg",
    excerpt: "Foresee the pain trouble that are in bound trouble that are bound to ensue loves or pursues or desires to obtain pain of itself because it is pain...",
  },
  {
    slug: "4",
    title: "How Global Events are Shaping Commodity Prices",
    category: "Market Analysis",
    date: "15.09.2025",
    author: "N.Isabella",
    comment: "45 Cmts",
    readTime: "4 Minutes read",
    image: "/assets/images/blog/blog-v5-4.jpg",
    excerpt: "Desire that they cannot foresee all the pain business it will frequently occur business it will frequently occur that pleasures have to be repudiated...",
  },
  {
    slug: "5",
    title: "How Global Events are Shaping Commodity ...",
    category: "Economic News",
    date: "31.08.2025",
    author: "t.maverick",
    comment: "31 Cmts",
    readTime: "3 Minutes read",
    image: "/assets/images/blog/blog-v5-5.jpg",
    excerpt: "Cases are perfectly simple to all distinguishdesire that they cannot foresee beguiled and demoralized by the charms of pleasure of the moment so blinded ...",
  },
];

export default function Blog_Page_Three() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  // Lightbox slides (use same images as blog posts)
  const slides = blogPosts.map((post) => ({ src: post.image }));

  return (
    <div className="body-bg-1">
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Blog" breadcrumbTitleTwo="Blog">
        <section className="blog-page-three">
          <div className="container">
            <div className="row">
                <div className="col-xl-8">
                    <div className="blog-page-three__content">
                        {blogPosts.map((post, i) => (
                        <div className="single-blog-page-three" key={post.slug}>
                            <div className="img-box">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    width={770}
                                    height={500}
                                    priority
                                />
                                <div className="overlay-icon">
                                    <Link href="#"
                                    className="lightbox-image"
                                    onClick={() => {
                                        setIndex(i);
                                        setOpen(true);
                                    }}
                                    >
                                    <i className="icon-maximize"></i>
                                    </Link>
                                </div>
                            </div>
                            <div className="content-box">
                                <div className="top-box">
                                    <div className="category">
                                        <div className="icon">
                                            <i className="icon-hashtag"></i>
                                        </div>
                                        <h6>{post.category}</h6>
                                    </div>
                                    <ul>
                                        <li>
                                            <div className="icon">
                                                <i className="fa fa fa-calendar"></i>
                                            </div>
                                            <h6>{post.date}</h6>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <i className="icon-add-user"></i>
                                            </div>
                                            <h6>{post.author}</h6>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <i className="icon-comment"></i>
                                            </div>
                                            <h6>{post.comment}</h6>
                                        </li>
                                    </ul>
                                </div>
                                <div className="title-box">
                                    <h3>
                                        <Link href={`/blog-3/${post.slug}`}>{post.title}</Link>
                                    </h3>
                                    <p>
                                        {post.excerpt}
                                    </p>
                                </div>
                                <div className="btn-box">
                                    <Link className="show-btn" href={`/blog-3/${post.slug}`}>
                                    {post.readTime} <i className="icon-right-arrow"></i>
                                    </Link>
                                    <Link className="overlay-btn" href={`/blog-3/${post.slug}`}>
                                    Read More <i className="icon-right-arrow"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        ))}

                        <ul className="styled-pagination clearfix">
                            <li className="arrow prev">
                                <Link href="#"><span className="icon-arrow-left left"></span></Link>
                            </li>
                            <li className="active"><Link href="#">1</Link></li>
                            <li><Link href="#">2</Link></li>
                            <li><Link href="#" className="border-line">3</Link></li>
                            <li className="arrow next">
                                <Link href="#"><span className="icon-arrow-right right"></span></Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-xl-4">
                <div className="blog-page__sidebar">
                  {/* Search */}
                  <div className="sidebar-search-box-one">
                    <form className="search-form" action="#">
                      <input
                        placeholder="Keyword..."
                        type="text"
                        defaultValue=""
                      />
                      <button type="submit">
                        <i className="icon-search"></i>
                      </button>
                    </form>
                  </div>

                  {/* Categories */}
                  <div className="single-sidebar-box">
                    <div className="sidebar-title">
                      <h3>Categories</h3>
                    </div>
                    <ul className="single-sidebar__categories clearfix">
                      {[
                        "Economic",
                        "Market Analysis",
                        "Trading Strategies",
                        "Technical Analysis",
                        "Economic News",
                        "Learning Center",
                      ].map((cat) => (
                        <li key={cat}>
                          <a href="#">
                            <p>
                              {cat} <span>(05)</span>
                            </p>
                            <div className="icon">
                              <i className="icon-arrow-right"></i>
                            </div>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Popular Posts */}
                  <div className="single-sidebar-box">
                    <div className="sidebar-title">
                      <h3>Popular Post</h3>
                    </div>
                    <ul className="single-sidebar__post clearfix">
                      {blogPosts.map((p) => (
                        <li key={p.slug}>
                          <div className="category">
                            <div className="icon">
                              <i className="icon-hashtag"></i>
                            </div>
                            <h6>{p.category}</h6>
                          </div>
                          <div className="title-box">
                            <h4>
                              <a href={`/blog-3/${p.slug}`}>{p.title}</a>
                            </h4>
                          </div>
                          <div className="btn-box">
                            <a
                              className="show-btn"
                              href={`/blog-3/${p.slug}`}
                            >
                              Read More <i className="icon-right-arrow"></i>
                            </a>
                            <a
                              className="overlay-btn"
                              href={`/blog-3/${p.slug}`}
                            >
                              Read More <i className="icon-right-arrow"></i>
                            </a>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tags */}
                  <div className="single-sidebar-box">
                    <div className="sidebar-title">
                      <h3>Post Tag</h3>
                    </div>
                    <ul className="single-sidebar__tag clearfix">
                      {[
                        "Analytics",
                        "Commodities",
                        "Day Trading",
                        "Equities",
                        "ETF",
                        "Forex",
                        "Futures",
                        "Gold",
                        "Hot Tips",
                        "Index Funds",
                        "New Traders",
                      ].map((tag) => (
                        <li key={tag}>
                          <a href="#">{tag}</a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Subscribe Box */}
                  <div className="subscribe-sidebar-box">
                    <div className="tilte-box">
                      <h3>SubscribeUs</h3>
                      <p>Get updates in your inbox directly.</p>
                    </div>
                    <div className="subscribe-sidebar-form">
                      <form action="#" method="post">
                        <div className="form-group">
                          <input
                            type="email"
                            name="email"
                            placeholder="Email address..."
                            required
                            defaultValue=""
                          />
                        </div>
                        <div className="checked-box1">
                          <input
                            type="checkbox"
                            name="agree"
                            id="agree"
                            defaultChecked
                          />
                          <label htmlFor="agree">
                            <span></span>I agree to terms & conditions.
                          </label>
                        </div>
                        <div className="btn-box">
                          <button className="submit btn-one" type="submit">
                            <span className="txt">Subscribe</span>
                            <i className="icon-right-arrow"></i>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ✅ Lightbox Component */}
          <Lightbox
            open={open}
            index={index}
            close={() => setOpen(false)}
            slides={slides}
          />
        </section>
      </Layout>
    </div>
  );
}
