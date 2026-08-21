import { Archivo } from 'next/font/google'
import "./globals.css";
import type { Metadata } from "next";
import { LenisProvider } from "@/components/providers/lenis-provider";

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  variable: '--font-archivo',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Krishna Dobhal — Software Developer",
  description: "Backend systems and interfaces that hold up under load.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={archivo.variable}>
      <body className="font-sans">
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
