import Navbar from "../components/Navbar";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import FloatingCTA from "../components/FloatingCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | hyphen.tcsnetwork.co.uk",
  description: "Frequently asked questions about hyphen.tcsnetwork.co.uk membership, tiers, space access, and community.",
};

export default function FAQPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background font-sans">
      <Navbar />

      <main className="flex-1 pt-20">
        <FAQ />
      </main>

      <Footer />
      <FloatingCTA />
    </div>
  );
}
