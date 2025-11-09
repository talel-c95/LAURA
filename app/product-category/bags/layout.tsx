import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bags - Laura Rossa",
  description: "Discover our collection of elegant bags and accessories.",
};

export default function BagsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

