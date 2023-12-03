import './globals.css';
import ScrollToTopButton from '@/components/ScrollToTop';
import BackgroundMusicButton from '@/components/BackgroundMusicButton';
import SnowFallBackground from '@/components/SnowFallBackground';
import { merienda } from './fonts';

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
        {children}
        <ScrollToTopButton />
        <BackgroundMusicButton />
        <SnowFallBackground />
      </body>
    </html>
  );
}
