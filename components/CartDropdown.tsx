"use client";

import Link from "next/link";
import Image from "next/image";
import { FiX } from "react-icons/fi";
import { useCart } from "@/contexts/CartContext";

interface CartDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartDropdown({ isOpen, onClose }: CartDropdownProps) {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="cart-sidebar-overlay"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 9998,
          opacity: isOpen ? 1 : 0,
          visibility: isOpen ? "visible" : "hidden",
          transition: "opacity 0.3s ease, visibility 0.3s ease",
        }}
        onClick={onClose}
      />
      {/* Sidebar */}
      <div
        className="cart-sidebar"
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          width: "400px",
          height: "100vh",
          backgroundColor: "#ffffff",
          boxShadow: "-2px 0 10px rgba(0, 0, 0, 0.1)",
          zIndex: 9999,
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.3s ease",
          overflowY: "auto",
          padding: "30px 20px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "30px" }}>
          <h2 style={{ fontFamily: "Montserrat, sans-serif", fontSize: "1.5rem", fontWeight: 400, color: "#1e1e1e", margin: 0, textTransform: "uppercase", letterSpacing: "1px" }}>
            Cart
          </h2>
          <button
            onClick={onClose}
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
        <div style={{ borderBottom: "1px solid #e0e0e0", marginBottom: "30px" }}></div>
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
              <p className="woocommerce-mini-cart__empty-message empty" style={{ fontFamily: "Raleway, sans-serif", fontSize: "1rem", color: "#666", marginBottom: "20px" }}>
                No products in the cart.
              </p>
              <p className="return-to-shop">
                <Link 
                  className="button primary wc-backward" 
                  href="/shop"
                  onClick={onClose}
                  style={{
                    display: "inline-block",
                    padding: "12px 30px",
                    backgroundColor: "#1e1e1e",
                    color: "#ffffff",
                    textDecoration: "none",
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "0.9rem",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    fontWeight: 400,
                    borderRadius: "2px",
                    transition: "background-color 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#333";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#1e1e1e";
                  }}
                >
                  Return to shop
                </Link>
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
      </div>
    </>
  );
}

