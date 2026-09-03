'use client'
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import Accordion from "@/components/sections/InnerPage/Accordion";


export default function Faq_Page() {

    // tab
    const [activeTab, setActiveTab] = useState("account");

    const faqItems = [
        {
        id: 1,
        question: "How can I start trading Forex?",
        answer:
            "Which of us ever undertakes laborious physical exercise, except to some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences.",
        },
        {
        id: 2,
        question: "How much money do I need to start?",
        answer:
            "Which of us ever undertakes laborious physical exercise, except to some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences.",
        },
        {
        id: 3,
        question: "What is margin?",
        answer:
            "Which of us ever undertakes laborious physical exercise, except to some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences.",
        },
        {
        id: 4,
        question: "Can I lose more than I invest in Forex?",
        answer:
            "Which of us ever undertakes laborious physical exercise, except to some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences.",
        },
        {
        id: 5,
        question: "Can I have multiple accounts?",
        answer:
            "Which of us ever undertakes laborious physical exercise, except to some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences.",
        },
        {
        id: 6,
        question: "What is leverage in trading?",
        answer:
            "Which of us ever undertakes laborious physical exercise, except to some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences.",
        },
        {
        id: 7,
        question: "How do I download the trading platform?",
        answer:
            "Which of us ever undertakes laborious physical exercise, except to some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences.",
        },
        {
        id: 8,
        question: "Is my trading account secure?",
        answer:
            "Which of us ever undertakes laborious physical exercise, except to some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences.",
        },
    ];

    return (
        <div className="body-bg-1">
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Faq&apos;s" breadcrumbTitleTwo="About">
                <section className="faq-style2">
                    <div className="container">

                        <div className="faq-style2__inner">
                            <div className="faq-style2__tab">
                                <div className="row">

                                    <div className="col-xl-3 col-lg-4">
                                        <div className="faq-style2__tab-btn">
                                            <ul className="tabs-button-box clearfix">
                                                <li className={`tab-btn-item ${activeTab === "account" ? "active-btn-item" : ""}`} onClick={() => setActiveTab("account")}>
                                                    <h3>Account</h3>
                                                    <div className="icon">
                                                        <i className="icon-check"></i>
                                                    </div>
                                                </li>
                                                <li className={`tab-btn-item ${activeTab === "company" ? "active-btn-item" : ""}`} onClick={() => setActiveTab("company")}>
                                                    <h3>Company</h3>
                                                    <div className="icon">
                                                        <i className="icon-check"></i>
                                                    </div>
                                                </li>
                                                <li className={`tab-btn-item ${activeTab === "education" ? "active-btn-item" : ""}`} onClick={() => setActiveTab("education")}>
                                                    <h3>Education</h3>
                                                    <div className="icon">
                                                        <i className="icon-check"></i>
                                                    </div>
                                                </li>
                                                <li className={`tab-btn-item ${activeTab === "forex" ? "active-btn-item" : ""}`} onClick={() => setActiveTab("forex")}>
                                                    <h3>Forex</h3>
                                                    <div className="icon">
                                                        <i className="icon-check"></i>
                                                    </div>
                                                </li>
                                                <li className={`tab-btn-item ${activeTab === "trading" ? "active-btn-item" : ""}`} onClick={() => setActiveTab("trading")}>
                                                    <h3>Trading</h3>
                                                    <div className="icon">
                                                        <i className="icon-check"></i>
                                                    </div>
                                                </li>
                                                <li className={`tab-btn-item ${activeTab === "withdrawals" ? "active-btn-item" : ""}`} onClick={() => setActiveTab("withdrawals")}>
                                                    <h3>Withdrawals</h3>
                                                    <div className="icon">
                                                        <i className="icon-check"></i>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-xl-9 col-lg-8">
                                        <div className="tabs-content-box">
                                            {activeTab === "account" && (
                                            <div className="tab-content-box-item tab-content-box-item-active fadeIn" id="account">
                                                <Accordion items={faqItems} />
                                            </div>
                                            )}

                                            {activeTab === "company" && (
                                            <div className="tab-content-box-item tab-content-box-item-active fadeIn" id="company">
                                                <Accordion items={faqItems} />
                                            </div>
                                            )}

                                            {activeTab === "education" && (
                                            <div className="tab-content-box-item tab-content-box-item-active fadeIn" id="education">
                                                <Accordion items={faqItems} />
                                            </div>
                                            )}

                                            {activeTab === "forex" && (
                                            <div className="tab-content-box-item tab-content-box-item-active fadeIn" id="forex">
                                                <Accordion items={faqItems} />
                                            </div>
                                            )}

                                            {activeTab === "trading" && (
                                            <div className="tab-content-box-item tab-content-box-item-active fadeIn" id="trading">
                                                <Accordion items={faqItems} />
                                            </div>
                                            )}

                                            {activeTab === "withdrawals" && (
                                            <div className="tab-content-box-item tab-content-box-item-active fadeIn" id="withdrawals">
                                                <Accordion items={faqItems} />
                                            </div>
                                            )}

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </div>
    )
}
