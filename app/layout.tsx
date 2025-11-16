// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import HeaderWrapper from '@/component/HeaderWrapper';
import { LanguageProvider } from './i18n/LanguageContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dinkominfo Banyumas - Modern',
  description: 'Website modern Dinkominfo Kabupaten Banyumas',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <LanguageProvider>
          <HeaderWrapper />
          <main>{children}</main>
        </LanguageProvider>
      </body>
    </html>
  );
}
