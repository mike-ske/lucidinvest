// components/layout/Footer.tsx
// ✅ Server Component (no "use client" needed)

import Footer2 from "./footer/Footer2";

interface FooterProps {
  style?: 1 | 2 | 3 | 4;
}

/**
 * Footer Component
 * 
 * This component dynamically renders a footer style based on the "style" prop.
 * It runs on the server by default (no client-side JS needed).
 */
export default function Footer({ style = 2 }: FooterProps) {
  switch (style) {
    case 2:
      return <Footer2 />;
    default:
      return <Footer2 />;
  }
}
