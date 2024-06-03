import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Autíčková appka',
  description: '' + '' + 'Nejlepší appka na autíčka',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <link rel="favicon" href="/favicon.ico" />
      <body className={inter.className}>
        <Header></Header>
        <main className="container mx-auto p-2">
          <div className="mx-20">{children}</div>
        </main>
        <Footer></Footer>
      </body>
    </html>
  );
}
