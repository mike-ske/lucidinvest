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
    title: "How Global Events are Shaping Commodity ...",
    category: "Market Analysis",
    date: "15.09.2025",
    readTime: "4 Minutes read",
    author: "Silver Scott",
    image: "/assets/images/blog/blog-v3-1.jpg",
  },
  {
    slug: "2",
    title: "The Effect of Fiscal Policie on Stock Market ...",
    category: "Economic News",
    date: "31.08.2025",
    readTime: "3 Minutes read",
    author: "z.olivia",
    image: "/assets/images/blog/blog-v3-2.jpg",
  },
  {
    slug: "3",
    title: "Understanding Leverage: The Pros and Cons",
    category: "Learning Center",
    date: "23.08.2025",
    readTime: "5 Minutes read",
    author: "t.maverick",
    image: "/assets/images/blog/blog-v3-3.jpg",
  },
  {
    slug: "4",
    title: "Overcoming Fear & Greed in Trading",
    category: "Learning Center",
    date: "23.08.2025",
    readTime: "5 Minutes read",
    author: "N.Isabella",
    image: "/assets/images/blog/blog-v3-4.jpg",
  },
  {
    slug: "5",
    title: "Understanding Leverage: The Pros & Cons",
    category: "Market Analysis",
    date: "15.09.2025",
    readTime: "4 Minutes read",
    author: "Silver Scott",
    image: "/assets/images/blog/blog-v3-5.jpg",
  },
  {
    slug: "6",
    title: "Overcoming Fear & Greed in Trading",
    category: "Economic News",
    date: "31.08.2025",
    readTime: "3 Minutes read",
    author: "z.olivia",
    image: "/assets/images/blog/blog-v3-6.jpg",
  },
  {
    slug: "7",
    title: "How Global Events are Shaping Commodity...",
    category: "Economic News",
    date: "31.08.2025",
    readTime: "3 Minutes read",
    author: "t.maverick",
    image: "/assets/images/blog/blog-v3-7.jpg",
  },
  {
    slug: "8",
    title: "Effect of Fiscal Policie on Stock Market...",
    category: "Learning Center",
    date: "23.08.2025",
    readTime: "5 Minutes read",
    author: "N.Isabella",
    image: "/assets/images/blog/blog-v3-8.jpg",
  },
  {
    slug: "9",
    title: "How Global Events are Shaping Commodity...",
    category: "Market Analysis",
    date: "15.09.2025",
    readTime: "4 Minutes read",
    author: "Silver Scott",
    image: "/assets/images/blog/blog-v3-9.jpg",
  },
  {
    slug: "10",
    title: "Effect of Fiscal Policies on Stock Market...",
    category: "Economic News",
    date: "31.08.2025",
    readTime: "4 Minutes read",
    author: "z.olivia",
    image: "/assets/images/blog/blog-v3-10.jpg",
  },
  {
    slug: "11",
    title: "Understanding Leverage: The Pros & Cons",
    category: "Learning Center",
    date: "23.08.2025",
    readTime: "4 Minutes read",
    author: "t.maverick",
    image: "/assets/images/blog/blog-v3-11.jpg",
  },
  {
    slug: "12",
    title: "Overcoming Fear & Greed in Trading",
    category: "Market Analysis",
    date: "10.08.2025",
    readTime: "4 Minutes read",
    author: "N.Isabella",
    image: "/assets/images/blog/blog-v3-12.jpg",
  },
];

export default function Blog_Page_Two() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  // Lightbox slides (use same images as blog posts)
  const slides = blogPosts.map((post) => ({ src: post.image }));

  return (
<div className="body-bg-1">
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Blog" breadcrumbTitleTwo="Blog">
        <section className="blog-page-two">
          <div className="container">
            <div className="row">
              {blogPosts.map((post, i) => (
                <div className="col-xl-3 col-lg-6 col-md-6" key={post.slug}>
                  <div className="single-blog-style4">
                    <div className="category-box">
                      <div className="icon">
                        <span className="icon-hashtag"></span>
                      </div>
                      <h6>{post.category}</h6>
                    </div>

                    <div className="img-box relative group">
                      <Image
                        src={post.image}
                        alt={post.title}
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
                            <i className="fa fa-calendar"></i>
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
                          <Link href={`/blog-2/${post.slug}`}>{post.title}</Link>
                        </h3>
                      </div>

                      <div className="btn-box">
                        <Link className="show-btn" href={`/blog-2/${post.slug}`}>
                          {post.readTime} <i className="icon-right-arrow"></i>
                        </Link>
                        <Link className="overlay-btn" href={`/blog-2/${post.slug}`}>
                          Read More <i className="icon-right-arrow"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

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
