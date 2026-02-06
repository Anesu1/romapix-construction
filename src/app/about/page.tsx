"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="min-h-screen pt-20 pb-20">
            {/* Header */}
            <section className="bg-muted py-20 px-4">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold mb-6"
                    >
                        About Romapix
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-muted-foreground max-w-2xl mx-auto"
                    >
                        Constructing excellence, one project at a time.
                    </motion.p>
                </div>
            </section>

            {/* Main Content */}
            <section className="container mx-auto px-4 md:px-6 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="relative h-[500px] w-full rounded-lg overflow-hidden shadow-2xl">
                            <Image
                                src="/images/Romapix-Chiedza-Park-23-of-45_result-700x300-1.jpg"
                                alt="Construction Site"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h2 className="text-3xl font-bold">Our Story</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Founded with a vision to revolutionize the Zimbabwean construction landscape, Romapix Construction has grown from a small contractor to a leading force in residential and commercial development.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            Our journey is defined by a relentless pursuit of quality. We understand that a building is more than just concrete and steel; it is a home, a workplace, a community hub. That is why we approach every project, big or small, with the same level of dedication and precision.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                            {["Premium Quality", "On-Time Delivery", "Transparent Pricing", "Expert Team"].map((item, i) => (
                                <div key={i} className="flex items-center gap-2">
                                    <CheckCircle2 className="h-5 w-5 text-secondary" />
                                    <span className="font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Mission/Vision */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div
                        className="bg-primary text-primary-foreground p-12 rounded-2xl"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                        <p className="text-primary-foreground/80 leading-relaxed">
                            To deliver superior construction solutions that exceed client expectations through innovation, integrity, and sustainable practices. We aim to build structures that stand the test of time.
                        </p>
                    </motion.div>
                    <motion.div
                        className="bg-muted p-12 rounded-2xl"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            To be the most trusted and sought-after construction partner in the region, known for our unwavering commitment to quality and our ability to turn complex visions into reality.
                        </p>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
