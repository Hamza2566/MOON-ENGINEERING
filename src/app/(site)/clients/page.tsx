import Link from "next/link";
import { ArrowRight } from "lucide-react";

/* ─── Data ───────────────────────────────────────────────────── */
const clients = [
    {
        id: "tma",
        abbr: "TMA",
        name: "TradeMark Africa",
        type: "Regional Development Organization",
        logoSrc: "/trade mark africa.jpeg",
        project: "Togwajale Border Crossing Bridge – Construction Supervision Proposal",
        scope: [
            "Construction supervision",
            "Cross-border infrastructure support",
            "Compliance with international engineering & procurement standards",
        ],
        impact:
            "Positioned Moon Engineering to support a strategic regional trade corridor, contributing to economic integration and logistics efficiency.",
        tags: ["Construction Supervision", "Trade Infrastructure"],
    },
    {
        id: "srs-rtb",
        abbr: "SRS RTB",
        name: "Somali Regional State Road & Transport Bureau",
        type: "Government – Infrastructure & Transport Authority",
        logoSrc: "/road and transportation  .png",
        project: "Gabi'as & Ber'ano Bridge Projects",
        scope: [
            "Design review of bridge structures",
            "Full construction supervision",
            "Quality assurance & safety monitoring",
            "Stakeholder coordination and reporting",
        ],
        impact:
            "Improved regional connectivity and transportation safety through high-quality bridge infrastructure.",
        tags: ["Bridge Design", "Construction Supervision", "QA & Safety"],
    },
    {
        id: "ecdswc",
        abbr: "ECDSWC",
        name: "Ethiopian Construction Design & Supervision Works Corporation",
        type: "Government-Owned Engineering Consultancy",
        logoSrc: "/ethiopian construction design & supervision works corporation .jpeg",
        project: "Feasibility Study & Detailed Engineering Design",
        scope: [
            "Feasibility studies",
            "Detailed engineering design",
            "Contract administration and supervision",
        ],
        impact:
            "Delivered technically sound designs supporting efficient project execution and planning.",
        tags: ["Feasibility Studies", "Engineering Design", "Contract Administration"],
    },
    {
        id: "giz",
        abbr: "GIZ",
        name: "GIZ – German Development Cooperation",
        type: "International Development Agency",
        logoSrc: "/giz.jpg",
        project: "Design of Five Irrigation Schemes – Food Security Program",
        scope: [
            "Feasibility studies",
            "Irrigation engineering design",
        ],
        impact:
            "Enhanced agricultural productivity and food security in rural communities of the Somali Region.",
        tags: ["Irrigation Design", "Feasibility Studies", "Food Security"],
    },
    {
        id: "oxfam",
        abbr: "Oxfam",
        name: "Oxfam Ethiopia",
        type: "International NGO – Humanitarian & Development",
        logoSrc: "/oxfam.avif",
        project: "Shebelle River Basin Irrigation Design",
        scope: [
            "Irrigation system design (dams, pumps, canals)",
            "Feasibility studies",
        ],
        impact:
            "Supported sustainable water resource management and agricultural development.",
        tags: ["Irrigation", "Water Resources", "Feasibility Studies"],
    },
    {
        id: "jica",
        abbr: "JICA",
        name: "Japan International Cooperation Agency",
        type: "International Development Agency",
        logoSrc: "/japan-international-cooperation-system-118416.jpg",
        project: "Legedoa Village Water Distribution System",
        scope: [
            "Water system design (reservoirs, pipelines, pumps)",
            "Construction supervision",
            "Contract administration",
        ],
        impact:
            "Improved access to clean water for rural communities.",
        tags: ["Water Supply", "Construction Supervision", "Contract Administration"],
    },
    {
        id: "daca",
        abbr: "DACA",
        name: "Drug Administration and Control Authority of Ethiopia",
        type: "Government Regulatory Authority",
        logoSrc: "/Drug administration and control authority of ethiopia.jpeg",
        project: "G+4 Laboratory, Office & Storage Building – Bahirdar",
        scope: [
            "Structural design",
            "Construction supervision",
            "Contract management",
        ],
        impact:
            "Delivered infrastructure supporting health sector capacity and regulatory operations.",
        tags: ["Structural Design", "Construction Supervision", "Contract Management"],
    },
    {
        id: "jijiga-slaughter",
        abbr: "JES",
        name: "Jijiga Export Slaughterhouse PLC",
        type: "Private Sector – Industrial / Agro-Processing",
        logoSrc: "/jigjiga export slaughterhouse.jpeg",
        project: "25 km Factory Access Road",
        scope: [
            "Road design and alignment",
            "Construction supervision",
            "Quality assurance",
        ],
        impact:
            "Improved industrial logistics and export efficiency.",
        tags: ["Road Design", "Construction Supervision", "QA"],
    },
    {
        id: "save-children",
        abbr: "STC",
        name: "Save the Children – Ethiopia",
        type: "International NGO",
        logoSrc: "/images.png",
        project: "Road & Culvert Infrastructure for Refugee Camps (Dollow Ado & Bokolmayo)",
        scope: [
            "Road and culvert design",
            "Construction supervision",
        ],
        impact:
            "Enhanced humanitarian access and service delivery in refugee camps.",
        tags: ["Road & Culvert Design", "Humanitarian Infrastructure"],
    },
    {
        id: "oromia",
        abbr: "ORG",
        name: "Oromia Regional Government – Dugeda Dawa Woreda Office",
        type: "Regional Government",
        logoSrc: "/oromia regional.jpeg",
        project: "HIDHI BIROO – DUGEDA DAWA 194 km Road",
        scope: [
            "Construction supervision",
            "Quality control and reporting",
        ],
        impact:
            "Strengthened regional transportation networks and economic mobility.",
        tags: ["Road Supervision", "Quality Control"],
    },
    {
        id: "kaf",
        abbr: "KAF",
        name: "KAF Engineering Consultancy",
        type: "Engineering Consultancy – Partner",
        logoSrc: "/KAF Engineering consultancy.jpeg",
        project: "Asbuli – Badiwayn Road Supervision (93 km)",
        scope: [
            "Technical supervision",
            "Quality assurance",
            "Reporting and coordination",
        ],
        impact:
            "Delivered compliant and high-quality road infrastructure.",
        tags: ["Road Supervision", "QA", "Coordination"],
    },
];

/* ─── Type badge colours ─────────────────────────────────────── */
const typeColor: Record<string, string> = {
    "International Development Agency": "bg-blue-50 text-blue-700 border-blue-200",
    "International NGO – Humanitarian & Development": "bg-green-50 text-green-700 border-green-200",
    "International NGO": "bg-green-50 text-green-700 border-green-200",
    "Regional Development Organization": "bg-purple-50 text-purple-700 border-purple-200",
    "Government – Infrastructure & Transport Authority": "bg-orange-50 text-orange-700 border-orange-200",
    "Government-Owned Engineering Consultancy": "bg-orange-50 text-orange-700 border-orange-200",
    "Government Regulatory Authority": "bg-orange-50 text-orange-700 border-orange-200",
    "Regional Government": "bg-orange-50 text-orange-700 border-orange-200",
    "Private Sector – Industrial / Agro-Processing": "bg-gray-50 text-gray-700 border-gray-200",
    "Engineering Consultancy – Partner": "bg-indigo-50 text-indigo-700 border-indigo-200",
};

/* ─── Page ───────────────────────────────────────────────────── */
export default function ClientsPage() {
    return (
        <>
            {/* ── Hero ─────────────────────────────────────────────── */}
            <section className="relative bg-primary-dark pt-40 pb-28 overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-10 pointer-events-none"
                    style={{ backgroundImage: "url('/photo_8_2026-04-20_08-23-08.jpg')" }}
                />
                <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-primary rounded-full blur-[140px] -translate-x-1/2 -translate-y-1/2 opacity-40 pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent rounded-full blur-[100px] translate-x-1/3 translate-y-1/3 opacity-20 pointer-events-none" />

                <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
                    <span className="text-accent font-extrabold uppercase tracking-widest text-sm mb-6 block">
                        Trusted By
                    </span>
                    <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-8 leading-tight tracking-tight">
                        Clients &amp; Partners
                    </h1>
                    <p className="text-white/70 text-xl max-w-3xl mx-auto leading-relaxed">
                        From international development agencies to regional government bodies and NGOs,
                        Moon Engineering Consultancy is trusted by leading organisations across the Horn
                        of Africa to deliver infrastructure that lasts.
                    </p>
                    {/* Quick stats */}
                    <div className="flex flex-wrap justify-center gap-10 mt-14">
                        {[
                            { value: "11+", label: "Clients & Partners" },
                            { value: "10+", label: "Years of Experience" },
                            { value: "50+", label: "Projects Delivered" },
                        ].map((stat) => (
                            <div key={stat.label} className="text-center">
                                <p className="text-4xl font-extrabold text-white leading-none">{stat.value}</p>
                                <p className="text-white/60 text-sm font-semibold uppercase tracking-wider mt-1">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Clients Grid ─────────────────────────────────────── */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <span className="text-accent font-extrabold uppercase tracking-widest text-sm mb-4 block">
                            Who We Work With
                        </span>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 tracking-tight">
                            Organizations We Serve
                        </h2>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                            A portfolio of partnerships built on trust, technical excellence, and
                            measurable impact across East Africa.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {clients.map((client) => {
                            const badgeClass =
                                typeColor[client.type] ?? "bg-gray-50 text-gray-700 border-gray-200";

                            return (
                                <div
                                    key={client.id}
                                    className="bg-card border border-black/5 rounded-2xl p-8 flex flex-col gap-5 hover:border-accent/30 hover:shadow-xl transition-all duration-300 group"
                                >
                                    {/* Top row: logo + name */}
                                    <div className="flex items-center gap-5">
                                        {/* Logo area */}
                                        <div className="shrink-0 w-16 h-16 rounded-xl border-2 border-dashed border-muted-foreground/20 bg-muted flex items-center justify-center overflow-hidden">
                                            {client.logoSrc ? (
                                                // eslint-disable-next-line @next/next/no-img-element
                                                <img
                                                    src={client.logoSrc}
                                                    alt={client.name}
                                                    className="w-full h-full object-contain p-1"
                                                />
                                            ) : (
                                                <span className="text-xs font-extrabold text-muted-foreground/40 text-center leading-tight px-1">
                                                    {client.abbr}
                                                </span>
                                            )}
                                        </div>

                                        <div className="flex-1 min-w-0">
                                            <span
                                                className={`inline-block text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border mb-1 ${badgeClass}`}
                                            >
                                                {client.type}
                                            </span>
                                            <h3 className="text-lg font-extrabold text-foreground group-hover:text-primary transition-colors leading-snug">
                                                {client.name}
                                            </h3>
                                        </div>
                                    </div>

                                    {/* Project */}
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-widest text-accent mb-1">
                                            Project
                                        </p>
                                        <p className="text-foreground font-semibold text-sm leading-snug">
                                            {client.project}
                                        </p>
                                    </div>

                                    {/* Scope */}
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">
                                            Scope of Work
                                        </p>
                                        <ul className="flex flex-col gap-1.5">
                                            {client.scope.map((item, i) => (
                                                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                    <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-accent" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Impact */}
                                    <div className="bg-primary/5 border border-primary/10 rounded-xl p-4">
                                        <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1">
                                            Impact
                                        </p>
                                        <p className="text-sm text-foreground/80 leading-relaxed">{client.impact}</p>
                                    </div>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2">
                                        {client.tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className="text-xs font-semibold bg-primary/5 text-primary px-3 py-1 rounded-full border border-primary/10"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── CTA ──────────────────────────────────────────────── */}
            <section className="py-24 bg-primary-dark relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-primary rounded-full blur-[140px] -translate-y-1/2 translate-x-1/3 opacity-50 pointer-events-none" />
                <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
                    <span className="text-accent font-extrabold uppercase tracking-widest text-sm mb-6 block">
                        Work With Us
                    </span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
                        Ready to Partner with MOON?
                    </h2>
                    <p className="text-white/70 text-xl max-w-2xl mx-auto mb-10">
                        Let&apos;s build sustainable infrastructure together. Reach out to discuss your
                        next project.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-3 bg-accent text-primary-dark font-bold px-10 py-4 rounded-lg hover:bg-accent/90 transition-all shadow-lg hover:shadow-accent/30 group"
                    >
                        Contact Us
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </section>
        </>
    );
}
