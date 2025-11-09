"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";

export default function OurStoryPage() {
  const heroRef = useRef<HTMLElement>(null);
  const quoteRef = useRef<HTMLElement>(null);
  const missionRef = useRef<HTMLElement>(null);
  const meaningRef = useRef<HTMLElement>(null);
  const traditionRef = useRef<HTMLElement>(null);
  const evolutionRef = useRef<HTMLElement>(null);
  const aestheticsRef = useRef<HTMLElement>(null);
  const journeyRef = useRef<HTMLElement>(null);
  const productsRef = useRef<HTMLElement>(null);
  const collectionsRef = useRef<HTMLElement>(null);

  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const quoteInView = useInView(quoteRef, { once: true, margin: "-100px" });
  const missionInView = useInView(missionRef, { once: true, margin: "-100px" });
  const meaningInView = useInView(meaningRef, { once: true, margin: "-100px" });
  const traditionInView = useInView(traditionRef, { once: true, margin: "-100px" });
  const evolutionInView = useInView(evolutionRef, { once: true, margin: "-100px" });
  const aestheticsInView = useInView(aestheticsRef, { once: true, margin: "-100px" });
  const journeyInView = useInView(journeyRef, { once: true, margin: "-100px" });
  const productsInView = useInView(productsRef, { once: true, margin: "-100px" });
  const collectionsInView = useInView(collectionsRef, { once: true, margin: "-100px" });

  // Scroll parallax for hero image
  const { scrollYProgress } = useScroll();
  const heroImageY = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  // Text reveal variants
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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
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

  // Create floating particles
  useEffect(() => {
    const createParticles = () => {
      const sections = document.querySelectorAll('.cinematic-section');
      sections.forEach((section) => {
        const particleCount = 8;
        for (let i = 0; i < particleCount; i++) {
          const particle = document.createElement("div");
          particle.className = "sparkle-particle";
          particle.style.left = `${Math.random() * 100}%`;
          particle.style.top = `${Math.random() * 100}%`;
          particle.style.animationDelay = `${Math.random() * 15}s`;
          particle.style.animationDuration = `${10 + Math.random() * 10}s`;
          section.appendChild(particle);
        }
      });
    };

    createParticles();
  }, []);

  return (
    <div id="content" role="main" style={{ background: "var(--luxury-black)" }}>
      {/* Combined Hero and Introduction Section with Images */}
      <section 
        ref={heroRef}
        className="section cinematic-section" 
        id="section-story-hero-intro"
        style={{ 
          paddingTop: "120px", 
          paddingBottom: "80px",
          background: "radial-gradient(ellipse at center, var(--luxury-black) 0%, var(--luxury-black-soft) 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Ambient gold light */}
        <div
          style={{
            position: "absolute",
            top: "10%",
            right: "10%",
            width: "400px",
            height: "400px",
            background: "radial-gradient(circle, rgba(212, 175, 55, 0.15) 0%, transparent 70%)",
            borderRadius: "50%",
            filter: "blur(60px)",
            pointerEvents: "none",
            zIndex: 1,
            animation: "pulseGlow 8s ease-in-out infinite",
          }}
        />
        
        <div className="section-bg fill"></div>
        <div className="section-content relative" style={{ zIndex: 2 }}>
          {/* Title and Tagline */}
          <motion.div 
            className="row"
            variants={containerVariants}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
          >
            <div className="col small-12 large-12">
              <div className="col-inner text-center">
                <motion.h1 
                  className="shimmer-text"
                  variants={itemVariants}
                  style={{ 
                    fontSize: "4rem", 
                    fontWeight: 700, 
                    marginBottom: "20px", 
                    fontFamily: "'Playfair Display', serif", 
                    color: "var(--luxury-gold)",
                    lineHeight: 1.2,
                  }}
                >
                  Laura Rossa
                </motion.h1>
                <motion.h2 
                  className="luxury-tagline"
                  variants={itemVariants}
                  style={{ 
                    fontSize: "1.5rem", 
                    fontWeight: 300, 
                    letterSpacing: "4px", 
                    textTransform: "uppercase", 
                    color: "rgba(255, 255, 255, 0.9)", 
                    fontFamily: "'Parisienne', cursive", 
                    marginBottom: "60px" 
                  }}
                >
                  the untamed power of femininity
                </motion.h2>
              </div>
            </div>
          </motion.div>

          {/* Fashion Illustration */}
          <motion.div 
            className="row row-full-width" 
            style={{ marginBottom: "60px", margin: "0 auto 60px auto", width: "100%", maxWidth: "1400px" }}
            variants={itemVariants}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
          >
            <div className="col small-12 large-12" style={{ padding: "0 20px" }}>
              <div className="col-inner" style={{ padding: 0 }}>
                <motion.div 
                  style={{ 
                    position: "relative", 
                    width: "100%", 
                    paddingTop: "40%", 
                    overflow: "hidden",
                    borderRadius: "8px",
                  }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      y: heroImageY,
                    }}
                  >
                    <Image
                      src="/images/zakaria1.png"
                      alt="Fashion illustration"
                      fill
                      style={{ objectFit: "cover", objectPosition: "center center" }}
                      sizes="(max-width: 768px) 100vw, 1400px"
                    />
                  </motion.div>
                  {/* Shine overlay */}
                  <div className="shine-overlay" />
                  {/* Gold glow on hover */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      background: "radial-gradient(circle at center, rgba(212, 175, 55, 0.1) 0%, transparent 70%)",
                      pointerEvents: "none",
                      opacity: 0,
                      transition: "opacity 0.3s ease",
                    }}
                    className="hover-glow"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Introduction Text */}
          <motion.div 
            className="row"
            variants={containerVariants}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
          >
            <div className="col small-12 large-10" style={{ margin: "0 auto" }}>
              <div className="col-inner">
                <motion.div 
                  className="text line-reveal" 
                  variants={itemVariants}
                  style={{ 
                    fontSize: "1.2rem", 
                    lineHeight: 1.9, 
                    textAlign: "left", 
                    fontFamily: "'Poppins', sans-serif", 
                    color: "rgba(255, 255, 255, 0.9)" 
                  }}
                >
                  <p>
                    Laura Rossa is a French fashion brand, born in the enchanting heart of Paris – a city synonymous with timeless elegance and artistic allure. From this iconic epicenter of style, the founders embarked on an remarkable journey to bring their vision to life. Blending classical refinement with a daring modern edge, Laura Rossa seeks to redefine sophistication, offering collections that transcend fleeting trends and inspire every woman to express her unique essence and personal style.
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quote Section with Beige Background */}
      <section 
        ref={quoteRef}
        className="section cinematic-section" 
        id="section-story-quote"
        style={{ 
          paddingTop: "80px", 
          paddingBottom: "80px", 
          background: "linear-gradient(135deg, rgba(248, 240, 237, 0.95) 0%, rgba(248, 240, 237, 0.98) 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Gold dust particles */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "radial-gradient(ellipse at 70% 30%, rgba(212, 175, 55, 0.08) 0%, transparent 60%)",
            zIndex: 1,
            animation: "goldDust 10s ease-in-out infinite",
            pointerEvents: "none",
          }}
        />
        
        <div className="section-bg fill"></div>
        <div className="section-content relative" style={{ zIndex: 2 }}>
          <motion.div 
            className="row"
            variants={containerVariants}
            initial="hidden"
            animate={quoteInView ? "visible" : "hidden"}
          >
            <div className="col small-12 large-10" style={{ margin: "0 auto" }}>
              <div className="col-inner glassmorphism" style={{ padding: "60px", borderRadius: "16px", background: "rgba(255, 255, 255, 0.7)" }}>
                <motion.div 
                  className="text line-reveal" 
                  variants={itemVariants}
                  style={{ 
                    fontSize: "1.4rem", 
                    lineHeight: 1.9, 
                    textAlign: "left", 
                    fontFamily: "'Playfair Display', serif", 
                    color: "#1e1e1e" 
                  }}
                >
                  <motion.p 
                    variants={lineVariants}
                    style={{ 
                      fontWeight: 400, 
                      fontStyle: "italic", 
                      marginBottom: "30px",
                      color: "#1e1e1e",
                    }}
                  >
                    &ldquo;Laura Rossa is the tale of my life – a story of a woman who dedicates time and patience to what truly matters. My passion for fashion has been a timeless source of inspiration, as a woman&apos;s sense of style is her most compelling introduction. The unwavering support of those around me, their exceptional talent, and the vibrant energy of Paris have shaped the vision of a brand that exudes subtle elegance, simplicity, and refinement – all without a hint of ostentation&rdquo;
                  </motion.p>
                  <motion.p 
                    variants={lineVariants}
                    style={{ 
                      fontSize: "1.1rem", 
                      fontWeight: 600, 
                      color: "var(--luxury-gold)",
                      fontFamily: "'Playfair Display', serif",
                    }}
                  >
                    <strong>Hoda Alaia</strong> • founder and creative Director of the Laura Rossa French Brand
                  </motion.p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section 
        ref={missionRef}
        className="section cinematic-section" 
        id="section-mission"
        style={{ 
          paddingTop: "100px", 
          paddingBottom: "100px",
          background: "radial-gradient(ellipse at center, var(--luxury-black) 0%, var(--luxury-black-soft) 100%)",
          position: "relative",
        }}
      >
        <div className="section-bg fill"></div>
        <div className="section-content relative">
          <motion.div 
            className="row"
            variants={containerVariants}
            initial="hidden"
            animate={missionInView ? "visible" : "hidden"}
          >
            <div className="col small-12 large-6">
              <div className="col-inner">
                <motion.h2 
                  className="shimmer-text"
                  variants={itemVariants}
                  style={{ 
                    fontSize: "3.5rem", 
                    fontWeight: 700, 
                    marginBottom: "40px", 
                    fontFamily: "'Playfair Display', serif", 
                    color: "var(--luxury-gold)",
                    lineHeight: 1.2,
                  }}
                >
                  Our Mission
                </motion.h2>
              </div>
            </div>
            <div className="col small-12 large-6">
              <div className="col-inner">
                <motion.div 
                  className="text line-reveal" 
                  variants={itemVariants}
                  style={{ 
                    fontSize: "1.3rem", 
                    lineHeight: 1.9, 
                    textAlign: "left", 
                    fontFamily: "'Poppins', sans-serif", 
                    color: "rgba(255, 255, 255, 0.9)" 
                  }}
                >
                  <p>
                    Beyond trends, <strong style={{ color: "var(--luxury-gold)" }}>Laura Rossa</strong> embodies the untamed force of modern femininity: discreet elegance, timeless refinement, and the power to leave a mark.
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Laura Rossa – the meaning Section with Beige Background */}
      <section 
        ref={meaningRef}
        className="section cinematic-section" 
        id="section-meaning"
        style={{ 
          paddingTop: "100px", 
          paddingBottom: "100px", 
          background: "linear-gradient(135deg, rgba(248, 240, 237, 0.95) 0%, rgba(248, 240, 237, 0.98) 100%)",
          position: "relative",
        }}
      >
        <div className="section-bg fill"></div>
        <div className="section-content relative">
          <motion.div 
            className="row"
            variants={containerVariants}
            initial="hidden"
            animate={meaningInView ? "visible" : "hidden"}
          >
            <div className="col small-12 large-6">
              <div className="col-inner">
                <motion.h2 
                  className="shimmer-text"
                  variants={itemVariants}
                  style={{ 
                    fontSize: "3.5rem", 
                    fontWeight: 700, 
                    marginBottom: "40px", 
                    fontFamily: "'Playfair Display', serif", 
                    color: "var(--luxury-gold)",
                    lineHeight: 1.2,
                  }}
                >
                  Laura Rossa – the meaning
                </motion.h2>
                <motion.div 
                  className="text line-reveal" 
                  variants={itemVariants}
                  style={{ 
                    fontSize: "1.2rem", 
                    lineHeight: 1.9, 
                    textAlign: "left", 
                    fontFamily: "'Poppins', sans-serif", 
                    color: "#1e1e1e" 
                  }}
                >
                  <p style={{ marginBottom: "25px" }}>
                    Hoda Alaia, the founder, chose this name to honor a beloved person named Laura and to perpetuate the values of victory through elegance and refinement. As Hoda aged and could not fulfill all her dreams, she asked her children to carry on this legacy—thus, <strong style={{ color: "var(--luxury-gold)" }}>Laura Rossa</strong> was born.
                  </p>
                </motion.div>
              </div>
            </div>
            <div className="col small-12 large-6">
              <div className="col-inner">
                <motion.div 
                  className="text line-reveal" 
                  variants={itemVariants}
                  style={{ 
                    fontSize: "1.2rem", 
                    lineHeight: 1.9, 
                    textAlign: "left", 
                    fontFamily: "'Poppins', sans-serif", 
                    color: "#1e1e1e" 
                  }}
                >
                  <ul style={{ paddingLeft: "25px", listStyle: "none" }}>
                    <motion.li 
                      variants={lineVariants}
                      style={{ 
                        marginBottom: "25px",
                        paddingLeft: "30px",
                        position: "relative",
                      }}
                    >
                      <span style={{
                        position: "absolute",
                        left: 0,
                        top: "0.5em",
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        background: "var(--luxury-gold)",
                        boxShadow: "0 0 10px rgba(212, 175, 55, 0.5)",
                      }} />
                      <strong style={{ color: "var(--luxury-gold)", fontFamily: "'Playfair Display', serif" }}>Laura</strong> (from the Latin <em>laurus</em>, laurel plant) symbolizes victory, honor, and fame. The name evokes strength, success, and wisdom.
                    </motion.li>
                    <motion.li 
                      variants={lineVariants}
                      style={{ 
                        marginBottom: "25px",
                        paddingLeft: "30px",
                        position: "relative",
                      }}
                    >
                      <span style={{
                        position: "absolute",
                        left: 0,
                        top: "0.5em",
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        background: "var(--luxury-gold)",
                        boxShadow: "0 0 10px rgba(212, 175, 55, 0.5)",
                      }} />
                      <strong style={{ color: "var(--luxury-gold)", fontFamily: "'Playfair Display', serif" }}>Rossa</strong> (red) represents femininity, passion, sensuality, and inner energy.
                    </motion.li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </motion.div>
          <motion.div 
            className="row" 
            style={{ marginTop: "50px" }}
            variants={containerVariants}
            initial="hidden"
            animate={meaningInView ? "visible" : "hidden"}
          >
            <div className="col small-12 large-12">
              <div className="col-inner">
                <motion.div 
                  className="text line-reveal" 
                  variants={itemVariants}
                  style={{ 
                    fontSize: "1.2rem", 
                    lineHeight: 1.9, 
                    textAlign: "left", 
                    fontFamily: "'Poppins', sans-serif", 
                    color: "#1e1e1e" 
                  }}
                >
                  <p style={{ marginBottom: "20px" }}>
                    The roots of the brand are in the heart of European fashion – Paris, on Avenue des Champs-Élysées.
                  </p>
                  <p>
                    It all started in the family workshop opened in the late &apos;70s, Hoda Alaia, passionate about fashion design and tailoring since childhood, put her first creations on paper and later brought her vision to life.
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tradition Section with Images */}
      <section 
        ref={traditionRef}
        className="section cinematic-section" 
        id="section-tradition"
        style={{ 
          paddingTop: "100px", 
          paddingBottom: "100px",
          background: "radial-gradient(ellipse at center, var(--luxury-black) 0%, var(--luxury-black-soft) 100%)",
          position: "relative",
        }}
      >
        <div className="section-bg fill"></div>
        <div className="section-content relative">
          <motion.div 
            className="row"
            variants={containerVariants}
            initial="hidden"
            animate={traditionInView ? "visible" : "hidden"}
          >
            <div className="col small-12 large-6">
              <motion.div 
                className="col-inner" 
                style={{ position: "relative", minHeight: "600px" }}
                variants={itemVariants}
              >
                {/* Shoe image - top left */}
                <motion.div 
                  style={{ 
                    position: "absolute", 
                    top: 0, 
                    left: 0, 
                    width: "50%", 
                    paddingTop: "60%", 
                    overflow: "hidden",
                    borderRadius: "8px",
                  }}
                  whileHover={{ scale: 1.05, zIndex: 10 }}
                  transition={{ duration: 0.4 }}
                >
                  <Image
                    src="/images/6_5400-3.jpg.jpeg"
                    alt="Elegant high-heeled shoe"
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div className="shine-overlay" />
                </motion.div>
                {/* Woman with perfume - bottom right of left side */}
                <motion.div 
                  style={{ 
                    position: "absolute", 
                    bottom: 0, 
                    right: 0, 
                    width: "55%", 
                    paddingTop: "75%", 
                    overflow: "hidden",
                    borderRadius: "8px",
                  }}
                  whileHover={{ scale: 1.05, zIndex: 10 }}
                  transition={{ duration: 0.4 }}
                >
                  <Image
                    src="/images/laura_rossa_just_once_perfume_1.png.jpeg"
                    alt="Woman with perfume"
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, 30vw"
                  />
                  <div className="shine-overlay" />
                </motion.div>
              </motion.div>
            </div>
            <div className="col small-12 large-6">
              <div className="col-inner">
                <motion.h2 
                  className="shimmer-text"
                  variants={itemVariants}
                  style={{ 
                    fontSize: "3.5rem", 
                    fontWeight: 700, 
                    marginBottom: "40px", 
                    fontFamily: "'Playfair Display', serif", 
                    color: "var(--luxury-gold)",
                    lineHeight: 1.2,
                  }}
                >
                  Laura Rossa – Tradition, Craftsmanship, and Heritage
                </motion.h2>
                <motion.div 
                  className="text line-reveal" 
                  variants={itemVariants}
                  style={{ 
                    fontSize: "1.2rem", 
                    lineHeight: 1.9, 
                    textAlign: "left", 
                    fontFamily: "'Poppins', sans-serif", 
                    color: "rgba(255, 255, 255, 0.9)" 
                  }}
                >
                  <ul style={{ paddingLeft: "25px", listStyle: "none" }}>
                    <motion.li 
                      variants={lineVariants}
                      style={{ 
                        marginBottom: "30px",
                        paddingLeft: "30px",
                        position: "relative",
                      }}
                    >
                      <span style={{
                        position: "absolute",
                        left: 0,
                        top: "0.5em",
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        background: "var(--luxury-gold)",
                        boxShadow: "0 0 10px rgba(212, 175, 55, 0.5)",
                      }} />
                      <strong style={{ color: "var(--luxury-gold)", fontFamily: "'Playfair Display', serif" }}>Artisanal Excellence Passed Down Generations</strong>: Each Laura Rossa piece reflects the experience and refinement of a family dedicated to luxury fashion, where the art of tailoring is a ritual, and attention to detail is a signature.
                    </motion.li>
                    <motion.li 
                      variants={lineVariants}
                      style={{ 
                        marginBottom: "30px",
                        paddingLeft: "30px",
                        position: "relative",
                      }}
                    >
                      <span style={{
                        position: "absolute",
                        left: 0,
                        top: "0.5em",
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        background: "var(--luxury-gold)",
                        boxShadow: "0 0 10px rgba(212, 175, 55, 0.5)",
                      }} />
                      <strong style={{ color: "var(--luxury-gold)", fontFamily: "'Playfair Display', serif" }}>Absolute Respect for Materials, Craftsmanship, and Tradition</strong>: We select only the finest materials, employ couture techniques, and maintain connections with global design masters, including collaborations and exchanges with names like Christian Dior.
                    </motion.li>
                  </ul>
                  <motion.p 
                    variants={lineVariants}
                    style={{ 
                      marginTop: "35px",
                      fontSize: "1.2rem",
                      color: "rgba(255, 255, 255, 0.9)",
                    }}
                  >
                    This transgenerational heritage forms the aesthetic and ethical foundation of the <strong style={{ color: "var(--luxury-gold)" }}>Laura Rossa</strong> brand.
                  </motion.p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Evolution Section */}
      <section 
        ref={evolutionRef}
        className="section cinematic-section" 
        id="section-evolution"
        style={{ 
          paddingTop: "100px", 
          paddingBottom: "100px",
          background: "linear-gradient(135deg, rgba(248, 240, 237, 0.95) 0%, rgba(248, 240, 237, 0.98) 100%)",
          position: "relative",
        }}
      >
        <div className="section-bg fill"></div>
        <div className="section-content relative">
          <motion.div 
            className="row"
            variants={containerVariants}
            initial="hidden"
            animate={evolutionInView ? "visible" : "hidden"}
          >
            <div className="col small-12 large-5">
              <div className="col-inner">
                <motion.h2 
                  className="shimmer-text"
                  variants={itemVariants}
                  style={{ 
                    fontSize: "3.5rem", 
                    fontWeight: 700, 
                    marginBottom: "40px", 
                    fontFamily: "'Playfair Display', serif", 
                    color: "var(--luxury-gold)",
                    lineHeight: 1.2,
                  }}
                >
                  Laura Rossa<br />Evolution<br />and<br />International<br />Expansion
                </motion.h2>
              </div>
            </div>
            <div className="col small-12 large-7">
              <div className="col-inner">
                <motion.div 
                  className="text line-reveal" 
                  variants={itemVariants}
                  style={{ 
                    fontSize: "1.2rem", 
                    lineHeight: 1.9, 
                    textAlign: "left", 
                    fontFamily: "'Poppins', sans-serif", 
                    color: "#1e1e1e" 
                  }}
                >
                  <ul style={{ paddingLeft: "25px", listStyle: "none" }}>
                    <motion.li 
                      variants={lineVariants}
                      style={{ 
                        marginBottom: "25px",
                        paddingLeft: "30px",
                        position: "relative",
                      }}
                    >
                      <span style={{
                        position: "absolute",
                        left: 0,
                        top: "0.5em",
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        background: "var(--luxury-gold)",
                        boxShadow: "0 0 10px rgba(212, 175, 55, 0.5)",
                      }} />
                      <strong style={{ color: "var(--luxury-gold)", fontFamily: "'Playfair Display', serif" }}>2024</strong>: Expansion to Romania (Calea 13 Septembrie 90, Bucharest – JW Marriott Grand Avenue)
                    </motion.li>
                    <motion.li 
                      variants={lineVariants}
                      style={{ 
                        marginBottom: "25px",
                        paddingLeft: "30px",
                        position: "relative",
                      }}
                    >
                      <span style={{
                        position: "absolute",
                        left: 0,
                        top: "0.5em",
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        background: "var(--luxury-gold)",
                        boxShadow: "0 0 10px rgba(212, 175, 55, 0.5)",
                      }} />
                      <strong style={{ color: "var(--luxury-gold)", fontFamily: "'Playfair Display', serif" }}>2024</strong>: Opening flagship boutique on Avenue des Champs-Élysées, Paris
                    </motion.li>
                    <motion.li 
                      variants={lineVariants}
                      style={{ 
                        marginBottom: "25px",
                        paddingLeft: "30px",
                        position: "relative",
                      }}
                    >
                      <span style={{
                        position: "absolute",
                        left: 0,
                        top: "0.5em",
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        background: "var(--luxury-gold)",
                        boxShadow: "0 0 10px rgba(212, 175, 55, 0.5)",
                      }} />
                      <strong style={{ color: "var(--luxury-gold)", fontFamily: "'Playfair Display', serif" }}>2024</strong>: Expansion to Germany (Scheffelstraße 18, 68723 Schwetzingen)
                    </motion.li>
                    <motion.li 
                      variants={lineVariants}
                      style={{ 
                        marginBottom: "25px",
                        paddingLeft: "30px",
                        position: "relative",
                      }}
                    >
                      <span style={{
                        position: "absolute",
                        left: 0,
                        top: "0.5em",
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        background: "var(--luxury-gold)",
                        boxShadow: "0 0 10px rgba(212, 175, 55, 0.5)",
                      }} />
                      <strong style={{ color: "var(--luxury-gold)", fontFamily: "'Playfair Display', serif" }}>Online Presence</strong>: distribution in over 30 markets across Europe, North Africa, and the Middle East via laurarossa.com
                    </motion.li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Aesthetics Section - Matching Live Site Layout */}
      <section 
        ref={aestheticsRef}
        className="section cinematic-section" 
        id="section-aesthetics"
        style={{ 
          paddingTop: "100px", 
          paddingBottom: "100px",
          background: "radial-gradient(ellipse at center, var(--luxury-black) 0%, var(--luxury-black-soft) 100%)",
          position: "relative",
        }}
      >
        <div className="section-bg fill"></div>
        <div className="section-content relative">
          <motion.div 
            className="row" 
            style={{ alignItems: "stretch" }}
            variants={containerVariants}
            initial="hidden"
            animate={aestheticsInView ? "visible" : "hidden"}
          >
            {/* Left side - Image Grid */}
            <div className="col small-12 large-6">
              <div className="col-inner">
                {/* Container for all three images */}
                <div style={{ 
                  display: "flex",
                  flexDirection: "column",
                  gap: "24px",
                  height: "100%"
                }}>
                  {/* Top row - Two images side by side */}
                  <div style={{ 
                    display: "flex",
                    gap: "24px",
                    width: "100%"
                  }}>
                    {/* Woman with perfume - top left (portrait) */}
                    <motion.div 
                      style={{ 
                        position: "relative",
                        flex: "0 0 calc(50% - 12px)",
                        width: "calc(50% - 12px)",
                        paddingTop: "133%",
                        overflow: "hidden", 
                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                        borderRadius: "8px",
                      }}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                    >
                      <Image
                        src="/images/laura_rossa_just_once_perfume_1.png.jpeg"
                        alt="Woman with perfume"
                        fill
                        style={{ objectFit: "cover", objectPosition: "center center" }}
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                      <div className="shine-overlay" />
                    </motion.div>
                    
                    {/* Blue high heels - top right (landscape) */}
                    <motion.div 
                      style={{ 
                        position: "relative",
                        flex: "0 0 calc(50% - 12px)",
                        width: "calc(50% - 12px)",
                        paddingTop: "75%",
                        overflow: "hidden", 
                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                        borderRadius: "8px",
                      }}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                    >
                      <Image
                        src="/images/5_5400-2.jpg.jpeg"
                        alt="Blue high heels"
                        fill
                        style={{ objectFit: "cover", objectPosition: "center center" }}
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                      <div className="shine-overlay" />
                    </motion.div>
                  </div>
                  
                  {/* Bottom - Large image spanning full width (centered below both) */}
                  <motion.div 
                    style={{ 
                      position: "relative",
                      width: "100%",
                      paddingTop: "75%",
                      overflow: "hidden", 
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                      borderRadius: "8px",
                    }}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Image
                      src="/images/6_5400-3.jpg.jpeg"
                      alt="Dark elegant heels"
                      fill
                      style={{ objectFit: "cover", objectPosition: "center center" }}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="shine-overlay" />
                  </motion.div>
                </div>
              </div>
            </div>
            
            {/* Right side - Content */}
            <div className="col small-12 large-6">
              <div className="col-inner" style={{ 
                paddingLeft: "40px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center"
              }}>
                <motion.h2 
                  className="shimmer-text"
                  variants={itemVariants}
                  style={{ 
                    fontSize: "3.5rem", 
                    fontWeight: 700, 
                    marginBottom: "40px", 
                    fontFamily: "'Playfair Display', serif", 
                    color: "var(--luxury-gold)",
                    lineHeight: 1.2,
                  }}
                >
                  Aesthetics and Style
                </motion.h2>
                <motion.div 
                  className="text line-reveal" 
                  variants={itemVariants}
                  style={{ 
                    fontSize: "1.2rem", 
                    lineHeight: 1.9, 
                    textAlign: "left", 
                    fontFamily: "'Poppins', sans-serif", 
                    color: "rgba(255, 255, 255, 0.9)" 
                  }}
                >
                  <p style={{ marginBottom: "25px" }}>
                    The <strong style={{ color: "var(--luxury-gold)" }}>Laura Rossa</strong> style blends classic refinement with modern lines:
                  </p>
                  <ul style={{ paddingLeft: "25px", listStyle: "none" }}>
                    <motion.li 
                      variants={lineVariants}
                      style={{ 
                        marginBottom: "20px",
                        paddingLeft: "30px",
                        position: "relative",
                      }}
                    >
                      <span style={{
                        position: "absolute",
                        left: 0,
                        top: "0.5em",
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        background: "var(--luxury-gold)",
                        boxShadow: "0 0 10px rgba(212, 175, 55, 0.5)",
                      }} />
                      <strong style={{ color: "var(--luxury-gold)", fontFamily: "'Playfair Display', serif" }}>Clear and timeless cuts</strong>
                    </motion.li>
                    <motion.li 
                      variants={lineVariants}
                      style={{ 
                        marginBottom: "20px",
                        paddingLeft: "30px",
                        position: "relative",
                      }}
                    >
                      <span style={{
                        position: "absolute",
                        left: 0,
                        top: "0.5em",
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        background: "var(--luxury-gold)",
                        boxShadow: "0 0 10px rgba(212, 175, 55, 0.5)",
                      }} />
                      <strong style={{ color: "var(--luxury-gold)", fontFamily: "'Playfair Display', serif" }}>Discreet color palette</strong> – black, emerald green, natural tones
                    </motion.li>
                    <motion.li 
                      variants={lineVariants}
                      style={{ 
                        marginBottom: "20px",
                        paddingLeft: "30px",
                        position: "relative",
                      }}
                    >
                      <span style={{
                        position: "absolute",
                        left: 0,
                        top: "0.5em",
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        background: "var(--luxury-gold)",
                        boxShadow: "0 0 10px rgba(212, 175, 55, 0.5)",
                      }} />
                      <strong style={{ color: "var(--luxury-gold)", fontFamily: "'Playfair Display', serif" }}>Fine textures</strong> – blends of wool, cotton, linen
                    </motion.li>
                    <motion.li 
                      variants={lineVariants}
                      style={{ 
                        marginBottom: "20px",
                        paddingLeft: "30px",
                        position: "relative",
                      }}
                    >
                      <span style={{
                        position: "absolute",
                        left: 0,
                        top: "0.5em",
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        background: "var(--luxury-gold)",
                        boxShadow: "0 0 10px rgba(212, 175, 55, 0.5)",
                      }} />
                      <strong style={{ color: "var(--luxury-gold)", fontFamily: "'Playfair Display', serif" }}>Limited Series Quality</strong> – each collection produced in limited runs for exclusivity and meticulous attention to detail
                    </motion.li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* OUR JOURNEY Section with Image */}
      <section 
        ref={journeyRef}
        className="section cinematic-section" 
        id="section-journey"
        style={{ 
          paddingTop: "100px", 
          paddingBottom: "100px",
          background: "linear-gradient(135deg, rgba(248, 240, 237, 0.95) 0%, rgba(248, 240, 237, 0.98) 100%)",
          position: "relative",
        }}
      >
        <div className="section-bg fill"></div>
        <div className="section-content relative">
          <motion.div 
            className="row"
            variants={containerVariants}
            initial="hidden"
            animate={journeyInView ? "visible" : "hidden"}
          >
            <div className="col small-12 large-6">
              <motion.div 
                className="col-inner"
                variants={itemVariants}
              >
                <motion.div 
                  style={{ 
                    position: "relative", 
                    width: "100%", 
                    paddingTop: "75%", 
                    overflow: "hidden",
                    borderRadius: "8px",
                  }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.6 }}
                >
                  <Image
                    src="/images/WhatsAppImage20241215at00.15.17.jpeg"
                    alt="Laura Rossa Boutique"
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="shine-overlay" />
                </motion.div>
              </motion.div>
            </div>
            <div className="col small-12 large-6">
              <div className="col-inner">
                <motion.h3 
                  className="shimmer-text"
                  variants={itemVariants}
                  style={{ 
                    fontSize: "2.5rem", 
                    fontWeight: 700, 
                    marginBottom: "35px", 
                    textTransform: "uppercase", 
                    letterSpacing: "3px", 
                    fontFamily: "'Playfair Display', serif", 
                    color: "var(--luxury-gold)" 
                  }}
                >
                  OUR JOURNEY
                </motion.h3>
                <motion.div 
                  className="text line-reveal" 
                  variants={itemVariants}
                  style={{ 
                    fontSize: "1.2rem", 
                    lineHeight: 1.9, 
                    textAlign: "left", 
                    fontFamily: "'Poppins', sans-serif", 
                    color: "#1e1e1e" 
                  }}
                >
                  <motion.p 
                    variants={lineVariants}
                    style={{ marginBottom: "25px" }}
                  >
                    LAURA ROSSA was born from the desire to restore women&apos;s confidence through clothing and accessories that express elegance and refinement. Our mission is to redefine feminine style by offering pieces that combine accessible luxury with personal expression. In the first week of 2024, we launched this brand online for the self-assured, bold, and sophisticated woman who wants to make a memorable impression and feel extraordinary every day.
                  </motion.p>
                  <motion.p 
                    variants={lineVariants}
                    style={{ marginBottom: "25px" }}
                  >
                    In the summer of 2024, Laura Rossa proudly opened its first monobrand boutique in Romania. Located on The Grand Avenue, on the ground floor of the JW Marriott Bucharest Grand Hotel, this boutique unveiled the latest collections of clothing, accessories, jewelry, and perfumes, all bearing the distinctive signature of Laura Rossa.
                  </motion.p>
                  <motion.p 
                    variants={lineVariants}
                  >
                    This milestone marks the beginning of the brand&apos;s international expansion, with forthcoming boutiques planned for Milan, München, Vienna and Doha. However, the atelier on the Champs-Élysées will forever remain the birthplace of Laura Rossa and its exclusive design headquarters.
                  </motion.p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* OUR PRODUCTS Section with Image */}
      <section 
        ref={productsRef}
        className="section cinematic-section" 
        id="section-products"
        style={{ 
          paddingTop: "100px", 
          paddingBottom: "100px",
          background: "radial-gradient(ellipse at center, var(--luxury-black) 0%, var(--luxury-black-soft) 100%)",
          position: "relative",
        }}
      >
        <div className="section-bg fill"></div>
        <div className="section-content relative">
          <motion.div 
            className="row"
            variants={containerVariants}
            initial="hidden"
            animate={productsInView ? "visible" : "hidden"}
          >
            <div className="col small-12 large-5">
              <div className="col-inner">
                <motion.h3 
                  className="shimmer-text"
                  variants={itemVariants}
                  style={{ 
                    fontSize: "2.5rem", 
                    fontWeight: 700, 
                    marginBottom: "35px", 
                    textTransform: "uppercase", 
                    letterSpacing: "3px", 
                    fontFamily: "'Playfair Display', serif", 
                    color: "var(--luxury-gold)" 
                  }}
                >
                  OUR PRODUCTS
                </motion.h3>
                <motion.div 
                  className="text line-reveal" 
                  variants={itemVariants}
                  style={{ 
                    fontSize: "1.2rem", 
                    lineHeight: 1.9, 
                    textAlign: "left", 
                    fontFamily: "'Poppins', sans-serif", 
                    color: "rgba(255, 255, 255, 0.9)" 
                  }}
                >
                  <motion.p 
                    variants={lineVariants}
                    style={{ marginBottom: "25px" }}
                  >
                    Among the standout pieces in the collection are exquisite dresses and jumpsuits, complemented by high-quality leather shoes.
                  </motion.p>
                  <motion.p 
                    variants={lineVariants}
                    style={{ marginBottom: "25px" }}
                  >
                    The brand also boasts two signature perfumes, Just Once I and Just Once II, perfume extracts featuring bold floral notes. These creations are available in our boutiques and online at www.laurarossa.com
                  </motion.p>
                  <motion.p 
                    variants={lineVariants}
                  >
                    We believe in and stand alongside the modern woman—strong, elegant, and always on the move. Our brand offers more than just clothing and perfumes—it provides a lifestyle. A manifesto of confidence, a tribute to authentic beauty. It&apos;s time to shine!
                  </motion.p>
                </motion.div>
              </div>
            </div>
            <div className="col small-12 large-7">
              <motion.div 
                className="col-inner"
                variants={itemVariants}
              >
                <motion.div 
                  style={{ 
                    position: "relative", 
                    width: "100%", 
                    paddingTop: "100%", 
                    overflow: "hidden",
                    borderRadius: "8px",
                  }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.6 }}
                >
                  <Image
                    src="/images/JO_2.png.jpeg"
                    alt="Just Once Perfume"
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="shine-overlay" />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Signature Collections Section */}
      <section 
        ref={collectionsRef}
        className="section cinematic-section" 
        id="section-signature-collections"
        style={{ 
          paddingTop: "0", 
          paddingBottom: "0", 
          backgroundColor: "var(--luxury-black)",
          position: "relative",
        }}
      >
        <div className="section-bg fill"></div>
        <div className="section-content relative">
          <motion.div 
            className="row row-full-width" 
            style={{ margin: 0, display: "flex", flexWrap: "nowrap" }}
            variants={containerVariants}
            initial="hidden"
            animate={collectionsInView ? "visible" : "hidden"}
          >
            {/* Signature Collections Text Panel */}
            <motion.div 
              className="col small-12 large-3" 
              style={{ 
                padding: 0, 
                flex: "0 0 25%", 
                maxWidth: "25%", 
                backgroundColor: "rgba(30, 30, 30, 0.95)", 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center", 
                minHeight: "400px",
                borderRight: "1px solid rgba(212, 175, 55, 0.2)",
              }}
              variants={itemVariants}
            >
              <div className="col-inner" style={{ padding: "40px", textAlign: "center", width: "100%" }}>
                <h2 className="shimmer-text" style={{ 
                  fontSize: "2.5rem", 
                  fontWeight: 700, 
                  fontFamily: "'Playfair Display', serif", 
                  color: "var(--luxury-gold)", 
                  lineHeight: 1.2, 
                  margin: 0 
                }}>
                  Signature<br />Collections
                </h2>
              </div>
            </motion.div>

            {/* Shoes Panel */}
            <motion.div 
              className="col small-12 large-3" 
              style={{ 
                padding: 0, 
                flex: "0 0 25%", 
                maxWidth: "25%", 
                position: "relative", 
                minHeight: "400px",
                overflow: "hidden",
              }}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            >
              <div className="col-inner" style={{ padding: 0, height: "100%", position: "relative" }}>
                <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
                  <Image
                    src="/images/5_5400-3.jpg.jpeg"
                    alt="Shoes"
                    fill
                    style={{ objectFit: "cover", objectPosition: "center center" }}
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div className="shine-overlay" />
                  {/* Dark overlay for text readability */}
                  <div style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, transparent 50%)",
                    pointerEvents: "none",
                  }} />
                </div>
                <div style={{ 
                  position: "absolute", 
                  bottom: "40px", 
                  left: "50%", 
                  transform: "translateX(-50%)", 
                  textAlign: "center", 
                  width: "100%", 
                  zIndex: 2 
                }}>
                  <h3 style={{ 
                    fontSize: "1.5rem", 
                    fontWeight: 600, 
                    marginBottom: "15px", 
                    fontFamily: "'Playfair Display', serif", 
                    color: "var(--luxury-gold)", 
                    textShadow: "0 2px 10px rgba(0, 0, 0, 0.5)", 
                    textTransform: "uppercase", 
                    letterSpacing: "2px" 
                  }}>
                    Shoes
                  </h3>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link 
                      href="/product-category/shoes" 
                      className="ripple-effect glow-gold"
                      style={{ 
                        padding: "14px 32px", 
                        display: "inline-block", 
                        textTransform: "uppercase", 
                        letterSpacing: "2px", 
                        fontSize: "0.9rem", 
                        background: "transparent",
                        border: "2px solid var(--luxury-gold)",
                        color: "var(--luxury-gold)", 
                        textDecoration: "none",
                        borderRadius: "4px",
                        fontWeight: 600,
                        fontFamily: "'Poppins', sans-serif",
                        transition: "all 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "var(--luxury-gold)";
                        e.currentTarget.style.color = "var(--luxury-black)";
                        e.currentTarget.style.boxShadow = "0 0 25px rgba(212, 175, 55, 0.6)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "transparent";
                        e.currentTarget.style.color = "var(--luxury-gold)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      Shop now
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Perfumes Panel */}
            <motion.div 
              className="col small-12 large-3" 
              style={{ 
                padding: 0, 
                flex: "0 0 25%", 
                maxWidth: "25%", 
                position: "relative", 
                minHeight: "400px",
                overflow: "hidden",
              }}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            >
              <div className="col-inner" style={{ padding: 0, height: "100%", position: "relative" }}>
                <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
                  <Image
                    src="/images/laura_rossa_just_once_perfume_2.png.jpeg"
                    alt="Perfumes"
                    fill
                    style={{ objectFit: "cover", objectPosition: "center center" }}
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div className="shine-overlay" />
                  {/* Dark overlay for text readability */}
                  <div style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, transparent 50%)",
                    pointerEvents: "none",
                  }} />
                </div>
                <div style={{ 
                  position: "absolute", 
                  bottom: "40px", 
                  left: "50%", 
                  transform: "translateX(-50%)", 
                  textAlign: "center", 
                  width: "100%", 
                  zIndex: 2 
                }}>
                  <h3 style={{ 
                    fontSize: "1.5rem", 
                    fontWeight: 600, 
                    marginBottom: "15px", 
                    fontFamily: "'Playfair Display', serif", 
                    color: "var(--luxury-gold)", 
                    textShadow: "0 2px 10px rgba(0, 0, 0, 0.5)", 
                    textTransform: "uppercase", 
                    letterSpacing: "2px" 
                  }}>
                    Perfumes
                  </h3>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link 
                      href="/product-category/perfumes" 
                      className="ripple-effect glow-gold"
                      style={{ 
                        padding: "14px 32px", 
                        display: "inline-block", 
                        textTransform: "uppercase", 
                        letterSpacing: "2px", 
                        fontSize: "0.9rem", 
                        background: "transparent",
                        border: "2px solid var(--luxury-gold)",
                        color: "var(--luxury-gold)", 
                        textDecoration: "none",
                        borderRadius: "4px",
                        fontWeight: 600,
                        fontFamily: "'Poppins', sans-serif",
                        transition: "all 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "var(--luxury-gold)";
                        e.currentTarget.style.color = "var(--luxury-black)";
                        e.currentTarget.style.boxShadow = "0 0 25px rgba(212, 175, 55, 0.6)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "transparent";
                        e.currentTarget.style.color = "var(--luxury-gold)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      Shop now
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Clothing Panel */}
            <motion.div 
              className="col small-12 large-3" 
              style={{ 
                padding: 0, 
                flex: "0 0 25%", 
                maxWidth: "25%", 
                position: "relative", 
                minHeight: "400px",
                overflow: "hidden",
              }}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            >
              <div className="col-inner" style={{ padding: 0, height: "100%", position: "relative" }}>
                <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
                  <Image
                    src="/images/1112393.JPG.jpeg"
                    alt="Clothing"
                    fill
                    style={{ objectFit: "cover", objectPosition: "center center" }}
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div className="shine-overlay" />
                  {/* Dark overlay for text readability */}
                  <div style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, transparent 50%)",
                    pointerEvents: "none",
                  }} />
                </div>
                <div style={{ 
                  position: "absolute", 
                  bottom: "40px", 
                  left: "50%", 
                  transform: "translateX(-50%)", 
                  textAlign: "center", 
                  width: "100%", 
                  zIndex: 2 
                }}>
                  <h3 style={{ 
                    fontSize: "1.5rem", 
                    fontWeight: 600, 
                    marginBottom: "15px", 
                    fontFamily: "'Playfair Display', serif", 
                    color: "var(--luxury-gold)", 
                    textShadow: "0 2px 10px rgba(0, 0, 0, 0.5)", 
                    textTransform: "uppercase", 
                    letterSpacing: "2px" 
                  }}>
                    Clothing
                  </h3>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link 
                      href="/product-category/clothing" 
                      className="ripple-effect glow-gold"
                      style={{ 
                        padding: "14px 32px", 
                        display: "inline-block", 
                        textTransform: "uppercase", 
                        letterSpacing: "2px", 
                        fontSize: "0.9rem", 
                        background: "transparent",
                        border: "2px solid var(--luxury-gold)",
                        color: "var(--luxury-gold)", 
                        textDecoration: "none",
                        borderRadius: "4px",
                        fontWeight: 600,
                        fontFamily: "'Poppins', sans-serif",
                        transition: "all 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "var(--luxury-gold)";
                        e.currentTarget.style.color = "var(--luxury-black)";
                        e.currentTarget.style.boxShadow = "0 0 25px rgba(212, 175, 55, 0.6)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "transparent";
                        e.currentTarget.style.color = "var(--luxury-gold)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      Shop now
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{__html: `
        .hover-glow {
          transition: opacity 0.3s ease;
        }
        
        .hover-glow:hover {
          opacity: 1 !important;
        }
        
        /* Mobile responsive styles for story page */
        @media (max-width: 768px) {
          .cinematic-section .sparkle-particle {
            display: none;
          }
          
          .cinematic-section {
            padding-top: 60px !important;
            padding-bottom: 60px !important;
          }
          
          .shimmer-text {
            font-size: 2rem !important;
          }
          
          .row {
            flex-direction: column !important;
          }
          
          .col {
            width: 100% !important;
            max-width: 100% !important;
            margin-bottom: 30px !important;
          }
          
          .col-inner {
            padding-left: 0 !important;
            padding-right: 0 !important;
          }
          
          /* Aesthetics section image grid */
          #section-aesthetics .col-inner > div {
            gap: 15px !important;
          }
          
          #section-aesthetics .col-inner > div > div:first-child {
            flex-direction: column !important;
            height: auto !important;
          }
          
          #section-aesthetics .col-inner > div > div:first-child > div {
            width: 100% !important;
            flex: 1 1 100% !important;
            padding-top: 100% !important;
            margin-bottom: 15px !important;
          }
          
          #section-aesthetics .col-inner > div > div:last-child {
            padding-top: 75% !important;
          }
          
          /* Signature collections */
          #section-signature-collections .row-full-width {
            flex-direction: column !important;
          }
          
          #section-signature-collections .row-full-width > .col {
            flex: 1 1 100% !important;
            max-width: 100% !important;
            min-height: 300px !important;
          }
        }
        
        @media (max-width: 480px) {
          .cinematic-section {
            padding-top: 40px !important;
            padding-bottom: 40px !important;
          }
          
          .shimmer-text {
            font-size: 1.5rem !important;
          }
          
          h1, h2, h3 {
            font-size: 1.5rem !important;
            line-height: 1.3 !important;
          }
          
          .text {
            font-size: 0.9rem !important;
            line-height: 1.6 !important;
          }
          
          .luxury-tagline {
            font-size: 1.2rem !important;
          }
          
          button, .button {
            padding: 12px 24px !important;
            font-size: 0.85rem !important;
          }
        }
        
        /* Disable parallax on mobile */
        @media (max-width: 1024px) {
          .parallax-layer {
            transform: none !important;
          }
        }
      `}} />
    </div>
  );
}
