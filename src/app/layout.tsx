import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Navbar from "./title";
import { MantineProvider } from "@mantine/core";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vega Racing F1",
  description: "Vega Racing's Official F1iS Website",
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
          href="https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.className} bg-[#F5F5F5] font-[figtree]`}>
        <MantineProvider>
          <Navbar />
        </MantineProvider>
        <div className="mx-5 sm:mx-10 my-5">{children}</div>
      </body>
    </html>
  );
}
