"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { FiX } from "react-icons/fi";

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

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="login-modal-overlay"
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
        ref={modalRef}
        className="login-modal"
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "90%",
          maxWidth: "900px",
          backgroundColor: "#ffffff",
          borderRadius: "4px",
          zIndex: 10001,
          opacity: isOpen ? 1 : 0,
          visibility: isOpen ? "visible" : "hidden",
          transition: "opacity 0.3s ease, visibility 0.3s ease, transform 0.3s ease",
          maxHeight: "90vh",
          overflowY: "auto",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "5px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 10002,
          }}
        >
          <FiX size={24} color="#1e1e1e" />
        </button>

        <div
          className="login-modal-content"
          style={{
            display: "flex",
            flexDirection: "row",
            minHeight: "500px",
          }}
        >
          {/* Left Section - LOGIN */}
          <div
            style={{
              flex: 1,
              padding: "60px 50px",
              borderRight: "1px solid #e0e0e0",
            }}
          >
            <h2
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "1.8rem",
                fontWeight: 400,
                color: "#1e1e1e",
                margin: "0 0 30px 0",
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
            >
              LOGIN
            </h2>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                // Handle login logic here
              }}
            >
              <div style={{ marginBottom: "20px" }}>
                <label
                  htmlFor="username"
                  style={{
                    display: "block",
                    fontFamily: "Raleway, sans-serif",
                    fontSize: "0.9rem",
                    color: "#333",
                    marginBottom: "8px",
                    fontWeight: 400,
                  }}
                >
                  Username or email address *
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  required
                  style={{
                    width: "100%",
                    padding: "12px 15px",
                    border: "1px solid #e0e0e0",
                    borderRadius: "0",
                    fontFamily: "Raleway, sans-serif",
                    fontSize: "0.95rem",
                    color: "#333",
                    backgroundColor: "#ffffff",
                    outline: "none",
                    transition: "border-color 0.3s ease",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#1e1e1e")}
                  onBlur={(e) => (e.target.style.borderColor = "#e0e0e0")}
                />
              </div>

              <div style={{ marginBottom: "20px" }}>
                <label
                  htmlFor="password"
                  style={{
                    display: "block",
                    fontFamily: "Raleway, sans-serif",
                    fontSize: "0.9rem",
                    color: "#333",
                    marginBottom: "8px",
                    fontWeight: 400,
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
                    padding: "12px 15px",
                    border: "1px solid #e0e0e0",
                    borderRadius: "0",
                    fontFamily: "Raleway, sans-serif",
                    fontSize: "0.95rem",
                    color: "#333",
                    backgroundColor: "#ffffff",
                    outline: "none",
                    transition: "border-color 0.3s ease",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#1e1e1e")}
                  onBlur={(e) => (e.target.style.borderColor = "#e0e0e0")}
                />
              </div>

              <div style={{ marginBottom: "25px", display: "flex", alignItems: "center" }}>
                <input
                  type="checkbox"
                  id="remember"
                  name="remember"
                  style={{
                    marginRight: "8px",
                    width: "16px",
                    height: "16px",
                    cursor: "pointer",
                  }}
                />
                <label
                  htmlFor="remember"
                  style={{
                    fontFamily: "Raleway, sans-serif",
                    fontSize: "0.9rem",
                    color: "#333",
                    cursor: "pointer",
                    fontWeight: 400,
                  }}
                >
                  Remember me
                </label>
              </div>

              <button
                type="submit"
                style={{
                  width: "100%",
                  padding: "14px 20px",
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
                Log in
              </button>

              <div>
                <Link
                  href="/lost-password"
                  style={{
                    fontFamily: "Raleway, sans-serif",
                    fontSize: "0.9rem",
                    color: "#333",
                    textDecoration: "none",
                    fontWeight: 400,
                  }}
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
            <h2
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "1.8rem",
                fontWeight: 400,
                color: "#1e1e1e",
                margin: "0 0 30px 0",
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
            >
              REGISTER
            </h2>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                // Handle registration logic here
              }}
            >
              <div style={{ marginBottom: "20px" }}>
                <label
                  htmlFor="reg-username"
                  style={{
                    display: "block",
                    fontFamily: "Raleway, sans-serif",
                    fontSize: "0.9rem",
                    color: "#333",
                    marginBottom: "8px",
                    fontWeight: 400,
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
                    padding: "12px 15px",
                    border: "1px solid #e0e0e0",
                    borderRadius: "0",
                    fontFamily: "Raleway, sans-serif",
                    fontSize: "0.95rem",
                    color: "#333",
                    backgroundColor: "#ffffff",
                    outline: "none",
                    transition: "border-color 0.3s ease",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#1e1e1e")}
                  onBlur={(e) => (e.target.style.borderColor = "#e0e0e0")}
                />
              </div>

              <div style={{ marginBottom: "20px" }}>
                <label
                  htmlFor="reg-email"
                  style={{
                    display: "block",
                    fontFamily: "Raleway, sans-serif",
                    fontSize: "0.9rem",
                    color: "#333",
                    marginBottom: "8px",
                    fontWeight: 400,
                  }}
                >
                  Email address *
                </label>
                <input
                  type="email"
                  id="reg-email"
                  name="reg-email"
                  required
                  style={{
                    width: "100%",
                    padding: "12px 15px",
                    border: "1px solid #e0e0e0",
                    borderRadius: "0",
                    fontFamily: "Raleway, sans-serif",
                    fontSize: "0.95rem",
                    color: "#333",
                    backgroundColor: "#ffffff",
                    outline: "none",
                    transition: "border-color 0.3s ease",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#1e1e1e")}
                  onBlur={(e) => (e.target.style.borderColor = "#e0e0e0")}
                />
              </div>

              <div style={{ marginBottom: "20px" }}>
                <label
                  htmlFor="reg-password"
                  style={{
                    display: "block",
                    fontFamily: "Raleway, sans-serif",
                    fontSize: "0.9rem",
                    color: "#333",
                    marginBottom: "8px",
                    fontWeight: 400,
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
                    padding: "12px 15px",
                    border: "1px solid #e0e0e0",
                    borderRadius: "0",
                    fontFamily: "Raleway, sans-serif",
                    fontSize: "0.95rem",
                    color: "#333",
                    backgroundColor: "#ffffff",
                    outline: "none",
                    transition: "border-color 0.3s ease",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#1e1e1e")}
                  onBlur={(e) => (e.target.style.borderColor = "#e0e0e0")}
                />
              </div>

              <div style={{ marginBottom: "25px" }}>
                <p
                  style={{
                    fontFamily: "Raleway, sans-serif",
                    fontSize: "0.85rem",
                    color: "#666",
                    lineHeight: "1.6",
                    margin: 0,
                    fontWeight: 400,
                  }}
                >
                  Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our{" "}
                  <Link
                    href="/privacy-policy"
                    style={{
                      color: "#333",
                      textDecoration: "underline",
                    }}
                    onClick={onClose}
                  >
                    privacy policy
                  </Link>
                  .
                </p>
              </div>

              <button
                type="submit"
                style={{
                  width: "100%",
                  padding: "14px 20px",
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
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#333")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#1e1e1e")}
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

