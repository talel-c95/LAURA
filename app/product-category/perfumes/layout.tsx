import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Perfumes - Laura Rossa",
  description: "Discover our signature perfumes - Just Once I and Just Once II.",
};

export default function PerfumesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

