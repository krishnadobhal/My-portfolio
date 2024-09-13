"use client"
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Sora } from 'next/font/google'
import "./globals.css";


const sora = Sora({
  subsets: ['latin'],
  display: 'swap',
})
 


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link href="https://fonts.googleapis.com/css2?family=Sora:wght@100..800&display=swap" rel="stylesheet"></link>
      <body
        className={sora.className}
      >
        {children}
      </body>
    </html>
  );
}
