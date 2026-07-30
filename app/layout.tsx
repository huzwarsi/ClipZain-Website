import type { Metadata, Viewport } from 'next';
import './globals.css';
import CursorGlow from '@/components/CursorGlow';
import ProgressBar from '@/components/ProgressBar';
import Loader from '@/components/Loader';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

export const metadata: Metadata = {
  title: 'CLIPZEN STUDIO | Global Elite Creative Agency',
  description:
    'High-Converting Creatives For Every Screen. Product Ads, UGC Ads, Video Editing, High-CTR Thumbnails, Reels & Complete Content Suites.',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: true,
  viewportFit: 'cover',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
      </head>
      <body>
        <CursorGlow />
        <ProgressBar />
        <Loader />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
