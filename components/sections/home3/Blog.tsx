"use client";

import { useState } from "react";
import FadeIn from "@/components/elements/FadeIn";
import Image from "next/image";
import Link from "next/link";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export const blogPosts = [
  {
    slug: "1",
    title: "How Global Events are Shaping Commodity...",
    category: "Market Analysis",
    author: "N.Isabella",
    date: "15.09.2025",
    readTime: "4 Minutes read",
    image: "/assets/images/blog/blog-v3-1.jpg",
  },
  {
    slug: "2",
    title: "Effect of Fiscal Policies on Stock Market...",
    category: "Economic News",
    author: "t.Alive",
    date: "31.08.2025",
    readTime: "3 Minutes read",
    image: "/assets/images/blog/blog-v3-2.jpg",
  },
  {
    slug: "3",
    title: "Understanding Leverage: The Pros & Cons",
    category: "Learning Center",
    author: "z.Silva",
    date: "23.08.2025",
    readTime: "5 Minutes read",
    image: "/assets/images/blog/blog-v3-3.jpg",
  },
  {
    slug: "4",
    title: "Mastering Risk Management in Trading",
    category: "Economic News",
    author: "Watson",
    date: "31.08.2025",
    readTime: "4 Minutes read",
    image: "/assets/images/blog/blog-v3-4.jpg",
  },
];

export default function Blog() {

    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    // Lightbox slides (use same images as blog posts)
    const slides = blogPosts.map((post) => ({ src: post.image }));

  return (
    <>
        <section className="blog-style3">
            <div className="container">
                <div className="sec-title withtext text-center">
                    <div className="sub-title">
                        <h4>News & Updates</h4>
                    </div>
                    <h2>Latest Insights and Updates</h2>
                    <div className="text">
                        <p>Discover the most competitive prices in the market, update.</p>
                    </div>
                </div>

                <div className="row">

                    {blogPosts.map((post, i) => (
                    <div className="col-xl-3 col-lg-6 col-md-6" key={post.slug}>
                        <FadeIn direction="up" delay={0.0}>
                        <div className="single-blog-style4">
                            <div className="category-box">
                                <div className="icon">
                                    <span className="icon-hashtag"></span>
                                </div>
                                <h6>{post.category}</h6>
                            </div>
                            <div className="img-box">
                                <Image
                                src={post.image as string}
                                alt="Image"
                                width={270}
                                height={240}
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
                                <ul className="meta-box clearfix">
                                    <li>
                                        <div className="icon">
                                            <i className="fa fa fa-calendar"></i>
                                        </div>
                                        <h6>{post.date}</h6>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className="fa fa-user-circle" aria-hidden="true"></i>
                                        </div>
                                        <h6>{post.author}</h6>
                                    </li>
                                </ul>
                                <div className="title-box">
                                    <h3>
                                        <Link href={`/blog-4/${post.slug}`}>{post.title}</Link>
                                    </h3>
                                </div>
                                <div className="btn-box">
                                    <Link className="show-btn" href={`/blog-4/${post.slug}`}>
                                    {post.readTime}
                                    <i className="icon-right-arrow"></i>
                                    </Link>
                                    <Link className="overlay-btn" href={`/blog-4/${post.slug}`}>
                                    Read More
                                    <i className="icon-right-arrow"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        </FadeIn>
                    </div>
                    ))}
                </div>
                <div className="blog-style4__text">
                    <p>
                        Become a Master in Markets,
                        <Link href="/blog-1">
                            Read More Post
                            <i className="icon-right-arrow"></i>
                        </Link>
                    </p>
                </div>
            </div>
            <Lightbox
            open={open}
            index={index}
            close={() => setOpen(false)}
            slides={slides}
            />
        </section>
    </>
  )
}