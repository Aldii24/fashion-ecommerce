import { CiShop } from "react-icons/ci";
import { defineField, defineType } from "sanity";

export const products = defineType({
  name: "products",
  title: "Products",
  type: "document",
  icon: CiShop,
  fields: [
    defineField({
      name: "name",
      type: "string",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "name",
      },
    }),
    defineField({
      name: "description",
      type: "text",
    }),
    defineField({
      name: "category",
      type: "string",
      validation: (Rule) => Rule.min(3).max(20).required(),
    }),
    defineField({
      name: "price",
      type: "number",
    }),
    defineField({
      name: "size",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "brand",
      type: "string",
    }),
    defineField({
      name: "image",
      type: "array",
      of: [{ type: "image" }],
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "name",
    },
  },
});
