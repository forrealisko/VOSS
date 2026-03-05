import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import SmoothScroll from '@/components/SmoothScroll';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StickyMobileCTA from '@/components/StickyMobileCTA';

export const metadata: Metadata = {
  title: 'Elena Voss Studio – Fine-Art and Fashion Photography in Tuscany',
  description: 'Award-winning photographer Elena Voss captures timeless luxury for high-end clients. Explore portfolios, shop prints, and inquire for sessions.',
  keywords: 'fine art photography, fashion photographer Tuscany, luxury portraits Europe',
  openGraph: {
    title: 'Elena Voss Studio – Fine-Art and Fashion Photography in Tuscany',
    description: 'Award-winning photographer Elena Voss captures timeless luxury for high-end clients.',
    type: 'website',
    images: ['https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80&fm=webp'],
  },
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preload" href="/fonts/archivo-400.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/spacegrotesk-400.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Elena Voss',
              jobTitle: 'Fine-Art and Fashion Photographer',
              url: 'https://elenavossstudio.com',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Tuscany',
                addressCountry: 'IT',
              },
              sameAs: [
                'https://instagram.com/elenavossstudio',
                'https://pinterest.com/elenavossstudio',
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ImageGallery',
              name: 'Elena Voss Studio Portfolio',
              description: 'Fine-art photography portfolio featuring weddings, editorial, and private commissions.',
            }),
          }}
        />
      </head>
      <body>
        <ThemeProvider>
          <SmoothScroll>
            <Navbar />
            <main>{children}</main>
            <Footer />
            <StickyMobileCTA />
          </SmoothScroll>
        </ThemeProvider>
        <div className="noise-overlay" aria-hidden="true" />
      </body>
    </html>
  );
}
