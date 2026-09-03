'use client';
import { useMemo } from 'react';
import styles from './../../public/assets/css/Marquee.module.css';

type Direction = 'left' | 'right' | 'up' | 'down';

interface MarqueeProps {
  children: React.ReactNode;
  direction?: Direction;
  speed?: number; // lower = slower
  pauseOnHover?: boolean;
  className?: string;
}

export default function Marquee({
  children,
  direction = 'left',
  speed = 20,
  pauseOnHover = false,
  className = '',
}: MarqueeProps) {
  const animationDuration = useMemo(() => `${speed}s`, [speed]);

  const marqueeClass = [
    styles.marquee,
    styles[`marquee_${direction}`],
    pauseOnHover ? styles.pauseOnHover : '',
    className,
  ].join(' ');

  return (
    <div className={marqueeClass} style={{ ['--duration' as any]: animationDuration }}>
      <div className={styles.track}>
        <div className={styles.content}>{children}</div>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
}
