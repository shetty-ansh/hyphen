import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full bg-background px-6 py-20 text-foreground sm:px-10 lg:px-16">
            <div className="mx-auto flex max-w-5xl flex-col justify-between gap-16 md:flex-row md:items-start">

                {/* Brand */}
                <div className="flex flex-col gap-4">
                    <div className="text-sm font-bold uppercase tracking-[0.3em]">
                        hyphen
                    </div>
                    <div className="text-xs font-medium uppercase tracking-[0.2em] text-foreground">
                        A Private Club &middot; London
                    </div>
                </div>

                {/* Links */}
                <div className="flex flex-col gap-12 sm:flex-row sm:gap-24">
                    {/* Contact */}
                    <div className="flex flex-col gap-4">
                        <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground">
                            Contact
                        </div>
                        <div className="flex flex-col gap-2 text-xs font-semibold tracking-wide">
                            <a href="mailto:hello@tcsnetwork.co.uk" className="transition-colors hover:text-foreground">Email</a>
                            <a href="https://www.instagram.com/hyphen.ldn/" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground">Instagram</a>
                            <a href="https://substack.com/@csnetwork" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground">Substack</a>
                        </div>
                    </div>

                    {/* Terms & Info */}
                    <div className="flex flex-col gap-4">
                        <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground">
                            Info
                        </div>
                        <div className="flex flex-col gap-2 text-xs font-semibold tracking-wide">
                            <Link href="/faq" className="transition-colors hover:text-foreground">FAQ</Link>
                            <a href="#" className="transition-colors hover:text-foreground">Privacy policy</a>
                            <Link href="/terms" className="transition-colors hover:text-foreground">Terms and Conditions</Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="mx-auto mt-20 max-w-5xl border-t border-black/10 dark:border-white/10 pt-8">
                <div className="text-[10px] font-medium uppercase tracking-[0.2em] text-foreground">
                    &copy; {new Date().getFullYear()} Hyphen. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
