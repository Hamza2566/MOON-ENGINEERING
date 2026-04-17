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
                        A multi-disciplinary engineering company operating in the Somali Regional State of Ethiopia, specializing in construction, engineering consultancy, and infrastructure development.
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
                                Established in 2019 E.C in Jigjiga, Somali Region, Ethiopia, Moon Engineering Consultancy is a multi-disciplinary company offering comprehensive construction, engineering, and infrastructure development solutions. We specialize in designing, building, and managing civil engineering projects including buildings, roads, bridges, and water systems.
                            </p>
                            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                                Our firm caters to both governmental and non-governmental projects, known for consistently delivering high-quality work with efficiency, innovation, and professionalism. Using modern design technologies and customized strategies, we prioritize delivering tailored solutions that exceed our clients' expectations.
                            </p>

                            <div className="flex items-center gap-4">
                                <Link href="/projects" className="bg-primary hover:bg-primary-dark text-white font-bold py-3.5 px-8 rounded-md flex items-center justify-center gap-2 transition-all shadow-md group">
                                    Our Projects <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link href="/contact" className="bg-accent hover:bg-accent-hover text-white font-bold py-3.5 px-8 rounded-md flex items-center justify-center gap-2 transition-all shadow-md">
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

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <div className="bg-card rounded-2xl p-10 border border-black/5 shadow-sm hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-bold text-primary mb-4 leading-snug">Leadership</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                We lead the marketplace through Vision, Technology and Service. In everything that we do, we strive for excellence and accept no less than the best.
                            </p>
                        </div>
                        <div className="bg-card rounded-2xl p-10 border border-black/5 shadow-sm hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-bold text-primary mb-4 leading-snug">Teamwork</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                We are committed to working together across divisions. By sharing ideas, technologies, and talents, we achieve and sustain profitable growth.
                            </p>
                        </div>
                        <div className="bg-card rounded-2xl p-10 border border-black/5 shadow-sm hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-bold text-primary mb-4 leading-snug">Client Focus</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                We never lose sight of what really matters: the satisfaction and success of our clients. Our strategy and services are developed with their goals in mind.
                            </p>
                        </div>
                        <div className="bg-card rounded-2xl p-10 border border-black/5 shadow-sm hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-bold text-primary mb-4 leading-snug">Responsibility</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                We continuously drive projects forward through rigorous follow-up and review. We work with urgency and always deliver on our promises.
                            </p>
                        </div>
                        <div className="bg-card rounded-2xl p-10 border border-black/5 shadow-sm hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-bold text-primary mb-4 leading-snug">Innovation</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Our industry thrives on innovation; creative problem solving is fundamental to our success. We continuously attempt to deliver superior value.
                            </p>
                        </div>
                        <div className="bg-card rounded-2xl p-10 border border-black/5 shadow-sm hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-bold text-primary mb-4 leading-snug">Integrity</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                We treat everyone with dignity and respect. We are truthful and candid, keep our promises, and make diversity a competitive strength across the board.
                            </p>
                        </div>
                        <div className="bg-card rounded-2xl p-10 border border-black/5 shadow-sm hover:shadow-lg transition-shadow lg:col-start-2">
                            <h3 className="text-xl font-bold text-primary mb-4 leading-snug">Passion</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                We strive to achieve the best in the face of intense competition through sheer determination, focus, and hard work in every aspect of our project delivery.
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
                            <span className="text-accent font-extrabold uppercase tracking-widest text-sm mb-4 block">Our Strengths</span>
                            <h2 className="text-4xl font-extrabold text-primary mb-8 tracking-tight">Why Choose Moon Consultancy</h2>
                            <p className="text-muted-foreground mb-8 leading-relaxed">
                                We combine technical expertise, rigorous project management, and sustainable engineering approaches to ensure every project is completed on time, within budget, and to the highest standards.
                            </p>
                            <ul className="flex flex-col gap-4">
                                {[
                                    "Multi-disciplinary engineering capability",
                                    "Highly experienced technical team",
                                    "Strong & rigorous project management",
                                    "Extensive government & international project experience",
                                    "Unwavering focus on sustainability",
                                    "Utilization of modern engineering technology",
                                    "Proven ability to handle large-scale infrastructural projects",
                                    "Consistent on-time and cost-effective delivery"
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
                                        <span className="text-[10px] font-bold text-white">2019</span>
                                    </div>
                                    <h4 className="text-lg font-bold text-primary mb-2">Firm Establishment</h4>
                                    <p className="text-sm text-muted-foreground">Moon Engineering Consultancy was officially founded in Jigjiga, Somali Region, Ethiopia (2019 E.C).</p>
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

            {/* Project Experience Section */}
            <section className="py-24 bg-muted/50 border-t border-black/5">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <span className="text-accent font-extrabold uppercase tracking-widest text-sm mb-4 block">Proven Track Record</span>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight">Featured Project Experience</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {/* Bridge Projects */}
                        <div className="bg-card rounded-2xl p-8 border border-black/5 shadow-sm hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-bold text-primary mb-3">Bridge Projects</h3>
                            <p className="text-muted-foreground font-semibold mb-4 text-sm">Gabi'as & Ber'ano Bridge</p>
                            <ul className="text-muted-foreground text-sm space-y-2">
                                <li><strong className="text-foreground">Value:</strong> ~596,491 USD</li>
                                <li><strong className="text-foreground">Scope:</strong> Design review, Construction supervision, Quality assurance, Safety monitoring</li>
                            </ul>
                        </div>

                        {/* Building Project */}
                        <div className="bg-card rounded-2xl p-8 border border-black/5 shadow-sm hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-bold text-primary mb-3">Building Projects</h3>
                            <p className="text-muted-foreground font-semibold mb-4 text-sm">G+4 Laboratory, Office & Storage Building (Bahirdar)</p>
                            <ul className="text-muted-foreground text-sm space-y-2">
                                <li><strong className="text-foreground">Scope:</strong> Design, Supervision, Contract management</li>
                            </ul>
                        </div>

                        {/* Irrigation Projects */}
                        <div className="bg-card rounded-2xl p-8 border border-black/5 shadow-sm hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-bold text-primary mb-3">Irrigation Projects</h3>
                            <p className="text-muted-foreground font-semibold mb-4 text-sm">5 Irrigation Schemes & Shebelle River Basin</p>
                            <ul className="text-muted-foreground text-sm space-y-2">
                                <li><strong className="text-foreground">Scope:</strong> Feasibility study, Engineering design, Infrastructure planning</li>
                            </ul>
                        </div>

                        {/* Water Supply */}
                        <div className="bg-card rounded-2xl p-8 border border-black/5 shadow-sm hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-bold text-primary mb-3">Water Supply</h3>
                            <p className="text-muted-foreground font-semibold mb-4 text-sm">Legedoa Village Water Distribution</p>
                            <ul className="text-muted-foreground text-sm space-y-2">
                                <li><strong className="text-foreground">Scope:</strong> Pipeline supervision, Tank design, Pump installation</li>
                            </ul>
                        </div>

                        {/* Road Projects */}
                        <div className="bg-card rounded-2xl p-8 border border-black/5 shadow-sm hover:shadow-lg transition-shadow lg:col-span-2">
                            <h3 className="text-xl font-bold text-primary mb-3">Road Projects</h3>
                            <p className="text-muted-foreground font-semibold mb-4 text-sm">Multiple Regional Roads</p>
                            <ul className="text-muted-foreground text-sm space-y-2">
                                <li><strong className="text-foreground">Locations:</strong> 25KM Factory Road (Jijiga), 194KM Gravel Road (Oromia), 93KM Asbuli–Badiwayn Road, Refugee Camp Roads (Dollow Ado)</li>
                                <li><strong className="text-foreground">Scope:</strong> Road design, Construction supervision, Quality control, Reporting</li>
                            </ul>
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
                        <Link href="/contact" className="bg-accent hover:bg-accent-hover text-white font-bold py-4 px-10 rounded-md w-full sm:w-auto transition-all shadow-lg text-lg">
                            Contact Our Team &gt;
                        </Link>
                        <Link href="/services" className="bg-transparent border-2 border-white hover:bg-white hover:text-primary-dark text-white font-bold py-4 px-10 rounded-md w-full sm:w-auto transition-all text-lg">
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
                    <Link href="/contact" className="bg-transparent border border-white hover:bg-white hover:text-accent font-bold py-3 px-8 text-white rounded transition-colors shrink-0">
                        Book a Call
                    </Link>
                </div>
            </section>
        </div>
    );
}
