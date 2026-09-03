"use client";
import CustomSelect from "@/components/elements/CustomSelect";
import FadeIn from "@/components/elements/FadeIn";
import Marquee from "@/components/elements/Marquee";
import Image from "next/image";

export default function Contact() {

    const handleSelectChange = (value: string) => {
        console.log("Selected value:", value);
    };

    const options = [
        { value: "0", label: "Global Inquiry" },
        { value: "1", label: "Occurring Inquiry" },
        { value: "2", label: "Existing Inquiry" },
    ];

  return (
    <>
        <section className="contact-style1">
            <div className="container">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-12">
                        <FadeIn delay={0.0}>
                        <div className="contact-style1__contant">
                            <div className="sec-title withtext white">
                                <div className="sub-title">
                                    <h4>Newsletter</h4>
                                </div>
                                <h2>Don't Miss Out, Subscribe</h2>
                                <div className="text">
                                    <p>Get Market Updates Straight to Your Inbox.</p>
                                </div>
                            </div>
                        </div>
                        </FadeIn>
                        <div className="contact-style1-subscribe-form">
                            <div className="shape1">
                                <Image src="/assets/images/shapes/blog-v1-shape1.png" className="float-bob-y" alt="Shape" width={150} height={118} priority />
                            </div>
                            <form action="#" method="POST">
                                <div className="form-group">
                                    <input type="email" name="email" placeholder="Email address..." required />
                                </div>
                                <div className="checked-box1">
                                    <input type="checkbox" name="agree" id="termsconditions" defaultChecked />
                                    <label htmlFor="termsconditions">
                                        <span></span>I agree terms &amp; conditions.
                                    </label>
                                </div>
                                <div className="btn-box">
                                    <button className="submit btn-one">
                                        <span className="txt">
                                            Subscribe
                                            <i className="icon-right-arrow"></i>
                                        </span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="col-xl-2 col-lg-2">
                        <div className=" contact-style1__big-title">
                            <Marquee speed={100} direction="up" className="contact-style1__big-title__inner marquee_mode-downToUp">
                                <ul>
                                    <li>Lucid Global Invest</li>
                                </ul>
                            </Marquee>
                        </div>
                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-12">
                        <FadeIn direction="down" delay={0.0}>
                        <div className="contact-style1__form">
                            <div className="contact-style1__form-title">
                                <h2>Send Message</h2>
                            </div>
                            <ul className="contact-style1__form-selacet">
                                <li>
                                    <input type="radio" id="message" name="message" defaultChecked />
                                    <label htmlFor="message">
                                        <i></i>
                                        <span>Existing Trader</span>
                                    </label>
                                </li>
                                <li>
                                    <input type="radio" id="message1" name="message" />
                                    <label htmlFor="message1">
                                        <i></i>
                                        <span>New Trader</span>
                                    </label>
                                </li>
                            </ul>

                            <form id="contact-style1__form" name="contact-style1_form" action="#" method="post">
                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="form-group">
                                            <div className="select-box clearfix">
                                                <CustomSelect
                                                    options={options}
                                                    placeholder="Select One"
                                                    onChange={handleSelectChange}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <div className="input-box">
                                                <input type="text" name="form_name" id="formName" placeholder="Name"
                                                    required />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <div className="input-box">
                                                <input type="email" name="form_email" id="formEmail" placeholder="Email"
                                                    required />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="form-group">
                                            <div className="input-box">
                                                <textarea name="form_message" id="formMessage" placeholder="Message"
                                                    required></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="btn-box">
                                    <button className="btn-one" type="submit" data-loading-text="Please wait...">
                                        <span className="txt">
                                            Send Your Message
                                            <i className="icon-right-arrow"></i>
                                        </span>
                                    </button>
                                </div>
                            </form>
                        </div>
                        </FadeIn>
                    </div>


                </div>
            </div>
        </section>
    </>
  )
}
