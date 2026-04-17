import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-background pt-20 pb-8 border-t border-black/5 relative overflow-hidden">
            {/* Decorative background circle */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="flex flex-col gap-6">
                        <Link href="/" className="flex items-center gap-2 w-max">
                            <Image
                                src="/logo.png"
                                alt="Moon Engineering Consultancy Logo"
                                width={56}
                                height={56}
                                className="h-12 w-auto"
                            />
                            <div className="flex flex-col">
                                <span className="text-xl font-bold leading-tight tracking-wide text-foreground">Moon Engineering</span>
                                <span className="text-[10px] text-primary tracking-[0.2em] uppercase font-bold">Consultancy</span>
                            </div>
                        </Link>
                        <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
                            Engineering Excellence • Sustainable Solutions • Horn of Africa
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col gap-5">
                        <h4 className="text-foreground font-bold uppercase tracking-widest text-sm mb-1">Quick Links</h4>
                        <div className="flex flex-col gap-3">
                            <Link href="/about" className="text-muted-foreground hover:text-accent transition-colors text-sm w-max">About Us</Link>
                            <Link href="/projects" className="text-muted-foreground hover:text-accent transition-colors text-sm w-max">Our Projects</Link>
                            <Link href="/gallery" className="text-muted-foreground hover:text-accent transition-colors text-sm w-max">Gallery</Link>
                            <Link href="/team" className="text-muted-foreground hover:text-accent transition-colors text-sm w-max">Our Team</Link>
                            <Link href="/contact" className="text-muted-foreground hover:text-accent transition-colors text-sm w-max">Contact Us</Link>
                            <a href="/studio" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors text-sm w-max flex items-center gap-1.5 mt-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_5px_rgba(232,185,35,0.8)] animate-pulse"></span>
                                Content Studio
                            </a>
                        </div>
                    </div>

                    {/* Services */}
                    <div className="flex flex-col gap-5">
                        <h4 className="text-foreground font-bold uppercase tracking-widest text-sm mb-1">Key Services</h4>
                        <div className="flex flex-col gap-3">
                            <span className="text-muted-foreground text-sm">Civil & Structural Engineering</span>
                            <span className="text-muted-foreground text-sm">Mechanical & Electrical</span>
                            <span className="text-muted-foreground text-sm">Geotechnical Services</span>
                            <span className="text-muted-foreground text-sm">Construction Management</span>
                            <span className="text-muted-foreground text-sm">Road & Bridge Design</span>
                        </div>
                    </div>

                    {/* Contact */}
                    <div className="flex flex-col gap-5">
                        <h4 className="text-foreground font-bold uppercase tracking-widest text-sm mb-1">Contact Info</h4>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                <span className="text-muted-foreground text-sm">Kaah Building, Jigjiga, Somali Region, Ethiopia</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <Phone className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                <div className="flex flex-col gap-1">
                                    <a href="tel:+251911272815" className="text-muted-foreground hover:text-accent transition-colors text-sm">+251-911-272815</a>
                                    <a href="tel:+251712448742" className="text-muted-foreground hover:text-accent transition-colors text-sm">+251-712-448742</a>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-accent shrink-0" />
                                <a href="mailto:mooneconsultancy@gmail.com" className="text-muted-foreground hover:text-accent transition-colors text-sm break-all">
                                    mooneconsultancy@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-black/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-muted-foreground text-sm text-center md:text-left">
                        &copy; 2026 Moon Engineering Consultancy. All rights reserved.
                    </p>

                </div>
            </div>
        </footer>
    );
}
