"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

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

  if (!isOpen) return null;

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
    <div
      id="main-menu"
      className={`mobile-sidebar no-scrollbar ${isOpen ? "" : "mfp-hide"}`}
      style={{ display: isOpen ? "block" : "none" }}
    >
      <div className="sidebar-menu no-scrollbar">
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
                      />
                      <input type="hidden" name="post_type" value="product" />
                      <input type="hidden" name="lang" value="en" />
                    </div>
                    <div className="flex-col">
                      <button
                        type="submit"
                        className="ux-search-submit submit-button secondary button icon mb-0"
                        aria-label="Submit"
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
          {navLinks.map((link) => (
            <li key={link.href} className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children">
              <Link href={link.href}>{link.label}</Link>
              {link.children && (
                <ul className="sub-menu nav-sidebar-ul children">
                  {link.children.map((child) => (
                    <li key={child.href} className="menu-item">
                      <Link href={child.href} onClick={onClose}>
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}

          {/* Account */}
          <li className="account-item has-icon menu-item">
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
            >
              <span className="header-account-title">Login</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

