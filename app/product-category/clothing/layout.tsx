import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clothing - Laura Rossa",
  description: "Discover our collection of elegant clothing including dresses, jackets, pants, shirts, and more.",
};

export default function ClothingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

