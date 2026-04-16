"use client";

import { motion } from "framer-motion";
import { User } from "lucide-react";

export default function Team() {
    const teamMembers = [
        {
            name: "Khader Mahamed Kilas",
            role: "General Manager",
            bio: "Leading the firm's strategic vision with extensive experience in civil and infrastructure engineering.",
        },
        {
            name: "Eng. Placeholder One",
            role: "Lead Structural Engineer",
            bio: "Specializing in the structural integrity of high-rise buildings and complex bridge designs.",
        },
        {
            name: "Eng. Placeholder Two",
            role: "Project Manager",
            bio: "Ensuring effective project delivery, keeping sites safe, on schedule, and within budget.",
        },
        {
            name: "Eng. Placeholder Three",
            role: "Geotechnical Specialist",
            bio: "Expertise in soil mechanics and comprehensive foundation solutions for regional topography.",
        }
    ];

    return (
        <section id="team" className="py-24 bg-background relative border-b border-white/5">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col items-center mb-16 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold mb-4"
                    >
                        Our <span className="text-accent">Team</span>
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="w-24 h-1 bg-accent rounded-full mb-8"
                    />
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-muted-foreground max-w-2xl text-lg leading-relaxed"
                    >
                        Our success is driven by the expertise, dedication, and collaborative spirit of our multidisciplinary team of engineering professionals.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-card rounded-2xl overflow-hidden border border-white/5 group hover:border-accent/30 transition-all"
                        >
                            {/* Photo placeholder */}
                            <div className="w-full aspect-[4/5] bg-primary/20 flex flex-col justify-end p-6 border-b border-white/5 relative">
                                <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
                                    <User className="w-24 h-24" />
                                </div>
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
