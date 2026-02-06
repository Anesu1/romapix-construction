"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
    return (
        <div className="min-h-screen pt-20 pb-20">
            {/* Header */}
            <section className="bg-primary text-primary-foreground py-20 px-4">
                <div className="container mx-auto px-4 md:px-6">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold mb-6"
                    >
                        Our Portfolio
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-primary-foreground/80 max-w-2xl"
                    >
                        A showcase of our commitment to excellence in residential, commercial, and infrastructure development.
                    </motion.p>
                </div>
            </section>

            {/* Grid */}
            <section className="container mx-auto px-4 md:px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="relative aspect-video overflow-hidden rounded-lg bg-muted mb-4">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                            </div>
                            <div>
                                <div className="flex justify-between items-baseline mb-2">
                                    <h2 className="text-2xl font-bold group-hover:text-secondary transition-colors">{project.title}</h2>
                                    <span className="text-sm font-medium text-muted-foreground">{project.year}</span>
                                </div>
                                <p className="text-muted-foreground mb-3">{project.description}</p>

                                <div className="flex gap-2">
                                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                                        {project.category}
                                    </span>
                                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-muted text-muted-foreground">
                                        {project.location}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
}
