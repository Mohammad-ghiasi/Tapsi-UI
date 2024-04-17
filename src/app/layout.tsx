import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import { Box, Container } from "@mui/material";


import localFont from "next/font/local"
const inter = localFont({ src: "../../public/asset/fonts/lalezar/Lalezar-Regular.ttf" });



export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html dir="rtl" lang="en">
      <body>
        <header>
          <Navbar />
        </header>
        <main>
            {children}
        </main>

      </body>
    </html>
  );
}
