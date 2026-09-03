
import Link from "next/link";
import FadeIn from "@/components/elements/FadeIn";
import Marquee from "@/components/elements/Marquee";

export default function Slogan_Two() {
  return (
    <>
        <section className="slogan-style2">
            <div className="container">
                <div className="slogan-style2__content text-center">
                    <div className="slogan-style2__bg"
                        style={{ backgroundImage: "url(/assets/images/backgrounds/slogan-v2-bg.png)" }}>
                    </div>
                    <FadeIn direction="up" delay={0.0}>
                    <div className="slogan-style2__big-title">
                        <Marquee speed={30} direction="left" pauseOnHover className="slogan-style2-scrolling-text">
                            <ul className="list marquee_mode-rightToLeft">
                                <li className="item">Tradebro</li>
                            </ul>
                        </Marquee>
                    </div>
                    </FadeIn>
                    <FadeIn direction="up" delay={0.0}>
                    <div className="title-box">
                        <h2>All-In-One Trading Solution</h2>
                        <p>
                            Discover the most competitive prices in the market, updated <br />regularly for your
                            advantage.
                        </p>
                    </div>
                    </FadeIn>
                    <FadeIn direction="up" delay={0.0}>
                    <div className="btn-box">
                        <Link className="btn-one" href="#">
                            <span className="txt">Start Trading</span>
                            <i className="icon-right-arrow"></i>
                        </Link>
                    </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    </>
  )
}