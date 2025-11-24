import InfoDetailPage from "@/app/pages/konten/arsip-informasi/infodetailpage";

type RouteProps = {
  params: Promise<{ slug: string }>;
};

export default async function InformasiDetailRoute({ params }: RouteProps) {
  const { slug } = await params; // params harus await (Next 15+/App Router)

  return <InfoDetailPage slug={slug} />;
}
