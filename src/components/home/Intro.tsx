"use client";

import { motion } from "framer-motion";
import { Hammer, Ruler, HardHat } from "lucide-react";

const features = [
    {
        icon: Hammer,
        title: "Expert Craftsmanship",
        description: "Our team of skilled artisans ensures every detail is executed to perfection."
    },
    {
        icon: Ruler,
        title: "Precision Planning",
        description: "We utilize advanced tools and methodologies to deliver on time and within budget."
    },
    {
        icon: HardHat,
        title: "Safety First",
        description: "Uncompromising safety standards protect our team and your investment."
    }
];

export function Intro() {
    return (
        <section className="py-24 md:py-32 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground leading-tight tracking-tighter">
                            We Don&apos;t Just Build structures, <br />
                            <span className="text-secondary">We Build Legacies.</span>
                        </h2>
                        <p className="text-xl text-muted-foreground mb-8 leading-relaxed font-light">
                            At Romapix Construction, we believe that every project is an opportunity to shape the future. With over a decade of experience in the Zimbabwean construction industry, we combine traditional craftsmanship with modern innovation to deliver spaces that inspire.
                        </p>
                        <div className="flex gap-12">
                            <div className="flex flex-col">
                                <span className="text-5xl font-bold text-foreground tracking-tight">50+</span>
                                <span className="text-sm text-muted-foreground uppercase tracking-wider mt-1">Projects Completed</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-5xl font-bold text-foreground tracking-tight">10+</span>
                                <span className="text-sm text-muted-foreground uppercase tracking-wider mt-1">Years Experience</span>
                            </div>
                        </div>
                    </motion.div>

                    <div className="grid gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
                                className="flex gap-6 p-8 rounded-xl bg-secondary/5 hover:bg-secondary/10 transition-colors border-l-2 border-transparent hover:border-secondary"
                            >
                                <div className="bg-secondary/20 p-4 rounded-full h-fit shrink-0">
                                    <feature.icon className="h-6 w-6 text-secondary" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2 tracking-tight">{feature.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
