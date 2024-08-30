/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./header";
import { MantineProvider } from "@mantine/core";
import Footer from "./footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vega Racing",
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${inter.className} bg-background font-[figtree] min-h-screen flex flex-col items-center`}
      >
        <MantineProvider>
          <Navbar />
          <div className="flex flex-row w-full grow">
            <div className="parallax bg-gray-300 shadow-[inset_-10px_0px_10px_-10px_rgb(0,0,0,1.00),inset_0px_10px_10px_-10px_rgb(0,0,0,1.00),inset_0px_-10px_10px_-10px_rgb(0,0,0,1.00)] grow z-10" />
            <div className="px-5 sm:px-10 py-5 w-full max-w-[1279px] shadow-[inset_0px_10px_10px_-10px_rgb(0,0,0,0.70),inset_0px_-10px_10px_-10px_rgb(0,0,0,0.70)] flex flex-col">
              {children}
            </div>
            <div className="parallax bg-gray-300 shadow-[inset_10px_0px_10px_-10px_rgb(0,0,0,1.00),inset_0px_10px_10px_-10px_rgb(0,0,0,1.00),inset_0px_-10px_10px_-10px_rgb(0,0,0,1.00)] grow z-10" />
          </div>
          <Footer />
        </MantineProvider>
      </body>
    </html>
  );
}
