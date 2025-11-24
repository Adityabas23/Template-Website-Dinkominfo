import Link from "next/link";
import PageLayout from "@/app/component/pagelayout";
import { infoData } from "@/app/data/infoData";
import ButtonLink from "@/app/component/ui/ButtonLink"; 

type Props = {
  slug: string;
};

function formatDate(date: string) {
  try {
    return new Date(date).toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  } catch {
    return date;
  }
}

export default function InfoDetailPage({ slug }: Props) {
  const item = infoData.find((i) => i.slug === slug || i.id === slug);

  if (!item) {
    return (
      <PageLayout
        title="Informasi Tidak Ditemukan"
        breadcrumb="BERANDA > INFORMASI"
        heroImage="/info1.png"
      >
        <main style={{ maxWidth: 900, margin: "28px auto", padding: "0 20px" }}>
          <h2>404 — Informasi tidak ditemukan</h2>
          <p>Data yang Anda cari tidak tersedia atau telah dihapus.</p>

          <ButtonLink href="/konten/informasi">Kembali ke Daftar Informasi</ButtonLink>
        </main>
      </PageLayout>
    );
  }

  return (
    <PageLayout
      title={item.title}
      breadcrumb={`BERANDA > INFORMASI > ${item.title}`}
      heroImage={item.imageUrl}
    >
      <main style={{ maxWidth: 900, margin: "28px auto", padding: "0 20px" }}>
        <article
          style={{
            background: "#fff",
            padding: 20,
            borderRadius: 12,
            boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
          }}
        >
          <img
            src={item.imageUrl}
            alt={item.altText || item.title}
            style={{ width: "100%", borderRadius: 10, marginBottom: 16 }}
          />

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: 12,
              flexWrap: "wrap",
            }}
          >
            <span style={{ color: "#6b7280" }}>{formatDate(item.date)}</span>

            <ButtonLink href="/pages/konten/arsip-informasi" size="sm">
              Kembali
            </ButtonLink>
          </div>

          <h1>{item.title}</h1>

          {item.excerpt && <p style={{ color: "#444" }}>{item.excerpt}</p>}

          {item.content && (
            <div
              style={{ marginTop: 20, lineHeight: 1.8 }}
              dangerouslySetInnerHTML={{ __html: item.content }}
            />
          )}
        </article>
      </main>
    </PageLayout>
  );
}
