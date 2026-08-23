"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export default function Navbar() {
    const { scrollY } = useScroll();
    const [isHeroPassed, setIsHeroPassed] = useState(false);

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
        <nav className="fixed left-0 top-0 z-50 flex w-full items-center justify-between px-6 py-6 pointer-events-none sm:px-10 sm:py-8">
            {/* Left Area */}
            <div className="flex w-1/3 items-center gap-8 pointer-events-auto">
                <Image src="/images/logo.png" alt="Hyphen Logo" width={30} height={30} />
                <div className="hidden items-center gap-6 text-xs font-medium uppercase tracking-[0.2em] text-white/60 sm:flex">
                    <a href="#about" className="transition-colors hover:text-white">
                        About
                    </a>
                    <a href="#events" className="transition-colors hover:text-white">
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
                    className="text-sm line-through font-bold tracking-[0.3em] text-white"
                >
                    hyphen
                </motion.span>
            </div>

            {/* Right Area (Empty space to balance the flex layout so center is true center) */}
            <div className="w-1/3"></div>
        </nav>
    );
}
