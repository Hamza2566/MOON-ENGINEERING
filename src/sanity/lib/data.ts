import { client } from "./client";
import { projectId } from "../env";

const dummyProjects = [
    {
        _id: "1",
        title: "Regional Hospital Expansion",
        slug: { current: "regional-hospital-expansion" },
        category: "Civil & Structural",
        status: "Completed",
        location: "Jigjiga, Ethiopia",
        year: "2025",
        shortDescription: "A state-of-the-art expansion ensuring resilient healthcare infrastructure.",
        featuredImageUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1000&auto=format&fit=crop"
    },
    {
        _id: "2",
        title: "Horn Highway Bridge",
        slug: { current: "horn-highway-bridge" },
        category: "Transportation",
        status: "Ongoing",
        location: "Somali Region",
        year: "2026",
        shortDescription: "Crucial infrastructure project connecting remote agricultural zones.",
        featuredImageUrl: "https://images.unsplash.com/photo-1545464161-55c3c137452c?q=80&w=1000&auto=format&fit=crop"
    },
    {
        _id: "3",
        title: "Urban Water Supply Network",
        slug: { current: "urban-water-supply-network" },
        category: "Water & Wastewater",
        status: "Ongoing",
        location: "Dire Dawa",
        year: "2026",
        shortDescription: "Comprehensive wastewater management and supply design for urban areas.",
        featuredImageUrl: "https://images.unsplash.com/photo-1520699049698-acd2fce18736?q=80&w=1000&auto=format&fit=crop"
    }
];

const dummyGallery = [
    {
        _id: "g1",
        title: "Bridge Foundation Laying",
        category: "Site Progress",
        imageUrl: "https://images.unsplash.com/photo-1504307651254-35680f356f58?q=80&w=1000&auto=format&fit=crop",
        caption: "Early stages of pile driving.",
        date: "2025-10-12"
    },
    {
        _id: "g2",
        title: "Completed Hospital Wing",
        category: "Completed Structure",
        imageUrl: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1000&auto=format&fit=crop",
        caption: "Final exterior aesthetic.",
        date: "2025-11-20"
    },
    {
        _id: "g3",
        title: "Engineering Team Review",
        category: "Team in Action",
        imageUrl: "https://images.unsplash.com/photo-1581092583537-20d51b4b4f1b?q=80&w=1000&auto=format&fit=crop",
        caption: "On-site blueprint review session.",
        date: "2026-01-05"
    }
];

export async function fetchProjects() {
    if (projectId === "yoursecretprojectid" || !projectId) {
        return dummyProjects;
    }

    try {
        const query = `*[_type == "project"] | order(year desc) {
      _id,
      title,
      slug,
      category,
      status,
      location,
      year,
      shortDescription,
      "featuredImageUrl": featuredImage.asset->url
    }`;
        return await client.fetch(query);
    } catch (error) {
        console.error("Failed to fetch Sanity projects:", error);
        return dummyProjects;
    }
}

export async function fetchGallery() {
    if (projectId === "yoursecretprojectid" || !projectId) {
        return dummyGallery;
    }

    try {
        const query = `*[_type == "gallery"] | order(date desc) {
      _id,
      title,
      category,
      "imageUrl": image.asset->url,
      caption,
      date
    }`;
        return await client.fetch(query);
    } catch (error) {
        console.error("Failed to fetch Sanity gallery:", error);
        return dummyGallery;
    }
}

export async function fetchProjectBySlug(slug: string) {
    if (projectId === "yoursecretprojectid" || !projectId) {
        return dummyProjects.find(p => p.slug.current === slug) || null;
    }

    try {
        const query = `*[_type == "project" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      category,
      status,
      location,
      year,
      client,
      value,
      shortDescription,
      fullDescription,
      "featuredImageUrl": featuredImage.asset->url,
      "galleryImagesUrls": galleryImages[].asset->url
    }`;
        return await client.fetch(query, { slug });
    } catch (error) {
        console.error("Failed to fetch project by slug:", error);
        return dummyProjects.find(p => p.slug.current === slug) || null;
    }
}
