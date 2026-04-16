"use client";

import { motion } from "framer-motion";
import { User } from "lucide-react";

export default function Team() {
    const teamMembers = [
        {
            name: "Khader Mahamed Kilas",
            role: "General Manager",
            bio: "Leading the firm's strategic vision with extensive experience in civil and infrastructure engineering.",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop"
        },
        {
            name: "Eng. Placeholder One",
            role: "Lead Structural Engineer",
            bio: "Specializing in the structural integrity of high-rise buildings and complex bridge designs.",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop"
        },
        {
            name: "Eng. Placeholder Two",
            role: "Project Manager",
            bio: "Ensuring effective project delivery, keeping sites safe, on schedule, and within budget.",
            image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop"
        },
        {
            name: "Eng. Placeholder Three",
            role: "Geotechnical Specialist",
            bio: "Expertise in soil mechanics and comprehensive foundation solutions for regional topography.",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop"
        }
    ];

    return (
        <section id="team" className="py-24 bg-background relative border-b border-black/5">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-card rounded-2xl overflow-hidden border border-black/5 group hover:border-accent/30 transition-all"
                        >
                            {/* Photo placeholder */}
                            <div className="w-full aspect-[4/5] bg-muted flex flex-col justify-end p-6 border-b border-black/5 relative">
                                <div className="absolute inset-0 bg-primary-dark/10 group-hover:bg-transparent transition-colors z-0" />
                                <img src={member.image} alt={member.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                <div className="relative z-10 w-full bg-gradient-to-t from-primary-dark/80 to-transparent pt-20 px-2 -mx-2 -mb-6 pb-6">
                                    <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
                                    <span className="text-accent text-sm font-semibold tracking-wider uppercase mb-2 block">{member.role}</span>
                                </div>
                            </div>
                            <div className="p-6">
                                <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
