import { HelpCircle, MessageSquare, Ticket } from "lucide-react";
import Image from "next/image";

const sessions = [
    {
        day: "WED",
        time: "5PM – 12AM",
        title: "Late Wednesdays",
        desc: "Open 5pm to midnight. Our signature creative late shift. The antidote to working alone at home at night.",
        image: "/images/image-5.png",
    },
    {
        day: "FRI",
        time: "ALL DAY",
        title: "Friday Coworking",
        desc: "Full-day coworking access. Ends with our “Shipped” ritual where members share one win for the week.",
        image: "/images/image-9.png",
    },
];

const ongoing = [
    {
        title: "Clinics & Workshops",
        desc: "A rotating drop-in on real business problems, plus practical, creative workshops shaped by what the community asks for.",
        icon: HelpCircle,
    },
    {
        title: "Community Channel",
        desc: "Low friction connection on WhatsApp/Telegram. Ask questions, share wins, and access the network anytime.",
        icon: MessageSquare,
    },
    {
        title: "Member Perks",
        desc: "Discounted Common Sense Studios hire, priority event tickets, and monthly guest passes.",
        icon: Ticket,
    },
];

export default function Membership() {
    return (
        <section
            id="membership"
            className="w-full bg-background px-6 py-24 sm:px-10 sm:py-32 lg:px-16 border-t border-black/10 dark:border-white/10"
        >
            <div className="mx-auto max-w-6xl">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
                    <div>
                        <h2 className="mb-8 text-xs font-semibold uppercase tracking-[0.3em] text-foreground">
                            Membership
                        </h2>
                        <p className="text-3xl font-light tracking-tight text-foreground sm:text-4xl max-w-2xl">
                            A dependable rhythm of coworking, late-night creative sessions, and monthly programming.
                        </p>
                    </div>
                    <div className="h-px flex-1 bg-black/10 dark:bg-white/10 hidden lg:block ml-12 mb-1.5" />
                </div>

                {/* The weekly rhythm */}
                <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.25em] text-foreground/50">
                    The weekly rhythm
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 border-t border-l border-black/10 dark:border-white/10 mb-20">
                    {sessions.map((s) => (
                        <div
                            key={s.day}
                            className="group flex flex-col border-r border-b border-black/10 dark:border-white/10 bg-white dark:bg-transparent hover:-translate-y-0.5 hover:shadow-xl transition-all duration-500 overflow-hidden"
                        >
                            <div className="relative h-64 sm:h-72 w-full overflow-hidden border-b border-black/10 dark:border-white/10">
                                <Image
                                    src={s.image}
                                    alt={s.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-10 sm:p-12 flex-1 flex flex-col">
                                <div className="flex items-baseline justify-between mb-8">
                                    <span className="text-6xl sm:text-7xl font-light tracking-tight text-foreground">
                                        {s.day}
                                    </span>
                                    <span className="text-xs font-medium tracking-widest text-foreground/50">
                                        {s.time}
                                    </span>
                                </div>
                                <span className="block h-[3px] w-10 bg-foreground group-hover:w-16 transition-all duration-500 mb-8" />
                                <h3 className="text-xl font-medium tracking-tight text-foreground mb-3">
                                    {s.title}
                                </h3>
                                <p className="text-sm leading-relaxed text-foreground/65 max-w-md">
                                    {s.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Always on */}
                <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.25em] text-foreground/50">
                    Always on
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 border-t border-black/10 dark:border-white/10 divide-y md:divide-y-0 md:divide-x divide-black/10 dark:divide-white/10">
                    {ongoing.map((f) => {
                        const Icon = f.icon;
                        return (
                            <div
                                key={f.title}
                                className="group p-8 sm:p-10 bg-white dark:bg-transparent hover:-translate-y-0.5 hover:scale-[1.01] hover:shadow-md transition-all duration-300"
                            >
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="h-px w-5 bg-foreground/40 group-hover:w-8 transition-all duration-300" />
                                    <Icon className="w-5 h-5 stroke-[1.5] text-foreground/60 group-hover:text-foreground transition-colors duration-300" />
                                </div>
                                <h3 className="text-lg font-medium tracking-tight text-foreground mb-3">
                                    {f.title}
                                </h3>
                                <p className="text-sm leading-relaxed text-foreground/65">
                                    {f.desc}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
