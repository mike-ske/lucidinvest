"use client";
import FadeIn from "@/components/elements/FadeIn";
import TradeCalculator from "@/components/elements/TradeCalculator";
import VideoModal from "@/components/elements/VideoPopup";
import Link from "next/link";


export default function Trade() {

    // select-box

    const handleSelectChange = (value: string) => {
        console.log("Selected value:", value);
    };

    const options = [
        { value: "0", label: "Forex" },
        { value: "1", label: "Energies" },
        { value: "2", label: "Shares" },
        { value: "3", label: "Indices" },
    ];

    const optionsTwo = [
        { value: "0", label: "Aud_Usd" },
        { value: "1", label: "Usd_Aud" },
        { value: "2", label: "Aud_Rm" },
        { value: "3", label: "Usd_Gpo" },
    ];

  return (
    <>
        <section className="trade-calculator-style1 trade-calculator-style1--style1">
            <div className="container">
                <div className="row">

                    <div className="col-xl-7 col-lg-6">
                        <FadeIn delay={0.0}>
                        <TradeCalculator/>
                        </FadeIn>
                    </div>

                    <div className="col-xl-5 col-lg-6">
                        <FadeIn delay={0.0}>
                        <div className="trade-calculator-content">
                            <div className="sec-title withtext">
                                <div className="sub-title">
                                    <h4>Calculator</h4>
                                </div>
                                <h2>Maximize Profits with Our Trading Calculator</h2>
                                <div className="text">
                                    <p>
                                        Trouble that are bound to ensue and equal blame belongs
                                        those who fail in their duty through weakness.
                                    </p>
                                </div>
                            </div>
                            <div className="list-item">
                                <ul className="clerafix">
                                    <li>
                                        <div className="icon">
                                            <span className="icon-right-chevron"><span className="path1"></span><span
                                                    className="path2"></span><span className="path3"></span>
                                            </span>
                                        </div>
                                        <p>Real-Time Profit/Loss Calculation</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-right-chevron"><span className="path1"></span><span
                                                    className="path2"></span><span className="path3"></span>
                                            </span>
                                        </div>
                                        <p>Customizable Inputs</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-right-chevron"><span className="path1"></span><span
                                                    className="path2"></span><span className="path3"></span>
                                            </span>
                                        </div>
                                        <p>Supports Multiple Assets</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-right-chevron"><span className="path1"></span><span
                                                    className="path2"></span><span className="path3"></span>
                                            </span>
                                        </div>
                                        <p>Easy-to-Use Interface</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-right-chevron"><span className="path1"></span><span
                                                    className="path2"></span><span className="path3"></span>
                                            </span>
                                        </div>
                                        <p>Risk Management Tools</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="bottom-box">
                                <div className="icon">
                                    <VideoModal/>
                                </div>
                                <h3>
                                    <Link className="video-popup"
                                        href="#">
                                        How to Use<br /> Our Calculator...
                                    </Link>
                                </h3>
                            </div>

                        </div>
                        </FadeIn>
                    </div>

                </div>
            </div>
        </section>
    </>
  )
}