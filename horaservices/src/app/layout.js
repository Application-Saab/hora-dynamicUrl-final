'use client';
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { GoogleTagManager } from '@next/third-parties/google'

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Chef for Party | Balloon Decoration for Party | food Delivery for Party | chef Near me | Decoration at home | Ballon Decoration Near me  - Hora</title>
        <meta name="description" content="Want to book a cook for home near you? Hire skilled cooks for a day or book a chef for a party at home with Hora. Get chef for a birthday or house party in Mumbai, Bangalore & Delhi NCR, Hora, Hora services, Horaservices" />
        <meta name="keywords" content="Personal chef, private chef to cook in home in India, home chef, book a cook near you, chef at home, Private cook in Mumbai, Book a cook for home near you, Hire Chef in Bangalore, Private Chef in Delhi, Catering service, Hora, Hora services, Horaservices" />
        <meta property="og:title" content="Chef for Party | Balloon Decoration for Party | food Delivery for Party | chef Near me | Decoration at home | Ballon Decoration Near me  - Hora" />
        <meta property="og:description" content="Want to book a cook for home near you? Hire skilled cooks for a day or book a chef for a party at home with Hora. Get chef for a birthday or house party in Mumbai, Bangalore & Delhi NCR, Hora, Hora services, Horaservices" />
        <meta property="og:image" content="https://horaservices.com/api/uploads/attachment-1706520980436.png" />
        {/* <script type="application/ld+json">{scriptTag}</script> */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Hora Services" />
        <meta property="og:url" content="https://horaservices.com" />
        <meta property="og:type" content="website" />

        <GoogleTagManager gtmId="GTM-K3SCKLTZ" />
        

      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
