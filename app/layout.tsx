import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";
import fs from "fs";
import path from "path";

// Ensure favicon.ico exists in public and app directories for direct browser requests
if (typeof window === "undefined") {
  try {
    const src = path.join(process.cwd(), "public", "images", "logo.png");
    const destPublic = path.join(process.cwd(), "public", "favicon.ico");
    const destApp = path.join(process.cwd(), "app", "favicon.ico");
    if (fs.existsSync(src)) {
      if (!fs.existsSync(destPublic)) fs.copyFileSync(src, destPublic);
      if (!fs.existsSync(destApp)) fs.copyFileSync(src, destApp);
    }
  } catch { }
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "hyphen | Private members club for multi-hyphenate creatives",
  description: "hyphen - A private members club for multi-hyphenate creatives.",
  metadataBase: new URL('https://hyphen.tcsnetwork.co.uk'),
  openGraph: {
    title: "hyphen",
    description: "A private members club for multi-hyphenate creatives.",
    url: 'https://hyphen.tcsnetwork.co.uk',
    siteName: 'hyphen',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'hyphen',
    description: "Private members club for multi-hyphenate creatives.",
  },
  icons: {
    icon: [
      { url: '/images/logo.png', type: 'image/png' },
      { url: '/favicon.ico', type: 'image/x-icon' }
    ],
    shortcut: '/images/logo.png',
    apple: '/images/logo.png',
  }
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" href="/images/logo.png" type="image/png" sizes="any" />
        <link rel="shortcut icon" href="/images/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/logo.png" />
      </head>
      <body className="min-h-full flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="light" forcedTheme="light" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
