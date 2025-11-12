// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/component/header"; // Kita impor Header di sini

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dinkominfo Banyumas - Modern",
  description: "Website modern Dinkominfo Kabupaten Banyumas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={inter.className}>  
        <Header /> {/* Header akan tampil di semua halaman */}
        <main>{children}</main>
      </body>
    </html>
  );
}