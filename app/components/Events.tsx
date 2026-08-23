export default function Events() {
    return (
        <section id="events" className="relative w-full bg-black px-6 py-24 text-white sm:px-10 lg:px-16">
            <div className="mx-auto max-w-4xl">
                <div className="mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
                    <div>
                        <h2 className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
                            Programming
                        </h2>
                        <p className="text-3xl font-medium tracking-tight sm:text-4xl">
                            Upcoming Events
                        </p>
                    </div>
                </div>

                {/* Luma Calendar Embed */}
                {/* To find your Calendar ID: Go to your Luma Calendar -> Share -> Embed on Website -> Copy the URL in the src attribute */}
                <div className="relative w-full overflow-hidden rounded-2xl bg-white/5 p-2 sm:p-4 border border-white/10">
                    <iframe
                        src="https://luma.com/embed/calendar/cal-Ruxml0OG5UDwMNk/events"
                        width="100%"
                        height="600"
                        frameBorder="0"
                        style={{ border: "1px solid #bfcbda88", borderRadius: "4px" }}
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
