"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import Image from "next/image";

type Project = {
    _id: string;
    title: string;
    slug: { current: string };
    category: string;
    status: string;
    location: string;
    year: string;
    shortDescription: string;
    featuredImageUrl: string;
};

export default function ProjectsClient({ initialProjects }: { initialProjects: Project[] }) {
    const [filter, setFilter] = useState("All");

    const categories = ["All", ...Array.from(new Set(initialProjects.map(p => p.category)))];

    const filteredProjects = useMemo(() => {
        if (filter === "All") return initialProjects;
        return initialProjects.filter(p => p.category === filter);
    }, [filter, initialProjects]);

    return (
        <div className="bg-background py-16">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold mb-6"
                    >
                        Our <span className="text-accent">Projects</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-muted-foreground max-w-2xl mx-auto text-lg"
                    >
                        Explore our portfolio of engineering excellence across the Horn of Africa.
                    </motion.p>
                </div>

                {/* Filters */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-wrap justify-center gap-3 mb-16"
                >
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${filter === cat
                                ? "bg-accent text-primary-dark shadow-[0_0_15px_rgba(232,185,35,0.4)]"
                                : "bg-card text-foreground border border-black/5 hover:border-accent/40"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </motion.div>

                {/* Grid */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                key={project._id}
                                className="bg-card rounded-3xl overflow-hidden border border-black/5 group flex flex-col"
                            >
                                <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
                                    <img
                                        src={project.featuredImageUrl || "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=1000&auto=format&fit=crop"}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    {/* Status badge */}
                                    <div className="absolute top-4 right-4 backdrop-blur-md bg-black/40 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-black/10 shadow-lg">
                                        {project.status}
                                    </div>
                                </div>

                                <div className="p-8 flex flex-col flex-1 relative">
                                    <div className="absolute top-0 right-8 -translate-y-1/2 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-primary-dark shadow-xl opacity-0 translate-y-4 group-hover:opacity-100 group-hover:-translate-y-1/2 transition-all duration-300">
                                        <ArrowRight className="w-5 h-5 -rotate-45" />
                                    </div>
                                    <span className="text-accent text-xs font-bold uppercase tracking-widest mb-3">{project.category}</span>
                                    <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">{project.title}</h3>
                                    <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                                        <MapPin className="w-4 h-4" />
                                        <span>{project.location}</span>
                                        <span className="w-1 h-1 rounded-full bg-white/20 mx-1" />
                                        <span>{project.year}</span>
                                    </div>
                                    <p className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-1">
                                        {project.shortDescription}
                                    </p>

                                    <Link href={`/projects/${project.slug.current}`} className="text-foreground font-semibold flex items-center gap-2 hover:text-accent transition-colors mt-auto w-max border-b border-transparent hover:border-accent pb-0.5">
                                        View Details
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredProjects.length === 0 && (
                    <div className="text-center text-muted-foreground py-20 bg-card rounded-3xl border border-black/5">
                        No projects found for this category.
                    </div>
                )}
            </div>
        </div>
    );
}
