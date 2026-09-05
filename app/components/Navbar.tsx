"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
    const { scrollY } = useScroll();
    const [isHeroPassed, setIsHeroPassed] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const { theme, setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const currentTheme = mounted ? (theme === "system" ? resolvedTheme : theme) : "light";
    const logoSrc = currentTheme === "dark" ? "/images/logo-2.png" : "/images/logo.png";

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
                    <motion.div
                        animate={{ rotate: isMobileOpen ? 90 : 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="cursor-pointer"
                        onClick={() => setIsMobileOpen(!isMobileOpen)}
                    >
                        <Image src={logoSrc} alt="Hyphen Logo" width={30} height={30} />
                    </motion.div>
                </div>

                {/* Center Area */}
                <div className="flex w-1/3 justify-center pointer-events-auto">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: isHeroPassed ? 1 : 0, y: isHeroPassed ? 0 : 10 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="text-sm line-through font-bold tracking-[0.3em] text-foreground"
                    >
                        hyphen
                    </motion.span>
                </div>

                {/* Right Area — Menu toggle */}
                <div className="flex w-1/3 justify-end items-center pointer-events-auto">
                    <button
                        onClick={() => setIsMobileOpen(!isMobileOpen)}
                        className="text-xs font-bold uppercase tracking-[0.2em] text-foreground hover:opacity-50 transition-opacity"
                    >
                        {isMobileOpen ? "Close" : "Menu"}
                    </button>
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
                            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
                            onClick={() => setIsMobileOpen(false)}
                        />

                        {/* Drawer panel */}
                        <motion.div
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
                            className="fixed left-0 top-0 z-50 flex h-full w-64 flex-col bg-background px-8 pt-24 shadow-2xl"
                        >
                            <div className="flex flex-col gap-8">
                                <Link
                                    href="/"
                                    onClick={() => setIsMobileOpen(false)}
                                    className="text-sm line-through font-bold tracking-[0.3em] text-foreground transition-colors hover:text-foreground"
                                >
                                    home
                                </Link>
                                <a
                                    href="/#about"
                                    onClick={() => setIsMobileOpen(false)}
                                    className="text-sm font-medium uppercase tracking-[0.2em] text-foreground transition-colors hover:text-foreground"
                                >
                                    About
                                </a>
                                <a
                                    href="/#events"
                                    onClick={() => setIsMobileOpen(false)}
                                    className="text-sm font-medium uppercase tracking-[0.2em] text-foreground transition-colors hover:text-foreground"
                                >
                                    Events
                                </a>
                                <Link
                                    href="/blog"
                                    onClick={() => setIsMobileOpen(false)}
                                    className="text-sm font-medium uppercase tracking-[0.2em] text-foreground transition-colors hover:text-foreground"
                                >
                                    The Journal
                                </Link>

                                <Link
                                    href="/space"
                                    onClick={() => setIsMobileOpen(false)}
                                    className="text-sm font-medium uppercase tracking-[0.2em] text-foreground transition-colors hover:text-foreground"
                                >
                                    The Space
                                </Link>
                                <Link
                                    href="/faq"
                                    onClick={() => setIsMobileOpen(false)}
                                    className="text-sm font-medium uppercase tracking-[0.2em] text-foreground transition-colors hover:text-foreground"
                                >
                                    FAQ
                                </Link>
                            </div>

                            <div className="mt-auto pb-10 flex flex-col gap-3">
                                <div className="flex gap-4 text-xs font-semibold uppercase tracking-wider text-foreground/70">
                                    <a href="https://www.instagram.com/hyphen.tcsnetwork.co.uk/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Instagram</a>
                                    <a href="https://substack.com/@csnetwork" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Substack</a>
                                </div>
                                <div className="text-[10px] font-medium uppercase tracking-[0.2em] text-foreground/60">
                                    Private members club for multi-hyphenate creatives &middot; England
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
