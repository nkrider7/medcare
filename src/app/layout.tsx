import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Universal/Navbar";
import {  Poppins  } from 'next/font/google';
import Footer from "@/components/Universal/Footer";
import Script from "next/script";
import { Toaster } from "@/components/ui/sonner";

// const manrope = Manrope({
//   subsets: ['latin'],
//   weight: ['200', '400', '600', '800'],
// });

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200', '400', '600', '800'],
});

export const metadata: Metadata = {
  title: "MedCare",
  description: "Connecting Top Medical Care Quality Medical Treatment 24/7 You to Trusted Medical Care Worldwide",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <head>
       <Script
          src="/assets/scripts/lang-config.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/assets/scripts/translation.js"
          strategy="beforeInteractive"
        />
        <Script
          src="//translate.google.com/translate_a/element.js?cb=TranslateInit"
          strategy="afterInteractive"
        />
      </head>
      <body
        className={`${poppins.className} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
