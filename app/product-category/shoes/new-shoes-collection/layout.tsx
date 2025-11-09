import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NEW COLLECTION - Laura Rossa",
  description: "Discover our new shoes collection",
};

export default function NewShoesCollectionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

