"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiChevronDown, FiSearch, FiShoppingBag, FiMenu, FiX } from "react-icons/fi";
import MobileMenu from "./MobileMenu";
import SearchLightbox from "./SearchLightbox";
import CartDropdown from "./CartDropdown";
import LoginModal from "./LoginModal";
import { useCart } from "@/contexts/CartContext";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("EN");
  const { getTotalItems } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    // Set initial state
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isCartOpen]);

  const navLinks = [
    {
      href: "/shop",
      label: "SHOP",
      hasDropdown: true,
      children: [
        { href: "/product-category/clothing", label: "CLOTHING" },
        { href: "/product-category/shoes", label: "SHOES" },
        { href: "/product-category/perfumes", label: "PERFUMES" },
        { href: "/product-category/bags", label: "BAGS" },
        { href: "/product-category/sunglasses", label: "SUNGLASSES" },
      ],
    },
    { href: "/product-category/shoes/new-shoes-collection", label: "NEW COLLECTION" },
    { href: "/laura-rcg-the-story", label: "OUR STORY" },
  ];

  const languages = [
    { code: "EN", label: "EN", flag: "/images/en.svg", href: "/" },
    { code: "RO", label: "RO", flag: "/images/ro.svg", href: "/ro" },
    { code: "FR", label: "FR", flag: "/images/fr.svg", href: "/fr" },
    { code: "DE", label: "DE", flag: "/images/de.svg", href: "/de" },
    { code: "IT", label: "IT", flag: "/images/it.svg", href: "/it" },
  ];

  return (
    <>
      <header
        id="header"
        className={`header transparent has-transparent has-sticky sticky-shrink ${
          isScrolled ? "stuck" : ""
        }`}
      >
        <div className="header-wrapper">
          <div id="masthead" className="header-main show-logo-center">
            <div
              className="header-inner flex-row container logo-center medium-logo-center"
              role="navigation"
            >
              {/* Logo */}
              <div id="logo" className="flex-col logo">
                <Link href="/" title="Laura Rossa - the untamed power of femininity" rel="home">
                  <Image
                    width={396}
                    height={100}
                    src="/images/logo_2x.png"
                    className="header_logo header-logo"
                    alt="Laura Rossa"
                    priority
                  />
                  <Image
                    width={396}
                    height={100}
                    src="/images/logo_2x_white.png"
                    className="header-logo-dark"
                    alt="Laura Rossa"
                    priority
                  />
                </Link>
              </div>

              {/* Mobile Left Elements */}
              <div className="flex-col show-for-medium flex-left">
                <ul className="mobile-nav nav nav-left">
                  <li className="nav-icon has-icon">
                    <button
                      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                      className="is-small"
                      aria-label="Menu"
                      aria-controls="main-menu"
                      aria-expanded={isMobileMenuOpen}
                    >
                      <FiMenu size={24} />
                    </button>
                  </li>
                </ul>
              </div>

              {/* Desktop Left Navigation */}
              <div className="flex-col hide-for-medium flex-left">
                <ul className="header-nav header-nav-main nav nav-left nav-uppercase">
                  {navLinks.map((link) => (
                    <li
                      key={link.href}
                      className={`menu-item menu-item-design-default ${
                        link.hasDropdown ? "menu-item-has-children has-dropdown shop-dropdown-container" : ""
                      }`}
                      onMouseEnter={() => {
                        if (link.hasDropdown) {
                          setIsShopDropdownOpen(true);
                        }
                      }}
                      onMouseLeave={() => {
                        if (link.hasDropdown) {
                          setIsShopDropdownOpen(false);
                        }
                      }}
                    >
                      <Link
                        href={link.href}
                        className="nav-top-link"
                        aria-expanded={link.hasDropdown ? (isShopDropdownOpen ? "true" : "false") : undefined}
                        aria-haspopup={link.hasDropdown ? "menu" : undefined}
                        onClick={(e) => {
                          // On mobile/touch devices, toggle dropdown on click
                          if (link.hasDropdown && window.innerWidth <= 849) {
                            e.preventDefault();
                            setIsShopDropdownOpen(!isShopDropdownOpen);
                          }
                        }}
                      >
                        {link.label}
                        {link.hasDropdown && (
                          <FiChevronDown 
                            size={12} 
                            style={{ marginLeft: "4px", display: "inline-block", verticalAlign: "middle" }} 
                          />
                        )}
                      </Link>
                      {link.hasDropdown && link.children && (
                        <ul 
                          className={`shop-dropdown-menu ${isShopDropdownOpen ? "is-open" : ""}`}
                          role="menu"
                        >
                          {link.children.map((child) => (
                            <li key={child.href} className="shop-dropdown-item" role="menuitem">
                              <Link href={child.href} className="shop-dropdown-link">
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Desktop Right Elements */}
              <div className="flex-col hide-for-medium flex-right">
                <ul className="header-nav header-nav-main nav nav-right nav-uppercase">
                  <li className="account-item has-icon">
                    <Link
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setIsLoginOpen(true);
                      }}
                      className="nav-top-link nav-top-not-logged-in is-small"
                      title="Login"
                    >
                      <span>LOGIN</span>
                    </Link>
                  </li>
                  <li className="header-divider"></li>
                  <li className="cart-item has-icon has-dropdown" style={{ position: "relative" }}>
                    <Link
                      href="/cart"
                      onClick={(e) => {
                        e.preventDefault();
                        setIsCartOpen(!isCartOpen);
                      }}
                      className="header-cart-link is-small"
                      title="Cart"
                      style={{ display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}
                    >
                      <FiShoppingBag size={20} />
                      {getTotalItems() > 0 && (
                        <span
                          style={{
                            position: "absolute",
                            top: "-8px",
                            right: "-8px",
                            backgroundColor: "#1e1e1e",
                            color: "#ffffff",
                            borderRadius: "50%",
                            width: "18px",
                            height: "18px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "0.7rem",
                            fontWeight: 600,
                            fontFamily: "Raleway, sans-serif",
                          }}
                        >
                          {getTotalItems()}
                        </span>
                      )}
                    </Link>
                  </li>
                  <li className="header-divider"></li>
                  <li 
                    className="has-dropdown header-language-dropdown language-dropdown-container"
                    onMouseEnter={() => setIsLanguageDropdownOpen(true)}
                    onMouseLeave={() => setIsLanguageDropdownOpen(false)}
                  >
                    <Link 
                      href="#" 
                      className="language-dropdown-trigger"
                      aria-expanded={isLanguageDropdownOpen ? "true" : "false"}
                      aria-haspopup="menu"
                      onClick={(e) => {
                        // On mobile/touch devices, toggle dropdown on click
                        if (window.innerWidth <= 849) {
                          e.preventDefault();
                          setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
                        }
                      }}
                    >
                      {currentLanguage}{" "}
                      <FiChevronDown size={12} />
                    </Link>
                    <ul 
                      className={`language-dropdown-menu ${isLanguageDropdownOpen ? "is-open" : ""}`}
                      role="menu"
                    >
                      {languages.map((lang) => (
                        <li key={lang.code} className="language-dropdown-item" role="menuitem">
                          <Link
                            href={lang.href}
                            hrefLang={lang.code.toLowerCase()}
                            className="language-dropdown-link"
                            onClick={() => {
                              setCurrentLanguage(lang.code);
                              setIsLanguageDropdownOpen(false);
                            }}
                          >
                            {lang.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                  <li className="header-divider"></li>
                  <li className="header-search header-search-lightbox has-icon">
                    <button
                      onClick={() => setIsSearchOpen(true)}
                      className="is-small"
                      aria-label="Search"
                      style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        padding: "0",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <FiSearch size={20} />
                    </button>
                  </li>
                </ul>
              </div>

              {/* Mobile Right Elements */}
              <div className="flex-col show-for-medium flex-right">
                <ul className="mobile-nav nav nav-right">
                  <li className="header-search header-search-lightbox has-icon">
                    <button
                      onClick={() => setIsSearchOpen(true)}
                      className="is-small"
                      aria-label="Search"
                      style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        padding: "0",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <FiSearch size={24} />
                    </button>
                  </li>
                  <li className="has-dropdown header-language-dropdown">
                    <button>
                      {currentLanguage}{" "}
                      <FiChevronDown size={12} style={{ marginLeft: "4px" }} />
                    </button>
                  </li>
                  <li className="cart-item has-icon" style={{ position: "relative" }}>
                    <button
                      onClick={() => setIsCartOpen(!isCartOpen)}
                      className="header-cart-link is-small off-canvas-toggle nav-top-link"
                      title="Cart"
                      style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}
                    >
                      <FiShoppingBag size={24} />
                      {getTotalItems() > 0 && (
                        <span
                          style={{
                            position: "absolute",
                            top: "-8px",
                            right: "-8px",
                            backgroundColor: "#1e1e1e",
                            color: "#ffffff",
                            borderRadius: "50%",
                            width: "18px",
                            height: "18px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "0.7rem",
                            fontWeight: 600,
                            fontFamily: "Raleway, sans-serif",
                          }}
                        >
                          {getTotalItems()}
                        </span>
                      )}
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="header-bg-container fill">
            <div className="header-bg-image fill"></div>
            <div className="header-bg-color fill"></div>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onLoginClick={() => setIsLoginOpen(true)}
      />
      <SearchLightbox isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <CartDropdown isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </>
  );
}

