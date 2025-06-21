import type { Metadata } from "next";
import { Poppins } from "next/font/google"; // Changed font to Poppins 💅
import "./globals.css";
import React from "react";
import Script from "next/script";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Alisha Khan | Creative Frontend Dev & Agentic AI Explorer 💖",
  description:
    "I design elegant websites & build smart AI agents | Passionate about clean UI, human-centered tech, and learning by creating ✨",

  openGraph: {
    title: "Alisha Khan | Creative Frontend Dev & Agentic AI Explorer 💖",
    description:
      "I design elegant websites & build smart AI agents | Passionate about clean UI, human-centered tech, and learning by creating ✨",
    url: "https://alisha.dev",
    siteName: "Alisha Khan Portfolio",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Alisha Khan - Portfolio",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
    countryName: "Pakistan",
  },

  twitter: {
    card: "summary_large_image",
    title: "Alisha Khan | Creative Frontend Dev & Agentic AI Explorer 💖",
    description:
      "I design elegant websites & build smart AI agents | Passionate about clean UI, human-centered tech, and learning by creating ✨",
    images: ["/og.png"],
    creator: "@alishakhan", // Replace with your real handle if available
    site: "@alishakhan",
  },

  metadataBase: new URL("https://alisha.dev"),
  alternates: {
    canonical: "https://alisha.dev",
  },

  keywords: [
    "Alisha Khan",
    "Frontend Developer",
    "Agentic AI",
    "Chainlit Projects",
    "Creative Portfolio",
    "UI/UX",
    "Next.js",
    "Tailwind CSS",
    "Women in Tech",
    "Pakistan Developer",
    "OpenAI Agents",
    "AI Chatbot",
  ],
  authors: [{ name: "Alisha Khan", url: "https://alisha.dev" }],
  creator: "Alisha Khan",
  publisher: "Alisha Khan",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  other: {
    "pinterest-media": "/og.png",
    "pinterest-description":
      "I design elegant websites & build smart AI agents | Passionate about clean UI, human-centered tech, and learning by creating ✨",

    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "Alisha Khan",

    "msapplication-TileColor": "#111111",
    "msapplication-TileImage": "/og.png",

    "theme-color": "#111111",
    "msapplication-navbutton-color": "#111111",
  },
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.className}>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXX"
      />
      <Script id="google-analytics">
        {`
   window.dataLayer = window.dataLayer || [];
   function gtag(){dataLayer.push(arguments);}
   gtag('js', new Date());
   gtag('config', 'G-XXXXXXXXX');
        `}
      </Script>
      <body className="bg-black text-white"><Navbar />{children}</body>
    </html>
  );
}
