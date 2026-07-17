import type { Metadata } from "next";
import "./globals.css";

import Header from "./components/Header";
import Footer from "./components/Footer";


export const metadata: Metadata = {

  title: {
    default: "WZ Financial Group | Financial Guidance & Digital Solutions",
    template: "%s | WZ Financial Group",
  },


  description:
    "WZ Financial Group provides modern financial guidance, digital solutions and professional support services for individuals, creators, professionals and businesses.",


  keywords: [
    "financial services",
    "financial guidance",
    "digital financial solutions",
    "professional support",
    "creator support",
    "business solutions",
    "financial technology",
  ],


  authors: [
    {
      name: "WZ Financial Group",
    },
  ],


  creator: "WZ Financial Group",


  openGraph: {
    title:
      "WZ Financial Group | Financial Guidance & Digital Solutions",

    description:
      "Modern financial guidance, digital solutions and professional support services for individuals, creators, professionals and businesses.",

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