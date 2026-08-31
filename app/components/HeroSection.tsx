// "use client";

// import { useRef } from "react";
// import Image from "next/image";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { Inter } from "next/font/google";

// const inter = Inter({
//     subsets: ["latin"],
//     weight: ["800", "900"],
//     variable: "--font-inter",
// });

// /**
//  * Placeholder frames for the film-strip crossbar.
//  * Swap these for real club photography.
//  *
//  * If you keep an external host, add it to next.config.js:
//  *   images: { remotePatterns: [{ hostname: "picsum.photos" }] }
//  */
// const FRAMES = [
//     "/images/image-1.png",
//     "/images/image-2.JPG",
//     "/images/image-5.png",
//     "/images/image-6.png",
//     "/images/image-7.png",
// ];

// export default function Hero() {
//     const containerRef = useRef<HTMLDivElement>(null);

//     // scroll progress across the hero's own tall wrapper — this is what
//     // makes Hero self-contained, About doesn't need to know this exists
//     const { scrollYProgress } = useScroll({
//         target: containerRef,
//         offset: ["start start", "end start"],
//     });

//     // the slash: exits right and fades out early
//     const crossbarX = useTransform(scrollYProgress, [0, 0.4], ["0%", "160%"]);
//     const crossbarOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0]);

//     // the wordmark: shrinks and falls, settling as a subheader by the
//     // time the sticky section releases into About
//     const wordmarkScale = useTransform(scrollYProgress, [0.1, 0.7], [1, 0.22]);
//     const wordmarkY = useTransform(scrollYProgress, [0.1, 0.7], ["0vh", "34vh"]);
//     // Faded mobile text: starts fading slightly earlier and takes a bit longer to smooth out the drop
//     const fadedTextOpacity = useTransform(
//         scrollYProgress,
//         [0, 0.05, 0.25, 1],
//         [0.04, 0.04, 0, 0]
//     );
//     // Bulletproof fix to prevent it from ever coming back
//     const fadedTextDisplay = useTransform(scrollYProgress, (v) => v >= 0.25 ? "none" : "flex");



//     return (
//         <section ref={containerRef} className="relative h-[200vh] w-full bg-background">
//             <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden bg-background">
//                 {/* Subtle center glow */}
//                 <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(229,169,59,0.18)_0%,transparent_45%)] mix-blend-multiply" />

//                 {/* Faded background text — mobile only */}
//                 <motion.div
//                     style={{ opacity: fadedTextOpacity, display: fadedTextDisplay }}
//                     className="pointer-events-none absolute inset-0 items-end justify-center pb-24 sm:!hidden"
//                 >
//                     <span className="text-[18vw] font-bold uppercase tracking-[0.15em] text-foreground leading-none select-none">
//                         LONDON
//                     </span>
//                 </motion.div>

//                 <motion.div
//                     style={{ scale: wordmarkScale, y: wordmarkY }}
//                     className={`${inter.variable} relative inline-block font-sans leading-none antialiased text-foreground`}
//                 >
//                     <h1
//                         aria-label="hyphen"
//                         style={{ textRendering: "optimizeLegibility" }}
//                         className="select-none text-[26vw] font-semibold leading-[0.70] tracking-tighter sm:text-[22vw] lg:text-[19rem]"
//                     >
//                         hyphen
//                     </h1>

//                     {/* the crossbar: a looping strip of frames standing in for the dash */}
//                     <div className="absolute left-[-6%] right-[-6%] top-[60%] h-[22%] -translate-y-1/2 overflow-hidden">
//                         <motion.div
//                             style={{ x: crossbarX, opacity: crossbarOpacity }}
//                             aria-hidden
//                             className="h-full w-full overflow-hidden border-y-[3px] border-background bg-background"
//                         >
//                             <div className="marquee flex h-full w-max items-center">
//                                 {[...FRAMES, ...FRAMES].map((src, i) => (
//                                     <div
//                                         key={i}
//                                         className="relative h-full w-[14vw] min-w-[130px] flex-shrink-0 sm:w-[10vw]"
//                                     >
//                                         <Image
//                                             src={src}
//                                             alt=""
//                                             fill
//                                             sizes="200px"
//                                             className="object-cover"
//                                             priority={i < FRAMES.length}
//                                         />
//                                     </div>
//                                 ))}
//                             </div>
//                         </motion.div>
//                     </div>
//                 </motion.div>
//             </div>

//             <style jsx>{`
//         .marquee {
//           animation: hyphen-scroll 24s linear infinite;
//         }
//         @keyframes hyphen-scroll {
//           from {
//             transform: translateX(0);
//           }
//           to {
//             transform: translateX(-50%);
//           }
//         }
//         @media (prefers-reduced-motion: reduce) {
//           .marquee {
//             animation: none;
//           }
//         }
//       `}</style>
//         </section>
//     );
// }

"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Inter } from "next/font/google";

const inter = Inter({
    subsets: ["latin"],
    weight: ["600", "800", "900"],
    variable: "--font-inter",
});

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const crossbarX = useTransform(scrollYProgress, [0, 0.4], ["0%", "160%"]);
    // Using 1 instead of 0.6 so the slash perfectly matches the text as a seamless continuous stencil
    const crossbarOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0]);

    const wordmarkScale = useTransform(scrollYProgress, [0.1, 0.7], [1, 0.22]);
    const wordmarkY = useTransform(scrollYProgress, [0.1, 0.7], ["0vh", "34vh"]);

    const fadedTextOpacity = useTransform(
        scrollYProgress,
        [0, 0.05, 0.25, 1],
        [0.04, 0.04, 0, 0]
    );
    const fadedTextDisplay = useTransform(scrollYProgress, (v) => v >= 0.25 ? "none" : "flex");

    return (
        <section ref={containerRef} className="relative h-[200vh] w-full bg-background">
            <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden bg-background">

                {/* 1. Base Layer: Full-screen Fixed Video */}
                <div className="absolute inset-0 z-0">
                    <video
                        ref={(el) => {
                            if (el) {
                                el.defaultMuted = true;
                                el.muted = true;
                            }
                        }}
                        src="/images/video-2.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="h-full w-full object-cover"
                    />
                </div>

                {/* Subtle center glow - behind the mask layer */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(229,169,59,0.3)_0%,transparent_45%)] mix-blend-multiply z-0 pointer-events-none" />

                {/* 2. Cutout Layer: Pure White (Light Mode) / Pure Black (Dark Mode) */}
                <div className="absolute inset-0 z-10 flex items-center justify-center bg-white dark:bg-black mix-blend-screen dark:mix-blend-multiply pointer-events-none">

                    {/* Faded background text — mobile only */}
                    <motion.div
                        style={{ opacity: fadedTextOpacity, display: fadedTextDisplay }}
                        className="absolute inset-0 flex items-end justify-center pb-24 sm:!hidden"
                    >
                        <span className="text-[18vw] font-bold uppercase tracking-[0.15em] text-black dark:text-white leading-none select-none">
                            LONDON
                        </span>
                    </motion.div>

                    <motion.div
                        style={{ scale: wordmarkScale, y: wordmarkY }}
                        className={`${inter.variable} relative inline-block font-sans leading-none antialiased`}
                    >
                        {/* Text Hole */}
                        <h1
                            aria-label="hyphen"
                            style={{ textRendering: "optimizeLegibility" }}
                            className="select-none text-[26vw] font-bold leading-[0.70] tracking-tighter sm:text-[22vw] lg:text-[19rem] text-black dark:text-white relative z-0"
                        >
                            hyphen
                        </h1>

                        {/* Animated slash hole - Higher z-index to visually sit on top of the text */}
                        <div className="absolute left-[-6%] right-[-6%] top-[60%] h-[18%] -translate-y-1/2 overflow-hidden z-10">
                            <motion.div
                                style={{ x: crossbarX, opacity: crossbarOpacity }}
                                aria-hidden
                                className="h-full w-full bg-black dark:bg-white"
                            />
                        </div>
                    </motion.div>
                </div>

                {/* 3. Light Mode Tint Layer 
                    This perfectly restores the #F9F6F0 background in light mode without breaking the cutout video! 
                */}
                <div className="absolute inset-0 z-20 bg-background mix-blend-multiply dark:hidden pointer-events-none" />
            </div>
        </section>
    );
}