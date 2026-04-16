import { defineType, defineField } from "sanity";

export const project = defineType({
    name: "project",
    title: "Project",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: { source: "title", maxLength: 96 },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "category",
            title: "Category",
            type: "string",
            options: {
                list: [
                    { title: "Civil & Structural", value: "Civil & Structural" },
                    { title: "Mechanical & Electrical", value: "Mechanical & Electrical" },
                    { title: "Geotechnical", value: "Geotechnical" },
                    { title: "Water & Wastewater", value: "Water & Wastewater" },
                    { title: "Transportation", value: "Transportation" },
                ],
            },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "status",
            title: "Status",
            type: "string",
            options: {
                list: [
                    { title: "Completed", value: "Completed" },
                    { title: "Ongoing", value: "Ongoing" },
                ],
            },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "location",
            title: "Location",
            type: "string",
        }),
        defineField({
            name: "year",
            title: "Year",
            type: "string",
        }),
        defineField({
            name: "client",
            title: "Client",
            type: "string",
        }),
        defineField({
            name: "value",
            title: "Project Value (Optional)",
            type: "string",
        }),
        defineField({
            name: "shortDescription",
            title: "Short Description",
            type: "text",
        }),
        defineField({
            name: "fullDescription",
            title: "Full Description",
            type: "array",
            of: [{ type: "block" }],
        }),
        defineField({
            name: "featuredImage",
            title: "Featured Image",
            type: "image",
            options: { hotspot: true },
        }),
        defineField({
            name: "galleryImages",
            title: "Gallery Images",
            type: "array",
            of: [{ type: "image", options: { hotspot: true } }],
        }),
    ],
});
