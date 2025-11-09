import { Metadata } from "next";
import { products } from "@/data/products";

// Generate static params for all products (required for static export)
export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    return {
      title: "Product Not Found - Laura Rossa",
    };
  }

  return {
    title: `${product.name} - Laura Rossa`,
    description: product.description,
  };
}

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

