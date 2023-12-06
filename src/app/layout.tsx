import './globals.css';

import { merienda } from './fonts';
import { Suspense } from 'react';
import Loading from './loading';
import { Analytics } from '@vercel/analytics/react';

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
      <body className={merienda.className}>
        <Suspense fallback={<Loading />}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  );
}
