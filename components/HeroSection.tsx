"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Parallax motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    // Check if device is mobile/touch
    const isMobile = window.innerWidth <= 1024 || ('ontouchstart' in window);
    
    // Ensure video plays
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay was prevented
      });
    }

    // Create floating gold particles (only on desktop)
    const createParticles = () => {
      if (!particlesRef.current || isMobile) return;
      const particleCount = 15;
      
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement("div");
        particle.className = "sparkle-particle";
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 15}s`;
        particle.style.animationDuration = `${10 + Math.random() * 10}s`;
        particlesRef.current.appendChild(particle);
      }
    };

    createParticles();

    // Mouse parallax effect (only on desktop)
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current || isMobile) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      
      mouseX.set((x - 0.5) * 20);
      mouseY.set((y - 0.5) * 20);
      setMousePosition({ x, y });
    };

    const section = sectionRef.current;
    if (section && !isMobile) {
      section.addEventListener("mousemove", handleMouseMove);
      return () => section.removeEventListener("mousemove", handleMouseMove);
    }
  }, [mouseX, mouseY]);

  // Letter-by-letter animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.3,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const text1 = "The Just Once";
  const text2 = "Collection";

  return (
    <>
      <section 
        ref={sectionRef}
        className="section dark cinematic-section parallax-container" 
        id="section_1991124523"
        style={{
          paddingTop: "0px",
          paddingBottom: "0px",
          minHeight: "100vh",
          height: "100vh",
          backgroundColor: "var(--luxury-black)",
          position: "relative",
          overflow: "hidden",
        }}
      >
      {/* Parallax Background Layers */}
      <div className="section-bg fill">
        <div className="video-overlay no-click fill visible"></div>
        <video
          ref={videoRef}
          className="video-bg fill visible"
          preload=""
          playsInline
          autoPlay
          muted
          loop
          style={{
            filter: "brightness(0.3) contrast(1.2) saturate(1.1)",
            transition: "filter 0.3s ease",
          }}
          onMouseEnter={() => {
            if (videoRef.current) {
              videoRef.current.style.filter = "brightness(0.35) contrast(1.3) saturate(1.2)";
            }
          }}
          onMouseLeave={() => {
            if (videoRef.current) {
              videoRef.current.style.filter = "brightness(0.3) contrast(1.2) saturate(1.1)";
            }
          }}
        >
          <source src="/media/video.mp4" type="video/mp4" />
        </video>
        
        {/* Parallax mist layer */}
        <motion.div
          className="parallax-layer"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "radial-gradient(circle at 30% 50%, rgba(212, 175, 55, 0.15) 0%, transparent 50%)",
            zIndex: 1,
            x: useTransform(smoothX, [-20, 20], [-10, 10]),
            y: useTransform(smoothY, [-20, 20], [-10, 10]),
            animation: "pulseGlow 8s ease-in-out infinite",
          }}
        />
        
        {/* Dynamic gold dust overlay */}
        <motion.div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "radial-gradient(ellipse at 70% 30%, rgba(212, 175, 55, 0.1) 0%, transparent 60%)",
            zIndex: 1,
            x: useTransform(smoothX, [-20, 20], [5, -5]),
            y: useTransform(smoothY, [-20, 20], [5, -5]),
            animation: "goldDust 10s ease-in-out infinite",
          }}
        />
        
        {/* Cinematic light rays */}
        <motion.div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "linear-gradient(45deg, transparent 30%, rgba(212, 175, 55, 0.05) 50%, transparent 70%)",
            zIndex: 1,
            x: useTransform(smoothX, [-20, 20], [-15, 15]),
            animation: "cinematicSweep 12s ease-in-out infinite",
          }}
        />
        
        {/* Gold dust particles container */}
        <div 
          ref={particlesRef}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />
        
        <div 
          className="section-bg-overlay absolute fill"
          style={{ 
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 2,
          }}
        ></div>
      </div>

      {/* Content with parallax */}
      <motion.div 
        className="section-content relative hero-content-wrapper" 
        style={{ 
          height: "100%", 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "center",
          zIndex: 3,
          padding: "0 20px",
          x: useTransform(smoothX, [-20, 20], [-5, 5]),
          y: useTransform(smoothY, [-20, 20], [-5, 5]),
        }}
      >
        <div className="row align-center" id="row-887523622" style={{ width: "100%", maxWidth: "1200px", margin: "0 auto" }}>
          <div id="col-967784806" className="col medium-8 small-12 large-6">
            <motion.div 
              className="col-inner text-center hero-inner"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              style={{ padding: "0 15px" }}
            >
              <motion.div 
                id="text-2881550180" 
                className="text hero-title-container"
                style={{ 
                  fontSize: "2.25rem", 
                  lineHeight: 1.2,
                  marginBottom: "1rem",
                }}
              >
                <h3 className="hero-title-line1" style={{ margin: 0, fontSize: "3.5rem", fontWeight: 700 }}>
                  {text1.split("").map((char, i) => (
                    <motion.span
                      key={i}
                      className="shimmer-text"
                      variants={letterVariants}
                      style={{
                        display: "inline-block",
                        marginRight: char === " " ? "0.3em" : "0",
                      }}
                    >
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                </h3>
                <h3 className="hero-title-line2" style={{ margin: "0.5rem 0 0 0", fontSize: "3.5rem", fontWeight: 700 }}>
                  {text2.split("").map((char, i) => (
                    <motion.span
                      key={i}
                      className="shimmer-text"
                      variants={letterVariants}
                      style={{
                        display: "inline-block",
                        marginRight: char === " " ? "0.3em" : "0",
                      }}
                    >
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                </h3>
              </motion.div>
              <motion.div 
                id="text-1840490697" 
                className="text fade-up hero-subtitle"
                style={{ 
                  color: "var(--luxury-text)", 
                  marginTop: "2rem",
                  fontSize: "1.1rem",
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 300,
                  lineHeight: 1.6,
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                <p style={{ margin: 0, lineHeight: 1.6, padding: "0 10px" }}>
                  We believe in and stand alongside the modern woman—strong, elegant, and always on the
                  <br className="hero-br" /> move.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3, duration: 0.8 }}
                style={{ marginTop: "2.5rem" }}
                className="hero-cta"
              >
                <motion.button
                  className="ripple-effect glow-gold hero-button"
                  style={{
                    padding: "16px 48px",
                    background: "rgba(212, 175, 55, 0.1)",
                    border: "2px solid var(--luxury-gold)",
                    color: "var(--luxury-gold)",
                    fontSize: "1rem",
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 500,
                    textTransform: "uppercase",
                    letterSpacing: "3px",
                    cursor: "pointer",
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: "2px",
                    transition: "all 0.3s ease",
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 40px rgba(212, 175, 55, 0.6)",
                    background: "rgba(212, 175, 55, 0.15)",
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span style={{ position: "relative", zIndex: 1 }}>Explore Collection</span>
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
      <style dangerouslySetInnerHTML={{__html: `
        #section_1991124523 {
          min-height: 100vh;
          height: 100vh;
        }
        
        .hero-content-wrapper {
          padding: 0 20px !important;
        }
        
        .hero-inner {
          padding: 0 15px !important;
        }
        
        /* Mobile phones */
        @media (max-width: 480px) {
          #section_1991124523 {
            min-height: 100vh !important;
            height: 100vh !important;
            padding-top: 0 !important;
            padding-bottom: 0 !important;
          }
          
          .hero-content-wrapper {
            padding: 0 15px !important;
            align-items: center !important;
            justify-content: center !important;
          }
          
          .hero-inner {
            padding: 0 10px !important;
            width: 100% !important;
          }
          
          .hero-title-line1, .hero-title-line2 {
            font-size: 1.5rem !important;
            line-height: 1.2 !important;
            margin-bottom: 0.5rem !important;
          }
          
          .hero-title-container {
            margin-bottom: 1.5rem !important;
          }
          
          .hero-subtitle {
            font-size: 0.95rem !important;
            margin-top: 1.5rem !important;
            line-height: 1.5 !important;
          }
          
          .hero-subtitle p {
            font-size: 0.95rem !important;
            line-height: 1.5 !important;
            padding: 0 5px !important;
          }
          
          .hero-br {
            display: none !important;
          }
          
          .hero-cta {
            margin-top: 2rem !important;
          }
          
          .hero-button {
            padding: 14px 28px !important;
            font-size: 0.8rem !important;
            letter-spacing: 2px !important;
            width: auto !important;
            min-width: 200px !important;
          }
          
          #text-2881550180 {
            font-size: 1.2rem !important;
            margin-bottom: 0.5rem !important;
          }
          
          #col-967784806 {
            width: 100% !important;
            max-width: 100% !important;
            padding: 0 !important;
          }
        }
        
        /* Small tablets and large phones */
        @media (min-width: 481px) and (max-width: 768px) {
          #section_1991124523 {
            min-height: 100vh !important;
            height: 100vh !important;
          }
          
          .hero-content-wrapper {
            padding: 0 20px !important;
          }
          
          .hero-title-line1, .hero-title-line2 {
            font-size: 2rem !important;
            line-height: 1.2 !important;
          }
          
          .hero-subtitle {
            font-size: 1rem !important;
            margin-top: 1.5rem !important;
          }
          
          .hero-subtitle p {
            font-size: 1rem !important;
          }
          
          .hero-button {
            padding: 14px 36px !important;
            font-size: 0.85rem !important;
            letter-spacing: 2.5px !important;
          }
          
          .hero-cta {
            margin-top: 2rem !important;
          }
        }
        
        /* Medium screens */
        @media (min-width: 550px) and (max-width: 849px) {
          #section_1991124523 {
            min-height: 100vh;
            height: 100vh;
          }
          
          .hero-title-line1, .hero-title-line2 {
            font-size: 2.5rem !important;
          }
          
          .hero-subtitle {
            font-size: 1.05rem !important;
          }
        }
        
        /* Desktop */
        @media (min-width: 850px) {
          #section_1991124523 {
            min-height: 100vh;
            height: 100vh;
          }
          
          .hero-title-line1, .hero-title-line2 {
            font-size: 4rem;
          }
          
          .hero-content-wrapper {
            padding: 0 40px !important;
          }
        }
        
        /* Disable parallax on mobile */
        @media (max-width: 1024px) {
          .parallax-layer {
            transform: none !important;
          }
          
          .hero-content-wrapper {
            transform: none !important;
          }
        }
        
        /* Touch devices */
        @media (hover: none) and (pointer: coarse) {
          .parallax-layer {
            transform: none !important;
          }
          
          .hero-content-wrapper {
            transform: none !important;
          }
        }
      `}} />
    </section>
    </>
  );
}

