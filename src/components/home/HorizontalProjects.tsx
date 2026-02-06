"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";

export function HorizontalProjects() {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-neutral-900 border-t border-white/10">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-12 px-12 md:px-24">
                    {/* Title Card */}
                    <div className="flex flex-col justify-center min-w-[50vw] md:min-w-[30vw]">
                        <h2 className="text-6xl md:text-8xl font-bold uppercase tracking-tighter text-white mb-8">
                            Selected <br /> Works
                        </h2>
                        <p className="text-xl text-white/50 max-w-sm mb-8">
                            A curated selection of our finest residential and commercial developments.
                        </p>
                        <Button variant="outline" className="w-fit rounded-full border-white text-white hover:bg-white hover:text-black" asChild>
                            <Link href="/projects">View All Projects</Link>
                        </Button>
                    </div>

                    {/* Project Cards */}
                    {projects.map((project, i) => (
                        <div key={project.id} className="group relative h-[60vh] w-[80vw] md:w-[40vw] flex-shrink-0 overflow-hidden bg-neutral-800">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />

                            <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black/80 to-transparent">
                                <span className="text-primary font-mono text-sm tracking-widest uppercase mb-2 block">{project.category}</span>
                                <h3 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tight">{project.title}</h3>
                                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-500">
                                    <span className="text-white/80">{project.description}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
