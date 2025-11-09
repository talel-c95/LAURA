"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Product } from "@/types";

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);

  return (
    <>
      <div id="gap-38203293" className="gap-element clearfix" style={{ display: "block", height: "auto", paddingTop: "60px" }}></div>
      <div className="row large-columns-2 medium-columns- small-columns- row-large">
        {products.map((product) => (
          <div key={product.id} className="col">
            <div className="col-inner">
              <div className="badge-container absolute left top z-1"></div>
              <div className="product-small box has-hover box-normal box-text-bottom">
                <div className="box-image" style={{ position: "relative", width: "100%", paddingTop: "133.33%" }}>
                  <div className="image-zoom" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}>
                    <Link
                      href={`/product/${product.slug}`}
                      aria-label={`${product.name} ${product.description}`}
                      onMouseEnter={() => setHoveredProduct(product.id)}
                      onMouseLeave={() => setHoveredProduct(null)}
                      style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", display: "block" }}
                    >
                      {hoveredProduct === product.id && product.hoverImage ? (
                        <Image
                          src={product.hoverImage}
                          alt={product.name}
                          fill
                          className="show-on-hover absolute fill hide-for-small back-image"
                          sizes="(max-width: 765px) 100vw, 765px"
                          style={{ objectFit: "cover" }}
                        />
                      ) : null}
                      <Image
                        src={product.image}
                        alt={`${product.name} ${product.description}`}
                        fill
                        className="attachment-original size-original"
                        sizes="(max-width: 1020px) 100vw, 1020px"
                        style={{ objectFit: "cover" }}
                      />
                    </Link>
                  </div>
                  <div className="image-tools top right show-on-hover"></div>
                  <div className="image-tools grid-tools text-center hide-for-small bottom hover-slide-in show-on-hover"></div>
                </div>
                <div className="box-text text-center is-large" style={{ backgroundColor: "rgba(255, 255, 255, 0.419)" }}>
                  <div className="title-wrapper">
                    <p className="name product-title woocommerce-loop-product__title">
                      <Link
                        href={`/product/${product.slug}`}
                        className="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                      >
                        {product.name}{" "}
                        <desc>{product.description}</desc>
                      </Link>
                    </p>
                  </div>
                  <div className="price-wrapper">
                    <span className="price">
                      <span className="woocommerce-Price-amount amount">
                        <bdi>
                          {product.price.toFixed(2).replace(".", ",")}{" "}
                          <span className="woocommerce-Price-currencySymbol">€</span>
                        </bdi>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

