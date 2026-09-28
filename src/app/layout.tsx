import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Sino Magan Indus | PCB & Electronics Global Trade",
    template: "%s | Sino Magan Indus",
  },
  description: "Bridging Markets. Delivering Trust in Electronics Manufacturing. Reliable Indian PCB and PCBA manufacturing for mid-tier international buyers.",
  keywords: [
    "PCB Manufacturing", 
    "PCBA Assembly India", 
    "Electronics Sourcing Agency", 
    "Printed Circuit Board Sourcing", 
    "SMT Assembly", 
    "Turnkey PCB Assembly",
    "Indian PCB Suppliers", 
    "Global Trade Electronics", 
    "Sino Magan Indus", 
    "Indian Electronics Manufacturing",
    "Bengaluru PCB Hub",
    "Pune Electronics Sourcing",
    "Chennai Electronics Manufacturing",
    "Custom Electromechanical Assemblies",
    "B2B Electronics Procurement",
    "HDI PCB Fabrication",
    "BGA Assembly Services"
  ].join(", "),
  authors: [{ name: "Sino Magan Indus Global Trade LLP" }],
  creator: "Sino Magan Indus",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sinomagan.com",
    title: "Sino Magan Indus | PCB & Electronics Global Trade",
    description: "Bridging Markets. Delivering Trust in Electronics Manufacturing. Connecting mid-tier international buyers with verified Indian PCB manufacturers.",
    siteName: "Sino Magan Indus",
    images: [{
      url: "/logo.png",
      width: 800,
      height: 600,
      alt: "Sino Magan Indus Logo"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Sino Magan Indus | PCB & Electronics Global Trade",
    description: "Connecting mid-tier international buyers with verified Indian PCB manufacturers.",
    images: ["/logo.png"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  }
};

import ScrollToTop from "@/components/ScrollToTop";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-50 text-slate-900`}>
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
