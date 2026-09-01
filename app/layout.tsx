import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans, Great_Vibes } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const serif = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const script = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-script",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Twist & Bloom | Bespoke Luxury Hampers & Personalised Gifting",
  description:
    "Thoughtfully curated custom hampers made with love for your special events. Pick what you love, add a personal touch, and make every moment truly meaningful.",
  keywords: [
    "custom hampers",
    "personalized gift boxes",
    "birthday hampers",
    "anniversary gifts",
    "twist_n_bloom",
    "baby shower hampers",
    "engagement gift boxes",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} ${script.variable}`}>
      <body className="min-h-screen flex flex-col antialiased selection:bg-[#F6E6E8] selection:text-[#7A2036]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
