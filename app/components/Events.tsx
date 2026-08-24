"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Events() {
    const { theme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const currentTheme = mounted ? (theme === "system" ? resolvedTheme : theme) : "light";
    const iframeSrc = `https://luma.com/embed/calendar/cal-Ruxml0OG5UDwMNk/events?lt=${currentTheme === "dark" ? "dark" : "light"}`;

    return (
        <section
            id="events"
            className="w-full bg-background px-6 py-24 sm:px-10 sm:py-32 lg:px-16"
        >
            <div className="mx-auto max-w-6xl">
                {/* Section label */}
                <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-foreground">
                    Programming
                </h2>

                <div className="mb-16 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <p className="text-3xl font-light tracking-tight text-foreground sm:text-4xl">
                        Upcoming Events
                    </p>
                    <div className="h-px flex-1 bg-black/10 dark:bg-white/10 hidden sm:block sm:ml-8" />
                </div>

                {/* Luma Calendar Embed */}
                {/* To find your Calendar ID: Go to your Luma Calendar -> Share -> Embed on Website -> Copy the URL in the src attribute */}
                <div className="relative w-full overflow-hidden rounded-xl border border-black/8 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02] p-1 sm:p-3">
                    <iframe
                        src={iframeSrc}
                        width="100%"
                        height="600"
                        frameBorder="0"
                        style={{ borderRadius: "8px" }}
                        allowFullScreen={false}
                        aria-hidden="false"
                        tabIndex={0}
                        className="bg-transparent"
                    />
                </div>
            </div>
        </section>
    );
}
