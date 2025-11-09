"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiFilter, FiX } from "react-icons/fi";
import { products } from "@/data/products";
import QuickViewModal from "@/components/QuickViewModal";
import { Product } from "@/types";

// Get the first 7 products (new collection shoes)
const newCollectionProducts = products.filter((p) => p.category === "shoes").slice(0, 7);

export default function NewShoesCollectionPage() {
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null);

  // Close sidebar when clicking outside and prevent body scroll
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
        const target = event.target as HTMLElement;
        if (!target.closest('.filter-button') && !target.closest('.filter-sidebar')) {
          setIsFilterOpen(false);
        }
      }
    };

    if (isFilterOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "";
    };
  }, [isFilterOpen]);

  return (
    <div id="content" role="main" className="content-area">
      <div className="container section-title-container">
        <div style={{ marginBottom: "30px" }}>
          <h1 className="section-title section-title-normal" style={{ margin: 0, marginBottom: "20px" }}>
            <b></b>
            <span className="section-title-main">NEW COLLECTION</span>
            <b></b>
          </h1>
          <div style={{ display: "flex", justifyContent: "flex-start" }}>
            <div style={{ position: "relative", display: "inline-block" }} ref={filterRef}>
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="filter-button"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "10px 20px",
                  backgroundColor: "#1e1e1e",
                  color: "#ffffff",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "0.9rem",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  fontWeight: 400,
                  transition: "all 0.3s ease",
                }}
              >
              <FiFilter size={16} />
              Filter
            </button>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Sidebar */}
      {isFilterOpen && (
        <>
          {/* Overlay */}
          <div
            className="filter-sidebar-overlay"
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              zIndex: 9998,
              opacity: isFilterOpen ? 1 : 0,
              visibility: isFilterOpen ? "visible" : "hidden",
              transition: "opacity 0.3s ease, visibility 0.3s ease",
            }}
            onClick={() => setIsFilterOpen(false)}
          />
          {/* Sidebar */}
          <div
            ref={filterRef}
            className="filter-sidebar"
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "300px",
              height: "100vh",
              backgroundColor: "#ffffff",
              boxShadow: "2px 0 10px rgba(0, 0, 0, 0.1)",
              zIndex: 9999,
              transform: isFilterOpen ? "translateX(0)" : "translateX(-100%)",
              transition: "transform 0.3s ease",
              overflowY: "auto",
              padding: "30px 20px",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
              <h2 style={{ fontFamily: "Montserrat, sans-serif", fontSize: "1.5rem", fontWeight: 400, color: "#1e1e1e", margin: 0 }}>
                Categories
              </h2>
              <button
                onClick={() => setIsFilterOpen(false)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "5px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FiX size={24} color="#1e1e1e" />
              </button>
            </div>
            <div style={{ borderBottom: "1px solid #e0e0e0", marginBottom: "20px" }}></div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li style={{ marginBottom: "12px" }}>
                <Link
                  href="/product-category/bags"
                  onClick={() => setIsFilterOpen(false)}
                  style={{
                    color: "#333",
                    textDecoration: "none",
                    fontFamily: "Raleway, sans-serif",
                    fontSize: "0.95rem",
                    display: "block",
                    padding: "8px 0",
                  }}
                >
                  BAGS (4)
                </Link>
              </li>
              <li style={{ marginBottom: "12px" }}>
                <Link
                  href="/product-category/clothing"
                  onClick={() => setIsFilterOpen(false)}
                  style={{
                    color: "#333",
                    textDecoration: "none",
                    fontFamily: "Raleway, sans-serif",
                    fontSize: "0.95rem",
                    display: "block",
                    padding: "8px 0",
                  }}
                >
                  Clothing (34)
                </Link>
              </li>
              <li style={{ marginBottom: "12px" }}>
                <Link
                  href="/product-category/shoes/new-shoes-collection"
                  onClick={() => setIsFilterOpen(false)}
                  style={{
                    color: "#1e1e1e",
                    textDecoration: "none",
                    fontFamily: "Raleway, sans-serif",
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    display: "block",
                    padding: "8px 0",
                  }}
                >
                  NEW COLLECTION (7)
                </Link>
              </li>
              <li style={{ marginBottom: "12px" }}>
                <Link
                  href="/product-category/perfumes"
                  onClick={() => setIsFilterOpen(false)}
                  style={{
                    color: "#333",
                    textDecoration: "none",
                    fontFamily: "Raleway, sans-serif",
                    fontSize: "0.95rem",
                    display: "block",
                    padding: "8px 0",
                  }}
                >
                  Perfumes (2)
                </Link>
              </li>
              <li style={{ marginBottom: "12px" }}>
                <Link
                  href="/product-category/shoes"
                  onClick={() => setIsFilterOpen(false)}
                  style={{
                    color: "#333",
                    textDecoration: "none",
                    fontFamily: "Raleway, sans-serif",
                    fontSize: "0.95rem",
                    display: "block",
                    padding: "8px 0",
                  }}
                >
                  Shoes (19)
                </Link>
              </li>
              <li style={{ marginBottom: "12px" }}>
                <Link
                  href="/product-category/sunglasses"
                  onClick={() => setIsFilterOpen(false)}
                  style={{
                    color: "#333",
                    textDecoration: "none",
                    fontFamily: "Raleway, sans-serif",
                    fontSize: "0.95rem",
                    display: "block",
                    padding: "8px 0",
                  }}
                >
                  Sunglasses (4)
                </Link>
              </li>
              <li style={{ marginBottom: "12px" }}>
                <Link
                  href="/product-category/uncategorized"
                  onClick={() => setIsFilterOpen(false)}
                  style={{
                    color: "#333",
                    textDecoration: "none",
                    fontFamily: "Raleway, sans-serif",
                    fontSize: "0.95rem",
                    display: "block",
                    padding: "8px 0",
                  }}
                >
                  Uncategorized (0)
                </Link>
              </li>
            </ul>
          </div>
        </>
      )}

      <div className="row row-large row-divided" style={{ position: "relative" }}>
        {/* Products Grid - Full Width */}
        <div className="col medium-12 small-12 large-12">
          <div className="col-inner">
            <div className="row large-columns-3 medium-columns-2 small-columns- row-normal">
              {newCollectionProducts.map((product) => (
                <div key={product.id} className="col">
                  <div className="col-inner">
                    <div className="badge-container absolute left top z-1"></div>
                    <div className="product-small box has-hover box-normal box-text-bottom">
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
                                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                style={{ objectFit: "cover" }}
                              />
                            ) : null}
                            <Image
                              src={product.image}
                              alt={`${product.name} ${product.description}`}
                              fill
                              className="attachment-original size-original"
                              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                              style={{ objectFit: "cover" }}
                            />
                          </Link>
                        </div>
                        <div className="image-tools grid-tools text-center hide-for-small bottom hover-slide-in show-on-hover" style={{ position: "absolute", bottom: "20px", left: "50%", transform: "translateX(-50%)", width: "auto", zIndex: 10 }}>
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              setQuickViewProduct(product);
                              setIsQuickViewOpen(true);
                            }}
                            className="quick-view-button"
                            style={{
                              padding: "12px 30px",
                              backgroundColor: "#1e1e1e",
                              color: "#ffffff",
                              border: "none",
                              cursor: "pointer",
                              fontFamily: "Montserrat, sans-serif",
                              fontSize: "0.85rem",
                              textTransform: "uppercase",
                              letterSpacing: "1px",
                              fontWeight: 400,
                              transition: "all 0.3s ease",
                              whiteSpace: "nowrap",
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#333")}
                            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#1e1e1e")}
                          >
                            QUICK VIEW
                          </button>
                        </div>
                        <div className="image-tools grid-tools text-center hide-for-small bottom hover-slide-in show-on-hover"></div>
                      </div>
                      <div className="box-text text-center is-large" style={{ backgroundColor: "rgba(255, 255, 255, 0.419)" }}>
                        <div className="title-wrapper">
                          <p className="name product-title woocommerce-loop-product__title">
                            <Link
                              href={`/product/${product.slug}`}
                              className="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                            >
                              {product.name}{" "}
                              <desc>{product.description}</desc>
                            </Link>
                          </p>
                        </div>
                        <div className="price-wrapper">
                          <span className="price">
                            <span className="woocommerce-Price-amount amount">
                              <bdi>
                                {product.price.toFixed(2).replace(".", ",")}{" "}
                                <span className="woocommerce-Price-currencySymbol">€</span>
                              </bdi>
                            </span>
                          </span>
                        </div>
                        <div className="category-label" style={{ marginTop: "8px", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.5px", color: "#666" }}>
                          Shoes
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Quick View Modal */}
      <QuickViewModal
        isOpen={isQuickViewOpen}
        onClose={() => {
          setIsQuickViewOpen(false);
          setQuickViewProduct(null);
        }}
        product={quickViewProduct}
      />
    </div>
  );
}

