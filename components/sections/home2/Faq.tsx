'use client';

import FadeIn from "@/components/elements/FadeIn";
import Link from "next/link";
import { useEffect } from "react";

export default function Faq() {
  // Optional: activate accordion behavior without jQuery
  useEffect(() => {
    const accBtns = document.querySelectorAll<HTMLDivElement>(".acc-btn");

    accBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const parent = btn.closest(".accordion.block");
        const content = parent?.querySelector(".acc-content");

        // close all
        document.querySelectorAll(".accordion.block").forEach((block) => {
          block.classList.remove("active-block");
          block
            .querySelector(".acc-btn")
            ?.classList.remove("active");
          (block.querySelector(".acc-content") as HTMLElement)?.classList.remove("current");
        });

        // open selected
        if (parent && content) {
          parent.classList.add("active-block");
          btn.classList.add("active");
          content.classList.add("current");
        }
      });
    });

    return () => {
      accBtns.forEach((btn) => {
        btn.replaceWith(btn.cloneNode(true)); // remove event listeners cleanly
      });
    };
  }, []);

  return (
    <section className="faq-style1">
      <div className="container">
        <div className="sec-title withtext text-center">
          <div className="sub-title">
            <h4>Questions &amp; Answers</h4>
          </div>
          <h2>Frequently Asked Questions</h2>
          <div className="text">
            <p>Discover the most competitive prices in the market, update.</p>
          </div>
        </div>

        {/* FadeIn Animation Wrapper */}
        <FadeIn direction="up" delay={0.1}>
          <div className="faq-style1-content">
            <ul className="accordion-box clearfix">

              <li className="accordion block active-block">
                <div className="acc-btn active">
                  <span>Q&amp;A 1</span>
                  <h3>How can I start trading Forex?</h3>
                </div>
                <div className="acc-content current">
                  <div className="text-box">
                    <p>
                      Which of us ever undertakes laborious physical exercise,
                      except to some advantage from it? But who has any right to
                      find fault with a man who chooses to enjoy a pleasure that
                      has no annoying consequences.
                    </p>
                  </div>
                </div>
              </li>

              <li className="accordion block">
                <div className="acc-btn">
                  <span>Q&amp;A 2</span>
                  <h3>How much money do I need to start?</h3>
                </div>
                <div className="acc-content">
                  <div className="text-box">
                    <p>
                      Which of us ever undertakes laborious physical exercise,
                      except to some advantage from it? But who has any right to
                      find fault with a man who chooses to enjoy a pleasure that
                      has no annoying consequences.
                    </p>
                  </div>
                </div>
              </li>

              <li className="accordion block">
                <div className="acc-btn">
                  <span>Q&amp;A 3</span>
                  <h3>What is margin?</h3>
                </div>
                <div className="acc-content">
                  <div className="text-box">
                    <p>
                      Which of us ever undertakes laborious physical exercise,
                      except to some advantage from it? But who has any right to
                      find fault with a man who chooses to enjoy a pleasure that
                      has no annoying consequences.
                    </p>
                  </div>
                </div>
              </li>

              <li className="accordion block">
                <div className="acc-btn">
                  <span>Q&amp;A 4</span>
                  <h3>Can I lose more than I invest in Forex?</h3>
                </div>
                <div className="acc-content">
                  <div className="text-box">
                    <p>
                      Which of us ever undertakes laborious physical exercise,
                      except to some advantage from it? But who has any right to
                      find fault with a man who chooses to enjoy a pleasure that
                      has no annoying consequences.
                    </p>
                  </div>
                </div>
              </li>

              <li className="accordion block">
                <div className="acc-btn">
                  <span>Q&amp;A 5</span>
                  <h3>Can I have multiple accounts?</h3>
                </div>
                <div className="acc-content">
                  <div className="text-box">
                    <p>
                      Which of us ever undertakes laborious physical exercise,
                      except to some advantage from it? But who has any right to
                      find fault with a man who chooses to enjoy a pleasure that
                      has no annoying consequences.
                    </p>
                  </div>
                </div>
              </li>

            </ul>
          </div>
        </FadeIn>

        <div className="faq-style1__text">
          <p>
            Explore Our Answers to 100+ Questions.{" "}
            <Link href="/faq">
              Read More FAQ&apos;s
              <i className="icon-right-arrow"></i>
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
