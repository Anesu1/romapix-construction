"use client";

import { motion } from "framer-motion";

export function Marquee() {
    return (
        <div className="relative w-full overflow-hidden bg-primary py-4 md:py-6">
            <motion.div
                className="flex whitespace-nowrap"
                animate={{ x: "-50%" }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 20,
                }}
            >
                <div className="flex gap-12 md:gap-24 px-6 md:px-12 text-black font-bold text-4xl md:text-6xl uppercase tracking-tighter">
                    <span>Residential Construction</span>
                    <span aria-hidden="true">&bull;</span>
                    <span>Commercial Development</span>
                    <span aria-hidden="true">&bull;</span>
                    <span>Industrial Projects</span>
                    <span aria-hidden="true">&bull;</span>
                    <span>Renovations</span>
                    <span aria-hidden="true">&bull;</span>
                    {/* Repetition for smooth loop */}
                    <span>Residential Construction</span>
                    <span aria-hidden="true">&bull;</span>
                    <span>Commercial Development</span>
                    <span aria-hidden="true">&bull;</span>
                    <span>Industrial Projects</span>
                    <span aria-hidden="true">&bull;</span>
                    <span>Renovations</span>
                    <span aria-hidden="true">&bull;</span>
                </div>
            </motion.div>
        </div>
    );
}
