"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const sparkleContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create sparkles in footer
    const createSparkles = () => {
      if (!sparkleContainerRef.current) return;
      const sparkleCount = 20;
      
      for (let i = 0; i < sparkleCount; i++) {
        const sparkle = document.createElement("div");
        sparkle.className = "sparkle-particle";
        sparkle.style.left = `${Math.random() * 100}%`;
        sparkle.style.animationDelay = `${Math.random() * 15}s`;
        sparkle.style.animationDuration = `${10 + Math.random() * 10}s`;
        sparkleContainerRef.current.appendChild(sparkle);
      }
    };

    createSparkles();
  }, []);

  const footerLinks = [
    { href: "/delivery-and-payment", label: "Delivery and payment" },
    { href: "/return-policy", label: "Return Policy" },
    { href: "/terms", label: "Terms & Conditions" },
    { href: "/disclaimer", label: "Disclaimer" },
    { href: "/imprint", label: "Imprint" },
    { href: "/privacy-statement-eu", label: "Privacy Statement (EU)" },
    { href: "/cookie-policy-eu", label: "Cookie Policy (EU)" },
    { href: "https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=RO", label: "Platforma SOL", external: true },
    { href: "/laura-rcg-the-story", label: "Our Story" },
  ];

  return (
    <footer 
      id="footer" 
      ref={footerRef}
      className="footer-wrapper gradient-shimmer-bg"
      style={{
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Sparkle Container */}
      <div 
        ref={sparkleContainerRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />
      
      {/* FOOTER 1 */}
      <div className="footer-widgets footer footer-1" style={{ position: "relative", zIndex: 2 }}>
        <div className="row large-columns-3 mb-0">
          <div id="custom_html-3" className="widget_text col pb-0 widget widget_custom_html">
            <div className="textwidget custom-html-widget">
                <div style={{ fontSize: "14px", padding: "20px", position: "relative", zIndex: 2 }}>
                <div style={{ maxWidth: "600px", margin: "0 auto", textAlign: "left" }}>
                  <p 
                    className="shimmer-text"
                    style={{ 
                      fontWeight: "bold", 
                      fontSize: "20px", 
                      marginBottom: "15px",
                      fontFamily: "'Playfair Display', serif",
                    }}
                  >
                    Laura Rossa
                  </p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "10px",
                      marginBottom: "5px",
                    }}
                  >
                    <div style={{ width: "32px", minWidth: "32px" }}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 800 800"
                      >
                        <path
                          fill="#CCC"
                          fillRule="evenodd"
                          d="M400 225c-41.425 0-75 33.575-75 75s33.575 75 75 75 75-33.575 75-75-33.575-75-75-75Zm0 200c-69.025 0-125-55.95-125-125s55.975-125 125-125 125 55.95 125 125-55.975 125-125 125Zm0-425C234.325 0 100 134.325 100 300c0 125.45 250.125 500.275 300 500 49.1.275 300-376.25 300-500C700 134.325 565.675 0 400 0Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <span style={{ fontWeight: "bold" }}>78 avenue des Champs-Élysées</span>
                      <span> 75008 Paris, France</span>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "10px",
                      marginBottom: "5px",
                    }}
                  >
                    <div style={{ width: "32px", minWidth: "32px" }}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 800 800"
                      >
                        <path
                          fill="#CCC"
                          fillRule="evenodd"
                          d="M400 225c-41.425 0-75 33.575-75 75s33.575 75 75 75 75-33.575 75-75-33.575-75-75-75Zm0 200c-69.025 0-125-55.95-125-125s55.975-125 125-125 125 55.95 125 125-55.975 125-125 125Zm0-425C234.325 0 100 134.325 100 300c0 125.45 250.125 500.275 300 500 49.1.275 300-376.25 300-500C700 134.325 565.675 0 400 0Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <span style={{ fontWeight: "bold" }}>
                        The Grand Avenue, JW Marriot Grand Hotel Bucharest
                      </span>
                      <span> Calea 13 Septembrie nr. 90, Sector 5, București, România</span>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "10px",
                      marginBottom: "15px",
                    }}
                  >
                    <div style={{ width: "32px", minWidth: "32px" }}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 800 800"
                      >
                        <path
                          fill="#CCC"
                          fillRule="evenodd"
                          d="M400 225c-41.425 0-75 33.575-75 75s33.575 75 75 75 75-33.575 75-75-33.575-75-75-75Zm0 200c-69.025 0-125-55.95-125-125s55.975-125 125-125 125 55.95 125 125-55.975 125-125 125Zm0-425C234.325 0 100 134.325 100 300c0 125.45 250.125 500.275 300 500 49.1.275 300-376.25 300-500C700 134.325 565.675 0 400 0Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <span style={{ fontWeight: "bold" }}>Scheffelstraße 18</span>
                      <span> 68723 Schwetzingen, Germany</span>
                    </div>
                  </div>
                  <div 
                    className="footer-social-icons"
                    style={{ display: "flex", gap: "20px", marginTop: "20px" }}
                  >
                    <a
                      href="https://www.facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                      style={{
                        display: "inline-block",
                        transition: "all 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-5px) scale(1.15)";
                        e.currentTarget.style.filter = "drop-shadow(0 0 15px rgba(212, 175, 55, 0.8))";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0) scale(1)";
                        e.currentTarget.style.filter = "none";
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        fill="none"
                        viewBox="0 0 800 800"
                        style={{
                          fill: "var(--luxury-gold)",
                          transition: "fill 0.3s ease",
                        }}
                      >
                        <path
                          d="M737.5 0h-675C27.969 0 0 27.969 0 62.5v675C0 772.031 27.969 800 62.5 800h675c34.531 0 62.5-27.969 62.5-62.5v-675C800 27.969 772.031 0 737.5 0ZM488.281 332.188l-4.531 59.843h-61.406v207.813h-77.5V392.031h-41.407v-59.843h41.407v-40.157c0-17.656.468-45 13.281-62.031 13.594-17.969 32.187-30.156 64.219-30.156 52.187 0 74.062 7.5 74.062 7.5l-10.312 61.25s-17.188-5-33.282-5c-16.093 0-30.468 5.781-30.468 21.875v46.719h65.937Z"
                        />
                      </svg>
                    </a>
                    <a
                      href="https://www.instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      style={{
                        display: "inline-block",
                        transition: "all 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-5px) scale(1.15)";
                        e.currentTarget.style.filter = "drop-shadow(0 0 15px rgba(212, 175, 55, 0.8))";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0) scale(1)";
                        e.currentTarget.style.filter = "none";
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        fill="none"
                        viewBox="0 0 800 800"
                        style={{
                          fill: "var(--luxury-gold)",
                          transition: "fill 0.3s ease",
                        }}
                      >
                        <path
                          d="M400 470.313c38.75 0 70.469-31.563 70.469-70.469 0-15.313-5-29.531-13.281-41.094-12.813-17.656-33.594-29.375-57.032-29.375-23.437 0-44.218 11.563-57.031 29.375-8.281 11.563-13.281 25.781-13.281 41.094-.156 38.906 31.406 70.469 70.156 70.469Zm153.75-156.407v-67.812H545l-59.062.156.312 67.812 67.5-.156Z"
                        />
                        <path
                          d="M737.5 0h-675C27.969 0 0 27.969 0 62.5v675C0 772.031 27.969 800 62.5 800h675c34.531 0 62.5-27.969 62.5-62.5v-675C800 27.969 772.031 0 737.5 0ZM600 358.906v163.75C600 565.312 565.312 600 522.656 600H277.344C234.688 600 200 565.312 200 522.656V277.187c0-42.656 34.688-77.343 77.344-77.343h245.312c42.656 0 77.344 34.687 77.344 77.343v81.719Z"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          <div id="nav_menu-4" className="col pb-0 widget widget_nav_menu">
            <div className="menu-footer_menu-container">
              <ul id="menu-footer_menu" className="menu">
                {footerLinks.map((link) => (
                  <li key={link.href} className="menu-item">
                    {link.external ? (
                      <a href={link.href} target="_blank" rel="noopener noreferrer">
                        {link.label}
                      </a>
                    ) : (
                      <Link href={link.href}>{link.label}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER 2 */}
      <div className="footer-widgets footer footer-2 dark" style={{ position: "relative", zIndex: 2 }}>
        <div className="row dark large-columns-4 mb-0">
          <div id="media_image-5" className="col pb-0 widget widget_media_image">
            <a href="https://netopia-payments.com/" target="_blank" rel="noopener noreferrer">
              <Image
                src="/images/np-black-0.svg"
                alt="Payment"
                width={200}
                height={50}
                className="image wp-image-21000 attachment-full size-full"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </a>
          </div>
        </div>
      </div>

      <div 
        className="absolute-footer light medium-text-center small-text-center glassmorphism"
        style={{
          position: "relative",
          zIndex: 2,
          borderTop: "1px solid rgba(212, 175, 55, 0.2)",
        }}
      >
        <div className="container clearfix">
          <div className="footer-primary pull-left">
            <div 
              className="copyright-footer"
              style={{
                color: "var(--luxury-text)",
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              Copyright 2025 © <strong style={{ color: "var(--luxury-gold)" }}>Laura Rossa</strong>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#top"
        className="back-to-top button icon invert plain fixed bottom z-1 is-outline round pulse-glow"
        id="top-link"
        aria-label="Go to top"
        style={{
          bottom: "30px",
          right: "30px",
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          background: "var(--luxury-gold)",
          border: "2px solid var(--luxury-gold)",
          color: "var(--luxury-black)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "all 0.3s ease",
          zIndex: 1000,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-5px) scale(1.1)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0) scale(1)";
        }}
      >
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
          style={{ color: "var(--luxury-black)" }}
        >
          <path d="M18 15l-6-6-6 6"></path>
        </svg>
      </a>
    </footer>
  );
}

