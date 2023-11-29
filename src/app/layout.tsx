import NavigationBar from '@/components/NavigationBar';
import './globals.css';
import { Merienda, Inter, Ephesis, Dosis } from 'next/font/google';
import HeadingSection from '@/components/HeadingSection';
import ScrollToTopButton from '@/components/ScrollToTop';
import BackgroundMusicButton from '@/components/BackgroundMusicButton';
import SnowFallBackground from '@/components/SnowFallBackground';
import { merienda } from './fonts';
import { Suspense } from 'react';

export const metadata = {
  title: 'Phú & Vy',
  description: 'Develop by Zevik7',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`overflow-x-hidden ` + merienda.className}>
        <HeadingSection />
        <Suspense
          fallback={
            <div className="text-6xl text-red-600 h-96 w-96 relative z-50">
              Loading feed...
            </div>
          }
        >
          {children}
        </Suspense>
        <ScrollToTopButton />
        <BackgroundMusicButton />
        <SnowFallBackground />
      </body>
    </html>
  );
}
