"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden w-full m-0 p-0">
            {/* Background layer */}
            <div className="absolute inset-0 bg-primary-dark/95 z-0" />

            {/* Blueprint grid & Moon visual */}
            <div className="absolute inset-0 z-0 opacity-5"
                style={{ backgroundImage: 'linear-gradient(#E8B923 1px, transparent 1px), linear-gradient(90deg, #E8B923 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

            <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none z-0">
                <div className="w-[1000px] h-[1000px] rounded-full border-[80px] border-accent" />
            </div>

            <div className="container relative z-10 mx-auto px-4 md:px-8 py-20 flex flex-col items-center text-center mt-12 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl"
                >
                    <div className="inline-block px-4 py-1.5 rounded-full border border-accent/40 bg-accent/10 text-accent text-sm font-semibold tracking-wider mb-8 shadow-[0_0_15px_rgba(232,185,35,0.15)]">
                        Jigjiga, Somali Region, Ethiopia
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-tight mb-6 tracking-tight drop-shadow-lg">
                        Moon Engineering <br />
                        <span className="text-accent relative inline-block drop-shadow-xl mt-2">
                            Consultancy
                            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full" />
                        </span>
                    </h1>

                    <p className="text-lg md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed font-light">
                        Engineering Excellence • Sustainable Solutions • Horn of Africa
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link
                            href="/projects"
                            className="group flex items-center justify-center gap-2 bg-accent text-primary-dark px-10 py-5 rounded-full font-bold text-lg transition-all hover:scale-105 hover:bg-accent-hover w-full sm:w-auto shadow-xl"
                        >
                            View Our Projects
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="/#contact"
                            className="flex items-center justify-center gap-2 border-2 border-white/20 text-white px-10 py-5 rounded-full font-bold text-lg transition-all hover:bg-white/5 hover:border-white/40 w-full sm:w-auto"
                        >
                            Get In Touch
                        </Link>
                    </div>
                </motion.div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 mt-28 w-full max-w-5xl border-y border-white/10 py-10 backdrop-blur-sm bg-primary/20 rounded-3xl"
                >
                    {[
                        { value: "50+", label: "Projects Completed" },
                        { value: "10+", label: "Years Experience" },
                        { value: "15+", label: "Service Disciplines" },
                        { value: "100%", label: "Client Satisfaction" },
                    ].map((stat, i) => (
                        <div key={i} className="flex flex-col items-center justify-center px-4">
                            <span className="text-4xl md:text-5xl font-bold text-accent mb-3 drop-shadow-md">{stat.value}</span>
                            <span className="text-sm md:text-base text-white/70 uppercase tracking-widest text-center font-medium">{stat.label}</span>
                        </div>
                    ))}
                </motion.div>

                {/* Scroll down indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
                >
                    <span className="text-xs text-white/50 mb-3 uppercase tracking-[0.3em] font-semibold">Scroll</span>
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    >
                        <ChevronDown className="w-6 h-6 text-accent/80" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
