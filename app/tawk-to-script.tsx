import React from "react";

// Reusable Tawk.to embed script (safe for client-side injection)
export function TawkToScript({ src }: { src: string }) {
  return (
    <script
      // next/script is not available in this file; keep it as plain script for consistent behavior
      type="text/javascript"
      dangerouslySetInnerHTML={{
        __html: `var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();(function() {var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0]; s1.async = true; s1.src = '${src}'; s1.charset = 'UTF-8'; s1.setAttribute('crossorigin', '*'); s0.parentNode.insertBefore(s1, s0); })();`,
      }}
    />
  );
}

