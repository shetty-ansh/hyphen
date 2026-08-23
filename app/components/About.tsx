// import Image from "next/image";

// export default function About() {
//     return (
//         <section className="flex w-full flex-row bg-black px-6 pb-32 pt-8 text-white sm:px-10 lg:px-16">
//             <div className="lg:w-[60vw]">
//                 <p className="text-lg leading-relaxed text-white/80 sm:text-xl">
//                     hyphen is a private members&rsquo; club — a room held open for
//                     dinners, sets, openings, and the people worth knowing. Replace this
//                     with the real about copy.hyphen is a private members&rsquo; club — a room held open for
//                     dinners, sets, openings, and the people worth knowing. Replace this
//                     with the real about copy.hyphen is a private members&rsquo; club — a room held open for
//                     dinners, sets, openings, and the people worth knowing. Replace this
//                     with the real about copy.hyphen is a private members&rsquo; club — a room held open for
//                     dinners, sets, openings, and the people worth knowing. Replace this
//                     with the real about copy.hyphen is a private members&rsquo; club — a room held open for
//                     dinners, sets, openings, and the people worth knowing. Replace this
//                     with the real about copy.hyphen is a private members&rsquo; club — a room held open for
//                     dinners, sets, openings, and the people worth knowing.
//                 </p>
//             </div>
//             <div className="lg:w-[30vw]">
//                 <div className="relative aspect-square w-full">
//                     {/* Background stock image */}
//                     <Image
//                         src="https://picsum.photos/seed/about/800/800"
//                         alt="About background"
//                         fill
//                         className="object-cover grayscale"
//                     />

//                     {/* Dark overlay for sharp contrast (optional but helps logo stand out) */}
//                     <div className="absolute inset-0 bg-black/30" />

//                     {/* Logo Overlay */}
//                     <div className="absolute inset-0 flex items-center justify-center">
//                         <Image
//                             src="/images/logo.png"
//                             alt="Hyphen Logo"
//                             width={120}
//                             height={120}
//                             className="drop-shadow-xl"
//                         />
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

import Image from "next/image";

export default function About() {
    return (
        <section className="flex w-full flex-row bg-black px-6 pb-32 pt-8 text-white sm:px-10 lg:px-16">
            <div className="lg:w-[60vw]">
                <p className="text-lg leading-relaxed text-white/80 sm:text-xl">
                    hyphen is a private members&rsquo; club — a room held open for
                    dinners, sets, openings, and the people worth knowing. Replace this
                    with the real about copy.hyphen is a private members&rsquo; club — a room held open for
                    dinners, sets, openings, and the people worth knowing. Replace this
                    with the real about copy.hyphen is a private members&rsquo; club — a room held open for
                    dinners, sets, openings, and the people worth knowing. Replace this
                    with the real about copy.hyphen is a private members&rsquo; club — a room held open for
                    dinners, sets, openings, and the people worth knowing. Replace this
                    with the real about copy.hyphen is a private members&rsquo; club — a room held open for
                    dinners, sets, openings, and the people worth knowing. Replace this
                    with the real about copy.hyphen is a private members&rsquo; club — a room held open for
                    dinners, sets, openings, and the people worth knowing.
                </p>
            </div>
            <div className="lg:w-[30vw]">
                <div className="relative flex aspect-square w-full items-center justify-center">
                    {/* Background stock image (80% size) */}
                    <div className="relative h-[80%] w-[80%] overflow-hidden">
                        <Image
                            src="https://picsum.photos/seed/about/800/800"
                            alt="About background"
                            fill
                            className="object-cover grayscale rounded-2xl"
                        />
                        {/* Dark overlay for sharp contrast */}
                        <div className="absolute inset-0 bg-black/30" />
                    </div>

                    {/* Logo Overlay (100% size) */}
                    <div className="pointer-events-none absolute inset-0">
                        <Image
                            src="/images/logo.png"
                            alt="Hyphen Logo"
                            fill
                            className="object-contain drop-shadow-xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}