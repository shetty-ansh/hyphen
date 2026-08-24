"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const { scrollY } = useScroll();
    const [isHeroPassed, setIsHeroPassed] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        // The hero is 200vh tall. The sticky container un-sticks after 100vh of scroll.
        // It completely leaves the viewport around 200vh.
        if (typeof window !== "undefined") {
            const threshold = window.innerHeight * 1.85;
            if (latest > threshold && !isHeroPassed) {
                setIsHeroPassed(true);
            } else if (latest <= threshold && isHeroPassed) {
                setIsHeroPassed(false);
            }
        }
    });

    return (
        <>
            <nav className="fixed left-0 top-0 z-50 flex w-full items-center justify-between px-6 py-6 pointer-events-none sm:px-10 sm:py-8">
                {/* Left Area */}
                <div className="flex w-1/3 items-center gap-8 pointer-events-auto">
                    <Image src="/images/logo.png" alt="Hyphen Logo" width={30} height={30} className="hidden sm:block" />
                    {/* Desktop nav links */}
                    <div className="hidden items-center gap-6 text-xs font-medium uppercase tracking-[0.2em] text-black/60 sm:flex">
                        <a href="#about" className="transition-colors hover:text-accent">
                            About
                        </a>
                        <a href="#events" className="transition-colors hover:text-accent">
                            Events
                        </a>
                    </div>
                </div>

                {/* Center Area */}
                <div className="flex w-1/3 justify-center pointer-events-auto">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: isHeroPassed ? 1 : 0, y: isHeroPassed ? 0 : 10 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="text-sm line-through font-bold tracking-[0.3em] text-accent"
                    >
                        hyphen
                    </motion.span>
                </div>

                {/* Right Area — mobile logo toggle */}
                <div className="flex w-1/3 justify-end pointer-events-auto">
                    <motion.div
                        animate={{ rotate: isMobileOpen ? 90 : 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="cursor-pointer sm:hidden"
                        onClick={() => setIsMobileOpen(!isMobileOpen)}
                    >
                        <Image src="/images/logo.png" alt="Hyphen Logo" width={30} height={30} />
                    </motion.div>
                </div>
            </nav>

            {/* Mobile side drawer */}
            <AnimatePresence>
                {isMobileOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm sm:hidden"
                            onClick={() => setIsMobileOpen(false)}
                        />

                        {/* Drawer panel */}
                        <motion.div
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
                            className="fixed left-0 top-0 z-50 flex h-full w-64 flex-col bg-background px-8 pt-24 shadow-2xl sm:hidden"
                        >
                            <div className="flex flex-col gap-8">
                                <a
                                    href="#about"
                                    onClick={() => setIsMobileOpen(false)}
                                    className="text-sm font-medium uppercase tracking-[0.2em] text-black/70 transition-colors hover:text-accent"
                                >
                                    About
                                </a>
                                <a
                                    href="#events"
                                    onClick={() => setIsMobileOpen(false)}
                                    className="text-sm font-medium uppercase tracking-[0.2em] text-black/70 transition-colors hover:text-accent"
                                >
                                    Events
                                </a>
                            </div>

                            <div className="mt-auto pb-10">
                                <div className="text-[10px] font-medium uppercase tracking-[0.2em] text-black/40">
                                    A Private Club &middot; England
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
