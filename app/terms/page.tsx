import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingCTA from "../components/FloatingCTA";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions | hyphen.ldn",
  description: "Terms and conditions governing membership of hyphen.ldn private members' community.",
};

const SECTIONS = [
  {
    id: "1",
    title: "1. Membership",
    items: [
      "1.1 hyphen.ldn is a private members' community. Membership is personal to you and cannot be transferred, shared, or resold.",
      "1.2 We offer three tiers: Social, Full, and Founding, as described on our website and in our FAQ. Prices and inclusions may change for future members, but any change to your own tier's price will be communicated to you in advance.",
      "1.3 We reserve the right to decline or revoke membership at our discretion, including where a member's conduct is inconsistent with the spirit of the community.",
    ],
  },
  {
    id: "2",
    title: "2. Fees and billing",
    items: [
      "2.1 Membership fees are billed monthly or annually, depending on the option you choose at sign-up.",
      "2.2 Fees are charged in advance and are non-refundable.",
      "2.3 If a payment fails, we may suspend your access to the space and community channel until payment is resolved.",
      "2.4 We may change membership fees from time to time. Existing members will be given at least 45 days' notice before any price change takes effect on their account.",
    ],
  },
  {
    id: "3",
    title: "3. Cancellation",
    items: [
      "3.1 Monthly members may cancel at any time. Cancellation takes effect at the end of your current billing period, and no partial refunds are given for time already paid.",
      "3.2 We may cancel or suspend your membership if you breach these terms, including the code of conduct in section 6.",
    ],
  },
  {
    id: "4",
    title: "4. Space access",
    items: [
      "4.1 Access to the studio is limited to the sessions included in your tier: late Wednesdays for Social members, and late Wednesdays plus full-day Fridays for Full and Founding members.",
      "4.2 We may occasionally close the space or amend opening hours for maintenance, private hire, or events. Where possible we will give advance notice.",
      "4.3 Guest passes are limited to two per member per month and are subject to space capacity. Guests must be accompanied by the member at all times.",
      "4.4 Non-members may access the space via day passes, as described in our FAQ, subject to availability.",
    ],
  },
  {
    id: "5",
    title: "5. Events, clinics and workshops",
    items: [
      "5.1 Monthly clinics and workshops are included in membership but may have limited capacity. Booking may be required.",
      "5.2 We may record sessions for internal or promotional use. We will let members know when a session is being recorded.",
    ],
  },
  {
    id: "6",
    title: "6. Code of conduct",
    items: [
      "6.1 hyphen.ldn is built on trust and belonging. Members are expected to treat other members, guests and staff with respect.",
      "6.2 We do not tolerate harassment, discrimination, or any behaviour that undermines the safety or comfort of others in the space.",
      "6.3 Breach of this code may result in suspension or termination of membership, without refund.",
    ],
  },
  {
    id: "7",
    title: "7. Liability",
    items: [
      "7.1 You use the space and attend events at your own risk. We are not liable for loss, damage, or injury except where caused by our negligence.",
      "7.2 We recommend members do not leave valuables unattended in the space.",
      "7.3 Nothing in these terms limits liability for death or personal injury caused by our negligence, or for fraud.",
    ],
  },
  {
    id: "8",
    title: "8. Community channel",
    items: [
      "8.1 Our community channel runs on Discord. By joining, you agree to use it respectfully and not to share member contact details or content outside the group without permission.",
      "8.2 We may remove members from the channel for conduct inconsistent with section 6.",
    ],
  },
  {
    id: "9",
    title: "9. Changes to these terms",
    items: [
      "9.1 We may update these terms from time to time. We will notify members of material changes, and continued membership after such notice constitutes acceptance.",
    ],
  },
];

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background font-sans">
      <Navbar />

      <main className="flex-1 pt-32 pb-24 px-6 sm:px-12">
        <div className="mx-auto max-w-4xl">
          <header className="mb-16 border-b border-foreground/10 pb-12">
            <div className="text-xs font-bold uppercase tracking-[0.3em] text-foreground/60 mb-4">
              hyphen.ldn
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold uppercase leading-none tracking-tight mb-6">
              Terms & Conditions
            </h1>
            <p className="text-lg sm:text-xl text-foreground/70 leading-relaxed max-w-2xl">
              These terms govern membership of hyphen.ldn. By signing up, you agree to them.
            </p>
          </header>

          <div className="space-y-12">
            {SECTIONS.map((section) => (
              <section key={section.id} className="border-b border-foreground/10 pb-10">
                <h2 className="text-xl sm:text-2xl font-semibold uppercase tracking-wider mb-6 text-foreground">
                  {section.title}
                </h2>
                <div className="space-y-4 text-foreground/80 leading-relaxed text-sm sm:text-base">
                  {section.items.map((item, idx) => (
                    <p key={idx}>{item}</p>
                  ))}
                </div>
              </section>
            ))}

            <section className="pb-10">
              <h2 className="text-xl sm:text-2xl font-semibold uppercase tracking-wider mb-6 text-foreground">
                10. Contact
              </h2>
              <p className="text-foreground/80 leading-relaxed text-sm sm:text-base">
                Questions about these terms can be sent to{" "}
                <a
                  href="mailto:hello@tcsnetwork.co.uk"
                  className="font-medium underline underline-offset-4 hover:text-foreground transition-colors"
                >
                  hello@tcsnetwork.co.uk
                </a>{" "}
                or raised in the community channel.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
      <FloatingCTA />
    </div>
  );
}
