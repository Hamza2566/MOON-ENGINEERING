"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Services() {
    const detailedServices = [
        {
            id: "01",
            title: "Engineering Services",
            description: "Comprehensive multi-disciplinary engineering design and execution across all major structural and civil sectors.",
            deliverables: [
                "Civil & Structural Engineering",
                "Mechanical & Electrical Engineering",
                "Geotechnical Engineering",
                "Feasibility Studies & Conceptual Design",
                "Water & Wastewater Engineering"
            ],
            image: "/photo_1_2026-04-20_08-23-08.jpg"
        },
        {
            id: "02",
            title: "Architectural Services",
            description: "State-of-the-art architectural facility design from initial planning through to completion with a sustainable agenda.",
            deliverables: [
                "Master Planning & Urban Design",
                "Residential & Commercial Design",
                "Mixed-use & Hospitality Projects",
                "Educational & Healthcare Facilities",
                "Landscaping & Interior Design"
            ],
            image: "/photo_2_2026-04-20_08-23-08.jpg"
        },
        {
            id: "03",
            title: "Infrastructure Management",
            description: "World-class program advisory and management capabilities ensuring projects are delivered systematically and resourcefully.",
            deliverables: [
                "Program & Risk Management",
                "Systems Engineering & Integration",
                "Project Planning & Control",
                "Resource Allocation",
                "Financial Control"
            ],
            image: "/photo_3_2026-04-20_08-23-08.jpg"
        },
        {
            id: "04",
            title: "Environmental Services",
            description: "Rigorous environmental studies ensuring compliance and mitigating risks associated with ecological development.",
            deliverables: [
                "Environmental impact assessment",
                "Risk evaluation and mitigation",
                "Sustainable development consulting",
                "Environmental compliance advisory",
                "Ecosystem restoration planning"
            ],
            image: "/photo_4_2026-04-20_08-23-08.jpg"
        },
        {
            id: "05",
            title: "Road & Bridge Engineering",
            description: "Specialized engineering approach dedicated to complex highway infrastructure, site modeling, and bridge dynamics.",
            deliverables: [
                "Road design (minor & major roads)",
                "Highway alignment & site modeling",
                "Bridge design & supervision",
                "BOQ preparation & tendering",
                "Construction supervision"
            ],
            image: "/photo_5_2026-04-20_08-23-08.jpg"
        },
        {
            id: "06",
            title: "Land Surveying",
            description: "Precision topographic surveying, modeling, and spatial data analytics laying the foundation for correct engineering.",
            deliverables: [
                "GPS & Boundary Surveys",
                "Topographic & Site Planning Surveys",
                "Subdivision Planning",
                "Photogrammetry",
                "Geospatial Database Generation"
            ],
            image: "/photo_6_2026-04-20_08-23-08.jpg"
        },
        {
            id: "07",
            title: "Project & Consultancy Services",
            description: "End-to-end administration and consulting designed to bring certainty to scheduling, cost, and contractual compliance.",
            deliverables: [
                "Project Management & Construction Supervision",
                "Contract Administration & Cost Consulting",
                "Procurement Documentation",
                "Urban & Regional Planning",
                "IT Systems for Engineering Projects"
            ],
            image: "/photo_7_2026-04-20_08-23-08.jpg"
        }
    ];

    return (
        <section id="services" className="py-24 bg-background relative border-b border-black/5 overflow-hidden">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col gap-24">
                    {detailedServices.map((service, index) => {
                        const isEven = index % 2 === 0;

                        return (
                            <div key={service.id} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20`}>
                                {/* Image Container */}
                                <motion.div
                                    initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.7 }}
                                    className="w-full lg:w-1/2 aspect-[4/3] rounded-[2rem] overflow-hidden relative shadow-2xl group border border-black/5"
                                >
                                    <div className="absolute top-4 left-4 z-20 bg-accent text-primary-dark w-12 h-12 flex items-center justify-center rounded-xl font-bold text-lg shadow-lg">
                                        {service.id}
                                    </div>
                                    <div className="absolute inset-0 bg-primary-dark/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
                                    <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                </motion.div>

                                {/* Content Container */}
                                <motion.div
                                    initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.7 }}
                                    className="w-full lg:w-1/2 flex flex-col"
                                >
                                    <span className="text-accent font-extrabold uppercase tracking-[0.2em] text-sm mb-3">Service {service.id}</span>
                                    <h3 className="text-3xl lg:text-4xl font-extrabold text-primary mb-6 leading-tight tracking-tight">
                                        {service.title}
                                    </h3>
                                    <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                                        {service.description}
                                    </p>

                                    <div className="bg-muted/50 rounded-2xl p-8 border border-black/5">
                                        <h4 className="text-primary font-bold text-sm tracking-widest uppercase mb-6 flex items-center gap-3">
                                            <span className="w-8 h-px bg-accent"></span>
                                            Key Deliverables
                                        </h4>
                                        <ul className="flex flex-col gap-4">
                                            {service.deliverables.map((item, i) => (
                                                <li key={i} className="flex items-start gap-4 text-foreground/80 font-medium">
                                                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                                    <span className="leading-snug">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
