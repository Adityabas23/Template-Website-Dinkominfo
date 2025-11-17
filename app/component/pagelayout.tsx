// components/PageLayout.tsx
import React from "react";
import Footer from "@/app/component/footer";

type PageLayoutProps = {
  title: string;
  description?: string;
  breadcrumb?: string;
  children: React.ReactNode;
};

const PageLayout: React.FC<PageLayoutProps> = ({
  title,
  description,
  breadcrumb,
  children,
}) => {
  return (
    <div className="mainContainer">
      {/* HEADER kamu */}

      {/* HERO / BANNER ATAS */}
      <section className="page-hero">
        <div className="page-hero-inner">
          {breadcrumb && <p className="breadcrumb">{breadcrumb}</p>}

          <h1
            className="page-hero-title"
            dangerouslySetInnerHTML={{ __html: title }}
          />

          {description && (
            <p className="page-hero-desc">{description}</p>
          )}
        </div>
      </section>

      {/* KONTEN HALAMAN */}
      <main className="page-content">{children}</main>

      {/* FOOTER kamu */}
      <Footer />
    </div>
  );
};

export default PageLayout;
