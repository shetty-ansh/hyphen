import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingCTA from "../components/FloatingCTA";
import Parser from "rss-parser";

export const revalidate = 3600;

type Props = {
    searchParams?: Promise<{ [key: string]: string | string[] | undefined }> | { [key: string]: string | string[] | undefined };
};

export default async function BlogPage(props: Props) {
    const searchParams = await props.searchParams;
    const pageParam = searchParams?.page;
    const page = typeof pageParam === 'string' ? parseInt(pageParam, 10) : 1;
    const POSTS_PER_PAGE = 4;

    const parser = new Parser({
        customFields: {
            item: [
                ['content:encoded', 'contentEncoded'],
                ['media:content', 'mediaContent'],
                ['media:thumbnail', 'mediaThumbnail'],
            ],
        },
    });
    let posts: any[] = [];
    let totalPages = 1;

    try {
        let feed;
        try {
            feed = await parser.parseURL("https://csnetwork.substack.com/feed");
        } catch {
            feed = await parser.parseURL("https://substack.com/feed/@csnetwork");
        }
        totalPages = Math.ceil(feed.items.length / POSTS_PER_PAGE);
        const startIndex = (page - 1) * POSTS_PER_PAGE;
        const endIndex = startIndex + POSTS_PER_PAGE;

        posts = feed.items.slice(startIndex, endIndex).map((item, index) => {
            // Extract Substack image from enclosure, media content, or HTML <img> tags
            let image = "";
            if (item.enclosure?.url) {
                image = item.enclosure.url;
            } else if (item.mediaContent?.$?.url) {
                image = item.mediaContent.$.url;
            } else if (item.mediaThumbnail?.$?.url) {
                image = item.mediaThumbnail.$.url;
            } else {
                const rawHtml = item.contentEncoded || item.content || item["content:encoded"] || "";
                const imgMatch = rawHtml.match(/<img[^>]+src=["']([^"']+)["']/i);
                image = imgMatch ? imgMatch[1] : "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=800&auto=format&fit=crop";
            }

            return {
                id: index,
                title: item.title || "Untitled",
                excerpt: item.contentSnippet ? item.contentSnippet.slice(0, 150) + "..." : "Read more...",
                date: item.pubDate ? new Date(item.pubDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : "",
                image: image,
                link: item.link || "#"
            };
        });
    } catch (e) {
        console.error("Failed to fetch RSS", e);
    }

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
                            Thoughts, conversations, and updates from inside <a className="font-medium line-through decoration-2 decoration-foreground/50 hover:text-foreground transition-colors">hyphen</a>.
                        </p>
                    </header>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16">
                        {posts.map((post, index) => (
                            <Link href={post.link} key={post.id} target="_blank" rel="noopener noreferrer">
                                <article className="group cursor-pointer flex flex-col h-full">
                                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-foreground/5 mb-6">
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            fill
                                            priority={index < 2}
                                            unoptimized={true}
                                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                        />
                                    </div>
                                    <div className="flex flex-col flex-1">
                                        <div className="text-sm font-medium uppercase tracking-[0.2em] text-foreground/50 mb-3">
                                            {post.date}
                                        </div>
                                        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4 group-hover:text-foreground/80 transition-colors">
                                            {post.title.split(' ').map((word: string, i: number, arr: string[]) => {
                                                const isEmoji = /\p{Extended_Pictographic}/u.test(word);
                                                return (
                                                    <span key={i}>
                                                        <span className={isEmoji ? "" : "line-through decoration-2 decoration-foreground/50"}>{word}</span>
                                                        {i !== arr.length - 1 && ' '}
                                                    </span>
                                                );
                                            })}
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
                            </Link>
                        ))}
                        {posts.length === 0 && (
                            <div className="col-span-1 md:col-span-2 py-20 text-center text-foreground/50">
                                No posts found. Please try again later.
                            </div>
                        )}
                    </div>

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <div className="mt-20 flex items-center justify-between border-t border-foreground/10 pt-8">
                            {page > 1 ? (
                                <Link href={`/blog?page=${page - 1}`} className="text-sm font-bold uppercase tracking-[0.2em] hover:text-foreground/70 transition-colors">
                                    ← Previous
                                </Link>
                            ) : <div />}

                            <div className="text-sm font-medium uppercase tracking-[0.2em] text-foreground/50">
                                Page {page} of {totalPages}
                            </div>

                            {page < totalPages ? (
                                <Link href={`/blog?page=${page + 1}`} className="text-sm font-bold uppercase tracking-[0.2em] hover:text-foreground/70 transition-colors">
                                    Next →
                                </Link>
                            ) : <div />}
                        </div>
                    )}
                </div>
            </main>

            <Footer />
            <FloatingCTA />
        </div>
    );
}
