
import { useEffect, useState, useRef } from "react";
import Counter from "./Counter";

type CounterUpProps = {
  end: number;
  duration?: number; // optional, default 2s
};

export default function CounterUp({ end, duration = 2 }: CounterUpProps) {
  const [inViewport, setInViewport] = useState(false);
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInViewport(true);
          observer.disconnect(); // run only once
        }
      },
      { threshold: 0.3 } // trigger when 30% visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <span ref={ref} className="count-text">
      {inViewport && <Counter end={end} duration={duration} />}
    </span>
  );
}
