import { fetchGallery } from "@/sanity/lib/data";
import GalleryClient from "@/components/GalleryClient";

export const metadata = {
    title: "Photo Gallery | Moon Engineering Consultancy",
    description: "A visual journey of our engineering milestones and construction progress in the Horn of Africa.",
};

export const revalidate = 60;

export default async function GalleryPage() {
    const galleryItems = await fetchGallery();
    return (
        <div className="min-h-screen bg-background">
            <section className="bg-primary-dark pt-32 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary rounded-full blur-[100px] z-0 pointer-events-none" />
                <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
                    <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg tracking-tight">Photo Gallery</h1>
                    <p className="text-white/80 text-xl max-w-2xl mx-auto leading-relaxed">
                        A visual journey of our engineering milestones and construction progress.
                    </p>
                </div>
            </section>
            <div className="py-24">
                <GalleryClient initialGallery={galleryItems || []} />
            </div>
        </div>
    );
}
