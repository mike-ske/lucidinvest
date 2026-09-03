
import VideoModal from "@/components/elements/VideoPopup";
import Image from "next/image";
import Link from "next/link";

export default function Video() {

  return (
    <>
        <section className="video-style1">
            <div className="video-style1__shape1">
                <Image src="/assets/images/shapes/video-v1-shape1.png" alt="Shape" width={995} height={704} priority />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="video-style1__img wow fadeInDown animated" data-wow-delay="00ms"
                            data-wow-duration="1500ms">
                            <Image src="/assets/images/resources/video-v1-1.png" alt="Image" width={570} height={464} priority />
                            <div className="overlay">
                                <VideoModal/>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="video-style1__content wow fadeInUp animated" data-wow-delay="00ms"
                            data-wow-duration="1500ms">
                            <div className="sec-title withtext">
                                <div className="sub-title">
                                    <h4>Video Tutorial</h4>
                                </div>
                                <h2>Easy to Follow Video</h2>
                                <div className="text">
                                    <p>Watch our trading videos to get the most from the markets and become a profitable
                                        trader.</p>
                                </div>
                            </div>
                            <div className="duration-box">
                                <div className="number">
                                    <h4>#1</h4>
                                </div>
                                <div className="title">
                                    <h3>An Introduction to Trading</h3>
                                    <h5>Duration: 6.05 Mins</h5>
                                </div>
                            </div>
                            <div className="bottom-box">
                                <div className="left-box">
                                    <div className="btn-box">
                                        <Link className="btn-one" href="https://www.youtube.com/shorts/3gI7Iezyd9E">
                                            <span className="txt">More Videos</span>
                                            <i className="icon-right-arrow"></i>
                                        </Link>
                                    </div>
                                    <div className="total-videos">
                                        <h2>40<sup>+</sup></h2>
                                    </div>
                                </div>
                                <div className="right-box">
                                    <p>Videos <br />From Experts</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}