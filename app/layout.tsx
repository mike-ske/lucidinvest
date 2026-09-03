import type { Metadata } from "next";

import "../public/assets/css/bootstrap.min.css";
import "../public/assets/css/style.css";
import "../public/assets/css/responsive.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import 'swiper/css/effect-fade'

export const metadata: Metadata = {
  title: "Lucid Global Invest | Trusted Investment & Online Trading Platform",
  description:
    "Lucid Global Invest is a modern online investment and trading platform offering secure trading solutions, market insights, financial growth opportunities, and professional investment services.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}

        {/* Tawk.to Live Chat script */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();(function() {var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0]; s1.async = true; s1.src = 'https://embed.tawk.to/6a988eb8a0ffc53446f9b976/1k1hur10v'; s1.charset = 'UTF-8'; s1.setAttribute('crossorigin', '*'); s0.parentNode.insertBefore(s1, s0); })();`,
          }}
        />
      </body>
    </html>
  );
}
