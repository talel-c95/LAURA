"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Product } from "@/types";
import { useCart } from "@/contexts/CartContext";
import { motion, AnimatePresence } from "framer-motion";

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

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.2,
      },
    },
  };

  if (!isOpen || !product) return null;

  // Get all available images for the product
  const productImages: string[] = [
    product.image,
    product.hoverImage,
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
    <AnimatePresence>
      {isOpen && product && (
        <>
          {/* Glassmorphism Overlay */}
          <motion.div
            key="backdrop"
            className="quick-view-overlay"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(0, 0, 0, 0.85)",
              backdropFilter: "blur(20px) saturate(180%)",
              WebkitBackdropFilter: "blur(20px) saturate(180%)",
              zIndex: 10000,
            }}
          />
          {/* Glassmorphism Modal */}
          <motion.div
            key="modal"
            className="quick-view-modal glassmorphism"
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              width: "90%",
              maxWidth: "1100px",
              background: "rgba(0, 0, 0, 0.98)",
              backdropFilter: "blur(40px) saturate(180%)",
              WebkitBackdropFilter: "blur(40px) saturate(180%)",
              border: "1px solid rgba(212, 175, 55, 0.2)",
              borderRadius: "16px",
              boxShadow: "0 25px 80px rgba(0, 0, 0, 0.6), 0 0 80px rgba(212, 175, 55, 0.15)",
              zIndex: 10001,
              maxHeight: "90vh",
              overflow: "hidden",
              display: "flex",
              flexDirection: "row",
            }}
            initial={{ opacity: 0, scale: 0.95, x: "-50%", y: "-50%" }}
            animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
            exit={{ opacity: 0, scale: 0.95, x: "-50%", y: "-50%" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <motion.button
              onClick={onClose}
              style={{
                position: "absolute",
                top: "24px",
                right: "24px",
                background: "rgba(212, 175, 55, 0.15)",
                border: "1px solid rgba(212, 175, 55, 0.4)",
                borderRadius: "50%",
                cursor: "pointer",
                padding: "12px",
                width: "44px",
                height: "44px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 10002,
                color: "var(--luxury-gold)",
                transition: "all 0.3s ease",
              }}
              whileHover={{
                background: "rgba(212, 175, 55, 0.3)",
                scale: 1.1,
                rotate: 90,
                boxShadow: "0 0 25px rgba(212, 175, 55, 0.7)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <FiX size={22} />
            </motion.button>

            {/* Left Panel - Product Images */}
            <div
              style={{
                flex: "0 0 50%",
                backgroundColor: "rgba(255, 255, 255, 0.02)",
                position: "relative",
                minHeight: "600px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "60px 40px",
                borderRight: "1px solid rgba(212, 175, 55, 0.1)",
              }}
            >
              {productImages.length > 0 && (
                <>
                  {/* Previous Button */}
                  {productImages.length > 1 && (
                    <motion.button
                      onClick={handlePreviousImage}
                      style={{
                        position: "absolute",
                        left: "20px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        background: "rgba(212, 175, 55, 0.15)",
                        border: "1px solid rgba(212, 175, 55, 0.4)",
                        color: "var(--luxury-gold)",
                        cursor: "pointer",
                        padding: "12px",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 10,
                        width: "44px",
                        height: "44px",
                      }}
                      whileHover={{ 
                        background: "rgba(212, 175, 55, 0.3)", 
                        scale: 1.1,
                        boxShadow: "0 0 20px rgba(212, 175, 55, 0.6)" 
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FiChevronLeft size={24} />
                    </motion.button>
                  )}

                  {/* Main Image */}
                  {productImages.length > 0 && productImages[currentImageIndex] && (
                    <motion.div 
                      key={currentImageIndex}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.4 }}
                      style={{ 
                        position: "relative", 
                        width: "100%", 
                        height: "500px",
                        borderRadius: "8px",
                        overflow: "hidden",
                      }}
                    >
                      <Image
                        src={productImages[currentImageIndex]}
                        alt={product.name}
                        fill
                        style={{ objectFit: "contain" }}
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      {/* Subtle gradient overlay */}
                      <div
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          background: "linear-gradient(180deg, rgba(212, 175, 55, 0.05) 0%, transparent 50%)",
                          pointerEvents: "none",
                        }}
                      />
                    </motion.div>
                  )}

                  {/* Next Button */}
                  {productImages.length > 1 && (
                    <motion.button
                      onClick={handleNextImage}
                      style={{
                        position: "absolute",
                        right: "20px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        background: "rgba(212, 175, 55, 0.15)",
                        border: "1px solid rgba(212, 175, 55, 0.4)",
                        color: "var(--luxury-gold)",
                        cursor: "pointer",
                        padding: "12px",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 10,
                        width: "44px",
                        height: "44px",
                      }}
                      whileHover={{ 
                        background: "rgba(212, 175, 55, 0.3)", 
                        scale: 1.1,
                        boxShadow: "0 0 20px rgba(212, 175, 55, 0.6)" 
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FiChevronRight size={24} />
                    </motion.button>
                  )}

                  {/* Image Indicators */}
                  {productImages.length > 1 && (
                    <div
                      style={{
                        position: "absolute",
                        bottom: "30px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        display: "flex",
                        gap: "10px",
                      }}
                    >
                      {productImages.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          style={{
                            width: index === currentImageIndex ? "32px" : "10px",
                            height: "10px",
                            borderRadius: "5px",
                            border: "none",
                            backgroundColor: index === currentImageIndex ? "var(--luxury-gold)" : "rgba(212, 175, 55, 0.4)",
                            cursor: "pointer",
                            padding: 0,
                            transition: "all 0.3s ease",
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
                flex: "0 0 50%",
                padding: "60px 50px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                backgroundColor: "rgba(0, 0, 0, 0.3)",
              }}
            >
              <div>
                {/* Product Name */}
                <h2 className="shimmer-text" style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "2.5rem",
                    fontWeight: 700,
                    color: "var(--luxury-gold)",
                    margin: "0 0 20px 0",
                    lineHeight: "1.2",
                  }}
                >
                  {product.name}
                </h2>

                {/* Price */}
                <p
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "2rem",
                    fontWeight: 600,
                    color: "var(--luxury-gold)",
                    margin: "0 0 30px 0",
                  }}
                >
                  {product.price.toFixed(2).replace(".", ",")} €
                </p>

                {/* Stock Status */}
                <div style={{ marginBottom: "40px" }}>
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: "0.95rem",
                      color: "rgba(255, 255, 255, 0.8)",
                      fontWeight: 500,
                      padding: "8px 16px",
                      background: "rgba(40, 167, 69, 0.2)",
                      border: "1px solid rgba(40, 167, 69, 0.4)",
                      borderRadius: "20px",
                    }}
                  >
                    ✓ In stock
                  </span>
                </div>

                {/* Quantity Selector */}
                <div style={{ marginBottom: "40px" }}>
                  <label
                    style={{
                      display: "block",
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: "0.9rem",
                      color: "rgba(255, 255, 255, 0.7)",
                      marginBottom: "12px",
                      fontWeight: 500,
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                    }}
                  >
                    Quantity
                  </label>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      border: "2px solid rgba(212, 175, 55, 0.3)",
                      borderRadius: "8px",
                      width: "fit-content",
                      background: "rgba(255, 255, 255, 0.05)",
                      overflow: "hidden",
                    }}
                  >
                    <motion.button
                      onClick={handleDecreaseQuantity}
                      disabled={quantity <= 1}
                      style={{
                        padding: "14px 20px",
                        border: "none",
                        background: "transparent",
                        cursor: quantity > 1 ? "pointer" : "not-allowed",
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "1.2rem",
                        color: quantity > 1 ? "var(--luxury-gold)" : "rgba(212, 175, 55, 0.3)",
                        fontWeight: 600,
                        transition: "all 0.3s ease",
                      }}
                      whileHover={quantity > 1 ? { 
                        background: "rgba(212, 175, 55, 0.1)",
                        scale: 1.05 
                      } : {}}
                      whileTap={quantity > 1 ? { scale: 0.95 } : {}}
                    >
                      −
                    </motion.button>
                    <input
                      type="number"
                      value={quantity}
                      readOnly
                      style={{
                        width: "70px",
                        padding: "14px 10px",
                        border: "none",
                        borderLeft: "1px solid rgba(212, 175, 55, 0.2)",
                        borderRight: "1px solid rgba(212, 175, 55, 0.2)",
                        textAlign: "center",
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "1.1rem",
                        color: "var(--luxury-gold)",
                        background: "transparent",
                        outline: "none",
                        fontWeight: 600,
                      }}
                    />
                    <motion.button
                      onClick={handleIncreaseQuantity}
                      style={{
                        padding: "14px 20px",
                        border: "none",
                        background: "transparent",
                        cursor: "pointer",
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "1.2rem",
                        color: "var(--luxury-gold)",
                        fontWeight: 600,
                        transition: "all 0.3s ease",
                      }}
                      whileHover={{ 
                        background: "rgba(212, 175, 55, 0.1)",
                        scale: 1.05 
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      +
                    </motion.button>
                  </div>
                </div>

                {/* Add to Cart Button */}
                <motion.button
                  onClick={handleAddToCart}
                  className="glow-gold ripple-effect"
                  style={{
                    width: "100%",
                    padding: "20px 30px",
                    background: "transparent",
                    border: "2px solid var(--luxury-gold)",
                    color: "var(--luxury-gold)",
                    borderRadius: "8px",
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "1rem",
                    textTransform: "uppercase",
                    letterSpacing: "2px",
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    marginBottom: "20px",
                  }}
                  whileHover={{
                    background: "var(--luxury-gold)",
                    color: "var(--luxury-black)",
                    scale: 1.02,
                    boxShadow: "0 0 30px rgba(212, 175, 55, 0.6)",
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  Add to Cart
                </motion.button>

                {/* View Full Details Link */}
                <Link
                  href={`/product/${product.slug}`}
                  onClick={onClose}
                  style={{
                    display: "block",
                    textAlign: "center",
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "0.9rem",
                    color: "rgba(255, 255, 255, 0.7)",
                    textDecoration: "none",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--luxury-gold)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "rgba(255, 255, 255, 0.7)";
                  }}
                >
                  View full product details →
                </Link>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
