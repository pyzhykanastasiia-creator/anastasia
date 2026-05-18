import type { Metadata } from 'next';
import './globals.css';
import Providers from './providers';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Bride Palette',
  description: 'Key words: hair, make-up, wedding, bridal, hair stylist, make-up artist, hair and make-up artist',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>

        <Script
          id="schema-markup"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {`
            {
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Bride Palette",
              "image": "https://www.bridepalette.com/logo.jpg",
              "@id": "https://www.bridepalette.com",
              "url": "https://www.bridepalette.com",
              "telephone": "+31600000000",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Amsterdam",
                "addressRegion": "North Holland",
                "addressCountry": "NL"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 52.3676,
                "longitude": 4.9041
              },
              "sameAs": [
                "https://www.instagram.com/bridepalette/"
              ],
              "founder": {
                "@type": "Person",
                "name": "Anastasiia Pyzhyk"
              },
              "description": "High-end wedding hair and makeup services in Amsterdam, Almere, and across the Netherlands. Specialized in architectural hair cutting techniques and luxury bridal styling.",
              "areaServed": [
                {"@type": "Place", "name": "Amsterdam"},
                {"@type": "Place", "name": "Almere"},
                {"@type": "Place", "name": "Utrecht"},
                {"@type": "Place", "name": "Rotterdam"},
                {"@type": "Place", "name": "The Hague"},
                {"@type": "Place", "name": "Delft"},
                {"@type": "Place", "name": "Lelystad"},
                {"@type": "Place", "name": "Bussum"},
                {"@type": "Place", "name": "Naarden"},
                {"@type": "Place", "name": "Hilversum"},
                {"@type": "Place", "name": "Haarlem"},
                {"@type": "Place", "name": "Amersfoort"}
              ]
            }
          `}
        </Script>
      </body>
    </html>
  );
}
