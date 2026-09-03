import Image from "next/image";
import Link from "next/link";
import Isotope from "isotope-layout";
import { useEffect, useRef, useState, useCallback } from "react";

interface PortfolioFilterProps {
  defaultFilter?: 1;
}

export default function PortfolioFilter2({}: PortfolioFilterProps) {
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

  // Apply filter
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: "*" })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);

  const handleFilterKeyChange = useCallback(
    (key: string) => () => setFilterKey(key),
    []
  );

  const activeBtn = (value: string) => (value === filterKey ? "filter active" : "filter");

  return (
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
          <div className="col-lg-4 col-md-6 col-sm-12 masonry-item small-column all finance banking entertainment marketing healthcare">
              <div className="case-block-two">
                  <div className="inner-box">
                      <figure className="image-box">
                          <Image src="/assets/images/gallery/gallery-23.jpg" alt="Image" width={370} height={300} priority />
                          <div className="client-box">
                              <span>Neuro Jump</span>
                              <div className="client-logo"><Image src="/assets/images/icons/icon-1.png" alt="Image" width={40} height={40} priority /></div>
                          </div>
                          <div className="link"><a href="/project-details"><i className="flaticon-hyperlink"></i></a></div>
                          <div className="overlay-layer"></div>
                      </figure>
                      <div className="lower-content">
                          <div className="box">
                              <div className="icon-box"><i className="flaticon-vision"></i></div>
                              <p>Banking & Finance</p>
                              <h4><a href="/project-details">Invoice data capture</a></h4>
                          </div>
                          <div className="text">
                              <p>Equal blame belongs too those who fail in their through weakness.</p>
                          </div>
                          <div className="link"><a href="/project-details" className="btn-style-four">Read More<span>+</span></a></div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 masonry-item small-column all banking healthcare transporatation marketing">
              <div className="case-block-two">
                  <div className="inner-box">
                      <figure className="image-box">
                          <Image src="/assets/images/gallery/gallery-24.jpg" alt="Image" width={370} height={300} priority />
                          <div className="client-box">
                              <span>Neuro Jump</span>
                              <div className="client-logo"><Image src="/assets/images/icons/icon-2.png" alt="Image" width={40} height={40} priority /></div>
                          </div>
                          <div className="link"><a href="/project-details"><i className="flaticon-hyperlink"></i></a></div>
                          <div className="overlay-layer"></div>
                      </figure>
                      <div className="lower-content">
                          <div className="box">
                              <div className="icon-box"><i className="flaticon-vision"></i></div>
                              <p>Healthcare</p>
                              <h4><a href="/project-details">Big data processing</a></h4>
                          </div>
                          <div className="text">
                              <p>To take trivial example, which of us ever undertakes laborios physical.</p>
                          </div>
                          <div className="link"><a href="/project-details" className="btn-style-four">Read More<span>+</span></a></div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 masonry-item small-column all finance entertainment marketing healthcare">
              <div className="case-block-two">
                  <div className="inner-box">
                      <figure className="image-box">
                          <Image src="/assets/images/gallery/gallery-25.jpg" alt="Image" width={370} height={300} priority />
                          <div className="client-box">
                              <span>Neuro Jump</span>
                              <div className="client-logo"><Image src="/assets/images/icons/icon-3.png" alt="Image" width={40} height={40} priority /></div>
                          </div>
                          <div className="link"><a href="/project-details"><i className="flaticon-hyperlink"></i></a></div>
                          <div className="overlay-layer"></div>
                      </figure>
                      <div className="lower-content">
                          <div className="box">
                              <div className="icon-box"><i className="flaticon-vision"></i></div>
                              <p>Marketing</p>
                              <h4><a href="/project-details">Network implementation</a></h4>
                          </div>
                          <div className="text">
                              <p>Know pursue works rationally encounter consequences again desires.</p>
                          </div>
                          <div className="link"><a href="/project-details" className="btn-style-four">Read More<span>+</span></a></div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 masonry-item small-column all banking healthcare transporatation entertainment">
              <div className="case-block-two">
                  <div className="inner-box">
                      <figure className="image-box">
                          <Image src="/assets/images/gallery/gallery-26.jpg" alt="Image" width={370} height={300} priority />
                          <div className="client-box">
                              <span>Neuro Jump</span>
                              <div className="client-logo"><Image src="/assets/images/icons/icon-8.png" alt="Image" width={40} height={40} priority /></div>
                          </div>
                          <div className="link"><a href="/project-details"><i className="flaticon-hyperlink"></i></a></div>
                          <div className="overlay-layer"></div>
                      </figure>
                      <div className="lower-content">
                          <div className="box">
                              <div className="icon-box"><i className="flaticon-vision"></i></div>
                              <p>Healthcare</p>
                              <h4><a href="/project-details">Big data processing</a></h4>
                          </div>
                          <div className="text">
                              <p>To take trivial example, which of us ever undertakes laborios physical.</p>
                          </div>
                          <div className="link"><a href="/project-details" className="btn-style-four">Read More<span>+</span></a></div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 masonry-item small-column all finance banking entertainment marketing">
              <div className="case-block-two">
                  <div className="inner-box">
                      <figure className="image-box">
                          <Image src="/assets/images/gallery/gallery-27.jpg" alt="Image" width={370} height={300} priority />
                          <div className="client-box">
                              <span>Neuro Jump</span>
                              <div className="client-logo"><Image src="/assets/images/icons/icon-9.png" alt="Image" width={40} height={40} priority /></div>
                          </div>
                          <div className="link"><a href="/project-details"><i className="flaticon-hyperlink"></i></a></div>
                          <div className="overlay-layer"></div>
                      </figure>
                      <div className="lower-content">
                          <div className="box">
                              <div className="icon-box"><i className="flaticon-vision"></i></div>
                              <p>Marketing</p>
                              <h4><a href="/project-details">Baby care mobile app</a></h4>
                          </div>
                          <div className="text">
                              <p>Know pursue works rationally encounter consequences again desires.</p>
                          </div>
                          <div className="link"><a href="/project-details" className="btn-style-four">Read More<span>+</span></a></div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 masonry-item small-column all banking finance healthcare transporatation">
              <div className="case-block-two">
                  <div className="inner-box">
                      <figure className="image-box">
                          <Image src="/assets/images/gallery/gallery-28.jpg" alt="Image" width={370} height={300} priority />
                          <div className="client-box">
                              <span>Neuro Jump</span>
                              <div className="client-logo"><Image src="/assets/images/icons/icon-10.png" alt="Image" width={40} height={40} priority /></div>
                          </div>
                          <div className="link"><a href="/project-details"><i className="flaticon-hyperlink"></i></a></div>
                          <div className="overlay-layer"></div>
                      </figure>
                      <div className="lower-content">
                          <div className="box">
                              <div className="icon-box"><i className="flaticon-vision"></i></div>
                              <p>Banking & Finance</p>
                              <h4><a href="/project-details">Invoice data capture</a></h4>
                          </div>
                          <div className="text">
                              <p>Equal blame belongs too those who fail in their through weakness.</p>
                          </div>
                          <div className="link"><a href="/project-details" className="btn-style-four">Read More<span>+</span></a></div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

        <div className="pagination-wrapper text-center">
            <ul className="pagination clearfix">
                <li><Link href="/project-3"><i className="fas fa-angle-double-left"></i>&nbsp;&nbsp;Prev</Link></li>
                <li><Link href="/project-3" className="active">1</Link></li>
                <li><Link href="/project-3">2</Link></li>
                <li><Link href="/project-3">3</Link></li>
                <li><Link href="/project-3">Next&nbsp;&nbsp;<i className="fas fa-angle-double-right"></i></Link></li>
            </ul>
        </div>
      </div>
    </div>
  );
}
