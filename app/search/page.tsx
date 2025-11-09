"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/products";

export default function SearchPage() {
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);
  const [query, setQuery] = useState<string>("");

  useEffect(() => {
    // Read search query from URL on client side
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      setQuery(params.get("q") || "");
    }
  }, []);
  const searchResults = query
    ? products.filter(
        (product) =>
          product.name.toLowerCase().includes(query.toLowerCase()) ||
          product.description.toLowerCase().includes(query.toLowerCase()) ||
          product.category.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div id="content" role="main" className="content-area">
      <div className="container" style={{ paddingTop: "40px", paddingBottom: "40px" }}>
        <h1
          className="section-title section-title-normal"
          style={{ margin: "0 0 30px 0", textAlign: "center" }}
        >
            <b></b>
            <span className="section-title-main">
              {query ? `Search Results for "${query}"` : "Search"}
            </span>
            <b></b>
          </h1>

        {query && searchResults.length === 0 ? (
          <div style={{ textAlign: "center", padding: "60px 20px" }}>
            <p style={{ fontFamily: "Raleway, sans-serif", fontSize: "1.2rem", marginBottom: "1rem", color: "#666" }}>
              No products found for &quot;{query}&quot;
            </p>
            <Link
              href="/"
              style={{
                display: "inline-block",
                padding: "12px 24px",
                backgroundColor: "#1e1e1e",
                color: "#ffffff",
                textDecoration: "none",
                borderRadius: "0",
                fontFamily: "Montserrat, sans-serif",
                fontSize: "0.9rem",
                textTransform: "uppercase",
                letterSpacing: "1px",
                transition: "background-color 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#333";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#1e1e1e";
              }}
            >
              Return to Home
            </Link>
          </div>
        ) : query && searchResults.length > 0 ? (
          <div>
            <p style={{ fontFamily: "Raleway, sans-serif", fontSize: "0.95rem", marginBottom: "2rem", color: "#666" }}>
              Found {searchResults.length} product{searchResults.length !== 1 ? "s" : ""}
            </p>
            <div className="row large-columns-3 medium-columns-2 small-columns- row-normal">
              {searchResults.map((product) => (
                <div key={product.id} className="col">
                  <div className="col-inner">
                    <div className="badge-container absolute left top z-1"></div>
                    <div className="product-small box has-hover box-border-bottom text-center">
                      <div className="box-image" style={{ position: "relative", width: "100%", paddingTop: "133.33%" }}>
                        <div className="image-zoom" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}>
                          <Link
                            href={`/product/${product.slug}`}
                            aria-label={`${product.name} ${product.description}`}
                            onMouseEnter={() => setHoveredProduct(product.id)}
                            onMouseLeave={() => setHoveredProduct(null)}
                            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", display: "block" }}
                          >
                            {hoveredProduct === product.id && product.hoverImage ? (
                              <Image
                                src={product.hoverImage}
                                alt={product.name}
                                fill
                                className="show-on-hover absolute fill hide-for-small back-image"
                                sizes="(max-width: 765px) 100vw, 765px"
                                style={{ objectFit: "cover" }}
                              />
                            ) : null}
                            <Image
                              src={product.image}
                              alt={`${product.name} ${product.description}`}
                              fill
                              className="attachment-original size-original"
                              sizes="(max-width: 1020px) 100vw, 1020px"
                              style={{ objectFit: "cover" }}
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="box-text text-center" style={{ padding: "20px 15px" }}>
                        <p className="category-label uppercase is-smaller no-text-transform text-opacity" style={{ marginBottom: "5px" }}>
                          {product.category}
                        </p>
                        <p className="name product-title" style={{ marginBottom: "5px" }}>
                          <Link href={`/product/${product.slug}`} style={{ color: "#1e1e1e", textDecoration: "none" }}>
                            {product.name}
                          </Link>
                        </p>
                        <p className="product-description" style={{ fontSize: "0.9rem", color: "#666", marginBottom: "10px" }}>
                          {product.description}
                        </p>
                        <p className="price" style={{ fontFamily: "Montserrat, sans-serif", fontSize: "1rem", fontWeight: 400 }}>
                          <span className="woocommerce-Price-amount amount">
                            <span className="woocommerce-Price-currencySymbol">€</span>
                            {product.price.toFixed(2).replace(".", ",")}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div style={{ textAlign: "center", padding: "60px 20px" }}>
            <p style={{ fontFamily: "Raleway, sans-serif", fontSize: "1.2rem", color: "#666" }}>
              Enter a search term to find products
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

