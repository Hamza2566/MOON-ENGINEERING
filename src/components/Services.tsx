"use client";

import { motion } from "framer-motion";
import {
    Building2,
    Settings,
    Map,
    Lightbulb,
    PenTool,
    ShoppingCart,
    HardHat,
    Droplets,
    Train,
    Home,
    Network,
    Leaf,
    Route,
    Compass
} from "lucide-react";
import Link from "next/link";

export default function Services() {
    const services = [
        { title: "Civil & Structural Engineering", icon: <Building2 className="w-6 h-6" /> },
        { title: "Mechanical & Electrical", icon: <Settings className="w-6 h-6" /> },
        { title: "Geotechnical", icon: <Map className="w-6 h-6" /> },
        { title: "Feasibility Studies", icon: <Lightbulb className="w-6 h-6" /> },
        { title: "Conceptual & Detail Design", icon: <PenTool className="w-6 h-6" /> },
        { title: "Procurement", icon: <ShoppingCart className="w-6 h-6" /> },
        { title: "Construction Management", icon: <HardHat className="w-6 h-6" /> },
        { title: "Water & Wastewater", icon: <Droplets className="w-6 h-6" /> },
        { title: "Transportation & Infrastructure", icon: <Train className="w-6 h-6" /> },
        { title: "Architectural Services", icon: <Home className="w-6 h-6" /> },
        { title: "Infrastructure Management", icon: <Network className="w-6 h-6" /> },
        { title: "Environmental Services", icon: <Leaf className="w-6 h-6" /> },
        { title: "Road/Bridge Design & Rehab.", icon: <Route className="w-6 h-6" /> },
        { title: "Land Surveying", icon: <Compass className="w-6 h-6" /> },
    ];

    return (
        <section id="services" className="py-24 bg-[#0a2f2f]/30 relative border-b border-white/5">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-bold mb-4"
                        >
                            Our <span className="text-accent">Services</span>
                        </motion.h2>
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="w-24 h-1 bg-accent rounded-full"
                        />
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-muted-foreground max-w-lg mb-6">
                            Comprehensive engineering solutions tailored to meet the highest standards of safety, sustainability, and efficiency.
                        </p>
                        {/* View All placeholder hook if there's a standalone page later */}
                        <Link href="#contact" className="text-accent font-semibold flex items-center gap-2 hover:gap-4 transition-all group">
                            Discuss Your Project <span className="text-xl leading-none">&rarr;</span>
                        </Link>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: (index % 4) * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-card p-6 rounded-2xl border border-white/5 hover:border-accent/30 transition-all hover:-translate-y-1 group relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full -z-0 transition-transform group-hover:scale-150" />
                            <div className="relative z-10 flex flex-col h-full">
                                <div className="w-12 h-12 bg-primary/40 rounded-xl flex items-center justify-center text-accent mb-4 group-hover:bg-accent group-hover:text-primary-dark transition-colors">
                                    {service.icon}
                                </div>
                                <h3 className="text-lg font-bold text-foreground mt-auto leading-tight pr-4">
                                    {service.title}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
