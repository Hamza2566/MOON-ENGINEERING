import { ArrowRight, CheckCircle2, Droplets, HeartHandshake, ShieldCheck, Target } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
    title: "About Us | Moon Engineering",
    description: "Learn more about our vision, mission, and core values.",
};

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Page Hero Banner */}
            <section className="bg-primary-dark pt-32 pb-20 relative overflow-hidden">
                {/* Decorative textures */}
                <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary rounded-full blur-[100px] z-0 pointer-events-none" />

                <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
                    <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg tracking-tight">About MOON</h1>
                    <p className="text-white/80 text-xl max-w-2xl mx-auto leading-relaxed">
                        A multidisciplinary engineering and geology consultancy delivering sustainable solutions for local climates, infrastructure, and the environment across the Horn of Africa.
                    </p>
                </div>
            </section>

            {/* Our Story Split Section */}
            <section className="py-24">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        {/* Text Side */}
                        <div className="w-full lg:w-1/2">
                            <span className="text-accent font-extrabold uppercase tracking-widest text-sm mb-4 block">Our Story</span>
                            <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-8 leading-tight tracking-tight">
                                Rooted in Jigjiga.<br />Delivering Across the Horn.
                            </h2>
                            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                                Moon is an award-winning, multidisciplinary practice based in the capital city of Jigjiga, Somali Region, Ethiopia. With an intent to elevate world-class engineering consultancy tailored around the unique challenges of the Horn of Africa's arid and semi-arid environments.
                            </p>
                            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                                Over more than a decade, our team of resident engineers, geologists, hydrologists, and GIS specialists has partnered with international organizations including FAO, UNDP, the World Bank, and the Ethiopian government to design and supervise transformative infrastructure projects across water resources, irrigation, and renewable energy sectors.
                            </p>

                            <div className="flex items-center gap-4">
                                <Link href="/projects" className="bg-primary hover:bg-primary-dark text-white font-bold py-3.5 px-8 rounded-md flex items-center justify-center gap-2 transition-all shadow-md group">
                                    Our Projects <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link href="/#contact" className="bg-accent hover:bg-accent-hover text-white font-bold py-3.5 px-8 rounded-md flex items-center justify-center gap-2 transition-all shadow-md">
                                    Work With Us
                                </Link>
                            </div>
                        </div>

                        {/* Image Side */}
                        <div className="w-full lg:w-1/2 relative">
                            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative z-10 border border-black/5">
                                <img src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=1200&auto=format&fit=crop" alt="Engineers surveying terrain" className="w-full h-full object-cover" />
                            </div>
                            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-accent/10 rounded-full blur-3xl z-0 pointer-events-none" />
                            {/* Floating Stats Badge */}
                            <div className="absolute -bottom-6 left-6 lg:-left-6 bg-primary-dark border border-white/10 p-5 rounded-2xl shadow-xl flex flex-col gap-1 z-20 w-44">
                                <span className="font-extrabold text-3xl text-white block leading-none">5,000+ HA</span>
                                <span className="text-xs text-white/80 font-semibold uppercase tracking-wider">Projects Delivered</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values 2x2 Grid */}
            <section className="py-24 bg-muted border-y border-black/5">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <span className="text-accent font-extrabold uppercase tracking-widest text-sm mb-4 block">What Drives Us</span>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight">Our Core Values</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="bg-card rounded-2xl p-10 border border-black/5 shadow-sm hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                                <Target className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-4 leading-snug">Excellence & Precision</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                We apply the highest engineering standards and rigorous design in every project, ensuring structurally sound and optimized outcomes.
                            </p>
                        </div>
                        <div className="bg-card rounded-2xl p-10 border border-black/5 shadow-sm hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                                <Droplets className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-4 leading-snug">Sustainable Focus</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Our solutions are aligned with climate action, embedding water and soil conservation into the structural capability of local communities.
                            </p>
                        </div>
                        <div className="bg-card rounded-2xl p-10 border border-black/5 shadow-sm hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                                <ShieldCheck className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-4 leading-snug">Integrity & Transparency</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                We operate with the highest standards of professional ethics, building long-term trust with clients, peers, and local governments.
                            </p>
                        </div>
                        <div className="bg-card rounded-2xl p-10 border border-black/5 shadow-sm hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                                <HeartHandshake className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-4 leading-snug">Local Expertise</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Deeply rooted in the Horn of Africa, we leverage our profound localized knowledge across physical geography, geology, climate, and distinct culture context.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Split: Expertise & Milestones */}
            <section className="py-24">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 justify-center">

                        {/* Expertise Side */}
                        <div className="w-full lg:w-1/2 max-w-lg mx-auto lg:mx-0">
                            <span className="text-accent font-extrabold uppercase tracking-widest text-sm mb-4 block">Areas of Focus</span>
                            <h2 className="text-4xl font-extrabold text-primary mb-8 tracking-tight">Areas of Technical Expertise</h2>
                            <p className="text-muted-foreground mb-8 leading-relaxed">
                                MOON provides a comprehensive suite of front-end engineering and consultancy services, integrating multiple disciplines to deliver holistic solutions.
                            </p>
                            <ul className="flex flex-col gap-4">
                                {[
                                    "Irrigation Engineering & Hydraulic Structures",
                                    "Hydrology & Flood Analysis",
                                    "Groundwater Assessment & Borehole Design",
                                    "Geotechnical & Geological Investigations",
                                    "Solar-Pump System Engineering",
                                    "GIS, Remote Sensing & Spatial Analysis",
                                    "Environmental & Social Impact Assessment",
                                    "Construction Supervision & Quality Assurance",
                                    "Feasibility & Detailed Engineering Studies",
                                    "Land Use Planning & Resource Mapping"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-4">
                                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                                            <CheckCircle2 className="w-4 h-4 text-primary" />
                                        </div>
                                        <span className="text-foreground/80 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Milestones Side (Vertical Timeline) */}
                        <div className="w-full lg:w-1/2 max-w-lg mx-auto lg:mx-0">
                            <span className="text-accent font-extrabold uppercase tracking-widest text-sm mb-4 block">Our History</span>
                            <h2 className="text-4xl font-extrabold text-primary mb-10 tracking-tight">Key Milestones</h2>

                            <div className="relative border-l-2 border-accent/20 ml-6 lg:ml-8 flex flex-col gap-10">
                                {/* Milestone 1 */}
                                <div className="relative pl-10">
                                    <div className="absolute -left-[21px] top-0 w-10 h-10 bg-accent rounded-full border-4 border-background flex items-center justify-center shadow-md">
                                        <span className="text-[10px] font-bold text-white">2015</span>
                                    </div>
                                    <h4 className="text-lg font-bold text-primary mb-2">Firm Establishment</h4>
                                    <p className="text-sm text-muted-foreground">Moon Engineering Consultancy founded in Jigjiga, Somali Region, Ethiopia.</p>
                                </div>
                                {/* Milestone 2 */}
                                <div className="relative pl-10">
                                    <div className="absolute -left-[21px] top-0 w-10 h-10 bg-primary rounded-full border-4 border-background flex items-center justify-center shadow-md">
                                        <span className="text-[10px] font-bold text-white">2017</span>
                                    </div>
                                    <h4 className="text-lg font-bold text-primary mb-2">First International Partnership</h4>
                                    <p className="text-sm text-muted-foreground">Successfully partnered with FAO to deliver critical feasibility studies on the Fafan River Basin.</p>
                                </div>
                                {/* Milestone 3 */}
                                <div className="relative pl-10">
                                    <div className="absolute -left-[21px] top-0 w-10 h-10 bg-primary rounded-full border-4 border-background flex items-center justify-center shadow-md">
                                        <span className="text-[10px] font-bold text-white">2019</span>
                                    </div>
                                    <h4 className="text-lg font-bold text-primary mb-2">Renewable Infrastructure Debut</h4>
                                    <p className="text-sm text-muted-foreground">Led the design of a massive 2MW photovoltaic solar-pump array supplying agricultural zones.</p>
                                </div>
                                {/* Milestone 4 */}
                                <div className="relative pl-10">
                                    <div className="absolute -left-[21px] top-0 w-10 h-10 bg-primary rounded-full border-4 border-background flex items-center justify-center shadow-md">
                                        <span className="text-[10px] font-bold text-white">2021</span>
                                    </div>
                                    <h4 className="text-lg font-bold text-primary mb-2">Expanding Scope</h4>
                                    <p className="text-sm text-muted-foreground">Launched dedicated GIS and remote sensing divisions targeting unmapped territories.</p>
                                </div>
                                {/* Milestone 5 */}
                                <div className="relative pl-10">
                                    <div className="absolute -left-[21px] top-0 w-10 h-10 bg-primary rounded-full border-4 border-background flex items-center justify-center shadow-md">
                                        <span className="text-[10px] font-bold text-white">2023</span>
                                    </div>
                                    <h4 className="text-lg font-bold text-primary mb-2">Award Winning Supervision</h4>
                                    <p className="text-sm text-muted-foreground">Recognized publicly for supreme structural integrity standards on major regional dams.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Dark Blue CTA Blocks */}
            <section className="bg-primary-dark pt-24 pb-20 border-b border-black/20">
                <div className="container mx-auto px-4 md:px-8 text-center max-w-3xl">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">Ready to Partner with MOON?</h2>
                    <p className="text-white/80 text-xl leading-relaxed mb-10">
                        Whether you need a feasibility study, detailed design, or full-scale construction supervision in extreme climates, we are your trusted local experts.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/#contact" className="bg-accent hover:bg-accent-hover text-white font-bold py-4 px-10 rounded-md w-full sm:w-auto transition-all shadow-lg text-lg">
                            Contact Our Team &gt;
                        </Link>
                        <Link href="/#services" className="bg-transparent border-2 border-white hover:bg-white hover:text-primary-dark text-white font-bold py-4 px-10 rounded-md w-full sm:w-auto transition-all text-lg">
                            Explore Our Services
                        </Link>
                    </div>
                </div>
            </section>

            {/* Final Gradient Banner */}
            <section className="bg-gradient-to-r from-primary-dark via-primary to-accent py-12 relative overflow-hidden">
                <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="text-white text-center md:text-left">
                        <h3 className="text-2xl font-bold mb-2">Ready to Start Your Next Project?</h3>
                        <p className="text-white/80 font-medium">The multidisciplinary team is ready to deliver world-class sustainable solutions.</p>
                    </div>
                    <Link href="/#contact" className="bg-transparent border border-white hover:bg-white hover:text-accent font-bold py-3 px-8 text-white rounded transition-colors shrink-0">
                        Book a Call
                    </Link>
                </div>
            </section>
        </div>
    );
}
