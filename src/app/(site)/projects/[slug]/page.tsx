import { fetchProjectBySlug } from "@/sanity/lib/data";
import { notFound } from "next/navigation";
import { ArrowLeft, MapPin, Calendar, Building, DollarSign } from "lucide-react";
import Link from "next/link";
import { PortableText } from "next-sanity"; // Needs portabletext

export default async function ProjectDetailPage({ params }: { params: { slug: string } }) {
    const project = await fetchProjectBySlug(params.slug);

    if (!project) {
        notFound();
    }

    return (
        <div className="pt-32 pb-24 bg-background">
            <div className="container mx-auto px-4 md:px-8 max-w-5xl">
                <Link href="/projects" className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors mb-10 font-medium group">
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> Back to Projects
                </Link>

                <div className="flex gap-4 mb-6">
                    <span className="bg-accent/10 border border-accent/20 text-accent font-bold px-4 py-1.5 rounded-full text-sm">{project.category}</span>
                    <span className="bg-card border border-white/10 text-foreground font-bold px-4 py-1.5 rounded-full text-sm">{project.status}</span>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold mb-10 text-foreground leading-tight tracking-tight">{project.title}</h1>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 p-8 bg-card rounded-3xl border border-white/5 shadow-lg">
                    <div className="flex flex-col gap-2">
                        <span className="text-muted-foreground text-sm flex items-center gap-2"><MapPin className="w-4 h-4 text-accent" /> Location</span>
                        <span className="font-semibold text-foreground text-lg">{project.location || "N/A"}</span>
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="text-muted-foreground text-sm flex items-center gap-2"><Calendar className="w-4 h-4 text-accent" /> Year</span>
                        <span className="font-semibold text-foreground text-lg">{project.year || "N/A"}</span>
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="text-muted-foreground text-sm flex items-center gap-2"><Building className="w-4 h-4 text-accent" /> Client</span>
                        <span className="font-semibold text-foreground text-lg">{project.client || "Confidential"}</span>
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="text-muted-foreground text-sm flex items-center gap-2"><DollarSign className="w-4 h-4 text-accent" /> Value</span>
                        <span className="font-semibold text-foreground text-lg">{project.value || "Undisclosed"}</span>
                    </div>
                </div>

                {project.featuredImageUrl && (
                    <div className="w-full aspect-[21/9] bg-primary-dark/50 relative rounded-3xl overflow-hidden mb-16 border border-white/5 shadow-2xl">
                        <img src={project.featuredImageUrl} alt={project.title} className="w-full h-full object-cover" />
                    </div>
                )}

                <div className="prose prose-invert prose-lg prose-a:text-accent max-w-none mb-20">
                    {project.fullDescription ? (
                        <PortableText value={project.fullDescription} />
                    ) : (
                        <p className="text-muted-foreground leading-relaxed text-xl">{project.shortDescription}</p>
                    )}
                </div>

                {project.galleryImagesUrls && project.galleryImagesUrls.length > 0 && (
                    <>
                        <h3 className="text-3xl font-bold mb-10 border-b border-white/10 pb-4">Project Gallery</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {project.galleryImagesUrls.map((url: string, i: number) => (
                                <div key={i} className="aspect-[4/3] rounded-2xl overflow-hidden bg-primary/20 border border-white/5 group cursor-pointer">
                                    <img src={url} alt={`Gallery image ${i + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
