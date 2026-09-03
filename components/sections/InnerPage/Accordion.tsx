"use client";

import { useState } from "react";

interface AccordionItem {
  id: number;
  question: string;
  answer: string;
  label?: string; // for Q&a number (optional)
}

interface AccordionProps {
  items: AccordionItem[];
}

export default function Accordion({ items }: AccordionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-style2-tab-content-box-item">
      <div className="single-faq-style2">
        <div className="faq-style1-content">
          <ul className="accordion-box clearfix">
            {items.map((item, index) => (
              <li
                key={item.id}
                className={`accordion block ${
                  activeIndex === index ? "active-block" : ""
                }`}
              >
                <div
                  className={`acc-btn ${activeIndex === index ? "active" : ""}`}
                  onClick={() => handleToggle(index)}
                >
                  <span>{item.label ?? `Q&a ${item.id}`}</span>
                  <h3>{item.question}</h3>
                </div>

                <div
                  className={`acc-content ${
                    activeIndex === index ? "current" : ""
                  }`}
                  style={{
                    display: activeIndex === index ? "block" : "none",
                  }}
                >
                  <div className="text-box">
                    <p>{item.answer}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
