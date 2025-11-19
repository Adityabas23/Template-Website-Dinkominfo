"use client";

import { useState } from "react";
import PageLayout from "@/app/component/pagelayout";
import styles from "@/app/assets/css/faq.module.css";

const faqs = [
  {
    question: "Apa tugas dan fungsi Dinas Komunikasi dan Informatika Kabupaten Banyumas?",
    answer: (
      <>
        <p>
          Dinas Komunikasi dan Informatika Kabupaten Banyumas memiliki beberapa tugas dan fungsi, di antaranya:
        </p>
        <ul>
          <li>Memformulasikan dan melaksanakan kebijakan di bidang komunikasi dan informatika.</li>
          <li>Menyelenggarakan pengelolaan informasi dan komunikasi publik.</li>
          <li>Memfasilitasi pengembangan infrastruktur teknologi informasi dan komunikasi.</li>
          <li>Membina dan mengembangkan sumber daya manusia di bidang komunikasi dan informatika.</li>
          <li>Melaksanakan pengawasan terhadap penyelenggaraan komunikasi dan informatika.</li>
        </ul>
      </>
    ),
  },
  {
    question: "Apa saja layanan yang disediakan oleh Dinas Komunikasi dan Informatika Kabupaten Banyumas?",
    answer: (
      <>
        <p>
          Dinas Komunikasi dan Informatika Kabupaten Banyumas menyediakan beberapa layanan, di antaranya:
        </p>
        <ul>
          <li>
            <strong>Layanan informasi publik:</strong> Menyediakan informasi tentang berbagai program dan kegiatan
            pemerintah daerah kepada masyarakat.
          </li>
          <li>
            <strong>Layanan e-government:</strong> Menyediakan berbagai layanan elektronik untuk memudahkan masyarakat
            dalam mengakses layanan pemerintah daerah.
          </li>
          <li>
            <strong>Layanan TIK:</strong> Menyediakan infrastruktur TIK untuk mendukung kegiatan pemerintah daerah dan
            masyarakat.
          </li>
          <li>
            <strong>Layanan persandian dan keamanan informasi:</strong> Melakukan pengamanan informasi dan data
            pemerintah daerah.
          </li>
          <li>
            <strong>Layanan pengembangan SDM:</strong> Melakukan pelatihan dan pengembangan SDM di bidang komunikasi dan
            informatika.
          </li>
        </ul>
      </>
    ),
  },
  {
    question: "Bagaimana cara menghubungi Dinas Komunikasi dan Informatika Kabupaten Banyumas?",
    answer: (
      <ul>
        <li>Alamat: Jl. Kolonel Sugiono, Tipar, Purwanegara, Kabupaten Banyumas</li>
        <li>Telepon: (0281) 642679</li>
        <li>Email: dinkominfo@banyumaskab.go.id</li>
        <li>Website: https://dinkominfo.banyumaskab.go.id/</li>
      </ul>
    ),
  },
  {
    question: "Di mana lokasi kantor Dinas Komunikasi dan Informatika Kabupaten Banyumas?",
    answer: (
      <p>
        Kantor Dinas Komunikasi dan Informatika Kabupaten Banyumas terletak di Jl. Kolonel Sugiono, Tipar, Purwanegara,
        Kabupaten Banyumas.
      </p>
    ),
  },
  {
    question: "Jam buka kantor Dinas Komunikasi dan Informatika Kabupaten Banyumas?",
    answer: (
      <p>
        Kantor Dinas Komunikasi dan Informatika Kabupaten Banyumas buka dari Senin hingga Jumat, pukul 08.00 WIB hingga
        16.00 WIB.
      </p>
    ),
  },
  {
    question: "Apa saja program unggulan Dinas Komunikasi dan Informatika Kabupaten Banyumas?",
    answer: (
      <>
        <p>Beberapa program unggulan Dinas Komunikasi dan Informatika Kabupaten Banyumas, di antaranya:</p>
        <ul>
          <li>
            <strong>Jaringan Desa Digital:</strong> Membangun jaringan internet di desa-desa untuk meningkatkan akses
            informasi dan komunikasi bagi masyarakat desa.
          </li>
          <li>
            <strong>Smart City:</strong> Mengembangkan kota cerdas dengan memanfaatkan teknologi informasi dan
            komunikasi untuk meningkatkan kualitas layanan publik.
          </li>
          <li>
            <strong>Gerakan Literasi Digital:</strong> Meningkatkan literasi digital masyarakat untuk mencegah
            penyalahgunaan informasi dan teknologi.
          </li>
        </ul>
      </>
    ),
  },
  {
    question:
      "Bagaimana cara mendapatkan informasi terbaru tentang Dinas Komunikasi dan Informatika Kabupaten Banyumas?",
    answer: (
      <>
        <p>Informasi terbaru dapat diperoleh melalui:</p>
        <ul>
          <li>Website: https://dinkominfo.banyumaskab.go.id/</li>
          <li>Facebook: Dinkominfo Kab Banyumas</li>
          <li>Instagram: @dinkominfo_kab.banyumas</li>
          <li>Email: dinkominfo@banyumaskab.go.id</li>
        </ul>
      </>
    ),
  },
  {
    question: "Apa saja syarat untuk mengajukan izin pendirian menara telekomunikasi di Kabupaten Banyumas?",
    answer: (
      <>
        <p>Syarat untuk mengajukan izin pendirian menara telekomunikasi di Kabupaten Banyumas, di antaranya:</p>
        <ul>
          <li>Surat permohonan</li>
          <li>Fotokopi KTP dan NPWP pemohon</li>
          <li>Fotokopi akta pendirian perusahaan</li>
          <li>Surat persetujuan penggunaan lahan dari pemilik lahan</li>
          <li>Surat rekomendasi dari camat setempat</li>
          <li>Laporan hasil ukur tanah</li>
          <li>Denah lokasi</li>
          <li>Gambar rancang bangun menara</li>
          <li>Analisis dampak lingkungan (AMDAL)</li>
        </ul>
      </>
    ),
  },
  {
    question: "Bagaimana cara mengadukan pelanggaran di bidang komunikasi dan informatika di Kabupaten Banyumas?",
    answer: (
      <>
        <p>Pelanggaran di bidang komunikasi dan informatika di Kabupaten Banyumas dapat diadukan melalui:</p>
        <ul>
          <li>Dinas Komunikasi dan Informatika Kabupaten Banyumas</li>
          <li>Situs web pengaduan online pemerintah daerah</li>
          <li>Aparat penegak hukum</li>
        </ul>
      </>
    ),
  },
  {
    question: "Apa saja visi dan misi Dinas Komunikasi dan Informatika Kabupaten Banyumas?",
    answer: (
      <>
        <p>
          <strong>Visi:</strong>
        </p>
        <p>Terwujudnya Kabupaten Banyumas yang maju, mandiri, dan sejahtera berbasis informasi dan komunikasi.</p>
      </>
    ),
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <PageLayout
      title="F.A.Q"
      description="Kumpulan pertanyaan yang sering diajukan terkait layanan, program, serta informasi Dinas Komunikasi dan Informatika Kabupaten Banyumas."
      breadcrumb="Beranda / F.A.Q"
      // heroImage dan heroClassName kalau mau bisa diisi juga
      heroImage="/bannerpemkab.png"
      // heroClassName="hero--inner"
    >
      {/* ini akan dirender di dalam <main className="page-content"> milik PageLayout */}
      <div className={styles.faqPage}>
        <section className={styles.faqIntro}>
          <h2>Frequently Asked Questions (FAQ)</h2>
          <p>Silakan klik salah satu pertanyaan di bawah untuk melihat jawabannya.</p>
        </section>

        <section className={styles.faqList}>
          {faqs.map((item, index) => (
            <div className={styles.faqItem} key={index}>
              <button
                className={styles.faqQuestion}
                onClick={() => toggleIndex(index)}
                aria-expanded={openIndex === index}
              >
                <span>{item.question}</span>
                <span className={styles.faqIcon}>{openIndex === index ? "−" : "+"}</span>
              </button>

              {openIndex === index && (
                <div className={styles.faqAnswer}>
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </section>
      </div>
    </PageLayout>
  );
}
