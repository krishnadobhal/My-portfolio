"use client"
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
      <body
        className={sora.className}
      >
        {children}
      </body>
    </html>
  );
}
