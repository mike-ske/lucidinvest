
import { useEffect, useRef, useState } from "react";

type CounterProps = {
  end: number;
  duration: number; // in seconds
};

export default function Counter({ end, duration }: CounterProps) {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement | null>(null);
  const [isCounting, setIsCounting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsCounting(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 } // trigger when at least 20% visible
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isCounting) return;

    let current = 0;
    const increment = end / (duration * 60); // ~60fps
    const interval = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(interval);
      } else {
        setCount(Math.round(current));
      }
    }, 1000 / 60); // 60 updates per second

    return () => clearInterval(interval);
  }, [isCounting, end, duration]);

  return (
    <span ref={countRef}>
      <span>{count}</span>
    </span>
  );
}
