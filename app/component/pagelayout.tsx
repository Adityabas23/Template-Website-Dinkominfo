// components/PageLayout.tsx
import React from "react";
import Footer from "@/app/component/footer";
import AccessibilitySidebar from "@/app/component/AccessibilitySidebar";

type PageLayoutProps = {
  title: string;
  description?: string;
  breadcrumb?: string;
  children: React.ReactNode;
  heroImage?: string;        // ← gambar hero per halaman (opsional)
  heroClassName?: string;    // ← kalau mau nambah class khusus per halaman
};

const PageLayout: React.FC<PageLayoutProps> = ({
  title,
  description,
  breadcrumb,
  children,
  heroImage,
  heroClassName,
}) => {
  // style background hero (kalau heroImage ada)
  const heroStyle = heroImage
    ? { backgroundImage: `url('${heroImage}')` }
    : undefined;

  return (
    <div className="mainContainer">
      {/* HERO / BANNER ATAS */}
      <section
        className={`hero ${heroClassName ?? ""}`}
        style={heroStyle}
      >
        <AccessibilitySidebar />
        <div className="hero-content">
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

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default PageLayout;
