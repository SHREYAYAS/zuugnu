import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LayoutContent from "@/components/LayoutContent";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Zuugnu - Community-Driven Gig Platform",
  description: "Join India's fastest-growing community-driven platform for pre-paid gigs, bidding opportunities, and skill-building. Earn by creating, amplifying, and delivering value—secured by escrow, powered by trust.",
  keywords: "gig platform, freelance work, bidding, skill-building, India, pre-paid gigs, community",
  authors: [{ name: "Zuugnu Team" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://zuugnu.com",
    title: "Zuugnu - Community-Driven Gig Platform",
    description: "Join India's fastest-growing community-driven platform for pre-paid gigs, bidding opportunities, and skill-building.",
    images: [
      {
        url: "https://zuugnu.com/home.2.png",
        width: 1200,
        height: 630,
        alt: "Zuugnu Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zuugnu - Community-Driven Gig Platform",
    description: "Join India's fastest-growing gig platform",
    images: ["https://zuugnu.com/home.2.png"],
  },
  icons: {
    icon: [
      {
        url: '/favicon.icon.1.png',
        sizes: '64x64',
        type: 'image/png',
      },
      {
        url: '/favicon.icon.1.png',
        sizes: '128x128',
        type: 'image/png',
      },
      {
        url: '/favicon.icon.1.png',
        sizes: '192x192',
        type: 'image/png',
      },
    ],
    apple: {
      url: '/favicon.icon.1.png',
      sizes: '180x180',
      type: 'image/png',
    },
    shortcut: {
      url: '/favicon.icon.1.png',
      sizes: '192x192',
      type: 'image/png',
    },
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#6C63FF" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Zuugnu" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/favicon.icon.1.png" />
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
        />
      </head>
      <body>
        <LayoutContent>
          {children}
        </LayoutContent>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                navigator.serviceWorker.register('/sw.js').catch(err => console.log('SW registration failed: ', err));
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
