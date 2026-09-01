"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

const FAQ_DATA: FAQItem[] = [
  {
    question: "What is hyphen.ldn?",
    answer: (
      <p>
        hyphen.ldn is a private members' community for London's multi-hyphenates: the creatives, founders and professionals who live between disciplines. The designer who is also a founder. The producer who also writes. The consultant who is also an artist.
      </p>
    ),
  },
  {
    question: "Who is it for?",
    answer: (
      <p>
        Anyone who refuses to be one thing. If you're building across disciplines and want a defined group of people worth knowing, a rhythm of things to actually show up for, and a room that feels like yours, this is for you.
      </p>
    ),
  },
  {
    question: "What are the membership tiers?",
    answer: (
      <div className="space-y-3">
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong className="font-semibold text-foreground">Social, £15/month:</strong> the community channel, monthly clinics, workshops, and space access on Wednesday evenings.
          </li>
          <li>
            <strong className="font-semibold text-foreground">Full, £30/month:</strong> everything in Social, plus full-day Friday coworking, guest passes, and priority on studio hire and event tickets.
          </li>
        </ul>
      </div>
    ),
  },
  {
    question: "What's the difference between Social and Full?",
    answer: (
      <p>
        Social gets you the community and our signature late Wednesdays. Full adds the full-day Friday coworking on top, along with guest passes and priority access. If you're mainly here for the network and the evening sessions, start with Social. If you want a regular desk too, go Full.
      </p>
    ),
  },
  {
    question: "What do I get as a member, beyond the space?",
    answer: (
      <div className="space-y-3">
        <p>Every member gets:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>A monthly clinic on real business problems: pricing, contracts, funding, hiring your first freelancer</li>
          <li>A monthly workshop, shaped by what the community asks for: editing, pitching, storytelling, personal brand</li>
          <li>A community channel on Discord</li>
          <li>Two guest passes a month</li>
          <li>Discounted Common Sense Studios hire, plus priority or discounted tickets to our events and recordings</li>
        </ul>
      </div>
    ),
  },
  {
    question: "I'm not a member, can I still visit or hire the space?",
    answer: (
      <p>
        Yes. Non-member day passes are available for Fridays and late Wednesdays (roughly £15 to £25), and event tickets and recordings are available at full price. Studio and production hire is also open through Common Sense Studios.
      </p>
    ),
  },
  {
    question: "How do I join?",
    answer: (
      <p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfsKXRcDdDobfxjmQEQQUaNDGMuihTUVcQ9_XQ0wFCtPED7lA/viewform?usp=header"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium underline underline-offset-4 hover:text-foreground transition-colors"
        >
          Apply via our application form &rarr;
        </a>
      </p>
    ),
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full bg-background py-24 sm:py-32 px-6 sm:px-12">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[10vw] font-bold uppercase leading-[0.85] tracking-tighter sm:text-[6vw] mb-12">
            FAQ
          </h2>
        </motion.div>

        <div className="flex flex-col border-t border-foreground/20">
          {FAQ_DATA.map((item, index) => (
            <div key={index} className="border-b border-foreground/20">
              <button
                onClick={() => toggleOpen(index)}
                className="flex w-full items-center justify-between py-6 text-left focus:outline-none group"
              >
                <span className="text-xl sm:text-2xl font-semibold tracking-tight transition-colors group-hover:text-foreground/70 pr-4">
                  {item.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="ml-4 flex-shrink-0"
                >
                  <Plus className="h-6 w-6 sm:h-8 sm:w-8" strokeWidth={1.5} />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pb-8 text-lg text-foreground/70 max-w-2xl leading-relaxed">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
