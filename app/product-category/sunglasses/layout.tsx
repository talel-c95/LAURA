import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sunglasses - Laura Rossa",
  description: "Discover our collection of elegant sunglasses.",
};

export default function SunglassesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

