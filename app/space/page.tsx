import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingCTA from "../components/FloatingCTA";

const GALLERY_IMAGES = [
    {
        id: 1,
        url: "https://images.unsplash.com/photo-1542314831-c53cd4b85ca4?q=80&w=800&auto=format&fit=crop",
        alt: "Hyphen main lounge area",
        className: "md:col-span-2 md:row-span-2 aspect-[4/3] md:aspect-auto",
    },
    {
        id: 2,
        url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop",
        alt: "Hyphen restaurant interior",
        className: "aspect-square",
    },
    {
        id: 3,
        url: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800&auto=format&fit=crop",
        alt: "Hyphen cocktail bar",
        className: "aspect-[3/4]",
    },
    {
        id: 4,
        url: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
        alt: "Hyphen modern architecture details",
        className: "aspect-[4/3]",
    },
    {
        id: 5,
        url: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=800&auto=format&fit=crop",
        alt: "Hyphen outdoor terrace",
        className: "aspect-square",
    },
    {
        id: 6,
        url: "https://images.unsplash.com/photo-1473177104440-ffee2f376098?q=80&w=800&auto=format&fit=crop",
        alt: "Hyphen private meeting room",
        className: "md:col-span-2 aspect-[16/9]",
    }
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
                            A visual exploration of hyphen's architecture, interiors, and atmosphere.
                        </p>
                    </header>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px] md:auto-rows-[300px]">
                        {GALLERY_IMAGES.map((img) => (
                            <div 
                                key={img.id} 
                                className={`relative w-full h-full overflow-hidden bg-foreground/5 group ${img.className}`}
                            >
                                <Image
                                    src={img.url}
                                    alt={img.alt}
                                    fill
                                    className="object-cover transition-transform duration-1000 ease-in-out group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10 mix-blend-multiply" />
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
