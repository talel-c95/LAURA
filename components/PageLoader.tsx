"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Remove loading class after page load
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.documentElement.classList.remove("loading-site");
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="page-loader fixed fill z-top-3">
      <div className="page-loader-inner x50 y50 md-y50 md-x50 lg-y50 lg-x50 absolute">
        <div className="page-loader-logo" style={{ paddingBottom: "30px" }}>
          <a href="/" title="Laura Rossa - the untamed power of femininity" rel="home">
            <Image
              width={396}
              height={100}
              src="/images/logo_2x.png"
              className="header_logo header-logo"
              alt="Laura Rossa"
              priority
            />
          </a>
        </div>
        <div className="page-loader-spin">
          <div className="loading-spin"></div>
        </div>
      </div>
    </div>
  );
}

