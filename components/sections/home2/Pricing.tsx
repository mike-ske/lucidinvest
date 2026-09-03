
import Link from "next/link";


export default function Price() {
  return (
    <>
        <section className="pricing-list-style1">
            <div className="pricing-list-style1__inner">
                <ul>
                    <li>
                        <div className="left-box">
                            <Link href="#" className="icon icon1">
                                <i className="icon-right-down"></i>
                            </Link>
                            <div className="text-box">
                                <div className="top">
                                    <h6>usd</h6>
                                    <div className="icon2">
                                        <i className="icon-exchange"></i>
                                    </div>
                                    <h6>eur</h6>
                                </div>
                                <p>Buy at $1.06199</p>
                            </div>
                        </div>
                        <div className="right-box">
                            <div className="text-box">
                                <p className="color color2">-0.14%</p>
                                <p>Sell at 1.06185</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="left-box">
                            <Link href="#" className="icon">
                                <i className="icon-right-up"></i>
                            </Link>
                            <div className="text-box">
                                <div className="top">
                                    <h6>usd</h6>
                                    <div className="icon2">
                                        <i className="icon-exchange"></i>
                                    </div>
                                    <h6>jpy</h6>
                                </div>
                                <p>Buy at $1.06199</p>
                            </div>
                        </div>
                        <div className="right-box">
                            <div className="text-box">
                                <p className="color">-0.08%</p>
                                <p>Sell at 1.06185</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="left-box">
                            <Link href="#" className="icon">
                                <i className="icon-right-up"></i>
                            </Link>
                            <div className="text-box">
                                <div className="top">
                                    <h6>usd</h6>
                                    <div className="icon2">
                                        <i className="icon-exchange"></i>
                                    </div>
                                    <h6>Aus</h6>
                                </div>
                                <p>Buy at $1.06199</p>
                            </div>
                        </div>
                        <div className="right-box">
                            <div className="text-box">
                                <p className="color">+0.25%</p>
                                <p>Sell at 1.06185</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="left-box">
                            <Link href="#" className="icon icon1">
                                <i className="icon-right-down"></i>
                            </Link>
                            <div className="text-box">
                                <div className="top">
                                    <h6>usd</h6>
                                    <div className="icon2">
                                        <i className="icon-exchange"></i>
                                    </div>
                                    <h6>Gbp</h6>
                                </div>
                                <p>Buy at $1.06199</p>
                            </div>
                        </div>
                        <div className="right-box">
                            <div className="text-box">
                                <p className="color color2">-0.10%</p>
                                <p>Sell at 1.06185</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="left-box">
                            <Link href="#" className="icon">
                                <i className="icon-right-up"></i>
                            </Link>
                            <div className="text-box">
                                <div className="top">
                                    <h6>usd</h6>
                                    <div className="icon2">
                                        <i className="icon-exchange"></i>
                                    </div>
                                    <h6>Cad</h6>
                                </div>
                                <p>Buy at $1.06199</p>
                            </div>
                        </div>
                        <div className="right-box">
                            <div className="text-box">
                                <p className="color">+0.06%</p>
                                <p>Sell at 1.06185</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    </>
  )
}