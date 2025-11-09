"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

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
  const [isVisible, setIsVisible] = useState(false);

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

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="section" 
      id="section_1026920328" 
      style={{ 
        paddingTop: "0px", 
        paddingBottom: "0px",
        backgroundColor: "#ffffff"
      }}
    >
      <div className="section-bg fill"></div>
      <div className="section-content relative">
        <div className="row row-collapse row-full-width" id="row-1474740486" style={{ margin: 0, display: "flex", flexWrap: "nowrap" }}>
          {categories.map((category, index) => {
            const colIds = [
              "col-1426357327",
              "col-1265193773",
              "col-2133386886",
              "col-826007980",
            ];
            const bannerIds = [
              "banner-1372023640",
              "banner-509155915",
              "banner-321018036",
              "banner-1815770628",
            ];

            return (
              <div 
                key={category.name} 
                id={colIds[index]} 
                className="col medium-3 small-12 large-3 category-banner-col"
                style={{ padding: 0, flex: "1 1 25%", maxWidth: "25%", width: "25%" }}
              >
                <div className="col-inner" style={{ padding: 0, height: "100%" }}>
                  <div 
                    className="banner has-hover category-banner" 
                    id={bannerIds[index]}
                    style={{ 
                      paddingTop: "100%",
                      position: "relative",
                      overflow: "hidden",
                      width: "100%"
                    }}
                  >
                    <div className="banner-inner fill">
                      <div className="banner-bg fill" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}>
                        <Image
                          src={category.image}
                          alt={category.name}
                          fill
                          className="bg attachment-original size-original"
                          style={{ 
                            objectFit: "cover", 
                            objectPosition: "center center",
                            transform: "scale(1.1)"
                          }}
                          sizes="(max-width: 768px) 100vw, 25vw"
                        />
                      </div>
                      <div className="banner-layers container" style={{ position: "relative", height: "100%", zIndex: 2 }}>
                        <Link className="fill" href={category.href} style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 1 }}>
                          <div className="fill banner-link"></div>
                        </Link>
                        <div
                          className={`text-box banner-layer category-label category-label-${index} ${isVisible ? "is-visible" : ""}`}
                          style={{ 
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            zIndex: 3,
                            textAlign: "center",
                            width: "auto"
                          }}
                        >
                          <div className="text-box-content text" style={{ backgroundColor: "transparent" }}>
                            <div className="text-inner">
                              <span
                                className="category-label-text"
                                style={{
                                  color: "#ffffff",
                                  fontSize: "18px",
                                  fontWeight: 500,
                                  textTransform: "uppercase",
                                  letterSpacing: "2px",
                                  textShadow: "0 2px 8px rgba(0, 0, 0, 0.5)",
                                  fontFamily: "Raleway, sans-serif",
                                  display: "block"
                                }}
                              >
                                {category.name}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        .category-banner-col {
          display: flex !important;
        }
        
        .category-banner {
          transition: transform 0.3s ease;
          width: 100%;
        }
        
        .category-banner:hover {
          transform: scale(1.02);
        }
        
        .category-label {
          opacity: 0;
          transform: translate(-50%, -40%);
          transition: opacity 5s ease, transform 5s ease;
        }
        
        .category-label.is-visible {
          opacity: 1;
          transform: translate(-50%, -50%);
        }
        
        .category-label-text {
          transition: all 0.3s ease;
        }
        
        @media (min-width: 550px) {
          #row-1474740486 {
            display: flex !important;
            flex-wrap: nowrap !important;
            width: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
            align-items: stretch !important;
          }
          
          #row-1474740486 > .col {
            flex: 1 1 25% !important;
            max-width: 25% !important;
            width: 25% !important;
            min-width: 0 !important;
            margin: 0 !important;
            padding: 0 !important;
            display: flex !important;
            align-items: stretch !important;
          }
          
          #row-1474740486 > .col > .col-inner {
            height: 100% !important;
            width: 100% !important;
            display: flex !important;
            flex-direction: column !important;
          }
          
          #banner-1372023640, 
          #banner-509155915, 
          #banner-321018036, 
          #banner-1815770628 {
            padding-top: 0 !important;
            height: 100% !important;
            width: 100% !important;
            min-height: 400px !important;
          }
          
          #row-1474740486 .category-banner {
            width: 100% !important;
            height: 100% !important;
            min-height: 400px !important;
          }
          
          #row-1474740486 .banner-inner {
            width: 100% !important;
            height: 100% !important;
            position: absolute !important;
            top: 0 !important;
            left: 0 !important;
            right: 0 !important;
            bottom: 0 !important;
          }
          
          #row-1474740486 .banner-bg {
            width: 100% !important;
            height: 100% !important;
            position: absolute !important;
            top: 0 !important;
            left: 0 !important;
            right: 0 !important;
            bottom: 0 !important;
          }
          
          #row-1474740486 .banner-bg img {
            width: 100% !important;
            height: 100% !important;
            object-fit: cover !important;
            object-position: center center !important;
            transform: scale(1.15) !important;
          }
        }
        
        @media (max-width: 549px) {
          #row-1474740486 {
            flex-wrap: wrap !important;
          }
          
          #row-1474740486 > .col {
            margin-bottom: 0;
            flex: 1 1 100% !important;
            max-width: 100% !important;
            width: 100% !important;
          }
        }
      `}} />
    </section>
  );
}

