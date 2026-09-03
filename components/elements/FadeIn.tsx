'use client';
import { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
  distance?: number; // optional, default 30px
}

export default function FadeIn({
  children,
  delay = 0,
  className = '',
  direction = 'up',
  distance = 30,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const controls = useAnimation();

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controls.start('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [controls]);

  // Direction offset logic
  const getOffset = () => {
    switch (direction) {
      case 'up':
        return { y: distance };
      case 'down':
        return { y: -distance };
      case 'left':
        return { x: distance };
      case 'right':
        return { x: -distance };
      default:
        return { y: distance };
    }
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, ...getOffset() },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: { duration: 0.8, delay },
        },
      }}
    >
      {children}
    </motion.div>
  );
}


/*

use style 

<FadeIn direction="up">
  <h2>Fade In from Bottom</h2>
</FadeIn>

<FadeIn direction="left" delay={0.2}>
  <p>Fade In from Right to Left</p>
</FadeIn>

<FadeIn direction="down" distance={50}>
  <div>Fade In from Top (50px offset)</div>
</FadeIn>
*/