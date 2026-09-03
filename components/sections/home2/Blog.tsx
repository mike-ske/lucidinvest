"use client";

import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import FadeIn from "@/components/elements/FadeIn";
import Image from "next/image";
import Link from "next/link";

export const blogPosts = [
  {
    slug: "1",
    title: "How global events are shaping commodity prices",
    category: "Market Analysis",
    date: "15.09.2025",
    readTime: "4 Minutes read",
    image: "/assets/images/blog/blog-v2-1.jpg",
    excerpt: "Desire that they cannot foresee all the pain...",
  },
  {
    slug: "2",
    title: "The Effect of Fiscal Policies on Stock Market Performance",
    category: "Economic News",
    date: "31.08.2025",
    readTime: "3 Minutes read",
    image: "/assets/images/blog/blog-v2-2.jpg",
    excerpt: "Cases are perfectly simple to all distinguish...",
  },
  {
    slug: "3",
    title: "Understanding Leverage: The Pros and Cons",
    category: "Learning Center",
    date: "23.08.2025",
    readTime: "5 Minutes read",
    image: "/assets/images/blog/blog-v2-3.jpg",
    excerpt: "Foresee the pain trouble that are in bound...",
  },
  {
    slug: "4",
    title: "Mastering Risk Management in Trading",
    category: "Economic News",
    date: "31.08.2025",
    readTime: "3 Minutes read",
    image: "/assets/images/blog/blog-v2-4.jpg",
    excerpt: "Simple to all distinguish desire buisness...",
  },
];


export default function Blog() {

   const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    // Lightbox slides (use same images as blog posts)
    const slides = blogPosts.map((post) => ({ src: post.image }));

  return (
    <>
        <section className="blog-style2">
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
                    <div className="col-xl-6 col-lg-6 col-md-6" key={post.slug}>
                        <FadeIn delay={0.0}>
                        <div className="single-blog-style3">
                            <div className="img-box">
                                <Image
                                src={post.image as string}
                                alt="Image"
                                width={170}
                                height={170}
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
                                    <div className="date">
                                        <div className="icon">
                                            <i className="fa fa fa-calendar"></i>
                                        </div>
                                        <h6>{post.date}</h6>
                                    </div>
                                </div>
                                <div className="title-box">
                                    <h3>
                                        <Link href={`/blog-4/${post.slug}`}>{post.title}</Link>
                                    </h3>
                                </div>
                                <div className="text-box">
                                    <p>{post.excerpt}</p>
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