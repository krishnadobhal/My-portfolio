"use client";

import { Sora } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://pub-64d7c9742ee54006ae9f38e02aa8539e.r2.dev/a579f40d-6c51-4292-92d0-89a72fd8a12b/script.min.js"
          data-pid="a579f40d-6c51-4292-92d0-89a72fd8a12b"
          strategy="afterInteractive"
        />
      </head>

      <body className={sora.className}>
        {children}
      </body>
    </html>
  );
}
