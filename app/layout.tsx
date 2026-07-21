import type { Metadata } from "next";
import "./globals.css";

import Header from "./components/Header";
import Footer from "./components/Footer";


export const metadata: Metadata = {
  metadataBase: new URL("https://elitesourcepoint.com"),

  title: {
    default: "Elite Source Point | Procurement & Sourcing Support",
    template: "%s | Elite Source Point",
  },

  description:
    "Elite Source Point provides procurement, sourcing and logistics support for individuals seeking assistance with product sourcing, purchasing coordination and delivery arrangements.",


  keywords: [
    "procurement support",
    "product sourcing",
    "purchase coordination",
    "supplier research",
    "logistics support",
  ],


  authors: [
    {
      name: "Elite Source Point",
    },
  ],


  creator: "Elite Source Point",


  openGraph: {
    title:
      "Elite Source Point | Procurement & Sourcing Support",

    description:
      "Procurement, sourcing and logistics support helping individuals coordinate product research, purchasing and delivery arrangements.",

    type: "website",
    siteName: "Elite Source Point",
    url: "https://elitesourcepoint.com",
  },


  robots: {
    index: true,
    follow: true,
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">

      <body>

        <Header />

        {children}

        <Footer />

      </body>

    </html>
  );
}