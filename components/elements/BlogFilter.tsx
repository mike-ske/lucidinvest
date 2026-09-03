import { useState } from "react";
import Isotope from "isotope-layout";
import { useEffect, useRef, useCallback } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Image from "next/image";
import Link from "next/link";

export default function Blog_Masonry_Filter() {

     const isotope = useRef<Isotope | null>(null);
      const [filterKey, setFilterKey] = useState("*");
    
      // Initialize Isotope
      useEffect(() => {
        const iso = new Isotope(".items-container", {
          itemSelector: ".masonry-item",
          percentPosition: true,
          masonry: { columnWidth: ".masonry-item" },
          transitionDuration: "0.75s",
        });
        isotope.current = iso;
    
        return () => iso.destroy();
      }, []);
    
      const handleFilterKeyChange = useCallback(
        (key: string) => () => setFilterKey(key),
        []
      );
    
      const activeBtn = (value: string) => (value === filterKey ? "filter active" : "filter");

    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    const slides = [
        { src: "/assets/images/news/news-6.jpg" },
        { src: "/assets/images/news/news-19.jpg" },
        { src: "/assets/images/news/news-7.jpg" },
        { src: "/assets/images/news/news-20.jpg" },
        { src: "/assets/images/news/news-11.jpg" },
        { src: "/assets/images/news/news-23.jpg" },
        { src: "/assets/images/news/news-22.jpg" },
        { src: "/assets/images/news/news-21.jpg" },
    ];
    return (
        <>
            <div className="auto-container">
                <div className="sortable-masonry">
                    <div className="filters">
                        <ul className="filter-tabs filter-btns clearfix">
                        <li className={activeBtn("*")} onClick={handleFilterKeyChange("*")}>
                            View All<span>[06]</span>
                        </li>
                        <li className={activeBtn("banking")} onClick={handleFilterKeyChange("banking")}>
                            Banking<span>[05]</span>
                        </li>
                        <li className={activeBtn("entertainment")} onClick={handleFilterKeyChange("entertainment")}>
                            Entertainment<span>[04]</span>
                        </li>
                        <li className={activeBtn("finance")} onClick={handleFilterKeyChange("finance")}>
                            Finance<span>[04]</span>
                        </li>
                        <li className={activeBtn("healthcare")} onClick={handleFilterKeyChange("healthcare")}>
                            Healthcare<span>[05]</span>
                        </li>
                        <li className={activeBtn("marketing")} onClick={handleFilterKeyChange("marketing")}>
                            Marketing<span>[04]</span>
                        </li>
                        <li className={activeBtn("transporatation")} onClick={handleFilterKeyChange("transporatation")}>
                            Transporatation<span>[03]</span>
                        </li>
                        </ul>
                    </div>

                    <div className="items-container row clearfix">
                        <div className="col-lg-4 col-md-6 col-sm-12 masonry-item small-column news-block">
                            <div className="news-block-one wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <figure className="image-box">
                                        <div onClick={() => { setIndex(0); setOpen(true); }} className="cursor-pointer view-btn"><i className="flaticon-zoom"></i></div>
                                        <Image src="/assets/images/news/news-6.jpg" alt="Image" width={370} height={250} priority />
                                    </figure>
                                    <div className="lower-content">
                                        <div className="file-box"><i className="far fa-folder-open"></i><p>Data Engineering</p></div>
                                        <div className="title-box">
                                            <div className="post-date"><p>02</p><span>Jan</span></div>
                                            <h4><Link href="/blog-details">Lucid Global Invest Named as a Global Leader in Big Data</Link></h4>
                                        </div>
                                        <div className="text">
                                            <p>Equal blame belongs too those who fail in their through weakness will shrinking.</p>
                                        </div>
                                        <div className="link"><Link href="/blog-details" className="btn-style-four">Read More<span>+</span></Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 masonry-item small-column news-block">
                            <div className="news-block-one wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <figure className="image-box">
                                        <div onClick={() => { setIndex(1); setOpen(true); }} className="cursor-pointer view-btn"><i className="flaticon-zoom"></i></div>
                                        <Image src="/assets/images/news/news-19.jpg" alt="Image" width={370} height={511} priority />
                                    </figure>
                                    <div className="lower-content">
                                        <div className="file-box"><i className="far fa-folder-open"></i><p>ML Consulting</p></div>
                                        <div className="title-box">
                                            <div className="post-date"><p>01</p><span>Jan</span></div>
                                            <h4><Link href="/blog-details">The Current State of Artificial Intelligence Infographic.</Link></h4>
                                        </div>
                                        <div className="text">
                                            <p>When our power choice untrammelled and then prevents our being able pleasure.</p>
                                        </div>
                                        <div className="link"><Link href="/blog-details" className="btn-style-four">Read More<span>+</span></Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 masonry-item small-column news-block">
                            <div className="news-block-one wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <figure className="image-box">
                                        <div onClick={() => { setIndex(2); setOpen(true); }} className="cursor-pointer view-btn"><i className="flaticon-zoom"></i></div>
                                        <Image src="/assets/images/news/news-7.jpg" alt="Image" width={370} height={250} priority />
                                    </figure>
                                    <div className="lower-content">
                                        <div className="file-box"><i className="far fa-folder-open"></i><p>Data Strategy</p></div>
                                        <div className="title-box">
                                            <div className="post-date"><p>30</p><span>Dec</span></div>
                                            <h4><Link href="/blog-details">Lucid Global Invest as the Winners in Global Agency Awards</Link></h4>
                                        </div>
                                        <div className="text">
                                            <p>Obligations of business it will frequently occur that pleasures have to be repudiated.</p>
                                        </div>
                                        <div className="link"><Link href="/blog-details" className="btn-style-four">Read More<span>+</span></Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 masonry-item small-column news-block">
                            <div className="news-block-one wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <figure className="image-box">
                                        <div onClick={() => { setIndex(3); setOpen(true); }} className="cursor-pointer view-btn"><i className="flaticon-zoom"></i></div>
                                        <Image src="/assets/images/news/news-20.jpg" alt="Image" width={370} height={520} priority />
                                    </figure>
                                    <div className="lower-content">
                                        <div className="file-box"><i className="far fa-folder-open"></i><p>Data Strategy</p></div>
                                        <div className="title-box">
                                            <div className="post-date"><p>31</p><span>Dec</span></div>
                                            <h4><Link href="/blog-details">Lucid Global Invest as the Winners in Global Agency Awards</Link></h4>
                                        </div>
                                        <div className="text">
                                            <p>When our power choice untrammelled and then prevents our being able pleasure.</p>
                                        </div>
                                        <div className="link"><Link href="/blog-details" className="btn-style-four">Read More<span>+</span></Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 masonry-item small-column news-block">
                            <div className="news-block-one wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <figure className="image-box">
                                        <div onClick={() => { setIndex(4); setOpen(true); }} className="cursor-pointer view-btn"><i className="flaticon-zoom"></i></div>
                                        <Image src="/assets/images/news/news-11.jpg" alt="Image" width={370} height={250} priority />
                                    </figure>
                                    <div className="lower-content">
                                        <div className="file-box"><i className="far fa-folder-open"></i><p>Data Strategy</p></div>
                                        <div className="title-box">
                                            <div className="post-date"><p>26</p><span>Dec</span></div>
                                            <h4><Link href="/blog-details">Lucid Global Invest as the Winners in Global Agency Awards</Link></h4>
                                        </div>
                                        <div className="text">
                                            <p>Equal blame belongs too those who fail in their through weakness will shrinking.</p>
                                        </div>
                                        <div className="link"><Link href="/blog-details" className="btn-style-four">Read More<span>+</span></Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 masonry-item small-column news-block">
                            <div className="news-block-one news-block-three wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="lower-content">
                                        <div className="file-box"><i className="far fa-folder-open"></i><p>Data Strategy</p></div>
                                        <div className="title-box">
                                            <div className="post-date"><p>28</p><span>Dec</span></div>
                                            <h4><Link href="/blog-details">How Does License Plate Recognition Work?</Link></h4>
                                        </div>
                                        <div className="text">
                                            <p>Business it will frequently occur that have pleasures to be repudiated.</p>
                                        </div>
                                        <div className="link"><Link href="/blog-details" className="btn-style-four">Read More<span>+</span></Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 masonry-item small-column news-block">
                            <div className="news-block-one wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <figure className="image-box">
                                        <div onClick={() => { setIndex(5); setOpen(true); }} className="cursor-pointer view-btn"><i className="flaticon-zoom"></i></div>
                                        <Image src="/assets/images/news/news-23.jpg" alt="Image" width={370} height={520} priority />
                                    </figure>
                                    <div className="lower-content">
                                        <div className="file-box"><i className="far fa-folder-open"></i><p>ML Consulting</p></div>
                                        <div className="title-box">
                                            <div className="post-date"><p>27</p><span>Dec</span></div>
                                            <h4><Link href="/blog-details">The Current State of Artificial Intelligence. Infographic</Link></h4>
                                        </div>
                                        <div className="text">
                                            <p>Equal blame belongs too those who fail in their through weakness will shrinking.</p>
                                        </div>
                                        <div className="link"><Link href="/blog-details" className="btn-style-four">Read More<span>+</span></Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 masonry-item small-column news-block">
                            <div className="news-block-one wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <figure className="image-box">
                                        <div onClick={() => { setIndex(6); setOpen(true); }} className="cursor-pointer view-btn"><i className="flaticon-zoom"></i></div>
                                        <Image src="/assets/images/news/news-22.jpg" alt="Image" width={370} height={350} priority />
                                    </figure>
                                    <div className="lower-content">
                                        <div className="file-box"><i className="far fa-folder-open"></i><p>Data Engineering</p></div>
                                        <div className="title-box">
                                            <div className="post-date"><p>29</p><span>Dec</span></div>
                                            <h4><Link href="/blog-details">Lucid Global Invest Named as a Global Leader in Big Data</Link></h4>
                                        </div>
                                        <div className="text">
                                            <p>Obligations of business it will frequently occur that pleasures have to be repudiated.</p>
                                        </div>
                                        <div className="link"><Link href="/blog-details" className="btn-style-four">Read More<span>+</span></Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 masonry-item small-column news-block">
                            <div className="news-block-one wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <figure className="image-box">
                                        <div onClick={() => { setIndex(7); setOpen(true); }} className="cursor-pointer view-btn"><i className="flaticon-zoom"></i></div>
                                        <Image src="/assets/images/news/news-21.jpg" alt="Image" width={370} height={250} priority />
                                    </figure>
                                    <div className="lower-content">
                                        <div className="file-box"><i className="far fa-folder-open"></i><p>Data Engineering</p></div>
                                        <div className="title-box">
                                            <div className="post-date"><p>25</p><span>Dec</span></div>
                                            <h4><Link href="/blog-details">Lucid Global Invest Named as a Global Leader in Big Data</Link></h4>
                                        </div>
                                        <div className="text">
                                            <p>When our power choice untrammelled and then prevents our being able pleasure.</p>
                                        </div>
                                        <div className="link"><Link href="/blog-details" className="btn-style-four">Read More<span>+</span></Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="more-btn"><Link href="/blog-4" className="theme-btn style-three">Load More<span>+</span></Link></div>
            </div>
            <Lightbox
                open={open}
                index={index}
                close={() => setOpen(false)}
                slides={slides}
            />
        </>
  );
}
