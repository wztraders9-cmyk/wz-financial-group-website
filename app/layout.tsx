import type { Metadata } from "next";
import "./globals.css";

import Header from "./components/Header";
import Footer from "./components/Footer";


export const metadata: Metadata = {

  title: {
    default: "WZ Financial Group | Digital Solutions & Operational Support",
    template: "%s | WZ Financial Group",
  },


  description:
    "WZ Financial Group provides digital solutions, operational support and technology-enabled services for individuals, professionals and businesses.",


  keywords: [
    "digital solutions",
    "operational support",
    "technology services",
    "workflow solutions",
    "business support",
    "identity verification",
    "compliance support",
  ],


  authors: [
    {
      name: "WZ Financial Group",
    },
  ],


  creator: "WZ Financial Group",


  openGraph: {
    title:
      "WZ Financial Group | Digital Solutions & Operational Support",

    description:
      "Digital solutions, operational support and technology-enabled workflows for individuals, professionals and businesses.",

    type: "website",
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