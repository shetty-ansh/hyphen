import Image from "next/image";

export default function About() {
    return (
        <section
            id="about"
            className="w-full bg-background px-6 py-24 sm:px-10 sm:py-32 lg:px-16"
        >
            <div className="mx-auto max-w-6xl">
                {/* Section label */}
                <h2 className="mb-16 text-xs font-semibold uppercase tracking-[0.3em] text-foreground">
                    About
                </h2>

                <div className="flex flex-col gap-16 lg:flex-row lg:items-start lg:gap-24">
                    {/* Text column */}
                    <div className="lg:w-3/5">
                        <p className="text-2xl font-light leading-relaxed tracking-tight text-foreground sm:text-3xl">
                            hyphen is a private members&rsquo; club in London,
                            England &mdash; a room held open for dinners, sets,
                            openings, and the people worth knowing.
                        </p>
                        <div className="mt-10 h-px w-16 bg-accent" />
                        <p className="mt-10 max-w-lg text-sm leading-relaxed text-foreground">
                            We believe the best conversations happen in the right
                            room with the right people. hyphen exists to make that
                            room permanent.
                        </p>
                    </div>

                    {/* Image column */}
                    <div className="lg:w-2/5">
                        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl">
                            <Image
                                src="https://picsum.photos/seed/about/800/1000"
                                alt="About hyphen"
                                fill
                                sizes="(max-width: 1024px) 100vw, 40vw"
                                className="object-cover grayscale"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}