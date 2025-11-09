"use client";

import { useEffect, useRef, FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { FiSearch, FiX } from "react-icons/fi";
import { products } from "@/data/products";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface SearchLightboxProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchLightbox({ isOpen, onClose }: SearchLightboxProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<typeof products>([]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      // Focus on search input with slight delay for smooth animation
      if (inputRef.current) {
        setTimeout(() => inputRef.current?.focus(), 200);
      }
    } else {
      document.body.style.overflow = "";
      setSearchQuery("");
      setSearchResults([]);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Live search as user types
  useEffect(() => {
    if (searchQuery.trim().length > 0) {
      const query = searchQuery.toLowerCase().trim();
      const results = products.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query)
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    const handleOverlayClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.classList.contains("search-overlay-backdrop")) {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
      document.addEventListener("click", handleOverlayClick);
    }
    return () => {
      window.removeEventListener("keydown", handleEscape);
      document.removeEventListener("click", handleOverlayClick);
    };
  }, [isOpen, onClose]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const query = formData.get("search") as string;
    if (query && query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
      onClose();
    }
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const contentVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    exit: {
      y: -100,
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  const resultsVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-100%);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .search-overlay-backdrop {
          animation: fadeIn 0.3s ease-out;
        }
        
        .search-overlay-content {
          animation: slideDown 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .search-input:focus {
          background: #ffffff !important;
          box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.08);
        }
        
        .search-close-btn {
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .search-close-btn:hover {
          transform: scale(1.15) rotate(90deg);
          background-color: rgba(255, 255, 255, 0.15) !important;
        }
        
        .search-submit-btn {
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .search-submit-btn:hover {
          background: #1e1e1e !important;
          color: #ffffff !important;
        }
        
        .search-submit-btn:hover svg {
          color: #ffffff !important;
        }
        
        @media (max-width: 640px) {
          .search-overlay-form {
            flex-direction: column;
          }
          
          .search-overlay-input {
            width: 100% !important;
            border-radius: 12px 12px 0 0 !important;
          }
          
          .search-overlay-submit {
            width: 100% !important;
            border-radius: 0 0 12px 12px !important;
          }
        }
      `}} />
          <motion.div
            key="backdrop"
            className="search-overlay-backdrop"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
            style={{
              height: "100vh",
              width: "100vw",
              position: "fixed",
              zIndex: 10000,
              top: 0,
              left: 0,
              background: "rgba(0, 0, 0, 0.8)",
              backdropFilter: "blur(20px) saturate(180%)",
              WebkitBackdropFilter: "blur(20px) saturate(180%)",
            }}
          />
          
          {/* Search Content - Full Width Bar at Top */}
          <motion.div
            key="content"
            className="search-overlay-content glassmorphism"
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              width: "100%",
              background: "rgba(0, 0, 0, 0.95)",
              backdropFilter: "blur(30px) saturate(180%)",
              WebkitBackdropFilter: "blur(30px) saturate(180%)",
              borderBottom: "1px solid rgba(212, 175, 55, 0.3)",
              boxShadow: "0 4px 40px rgba(0, 0, 0, 0.5), 0 0 60px rgba(212, 175, 55, 0.1)",
              padding: "30px 0",
              zIndex: 10001,
            }}
          >
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              padding: "0 40px",
              display: "flex",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <form
              action="/search"
              method="get"
              onSubmit={handleSubmit}
              className="search-overlay-form"
              style={{
                display: "flex",
                flex: 1,
                alignItems: "center",
                gap: "15px",
              }}
            >
              <input
                ref={inputRef}
                type="text"
                placeholder="Search for products…"
                name="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input search-overlay-input"
                style={{
                  flex: 1,
                  padding: "18px 24px",
                  fontSize: "18px",
                  border: "2px solid rgba(212, 175, 55, 0.3)",
                  borderRadius: "8px",
                  background: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                  outline: "none",
                  color: "var(--luxury-text)",
                  transition: "all 0.3s ease",
                  fontFamily: "'Poppins', sans-serif",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "var(--luxury-gold)";
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.15)";
                  e.currentTarget.style.boxShadow = "0 0 20px rgba(212, 175, 55, 0.3)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "rgba(212, 175, 55, 0.3)";
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              />
              <input type="hidden" name="post_type" value="product" />
              <motion.button
                type="submit"
                className="search-submit-btn search-overlay-submit glow-gold"
                aria-label="Search"
                style={{
                  padding: "18px 30px",
                  background: "transparent",
                  fontSize: "16px",
                  border: "2px solid var(--luxury-gold)",
                  borderRadius: "8px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--luxury-gold)",
                  transition: "all 0.3s ease",
                  fontWeight: 600,
                  fontFamily: "'Poppins', sans-serif",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                }}
                whileHover={{
                  background: "var(--luxury-gold)",
                  color: "var(--luxury-black)",
                  scale: 1.05,
                }}
                whileTap={{ scale: 0.95 }}
              >
                <FiSearch size={20} style={{ marginRight: "8px" }} />
                Search
              </motion.button>
            </form>

            {/* Close Button */}
            <motion.button
              className="search-close-btn"
              onClick={onClose}
              title="Close Search (ESC)"
              aria-label="Close search overlay"
              style={{
                background: "rgba(212, 175, 55, 0.2)",
                border: "1px solid rgba(212, 175, 55, 0.5)",
                borderRadius: "50%",
                cursor: "pointer",
                color: "var(--luxury-gold)",
                padding: "12px",
                width: "44px",
                height: "44px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.3s ease",
              }}
              whileHover={{
                background: "rgba(212, 175, 55, 0.4)",
                scale: 1.1,
                rotate: 90,
                boxShadow: "0 0 20px rgba(212, 175, 55, 0.6)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <FiX size={24} />
            </motion.button>
          </div>

        {/* Search Results Dropdown */}
        {searchQuery.trim().length > 0 && (
          <div
            style={{
              position: "absolute",
              top: "100%",
              left: 0,
              right: 0,
              maxHeight: "70vh",
              overflowY: "auto",
              backgroundColor: "#ffffff",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
              zIndex: 10002,
              borderTop: "1px solid #e0e0e0",
            }}
          >
            <div
              style={{
                maxWidth: "1200px",
                margin: "0 auto",
                padding: "20px 40px",
              }}
            >
              {searchResults.length > 0 ? (
                <>
                  <p
                    style={{
                      fontFamily: "Raleway, sans-serif",
                      fontSize: "0.9rem",
                      color: "#666",
                      marginBottom: "15px",
                    }}
                  >
                    Found {searchResults.length} product{searchResults.length !== 1 ? "s" : ""}
                  </p>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                      gap: "20px",
                    }}
                  >
                    {searchResults.slice(0, 6).map((product) => (
                      <Link
                        key={product.id}
                        href={`/product/${product.slug}`}
                        onClick={onClose}
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          textDecoration: "none",
                          color: "inherit",
                          transition: "transform 0.2s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = "translateY(-2px)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "translateY(0)";
                        }}
                      >
                        <div
                          style={{
                            position: "relative",
                            width: "100%",
                            paddingTop: "133.33%",
                            backgroundColor: "#f5f5f5",
                            marginBottom: "10px",
                          }}
                        >
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            style={{ objectFit: "cover" }}
                            sizes="(max-width: 768px) 50vw, 200px"
                          />
                        </div>
                        <p
                          style={{
                            fontFamily: "Raleway, sans-serif",
                            fontSize: "0.85rem",
                            color: "#666",
                            marginBottom: "5px",
                            textTransform: "uppercase",
                          }}
                        >
                          {product.category}
                        </p>
                        <p
                          style={{
                            fontFamily: "Raleway, sans-serif",
                            fontSize: "0.95rem",
                            color: "#1e1e1e",
                            fontWeight: 500,
                            marginBottom: "5px",
                          }}
                        >
                          {product.name}
                        </p>
                        <p
                          style={{
                            fontFamily: "Montserrat, sans-serif",
                            fontSize: "0.9rem",
                            color: "#1e1e1e",
                            fontWeight: 400,
                          }}
                        >
                          {product.price.toFixed(2).replace(".", ",")} €
                        </p>
                      </Link>
                    ))}
                  </div>
                  {searchResults.length > 6 && (
                    <div style={{ marginTop: "20px", textAlign: "center" }}>
                      <Link
                        href={`/search?q=${encodeURIComponent(searchQuery)}`}
                        onClick={onClose}
                        style={{
                          fontFamily: "Raleway, sans-serif",
                          fontSize: "0.9rem",
                          color: "#1e1e1e",
                          textDecoration: "underline",
                        }}
                      >
                        View all {searchResults.length} results
                      </Link>
                    </div>
                  )}
                </>
              ) : (
                <div style={{ textAlign: "center", padding: "40px 20px" }}>
                  <p
                    style={{
                      fontFamily: "Raleway, sans-serif",
                      fontSize: "1rem",
                      color: "#666",
                      marginBottom: "10px",
                    }}
                  >
                    No products found for &quot;{searchQuery}&quot;
                  </p>
                  <p
                    style={{
                      fontFamily: "Raleway, sans-serif",
                      fontSize: "0.85rem",
                      color: "#999",
                    }}
                  >
                    Try searching with different keywords
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
        </motion.div>
      </>
      )}
    </AnimatePresence>
  );
}

