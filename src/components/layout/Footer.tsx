import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-primary text-primary-foreground pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="relative h-12 w-48 bg-white/10 rounded p-2">
                            <Image
                                src="/images/Romapix-Construction-Logo@2x-1-300x86.png"
                                alt="Romapix Construction"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <p className="text-primary-foreground/80 leading-relaxed text-sm">
                            Building visions into reality. We specialize in premium residential and commercial construction projects across Zimbabwe.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/about" className="text-primary-foreground/70 hover:text-secondary transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/projects" className="text-primary-foreground/70 hover:text-secondary transition-colors">
                                    Our Projects
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="text-primary-foreground/70 hover:text-secondary transition-colors">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-primary-foreground/70 hover:text-secondary transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                                <span className="text-primary-foreground/70">
                                    123 Construction Ave, Harare, Zimbabwe
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="h-5 w-5 text-secondary shrink-0" />
                                <a href="tel:+263771234567" className="text-primary-foreground/70 hover:text-white">
                                    +263 77 123 4567
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="h-5 w-5 text-secondary shrink-0" />
                                <a href="mailto:info@romapix.co.zw" className="text-primary-foreground/70 hover:text-white">
                                    info@romapix.co.zw
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Socials */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Follow Us</h3>
                        <div className="flex gap-4">
                            <a href="#" className="h-10 w-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary transition-colors">
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a href="#" className="h-10 w-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary transition-colors">
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a href="#" className="h-10 w-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary transition-colors">
                                <Linkedin className="h-5 w-5" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-primary-foreground/10 text-center text-primary-foreground/40 text-sm">
                    <p>© {new Date().getFullYear()} Romapix Construction. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
