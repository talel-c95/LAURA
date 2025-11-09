"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useMotionValue, useTransform, PanInfo } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface Category {
  name: string;
  href: string;
  image: string;
}

// Category images matching the reference design
const categories: Category[] = [
  { 
    name: "SHOES", 
    href: "/product-category/shoes", 
    image: "/images/shoes_hp.png" 
  },
  { 
    name: "PERFUMES", 
    href: "/product-category/perfumes", 
    image: "/images/laura_rossa_just_once_perfume_1.png.jpeg" 
  },
  { 
    name: "BAGS", 
    href: "/product-category/bags", 
    image: "/images/bags_hp.png" 
  },
  { 
    name: "SUNGLASSES", 
    href: "/product-category/sunglasses", 
    image: "/images/laurarossasunglassesrozette.jpg.jpeg" 
  },
];

export default function CategoryBanners() {
  const sectionRef = useRef<HTMLElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [cardsToShow, setCardsToShow] = useState(4);
  const [progress, setProgress] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Calculate cards to show based on screen size
  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(4); // Desktop: 4 cards
      } else if (window.innerWidth >= 768) {
        setCardsToShow(2); // Tablet: 2 cards
      } else {
        setCardsToShow(1); // Mobile: 1 card
      }
    };

    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);
    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  // Intersection Observer for parallax
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Create floating particles
  useEffect(() => {
    const container = document.querySelector('.carousel-particles');
    if (container) {
      const particleCount = 12;
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'sparkle-particle';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 15}s`;
        particle.style.animationDuration = `${10 + Math.random() * 10}s`;
        container.appendChild(particle);
      }
    }
  }, []);

  // Auto-play carousel with progress indicator
  useEffect(() => {
    if (!isAutoPlaying || isHovered || !isVisible) {
      setProgress(0);
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
      return;
    }

    setProgress(0);
    const duration = 5000; // 5 seconds
    const updateInterval = 50; // Update every 50ms for smooth progress
    const steps = duration / updateInterval;

    let currentStep = 0;
    progressIntervalRef.current = setInterval(() => {
      currentStep++;
      setProgress((currentStep / steps) * 100);
      
      if (currentStep >= steps) {
        setCurrentIndex((prev) => (prev + 1) % categories.length);
        setProgress(0);
        currentStep = 0;
      }
    }, updateInterval);

    return () => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    };
  }, [isAutoPlaying, isHovered, isVisible, currentIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isVisible) return;
      
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        setProgress(0);
        setCurrentIndex((prev) => (prev - 1 + categories.length) % categories.length);
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        setProgress(0);
        setCurrentIndex((prev) => (prev + 1) % categories.length);
      }
    };

    if (isVisible) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isVisible]);

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!carouselRef.current || !isVisible) return;
      
      const rect = carouselRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2; // -1 to 1
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2; // -1 to 1
      
      setMousePosition({ x, y });
    };

    if (isVisible) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isVisible]);

  // Create infinite loop array
  const getVisibleCards = () => {
    const visible: (Category & { index: number; isActive: boolean })[] = [];
    const totalCards = categories.length;

    for (let i = 0; i < cardsToShow; i++) {
      const cardIndex = (currentIndex + i) % totalCards;
      visible.push({
        ...categories[cardIndex],
        index: cardIndex,
        isActive: i === 0, // First card is active/centered
      });
    }

    return visible;
  };

  const goToNext = () => {
    setProgress(0);
    setCurrentIndex((prev) => (prev + 1) % categories.length);
  };

  const goToPrevious = () => {
    setProgress(0);
    setCurrentIndex((prev) => (prev - 1 + categories.length) % categories.length);
  };

  const goToSlide = (index: number) => {
    setProgress(0);
    setCurrentIndex(index);
  };

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 50;
    if (Math.abs(info.offset.x) > threshold) {
      if (info.offset.x > 0) {
        goToPrevious();
      } else {
        goToNext();
      }
    }
  };

  const visibleCards = getVisibleCards();

  return (
    <section 
      ref={sectionRef}
      className="section cinematic-section" 
      id="section_1026920328" 
      style={{ 
        paddingTop: "100px", 
        paddingBottom: "100px",
        backgroundColor: "var(--luxury-black)",
        position: "relative",
        overflow: "hidden",
        minHeight: "600px",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Parallax Background Layers */}
      <div 
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "radial-gradient(ellipse at 50% 50%, rgba(212, 175, 55, 0.15) 0%, transparent 70%)",
          zIndex: 1,
          pointerEvents: "none",
          animation: "pulseGlow 6s ease-in-out infinite",
        }}
      />
      
      {/* Floating gold particles */}
      <div 
        className="carousel-particles"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />
      
      <div className="section-bg fill"></div>
      <div className="section-content relative" style={{ zIndex: 2 }}>
        {/* Carousel Container with 3D Perspective */}
        <div 
          ref={carouselRef}
          className="carousel-container-3d"
          style={{
            position: "relative",
            width: "100%",
            minHeight: "500px",
            perspective: "1500px",
            perspectiveOrigin: "50% 50%",
            overflow: "visible",
            padding: "40px 0",
          }}
        >
          {/* Navigation Arrows - Minimalist with Gold Glow */}
          <motion.button
            className="carousel-nav carousel-nav-prev"
            onClick={goToPrevious}
            aria-label="Previous slide"
            style={{
              position: "absolute",
              left: "30px",
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 10,
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              background: "rgba(0, 0, 0, 0.3)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(212, 175, 55, 0.5)",
              color: "var(--luxury-gold)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
            whileHover={{ 
              scale: 1.15,
              background: "rgba(212, 175, 55, 0.2)",
              boxShadow: "0 0 30px rgba(212, 175, 55, 0.6)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <FiChevronLeft size={28} />
          </motion.button>

          <motion.button
            className="carousel-nav carousel-nav-next"
            onClick={goToNext}
            aria-label="Next slide"
            style={{
              position: "absolute",
              right: "30px",
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 10,
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              background: "rgba(0, 0, 0, 0.3)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(212, 175, 55, 0.5)",
              color: "var(--luxury-gold)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
            whileHover={{ 
              scale: 1.15,
              background: "rgba(212, 175, 55, 0.2)",
              boxShadow: "0 0 30px rgba(212, 175, 55, 0.6)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <FiChevronRight size={28} />
          </motion.button>

          {/* 3D Carousel Cards Container */}
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.1}
            onDragEnd={handleDragEnd}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "30px",
              width: "100%",
              padding: "0 100px",
              cursor: "grab",
            }}
            whileDrag={{ cursor: "grabbing" }}
            animate={{
              x: 0,
            }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
            }}
          >
            {visibleCards.map((card, position) => {
              const isActive = card.isActive;
              const distance = position;
              const scale = isActive ? 1 : 0.85;
              const opacity = isActive ? 1 : 0.6;
              const zIndex = isActive ? 10 : 5 - distance;
              const rotateY = (distance - (cardsToShow - 1) / 2) * 15;
              const blur = isActive ? 0 : 3;

              return (
                <motion.div
                  key={`${currentIndex}-${card.index}-${position}`}
                  className="carousel-card-3d"
                  style={{
                    flex: `0 0 ${100 / cardsToShow}%`,
                    maxWidth: `${100 / cardsToShow}%`,
                    position: "relative",
                    transformStyle: "preserve-3d",
                    willChange: isActive ? "transform, opacity" : "transform",
                  }}
                  initial={{ 
                    opacity: 0, 
                    scale: 0.8,
                    rotateY: rotateY + (isActive ? 0 : 20),
                    filter: `blur(${blur}px)`,
                  }}
                  animate={{
                    opacity,
                    scale,
                    rotateY: rotateY + (isActive ? mousePosition.x * 5 : 0),
                    rotateX: isActive ? mousePosition.y * -3 : 0,
                    filter: `blur(${blur}px)`,
                    z: isActive ? 50 : -50 * distance,
                    x: isActive ? mousePosition.x * 10 : 0,
                    y: isActive ? mousePosition.y * 10 : 0,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 25,
                    opacity: { duration: 0.5 },
                    rotateY: { duration: 0.3 },
                    rotateX: { duration: 0.3 },
                    x: { duration: 0.3 },
                    y: { duration: 0.3 },
                  }}
                  whileHover={{
                    scale: isActive ? 1.05 : 0.9,
                    rotateY: isActive ? rotateY + mousePosition.x * 8 + 5 : rotateY,
                    z: isActive ? 100 : -30,
                  }}
                >
                  <Link href={card.href} style={{ display: "block", height: "100%" }}>
                    <motion.div
                      className="carousel-card glassmorphism"
                      style={{
                        position: "relative",
                        width: "100%",
                        height: "450px",
                        borderRadius: "12px",
                        overflow: "hidden",
                        background: "rgba(0, 0, 0, 0.3)",
                        backdropFilter: "blur(20px)",
                        border: isActive 
                          ? "2px solid var(--luxury-gold)" 
                          : "1px solid rgba(212, 175, 55, 0.3)",
                        boxShadow: isActive
                          ? "0 20px 60px rgba(0, 0, 0, 0.5), 0 0 40px rgba(212, 175, 55, 0.3)"
                          : "0 10px 30px rgba(0, 0, 0, 0.3)",
                        transformStyle: "preserve-3d",
                        willChange: isActive ? "transform, box-shadow" : "transform",
                      }}
                      whileHover={{
                        boxShadow: isActive
                          ? "0 30px 80px rgba(0, 0, 0, 0.6), 0 0 60px rgba(212, 175, 55, 0.5)"
                          : "0 15px 40px rgba(0, 0, 0, 0.4)",
                      }}
                    >
                      {/* Product Image */}
                      <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
                        <Image
                          src={card.image}
                          alt={card.name}
                          fill
                          className="carousel-product-image"
                          style={{
                            objectFit: "cover",
                            objectPosition: "center",
                            transition: "transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
                          }}
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        />
                        
                        {/* Reflection Overlay */}
                        <div
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            background: "linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, transparent 50%)",
                            opacity: isActive ? 0.6 : 0.3,
                            pointerEvents: "none",
                          }}
                        />
                        
                        {/* Gold Gradient Overlay on Hover */}
                        <motion.div
                          className="carousel-gold-overlay"
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            background: "radial-gradient(circle at center, rgba(212, 175, 55, 0.2) 0%, transparent 70%)",
                            opacity: 0,
                            pointerEvents: "none",
                          }}
                          whileHover={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                        
                        {/* Shine Sweep */}
                        <div className="shine-overlay" />
                        
                        {/* Depth Shadow */}
                        <div
                          style={{
                            position: "absolute",
                            bottom: "-20px",
                            left: "50%",
                            transform: "translateX(-50%)",
                            width: "80%",
                            height: "40px",
                            background: "radial-gradient(ellipse, rgba(0, 0, 0, 0.4) 0%, transparent 70%)",
                            filter: "blur(20px)",
                            opacity: isActive ? 0.8 : 0.4,
                            pointerEvents: "none",
                          }}
                        />
                        
                        {/* Vignette Effect */}
                        <div
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            background: "radial-gradient(circle at center, transparent 0%, rgba(0, 0, 0, 0.3) 100%)",
                            opacity: isActive ? 0.5 : 0.3,
                            pointerEvents: "none",
                          }}
                        />
                      </div>

                      {/* Category Label with Shimmer */}
                      <motion.div
                        className="carousel-label"
                        style={{
                          position: "absolute",
                          bottom: "30px",
                          left: "50%",
                          transform: "translateX(-50%)",
                          zIndex: 5,
                          textAlign: "center",
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                      >
                        <motion.span
                          className="shimmer-text"
                          style={{
                            fontSize: "28px",
                            fontWeight: 700,
                            fontFamily: "'Playfair Display', serif",
                            textTransform: "uppercase",
                            letterSpacing: "4px",
                            textShadow: "0 2px 20px rgba(0, 0, 0, 0.8), 0 0 30px rgba(212, 175, 55, 0.6)",
                            display: "block",
                          }}
                          whileHover={{ scale: 1.1 }}
                        >
                          {card.name}
                        </motion.span>
                      </motion.div>
                    </motion.div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Progress Indicator */}
          {isAutoPlaying && !isHovered && (
            <div
              style={{
                position: "absolute",
                bottom: "30px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "200px",
                height: "2px",
                background: "rgba(255, 255, 255, 0.1)",
                borderRadius: "2px",
                overflow: "hidden",
                zIndex: 10,
              }}
            >
              <motion.div
                style={{
                  width: "100%",
                  height: "100%",
                  background: "linear-gradient(90deg, var(--luxury-gold) 0%, var(--luxury-gold-light) 100%)",
                  boxShadow: "0 0 10px rgba(212, 175, 55, 0.6)",
                }}
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.05, ease: "linear" }}
              />
            </div>
          )}
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        .carousel-container-3d {
          position: relative;
        }
        
        .carousel-card-3d {
          transform-style: preserve-3d;
        }
        
        .carousel-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .carousel-card:hover .carousel-product-image {
          transform: scale(1.1) !important;
        }
        
        .carousel-product-image {
          transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1) !important;
        }
        
        /* Floating Animation for Active Card */
        @keyframes floatCard {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .carousel-card-3d:first-child .carousel-card {
          animation: floatCard 6s ease-in-out infinite;
        }
        
        /* Parallax scroll effect */
        @media (min-width: 1024px) {
          .carousel-container-3d {
            padding: 40px 120px;
          }
          
          .carousel-card {
            height: 500px !important;
          }
        }
        
        @media (min-width: 768px) and (max-width: 1023px) {
          .carousel-container-3d {
            padding: 40px 80px;
          }
          
          .carousel-card {
            height: 450px !important;
          }
          
          .carousel-nav {
            width: 50px !important;
            height: 50px !important;
            left: 15px !important;
            right: 15px !important;
          }
        }
        
        @media (max-width: 767px) {
          .carousel-container-3d {
            padding: 40px 60px;
          }
          
          .carousel-card {
            height: 400px !important;
          }
          
          .carousel-nav {
            width: 45px !important;
            height: 45px !important;
            left: 10px !important;
            right: 10px !important;
          }
          
          .carousel-nav svg {
            width: 20px !important;
            height: 20px !important;
          }
          
          .carousel-label span {
            font-size: 20px !important;
            letter-spacing: 2px !important;
          }
        }
      `}} />
    </section>
  );
}

