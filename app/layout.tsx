import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageLoader from "@/components/PageLoader";
import { CartProvider } from "@/contexts/CartContext";

export const metadata: Metadata = {
  title: "LAURA ROSSA ® - the untamed power of femininity",
  description: "Laura Rossa is a French fashion brand, born in the enchanting heart of Paris – a city synonymous with timeless elegance and artistic allure.",
  icons: {
    icon: [
      { url: "/images/cropped-favicon_2.png", sizes: "32x32" },
      { url: "/images/cropped-favicon_1.png", sizes: "192x192" },
    ],
    apple: "/images/cropped-favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="loading-site js">
      <body className="home wp-singular full-width lightbox nav-dropdown-has-arrow nav-dropdown-has-shadow parallax-mobile mobile-submenu-toggle">
        <PageLoader />
        <a className="skip-link screen-reader-text" href="#main">
          Skip to content
        </a>
        <CartProvider>
          <div id="wrapper">
            <Header />
            <main id="main">{children}</main>
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}

