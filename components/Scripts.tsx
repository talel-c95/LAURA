"use client";

import { useEffect } from "react";
import Script from "next/script";

export default function Scripts() {
  useEffect(() => {
    // Initialize no-js to js class replacement
    if (typeof document !== "undefined") {
      const html = document.documentElement;
      html.className = html.className.replace(/\bno-js\b/, "js");
    }
  }, []);

  return (
    <>
      {/* Load jQuery and other scripts if needed */}
      <Script src="/js/jquery.min.js" strategy="lazyOnload" />
      {/* Add other scripts as needed */}
    </>
  );
}

