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
<script async src="https://pub-64d7c9742ee54006ae9f38e02aa8539e.r2.dev/staging/78dc587c-ba01-44ff-9c3f-ff67f87be36d/analytics.min.js" data-pid="78dc587c-ba01-44ff-9c3f-ff67f87be36d"></script>
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
