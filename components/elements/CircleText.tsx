"use client";

import { useEffect } from "react";
import CircleType from "circletype";

export default function RoundTextScript() {
  useEffect(() => {
    const applyCircle = (selector: string, radius: number, dir = 1) => {
      document.querySelectorAll(selector).forEach((el) => {
        const circle = new CircleType(el as HTMLElement);
        circle.radius(radius).dir(dir);
      });
    };

    /*--------------------------------------------------------------
      About Style1 Round Text Top Curved Circle Script
    --------------------------------------------------------------*/
    applyCircle(".about-style1-round-text__top", 98, 1);

    /*--------------------------------------------------------------
      About Style1 Round Text Bottom Curved Circle Script
    --------------------------------------------------------------*/
    applyCircle(".about-style1-round-text__bottom", 98, 0.75);

    /*--------------------------------------------------------------
      Main Slider Style4 Round Text Top Curved Circle Script
    --------------------------------------------------------------*/
    applyCircle(".main-slider-style4-round-text__top", 110, 1);

    /*--------------------------------------------------------------
      Main Slider Style4 Round Text Bottom Curved Circle Script
    --------------------------------------------------------------*/
    applyCircle(".main-slider-style4-round-text__bottom", 110, 1);
  }, []);

  return null; // no DOM output; just runs the effect
}
