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
  {
    slug: "5",
    title: "The Effect of Fiscal Policies on Stock Market Performance",
    category: "Economic News",
    date: "31.08.2025",
    readTime: "3 Minutes read",
    image: "/assets/images/blog/blog-v2-5.jpg",
    excerpt: "Cases are perfectly simple to all distinguish...",
  },
  {
    slug: "6",
    title: "How global events are shaping commodity prices",
    category: "Market Analysis",
    date: "15.09.2025",
    readTime: "4 Minutes read",
    image: "/assets/images/blog/blog-v2-6.jpg",
    excerpt: "Desire that they cannot foresee all the pain...",
  },
  {
    slug: "7",
    title: "Mastering Risk Management in Trading",
    category: "Economic News",
    date: "31.08.2025",
    readTime: "3 Minutes read",
    image: "/assets/images/blog/blog-v2-7.jpg",
    excerpt: "Simple to all distinguish desire buisness...",
  },
  {
    slug: "8",
    title: "Understanding Leverage: The Pros and Cons",
    category: "Learning Center",
    date: "23.08.2025",
    readTime: "5 Minutes read",
    image: "/assets/images/blog/blog-v2-8.jpg",
    excerpt: "Foresee the pain trouble that are in bound...",
  },
];

export default function Blog_Page_Four() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  // Lightbox slides (use same images as blog posts)
  const slides = blogPosts.map((post) => ({ src: post.image }));

  return (
    <div className="body-bg-1">
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Blog" breadcrumbTitleTwo="Blog">
        <section className="blog-page-four">
          <div className="container">
            <div className="row">
                {blogPosts.map((post, i) => (
                <div className="col-xl-6 col-lg-6 col-md-6" key={post.slug}>
                    <div className="single-blog-style3">
                        <div className="img-box">
                            <Image
                                src={post.image}
                                alt={post.title}
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
                                {post.readTime} <i className="icon-right-arrow"></i>
                                </Link>
                                <Link className="overlay-btn" href={`/blog-4/${post.slug}`}>
                                Read More <i className="icon-right-arrow"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                ))}
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
