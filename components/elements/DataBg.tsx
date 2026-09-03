
import { useEffect } from "react";

export default function DataBg() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-bg]");

    elements.forEach((el) => {
      const bg = el.getAttribute("data-bg");
      if (bg) {
        el.style.backgroundImage = `url(${bg})`;
      }
    });
  }, []);

  return null; // no DOM needed
}
