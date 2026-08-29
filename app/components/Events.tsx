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
    const iframeSrc = `https://luma.com/embed/calendar/cal-MyV8SGS5L4CmXU4/events?lt=${currentTheme === "dark" ? "dark" : "light"}`;

    return (
        <section
            id="events"
            className="w-full bg-background px-6 py-24 sm:px-10 sm:py-32 lg:px-16"
        >
            <div className="mx-auto max-w-6xl">
                {/* Section label */}
                <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-foreground">
                    Be a part of hyphen.lnd
                </h2>

                <div className="mb-16 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <p className="text-3xl font-light tracking-tight text-foreground sm:text-4xl">
                        Upcoming Events
                    </p>
                    <div className="h-px flex-1 bg-black/10 dark:bg-white/10 hidden sm:block sm:ml-8" />
                </div>

                {/* Luma Calendar Embed */}
                <div className="relative w-full overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 bg-white/40 dark:bg-black/40 p-2 sm:p-4 shadow-2xl backdrop-blur-md transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_0_40px_rgba(255,255,255,0.05)]">
                    <iframe
                        src={iframeSrc}
                        width="100%"
                        height="600"
                        frameBorder="0"
                        style={{
                            border: "1px solid #bfcbda88",
                            borderRadius: "12px"
                        }}
                        allowFullScreen={true}
                        aria-hidden="false"
                        tabIndex={0}
                        className="bg-transparent"
                    />
                </div>
            </div>
        </section>
    );
}
