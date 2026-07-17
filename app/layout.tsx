import type { Metadata } from "next";
import "./globals.css";

import Header from "./components/Header";
import Footer from "./components/Footer";


export const metadata: Metadata = {

  title: {
  default: "WZ Financial Group | Financial Services & Professional Support",
  template: "%s | WZ Financial Group",
},


  description:
  "WZ Financial Group provides financial guidance, compliance support, operational assistance and digital solutions designed for individuals and professionals.",


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
    "WZ Financial Group | Financial Services & Professional Support",

  description:
    "Financial guidance, compliance support, operational assistance and digital solutions for individuals and professionals.",

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