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
    title: "How Global Events are Shaping Commodity Prices",
    category: "Market Analysis",
    date: "15.09.2025",
    readTime: "4 Minutes read",
    image: "/assets/images/blog/blog-v4-1.jpg",
    excerpt:
      "Desire that they cannot foresee all the pain business it will frequently occur...",
  },
  {
    slug: "2",
    title: "The Effect of Fiscal Policies on Stock Market Performance",
    category: "Economic News",
    date: "31.08.2025",
    readTime: "3 Minutes read",
    image: "/assets/images/blog/blog-v4-2.jpg",
    excerpt:
      "Cases are perfectly simple to all distinguish desire that they cannot foresee...",
  },
  {
    slug: "3",
    title: "Understanding Leverage: The Pros and Cons",
    category: "Learning Center",
    date: "23.08.2025",
    readTime: "5 Minutes read",
    image: "/assets/images/blog/blog-v4-3.jpg",
    excerpt:
      "Foresee the pain trouble that are in bound trouble that are bound to ensue...",
  },
  {
    slug: "4",
    title: "Understanding Leverage: The Pros and Cons",
    category: "Learning Center",
    date: "23.08.2025",
    readTime: "5 Minutes read",
    image: "/assets/images/blog/blog-v4-4.jpg",
    excerpt:
      "Foresee the pain trouble that are in bound trouble that are bound to ensue...",
  },
  {
    slug: "5",
    title: "How Global Events are Shaping Commodity Prices",
    category: "Market Analysis",
    date: "15.09.2025",
    readTime: "4 Minutes read",
    image: "/assets/images/blog/blog-v4-5.jpg",
    excerpt:
      "Desire that they cannot foresee all the pain business it will frequently occur...",
  },
  {
    slug: "6",
    title: "The Effect of Fiscal Policies on Stock Market Performance",
    category: "Economic News",
    date: "31.08.2025",
    readTime: "3 Minutes read",
    image: "/assets/images/blog/blog-v4-6.jpg",
    excerpt:
      "Cases are perfectly simple to all distinguish desire that they cannot foresee...",
  },
  {
    slug: "7",
    title: "The Effect of Fiscal Policies on Stock Market Performance",
    category: "Economic News",
    date: "31.08.2025",
    readTime: "3 Minutes read",
    image: "/assets/images/blog/blog-v4-7.jpg",
    excerpt:
      "Cases are perfectly simple to all distinguish desire that they cannot foresee...",
  },
  {
    slug: "8",
    title: "Understanding Leverage: The Pros and Cons",
    category: "Learning Center",
    date: "23.08.2025",
    readTime: "5 Minutes read",
    image: "/assets/images/blog/blog-v4-8.jpg",
    excerpt:
      "Foresee the pain trouble that are in bound trouble that are bound to ensue...",
  },
  {
    slug: "9",
    title: "How Global Events are Shaping Commodity Prices",
    category: "Market Analysis",
    date: "15.09.2025",
    readTime: "4 Minutes read",
    image: "/assets/images/blog/blog-v4-9.jpg",
    excerpt:
      "Desire that they cannot foresee all the pain business it will frequently occur...",
  },
];

export default function Blog_Page_One() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  // Prepare Lightbox slides (all blog images)
  const slides = blogPosts.map((post) => ({ src: post.image }));

  return (
    <div className="body-bg-1">
      <Layout
        headerStyle={1}
        footerStyle={1}
        breadcrumbTitle="Blog"
        breadcrumbTitleTwo="Blog"
      >
        <section className="blog-page-one">
          <div className="container">
            <div className="row">
              {blogPosts.map((post, i) => (
                <div className="col-xl-4 col-lg-6 col-md-6" key={post.slug}>
                  <div className="single-blog-style5 single-blog-style5--style6">
                    {/* ---------- Image Box ---------- */}
                    <div className="img-box relative group">
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={370}
                        height={270}
                        priority
                        className="rounded-md"
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

                    {/* ---------- Content Box ---------- */}
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
                            <i className="fa fa-calendar"></i>
                          </div>
                          <h6>{post.date}</h6>
                        </div>
                      </div>

                      <div className="title-box">
                        <h3>
                          <Link href={`/blog-1/${post.slug}`}>{post.title}</Link>
                        </h3>
                        <p>{post.excerpt}</p>
                      </div>

                      <div className="btn-box">
                        <Link className="show-btn" href={`/blog-1/${post.slug}`}>
                          {post.readTime} <i className="icon-right-arrow"></i>
                        </Link>
                        <Link className="overlay-btn" href={`/blog-1/${post.slug}`}>
                          Read More <i className="icon-right-arrow"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* ---------- Pagination ---------- */}
            <ul className="styled-pagination clearfix">
              <li className="arrow prev">
                <Link href="#">
                  <span className="icon-arrow-left left"></span>
                </Link>
              </li>
              <li className="active">
                <Link href="#">1</Link>
              </li>
              <li>
                <Link href="#">2</Link>
              </li>
              <li>
                <Link href="#" className="border-line">
                  3
                </Link>
              </li>
              <li className="arrow next">
                <Link href="#">
                  <span className="icon-arrow-right right"></span>
                </Link>
              </li>
            </ul>
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
