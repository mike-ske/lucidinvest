
import FadeIn from "@/components/elements/FadeIn";
import Marquee from "@/components/elements/Marquee";
import Image from "next/image";
import Link from "next/link";


export default function Testimonial() {
  return (
    <>
        <section className="testimonial-style2">
            <div className="container">
                <div className="testimonial-style2__big-title">
                    <Marquee speed={50} direction="right" pauseOnHover  className="testimonial-style2-scrolling-text">
                        <ul className="list marquee_mode">
                            <li className="item">Testimonials</li>
                            <li className="item">Testimonials</li>
                            <li className="item">Testimonials</li>
                        </ul>
                    </Marquee>
                </div>
                <div className="testimonial-style2__inner">
                    <div className="row">


                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <FadeIn delay={0.0}>
                            <div className="single-testimonial-style2">
                                <div className="single-testimonial-style2__inner">
                                    <div className="title-box">
                                        <h3>Unique highly effective!</h3>
                                        <p>Loves or pursue desires to obtain pain because is pain but because occassion
                                            of all our circumstances.</p>
                                    </div>
                                    <div className="rating-box">
                                        <div className="rating-box-inner">
                                            <div className="icon">
                                                <i className="icon-star"></i>
                                            </div>
                                            <h4>4.5 out of 5</h4>
                                        </div>
                                    </div>
                                    <div className="bottom-box">
                                        <Link href="#" className="logo">
                                            <Image src="/assets/images/testimonial/testimonial-v2-logo1.png" alt="Logo" width={114} height={25} priority />
                                        </Link>
                                        <div className="author-box">
                                            <div className="img">
                                                <Image src="/assets/images/testimonial/testimonial-v2-img1.jpg" alt="Image" width={52} height={52} priority />
                                            </div>
                                            <div className="title">
                                                <h3>Dedrew Kowzel</h3>
                                                <p>Founder - Anaplan Info Tech</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </FadeIn>
                        </div>
                        

                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <FadeIn delay={0.1}>
                            <div className="single-testimonial-style2">
                                <div className="single-testimonial-style2__inner">
                                    <div className="title-box">
                                        <h3>Amazing & Efficient</h3>
                                        <p>Cases are perfectly simple and easy todistinguish in a free hour, when our
                                            power choice is when nothing.</p>
                                    </div>
                                    <div className="rating-box">
                                        <div className="rating-box-inner">
                                            <div className="icon">
                                                <i className="icon-star"></i>
                                            </div>
                                            <h4>4.9 out of 5</h4>
                                        </div>
                                    </div>
                                    <div className="bottom-box">
                                        <Link href="#" className="logo">
                                            <Image src="/assets/images/testimonial/testimonial-v2-logo2.png" alt="Logo" width={141} height={25} priority />
                                        </Link>
                                        <div className="author-box">
                                            <div className="img">
                                                <Image src="/assets/images/testimonial/testimonial-v2-img2.jpg" alt="Image" width={52} height={52} priority />
                                            </div>
                                            <div className="title">
                                                <h3>Ediric Stanley</h3>
                                                <p>Project Head - Techtrady</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </FadeIn>
                        </div>
                        
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <FadeIn delay={0.2}>
                            <div className="single-testimonial-style2">
                                <div className="single-testimonial-style2__inner">
                                    <div className="title-box">
                                        <h3>My Favourite Tool</h3>
                                        <p>The claims of duty or the obligations business it will frequently occur
                                            pleasures repudiated annoyances.</p>
                                    </div>
                                    <div className="rating-box">
                                        <div className="rating-box-inner">
                                            <div className="icon">
                                                <i className="icon-star"></i>
                                            </div>
                                            <h4>4.5 out of 5</h4>
                                        </div>
                                    </div>
                                    <div className="bottom-box">
                                        <Link href="#" className="logo">
                                            <Image src="/assets/images/testimonial/testimonial-v2-logo3.png" alt="Logo" width={151} height={25} priority />
                                        </Link>
                                        <div className="author-box">
                                            <div className="img">
                                                <Image src="/assets/images/testimonial/testimonial-v2-img3.jpg" alt="Image" width={52} height={52} priority />
                                            </div>
                                            <div className="title">
                                                <h3>Newton Lester</h3>
                                                <p>Founder - Anaplan Info Tech</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </FadeIn>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    </>
  )
}