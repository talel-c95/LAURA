"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

export default function PerfumeCollection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay was prevented
      });
    }
  }, []);

  return (
    <>
      <section 
        className="section" 
        id="section_1968789669"
        style={{ paddingTop: "30px", paddingBottom: "30px" }}
      >
        <div className="section-bg fill"></div>
        <div className="section-content relative">
          <div id="gap-1390594883" className="gap-element clearfix" style={{ display: "block", height: "auto", paddingTop: "30px" }}></div>
          <div className="row row-small align-middle" id="row-1759278789">
            <div id="col-1474685368" className="col medium-6 small-12 large-3">
              <div className="col-inner" style={{ padding: 0 }}>
                <div 
                  className="banner has-hover" 
                  id="banner-11487375"
                  style={{ 
                    paddingTop: "150%", 
                    backgroundColor: "rgb(255, 255, 255)"
                  }}
                >
                  <div className="banner-inner fill">
                    <div className="banner-bg fill">
                      <Image
                        src="/images/laura_rossa_just_once_perfume_1.png.jpeg"
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
            <div id="col-947547601" className="col medium-6 small-12 large-4">
              <div className="col-inner" style={{ padding: 0 }}>
                <div 
                  className="banner has-hover" 
                  id="banner-1052766328"
                  style={{ 
                    paddingTop: "150%", 
                    backgroundColor: "rgb(255, 255, 255)"
                  }}
                >
                  <div className="banner-inner fill">
                    <div className="banner-bg fill">
                      <Image
                        src="/images/laura_rossa_just_once_perfume_2.png.jpeg"
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
            <div id="col-437659128" className="col medium-12 small-12 large-5">
              <div className="col-inner" style={{ padding: "0px 0px 0px 0" }}>
                <div id="gap-1988733802" className="gap-element clearfix" style={{ display: "block", height: "auto", paddingTop: "15px" }}></div>
                <div id="text-2245884352" className="text" style={{ fontSize: "1.5rem" }}>
                  <h2>Just Once</h2>
                </div>
                <p>
                  Laura Rossa boasts two signature perfumes, Just Once I and Just Once II, perfume
                  extracts featuring bold floral notes.
                </p>
                <p>
                  We believe in and stand alongside the modern woman—strong, elegant, and always on
                  the move.
                </p>
                <Link href="/product-category/perfumes" className="button primary is-link" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span>See the perfumes</span>
                  <FiArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
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
                <div className="banner-bg fill">
                  <div className="video-overlay no-click fill visible"></div>
                  <video
                    ref={videoRef}
                    className="video-bg fill visible"
                    preload=""
                    playsInline
                    autoPlay
                    muted
                    loop
                  >
                    <source src="/media/laura_rossa_perfume_small.mp4" type="video/mp4" />
                  </video>
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
                <div className="banner-bg fill">
                  <div className="video-overlay no-click fill visible"></div>
                  <video
                    className="video-bg fill visible"
                    preload=""
                    playsInline
                    autoPlay
                    muted
                    loop
                  >
                    <source src="/media/laura_rossa_perfume_small.mp4" type="video/mp4" />
                  </video>
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
                        <h2 style={{ lineHeight: "1.2", color: "#ffffff", fontSize: "3rem", marginBottom: "10px" }}>
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
