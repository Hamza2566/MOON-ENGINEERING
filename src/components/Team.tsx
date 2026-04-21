"use client";

import { motion } from "framer-motion";

/* ─── Illustration avatars ───────────────────────────────────────
   Each SVG is a self-contained professional portrait illustration.
   Colors align with the site's primary palette (deep navy + accent).
─────────────────────────────────────────────────────────────────── */

function AvatarIllustration({ index }: { index: number }) {
    const palettes = [
        { skin: "#F5CBA7", shirt: "#1a3a5c", tie: "#e87722", bg: "from-blue-50 to-slate-100" },
        { skin: "#D4A574", shirt: "#1a3a5c", tie: "#2563eb", bg: "from-indigo-50 to-blue-100" },
        { skin: "#C68642", shirt: "#1a3a5c", tie: "#16a34a", bg: "from-emerald-50 to-teal-100" },
    ];
    const p = palettes[index % palettes.length];

    return (
        <div className={`w-full h-full bg-gradient-to-b ${p.bg} flex items-end justify-center overflow-hidden`}>
            <svg
                viewBox="0 0 200 220"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[80%] h-auto drop-shadow-md"
                aria-hidden="true"
            >
                {/* Body / Suit */}
                <ellipse cx="100" cy="230" rx="72" ry="55" fill={p.shirt} />
                {/* Shirt collar white */}
                <polygon points="100,165 88,195 112,195" fill="#ffffff" />
                {/* Tie */}
                <polygon points="100,168 95,200 100,215 105,200" fill={p.tie} />
                {/* Neck */}
                <rect x="89" y="148" width="22" height="22" rx="6" fill={p.skin} />
                {/* Head */}
                <ellipse cx="100" cy="130" rx="38" ry="42" fill={p.skin} />
                {/* Hair */}
                <ellipse cx="100" cy="92" rx="38" ry="18" fill="#2c1810" />
                <rect x="62" y="92" width="76" height="14" rx="4" fill="#2c1810" />
                {/* Eyes */}
                <ellipse cx="87" cy="128" rx="5" ry="6" fill="#fff" />
                <ellipse cx="113" cy="128" rx="5" ry="6" fill="#fff" />
                <circle cx="88" cy="129" r="3" fill="#1a1a2e" />
                <circle cx="114" cy="129" r="3" fill="#1a1a2e" />
                <circle cx="89" cy="127" r="1" fill="#fff" />
                <circle cx="115" cy="127" r="1" fill="#fff" />
                {/* Eyebrows */}
                <path d="M81 120 Q88 116 95 120" stroke="#2c1810" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                <path d="M105 120 Q112 116 119 120" stroke="#2c1810" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                {/* Nose */}
                <path d="M98 135 Q100 142 102 135" stroke={p.skin === "#F5CBA7" ? "#d4956a" : "#a0673a"} strokeWidth="1.5" fill="none" strokeLinecap="round" />
                {/* Smile */}
                <path d="M89 148 Q100 158 111 148" stroke={p.skin === "#F5CBA7" ? "#c0783c" : "#8b4513"} strokeWidth="2" fill="none" strokeLinecap="round" />
                {/* Ears */}
                <ellipse cx="62" cy="130" rx="7" ry="9" fill={p.skin} />
                <ellipse cx="138" cy="130" rx="7" ry="9" fill={p.skin} />
            </svg>
        </div>
    );
}

export default function Team() {
    const teamMembers = [
        {
            name: "Khader Mahamed Kilas",
            role: "General Manager",
            bio: "Leading the firm's strategic vision with extensive experience in civil and infrastructure engineering.",
        },
        {
            name: "Mohamed Abdiwahid",
            role: "Deputy Manager",
            bio: "Assisting in strategic operations and overseeing day-to-day engineering and project executions.",
        },
        {
            name: "Farhan Abdirisak",
            role: "Board Member",
            bio: "Providing executive oversight and strategic guidance to advance Moon Engineering's goals.",
        },
    ];

    return (
        <section id="team" className="py-24 bg-background relative border-b border-black/5">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-card rounded-2xl overflow-hidden border border-black/5 group hover:border-accent/30 hover:shadow-xl transition-all duration-300"
                        >
                            {/* Illustration area */}
                            <div className="w-full aspect-[4/5] relative overflow-hidden">
                                <AvatarIllustration index={index} />
                                {/* Name overlay at bottom */}
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary-dark/90 via-primary-dark/50 to-transparent pt-16 px-6 pb-5 z-10">
                                    <h3 className="text-lg font-bold text-white leading-snug">{member.name}</h3>
                                    <span className="text-accent text-xs font-bold tracking-widest uppercase">{member.role}</span>
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
