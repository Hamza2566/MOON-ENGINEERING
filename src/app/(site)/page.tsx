import Hero from "@/components/Hero";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ChevronRight, Droplets, Map, Building2, HardHat, Mountain, Recycle, MapPin, Search } from "lucide-react";
import { fetchProjects } from "@/sanity/lib/data";

export default async function Home() {
  const allProjects = await fetchProjects();
  const projectsPreview = allProjects?.slice(0, 3) || [];

  const previewServices = [
    { title: "Irrigation & Water Supply", icon: <Droplets className="w-6 h-6" />, desc: "Topographic mapping, GIS-based analysis, and comprehensive design of irrigation schemes prioritizing optimal water distribution." },
    { title: "Hydrology & Water Resources", icon: <Map className="w-6 h-6" />, desc: "Catchment analysis, flood routing, groundwater yield evaluation, and water balance modelling." },
    { title: "Geotechnical Engineering", icon: <Mountain className="w-6 h-6" />, desc: "In-depth subsurface investigations, soil mechanics testing, and foundation engineering." },
    { title: "Construction Management", icon: <HardHat className="w-6 h-6" />, desc: "End-to-end site supervision, timeline tracking, and quality assurance control to align with global standards." },
    { title: "Civil & Structural", icon: <Building2 className="w-6 h-6" />, desc: "Integrity analysis, resilient material specification, and structural load modeling for long-lasting infrastructure." },
    { title: "Environmental Impact", icon: <Recycle className="w-6 h-6" />, desc: "Thorough Environmental and Social Impact Assessments ensuring regulatory compliance and safeguarding ecosystems." },
    { title: "Topographical Surveying", icon: <MapPin className="w-6 h-6" />, desc: "High-precision mapping utilizing RTK-GPS and drone technology to generate detailed terrain models." },
    { title: "Feasibility Studies", icon: <Search className="w-6 h-6" />, desc: "Comprehensive cost-benefit analytics, technical viability reviews, and risk assessments for new projects." }
  ];

  return (
    <>
      <Hero />

      {/* About Split Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Image Side */}
            <div className="w-full lg:w-1/2 relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative z-10 border border-black/5">
                <img src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=1000&auto=format&fit=crop" alt="Engineering Team" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-accent/10 rounded-full blur-3xl z-0 pointer-events-none" />
              {/* Floating Badge */}
              <div className="absolute -bottom-6 right-6 lg:-right-6 bg-card border border-black/5 p-5 rounded-2xl shadow-xl flex items-center gap-4 z-20">
                <div className="bg-primary/10 text-primary p-3 rounded-xl">
                  <Building2 className="w-8 h-8" />
                </div>
                <div>
                  <span className="font-extrabold text-2xl text-foreground block leading-none">10+</span>
                  <span className="text-sm text-muted-foreground font-semibold uppercase tracking-wider">Years Experience</span>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
              <span className="text-accent font-extrabold uppercase tracking-widest text-sm mb-4 block">About Moon</span>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-primary leading-tight tracking-tight">
                Delivering Sustainable Infrastructure Solutions
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Established in Jigjiga, Somali Region, MOON is a leading multidisciplinary engineering and consultancy firm committed to transforming the Horn of Africa through sustainable, innovative, and resilient infrastructure.
              </p>
              <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
                Our dedicated team integrates modern technology with profound local insight to navigate and overcome complex engineering challenges.
              </p>

              <ul className="flex flex-col gap-5 mb-12">
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="text-accent w-6 h-6 shrink-0 mt-0.5" />
                  <span className="text-foreground/90 font-medium text-lg leading-snug">Multidisciplinary team of civil and structural engineers</span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="text-accent w-6 h-6 shrink-0 mt-0.5" />
                  <span className="text-foreground/90 font-medium text-lg leading-snug">Proven track record in harsh & demanding environments</span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="text-accent w-6 h-6 shrink-0 mt-0.5" />
                  <span className="text-foreground/90 font-medium text-lg leading-snug">Strict adherence to international construction standards</span>
                </li>
              </ul>

              <Link href="/about" className="bg-primary hover:bg-primary-dark text-white font-bold py-4 px-10 rounded-lg flex items-center justify-center gap-3 w-full sm:w-max transition-all shadow-lg hover:shadow-primary/30 group">
                Learn More About MOON <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Preview */}
      <section className="py-24 bg-muted border-y border-black/5">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-accent font-extrabold uppercase tracking-widest text-sm mb-4 block">What We Do</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 tracking-tight">
              Comprehensive Engineering & Consultancy Services
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We provide full-spectrum engineering solutions designed to tackle the unique environmental constraints of the Horn of Africa.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {previewServices.map((service, index) => (
              <div key={index} className="bg-card rounded-2xl p-8 border border-black/5 hover:border-accent/40 hover:shadow-xl transition-all duration-300 group">
                <div className="w-14 h-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4 leading-snug group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{service.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <Link href="/services" className="bg-primary hover:bg-primary-dark text-white font-bold py-4 px-10 rounded-lg flex items-center justify-center gap-3 transition-all shadow-lg hover:shadow-primary/30 group">
              View All Services <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-accent font-extrabold uppercase tracking-widest text-sm mb-4 block">Our Work</span>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-primary tracking-tight">Featured Projects</h2>
            </div>
            <Link href="/projects" className="text-primary font-bold flex items-center gap-2 hover:gap-4 transition-all group shrink-0">
              View All Projects <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projectsPreview.map((project: any) => (
              <div key={project._id} className="bg-card rounded-[2rem] overflow-hidden border border-black/5 group flex flex-col hover:border-primary/20 transition-colors shadow-lg">
                <div className="aspect-[4/3] w-full overflow-hidden relative">
                  <img src={project.featuredImageUrl || "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=1000&auto=format&fit=crop"} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  {/* Status Badge */}
                  <div className={`absolute top-5 left-5 text-white text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-lg shadow-md ${project.status?.toLowerCase() === 'completed' ? 'bg-green-600' : 'bg-accent'}`}>
                    {project.status}
                  </div>
                  <div className="absolute bottom-5 right-5 backdrop-blur-md bg-black/60 text-white text-xs font-medium px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-2">
                    <MapPin className="w-3 h-3 text-accent" /> {project.location || 'Ethiopia'}
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary leading-snug transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground line-clamp-2 mb-8">{project.shortDescription}</p>
                  <Link href={`/projects/${project.slug.current}`} className="mt-auto text-primary font-bold flex items-center gap-2 hover:gap-4 transition-all w-max py-2 border-b-2 border-transparent hover:border-primary">
                    Read more <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dark Blue CTA Banner */}
      <section className="bg-primary-dark py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 opacity-50 pointer-events-none" />

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            {/* Left Side */}
            <div className="w-full lg:w-1/2 text-white">
              <span className="text-accent font-extrabold uppercase tracking-widest text-sm mb-6 block">Why Choose Us</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 leading-tight tracking-tight">
                Your Trusted Partner for Engineering Excellence in the Horn of Africa
              </h2>
              <p className="text-white/80 text-xl leading-relaxed mb-10 max-w-xl">
                We combine un-matched technical knowledge, internationally standardized safety practices, and an unwavering commitment to sustainable community development.
              </p>
              <Link href="/#contact" className="bg-transparent border-2 border-white hover:bg-white hover:text-primary-dark text-white font-bold py-4 px-10 rounded-lg flex items-center justify-center w-full sm:w-max transition-all group">
                Discuss Your Next Project
              </Link>
            </div>

            {/* Right Side Stack */}
            <div className="w-full lg:w-1/2 flex flex-col gap-4">
              {[
                "Mobilization, Demobilization & Site Logistics",
                "Core Geological Investigations & Site Mapping",
                "Advanced Geotechnical Studies for Civil Structures",
                "High-Precision Topographic & Drone Surveying",
                "Environmentally & Socially Sound Management Systems"
              ].map((item, idx) => (
                <div key={idx} className="bg-primary/50 backdrop-blur-sm border border-white/10 rounded-xl p-5 flex items-center gap-5 hover:bg-primary transition-colors">
                  <div className="bg-accent text-white p-2 rounded-lg shrink-0 shadow-md shadow-accent/20">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <span className="text-white font-semibold text-lg leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
