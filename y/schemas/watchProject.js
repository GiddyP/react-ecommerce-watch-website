import { defineField, defineType } from "sanity";

export default defineType({
    name: "watchProject",
    title: "Watch Project",
    type: "document",
    fields:[
        defineField({
            name: "id",
            title:"Id",
            type: "number"
        }),
        defineField({
            name: "name",
            title:"Name",
            type: "string"
        }),
        defineField({
            name: "longDesc",
            title:"Long Description",
            type: "text"
        }),
        defineField({
            name: "shortDesc",
            title:"Short Description",
            type: "string"
        }),
        defineField({
            name: "price",
            title:"Price",
            type: "number"
        }),
        defineField({
            name: "category",
            title:"Category",
            type: "string"
        }),
        defineField({
            name: "description",
            title:"Description",
            type: "text"
        }),
        defineField({
            name: "imageUrl",
            title:"Image url",
            type: "text"
        }),
        defineField({
            name: "reviews",
            title:"Reviews",
            type: "text"
        }),
    ]
});