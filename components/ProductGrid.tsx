"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Product } from "@/types";

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  // Create floating particles on product hover
  useEffect(() => {
    if (hoveredProduct) {
      const particlesContainer = document.querySelector(`[data-product-id="${hoveredProduct}"] .product-particles`);
      if (particlesContainer) {
        const particleCount = 8;
        for (let i = 0; i < particleCount; i++) {
          const particle = document.createElement("div");
          particle.className = "sparkle-particle";
          particle.style.left = `${Math.random() * 100}%`;
          particle.style.top = `${Math.random() * 100}%`;
          particle.style.animationDelay = `${Math.random() * 2}s`;
          particle.style.animationDuration = `${3 + Math.random() * 2}s`;
          particlesContainer.appendChild(particle);
        }
        return () => {
          particlesContainer.innerHTML = "";
        };
      }
    }
  }, [hoveredProduct]);

  // 3D tilt handler
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, productId: string) => {
    if (window.innerWidth <= 768) return; // Disable on mobile
    
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 15;
    const rotateY = (centerX - x) / 15;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <>
      <div id="gap-38203293" className="gap-element clearfix" style={{ display: "block", height: "auto", paddingTop: "60px" }}></div>
      <motion.div 
        ref={containerRef}
        className="row large-columns-2 medium-columns- small-columns- row-large"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {products.map((product, index) => (
          <motion.div 
            key={product.id} 
            className="col"
            variants={itemVariants}
          >
            <div className="col-inner">
              <div className="badge-container absolute left top z-1"></div>
              <motion.div 
                className="product-small box has-hover box-normal box-text-bottom tilt-3d"
                onMouseMove={(e) => handleMouseMove(e, product.id)}
                onMouseLeave={handleMouseLeave}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                style={{
                  transformStyle: "preserve-3d",
                  position: "relative",
                }}
              >
                <div 
                  className="box-image" 
                  style={{ 
                    position: "relative", 
                    width: "100%", 
                    paddingTop: "133.33%",
                    overflow: "hidden",
                  }}
                >
                  <div className="image-zoom" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}>
                    <Link
                      href={`/product/${product.slug}`}
                      aria-label={`${product.name} ${product.description}`}
                      onMouseEnter={() => setHoveredProduct(product.id)}
                      onMouseLeave={() => setHoveredProduct(null)}
                      style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", display: "block" }}
                    >
                      {hoveredProduct === product.id && product.hoverImage ? (
                        <Image
                          src={product.hoverImage}
                          alt={product.name}
                          fill
                          className="show-on-hover absolute fill hide-for-small back-image"
                          sizes="(max-width: 765px) 100vw, 765px"
                          style={{ 
                            objectFit: "cover",
                            transition: "opacity 0.4s ease",
                          }}
                        />
                      ) : null}
                      <Image
                        src={product.image}
                        alt={`${product.name} ${product.description}`}
                        fill
                        className="attachment-original size-original product-image-main"
                        sizes="(max-width: 1020px) 100vw, 1020px"
                        style={{ 
                          objectFit: "cover",
                          transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                        }}
                      />
                      {/* Shine overlay */}
                      <div className="shine-overlay" />
                      {/* Gold glow on hover */}
                      {hoveredProduct === product.id && (
                        <>
                          <div 
                            style={{
                              position: "absolute",
                              top: 0,
                              left: 0,
                              width: "100%",
                              height: "100%",
                              background: "radial-gradient(circle at center, rgba(212, 175, 55, 0.2) 0%, transparent 70%)",
                              pointerEvents: "none",
                              transition: "opacity 0.3s ease",
                            }}
                          />
                          {/* Floating gold particles on hover */}
                          <div 
                            className="product-particles"
                            data-product-id={product.id}
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
                        </>
                      )}
                    </Link>
                  </div>
                  <div className="image-tools top right show-on-hover"></div>
                  <div className="image-tools grid-tools text-center hide-for-small bottom hover-slide-in show-on-hover"></div>
                </div>
                <motion.div 
                  className="box-text text-center is-large glassmorphism"
                  style={{ 
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                    borderTop: hoveredProduct === product.id ? "2px solid var(--luxury-gold)" : "2px solid transparent",
                    transition: "border-color 0.3s ease",
                  }}
                  whileHover={{
                    backgroundColor: "rgba(0, 0, 0, 0.85)",
                  }}
                >
                  <div className="title-wrapper">
                    <p className="name product-title woocommerce-loop-product__title">
                      <Link
                        href={`/product/${product.slug}`}
                        className={`woocommerce-LoopProduct-link woocommerce-loop-product__link ${hoveredProduct === product.id ? "shimmer-text" : ""}`}
                        style={{
                          color: hoveredProduct === product.id ? "var(--luxury-gold)" : "var(--luxury-text)",
                          transition: "color 0.3s ease, text-shadow 0.3s ease",
                          textShadow: hoveredProduct === product.id ? "0 0 10px rgba(212, 175, 55, 0.5)" : "none",
                          fontFamily: hoveredProduct === product.id ? "'Playfair Display', serif" : "'Poppins', sans-serif",
                        }}
                      >
                        {product.name}{" "}
                        <desc style={{ 
                          display: "block", 
                          fontSize: "0.9em",
                          opacity: 0.8,
                          marginTop: "0.5rem",
                          fontFamily: "'Poppins', sans-serif",
                        }}>
                          {product.description}
                        </desc>
                      </Link>
                    </p>
                  </div>
                  <div className="price-wrapper">
                    <span 
                      className="price"
                      style={{
                        color: "var(--luxury-gold)",
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "1.3rem",
                        fontWeight: 600,
                      }}
                    >
                      <span className="woocommerce-Price-amount amount">
                        <bdi>
                          {product.price.toFixed(2).replace(".", ",")}{" "}
                          <span className="woocommerce-Price-currencySymbol">€</span>
                        </bdi>
                      </span>
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <style dangerouslySetInnerHTML={{__html: `
        .product-image-main {
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1) !important;
        }
        
        .tilt-3d:hover .product-image-main {
          transform: scale(1.1);
        }
        
        .tilt-3d {
          transition: box-shadow 0.3s ease;
        }
        
        .tilt-3d:hover {
          box-shadow: 0 20px 60px rgba(212, 175, 55, 0.3),
                      0 0 80px rgba(212, 175, 55, 0.1);
        }
        
        /* Mobile responsive styles */
        @media (max-width: 768px) {
          .product-small {
            margin-bottom: 20px !important;
          }
          
          .box-text {
            padding: 15px !important;
          }
          
          .product-title {
            font-size: 1rem !important;
          }
          
          .price {
            font-size: 1.1rem !important;
          }
          
          .tilt-3d:hover .product-image-main {
            transform: scale(1.05) !important;
          }
          
          .product-particles {
            display: none !important;
          }
        }
        
        @media (max-width: 480px) {
          .product-title {
            font-size: 0.9rem !important;
          }
          
          .price {
            font-size: 1rem !important;
          }
          
          .box-text {
            padding: 12px !important;
          }
        }
      `}} />
    </>
  );
}

