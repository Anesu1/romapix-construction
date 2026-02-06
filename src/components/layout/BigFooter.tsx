"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function BigFooter() {
    return (
        <footer className="bg-primary text-black py-24 md:py-32 px-6 overflow-hidden">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
                    <div>
                        <h3 className="text-2xl font-bold uppercase tracking-tight mb-8">Navigation</h3>
                        <nav className="flex flex-col text-4xl md:text-6xl font-bold uppercase tracking-tighter space-y-4">
                            <Link href="/" className="hover:text-white transition-colors w-fit">Home</Link>
                            <Link href="/projects" className="hover:text-white transition-colors w-fit">Projects</Link>
                            <Link href="/about" className="hover:text-white transition-colors w-fit">About</Link>
                            <Link href="/contact" className="hover:text-white transition-colors w-fit">Contact</Link>
                        </nav>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold uppercase tracking-tight mb-8">Contact</h3>
                        <div className="flex flex-col text-2xl md:text-4xl font-bold uppercase tracking-tight space-y-2">
                            <a href="mailto:info@romapix.co.zw" className="hover:text-white transition-colors flex items-center gap-2 group">
                                info@romapix.co.zw
                                <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
                            </a>
                            <a href="tel:+263771234567" className="hover:text-white transition-colors">+263 77 123 4567</a>
                            <p className="mt-8 text-xl normal-case font-medium opacity-80 max-w-md">
                                123 Construction Ave<br />
                                Harare, Zimbabwe
                            </p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-black/20 pt-8 flex flex-col md:flex-row justify-between items-end">
                    <h2 className="text-[15vw] leading-[0.8] font-black uppercase tracking-tighter text-black/90 select-none">
                        Romapix
                    </h2>
                    <div className="text-sm font-mono uppercase tracking-widest opacity-60 pb-4 md:pb-8 text-right">
                        © {new Date().getFullYear()} Romapix Construction.<br />
                        All Rights Reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
}
