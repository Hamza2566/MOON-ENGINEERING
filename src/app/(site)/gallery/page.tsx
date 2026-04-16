import { fetchGallery } from "@/sanity/lib/data";
import GalleryClient from "@/components/GalleryClient";

export const metadata = {
    title: "Photo Gallery | Moon Engineering Consultancy",
    description: "A visual journey of our engineering milestones and construction progress in the Horn of Africa.",
};

export const revalidate = 60;

export default async function GalleryPage() {
    const galleryItems = await fetchGallery();
    return <GalleryClient initialGallery={galleryItems || []} />;
}
