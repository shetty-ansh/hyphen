import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";

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
    icon: '/favicon.ico?v=2',
  }
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
