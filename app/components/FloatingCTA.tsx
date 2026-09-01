"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";

export default function FloatingCTA() {
    const { scrollY } = useScroll();
    const [isVisible, setIsVisible] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (typeof window !== "undefined") {
            // The hero section is 200vh tall. We'll show the CTA after passing 150vh.
            const threshold = window.innerHeight * 1.5;
            if (latest > threshold && !isVisible) {
                setIsVisible(true);
            } else if (latest <= threshold && isVisible) {
                setIsVisible(false);
            }
        }
    });

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 50, scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="fixed bottom-8 left-1/2 z-50 pointer-events-auto -translate-x-1/2"
                >
                    <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSfsKXRcDdDobfxjmQEQQUaNDGMuihTUVcQ9_XQ0wFCtPED7lA/viewform?usp=header"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex line-through items-center justify-center rounded-full bg-foreground px-8 py-4 sm:px-10 sm:py-4 text-xs sm:text-sm font- tracking-[0.2em] text-background shadow-2xl transition-transform hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] active:scale-95 whitespace-nowrap"
                    >
                        apply
                    </a>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
