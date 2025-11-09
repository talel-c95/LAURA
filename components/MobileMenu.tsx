"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginClick?: () => void;
}

export default function MobileMenu({ isOpen, onClose, onLoginClick }: MobileMenuProps) {
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

  // Animation variants
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.2 } },
  };

  const menuVariants = {
    hidden: { x: "-100%", transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] } },
    visible: { x: 0, transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] } },
    exit: { x: "-100%", transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.4, ease: [0.4, 0, 0.2, 1] },
    }),
  };

  const navLinks = [
    {
      href: "/shop",
      label: "Shop",
      children: [
        { href: "/product-category/clothing", label: "Clothing" },
        { href: "/product-category/shoes", label: "Shoes" },
        { href: "/product-category/perfumes", label: "Perfumes" },
        { href: "/product-category/bags", label: "Bags" },
        { href: "/product-category/sunglasses", label: "Sunglasses" },
      ],
    },
    { href: "/product-category/shoes/new-shoes-collection", label: "NEW COLLECTION" },
    { href: "/laura-rcg-the-story", label: "Our Story" },
  ];

  const languages = [
    { code: "EN", label: "EN", flag: "/images/en.svg", href: "/" },
    { code: "RO", label: "RO", flag: "/images/ro.svg", href: "/ro" },
    { code: "FR", label: "FR", flag: "/images/fr.svg", href: "/fr" },
    { code: "DE", label: "DE", flag: "/images/de.svg", href: "/de" },
    { code: "IT", label: "IT", flag: "/images/it.svg", href: "/it" },
  ];

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <>
          {/* Glassmorphism Backdrop */}
          <motion.div
            key="backdrop"
            className="mobile-menu-backdrop"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "rgba(0, 0, 0, 0.7)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              zIndex: 9998,
            }}
          />
          
          {/* Mobile Menu Sidebar */}
          <motion.div
            key="menu"
            id="main-menu"
            className="mobile-sidebar no-scrollbar glassmorphism"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "85%",
              maxWidth: "400px",
              height: "100%",
              background: "rgba(0, 0, 0, 0.95)",
              backdropFilter: "blur(30px) saturate(180%)",
              WebkitBackdropFilter: "blur(30px) saturate(180%)",
              borderRight: "1px solid rgba(212, 175, 55, 0.2)",
              boxShadow: "0 0 60px rgba(0, 0, 0, 0.5), 0 0 40px rgba(212, 175, 55, 0.1)",
              zIndex: 9999,
              overflowY: "auto",
            }}
          >
            {/* Close Button */}
            <motion.button
              onClick={onClose}
              aria-label="Close menu"
              style={{
                position: "absolute",
                top: "20px",
                right: "20px",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: "rgba(212, 175, 55, 0.2)",
                border: "1px solid rgba(212, 175, 55, 0.5)",
                color: "var(--luxury-gold)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.3s ease",
                zIndex: 10,
              }}
              whileHover={{
                background: "rgba(212, 175, 55, 0.4)",
                scale: 1.1,
                boxShadow: "0 0 20px rgba(212, 175, 55, 0.6)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <FiX size={24} />
            </motion.button>

            {/* Ambient Light Effect */}
            <div
              style={{
                position: "absolute",
                top: "20%",
                right: "-50px",
                width: "200px",
                height: "200px",
                background: "radial-gradient(circle, rgba(212, 175, 55, 0.15) 0%, transparent 70%)",
                borderRadius: "50%",
                filter: "blur(40px)",
                pointerEvents: "none",
                zIndex: 1,
              }}
            />

            <div className="sidebar-menu no-scrollbar" style={{ padding: "80px 30px 30px", position: "relative", zIndex: 2 }}>
              <ul className="nav nav-sidebar nav-vertical nav-uppercase" data-tab="1">
                {/* Search Form */}
                <li className="header-search-form search-form html relative has-icon">
                  <div className="header-search-form-wrapper">
                    <div className="searchform-wrapper ux-search-box relative form-flat is-normal">
                      <form role="search" method="get" className="searchform" action="/">
                        <div className="flex-row relative">
                          <div className="flex-col flex-grow">
                            <label className="screen-reader-text" htmlFor="woocommerce-product-search-field-1">
                              Search for:
                            </label>
                            <input
                              type="search"
                              id="woocommerce-product-search-field-1"
                              className="search-field mb-0"
                              placeholder="Search…"
                              name="s"
                              style={{
                                background: "rgba(255, 255, 255, 0.1)",
                                border: "1px solid rgba(212, 175, 55, 0.3)",
                                color: "var(--luxury-text)",
                                borderRadius: "4px",
                                padding: "12px",
                              }}
                            />
                            <input type="hidden" name="post_type" value="product" />
                            <input type="hidden" name="lang" value="en" />
                          </div>
                          <div className="flex-col">
                            <button
                              type="submit"
                              className="ux-search-submit submit-button secondary button icon mb-0"
                              aria-label="Submit"
                              style={{
                                background: "rgba(212, 175, 55, 0.2)",
                                border: "1px solid rgba(212, 175, 55, 0.5)",
                                color: "var(--luxury-gold)",
                                borderRadius: "4px",
                              }}
                            >
                              <i className="icon-search"></i>
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </li>

                {/* Navigation Links */}
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.href}
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children"
                    custom={index}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    style={{
                      marginBottom: "20px",
                      listStyle: "none",
                    }}
                  >
                    <Link
                      href={link.href}
                      style={{
                        color: "var(--luxury-text)",
                        fontSize: "18px",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "2px",
                        textDecoration: "none",
                        display: "block",
                        padding: "12px 0",
                        borderBottom: "1px solid rgba(212, 175, 55, 0.2)",
                        transition: "all 0.3s ease",
                        fontFamily: "'Playfair Display', serif",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = "var(--luxury-gold)";
                        e.currentTarget.style.textShadow = "0 0 10px rgba(212, 175, 55, 0.5)";
                        e.currentTarget.style.borderBottomColor = "var(--luxury-gold)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = "var(--luxury-text)";
                        e.currentTarget.style.textShadow = "none";
                        e.currentTarget.style.borderBottomColor = "rgba(212, 175, 55, 0.2)";
                      }}
                    >
                      {link.label}
                    </Link>
                    {link.children && (
                      <motion.ul
                        className="sub-menu nav-sidebar-ul children"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        transition={{ delay: 0.2 + index * 0.1 }}
                        style={{
                          marginTop: "10px",
                          paddingLeft: "20px",
                          listStyle: "none",
                        }}
                      >
                        {link.children.map((child, childIndex) => (
                          <motion.li
                            key={child.href}
                            className="menu-item"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 + index * 0.1 + childIndex * 0.05 }}
                            style={{ marginBottom: "8px" }}
                          >
                            <Link
                              href={child.href}
                              onClick={onClose}
                              style={{
                                color: "var(--luxury-text)",
                                fontSize: "14px",
                                textDecoration: "none",
                                display: "block",
                                padding: "8px 0",
                                transition: "all 0.3s ease",
                                fontFamily: "'Poppins', sans-serif",
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.color = "var(--luxury-gold)";
                                e.currentTarget.style.paddingLeft = "10px";
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.color = "var(--luxury-text)";
                                e.currentTarget.style.paddingLeft = "0";
                              }}
                            >
                              {child.label}
                            </Link>
                          </motion.li>
                        ))}
                      </motion.ul>
                    )}
                  </motion.li>
                ))}

                {/* Account */}
                <motion.li
                  className="account-item has-icon menu-item"
                  custom={navLinks.length}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  style={{
                    marginTop: "30px",
                    paddingTop: "30px",
                    borderTop: "1px solid rgba(212, 175, 55, 0.2)",
                    listStyle: "none",
                  }}
                >
                  <Link
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      onClose();
                      if (onLoginClick) {
                        onLoginClick();
                      }
                    }}
                    className="nav-top-link nav-top-not-logged-in"
                    title="Login"
                    style={{
                      color: "var(--luxury-gold)",
                      fontSize: "16px",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "2px",
                      textDecoration: "none",
                      display: "inline-block",
                      padding: "12px 24px",
                      border: "2px solid var(--luxury-gold)",
                      borderRadius: "4px",
                      transition: "all 0.3s ease",
                      fontFamily: "'Poppins', sans-serif",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "var(--luxury-gold)";
                      e.currentTarget.style.color = "var(--luxury-black)";
                      e.currentTarget.style.boxShadow = "0 0 20px rgba(212, 175, 55, 0.6)";
                      e.currentTarget.style.transform = "scale(1.05)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.color = "var(--luxury-gold)";
                      e.currentTarget.style.boxShadow = "none";
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                  >
                    <span className="header-account-title">Login</span>
                  </Link>
                </motion.li>
              </ul>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

