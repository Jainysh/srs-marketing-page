import { createClient } from "contentful";

const client = createClient({
  space: "process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID" || "",
  accessToken: "12312312" || "",
});

// Fetch all products
export async function getProducts() {
  try {
    const entries = await client.getEntries({
      content_type: "product",
    });
    return entries.items;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

// Fetch products by category
export async function getProductsByCategory(category: string) {
  try {
    const entries = await client.getEntries({
      content_type: "product",
      "fields.category": category,
    });
    return entries.items;
  } catch (error) {
    console.error("Error fetching products by category:", error);
    return [];
  }
}

// Fetch single product by slug
export async function getProductBySlug(slug: string) {
  try {
    const entries = await client.getEntries({
      content_type: "product",
      "fields.slug": slug,
      limit: 1,
    });
    return entries.items[0] || null;
  } catch (error) {
    console.error("Error fetching product by slug:", error);
    return null;
  }
}

// Fetch about page content
export async function getAboutContent() {
  try {
    const entries = await client.getEntries({
      content_type: "aboutPage",
      limit: 1,
    });
    return entries.items[0] || null;
  } catch (error) {
    console.error("Error fetching about content:", error);
    return null;
  }
}

// Fetch home page content
export async function getHomeContent() {
  try {
    const entries = await client.getEntries({
      content_type: "homePage",
      limit: 1,
    });
    return entries.items[0] || null;
  } catch (error) {
    console.error("Error fetching home content:", error);
    return null;
  }
}

export default client;
