import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingCTA from "../components/FloatingCTA";

const POSTS = [
    {
        id: 1,
        title: "The Art of Curated Experiences",
        excerpt: "Exploring the meticulous design behind hyphen's bespoke events and why human connection remains our greatest luxury.",
        date: "October 12, 2026",
        image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: 2,
        title: "Defining Modern Elegance",
        excerpt: "A conversation with our lead architect on blending heritage brutalism with soft, contemporary minimalism.",
        date: "September 28, 2026",
        image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: 3,
        title: "Culinary Alchemy: The New Menu",
        excerpt: "Our executive chef walks us through the seasonal ingredients and bold flavor profiles shaping this winter's dining experience.",
        date: "September 15, 2026",
        image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: 4,
        title: "The Sound of Hyphen",
        excerpt: "Curating the perfect auditory backdrop. How our resident DJs craft atmospheres that evolve from morning focus to midnight energy.",
        date: "August 30, 2026",
        image: "https://images.unsplash.com/photo-1516280440502-a2a46b85d3df?q=80&w=800&auto=format&fit=crop",
    }
];

export default function BlogPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background font-sans">
            <Navbar />
            
            <main className="flex-1 pt-32 pb-24 px-6 sm:px-12">
                <div className="mx-auto max-w-7xl">
                    <header className="mb-20">
                        <h1 className="text-[12vw] font-bold uppercase leading-[0.85] tracking-tighter sm:text-[8vw] mb-6">
                            The Journal
                        </h1>
                        <p className="text-xl sm:text-2xl text-foreground/70 max-w-2xl leading-relaxed">
                            Thoughts, conversations, and updates from inside hyphen.
                        </p>
                    </header>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16">
                        {POSTS.map((post) => (
                            <article key={post.id} className="group cursor-pointer flex flex-col">
                                <div className="relative aspect-[4/3] w-full overflow-hidden bg-foreground/5 mb-6">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                </div>
                                <div className="flex flex-col flex-1">
                                    <div className="text-sm font-medium uppercase tracking-[0.2em] text-foreground/50 mb-3">
                                        {post.date}
                                    </div>
                                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4 group-hover:text-foreground/80 transition-colors">
                                        {post.title}
                                    </h2>
                                    <p className="text-lg text-foreground/70 leading-relaxed mb-6">
                                        {post.excerpt}
                                    </p>
                                    <div className="mt-auto pt-4 border-t border-foreground/10 flex items-center justify-between text-sm font-bold uppercase tracking-[0.2em]">
                                        <span>Read More</span>
                                        <span className="transform transition-transform group-hover:translate-x-2">→</span>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
            <FloatingCTA />
        </div>
    );
}
