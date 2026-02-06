"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export function StickyAbout() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    return (
        <section
            ref={container}
            className="relative flex flex-col justify-center items-center py-32 md:py-48 px-6 bg-background overflow-hidden border-t border-white/10"
        >
            {/* Background Text Texture */}
            <div className="absolute inset-0 z-0 flex items-center justify-center opacity-5 pointer-events-none select-none">
                <span className="text-[20vw] font-bold uppercase text-white leading-none tracking-tighter text-center">
                    Roma<br />pix
                </span>
            </div>

            <div className="relative z-10 max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <motion.div
                    style={{ y }}
                    className="md:order-2 relative h-[600px] w-full bg-neutral-900 overflow-hidden"
                >
                    <Image
                        src="/images/Romapix-Chiedza-Park-23-of-45_result-700x300-1.jpg"
                        alt="About Romapix"
                        fill
                        className="object-cover"
                    />
                </motion.div>

                <div className="md:order-1 space-y-8">
                    <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter text-white leading-[0.9]">
                        We Build <span className="text-primary">Tomorrow</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-neutral-400 font-light leading-relaxed">
                        Constructing the future of Zimbabwe with precision, passion, and brute strength. We don&apos;t just pour concrete; we forge legacies.
                    </p>
                    <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
                        <div>
                            <span className="block text-4xl font-bold text-white mb-1">50+</span>
                            <span className="text-sm font-mono text-neutral-500 uppercase tracking-widest">Projects</span>
                        </div>
                        <div>
                            <span className="block text-4xl font-bold text-white mb-1">100%</span>
                            <span className="text-sm font-mono text-neutral-500 uppercase tracking-widest">Client Satisfaction</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
