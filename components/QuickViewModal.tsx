"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Product } from "@/types";
import { useCart } from "@/contexts/CartContext";

interface QuickViewModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
}

export default function QuickViewModal({ isOpen, onClose, product }: QuickViewModalProps) {
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { addToCart } = useCart();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setQuantity(1);
      setCurrentImageIndex(0);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen || !product) return null;

  // Get all available images for the product
  const productImages: string[] = [
    product.image,
    product.hoverImage,
    product.image, // Fallback to main image if no hover
  ].filter((img, index, self): img is string => Boolean(img) && self.indexOf(img) === index);

  const handlePreviousImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? productImages.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev === productImages.length - 1 ? 0 : prev + 1));
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
    onClose();
  };

  return (
    <>
      {/* Overlay */}
      <div
        className="quick-view-overlay"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 10000,
          opacity: isOpen ? 1 : 0,
          visibility: isOpen ? "visible" : "hidden",
          transition: "opacity 0.3s ease, visibility 0.3s ease",
        }}
        onClick={onClose}
      />
      {/* Modal */}
      <div
        className="quick-view-modal"
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "90%",
          maxWidth: "1000px",
          backgroundColor: "#ffffff",
          borderRadius: "4px",
          zIndex: 10001,
          opacity: isOpen ? 1 : 0,
          visibility: isOpen ? "visible" : "hidden",
          transition: "opacity 0.3s ease, visibility 0.3s ease, transform 0.3s ease",
          maxHeight: "90vh",
          overflowY: "auto",
          display: "flex",
          flexDirection: "row",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 10002,
            fontSize: "24px",
            color: "#1e1e1e",
          }}
        >
          <FiX size={24} />
        </button>

        {/* Left Panel - Product Images */}
        <div
          style={{
            flex: 1,
            backgroundColor: "#f5f5f5",
            position: "relative",
            minHeight: "500px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "40px",
          }}
        >
          {productImages.length > 0 && (
            <>
              {/* Previous Button */}
              {productImages.length > 1 && (
                <button
                  onClick={handlePreviousImage}
                  style={{
                    position: "absolute",
                    left: "20px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "rgba(0, 0, 0, 0.5)",
                    border: "none",
                    color: "#ffffff",
                    cursor: "pointer",
                    padding: "10px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 10,
                  }}
                >
                  <FiChevronLeft size={24} />
                </button>
              )}

              {/* Main Image */}
              {productImages.length > 0 && productImages[currentImageIndex] && (
                <div style={{ position: "relative", width: "100%", height: "400px" }}>
                  <Image
                    src={productImages[currentImageIndex]}
                    alt={product.name}
                    fill
                    style={{ objectFit: "contain" }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              )}

              {/* Next Button */}
              {productImages.length > 1 && (
                <button
                  onClick={handleNextImage}
                  style={{
                    position: "absolute",
                    right: "20px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "rgba(0, 0, 0, 0.5)",
                    border: "none",
                    color: "#ffffff",
                    cursor: "pointer",
                    padding: "10px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 10,
                  }}
                >
                  <FiChevronRight size={24} />
                </button>
              )}

              {/* Image Indicators */}
              {productImages.length > 1 && (
                <div
                  style={{
                    position: "absolute",
                    bottom: "20px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    display: "flex",
                    gap: "8px",
                  }}
                >
                  {productImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      style={{
                        width: "10px",
                        height: "10px",
                        borderRadius: "50%",
                        border: "none",
                        backgroundColor: index === currentImageIndex ? "#1e1e1e" : "#cccccc",
                        cursor: "pointer",
                        padding: 0,
                      }}
                    />
                  ))}
                </div>
              )}
            </>
          )}
        </div>

        {/* Right Panel - Product Details */}
        <div
          style={{
            flex: 1,
            padding: "40px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
            <h2
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "1.8rem",
                fontWeight: 400,
                color: "#1e1e1e",
                margin: "0 0 20px 0",
                lineHeight: "1.3",
              }}
            >
              {product.name}
            </h2>

            <p
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "1.5rem",
                fontWeight: 400,
                color: "#1e1e1e",
                margin: "0 0 20px 0",
              }}
            >
              {product.price.toFixed(2).replace(".", ",")} €
            </p>

            <p
              style={{
                fontFamily: "Raleway, sans-serif",
                fontSize: "0.95rem",
                color: "#28a745",
                margin: "0 0 30px 0",
                fontWeight: 500,
              }}
            >
              In stock
            </p>

            {/* Quantity Selector */}
            <div style={{ marginBottom: "30px" }}>
              <label
                style={{
                  display: "block",
                  fontFamily: "Raleway, sans-serif",
                  fontSize: "0.9rem",
                  color: "#333",
                  marginBottom: "10px",
                  fontWeight: 500,
                }}
              >
                Quantity
              </label>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  border: "1px solid #e0e0e0",
                  width: "fit-content",
                }}
              >
                <button
                  onClick={handleDecreaseQuantity}
                  style={{
                    padding: "12px 20px",
                    border: "none",
                    backgroundColor: "#ffffff",
                    cursor: "pointer",
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "1.2rem",
                    color: "#1e1e1e",
                  }}
                >
                  -
                </button>
                <input
                  type="number"
                  value={quantity}
                  readOnly
                  style={{
                    width: "60px",
                    padding: "12px",
                    border: "none",
                    borderLeft: "1px solid #e0e0e0",
                    borderRight: "1px solid #e0e0e0",
                    textAlign: "center",
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "1rem",
                    color: "#1e1e1e",
                    outline: "none",
                  }}
                />
                <button
                  onClick={handleIncreaseQuantity}
                  style={{
                    padding: "12px 20px",
                    border: "none",
                    backgroundColor: "#ffffff",
                    cursor: "pointer",
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "1.2rem",
                    color: "#1e1e1e",
                  }}
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              style={{
                width: "100%",
                padding: "16px 20px",
                backgroundColor: "#1e1e1e",
                color: "#ffffff",
                border: "none",
                borderRadius: "0",
                fontFamily: "Montserrat, sans-serif",
                fontSize: "0.9rem",
                textTransform: "uppercase",
                letterSpacing: "1px",
                fontWeight: 400,
                cursor: "pointer",
                transition: "background-color 0.3s ease",
                marginBottom: "15px",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#333")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#1e1e1e")}
            >
              Add to cart
            </button>

            {/* View Full Details Link */}
            <Link
              href={`/product/${product.slug}`}
              onClick={onClose}
              style={{
                display: "block",
                textAlign: "center",
                fontFamily: "Raleway, sans-serif",
                fontSize: "0.9rem",
                color: "#1e1e1e",
                textDecoration: "underline",
              }}
            >
              View full details
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

