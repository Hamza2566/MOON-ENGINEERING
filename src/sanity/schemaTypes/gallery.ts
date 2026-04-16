import { defineType, defineField } from "sanity";

export const gallery = defineType({
    name: "gallery",
    title: "Gallery",
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
                    { title: "Site Progress", value: "Site Progress" },
                    { title: "Completed Structure", value: "Completed Structure" },
                    { title: "Team in Action", value: "Team in Action" },
                    { title: "Design & Planning", value: "Design & Planning" },
                ],
            },
        }),
        defineField({
            name: "image",
            title: "Image",
            type: "image",
            options: { hotspot: true },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "caption",
            title: "Caption",
            type: "text",
        }),
        defineField({
            name: "date",
            title: "Date",
            type: "datetime",
        }),
    ],
});
