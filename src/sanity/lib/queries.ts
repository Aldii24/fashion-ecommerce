import { defineQuery } from "next-sanity";

export const NEW_ARRIVALS_PRODUCT_QUERY =
  defineQuery(`*[_type == "products" && defined(slug.current) ] | order(_createdAt desc) {
  _id, name, slug, category, price, 
    brand, image
}`);

export const PRODUCT_SEARCH_QUERY =
  defineQuery(`*[_type == "products" && (defined($search) && (name match $search || category match $search || brand match $search))] | order(_createdAt desc) {
  _id, name, slug, category, price, 
  brand, image
}
`);

export const PRODUCT_BY_ID_QUERY =
  defineQuery(`*[_type == "products" && defined(slug.current) &&  _id match $id] [0] {
  _id, name, slug, description, category, price, size, brand,
    image
}`);

export const PRODUCT_BY_CATEGORY_QUERY =
  defineQuery(`*[_type == "products" && defined(slug.current) &&  category match $category] {
  _id, name, slug, description, category, price, size, brand,
    image
}`);
