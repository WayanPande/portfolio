import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";

import "./globals.css";
import React from "react";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  robots: "all",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body>
        <Navbar />
        <main className="bg-grid-small-black/20 dark:bg-grid-small-white/20">
          <div className="pointer-events-none fixed inset-0 flex items-center justify-center bg-white mask-[radial-gradient(ellipse_at_center,transparent_60%,black)] dark:bg-black"></div>
          {children}
        </main>
      </body>
    </html>
  );
}
