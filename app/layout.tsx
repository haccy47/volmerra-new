import type { Metadata } from "next";
import { Cinzel, Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import MobileNavbar from "@/components/MobileNavbar";


const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
});


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Volmerra",
  description: "A world shaped by stones, legends and forgotten powers.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (

    <html lang="en">

      <body
        className={`
        ${cinzel.variable}
        ${inter.variable}
        antialiased
        `}
      >

        <Navbar />

        <MobileNavbar />

        {children}

      </body>

    </html>

  );
}