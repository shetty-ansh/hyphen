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
  } catch {}
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
  title: "hyphen | London's Exclusive Events Community",
  description: "hyphen - An exclusive events community and private club based in London. Meticulous design, bespoke events, and modern elegance.",
  metadataBase: new URL('https://hyphen.ldn'),
  openGraph: {
    title: "hyphen",
    description: "An exclusive events community and private club based in London.",
    url: 'https://hyphen.ldn',
    siteName: 'hyphen',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'hyphen',
    description: "London's exclusive events community and private club.",
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
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
