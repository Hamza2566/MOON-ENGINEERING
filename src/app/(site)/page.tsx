import Hero from "@/components/Hero";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { fetchProjects, fetchGallery } from "@/sanity/lib/data";

export default async function Home() {
  const allProjects = await fetchProjects();
  const allGallery = await fetchGallery();

  const projectsPreview = allProjects?.slice(0, 3) || [];
  const galleryPreview = allGallery?.slice(0, 4) || [];

  return (
    <>
      <Hero />

      {/* Short About Preview */}
      <section className="py-24 bg-background border-b border-white/5">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">About <span className="text-accent">Moon</span></h2>
          <div className="w-24 h-1 bg-accent rounded-full mx-auto mb-8" />
          <p className="text-muted-foreground text-lg mb-10 leading-relaxed md:text-xl">
            Established in Jigjiga, Somali Region, Ethiopia, Moon Engineering Consultancy is a leading multidisciplinary firm committed to transforming the Horn of Africa through sustainable and resilient infrastructure.
          </p>
          <Link href="/about" className="inline-flex items-center gap-2 bg-card border border-white/10 hover:border-accent/50 px-8 py-4 rounded-full font-bold transition-all hover:bg-white/5 group shadow-lg">
            Learn More About Us <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="py-24 bg-primary/20 border-b border-white/5">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured <span className="text-accent">Projects</span></h2>
              <div className="w-24 h-1 bg-accent rounded-full mb-6 shadow-[0_0_10px_rgba(232,185,35,0.4)]" />
              <p className="text-muted-foreground max-w-lg text-lg">A glimpse into our recent engineering milestones and developments.</p>
            </div>
            <Link href="/projects" className="inline-flex items-center gap-2 bg-accent text-primary-dark px-8 py-3.5 rounded-full font-bold transition-all hover:scale-105 shadow-xl group shrink-0">
              View All Projects <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projectsPreview.map((project: any) => (
              <div key={project._id} className="bg-card rounded-3xl overflow-hidden border border-white/5 group flex flex-col hover:border-accent/30 transition-colors shadow-xl">
                <div className="aspect-[4/3] w-full overflow-hidden relative">
                  <img src={project.featuredImageUrl} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 right-4 backdrop-blur-md bg-black/40 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/10">{project.status}</div>
                </div>
                <div className="p-8 flex flex-col flex-1 relative">
                  <span className="text-accent text-xs font-bold uppercase tracking-widest mb-3">{project.category}</span>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors">{project.title}</h3>
                  <Link href={`/projects/${project.slug.current}`} className="mt-auto text-foreground font-semibold flex items-center gap-2 hover:text-accent transition-colors">
                    View Details <ArrowRight className="w-4 h-4 text-accent" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Photo <span className="text-accent">Gallery</span></h2>
          <div className="w-24 h-1 bg-accent rounded-full mx-auto mb-8 shadow-[0_0_10px_rgba(232,185,35,0.4)]" />
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            Visual documentation of our ongoing precision, commitment to safety, and massive scale structures.
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {galleryPreview.map((item: any, i: number) => (
              <div key={item._id} className={`rounded-3xl overflow-hidden border border-white/5 bg-primary/20 shadow-xl group ${i === 0 || i === 3 ? 'aspect-[4/5]' : 'aspect-square'}`}>
                <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
            ))}
          </div>

          <Link href="/gallery" className="inline-flex items-center gap-2 bg-card border border-white/10 hover:border-accent/50 px-10 py-5 rounded-full font-bold transition-all hover:bg-white/5 hover:scale-105 mx-auto group shadow-lg">
            Browse Full Gallery <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  );
}
