"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Services() {
    const detailedServices = [
        {
            id: "01",
            title: "Irrigation System Design & Engineering",
            description: "Comprehensive irrigation network development ensuring optimal water distribution and sustainable usage.",
            deliverables: [
                "Location mapping and feasibility studies",
                "Surface irrigation system design (canal, flumes, pipelines, etc)",
                "Hydraulic structure design (weirs, diversion dams, reservoirs)",
                "Irrigation demand based crop planning",
                "Pumping station design and specifications"
            ],
            image: "https://images.unsplash.com/photo-1482053450283-3e0b78b09a70?q=80&w=1000&auto=format&fit=crop"
        },
        {
            id: "02",
            title: "Hydrology & Water Resources",
            description: "Advanced water resource assessments and management frameworks for challenging ecological environments.",
            deliverables: [
                "Hydrological data collection and analysis",
                "Flood frequency analysis and floodplain delineation",
                "Drainage channel and structure design",
                "Water balance modelling",
                "Groundwater potential assessments"
            ],
            image: "https://images.unsplash.com/photo-1485083269755-a7b559a4fe5e?q=80&w=1000&auto=format&fit=crop"
        },
        {
            id: "03",
            title: "Geotechnical Studies & Ecological Investigations",
            description: "Site investigation, laboratory testing, and foundation engineering ensuring structural safety and integrity.",
            deliverables: [
                "Core geological and geotechnical surveys",
                "Sample collection, and borehole logging",
                "Laboratory soil and rock testing",
                "Foundation construction recommendations",
                "Slope stability analysis"
            ],
            image: "https://images.unsplash.com/photo-1493476523860-a6de6ce1b0c3?q=80&w=1000&auto=format&fit=crop"
        },
        {
            id: "04",
            title: "Solar-Pump Systems",
            description: "Off-grid solar powered water pumping arrays for agricultural and community supply networks.",
            deliverables: [
                "Solar radiation and energy demand assessment",
                "Pump sizing and hydraulic design",
                "Photovoltaic panel system arrangement",
                "Inverter selection and control system specification",
                "Performance and installation supervision"
            ],
            image: "https://images.unsplash.com/photo-1498631906572-66c58d46ecf7?q=80&w=1000&auto=format&fit=crop"
        },
        {
            id: "05",
            title: "GIS, Remote Sensing & Surveying",
            description: "Topographic surveying, mapping, modeling, and spatial data analytics for precision engineering.",
            deliverables: [
                "Topographic surveys (total station, RTK-DGPS, drone)",
                "Digital Elevation Model (DEM) production",
                "Land use / land cover mapping",
                "Satellite image analysis and classification",
                "Cadastral and boundary surveying"
            ],
            image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=1000&auto=format&fit=crop"
        },
        {
            id: "06",
            title: "Environmental Impact Assessment",
            description: "Rigorous ESIA and ESMP in compliance with local regulations and international standards.",
            deliverables: [
                "Environmental and social baseline surveys",
                "Identification and screening of potential impacts",
                "Environmental and Social Management Plan (ESMP)",
                "Monitoring and performance indicator frameworks",
                "Rehabilitation, green cover repair protocols"
            ],
            image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1000&auto=format&fit=crop"
        },
        {
            id: "07",
            title: "Construction Supervision",
            description: "On-site project management, ensuring contract compliance, safety, quality, and timely delivery.",
            deliverables: [
                "Resident Engineer and site inspector deployment",
                "Contractor activity monitoring and oversight",
                "Pre-construction mobilization checkups",
                "Quality assurance & materials testing compliance",
                "Milestone approvals and phase clearing"
            ],
            image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop"
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
