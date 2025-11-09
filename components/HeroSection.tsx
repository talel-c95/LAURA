"use client";

import { useEffect, useRef } from "react";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Ensure video plays
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay was prevented
      });
    }
  }, []);

  return (
    <>
      <section 
        className="section dark" 
        id="section_1991124523"
        style={{
          paddingTop: "0px",
          paddingBottom: "0px",
          minHeight: "100vh",
          height: "100vh",
          backgroundColor: "rgb(255, 255, 255)",
          position: "relative",
        }}
      >
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
        >
          <source src="/media/video.mp4" type="video/mp4" />
        </video>
        <div 
          className="section-bg-overlay absolute fill"
          style={{ backgroundColor: "rgba(255, 246, 246, 0.099)" }}
        ></div>
      </div>
      <div className="section-content relative" style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div className="row align-center" id="row-887523622" style={{ width: "100%" }}>
          <div id="col-967784806" className="col medium-8 small-12 large-6">
            <div className="col-inner text-center">
              <div 
                id="text-2881550180" 
                className="text"
                style={{ 
                  fontSize: "2.25rem", 
                  lineHeight: 1, 
                  color: "rgb(10, 10, 10)" 
                }}
              >
                <h3 style={{ color: "rgb(10, 10, 10)", margin: 0 }}>The Just Once</h3>
                <h3 style={{ color: "rgb(10, 10, 10)", margin: 0 }}>Collection</h3>
              </div>
              <div 
                id="text-1840490697" 
                className="text"
                style={{ color: "rgb(10, 10, 10)", marginTop: "1rem" }}
              >
                <p style={{ color: "rgb(10, 10, 10)", margin: 0 }}>
                  We believe in and stand alongside the modern woman—strong, elegant, and always on the
                  <br /> move.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        #section_1991124523 {
          min-height: 100vh;
          height: 100vh;
        }
        @media (min-width: 550px) {
          #section_1991124523 {
            min-height: 100vh;
            height: 100vh;
          }
          #section_1991124523 .section-bg-overlay {
            background-color: rgba(255, 246, 246, 0.267);
          }
          #text-2881550180 {
            font-size: 2.5rem;
          }
        }
        @media (min-width: 850px) {
          #section_1991124523 {
            min-height: 100vh;
            height: 100vh;
          }
          #text-2881550180 {
            line-height: 0.75;
          }
        }
      `}} />
    </section>
    </>
  );
}

