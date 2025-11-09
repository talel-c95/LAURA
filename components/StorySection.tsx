"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

export default function StorySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax transforms for split scroll effect
  const textY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const imageY = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const quote = `"Laura Rossa is the tale of my life – a story of a woman who dedicates time
and patience to what truly matters. My passion for fashion has been a timeless
source of inspiration, as a woman's sense of style is her most compelling
introduction. The unwavering support of those around me, their exceptional
talent, and the vibrant energy of Paris have shaped the vision of a brand that
exudes subtle elegance, simplicity, and refinement – all without a hint of
ostentation"`;

  const lines = quote.split('\n').filter(line => line.trim());

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const lineVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <section 
      ref={sectionRef}
      className="section cinematic-section gradient-shimmer-bg" 
      id="section_1856936819"
      style={{ 
        paddingTop: "100px", 
        paddingBottom: "100px", 
        minHeight: "600px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient light animation */}
      <div 
        style={{
          position: "absolute",
          top: "20%",
          right: "10%",
          width: "300px",
          height: "300px",
          background: "radial-gradient(circle, rgba(212, 175, 55, 0.2) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(40px)",
          animation: "pulseGlow 4s ease-in-out infinite",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />
      
      <div className="section-bg fill">
        <div className="is-border" style={{ borderWidth: "0px", margin: "0px" }}></div>
      </div>
      
      <div className="section-content relative" style={{ zIndex: 2 }}>
        <div className="row" id="row-1059064668">
          {/* Left: Text with line-by-line reveal */}
          <motion.div 
            ref={textRef}
            id="col-687568503" 
            className="col medium-7 small-12 large-9"
            style={{ y: textY }}
          >
            <div className="col-inner">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{
                  fontSize: "2.5rem",
                  fontWeight: 600,
                  marginBottom: "2rem",
                  fontFamily: "'Playfair Display', serif",
                }}
              >
                <span className="shimmer-text" style={{ fontSize: "80%", letterSpacing: "5px", textTransform: "uppercase" }}>
                  the untamed power of femininity
                </span>
              </motion.h2>
              <div id="gap-1480504710" className="gap-element clearfix" style={{ display: "block", height: "auto", paddingTop: "30px" }}></div>
              <motion.div 
                ref={textRef}
                id="text-691589429" 
                className="text"
                style={{ 
                  fontSize: "1.2rem", 
                  lineHeight: 2, 
                  textAlign: "left",
                  fontFamily: "'Poppins', sans-serif",
                }}
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                <p style={{ fontWeight: 300, color: "var(--luxury-text)", marginBottom: "1.5rem" }}>
                  <em style={{ fontStyle: "italic" }}>
                    {lines.map((line, i) => (
                      <motion.span
                        key={i}
                        variants={lineVariants}
                        style={{ display: "block", marginBottom: "0.5rem" }}
                      >
                        {line}
                      </motion.span>
                    ))}
                  </em>
                </p>
                <motion.p 
                  style={{ 
                    fontSize: "0.9rem",
                    color: "var(--luxury-gold)",
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 600,
                    letterSpacing: "1px",
                  }}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 1.5, duration: 0.8 }}
                >
                  — Hoda Alaia, founder and creative Director of the Laura Rossa French Brand
                </motion.p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Floating image with morph effect */}
          <motion.div 
            ref={imageRef}
            className="col medium-5 small-12 large-3"
            style={{ 
              y: imageY,
              opacity,
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="col-inner" style={{ height: "100%", display: "flex", alignItems: "center" }}>
              <motion.div
                className="float-animation glassmorphism"
                style={{
                  width: "100%",
                  height: "400px",
                  borderRadius: "8px",
                  border: "1px solid rgba(212, 175, 55, 0.2)",
                  position: "relative",
                  overflow: "hidden",
                }}
                whileHover={{ scale: 1.05 }}
              >
                {/* Perfume Image */}
                <Image
                  src="/images/laura_rossa_just_once_perfume_1.png.jpeg"
                  alt="Laura Rossa Perfume"
                  fill
                  className="story-perfume-image"
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                    transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                />
                {/* Cinematic morphing gradient overlay */}
                <motion.div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "linear-gradient(45deg, transparent 30%, rgba(212, 175, 55, 0.15) 50%, transparent 70%)",
                    backgroundSize: "200% 200%",
                    mixBlendMode: "overlay",
                  }}
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                {/* Glow effect */}
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "200px",
                    height: "200px",
                    background: "radial-gradient(circle, rgba(212, 175, 55, 0.2) 0%, transparent 70%)",
                    borderRadius: "50%",
                    filter: "blur(30px)",
                    animation: "pulseGlow 3s ease-in-out infinite",
                    pointerEvents: "none",
                  }}
                />
                {/* Shine overlay */}
                <div className="shine-overlay" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        /* Mobile responsive styles */
        @media (max-width: 768px) {
          #section_1856936819 {
            padding-top: 60px !important;
            padding-bottom: 60px !important;
            min-height: auto !important;
          }
          
          #section_1856936819 .row {
            flex-direction: column !important;
          }
          
          #section_1856936819 .col {
            width: 100% !important;
            max-width: 100% !important;
            margin-bottom: 30px !important;
          }
          
          #section_1856936819 .col-inner {
            padding-left: 0 !important;
            padding-right: 0 !important;
          }
          
          #section_1856936819 h2 {
            font-size: 2rem !important;
          }
          
          #section_1856936819 .text {
            font-size: 1rem !important;
            line-height: 1.6 !important;
          }
          
          /* Disable parallax on mobile */
          #section_1856936819 [style*="y:"] {
            transform: none !important;
          }
        }
        
        @media (max-width: 480px) {
          #section_1856936819 {
            padding-top: 40px !important;
            padding-bottom: 40px !important;
          }
          
          #section_1856936819 h2 {
            font-size: 1.5rem !important;
          }
          
          #section_1856936819 .text {
            font-size: 0.9rem !important;
          }
        }
      `}} />
    </section>
  );
}

