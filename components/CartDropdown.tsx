"use client";

import Link from "next/link";
import Image from "next/image";
import { FiX } from "react-icons/fi";
import { useCart } from "@/contexts/CartContext";
import { motion, AnimatePresence } from "framer-motion";

interface CartDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartDropdown({ isOpen, onClose }: CartDropdownProps) {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice } = useCart();

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const sidebarVariants = {
    hidden: { x: "100%" },
    visible: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    exit: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Glassmorphism Overlay */}
          <motion.div
            key="backdrop"
            className="cart-sidebar-overlay"
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
              background: "rgba(0, 0, 0, 0.8)",
              backdropFilter: "blur(20px) saturate(180%)",
              WebkitBackdropFilter: "blur(20px) saturate(180%)",
              zIndex: 9998,
            }}
          />
          {/* Glassmorphism Sidebar */}
          <motion.div
            key="sidebar"
            className="cart-sidebar glassmorphism"
            variants={sidebarVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              width: "400px",
              height: "100vh",
              background: "rgba(0, 0, 0, 0.95)",
              backdropFilter: "blur(30px) saturate(180%)",
              WebkitBackdropFilter: "blur(30px) saturate(180%)",
              borderLeft: "1px solid rgba(212, 175, 55, 0.3)",
              boxShadow: "-2px 0 40px rgba(0, 0, 0, 0.5), 0 0 60px rgba(212, 175, 55, 0.1)",
              zIndex: 9999,
              overflowY: "auto",
              padding: "30px 20px",
            }}
          >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "30px" }}>
          <h2 className="shimmer-text" style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.8rem", fontWeight: 600, color: "var(--luxury-gold)", margin: 0, textTransform: "uppercase", letterSpacing: "2px" }}>
            Cart
          </h2>
          <motion.button
            onClick={onClose}
            style={{
              background: "rgba(212, 175, 55, 0.2)",
              border: "1px solid rgba(212, 175, 55, 0.5)",
              borderRadius: "50%",
              cursor: "pointer",
              padding: "8px",
              width: "36px",
              height: "36px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--luxury-gold)",
            }}
            whileHover={{
              background: "rgba(212, 175, 55, 0.4)",
              scale: 1.1,
              rotate: 90,
              boxShadow: "0 0 20px rgba(212, 175, 55, 0.6)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <FiX size={20} />
          </motion.button>
        </div>
        <div style={{ borderBottom: "1px solid rgba(212, 175, 55, 0.3)", marginBottom: "30px" }}></div>
        <div className="widget_shopping_cart_content">
          {cartItems.length === 0 ? (
            <div className="ux-mini-cart-empty flex flex-row-col text-center pt pb">
              <div className="ux-mini-cart-empty-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 17 19"
                  style={{ opacity: 0.1, height: "80px" }}
                >
                  <path
                    d="M8.5 0C6.7 0 5.3 1.2 5.3 2.7v2H2.1c-.3 0-.6.3-.7.7L0 18.2c0 .4.2.8.6.8h15.7c.4 0 .7-.3.7-.7v-.1L15.6 5.4c0-.3-.3-.6-.7-.6h-3.2v-2c0-1.6-1.4-2.8-3.2-2.8zM6.7 2.7c0-.8.8-1.4 1.8-1.4s1.8.6 1.8 1.4v2H6.7v-2zm7.5 3.4 1.3 11.5h-14L2.8 6.1h2.5v1.4c0 .4.3.7.7.7.4 0 .7-.3.7-.7V6.1h3.5v1.4c0 .4.3.7.7.7s.7-.3.7-.7V6.1h2.6z"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <p className="woocommerce-mini-cart__empty-message empty" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "1rem", color: "var(--luxury-text)", marginBottom: "20px" }}>
                No products in the cart.
              </p>
              <p className="return-to-shop">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    className="button primary wc-backward glow-gold" 
                    href="/shop"
                    onClick={onClose}
                    style={{
                      display: "inline-block",
                      padding: "14px 32px",
                      background: "transparent",
                      border: "2px solid var(--luxury-gold)",
                      color: "var(--luxury-gold)",
                      textDecoration: "none",
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: "0.9rem",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                      fontWeight: 600,
                      borderRadius: "4px",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "var(--luxury-gold)";
                      e.currentTarget.style.color = "var(--luxury-black)";
                      e.currentTarget.style.boxShadow = "0 0 20px rgba(212, 175, 55, 0.6)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.color = "var(--luxury-gold)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    Return to shop
                  </Link>
                </motion.div>
              </p>
            </div>
          ) : (
            <>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, marginBottom: "20px" }}>
                {cartItems.map((item) => (
                  <li key={item.id} style={{ marginBottom: "20px", paddingBottom: "20px", borderBottom: "1px solid #e0e0e0" }}>
                    <div style={{ display: "flex", gap: "15px" }}>
                      <Link href={`/product/${item.slug}`} onClick={onClose} style={{ flexShrink: 0 }}>
                        <div style={{ position: "relative", width: "80px", height: "80px" }}>
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            style={{ objectFit: "cover" }}
                            sizes="80px"
                          />
                        </div>
                      </Link>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <Link
                          href={`/product/${item.slug}`}
                          onClick={onClose}
                          style={{
                            fontFamily: "Raleway, sans-serif",
                            fontSize: "0.9rem",
                            color: "#1e1e1e",
                            textDecoration: "none",
                            fontWeight: 500,
                            display: "block",
                            marginBottom: "5px",
                          }}
                        >
                          {item.name}
                        </Link>
                        <p style={{ fontFamily: "Raleway, sans-serif", fontSize: "0.85rem", color: "#666", margin: "5px 0" }}>
                          {item.quantity} × {item.price.toFixed(2).replace(".", ",")} €
                        </p>
                        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "10px" }}>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            style={{
                              width: "24px",
                              height: "24px",
                              border: "1px solid #e0e0e0",
                              background: "#ffffff",
                              cursor: "pointer",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              fontSize: "14px",
                            }}
                          >
                            -
                          </button>
                          <span style={{ fontFamily: "Raleway, sans-serif", fontSize: "0.9rem", minWidth: "30px", textAlign: "center" }}>
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            style={{
                              width: "24px",
                              height: "24px",
                              border: "1px solid #e0e0e0",
                              background: "#ffffff",
                              cursor: "pointer",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              fontSize: "14px",
                            }}
                          >
                            +
                          </button>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            style={{
                              marginLeft: "auto",
                              background: "none",
                              border: "none",
                              cursor: "pointer",
                              color: "#666",
                              fontSize: "18px",
                              padding: "0 5px",
                            }}
                          >
                            <FiX size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <div style={{ borderTop: "1px solid #e0e0e0", paddingTop: "20px", marginTop: "20px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
                  <span style={{ fontFamily: "Montserrat, sans-serif", fontSize: "1rem", fontWeight: 600, color: "#1e1e1e" }}>
                    Total:
                  </span>
                  <span style={{ fontFamily: "Montserrat, sans-serif", fontSize: "1rem", fontWeight: 600, color: "#1e1e1e" }}>
                    {getTotalPrice().toFixed(2).replace(".", ",")} €
                  </span>
                </div>
                <Link
                  href="/cart"
                  onClick={onClose}
                  style={{
                    display: "block",
                    width: "100%",
                    padding: "14px 20px",
                    backgroundColor: "#1e1e1e",
                    color: "#ffffff",
                    textDecoration: "none",
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "0.9rem",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    fontWeight: 400,
                    textAlign: "center",
                    borderRadius: "2px",
                    transition: "background-color 0.3s ease",
                    marginBottom: "10px",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#333";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#1e1e1e";
                  }}
                >
                  View cart
                </Link>
                <Link
                  href="/checkout"
                  onClick={onClose}
                  style={{
                    display: "block",
                    width: "100%",
                    padding: "14px 20px",
                    backgroundColor: "#ffffff",
                    color: "#1e1e1e",
                    textDecoration: "none",
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "0.9rem",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    fontWeight: 400,
                    textAlign: "center",
                    border: "1px solid #1e1e1e",
                    borderRadius: "2px",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#1e1e1e";
                    e.currentTarget.style.color = "#ffffff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#ffffff";
                    e.currentTarget.style.color = "#1e1e1e";
                  }}
                >
                  Checkout
                </Link>
              </div>
            </>
          )}
        </div>
      </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

