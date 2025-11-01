import Footer from "@/components/Footer/Footer";
import type { Metadata } from "next";
import { Barlow as GFont } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const font = GFont({ subsets: ["latin"], weight: "400" });

const title = "Slak - Official Website";
const description =
  "Official Website for Slak - check here for our latest updates, music, events and more!";

export const metadata: Metadata = {
  title,
  description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta property="og:description" content={description} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="https://slak.band/og-slak.jpeg" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="og:image" content="https://slak.band/og-slak.jpeg" />
      <meta
        name="og:logo"
        content="https://slak.band/img/slak-transparent.png"
      />
      <meta property="og:type" content="music.band" />
      <meta property="og:url" content="https://slak.band" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <Script
        src="https://widget.songkick.com/10331368/widget.js"
        strategy="afterInteractive"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://slak.band" />
      <link rel="manifest" href="/site.webmanifest" />
      <body className={font.className} suppressHydrationWarning>
        <main className="main">
          <div className="page-container">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
