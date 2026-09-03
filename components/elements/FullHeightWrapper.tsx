'use client';

import { useEffect, useState } from 'react';

type FullHeightWrapperProps = {
  children: React.ReactNode;
  className?: string;
};

export default function FullHeightWrapper({ children, className = '' }: FullHeightWrapperProps) {
  const [height, setHeight] = useState<number | null>(null);

  useEffect(() => {
    const updateHeight = () => setHeight(window.innerHeight);

    // Set initial height
    updateHeight();

    // Listen for window resize
    window.addEventListener('resize', updateHeight);

    // Cleanup listener on unmount
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  return (
    <div
      className={`full-height ${className}`}
      style={{ height: height ? `${height}px` : '100vh' }}
    >
      {children}
    </div>
  );
}
