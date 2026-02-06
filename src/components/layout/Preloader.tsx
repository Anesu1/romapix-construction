"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Preloader() {
    const [complete, setComplete] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setComplete(true);
        }, 2500); // 2.5s simulated load
        return () => clearTimeout(timer);
    }, []);

    if (complete) return null;

    return (
        <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
            initial={{ y: 0 }}
            animate={{ y: "-100%" }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 2.2 }}
        >
            <motion.div
                className="overflow-hidden"
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: 2 }}
            >
                <motion.h1
                    className="text-6xl md:text-9xl font-bold text-white tracking-tighter uppercase"
                    initial={{ y: "100%" }}
                    animate={{ y: "0%" }}
                    transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
                >
                    Romapix
                </motion.h1>
            </motion.div>
        </motion.div>
    );
}
