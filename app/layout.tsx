import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navbar from './components/navbar';
import { SidebarProvider } from '@/components/ui/sidebar';
import ShoppingCart from './components/shoppingCart';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'BLOCKRAVE',
  description: 'BLOCKRAVE CLOTHING',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <SidebarProvider defaultOpen={false}>
          <Navbar />
          <ShoppingCart />
        </SidebarProvider>
        <div>{children}</div>
      </body>
    </html>
  );
}
