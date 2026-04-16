"use client";

import { motion } from "framer-motion";
import { Target, Eye, Flag, ShieldCheck } from "lucide-react";

export default function About() {
    const values = [
        { icon: <Target className="w-8 h-8" />, title: "Quality & Excellence", desc: "A commitment to delivering top-tier engineering results." },
        { icon: <ShieldCheck className="w-8 h-8" />, title: "Integrity", desc: "Upholding professional ethics, transparency, and accountability." },
        { icon: <Eye className="w-8 h-8" />, title: "Innovation", desc: "Embracing modern technologies and sustainable practices." },
        { icon: <Flag className="w-8 h-8" />, title: "Client Focus", desc: "Ensuring customer satisfaction through collaborative solutions." },
    ];

    return (
        <section id="about" className="py-28 bg-background relative border-b border-black/5 overflow-hidden">
            {/* Decorative gradient */}
            <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-muted rounded-full blur-[100px] -translate-x-1/2 pointer-events-none" />

            <div className="container mx-auto px-4 md:px-8 relative z-10 w-full">
                <div className="flex flex-col items-center mb-20 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight"
                    >
                        About <span className="text-accent">Moon</span>
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="w-24 h-1.5 bg-accent rounded-full mb-10 shadow-[0_0_10px_rgba(232,185,35,0.5)]"
                    />
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="text-muted-foreground max-w-4xl text-xl leading-relaxed"
                    >
                        Established in Jigjiga, Somali Region, Ethiopia, Moon Engineering Consultancy is a leading multidisciplinary firm committed to transforming the Horn of Africa through sustainable and resilient infrastructure. Our team combines international standards with deep local expertise to deliver exceptional results.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {values.map((v, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="bg-card p-10 rounded-3xl border border-black/5 hover:border-accent/40 hover:bg-card/80 transition-all duration-300 group shadow-lg hover:shadow-accent/5 backdrop-blur-sm"
                        >
                            <div className="w-16 h-16 bg-muted-foreground/10 text-accent rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                                {v.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-accent transition-colors">{v.title}</h3>
                            <p className="text-muted-foreground text-base leading-relaxed">{v.desc}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-24 p-10 md:p-16 bg-card/50 rounded-3xl border border-black/5 flex flex-col lg:flex-row items-center justify-between gap-16 backdrop-blur-md relative overflow-hidden">
                    {/* Abstract shape */}
                    <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-accent/5 rounded-full blur-[50px] pointer-events-none" />

                    <div className="flex-1 space-y-8 relative z-10">
                        <h3 className="text-3xl font-bold text-foreground">Our Vision & Mission</h3>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="w-1.5 bg-accent rounded-full shrink-0" />
                                <p className="text-muted-foreground text-lg leading-relaxed">
                                    <strong className="text-foreground block mb-1 uppercase tracking-wider text-sm">Vision</strong>
                                    To be the premier engineering consultancy in the Horn of Africa, recognized for engineering excellence, sustainability, and transformative solutions that drive regional development.
                                </p>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-1.5 bg-primary rounded-full shrink-0" />
                                <p className="text-muted-foreground text-lg leading-relaxed">
                                    <strong className="text-foreground block mb-1 uppercase tracking-wider text-sm">Mission</strong>
                                    To provide innovative, reliable, and high-quality engineering services across civil, structural, and multidisciplinary sectors, fostering growth and improving the quality of life in the communities we serve.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-2/5 aspect-[4/3] bg-primary-dark rounded-2xl overflow-hidden relative group shadow-2xl">
                        {/* Image placeholder or subtle graphic with overlay */}
                        <div className="absolute inset-0 bg-primary-dark/40 mix-blend-multiply z-10 transition-opacity group-hover:opacity-0 duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent z-10" />
                        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center group-hover:scale-105 transition-transform duration-700" />
                        <div className="absolute bottom-4 left-4 right-4 bg-background/80 backdrop-blur-md border border-black/10 p-4 rounded-xl z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                            <p className="font-bold text-accent text-center tracking-wide uppercase text-sm">Engineering The Future</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
