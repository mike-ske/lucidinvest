'use client';

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

export default function VideoModal(): React.JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);

  // Wait until the component is mounted to use portal
  useEffect(() => {
    setMounted(true);
  }, []);

  // Disable background scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  // Popup content (renders outside normal layout)
  const popupContent = (
    <section className="video-popup-section">
      <div className="video-container">
        <iframe
          src="https://www.youtube.com/embed/L61p2uyiMSo?autoplay=1"
          title="my video"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
        <button onClick={() => setIsOpen(false)} className="close-btn" aria-label="Close Video">
          ✕
        </button>
      </div>
    </section>
  );

  return (
    <>
      {/* Play Button (can be anywhere) */}
      <div onClick={() => setIsOpen(true)} className="play-btn" aria-label="Play Video">
        <span className="fa fa-play"></span>
        <i className="ripple"></i>
      </div>

      {/* Render popup into body so it’s a true separate section */}
      {mounted && isOpen && createPortal(popupContent, document.body)}
    </>
  );
}