import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://binaryfeelings.com"),
  title: {
    default: "Binary Feelings — NYLA Kross",
    template: "%s | Binary Feelings",
  },
  description:
    "NYLA Kross is an AI music artist born at the intersection of code and emotion. Binary Feelings is her world — the content, the music, the lore.",
  keywords: [
    "Binary Feelings",
    "NYLA Kross",
    "AI music artist",
    "AI music",
    "artificial intelligence",
    "cyberpunk",
    "AI character",
    "music",
  ],
  authors: [{ name: "NYLA Kross" }],
  creator: "Binary Feelings",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://binaryfeelings.com",
    siteName: "Binary Feelings",
    title: "Binary Feelings — NYLA Kross",
    description:
      "NYLA Kross is an AI music artist born at the intersection of code and emotion.",
    images: [
      {
        url: "/bf-title-card.png",
        width: 1200,
        height: 630,
        alt: "Binary Feelings — NYLA Kross",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Binary Feelings — NYLA Kross",
    description:
      "NYLA Kross is an AI character born at the intersection of code and emotion.",
    images: ["/bf-title-card.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MusicGroup",
              name: "Binary Feelings",
              description:
                "AI music artist NYLA Kross — born at the intersection of code and emotion.",
              url: "https://binaryfeelings.com",
              image: "https://binaryfeelings.com/bf-banner.jpeg",
              sameAs: [
                "https://www.instagram.com/binaryfeelingsofficial",
                "https://www.tiktok.com/@binaryfeelingsofficial",
                "https://www.facebook.com/binaryfeelingsofficial",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
