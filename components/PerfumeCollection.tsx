"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import { motion, useInView } from "framer-motion";

export default function PerfumeCollection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay was prevented
      });
    }

    // Create floating gold particles for video sections
    const createVideoParticles = () => {
      const particlesContainer = document.querySelector(".perfume-video-particles");
      if (particlesContainer) {
        const particleCount = 12;
        for (let i = 0; i < particleCount; i++) {
          const particle = document.createElement("div");
          particle.className = "sparkle-particle";
          particle.style.left = `${Math.random() * 100}%`;
          particle.style.animationDelay = `${Math.random() * 15}s`;
          particle.style.animationDuration = `${8 + Math.random() * 8}s`;
          particlesContainer.appendChild(particle);
        }
      }
    };

    createVideoParticles();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <>
      <section 
        ref={sectionRef}
        className="section cinematic-section" 
        id="section_1968789669"
        style={{ 
          paddingTop: "80px", 
          paddingBottom: "80px",
          background: "radial-gradient(ellipse at center, var(--luxury-black) 0%, var(--luxury-black-soft) 100%)",
          position: "relative",
        }}
      >
        <div className="section-bg fill"></div>
        <div className="section-content relative" style={{ zIndex: 2 }}>
          <div id="gap-1390594883" className="gap-element clearfix" style={{ display: "block", height: "auto", paddingTop: "30px" }}></div>
          <motion.div 
            className="row row-small align-middle" 
            id="row-1759278789"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div 
              id="col-1474685368" 
              className="col medium-6 small-12 large-3"
              variants={itemVariants}
            >
              <div className="col-inner" style={{ padding: 0 }}>
                <motion.div 
                  className="banner has-hover float-animation" 
                  id="banner-11487375"
                  style={{ 
                    paddingTop: "150%", 
                    backgroundColor: "rgb(10, 10, 10)",
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: "4px",
                  }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="banner-inner fill">
                    <div className="banner-bg fill">
                      <Image
                        src="/images/laura_rossa_just_once_perfume_1.png.jpeg"
                        alt="Perfume"
                        fill
                        className="bg attachment-large size-large"
                        style={{ 
                          objectFit: "cover", 
                          objectPosition: "center center",
                          transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                        }}
                      />
                      <div className="shine-overlay" />
                    </div>
                    <div className="banner-layers container">
                      <div className="fill banner-link"></div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
            <motion.div 
              id="col-947547601" 
              className="col medium-6 small-12 large-4"
              variants={itemVariants}
            >
              <div className="col-inner" style={{ padding: 0 }}>
                <motion.div 
                  className="banner has-hover float-animation" 
                  id="banner-1052766328"
                  style={{ 
                    paddingTop: "150%", 
                    backgroundColor: "rgb(10, 10, 10)",
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: "4px",
                  }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <div className="banner-inner fill">
                    <div className="banner-bg fill">
                      <Image
                        src="/images/laura_rossa_just_once_perfume_2.png.jpeg"
                        alt="Perfume"
                        fill
                        className="bg attachment-large size-large"
                        style={{ 
                          objectFit: "cover", 
                          objectPosition: "center center",
                          transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                        }}
                      />
                      <div className="shine-overlay" />
                    </div>
                    <div className="banner-layers container">
                      <div className="fill banner-link"></div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
            <motion.div 
              id="col-437659128" 
              className="col medium-12 small-12 large-5"
              variants={itemVariants}
            >
              <div className="col-inner" style={{ padding: "0px 0px 0px 0" }}>
                <div id="gap-1988733802" className="gap-element clearfix" style={{ display: "block", height: "auto", paddingTop: "15px" }}></div>
                <motion.h2 
                  id="text-2245884352" 
                  className="text shimmer-text"
                  style={{ 
                    fontSize: "2.5rem",
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 700,
                    marginBottom: "1.5rem",
                  }}
                >
                  Just Once
                </motion.h2>
                <motion.p
                  style={{
                    color: "var(--luxury-text)",
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "1.1rem",
                    lineHeight: 1.8,
                    marginBottom: "1rem",
                  }}
                >
                  Laura Rossa boasts two signature perfumes, Just Once I and Just Once II, perfume
                  extracts featuring bold floral notes.
                </motion.p>
                <motion.p
                  style={{
                    color: "var(--luxury-text)",
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "1.1rem",
                    lineHeight: 1.8,
                    marginBottom: "2rem",
                  }}
                >
                  We believe in and stand alongside the modern woman—strong, elegant, and always on
                  the move.
                </motion.p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link 
                    href="/product-category/perfumes" 
                    className="ripple-effect glow-gold"
                    style={{ 
                      display: "inline-flex", 
                      alignItems: "center", 
                      gap: "8px",
                      padding: "15px 30px",
                      background: "transparent",
                      border: "2px solid var(--luxury-gold)",
                      color: "var(--luxury-gold)",
                      fontSize: "1rem",
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 500,
                      textTransform: "uppercase",
                      letterSpacing: "2px",
                      textDecoration: "none",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <span>See the perfumes</span>
                    <FiArrowRight size={16} />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Full Width Perfume Banner */}
      <div className="row row-collapse row-full-width align-equal" id="row-1747349275" style={{ margin: 0 }}>
        <div id="col-246797305" className="col medium-3 small-12 large-3" style={{ padding: 0 }}>
          <div className="col-inner" style={{ padding: 0 }}>
            <div 
              className="banner has-hover" 
              id="banner-1013314526"
              style={{ 
                paddingTop: "100%", 
                backgroundColor: "rgba(255, 255, 255, 0)" 
              }}
            >
              <div className="banner-inner fill">
                <div className="banner-bg fill">
                  <Image
                    src="/images/banner_parfum_small.png.jpeg"
                    alt="Perfume"
                    fill
                    className="bg attachment-large size-large"
                    style={{ objectFit: "cover", objectPosition: "center center" }}
                  />
                </div>
                <div className="banner-layers container">
                  <div className="fill banner-link"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="col-1537649906" className="col medium-3 small-12 large-3" style={{ padding: 0 }}>
          <div className="col-inner" style={{ padding: 0 }}>
            <div 
              className="banner has-hover has-video hide-for-medium" 
              id="banner-414785230"
              style={{ 
                paddingTop: "100%", 
                backgroundColor: "rgba(255, 255, 255, 0)" 
              }}
            >
              <div className="banner-inner fill">
                <div className="banner-bg fill" style={{ position: "relative" }}>
                  <div className="video-overlay no-click fill visible" style={{ 
                    background: "linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, transparent 50%)",
                    zIndex: 1,
                  }}></div>
                  {/* Dynamic gold mist overlay */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      background: "radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.15) 0%, transparent 70%)",
                      zIndex: 2,
                      animation: "pulseGlow 6s ease-in-out infinite",
                      pointerEvents: "none",
                    }}
                  />
                  {/* Floating gold particles */}
                  <div
                    className="perfume-video-particles"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      zIndex: 3,
                      pointerEvents: "none",
                    }}
                  />
                  <video
                    ref={videoRef}
                    className="video-bg fill visible"
                    preload=""
                    playsInline
                    autoPlay
                    muted
                    loop
                    style={{
                      filter: "brightness(0.85) contrast(1.1) saturate(1.2)",
                      zIndex: 0,
                    }}
                  >
                    <source src="/media/laura_rossa_perfume_small.mp4" type="video/mp4" />
                  </video>
                  {/* Cinematic vignette */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      background: "radial-gradient(circle at center, transparent 0%, rgba(0, 0, 0, 0.4) 100%)",
                      zIndex: 4,
                      pointerEvents: "none",
                    }}
                  />
                </div>
                <div className="banner-layers container">
                  <div className="fill banner-link"></div>
                </div>
              </div>
            </div>
            <div 
              className="banner has-hover has-video show-for-medium" 
              id="banner-441241217"
              style={{ 
                paddingTop: "100%", 
                backgroundColor: "rgba(255, 255, 255, 0)" 
              }}
            >
              <div className="banner-inner fill">
                <div className="banner-bg fill" style={{ position: "relative" }}>
                  <div className="video-overlay no-click fill visible" style={{ 
                    background: "linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, transparent 50%)",
                    zIndex: 1,
                  }}></div>
                  {/* Dynamic gold mist overlay */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      background: "radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.15) 0%, transparent 70%)",
                      zIndex: 2,
                      animation: "pulseGlow 6s ease-in-out infinite",
                      pointerEvents: "none",
                    }}
                  />
                  {/* Floating gold particles */}
                  <div
                    className="perfume-video-particles"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      zIndex: 3,
                      pointerEvents: "none",
                    }}
                  />
                  <video
                    className="video-bg fill visible"
                    preload=""
                    playsInline
                    autoPlay
                    muted
                    loop
                    style={{
                      filter: "brightness(0.85) contrast(1.1) saturate(1.2)",
                      zIndex: 0,
                    }}
                  >
                    <source src="/media/laura_rossa_perfume_small.mp4" type="video/mp4" />
                  </video>
                  {/* Cinematic vignette */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      background: "radial-gradient(circle at center, transparent 0%, rgba(0, 0, 0, 0.4) 100%)",
                      zIndex: 4,
                      pointerEvents: "none",
                    }}
                  />
                </div>
                <div className="banner-layers container">
                  <div className="fill banner-link"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="col-1191931587" className="col medium-6 small-12 large-6" style={{ padding: 0 }}>
          <div className="col-inner" style={{ padding: 0 }}>
            <section 
              className="section dark" 
              id="section_341544599"
              style={{
                paddingTop: "0px",
                paddingBottom: "0px",
                minHeight: "100%",
                height: "100%",
                backgroundColor: "rgb(0, 0, 0)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <div className="section-bg fill"></div>
              <div className="section-content relative" style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div className="row" id="row-559554367" style={{ width: "100%" }}>
                  <div id="col-1229215730" className="col small-12 large-12">
                    <div className="col-inner text-center" style={{ padding: "0px 10% 0px 10%" }}>
                      <div id="text-3935558497" className="text" style={{ lineHeight: 1.2 }}>
                        <h2 className="shimmer-text" style={{ lineHeight: "1.2", color: "var(--luxury-gold)", fontSize: "3rem", marginBottom: "10px", fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>
                          JUST ONCE
                        </h2>
                        <p style={{ color: "#ffffff", fontSize: "1rem", marginBottom: "30px" }}>
                          by LAURA ROSSA
                        </p>
                      </div>
                      <div id="gap-1585642128" className="gap-element clearfix" style={{ display: "block", height: "auto", paddingTop: "20px" }}></div>
                      <Link
                        href="/product-category/perfumes"
                        className="button white is-link lowercase"
                        style={{ padding: "10px 30px", display: "inline-block" }}
                      >
                        <span>Shop now</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        #banner-11487375:hover .bg,
        #banner-1052766328:hover .bg {
          transform: scale(1.1);
        }
        
        #banner-11487375,
        #banner-1052766328 {
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
          transition: box-shadow 0.3s ease;
        }
        
        #banner-11487375:hover,
        #banner-1052766328:hover {
          box-shadow: 0 20px 60px rgba(212, 175, 55, 0.3),
                      0 0 80px rgba(212, 175, 55, 0.1);
        }
        
        #row-1759278789 {
          display: flex !important;
          flex-wrap: wrap !important;
        }
        
        #col-437659128 {
          display: flex !important;
        }
        
        #col-1474685368,
        #col-947547601 {
          display: flex !important;
        }
        
        #banner-11487375,
        #banner-1052766328 {
          width: 100% !important;
        }
        
        @media (min-width: 550px) {
          #banner-11487375 { padding-top: 400px; }
          #banner-1052766328 { padding-top: 400px; }
          #banner-414785230 { padding-top: 400px; }
          #banner-441241217 { padding-top: 400px; }
          #banner-1013314526 { padding-top: 400px; }
          #section_341544599 { min-height: 400px; }
        }
        @media (min-width: 850px) {
          #row-1759278789 {
            flex-wrap: nowrap !important;
            flex-direction: row !important;
          }
          
          /* First image - small (left) */
          #col-1474685368 {
            flex: 0 0 25% !important;
            max-width: 25% !important;
          }
          
          /* Second image - bigger (middle) */
          #col-947547601 {
            flex: 0 0 40% !important;
            max-width: 40% !important;
          }
          
          /* Text content - right */
          #col-437659128 {
            flex: 0 0 35% !important;
            max-width: 35% !important;
          }
          
          #banner-11487375 { padding-top: 150% !important; }
          #banner-1052766328 { padding-top: 150% !important; }
          
          /* Full width banner section - make bigger */
          #row-1747349275 {
            display: flex !important;
            flex-wrap: nowrap !important;
          }
          
          #col-246797305 {
            flex: 0 0 25% !important;
            max-width: 25% !important;
          }
          
          #col-1537649906 {
            flex: 0 0 25% !important;
            max-width: 25% !important;
          }
          
          #col-1191931587 {
            flex: 0 0 50% !important;
            max-width: 50% !important;
          }
          
          #banner-1013314526 { 
            padding-top: 100% !important; 
            height: 100% !important;
          }
          
          #banner-414785230,
          #banner-441241217 { 
            padding-top: 100% !important; 
            height: 100% !important;
          }
          
          #section_341544599 { 
            min-height: 100% !important;
            height: 100% !important;
          }
          
          #col-437659128 > .col-inner { padding: 0px 0px 0px 10%; }
          #gap-1988733802 { padding-top: 30px; }
        }
      `}} />
    </>
  );
}
