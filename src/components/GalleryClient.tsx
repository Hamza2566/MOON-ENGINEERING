"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Maximize2 } from "lucide-react";

type GalleryItem = {
    _id: string;
    title: string;
    category: string;
    imageUrl: string;
    caption?: string;
    date?: string;
};

export default function GalleryClient({ initialGallery }: { initialGallery: GalleryItem[] }) {
    const [filter, setFilter] = useState("All");
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const categories = ["All", ...Array.from(new Set(initialGallery.map(g => g.category).filter(Boolean)))];

    const filteredItems = useMemo(() => {
        if (filter === "All") return initialGallery;
        return initialGallery.filter(g => g.category === filter);
    }, [filter, initialGallery]);

    const openLightbox = (index: number) => {
        setCurrentIndex(index);
        setLightboxOpen(true);
    };

    return (
        <div className="bg-background py-16">
            <div className="container mx-auto px-4 md:px-8">

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

                {/* Masonry-style Grid */}
                <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                    <AnimatePresence>
                        {filteredItems.map((item, index) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                key={item._id}
                                className="relative group rounded-3xl overflow-hidden border border-black/5 break-inside-avoid cursor-pointer bg-muted"
                                onClick={() => openLightbox(index)}
                            >
                                <img
                                    src={item.imageUrl || "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=1200&auto=format&fit=crop"}
                                    alt={item.title}
                                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                    <span className="text-accent text-xs font-bold uppercase tracking-widest mb-1">{item.category}</span>
                                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                                    <div className="w-10 h-10 rounded-full bg-accent text-primary-dark flex items-center justify-center absolute top-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                        <Maximize2 className="w-5 h-5" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredItems.length === 0 && (
                    <div className="text-center text-muted-foreground py-20 bg-card rounded-3xl border border-black/5 mt-10">
                        No images found for this category.
                    </div>
                )}
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {lightboxOpen && filteredItems[currentIndex] && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center"
                    >
                        <button
                            onClick={() => setLightboxOpen(false)}
                            className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
                        >
                            <X className="w-10 h-10" />
                        </button>
                        <div className="max-w-6xl w-full px-4 flex flex-col items-center">
                            <img
                                src={filteredItems[currentIndex].imageUrl || "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=1200&auto=format&fit=crop"}
                                alt={filteredItems[currentIndex].title}
                                className="max-h-[80vh] object-contain rounded-xl shadow-2xl"
                            />
                            <div className="mt-6 text-center max-w-2xl">
                                <h3 className="text-2xl font-bold text-white mb-2">{filteredItems[currentIndex].title}</h3>
                                {filteredItems[currentIndex].caption && (
                                    <p className="text-white/70">{filteredItems[currentIndex].caption}</p>
                                )}
                            </div>

                            <div className="flex gap-4 mt-8">
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : filteredItems.length - 1));
                                    }}
                                    className="px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
                                >
                                    Previous
                                </button>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setCurrentIndex((prev) => (prev < filteredItems.length - 1 ? prev + 1 : 0));
                                    }}
                                    className="px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
                                >
                                    Next
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
