"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

export function FeaturedProjects() {
    const featured = projects.slice(0, 3);
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]); // Parallax movement

    return (
        <section ref={containerRef} className="py-24 md:py-32 bg-muted/30 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter">Featured Projects</h2>
                        <p className="text-muted-foreground max-w-xl text-lg font-light">
                            Explore some of our most recent and celebrated developments across Zimbabwe.
                        </p>
                    </motion.div>
                    <div className="hidden md:block">
                        <Button variant="link" className="text-secondary text-lg group p-0" asChild>
                            <Link href="/projects">
                                View All Projects
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </Button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                    {featured.map((project, index) => {
                        // Staggered parallax based on column index
                        const yOffset = index % 2 === 0 ? 0 : 40;

                        return (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                className="group relative flex flex-col gap-4"
                                style={{ marginTop: yOffset }} // Simple staggered layout
                            >
                                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md bg-muted">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 text-xs font-semibold uppercase tracking-widest text-secondary rounded-full shadow-sm">
                                        {project.category}
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-2xl font-semibold tracking-tight group-hover:text-secondary transition-colors line-clamp-1">{project.title}</h3>
                                        <span className="text-xs text-muted-foreground border border-border px-2 py-1 rounded-full">{project.year}</span>
                                    </div>
                                    <p className="text-muted-foreground text-sm line-clamp-2 mb-4 leading-relaxed">{project.description}</p>
                                    <Link href="/projects" className="inline-flex items-center text-sm font-medium text-foreground hover:text-secondary transition-colors group/link">
                                        View Details <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover/link:translate-x-1" />
                                    </Link>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <Button variant="outline" className="w-full" asChild>
                        <Link href="/projects">View All Projects</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
