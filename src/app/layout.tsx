import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LayoutContent from "@/components/LayoutContent";

export const metadata: Metadata = {
  title: "Zuugnu - Community-Driven Gig Platform",
  description: "Join India's fastest-growing community-driven platform for pre-paid gigs, bidding opportunities, and skill-building. Earn by creating, amplifying, and delivering value—secured by escrow, powered by trust.",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
        />
      </head>
      <body>
        <LayoutContent>
          {children}
        </LayoutContent>
      </body>
    </html>
  );
}
