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

        <script async src="https://pub-64d7c9742ee54006ae9f38e02aa8539e.r2.dev/staging/f92fc7c3-c1bd-45de-8e11-8553a8b3253e/analytics.min.js" data-pid="f92fc7c3-c1bd-45de-8e11-8553a8b3253e"></script>
        <script async src="https://pub-64d7c9742ee54006ae9f38e02aa8539e.r2.dev/2bbc5a80-eed2-49ea-a785-d665aea42e0a/script.min.js" data-pid="2bbc5a80-eed2-49ea-a785-d665aea42e0a"></script>
        <Script id="reb2b" strategy="afterInteractive">
          {`
            !function(key) {
              if (window.reb2b) return;
              window.reb2b = { loaded: true };
              var s = document.createElement("script");
              s.async = true;
              s.src = "https://ddwl4m2hdecbv.cloudfront.net/b/" + key + "/" + key + ".js.gz";
              document.getElementsByTagName("script")[0]
                .parentNode.insertBefore(s, document.getElementsByTagName("script")[0]);
            }("DNXY8HJKR7O0");
          `}
        </Script>
      </head>

      <body className={sora.className}>
        {children}
      </body>
    </html>
  );
}
