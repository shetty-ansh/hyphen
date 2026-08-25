import Image from "next/image";

export default function About() {
    return (
        <section
            id="about"
            className="w-full bg-background px-6 py-24 sm:px-10 sm:py-32 lg:px-16"
        >
            <div className="mx-auto max-w-6xl flex flex-col gap-32">
                
                {/* WHO THE COMMUNITY IS */}
                <div>
                    <h2 className="mb-12 text-xs font-semibold uppercase tracking-[0.3em] text-foreground">
                        The Community
                    </h2>
                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-center">
                        <div className="lg:col-span-5 flex flex-col gap-8 order-2 lg:order-1">
                            <p className="text-2xl font-light leading-relaxed tracking-tight text-foreground sm:text-3xl">
                                For the creatives, founders, and professionals who live between disciplines.
                            </p>
                            <p className="max-w-md text-sm leading-relaxed text-foreground/80">
                                The designer who is also a founder. The producer who also writes. The consultant who is also an artist. Most spaces make you choose a lane. We are built for the ones who won&rsquo;t.
                            </p>
                        </div>
                        <div className="lg:col-span-7 flex overflow-x-auto gap-4 snap-x snap-mandatory py-12 order-1 lg:order-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                            {[
                                ...Array(4).fill([
                                    "/images/image-3.jpg",
                                    "/images/image-0.jpg",
                                    "/images/image-4.jpg",
                                    "/images/image-2.png",
                                    "/images/image-5.png"
                                ]).flat()
                            ].map((src, i) => (
                                <div key={i} className={`snap-center shrink-0 w-[70%] sm:w-[45%] relative aspect-[3/4] overflow-hidden rounded-xl ${i % 2 === 0 ? "translate-y-6" : "-translate-y-6"}`}>
                                    <Image src={src} alt="Community member" fill className="object-cover grayscale-0 sm:grayscale sm:hover:grayscale-0 transition duration-700" sizes="(max-width: 1024px) 70vw, 30vw" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* WHY WE EXIST */}
                <div>
                    <h2 className="mb-12 text-xs font-semibold uppercase tracking-[0.3em] text-foreground text-right">
                        Why We Exist
                    </h2>
                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-center">
                        <div className="lg:col-span-6 relative aspect-square w-full overflow-hidden rounded-xl">
                            <Image src="/images/image-4.jpg" alt="The space" fill className="object-cover grayscale-0 sm:grayscale sm:hover:grayscale-0 transition duration-700" sizes="(max-width: 1024px) 100vw, 50vw" />
                        </div>
                        <div className="lg:col-span-6 flex flex-col gap-8">
                            <p className="text-2xl font-light leading-relaxed tracking-tight text-foreground sm:text-3xl">
                                We are building a scene. The space is simply where it gathers.
                            </p>
                            <p className="max-w-md text-sm leading-relaxed text-foreground/80">
                                hyphen.ldn runs out of our studio in South East London. Not a 24/7 club, but a dependable rhythm of coworking, late-night creative sessions, and exactly the people worth knowing.
                            </p>
                            <ul className="mt-4 flex flex-col gap-3 text-sm text-foreground/70 uppercase tracking-widest font-semibold">
                                <li>&mdash; Belonging</li>
                                <li>&mdash; Rhythm</li>
                                <li>&mdash; Access with a ceiling</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}