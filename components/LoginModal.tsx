"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
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

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Glassmorphism Overlay */}
          <motion.div
            key="backdrop"
            className="login-modal-overlay"
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
            ref={modalRef}
            className="login-modal glassmorphism"
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              width: "90%",
              maxWidth: "1000px",
              background: "rgba(0, 0, 0, 0.98)",
              backdropFilter: "blur(40px) saturate(180%)",
              WebkitBackdropFilter: "blur(40px) saturate(180%)",
              border: "1px solid rgba(212, 175, 55, 0.2)",
              borderRadius: "16px",
              boxShadow: "0 25px 80px rgba(0, 0, 0, 0.6), 0 0 80px rgba(212, 175, 55, 0.15)",
              zIndex: 10001,
              maxHeight: "90vh",
              overflowY: "auto",
            }}
            initial={{ opacity: 0, scale: 0.95, x: "-50%", y: "-50%" }}
            animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
            exit={{ opacity: 0, scale: 0.95, x: "-50%", y: "-50%" }}
            onClick={(e) => e.stopPropagation()}
          >
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

            <div
              className="login-modal-content"
              style={{
                display: "flex",
                flexDirection: "row",
                minHeight: "600px",
              }}
            >
              {/* Left Section - LOGIN */}
              <div
                style={{
                  flex: 1,
                  padding: "60px 50px",
                  borderRight: "1px solid rgba(212, 175, 55, 0.15)",
                }}
              >
                <h2 className="shimmer-text" style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "2.5rem",
                    fontWeight: 700,
                    color: "var(--luxury-gold)",
                    margin: "0 0 40px 0",
                    textTransform: "uppercase",
                    letterSpacing: "3px",
                  }}
                >
                  Login
                </h2>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    // Handle login logic here
                  }}
                >
                  <div style={{ marginBottom: "24px" }}>
                    <label
                      htmlFor="username"
                      style={{
                        display: "block",
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "0.9rem",
                        color: "rgba(255, 255, 255, 0.8)",
                        marginBottom: "10px",
                        fontWeight: 500,
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                      }}
                    >
                      Username or Email *
                    </label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      required
                      style={{
                        width: "100%",
                        padding: "16px 20px",
                        border: "2px solid rgba(212, 175, 55, 0.3)",
                        borderRadius: "8px",
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "1rem",
                        color: "rgba(255, 255, 255, 0.95)",
                        background: "rgba(255, 255, 255, 0.05)",
                        backdropFilter: "blur(10px)",
                        WebkitBackdropFilter: "blur(10px)",
                        outline: "none",
                        transition: "all 0.3s ease",
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = "var(--luxury-gold)";
                        e.target.style.background = "rgba(255, 255, 255, 0.08)";
                        e.target.style.boxShadow = "0 0 25px rgba(212, 175, 55, 0.4)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "rgba(212, 175, 55, 0.3)";
                        e.target.style.background = "rgba(255, 255, 255, 0.05)";
                        e.target.style.boxShadow = "none";
                      }}
                    />
                  </div>

                  <div style={{ marginBottom: "24px" }}>
                    <label
                      htmlFor="password"
                      style={{
                        display: "block",
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "0.9rem",
                        color: "rgba(255, 255, 255, 0.8)",
                        marginBottom: "10px",
                        fontWeight: 500,
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                      }}
                    >
                      Password *
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      required
                      style={{
                        width: "100%",
                        padding: "16px 20px",
                        border: "2px solid rgba(212, 175, 55, 0.3)",
                        borderRadius: "8px",
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "1rem",
                        color: "rgba(255, 255, 255, 0.95)",
                        background: "rgba(255, 255, 255, 0.05)",
                        backdropFilter: "blur(10px)",
                        WebkitBackdropFilter: "blur(10px)",
                        outline: "none",
                        transition: "all 0.3s ease",
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = "var(--luxury-gold)";
                        e.target.style.background = "rgba(255, 255, 255, 0.08)";
                        e.target.style.boxShadow = "0 0 25px rgba(212, 175, 55, 0.4)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "rgba(212, 175, 55, 0.3)";
                        e.target.style.background = "rgba(255, 255, 255, 0.05)";
                        e.target.style.boxShadow = "none";
                      }}
                    />
                  </div>

                  <div style={{ marginBottom: "30px", display: "flex", alignItems: "center" }}>
                    <input
                      type="checkbox"
                      id="remember"
                      name="remember"
                      style={{
                        marginRight: "10px",
                        width: "18px",
                        height: "18px",
                        cursor: "pointer",
                        accentColor: "var(--luxury-gold)",
                      }}
                    />
                    <label
                      htmlFor="remember"
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "0.9rem",
                        color: "rgba(255, 255, 255, 0.7)",
                        cursor: "pointer",
                        fontWeight: 400,
                      }}
                    >
                      Remember me
                    </label>
                  </div>

                  <motion.button
                    type="submit"
                    className="glow-gold ripple-effect"
                    style={{
                      width: "100%",
                      padding: "18px 30px",
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
                    Log In
                  </motion.button>

                  <div>
                    <Link
                      href="/lost-password"
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "0.9rem",
                        color: "rgba(255, 255, 255, 0.7)",
                        textDecoration: "none",
                        fontWeight: 400,
                        transition: "color 0.3s ease",
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.color = "var(--luxury-gold)"}
                      onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255, 255, 255, 0.7)"}
                      onClick={onClose}
                    >
                      Lost your password?
                    </Link>
                  </div>
                </form>
              </div>

              {/* Right Section - REGISTER */}
              <div
                style={{
                  flex: 1,
                  padding: "60px 50px",
                }}
              >
                <h2 className="shimmer-text" style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "2.5rem",
                    fontWeight: 700,
                    color: "var(--luxury-gold)",
                    margin: "0 0 40px 0",
                    textTransform: "uppercase",
                    letterSpacing: "3px",
                  }}
                >
                  Register
                </h2>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    // Handle registration logic here
                  }}
                >
                  <div style={{ marginBottom: "24px" }}>
                    <label
                      htmlFor="reg-username"
                      style={{
                        display: "block",
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "0.9rem",
                        color: "rgba(255, 255, 255, 0.8)",
                        marginBottom: "10px",
                        fontWeight: 500,
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                      }}
                    >
                      Username *
                    </label>
                    <input
                      type="text"
                      id="reg-username"
                      name="reg-username"
                      required
                      style={{
                        width: "100%",
                        padding: "16px 20px",
                        border: "2px solid rgba(212, 175, 55, 0.3)",
                        borderRadius: "8px",
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "1rem",
                        color: "rgba(255, 255, 255, 0.95)",
                        background: "rgba(255, 255, 255, 0.05)",
                        backdropFilter: "blur(10px)",
                        WebkitBackdropFilter: "blur(10px)",
                        outline: "none",
                        transition: "all 0.3s ease",
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = "var(--luxury-gold)";
                        e.target.style.background = "rgba(255, 255, 255, 0.08)";
                        e.target.style.boxShadow = "0 0 25px rgba(212, 175, 55, 0.4)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "rgba(212, 175, 55, 0.3)";
                        e.target.style.background = "rgba(255, 255, 255, 0.05)";
                        e.target.style.boxShadow = "none";
                      }}
                    />
                  </div>

                  <div style={{ marginBottom: "24px" }}>
                    <label
                      htmlFor="reg-email"
                      style={{
                        display: "block",
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "0.9rem",
                        color: "rgba(255, 255, 255, 0.8)",
                        marginBottom: "10px",
                        fontWeight: 500,
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                      }}
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="reg-email"
                      name="reg-email"
                      required
                      style={{
                        width: "100%",
                        padding: "16px 20px",
                        border: "2px solid rgba(212, 175, 55, 0.3)",
                        borderRadius: "8px",
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "1rem",
                        color: "rgba(255, 255, 255, 0.95)",
                        background: "rgba(255, 255, 255, 0.05)",
                        backdropFilter: "blur(10px)",
                        WebkitBackdropFilter: "blur(10px)",
                        outline: "none",
                        transition: "all 0.3s ease",
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = "var(--luxury-gold)";
                        e.target.style.background = "rgba(255, 255, 255, 0.08)";
                        e.target.style.boxShadow = "0 0 25px rgba(212, 175, 55, 0.4)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "rgba(212, 175, 55, 0.3)";
                        e.target.style.background = "rgba(255, 255, 255, 0.05)";
                        e.target.style.boxShadow = "none";
                      }}
                    />
                  </div>

                  <div style={{ marginBottom: "24px" }}>
                    <label
                      htmlFor="reg-password"
                      style={{
                        display: "block",
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "0.9rem",
                        color: "rgba(255, 255, 255, 0.8)",
                        marginBottom: "10px",
                        fontWeight: 500,
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                      }}
                    >
                      Password *
                    </label>
                    <input
                      type="password"
                      id="reg-password"
                      name="reg-password"
                      required
                      style={{
                        width: "100%",
                        padding: "16px 20px",
                        border: "2px solid rgba(212, 175, 55, 0.3)",
                        borderRadius: "8px",
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "1rem",
                        color: "rgba(255, 255, 255, 0.95)",
                        background: "rgba(255, 255, 255, 0.05)",
                        backdropFilter: "blur(10px)",
                        WebkitBackdropFilter: "blur(10px)",
                        outline: "none",
                        transition: "all 0.3s ease",
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = "var(--luxury-gold)";
                        e.target.style.background = "rgba(255, 255, 255, 0.08)";
                        e.target.style.boxShadow = "0 0 25px rgba(212, 175, 55, 0.4)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "rgba(212, 175, 55, 0.3)";
                        e.target.style.background = "rgba(255, 255, 255, 0.05)";
                        e.target.style.boxShadow = "none";
                      }}
                    />
                  </div>

                  <div style={{ marginBottom: "30px" }}>
                    <p
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "0.85rem",
                        color: "rgba(255, 255, 255, 0.6)",
                        lineHeight: "1.6",
                        margin: 0,
                        fontWeight: 400,
                      }}
                    >
                      Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our{" "}
                      <Link
                        href="/privacy-policy"
                        style={{
                          color: "var(--luxury-gold)",
                          textDecoration: "underline",
                          transition: "color 0.3s ease",
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.color = "var(--luxury-gold-light)"}
                        onMouseLeave={(e) => e.currentTarget.style.color = "var(--luxury-gold)"}
                        onClick={onClose}
                      >
                        privacy policy
                      </Link>
                      .
                    </p>
                  </div>

                  <motion.button
                    type="submit"
                    className="glow-gold ripple-effect"
                    style={{
                      width: "100%",
                      padding: "18px 30px",
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
                    }}
                    whileHover={{
                      background: "var(--luxury-gold)",
                      color: "var(--luxury-black)",
                      scale: 1.02,
                      boxShadow: "0 0 30px rgba(212, 175, 55, 0.6)",
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Register
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
