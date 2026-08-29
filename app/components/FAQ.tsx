"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const FAQ_DATA = [
    {
        question: "What is hyphen?",
        answer: "Hyphen is an exclusive private members' club bridging culture, innovation, and community in the heart of London."
    },
    {
        question: "How do I apply for membership?",
        answer: "Membership is currently by invitation or through a selective application process. We carefully curate our community to ensure a dynamic and inspiring environment."
    },
    {
        question: "What is the dress code?",
        answer: "Our dress code is relaxed yet sophisticated. We encourage individual expression while maintaining a refined aesthetic."
    },
    {
        question: "Can I host a private event?",
        answer: "Yes, our versatile spaces can be exclusively hired for private events, curated to your bespoke requirements. Please reach out to our events team."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleOpen = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="w-full bg-background py-24 sm:py-32 px-6 sm:px-12">
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
                                <span className="text-xl sm:text-2xl font-semibold tracking-tight transition-colors group-hover:text-foreground/70">
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
                                        <p className="pb-8 text-lg text-foreground/70 max-w-2xl leading-relaxed">
                                            {item.answer}
                                        </p>
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
