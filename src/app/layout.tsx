import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

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
      <body className={inter.className}>
        <Link href="/">Home</Link>
        <Link href="/car-museum">Car Museum</Link>
        <Link href="/our-journey">Our Journey</Link>
        <Link href="/contact-us">Contact Us</Link>
        <Link href="/meet-the-team">Meet the Team</Link>
        <Link href="/partners">Partners</Link>
        <Link href="/sustainability">Sustainability</Link>
        <Link href="/vega-inspire">Vega Inspire</Link>
        <Link href="/blog">Blog</Link>
        {children}
      </body>
    </html>
  );
}
