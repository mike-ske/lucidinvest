// app/blog-1/[slug]/page.tsx
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Layout from "@/components/layout/Layout";

const blogPosts = [
  {
    slug: "1",
    title: "How global events are shaping commodity prices",
    category: "Market Analysis",
    date: "15.09.2025",
    author: "N.Isabella",
    comment: "45 Cmts",
    readTime: "4 Minutes read",
    image: "/assets/images/blog/blog-v5-1.jpg",
  },
  {
    slug: "2",
    title: "The Effect of Fiscal Policies on Stock Market Performance",
    category: "Economic News",
    date: "31.08.2025",
    author: "T.Alive",
    comment: "22 Cmts",
    readTime: "3 Minutes read",
    image: "/assets/images/blog/blog-v5-2.jpg",
  },
  {
    slug: "3",
    title: "Understanding Leverage: The Pros and Cons",
    category: "Learning Center",
    date: "23.08.2025",
    author: "Z.Silva",
    comment: "35 Cmts",
    readTime: "5 Minutes read",
    image: "/assets/images/blog/blog-v5-3.jpg",
  },
  {
    slug: "4",
    title: "Mastering Risk Management in Trading",
    category: "Economic News",
    date: "31.08.2025",
    author: "Watson",
    comment: "12 Cmts",
    readTime: "3 Minutes read",
    image: "/assets/images/blog/blog-v5-4.jpg",
  },
  {
    slug: "5",
    title: "The Effect of Fiscal Policies on Stock Market Performance",
    category: "Economic News",
    date: "31.08.2025",
    author: "T.Alive",
    comment: "22 Cmts",
    readTime: "3 Minutes read",
    image: "/assets/images/blog/blog-v5-5.jpg",
  },
  {
    slug: "6",
    title: "How global events are shaping commodity prices",
    category: "Market Analysis",
    date: "15.09.2025",
    author: "N.Isabella",
    comment: "45 Cmts",
    readTime: "4 Minutes read",
    image: "/assets/images/blog/blog-v4-6.jpg",
  },
  {
    slug: "7",
    title: "Mastering Risk Management in Trading",
    category: "Economic News",
    date: "31.08.2025",
    author: "Watson",
    comment: "12 Cmts",
    readTime: "3 Minutes read",
    image: "/assets/images/blog/blog-v4-7.jpg",
  },
  {
    slug: "8",
    title: "Understanding Leverage: The Pros and Cons",
    category: "Learning Center",
    date: "23.08.2025",
    author: "Z.Silva",
    comment: "35 Cmts",
    readTime: "5 Minutes read",
    image: "/assets/images/blog/blog-v4-8.jpg",
  },
];

// Generate static paths
export async function generateStaticParams() {
  return blogPosts.map(post => ({ slug: post.slug }));
}

// ✅ Server component
export default async function BlogSinglePage_Four({ params }: { params: Promise<{ slug: string }> }) {
  // params is a Promise now
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) return notFound();

  return (
<Layout headerStyle={1} footerStyle={1} breadcrumbTitle={post.title} breadcrumbTitleTwo="Blog">
      <section className="blog-details">
          <div className="container">
            <div className="row">
              {/* Left content */}
              <div className="col-xl-8">
                <div className="blog-details__content">
                  <div className="blog-details-top">
                    <div className="content-box">
                      <div className="top-box">
                        <div className="category">
                          <div className="icon"><i className="icon-hashtag"></i></div>
                          <h6>{post.category}</h6>
                        </div>
                        <ul>
                          <li>
                            <div className="icon"><i className="fa fa-calendar"></i></div>
                            <h6>{post.date}</h6>
                          </li>
                          <li>
                            <div className="icon"><i className="icon-add-user"></i></div>
                            <h6>{post.author}</h6>
                          </li>
                          <li>
                            <div className="icon"><i className="icon-comment"></i></div>
                            <h6>{post.comment}</h6>
                          </li>
                        </ul>
                      </div>
                      <div className="title-box">
                        <h3>{post.title}</h3>
                      </div>
                    </div>
                    <div className="img-box">
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={870}
                        height={500}
                        className="img-fluid"
                      />
                    </div>
                  </div>

                  {/* === Your same static HTML markup === */}
                  <div className="blog-details-text1">
                    <p>
                        Triving and dislike men who are so that beguiled and demoralized welcomed every pain
                        avoided frequently occur that pleasures indignation and dislike men who are so
                        beguiled the charms of pleasure of the moment, so blinded by desire, that they
                        cannot foresee the pain troublethat are bound to ensue; and equal blame belongs to
                        those who fail in their duty through weakness of same as saying through shrinking
                        our being able to do.
                    </p>
                    <p>
                        Foresee the pain trouble that are bound to ensue equal blame belongs to those who
                        fail in their duties which is the same as saying through shrinking annoying
                        consequences.
                    </p>
                    <p>
                        Our being able to do what we like best every pleasure is to be welcomed every pain
                        avoided but in certain that matters to this principle circumstances and owing to the
                        claims.foresee the pain troublethat are bound to ensue equal blame belongs to those
                        who fail in their duty through weakness of will which is the same as saying through
                        shrinking.
                    </p>
                  </div>

                  <div className="blog-details-quote">
                    <div className="blog-details-quote__inner">
                      <div className="text-box">
                        <p>Empower your trading journey with the right tools, strategies, and market insights—trade smarter, not harder.</p>
                      </div>
                      <div className="words-by">
                        <p><span>{post.author},</span> Market Analyst.</p>
                      </div>
                      <div className="icon-box">
                        <Image src="/assets/images/icon/icon-quote.png" alt="Icon" width={95} height={68} />
                      </div>
                    </div>
                  </div>

                  <div className="blog-details-text2">
                    <p>
                      No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but
                      because those who do not know how to pursue pleasure rationally encounter
                      consequences that are extremely painful. Nor again is there anyone who loves or
                      pursues or desires to obtain pain of itself, cause it pain, but because occasionally
                      circumstances.
                    </p>
                  </div>

                  <div className="what-are-fiscal-policies">
                    <div className="title-box">
                        <h3>What Are Fiscal Policies?</h3>
                        <p>To take a trivial example, which of us ever undertaked laborious physical
                            exercise, except that to btain someadvantage from it but who has any right to
                            find fault with a man who chooses to enjoy a pleasure that has no annoying.</p>
                    </div>
                    <div className="list-item">
                        <p className="color">Rationally encounter consequences that are extremely painful,</p>
                        <ul>
                            <li>
                                <div className="icon">
                                    <span className="icon-check-1"><span className="path1"></span><span
                                            className="path2"></span>
                                    </span>
                                </div>
                                <p>Pleasure that has no annoying consequences.</p>
                            </li>
                            <li>
                                <div className="icon">
                                    <span className="icon-check-1"><span className="path1"></span><span
                                            className="path2"></span>
                                    </span>
                                </div>
                                <p>The wise man therefore always holds</p>
                            </li>
                            <li>
                                <div className="icon">
                                    <span className="icon-check-1"><span className="path1"></span><span
                                            className="path2"></span>
                                    </span>
                                </div>
                                <p>
                                    Rejects pleasures to secure other greater pleasures, or else he endures.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="how-fiscal-policies-affect-stock-market">
                    <h3>How Fiscal Policies Affect the Stock Market</h3>
                    <ul className="list-item">
                        <li>
                            <div className="icon">
                                <span className="icon-enter"><span className="path1"></span><span
                                        className="path2"></span><span className="path3"></span><span
                                        className="path4"></span>
                                </span>
                            </div>
                            <p><span>Taxation & Corporate Profits :</span> No one rejects, dislikes, or
                                avoids pleasure itself because pleasure but because those who do not
                                know.</p>
                        </li>
                        <li>
                            <div className="icon">
                                <span className="icon-enter"><span className="path1"></span><span
                                        className="path2"></span><span className="path3"></span><span
                                        className="path4"></span>
                                </span>
                            </div>
                            <p><span>Stock Valuations:</span> Indignation and dislike men who are so
                                beguiled and demoralized by the charms of pleasure of the moment.</p>
                        </li>
                        <li>
                            <div className="icon">
                                <span className="icon-enter"><span className="path1"></span><span
                                        className="path2"></span><span className="path3"></span><span
                                        className="path4"></span>
                                </span>
                            </div>
                            <p><span>Business Confidence:</span> Except to obtain some advantage from
                                it? But who has any right to find fault with a man who chooses to enjoy
                                a pleasure.</p>
                        </li>
                    </ul>
                </div>
                <div className="blog-details-tag">
                    <div className="title">
                        <div className="icon">
                            <Image src="/assets/images/icon/icon-tags.png" alt="Icon" width={14} height={16} priority />
                        </div>
                        <h4>Post Tags</h4>
                    </div>
                    <ul className="clearfix">
                        <li><Link href="#">Day Trading</Link></li>
                        <li><Link href="#">Equities</Link></li>
                        <li><Link href="#">ETF</Link></li>
                    </ul>
                </div>
                <div className="blog-details-author">
                    <div className="blog-details-author-inner">
                        <div className="img-box">
                            <Image src="/assets/images/blog/author-1.jpg" alt="Image" width={120} height={120} priority />
                        </div>
                        <div className="content-box">
                            <div className="top">
                                <h4>Author</h4>
                                <h3>Karter Milton</h3>
                            </div>
                            <div className="text">
                                <p>Every undertakes laborious physical exercise, except to obtain some
                                    advantage from itany right to find fault.</p>
                            </div>
                            <div className="btn-box">
                                <Link href="#">
                                    Read All Post
                                    <i className="icon-right-arrow"></i>
                                </Link>
                            </div>
                            <div className="social-links">
                                <ul>
                                    <li>
                                        <Link href="#">
                                            <span className="icon-facebook"></span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <span className="icon-twitter"></span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <span className="icon-social"></span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="blog-details-prev-next-option">
                    <div className="single-box left">
                        <div className="title-box">
                            <div className="button-box">
                                <Link href="#">
                                    <span className="icon-right-arrow"></span>
                                    Prev Post
                                </Link>
                            </div>
                            <h3>
                                <Link href="#">
                                    How Global Events are Shaping <br />Commodity Prices
                                </Link>
                            </h3>
                        </div>
                    </div>
                    <div className="single-box right">
                        <div className="title-box">
                            <div className="button-box">
                                <Link href="#">
                                    Next Post
                                    <span className="icon-right-arrow"></span>
                                </Link>
                            </div>
                            <h3>
                                <Link href="#">
                                    Understanding Leverage: The <br />Pros and Cons
                                </Link>
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="back-to-blog-post-btn">
                    <Link href="/blog-single">
                        <Image src="/assets/images/icon/menu-1.png" alt="Icon" width={12} height={12} priority />
                        Back to Blog Post
                    </Link>
                </div>
                <div className="comment-box">
                    <div className="inner-title">
                        <h2>Comments</h2>
                    </div>
                    <ul className="outer-box clearfix">
                      
                        <li className="single-comment">
                            <div className="single-comment-inner">
                                <div className="img-box">
                                  <Image src="/assets/images/blog/comment-1.jpg" alt="Image" width={70} height={70} />
                                </div>
                                <div className="content-box">
                                    <div className="title">
                                        <h6><span>Steven Rich,</span> 08 August, 2025 / 10.15 am</h6>
                                        <p>Gain is there anyone who loves or pursues or desires to obtain
                                            pain
                                            of itself, because occur in which toil and pain can procure him
                                            some
                                            great.</p>
                                    </div>
                                    <div className="btn-box">
                                        <Link href="#">
                                            <i className="fa-solid fa fa-reply-all"></i>
                                            Reply
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </li>
                        
                        <li className="single-comment">
                            <div className="single-comment-inner">
                                <div className="img-box">
                                    <Image src="/assets/images/blog/comment-2.jpg" alt="Image" width={70} height={70} />
                                </div>
                                <div className="content-box">
                                    <div className="title">
                                        <h6><span>Liam Benjamin,</span> 10 August, 2025 / 05.30 pm</h6>
                                        <p>Ever undertakes laborious physical exercise, except to obtain
                                            some
                                            advantages from it but who has any right to find fault.</p>
                                    </div>
                                    <div className="btn-box">
                                        <Link href="#">
                                            <i className="fa-solid fa fa-reply-all"></i>
                                            Reply
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </li>
                        
                    </ul>
                </div>
                <div className="add-comment-box">
                    <div className="inner-title">
                        <h3>Leave Your Comments</h3>
                        <p>Your email address will not be published. Required fields are marked *</p>
                    </div>
                    <form id="add-comment-form" action="#">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="input-box">
                                    <textarea name="fcomments" placeholder="Comments"></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="input-box">
                                    <input type="text" name="fname" placeholder="Name" required />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="input-box">
                                    <input type="email" name="femail" placeholder="Email"
                                        required />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="checked-box1">
                                    <input type="checkbox" name="skipper1" id="skipper" defaultChecked />
                                    <label htmlFor="skipper">
                                        <span></span>Save my name, email & website in this browser for the
                                        next time I comment.
                                    </label>
                                </div>
                                <div className="button-box">
                                    <button className="btn-one" type="submit">
                                        <span className="txt">
                                            Post Comment
                                            <i className="icon-right-arrow"></i>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                </div>
              </div>

              {/* Right sidebar */}
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
                              <a href={`/blog-1/${p.slug}`}>{p.title}</a>
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
        </section>
    </Layout>
  );
}
