"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { useCart } from "@/contexts/CartContext";

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedLanguage, setSelectedLanguage] = useState<string>("all");
  const router = useRouter();
  const { addToCart } = useCart();

  const product = products.find((p) => p.slug === params.slug);

  useEffect(() => {
    if (!product) {
      router.push("/");
    }
  }, [product, router]);

  if (!product) {
    return (
      <div style={{ textAlign: "center", padding: "60px 20px" }}>
        <p style={{ fontFamily: "Raleway, sans-serif", fontSize: "1.1rem", color: "#666" }}>
          Product not found.
        </p>
      </div>
    );
  }

  // Get all available images for the product
  const productImages: string[] = [
    product.image,
    product.hoverImage,
    product.image, // Fallback to main image if no hover
  ].filter((img, index, self): img is string => Boolean(img) && self.indexOf(img) === index);

  const handlePreviousImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? productImages.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev === productImages.length - 1 ? 0 : prev + 1));
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  // Get product description based on category
  const getProductDescription = () => {
    if (product.category === "perfumes") {
      if (product.name.includes("Just once I")) {
        return "Just once I by Laura Rossa redefines the olfactory experience with a range of intense and seductive notes. This perfumed essence excels through its powerful blend of sensual floral aromas and mysterious woody accents. Embodied with charming elegance and enigmatic mystery, the perfume exudes strength and refinement. A harmoniously blended mix creating a persistent and intriguing presence. Discover the timeless and unmistakable refinement of the Laura Rossa brand.";
      } else if (product.name.includes("Just once II")) {
        return "Just once II by Laura Rossa redefines the olfactory experience with a range of intense and seductive notes. This perfumed essence excels through its powerful blend of sensual floral aromas and mysterious woody accents. Embodied with charming elegance and enigmatic mystery, the perfume exudes strength and refinement. A harmoniously blended mix creating a persistent and intriguing presence. Discover the timeless and unmistakable refinement of the Laura Rossa brand.";
      }
    }
    return product.description;
  };

  const getProductNotes = () => {
    if (product.category === "perfumes") {
      return {
        top: ["Fruity Notes", "Turkish rose"],
        middle: ["Nutmeg", "Ylang-Ylang", "Ambergris", "Leather"],
        base: ["Patchouli", "Vanilla", "Musk", "Vetiver", "Virginian Cedar"],
      };
    }
    return null;
  };

  const notes = getProductNotes();

  return (
    <div id="content" role="main" className="content-area">
      <div className="container" style={{ paddingTop: "40px", paddingBottom: "40px" }}>
        <div className="row">
          {/* Product Images */}
          <div className="col medium-6 small-12 large-6">
            <div className="col-inner" style={{ position: "relative" }}>
              <div style={{ position: "relative", width: "100%", paddingTop: "100%", backgroundColor: "#f5f5f5" }}>
                {productImages.length > 0 && (
                  <>
                    {/* Previous Button */}
                    {productImages.length > 1 && (
                      <button
                        onClick={handlePreviousImage}
                        style={{
                          position: "absolute",
                          left: "20px",
                          top: "50%",
                          transform: "translateY(-50%)",
                          background: "rgba(0, 0, 0, 0.5)",
                          border: "none",
                          color: "#ffffff",
                          cursor: "pointer",
                          padding: "15px",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          zIndex: 10,
                        }}
                      >
                        <FiChevronLeft size={24} />
                      </button>
                    )}

                    {/* Main Image */}
                    {productImages.length > 0 && productImages[currentImageIndex] && (
                      <Image
                        src={productImages[currentImageIndex]}
                        alt={product.name}
                        fill
                        style={{ objectFit: "contain" }}
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    )}

                    {/* Next Button */}
                    {productImages.length > 1 && (
                      <button
                        onClick={handleNextImage}
                        style={{
                          position: "absolute",
                          right: "20px",
                          top: "50%",
                          transform: "translateY(-50%)",
                          background: "rgba(0, 0, 0, 0.5)",
                          border: "none",
                          color: "#ffffff",
                          cursor: "pointer",
                          padding: "15px",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          zIndex: 10,
                        }}
                      >
                        <FiChevronRight size={24} />
                      </button>
                    )}

                    {/* Image Indicators */}
                    {productImages.length > 1 && (
                      <div
                        style={{
                          position: "absolute",
                          bottom: "20px",
                          left: "50%",
                          transform: "translateX(-50%)",
                          display: "flex",
                          gap: "8px",
                        }}
                      >
                        {productImages.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            style={{
                              width: "12px",
                              height: "12px",
                              borderRadius: "50%",
                              border: "none",
                              backgroundColor: index === currentImageIndex ? "#1e1e1e" : "#ffffff",
                              cursor: "pointer",
                              padding: 0,
                            }}
                          />
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="col medium-6 small-12 large-6">
            <div className="col-inner" style={{ padding: "40px" }}>
              <h1
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "2rem",
                  fontWeight: 400,
                  color: "#1e1e1e",
                  margin: "0 0 20px 0",
                  lineHeight: "1.3",
                }}
              >
                {product.name}
              </h1>

              {/* Rating */}
              <div style={{ marginBottom: "20px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{ display: "flex", gap: "2px" }}>
                    {[...Array(5)].map((_, i) => (
                      <span key={i} style={{ color: "#1e1e1e", fontSize: "16px" }}>
                        ★
                      </span>
                    ))}
                  </div>
                  <span style={{ fontFamily: "Raleway, sans-serif", fontSize: "0.9rem", color: "#666" }}>
                    Rated <strong>5.00</strong> out of 5 based on 3 customer ratings
                  </span>
                </div>
                <p style={{ fontFamily: "Raleway, sans-serif", fontSize: "0.85rem", color: "#666", marginTop: "5px" }}>
                  (3 customer reviews)
                </p>
              </div>

              {/* Price */}
              <p
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "1.8rem",
                  fontWeight: 400,
                  color: "#1e1e1e",
                  margin: "0 0 20px 0",
                }}
              >
                {product.price.toFixed(2).replace(".", ",")} €
              </p>

              {/* Stock Status */}
              <p
                style={{
                  fontFamily: "Raleway, sans-serif",
                  fontSize: "0.95rem",
                  color: "#28a745",
                  margin: "0 0 30px 0",
                  fontWeight: 500,
                }}
              >
                In stock
              </p>

              {/* Quantity Selector */}
              <div style={{ marginBottom: "30px" }}>
                <label
                  style={{
                    display: "block",
                    fontFamily: "Raleway, sans-serif",
                    fontSize: "0.9rem",
                    color: "#333",
                    marginBottom: "10px",
                    fontWeight: 500,
                  }}
                >
                  {product.name} quantity
                </label>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    border: "1px solid #e0e0e0",
                    width: "fit-content",
                  }}
                >
                  <button
                    onClick={handleDecreaseQuantity}
                    style={{
                      padding: "12px 20px",
                      border: "none",
                      backgroundColor: "#ffffff",
                      cursor: "pointer",
                      fontFamily: "Montserrat, sans-serif",
                      fontSize: "1.2rem",
                      color: "#1e1e1e",
                    }}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    readOnly
                    style={{
                      width: "60px",
                      padding: "12px",
                      border: "none",
                      borderLeft: "1px solid #e0e0e0",
                      borderRight: "1px solid #e0e0e0",
                      textAlign: "center",
                      fontFamily: "Montserrat, sans-serif",
                      fontSize: "1rem",
                      color: "#1e1e1e",
                      outline: "none",
                    }}
                  />
                  <button
                    onClick={handleIncreaseQuantity}
                    style={{
                      padding: "12px 20px",
                      border: "none",
                      backgroundColor: "#ffffff",
                      cursor: "pointer",
                      fontFamily: "Montserrat, sans-serif",
                      fontSize: "1.2rem",
                      color: "#1e1e1e",
                    }}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Add to Cart and Buy Now Buttons */}
              <div style={{ display: "flex", gap: "15px", marginBottom: "30px" }}>
                <button
                  onClick={handleAddToCart}
                  style={{
                    flex: 1,
                    padding: "16px 20px",
                    backgroundColor: "#1e1e1e",
                    color: "#ffffff",
                    border: "none",
                    borderRadius: "0",
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "0.9rem",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    fontWeight: 400,
                    cursor: "pointer",
                    transition: "background-color 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#333")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#1e1e1e")}
                >
                  Add to cart
                </button>
                <button
                  onClick={handleAddToCart}
                  style={{
                    flex: 1,
                    padding: "16px 20px",
                    backgroundColor: "#1e1e1e",
                    color: "#ffffff",
                    border: "none",
                    borderRadius: "0",
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "0.9rem",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    fontWeight: 400,
                    cursor: "pointer",
                    transition: "background-color 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#333")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#1e1e1e")}
                >
                  Buy now
                </button>
              </div>

              {/* Categories */}
              <div style={{ marginBottom: "30px", paddingTop: "20px", borderTop: "1px solid #e0e0e0" }}>
                <p style={{ fontFamily: "Raleway, sans-serif", fontSize: "0.9rem", color: "#666", marginBottom: "10px" }}>
                  <strong>Categories:</strong>
                </p>
                <Link
                  href={`/product-category/${product.category}`}
                  style={{
                    fontFamily: "Raleway, sans-serif",
                    fontSize: "0.9rem",
                    color: "#1e1e1e",
                    textDecoration: "none",
                    textTransform: "capitalize",
                  }}
                >
                  {product.category}
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Description Section */}
        <div className="row" style={{ marginTop: "60px" }}>
          <div className="col medium-12 small-12 large-12">
            <div className="col-inner">
              <h2
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "1.5rem",
                  fontWeight: 400,
                  color: "#1e1e1e",
                  margin: "0 0 20px 0",
                }}
              >
                Description
              </h2>
              <div
                style={{
                  fontFamily: "Raleway, sans-serif",
                  fontSize: "1rem",
                  color: "#333",
                  lineHeight: "1.8",
                  marginBottom: "30px",
                }}
              >
                <p>{getProductDescription()}</p>
              </div>

              {/* Perfume Notes */}
              {notes && (
                <div style={{ marginTop: "30px" }}>
                  <h3
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                      fontSize: "1.2rem",
                      fontWeight: 400,
                      color: "#1e1e1e",
                      margin: "0 0 15px 0",
                    }}
                  >
                    Fragrance Notes
                  </h3>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px" }}>
                    <div>
                      <strong style={{ fontFamily: "Raleway, sans-serif", fontSize: "0.95rem", color: "#1e1e1e" }}>
                        TOP NOTES:
                      </strong>
                      <p style={{ fontFamily: "Raleway, sans-serif", fontSize: "0.9rem", color: "#666", marginTop: "5px" }}>
                        {notes.top.join(", ")}
                      </p>
                    </div>
                    <div>
                      <strong style={{ fontFamily: "Raleway, sans-serif", fontSize: "0.95rem", color: "#1e1e1e" }}>
                        MIDDLE NOTES:
                      </strong>
                      <p style={{ fontFamily: "Raleway, sans-serif", fontSize: "0.9rem", color: "#666", marginTop: "5px" }}>
                        {notes.middle.join(", ")}
                      </p>
                    </div>
                    <div>
                      <strong style={{ fontFamily: "Raleway, sans-serif", fontSize: "0.95rem", color: "#1e1e1e" }}>
                        BASE NOTES:
                      </strong>
                      <p style={{ fontFamily: "Raleway, sans-serif", fontSize: "0.9rem", color: "#666", marginTop: "5px" }}>
                        {notes.base.join(", ")}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Additional Information */}
              <div style={{ marginTop: "40px", paddingTop: "30px", borderTop: "1px solid #e0e0e0" }}>
                <h3
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "1.2rem",
                    fontWeight: 400,
                    color: "#1e1e1e",
                    margin: "0 0 20px 0",
                  }}
                >
                  Additional information
                </h3>
                <table
                  style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    fontFamily: "Raleway, sans-serif",
                    fontSize: "0.9rem",
                  }}
                >
                  <tbody>
                    <tr style={{ borderBottom: "1px solid #e0e0e0" }}>
                      <td style={{ padding: "12px", fontWeight: 600, color: "#1e1e1e", width: "30%" }}>
                        Dimensions
                      </td>
                      <td style={{ padding: "12px", color: "#666" }}>6,0 × 4,0 × 13,0 cm</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Reviews Section */}
              <div style={{ marginTop: "40px", paddingTop: "30px", borderTop: "1px solid #e0e0e0" }}>
                <h3
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "1.2rem",
                    fontWeight: 400,
                    color: "#1e1e1e",
                    margin: "0 0 20px 0",
                  }}
                >
                  Reviews (14)
                </h3>
                <p style={{ fontFamily: "Raleway, sans-serif", fontSize: "0.95rem", color: "#666", marginBottom: "20px" }}>
                  14 reviews for {product.name}
                </p>

                {/* Language Filter */}
                <div style={{ marginBottom: "20px" }}>
                  <button
                    onClick={() => setSelectedLanguage("all")}
                    style={{
                      padding: "8px 15px",
                      marginRight: "10px",
                      backgroundColor: selectedLanguage === "all" ? "#1e1e1e" : "#ffffff",
                      color: selectedLanguage === "all" ? "#ffffff" : "#1e1e1e",
                      border: "1px solid #1e1e1e",
                      cursor: "pointer",
                      fontFamily: "Raleway, sans-serif",
                      fontSize: "0.85rem",
                    }}
                  >
                    All
                  </button>
                  <button
                    onClick={() => setSelectedLanguage("EN")}
                    style={{
                      padding: "8px 15px",
                      marginRight: "10px",
                      backgroundColor: selectedLanguage === "EN" ? "#1e1e1e" : "#ffffff",
                      color: selectedLanguage === "EN" ? "#ffffff" : "#1e1e1e",
                      border: "1px solid #1e1e1e",
                      cursor: "pointer",
                      fontFamily: "Raleway, sans-serif",
                      fontSize: "0.85rem",
                    }}
                  >
                    Show only reviews in EN (3)
                  </button>
                </div>

                {/* Reviews List */}
                <div style={{ marginBottom: "40px" }}>
                  {product.category === "perfumes" && product.name.includes("Just once I") ? (
                    <>
                      {/* Review 1 */}
                      <div style={{ marginBottom: "30px", paddingBottom: "30px", borderBottom: "1px solid #e0e0e0" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                          <span style={{ fontFamily: "Raleway, sans-serif", fontSize: "0.85rem", color: "#666", fontWeight: 600 }}>FR</span>
                          <div style={{ display: "flex", gap: "2px" }}>
                            {[...Array(5)].map((_, i) => (
                              <span key={i} style={{ color: "#1e1e1e", fontSize: "14px" }}>★</span>
                            ))}
                          </div>
                          <span style={{ fontFamily: "Raleway, sans-serif", fontSize: "0.85rem", color: "#666" }}>Rated <strong>5</strong> out of 5</span>
                        </div>
                        <p style={{ fontFamily: "Raleway, sans-serif", fontSize: "0.9rem", color: "#1e1e1e", fontWeight: 600, marginBottom: "5px" }}>
                          <strong>Amelie T</strong> – March 6, 2025
                        </p>
                        <p style={{ fontFamily: "Raleway, sans-serif", fontSize: "0.9rem", color: "#333", lineHeight: "1.6" }}>
                          J&apos;adore ce parfum<br />
                          Je l&apos;utilise depuis sa sortie,je l&apos;ai racheté il y a quelques jours pour l&apos;offrir,
                        </p>
                      </div>

                      {/* Review 2 */}
                      <div style={{ marginBottom: "30px", paddingBottom: "30px", borderBottom: "1px solid #e0e0e0" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                          <span style={{ fontFamily: "Raleway, sans-serif", fontSize: "0.85rem", color: "#666", fontWeight: 600 }}>RO</span>
                          <div style={{ display: "flex", gap: "2px" }}>
                            {[...Array(5)].map((_, i) => (
                              <span key={i} style={{ color: "#1e1e1e", fontSize: "14px" }}>★</span>
                            ))}
                          </div>
                          <span style={{ fontFamily: "Raleway, sans-serif", fontSize: "0.85rem", color: "#666" }}>Rated <strong>5</strong> out of 5</span>
                        </div>
                        <p style={{ fontFamily: "Raleway, sans-serif", fontSize: "0.9rem", color: "#1e1e1e", fontWeight: 600, marginBottom: "5px" }}>
                          <strong>Mihaela Avram</strong> – April 12, 2025
                        </p>
                        <p style={{ fontFamily: "Raleway, sans-serif", fontSize: "0.9rem", color: "#333", lineHeight: "1.6" }}>
                          Senzațional!!<br />
                          Il încadrez în parfumurile mele preferate de când l-am descoperit … aromele fine … complex, fresh … elegant… într-un cuvânt: complet!! Îmi place!<br />
                          Îl recomand cu toată încrederea!
                        </p>
                      </div>

                      {/* Review 3 */}
                      <div style={{ marginBottom: "30px", paddingBottom: "30px", borderBottom: "1px solid #e0e0e0" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                          <span style={{ fontFamily: "Raleway, sans-serif", fontSize: "0.85rem", color: "#666", fontWeight: 600 }}>FR</span>
                          <div style={{ display: "flex", gap: "2px" }}>
                            {[...Array(5)].map((_, i) => (
                              <span key={i} style={{ color: "#1e1e1e", fontSize: "14px" }}>★</span>
                            ))}
                          </div>
                          <span style={{ fontFamily: "Raleway, sans-serif", fontSize: "0.85rem", color: "#666" }}>Rated <strong>5</strong> out of 5</span>
                        </div>
                        <p style={{ fontFamily: "Raleway, sans-serif", fontSize: "0.9rem", color: "#1e1e1e", fontWeight: 600, marginBottom: "5px" }}>
                          <strong>Sandra M</strong> – April 13, 2025
                        </p>
                        <p style={{ fontFamily: "Raleway, sans-serif", fontSize: "0.9rem", color: "#333", lineHeight: "1.6" }}>
                          Parfait<br />
                          Parfum avec une odeur incroyable,
                        </p>
                      </div>

                      {/* Review 4 */}
                      <div style={{ marginBottom: "30px", paddingBottom: "30px", borderBottom: "1px solid #e0e0e0" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                          <span style={{ fontFamily: "Raleway, sans-serif", fontSize: "0.85rem", color: "#666", fontWeight: 600 }}>FR</span>
                          <div style={{ display: "flex", gap: "2px" }}>
                            {[...Array(5)].map((_, i) => (
                              <span key={i} style={{ color: "#1e1e1e", fontSize: "14px" }}>★</span>
                            ))}
                          </div>
                          <span style={{ fontFamily: "Raleway, sans-serif", fontSize: "0.85rem", color: "#666" }}>Rated <strong>5</strong> out of 5</span>
                        </div>
                        <p style={{ fontFamily: "Raleway, sans-serif", fontSize: "0.9rem", color: "#1e1e1e", fontWeight: 600, marginBottom: "5px" }}>
                          <strong>Samira R</strong> – April 25, 2025
                        </p>
                        <p style={{ fontFamily: "Raleway, sans-serif", fontSize: "0.9rem", color: "#333", lineHeight: "1.6" }}>
                          C&apos;est l&apos;une de mes extrais de parfum préférées.
                        </p>
                      </div>

                      {/* Review 5 */}
                      <div style={{ marginBottom: "30px", paddingBottom: "30px", borderBottom: "1px solid #e0e0e0" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                          <span style={{ fontFamily: "Raleway, sans-serif", fontSize: "0.85rem", color: "#666", fontWeight: 600 }}>EN</span>
                          <div style={{ display: "flex", gap: "2px" }}>
                            {[...Array(5)].map((_, i) => (
                              <span key={i} style={{ color: "#1e1e1e", fontSize: "14px" }}>★</span>
                            ))}
                          </div>
                          <span style={{ fontFamily: "Raleway, sans-serif", fontSize: "0.85rem", color: "#666" }}>Rated <strong>5</strong> out of 5</span>
                        </div>
                        <p style={{ fontFamily: "Raleway, sans-serif", fontSize: "0.9rem", color: "#1e1e1e", fontWeight: 600, marginBottom: "5px" }}>
                          <strong>Carolina voltz</strong> – May 6, 2025
                        </p>
                        <p style={{ fontFamily: "Raleway, sans-serif", fontSize: "0.9rem", color: "#333", lineHeight: "1.6" }}>
                          I love this parfums, it smell waaaaaw.
                        </p>
                      </div>

                      {/* Review 6 */}
                      <div style={{ marginBottom: "30px", paddingBottom: "30px", borderBottom: "1px solid #e0e0e0" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                          <span style={{ fontFamily: "Raleway, sans-serif", fontSize: "0.85rem", color: "#666", fontWeight: 600 }}>FR</span>
                          <div style={{ display: "flex", gap: "2px" }}>
                            {[...Array(5)].map((_, i) => (
                              <span key={i} style={{ color: "#1e1e1e", fontSize: "14px" }}>★</span>
                            ))}
                          </div>
                          <span style={{ fontFamily: "Raleway, sans-serif", fontSize: "0.85rem", color: "#666" }}>Rated <strong>5</strong> out of 5</span>
                        </div>
                        <p style={{ fontFamily: "Raleway, sans-serif", fontSize: "0.9rem", color: "#1e1e1e", fontWeight: 600, marginBottom: "5px" }}>
                          <strong>Claire D</strong> – May 9, 2025
                        </p>
                        <p style={{ fontFamily: "Raleway, sans-serif", fontSize: "0.9rem", color: "#333", lineHeight: "1.6" }}>
                          Odeur incroyable<br />
                          J&apos;ai acheté ce super parfum a ma mère pour Noel ,car elle avait eu un coup de cœur ! Il sent incroyablement bon!
                        </p>
                      </div>

                      {/* Review 7 */}
                      <div style={{ marginBottom: "30px", paddingBottom: "30px", borderBottom: "1px solid #e0e0e0" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                          <span style={{ fontFamily: "Raleway, sans-serif", fontSize: "0.85rem", color: "#666", fontWeight: 600 }}>FR</span>
                          <div style={{ display: "flex", gap: "2px" }}>
                            {[...Array(5)].map((_, i) => (
                              <span key={i} style={{ color: "#1e1e1e", fontSize: "14px" }}>★</span>
                            ))}
                          </div>
                          <span style={{ fontFamily: "Raleway, sans-serif", fontSize: "0.85rem", color: "#666" }}>Rated <strong>5</strong> out of 5</span>
                        </div>
                        <p style={{ fontFamily: "Raleway, sans-serif", fontSize: "0.9rem", color: "#1e1e1e", fontWeight: 600, marginBottom: "5px" }}>
                          <strong>Aline V</strong> – May 19, 2025
                        </p>
                        <p style={{ fontFamily: "Raleway, sans-serif", fontSize: "0.9rem", color: "#333", lineHeight: "1.6" }}>
                          j&apos;aime se parfum je l&apos;avais je commande encore il et super
                        </p>
                      </div>

                      {/* Review 8 */}
                      <div style={{ marginBottom: "30px", paddingBottom: "30px", borderBottom: "1px solid #e0e0e0" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                          <span style={{ fontFamily: "Raleway, sans-serif", fontSize: "0.85rem", color: "#666", fontWeight: 600 }}>FR</span>
                          <div style={{ display: "flex", gap: "2px" }}>
                            {[...Array(5)].map((_, i) => (
                              <span key={i} style={{ color: "#1e1e1e", fontSize: "14px" }}>★</span>
                            ))}
                          </div>
                          <span style={{ fontFamily: "Raleway, sans-serif", fontSize: "0.85rem", color: "#666" }}>Rated <strong>5</strong> out of 5</span>
                        </div>
                        <p style={{ fontFamily: "Raleway, sans-serif", fontSize: "0.9rem", color: "#1e1e1e", fontWeight: 600, marginBottom: "5px" }}>
                          <strong>Amina R</strong> – June 11, 2025
                        </p>
                        <p style={{ fontFamily: "Raleway, sans-serif", fontSize: "0.9rem", color: "#333", lineHeight: "1.6" }}>
                          Splendide<br />
                          C&apos;est un parfum sublime et envoûtant, agréable. Il n&apos;est pas imposant.
                        </p>
                      </div>

                      {/* Review 9 */}
                      <div style={{ marginBottom: "30px", paddingBottom: "30px", borderBottom: "1px solid #e0e0e0" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                          <span style={{ fontFamily: "Raleway, sans-serif", fontSize: "0.85rem", color: "#666", fontWeight: 600 }}>FR</span>
                          <div style={{ display: "flex", gap: "2px" }}>
                            {[...Array(5)].map((_, i) => (
                              <span key={i} style={{ color: "#1e1e1e", fontSize: "14px" }}>★</span>
                            ))}
                          </div>
                          <span style={{ fontFamily: "Raleway, sans-serif", fontSize: "0.85rem", color: "#666" }}>Rated <strong>5</strong> out of 5</span>
                        </div>
                        <p style={{ fontFamily: "Raleway, sans-serif", fontSize: "0.9rem", color: "#1e1e1e", fontWeight: 600, marginBottom: "5px" }}>
                          <strong>Laure P</strong> – June 12, 2025
                        </p>
                        <p style={{ fontFamily: "Raleway, sans-serif", fontSize: "0.9rem", color: "#333", lineHeight: "1.6" }}>
                          j&apos;adore ce produit<br />
                          ma fille me l&apos;a offert pour mon anniversaire et il convient parfaitement à ma peau
                        </p>
                      </div>

                      {/* Review 10 */}
                      <div style={{ marginBottom: "30px", paddingBottom: "30px", borderBottom: "1px solid #e0e0e0" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                          <span style={{ fontFamily: "Raleway, sans-serif", fontSize: "0.85rem", color: "#666", fontWeight: 600 }}>FR</span>
                          <div style={{ display: "flex", gap: "2px" }}>
                            {[...Array(5)].map((_, i) => (
                              <span key={i} style={{ color: "#1e1e1e", fontSize: "14px" }}>★</span>
                            ))}
                          </div>
                          <span style={{ fontFamily: "Raleway, sans-serif", fontSize: "0.85rem", color: "#666" }}>Rated <strong>5</strong> out of 5</span>
                        </div>
                        <p style={{ fontFamily: "Raleway, sans-serif", fontSize: "0.9rem", color: "#1e1e1e", fontWeight: 600, marginBottom: "5px" }}>
                          <strong>Brigitte</strong> – June 16, 2025
                        </p>
                        <p style={{ fontFamily: "Raleway, sans-serif", fontSize: "0.9rem", color: "#333", lineHeight: "1.6" }}>
                          J&apos;ADORE !<br />
                          J&apos;ai acheté ce parfum avant Noël je l&apos;adore, il sent très bon et tiens toute la journée
                        </p>
                      </div>

                      {/* Review 11 */}
                      <div style={{ marginBottom: "30px", paddingBottom: "30px", borderBottom: "1px solid #e0e0e0" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                          <span style={{ fontFamily: "Raleway, sans-serif", fontSize: "0.85rem", color: "#666", fontWeight: 600 }}>EN</span>
                          <div style={{ display: "flex", gap: "2px" }}>
                            {[...Array(5)].map((_, i) => (
                              <span key={i} style={{ color: "#1e1e1e", fontSize: "14px" }}>★</span>
                            ))}
                          </div>
                          <span style={{ fontFamily: "Raleway, sans-serif", fontSize: "0.85rem", color: "#666" }}>Rated <strong>5</strong> out of 5</span>
                        </div>
                        <p style={{ fontFamily: "Raleway, sans-serif", fontSize: "0.9rem", color: "#1e1e1e", fontWeight: 600, marginBottom: "5px" }}>
                          <strong>Rose W</strong> – June 22, 2025
                        </p>
                        <p style={{ fontFamily: "Raleway, sans-serif", fontSize: "0.9rem", color: "#333", lineHeight: "1.6" }}>
                          Very special …
                        </p>
                      </div>

                      {/* Review 12 */}
                      <div style={{ marginBottom: "30px", paddingBottom: "30px", borderBottom: "1px solid #e0e0e0" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                          <span style={{ fontFamily: "Raleway, sans-serif", fontSize: "0.85rem", color: "#666", fontWeight: 600 }}>FR</span>
                          <div style={{ display: "flex", gap: "2px" }}>
                            {[...Array(5)].map((_, i) => (
                              <span key={i} style={{ color: "#1e1e1e", fontSize: "14px" }}>★</span>
                            ))}
                          </div>
                          <span style={{ fontFamily: "Raleway, sans-serif", fontSize: "0.85rem", color: "#666" }}>Rated <strong>5</strong> out of 5</span>
                        </div>
                        <p style={{ fontFamily: "Raleway, sans-serif", fontSize: "0.9rem", color: "#1e1e1e", fontWeight: 600, marginBottom: "5px" }}>
                          <strong>Marie T</strong> – June 25, 2025
                        </p>
                        <p style={{ fontFamily: "Raleway, sans-serif", fontSize: "0.9rem", color: "#333", lineHeight: "1.6" }}>
                          Un parfum que je recommande
                        </p>
                      </div>

                      {/* Review 13 */}
                      <div style={{ marginBottom: "30px", paddingBottom: "30px", borderBottom: "1px solid #e0e0e0" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                          <span style={{ fontFamily: "Raleway, sans-serif", fontSize: "0.85rem", color: "#666", fontWeight: 600 }}>EN</span>
                          <div style={{ display: "flex", gap: "2px" }}>
                            {[...Array(5)].map((_, i) => (
                              <span key={i} style={{ color: "#1e1e1e", fontSize: "14px" }}>★</span>
                            ))}
                          </div>
                          <span style={{ fontFamily: "Raleway, sans-serif", fontSize: "0.85rem", color: "#666" }}>Rated <strong>5</strong> out of 5</span>
                        </div>
                        <p style={{ fontFamily: "Raleway, sans-serif", fontSize: "0.9rem", color: "#1e1e1e", fontWeight: 600, marginBottom: "5px" }}>
                          <strong>Andreea P.</strong> – July 3, 2025
                        </p>
                        <p style={{ fontFamily: "Raleway, sans-serif", fontSize: "0.9rem", color: "#333", lineHeight: "1.6" }}>
                          Perfect pentru zilele de vara, cu aroma floral-fructata.
                        </p>
                      </div>

                      {/* Review 14 */}
                      <div style={{ marginBottom: "30px", paddingBottom: "30px", borderBottom: "1px solid #e0e0e0" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                          <span style={{ fontFamily: "Raleway, sans-serif", fontSize: "0.85rem", color: "#666", fontWeight: 600 }}>IT</span>
                          <div style={{ display: "flex", gap: "2px" }}>
                            {[...Array(5)].map((_, i) => (
                              <span key={i} style={{ color: "#1e1e1e", fontSize: "14px" }}>★</span>
                            ))}
                          </div>
                          <span style={{ fontFamily: "Raleway, sans-serif", fontSize: "0.85rem", color: "#666" }}>Rated <strong>5</strong> out of 5</span>
                        </div>
                        <p style={{ fontFamily: "Raleway, sans-serif", fontSize: "0.9rem", color: "#1e1e1e", fontWeight: 600, marginBottom: "5px" }}>
                          <strong>Carlotta</strong> – July 6, 2025
                        </p>
                        <p style={{ fontFamily: "Raleway, sans-serif", fontSize: "0.9rem", color: "#333", lineHeight: "1.6" }}>
                          Questo profumo ha un odore molto buono.
                        </p>
                      </div>
                    </>
                  ) : (
                    <p style={{ fontFamily: "Raleway, sans-serif", fontSize: "0.9rem", color: "#666" }}>
                      No reviews yet. Be the first to review this product!
                    </p>
                  )}
                </div>

                {/* Add Review Form */}
                <div style={{ marginTop: "40px", paddingTop: "30px", borderTop: "1px solid #e0e0e0" }}>
                  <h4
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                      fontSize: "1.1rem",
                      fontWeight: 400,
                      color: "#1e1e1e",
                      margin: "0 0 20px 0",
                    }}
                  >
                    Add a review
                  </h4>
                  <form>
                    <div style={{ marginBottom: "20px" }}>
                      <label style={{ display: "block", fontFamily: "Raleway, sans-serif", fontSize: "0.9rem", color: "#333", marginBottom: "8px", fontWeight: 500 }}>
                        Your rating *
                      </label>
                      <div style={{ display: "flex", gap: "5px" }}>
                        {[1, 2, 3, 4, 5].map((rating) => (
                          <button
                            key={rating}
                            type="button"
                            style={{
                              background: "none",
                              border: "none",
                              cursor: "pointer",
                              fontSize: "18px",
                              color: "#ccc",
                            }}
                            onMouseEnter={(e) => {
                              const stars = e.currentTarget.parentElement?.children;
                              if (stars) {
                                for (let i = 0; i <= rating - 1; i++) {
                                  (stars[i] as HTMLElement).style.color = "#1e1e1e";
                                }
                              }
                            }}
                            onMouseLeave={(e) => {
                              const stars = e.currentTarget.parentElement?.children;
                              if (stars) {
                                for (let i = 0; i < 5; i++) {
                                  (stars[i] as HTMLElement).style.color = "#ccc";
                                }
                              }
                            }}
                          >
                            ★
                          </button>
                        ))}
                      </div>
                      <p style={{ fontFamily: "Raleway, sans-serif", fontSize: "0.8rem", color: "#666", marginTop: "5px" }}>
                        {[1, 2, 3, 4, 5].map((num) => `${num} of 5 stars`).join(" • ")}
                      </p>
                    </div>
                    <div style={{ marginBottom: "20px" }}>
                      <label style={{ display: "block", fontFamily: "Raleway, sans-serif", fontSize: "0.9rem", color: "#333", marginBottom: "8px", fontWeight: 500 }}>
                        Your review *
                      </label>
                      <textarea
                        style={{
                          width: "100%",
                          padding: "12px",
                          border: "1px solid #e0e0e0",
                          borderRadius: "0",
                          fontFamily: "Raleway, sans-serif",
                          fontSize: "0.9rem",
                          minHeight: "120px",
                          resize: "vertical",
                        }}
                        required
                      />
                    </div>
                    <div style={{ marginBottom: "20px" }}>
                      <label style={{ display: "block", fontFamily: "Raleway, sans-serif", fontSize: "0.9rem", color: "#333", marginBottom: "8px", fontWeight: 500 }}>
                        Name *
                      </label>
                      <input
                        type="text"
                        style={{
                          width: "100%",
                          padding: "12px",
                          border: "1px solid #e0e0e0",
                          borderRadius: "0",
                          fontFamily: "Raleway, sans-serif",
                          fontSize: "0.9rem",
                        }}
                        required
                      />
                    </div>
                    <div style={{ marginBottom: "20px" }}>
                      <label style={{ display: "block", fontFamily: "Raleway, sans-serif", fontSize: "0.9rem", color: "#333", marginBottom: "8px", fontWeight: 500 }}>
                        Email *
                      </label>
                      <input
                        type="email"
                        style={{
                          width: "100%",
                          padding: "12px",
                          border: "1px solid #e0e0e0",
                          borderRadius: "0",
                          fontFamily: "Raleway, sans-serif",
                          fontSize: "0.9rem",
                        }}
                        required
                      />
                    </div>
                    <div style={{ marginBottom: "20px" }}>
                      <label style={{ display: "flex", alignItems: "center", gap: "8px", fontFamily: "Raleway, sans-serif", fontSize: "0.85rem", color: "#666", cursor: "pointer" }}>
                        <input type="checkbox" style={{ cursor: "pointer" }} />
                        Save my name, email, and website in this browser for the next time I comment.
                      </label>
                    </div>
                    <button
                      type="submit"
                      style={{
                        padding: "12px 30px",
                        backgroundColor: "#1e1e1e",
                        color: "#ffffff",
                        border: "none",
                        borderRadius: "0",
                        fontFamily: "Montserrat, sans-serif",
                        fontSize: "0.9rem",
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                        fontWeight: 400,
                        cursor: "pointer",
                        transition: "background-color 0.3s ease",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#333")}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#1e1e1e")}
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>

              {/* Related Products */}
              <div style={{ marginTop: "60px", paddingTop: "40px", borderTop: "1px solid #e0e0e0" }}>
                <h3
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "1.5rem",
                    fontWeight: 400,
                    color: "#1e1e1e",
                    margin: "0 0 30px 0",
                  }}
                >
                  Related products
                </h3>
                <div className="row large-columns-4 medium-columns-2 small-columns- row-normal">
                  {products
                    .filter((p) => p.category === product.category && p.id !== product.id)
                    .slice(0, 4)
                    .map((relatedProduct) => (
                      <div key={relatedProduct.id} className="col">
                        <div className="col-inner">
                          <div className="product-small box has-hover box-border-bottom text-center">
                            <div className="box-image" style={{ position: "relative", width: "100%", paddingTop: "133.33%" }}>
                              <Link
                                href={`/product/${relatedProduct.slug}`}
                                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", display: "block" }}
                              >
                                <Image
                                  src={relatedProduct.image}
                                  alt={relatedProduct.name}
                                  fill
                                  className="attachment-original size-original"
                                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                  style={{ objectFit: "cover" }}
                                />
                              </Link>
                            </div>
                            <div className="box-text text-center" style={{ padding: "20px 15px" }}>
                              <p className="category-label uppercase is-smaller no-text-transform text-opacity" style={{ marginBottom: "5px", fontSize: "0.75rem", color: "#666" }}>
                                {relatedProduct.category}
                              </p>
                              <p className="name product-title" style={{ marginBottom: "5px" }}>
                                <Link href={`/product/${relatedProduct.slug}`} style={{ color: "#1e1e1e", textDecoration: "none", fontFamily: "Raleway, sans-serif", fontSize: "0.95rem" }}>
                                  {relatedProduct.name}
                                </Link>
                              </p>
                              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "2px", marginBottom: "10px" }}>
                                {[...Array(5)].map((_, i) => (
                                  <span key={i} style={{ color: "#1e1e1e", fontSize: "12px" }}>★</span>
                                ))}
                              </div>
                              <p className="price" style={{ fontFamily: "Montserrat, sans-serif", fontSize: "1rem", fontWeight: 400 }}>
                                <span className="woocommerce-Price-amount amount">
                                  <span className="woocommerce-Price-currencySymbol">€</span>
                                  {relatedProduct.price.toFixed(2).replace(".", ",")}
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

