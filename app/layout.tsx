import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { NavBar } from '@/components/NavBar';
import { Toaster } from '@/components/ui/toaster';

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'MedEase AI - Your Personal Health Assistant',
  description: 'AI-powered health assistant for comprehensive medical care and wellness',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <NavBar />
        <main className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-50">
          {children}
        </main>
        <Toaster />
      </body>
    </html>
  );
}