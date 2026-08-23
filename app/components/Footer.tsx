export default function Footer() {
    return (
        <footer className="w-full bg-white px-6 py-20 text-black sm:px-10 lg:px-16">
            <div className="mx-auto flex max-w-5xl flex-col justify-between gap-16 md:flex-row md:items-start">
                
                {/* Brand */}
                <div className="flex flex-col gap-4">
                    <div className="text-sm font-bold uppercase tracking-[0.3em]">
                        hyphen
                    </div>
                    <div className="text-xs font-medium uppercase tracking-[0.2em] text-black/50">
                        A Private Club &middot; Mumbai
                    </div>
                </div>

                {/* Links */}
                <div className="flex flex-col gap-12 sm:flex-row sm:gap-24">
                    {/* Contact */}
                    <div className="flex flex-col gap-4">
                        <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/40">
                            Contact
                        </div>
                        <div className="flex flex-col gap-2 text-xs font-semibold tracking-wide">
                            <a href="mailto:Club@verci.com" className="transition-colors hover:text-black/60">Club@verci.com</a>
                            <a href="#" className="transition-colors hover:text-black/60">Instagram</a>
                            <a href="#" className="transition-colors hover:text-black/60">Twitter</a>
                        </div>
                    </div>

                    {/* Terms */}
                    <div className="flex flex-col gap-4">
                        <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/40">
                            Terms
                        </div>
                        <div className="flex flex-col gap-2 text-xs font-semibold tracking-wide">
                            <a href="#" className="transition-colors hover:text-black/60">Privacy policy</a>
                            <a href="#" className="transition-colors hover:text-black/60">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="mx-auto mt-20 max-w-5xl border-t border-black/10 pt-8">
                <div className="text-[10px] font-medium uppercase tracking-[0.2em] text-black/40">
                    &copy; {new Date().getFullYear()} Hyphen. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
