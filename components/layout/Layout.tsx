// components/layout/Layout.tsx
// ✅ SERVER COMPONENT (no "use client")

import type { ReactNode } from "react";
import Header from "./Header";       // Client Component
import Footer from "./Footer";       // Server Component (ok)
import Breadcrumb from "./Breadcrumb"; // Server Component

interface LayoutProps {
  children: ReactNode;
  headerStyle?: 1 | 2 | 3 | 4;   // optional header variant
  footerStyle?: 1 | 2 | 3 | 4;   // optional footer variant
  breadcrumbTitle?: string;
  breadcrumbTitleTwo?: string;
}

export default function Layout({
  children,
  headerStyle = 2,
  footerStyle = 2,
  breadcrumbTitle,
  breadcrumbTitleTwo,
}: LayoutProps) {

  const hasBreadcrumb = !!(breadcrumbTitle || breadcrumbTitleTwo);

  return (
    <div id="top" className="page-wrapper boxed_wrapper">
      {/* ✅ Header (client component automatically wrapped in a Client Boundary) */}
      <Header style={headerStyle} />

      {/* ✅ Conditionally render breadcrumb */}
      {hasBreadcrumb && (
        <Breadcrumb
          breadcrumbTitle={breadcrumbTitle ?? ""}
          breadcrumbTitleTwo={breadcrumbTitleTwo}
        />
      )}

      {/* ✅ Page Content */}
      <main>{children}</main>

      {/* ✅ Footer */}
      <Footer style={footerStyle} />
    </div>
  );
}
