import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingCTA from "../components/FloatingCTA";

const GALLERY_IMAGES = [
    { id: 2, url: "/images/image-2.jpg", alt: "hyphen 2", className: "col-span-2 row-span-1" }, // Landscape (Real)
    { id: 0, url: "/images/image-0.jpg", alt: "hyphen 0", className: "col-span-1 row-span-2" }, // Portrait (Real)
    { id: 5, url: "/images/image-5.png", alt: "hyphen 5", className: "col-span-1 row-span-1" }, // Square (Real)
    { id: 8, url: "/images/image-8.jpg", alt: "hyphen 8", className: "col-span-2 row-span-1" }, // Landscape (Real)
    { id: 11, url: "/images/image-11.png", alt: "hyphen 11", className: "col-span-1 row-span-1" }, // Square (AI)
    { id: 9, url: "/images/image-9.jpg", alt: "hyphen 9", className: "col-span-2 row-span-1" }, // Landscape (Real)
    { id: 3, url: "/images/image-3.jpg", alt: "hyphen 3", className: "col-span-1 row-span-2" }, // Portrait (AI)
    { id: 12, url: "/images/image-12.png", alt: "hyphen 12", className: "col-span-1 row-span-2" }, // Portrait (AI)
    { id: 1, url: "/images/image-1.png", alt: "hyphen 1", className: "col-span-2 row-span-1" }, // Landscape (AI)
    { id: 4, url: "/images/image-4.jpg", alt: "hyphen 4", className: "col-span-2 row-span-1" }, // Landscape (AI)
    { id: 13, url: "/images/image-13.png", alt: "hyphen 13", className: "col-span-1 row-span-2" }, // Portrait (AI)
    { id: 14, url: "/images/image-14.png", alt: "hyphen 14", className: "col-span-1 row-span-2" }, // Portrait (AI)
    { id: 6, url: "/images/image-6.png", alt: "hyphen 6", className: "col-span-2 row-span-1" }, // Landscape (AI)
    { id: 7, url: "/images/image-7.png", alt: "hyphen 7", className: "col-span-2 md:col-span-4 row-span-2 md:row-span-2" }, // Landscape Large (AI)
];

export default function SpacePage() {
    return (
        <div className="flex flex-col min-h-screen bg-background font-sans">
            <Navbar />

            <main className="flex-1 pt-32 pb-24 px-6 sm:px-12">
                <div className="mx-auto max-w-7xl">
                    <header className="mb-20 text-center">
                        <h1 className="text-[12vw] font-bold uppercase leading-[0.85] tracking-tighter sm:text-[8vw] mb-6">
                            The Space
                        </h1>
                        <p className="text-xl sm:text-2xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
                            A visual exploration of hyphen's atmosphere.
                        </p>
                    </header>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[150px] md:auto-rows-[250px] grid-flow-row-dense">
                        {GALLERY_IMAGES.map((img) => (
                            <div
                                key={img.id}
                                className={`relative w-full h-full overflow-hidden bg-foreground/5 group rounded-xl ${img.className}`}
                            >
                                <Image
                                    src={img.url}
                                    alt={img.alt}
                                    fill
                                    className="object-cover transition-transform duration-1000 ease-in-out group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                                <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
            <FloatingCTA />
        </div>
    );
}
