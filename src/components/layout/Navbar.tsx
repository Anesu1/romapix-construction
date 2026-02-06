"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
];

export function Navbar() {
    const pathname = usePathname();

    return (
        <motion.header
            className="fixed top-8 left-0 right-0 z-50 flex justify-center pointer-events-none"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 1 }}
        >
            <div className="pointer-events-auto bg-black/50 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 flex items-center gap-8 shadow-2xl">
                <Link href="/" className="text-xl font-bold tracking-tighter text-white uppercase mix-blend-difference">
                    Romapix
                </Link>

                <nav className="hidden md:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "relative text-sm font-medium uppercase tracking-widest transition-colors hover:text-primary",
                                pathname === link.href ? "text-white" : "text-white/60"
                            )}
                        >
                            {link.name}
                            {pathname === link.href && (
                                <motion.div
                                    layoutId="activeNav"
                                    className="absolute -bottom-1 left-0 w-full h-[2px] bg-primary"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                        </Link>
                    ))}
                </nav>

                <Link
                    href="/contact"
                    className="hidden md:block bg-white text-black text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full hover:bg-primary hover:text-white transition-colors"
                >
                    Let&apos;s Build
                </Link>

                {/* Mobile Menu Icon (Simplified for now) */}
                <div className="md:hidden flex items-center">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                        <div className="w-4 h-4 bg-white rounded-full" />
                    </div>
                </div>
            </div>
        </motion.header>
    );
}
