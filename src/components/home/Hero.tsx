"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export function Hero() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 5]);

    return (
        <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-background flex items-center justify-center">
            {/* Background with Parallax */}
            <motion.div
                className="absolute inset-0 z-0 opacity-40 grayscale"
                style={{ y, scale: 1.1 }}
            >
                <Image
                    src="/images/Romapix-12_ChiedzaPark-New-scaled-1-1024x576-1-700x300.jpg"
                    alt="Romapix Hero"
                    fill
                    className="object-cover"
                    priority
                />
            </motion.div>

            {/* Large Typography Mask Effect */}
            <div className="relative z-10 text-center mix-blend-difference text-white select-none pointer-events-none">
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 2.2 }} // Delay matching preloader
                >
                    <h1 className="text-[12vw] leading-none font-bold tracking-tighter uppercase">
                        Roma<span className="text-transparent stroke-white" style={{ WebkitTextStroke: "2px white", color: "transparent" }}>pix</span>
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 2.4 }}
                >
                    <p className="text-xl md:text-2xl font-mono uppercase tracking-widest mt-4">
                        Construction & Development
                    </p>
                </motion.div>
            </div>

            {/* Floating Scroll Indicator */}
            <motion.div
                className="absolute bottom-12 right-12 z-20 flex flex-col items-end gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3, duration: 1 }}
            >
                <span className="font-mono text-xs text-white/50 uppercase tracking-widest">Scroll to Explore</span>
                <div className="w-[1px] h-16 bg-white/20">
                    <motion.div
                        className="w-full bg-primary"
                        style={{ height: useTransform(scrollYProgress, [0, 0.2], ["0%", "100%"]) }}
                    />
                </div>
            </motion.div>
        </section>
    );
}
