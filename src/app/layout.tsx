import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "UMT Prayer Beads | Utku Mert Tunçay | The Art of Prayer Bead Craftsmanship",
  description:
    "Geleneksel ustalıkla şekillenen, nadir malzemelerden üretilen el yapımı premium tesbihler.",
  openGraph: {
    title: "UMT Prayer Beads | Utku Mert Tunçay | The Art of Prayer Bead Craftsmanship",
    description: "Geleneksel ustalıkla şekillenen, nadir malzemelerden üretilen el yapımı premium tesbihler.",
    locale: "tr_TR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${cormorant.variable} ${dmSans.variable} h-full`}
    >
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
