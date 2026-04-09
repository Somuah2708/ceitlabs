import { DM_Sans, Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-dm-sans",
});

export const metadata = {
  metadataBase: new URL("https://ceit.agency"),
  title: {
    default: "CEIT - Central Innovative Technologies",
    template: "%s | CEIT",
  },
  description:
    "Central Innovative Technologies explores problems across industries and builds software solutions that ship fast and scale.",
  keywords: [
    "CEIT",
    "Central Innovative Technologies",
    "software agency",
    "web development",
    "mobile app development",
    "AI automation",
    "custom software",
    "product studio",
  ],
  openGraph: {
    title: "CEIT - We find problems. We ship solutions.",
    description:
      "A software innovation studio building web, mobile, AI, and automation products across industries.",
    url: "https://ceit.agency",
    siteName: "CEIT",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "CEIT - Central Innovative Technologies",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CEIT - Central Innovative Technologies",
    description:
      "We explore niche industry problems and build software solutions that scale.",
    images: ["/twitter-image"],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
