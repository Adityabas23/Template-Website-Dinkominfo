// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HeaderWrapper from "@/component/HeaderWrapper"; 

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
        <HeaderWrapper />
        <main>{children}</main>
      </body>
    </html>
  );
}