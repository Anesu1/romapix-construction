"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"; // Assuming we'll create these or using standard HTML for now to save time if no UI comp exists
import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="min-h-screen pt-20 pb-20">
            <section className="bg-primary text-primary-foreground py-20 px-4">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold mb-6"
                    >
                        Get In Touch
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-primary-foreground/80 max-w-2xl mx-auto"
                    >
                        Ready to start your project? We are here to help.
                    </motion.p>
                </div>
            </section>

            <section className="container mx-auto px-4 md:px-6 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-8"
                    >
                        <h2 className="text-3xl font-bold mb-8">Contact Information</h2>

                        <div className="flex items-start gap-4">
                            <div className="bg-secondary/10 p-4 rounded-lg">
                                <MapPin className="h-6 w-6 text-secondary" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg mb-1">Our Office</h3>
                                <p className="text-muted-foreground">123 Construction Ave<br />Harare, Zimbabwe</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="bg-secondary/10 p-4 rounded-lg">
                                <Phone className="h-6 w-6 text-secondary" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg mb-1">Phone</h3>
                                <p className="text-muted-foreground">+263 77 123 4567<br />+263 77 765 4321</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="bg-secondary/10 p-4 rounded-lg">
                                <Mail className="h-6 w-6 text-secondary" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg mb-1">Email</h3>
                                <p className="text-muted-foreground">info@romapix.co.zw<br />sales@romapix.co.zw</p>
                            </div>
                        </div>

                        <div className="h-64 bg-muted rounded-xl mt-8 flex items-center justify-center text-muted-foreground">
                            {/* Map Placeholder */}
                            <p>Map Integration Placeholder</p>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="bg-card shadow-lg rounded-2xl p-8 border border-border"
                    >
                        <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="firstName" className="text-sm font-medium">First Name</label>
                                    <input id="firstName" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="John" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="lastName" className="text-sm font-medium">Last Name</label>
                                    <input id="lastName" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="Doe" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium">Email</label>
                                <input id="email" type="email" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="john@example.com" />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium">Message</label>
                                <textarea id="message" className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="Tell us about your project..." />
                            </div>

                            <Button type="submit" className="w-full" size="lg">
                                Send Message <Send className="ml-2 h-4 w-4" />
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
