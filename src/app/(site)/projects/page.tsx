import { fetchProjects } from "@/sanity/lib/data";
import ProjectsClient from "@/components/ProjectsClient";

export const metadata = {
    title: "Our Projects | Moon Engineering Consultancy",
    description: "Explore our diverse portfolio of civil, structural, and infrastructure projects across the Horn of Africa.",
};

export const revalidate = 60; // Revalidate every minute

export default async function ProjectsPage() {
    const projects = await fetchProjects();
    return <ProjectsClient initialProjects={projects || []} />;
}
