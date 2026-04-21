"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Projects", href: "/projects" },
        { name: "Gallery", href: "/gallery" },
        { name: "Team", href: "/team" },
        { name: "Clients", href: "/clients" },
    ];

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
                ? "bg-background/95 backdrop-blur-md shadow-lg py-4 border-b border-black/5"
                : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group z-50">
                    <Image
                        src="/logo.png"
                        alt="Moon Engineering Consultancy Logo"
                        width={48}
                        height={48}
                        className="h-10 w-auto transition-transform group-hover:scale-105"
                        priority
                    />
                    <div className="flex flex-col">
                        <span className="text-xl font-bold leading-tight tracking-wide text-foreground">Moon Engineering</span>
                        <span className="text-[10px] text-primary tracking-[0.2em] uppercase font-bold">Consultancy</span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden xl:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`text-sm font-semibold transition-all hover:text-accent relative ${pathname === link.href ? "text-accent" : "text-foreground/90"
                                }`}
                        >
                            {link.name}
                            {pathname === link.href && (
                                <motion.div
                                    layoutId="navbar-indicator"
                                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-accent rounded-full"
                                />
                            )}
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        className="bg-accent text-primary-dark px-6 py-2.5 rounded-full font-bold transition-transform hover:scale-105 hover:bg-accent-hover shadow-lg"
                    >
                        Get In Touch
                    </Link>
                </nav>

                {/* Mobile menu toggle */}
                <button
                    className="xl:hidden text-foreground hover:text-accent transition-colors z-50"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="xl:hidden fixed inset-0 top-0 pt-24 pb-safe bg-primary shadow-xl overflow-y-auto"
                    >
                        <div className="flex flex-col px-6 gap-6">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    key={link.name}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="text-2xl font-bold text-foreground hover:text-accent block py-2 border-b border-black/10"
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: navLinks.length * 0.05 }}
                            >
                                <Link
                                    href="/contact"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="bg-accent text-primary-dark text-center block w-full px-8 py-4 rounded-full font-bold mt-6 shadow-xl"
                                >
                                    Get In Touch
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
