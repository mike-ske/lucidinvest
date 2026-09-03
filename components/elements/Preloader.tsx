"use client";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setLoading(false);
    
    // Hide preloader when window is fully loaded
    if (document.readyState === "complete") {
      setLoading(false);
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  if (!loading) return null;

  return (
    <div className="loader-wrap">
        <div className="preloader">
            <div id="handle-preloader" className="handle-preloader">
                <div className="layer layer-one">
                    <span className="overlay"></span>
                </div>
                <div className="layer layer-three">
                    <span className="overlay"></span>
                </div>
                <div className="layer layer-two">
                    <span className="overlay"></span>
                </div>
                <div className="animation-preloader">
                    <div className="spinner"></div>
                </div>
            </div>
        </div>
    </div>
  );
}
