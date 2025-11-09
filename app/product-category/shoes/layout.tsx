import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shoes - Laura Rossa",
  description: "Discover our collection of elegant shoes including sandals, boots, and heels.",
};

export default function ShoesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

