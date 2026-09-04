import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Georges Gewargis | Portfolio",
  description: "Personal portfolio of Georges Gewargis, a computer science student and software engineer based in St. Louis.",
  keywords: [
    "Georges Gewargis",
    "Software Engineer",
    "Full Stack Developer",
    "Django",
    "Next.js",
    "React",
    "Portfolio",
    "Computer Science Student",
    "St. Louis",
    "Chicago",
  ],
  authors: [{ name: "Georges Gewargis", url: "https://georgesgewargis.com" }],
  creator: "Georges Gewargis",
  openGraph: {
    title: "Georges Gewargis | Software Engineer",
    description:
      "Explore projects, skills, and experience from Georges Gewargis, a software engineer and CS student at WashU.",
    url: "https://georgesgewargis.com",
    siteName: "Georges Gewargis Portfolio",
    images: [
      {
        url: "/og-image.png", // Make this and place it in /public
        width: 1200,
        height: 630,
        alt: "Georges Gewargis Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Georges Gewargis | Portfolio",
    description:
      "Personal portfolio of Georges Gewargis, software engineer and CS student.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
