import { defineField, defineType } from "sanity";

export default defineType({
    name: "homePosts",
    title: "Home Posts",
    type: "document",
    fields: [
        // author 
        defineField({
            name: 'author',
            title: 'Author',
            type: 'reference',
            to: { type: 'author' },
        }),
        // id
        defineField({
            name: "id",
            title: "Id",
            type: "number"
        }),
        // image 
        defineField({
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        // title 
        defineField({
            name: "title",
            title: "Title",
            type: "string"
        }),
        // slug 
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        }),
        // description 
        defineField({
            name: "shortDesc",
            title: "Short Description",
            type: "string",
            options: {
                maxLength: 96,
            },
        }),
        // published date 
        defineField({
            name: 'publishedAt',
            title: 'Published at',
            type: 'datetime',
        }),
    ]
});