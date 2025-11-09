import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Story - Laura Rossa",
  description: "Laura Rossa is a French fashion brand, born in the enchanting heart of Paris – a city synonymous with timeless elegance and artistic allure.",
};

export default function OurStoryPage() {
  return (
    <div id="content" role="main">
      {/* Combined Hero and Introduction Section with Images */}
      <section 
        className="section" 
        id="section-story-hero-intro"
        style={{ paddingTop: "80px", paddingBottom: "60px" }}
      >
        <div className="section-bg fill"></div>
        <div className="section-content relative">
          {/* Title and Tagline */}
          <div className="row">
            <div className="col small-12 large-12">
              <div className="col-inner text-center">
                <h1 style={{ fontSize: "3rem", fontWeight: 300, marginBottom: "10px", fontFamily: "Montserrat, sans-serif", color: "#1e1e1e" }}>
                  Laura Rossa
                </h1>
                <h2 style={{ fontSize: "1.2rem", fontWeight: 300, letterSpacing: "3px", textTransform: "uppercase", color: "#666", fontFamily: "Raleway, sans-serif", marginBottom: "50px" }}>
                  the untamed power of femininity
                </h2>
              </div>
            </div>
          </div>

          {/* Fashion Illustration */}
          <div className="row row-full-width" style={{ marginBottom: "50px", margin: "0 auto 50px auto", width: "100%", maxWidth: "1400px" }}>
            <div className="col small-12 large-12" style={{ padding: "0 20px" }}>
              <div className="col-inner" style={{ padding: 0 }}>
                <div style={{ position: "relative", width: "100%", paddingTop: "40%", overflow: "hidden" }}>
                  <Image
                    src="/images/zakaria1.png"
                    alt="Fashion illustration"
                    fill
                    style={{ objectFit: "cover", objectPosition: "center center" }}
                    sizes="(max-width: 768px) 100vw, 1400px"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Introduction Text */}
          <div className="row">
            <div className="col small-12 large-10" style={{ margin: "0 auto" }}>
              <div className="col-inner">
                <div className="text" style={{ fontSize: "1.1rem", lineHeight: 1.8, textAlign: "left", fontFamily: "Raleway, sans-serif", color: "#333" }}>
                  <p>
                    Laura Rossa is a French fashion brand, born in the enchanting heart of Paris – a city synonymous with timeless elegance and artistic allure. From this iconic epicenter of style, the founders embarked on an remarkable journey to bring their vision to life. Blending classical refinement with a daring modern edge, Laura Rossa seeks to redefine sophistication, offering collections that transcend fleeting trends and inspire every woman to express her unique essence and personal style.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section with Beige Background */}
      <section 
        className="section" 
        id="section-story-quote"
        style={{ paddingTop: "60px", paddingBottom: "60px", backgroundColor: "#f8f0ed" }}
      >
        <div className="section-bg fill"></div>
        <div className="section-content relative">
          <div className="row">
            <div className="col small-12 large-10" style={{ margin: "0 auto" }}>
              <div className="col-inner">
                <div className="text" style={{ fontSize: "1.2rem", lineHeight: 1.8, textAlign: "left", fontFamily: "Raleway, sans-serif", color: "#1e1e1e" }}>
                  <p style={{ fontWeight: 300, fontStyle: "italic", marginBottom: "25px" }}>
                    &ldquo;Laura Rossa is the tale of my life – a story of a woman who dedicates time and patience to what truly matters. My passion for fashion has been a timeless source of inspiration, as a woman&apos;s sense of style is her most compelling introduction. The unwavering support of those around me, their exceptional talent, and the vibrant energy of Paris have shaped the vision of a brand that exudes subtle elegance, simplicity, and refinement – all without a hint of ostentation&rdquo;
                  </p>
                  <p style={{ fontSize: "0.95rem", fontWeight: 500, color: "#1e1e1e" }}>
                    <strong>Hoda Alaia</strong> • founder and creative Director of the Laura Rossa French Brand
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section 
        className="section" 
        id="section-mission"
        style={{ paddingTop: "60px", paddingBottom: "60px" }}
      >
        <div className="section-bg fill"></div>
        <div className="section-content relative">
          <div className="row">
            <div className="col small-12 large-6">
              <div className="col-inner">
                <h2 style={{ fontSize: "2.5rem", fontWeight: 300, marginBottom: "30px", fontFamily: "Montserrat, sans-serif", color: "#1e1e1e" }}>
                  Our Mission
                </h2>
              </div>
            </div>
            <div className="col small-12 large-6">
              <div className="col-inner">
                <div className="text" style={{ fontSize: "1.1rem", lineHeight: 1.8, textAlign: "left", fontFamily: "Raleway, sans-serif", color: "#333" }}>
                  <p>
                    Beyond trends, <strong>Laura Rossa</strong> embodies the untamed force of modern femininity: discreet elegance, timeless refinement, and the power to leave a mark.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Laura Rossa – the meaning Section with Beige Background */}
      <section 
        className="section" 
        id="section-meaning"
        style={{ paddingTop: "60px", paddingBottom: "60px", backgroundColor: "#f8f0ed" }}
      >
        <div className="section-bg fill"></div>
        <div className="section-content relative">
          <div className="row">
            <div className="col small-12 large-6">
              <div className="col-inner">
                <h2 style={{ fontSize: "2.5rem", fontWeight: 300, marginBottom: "30px", fontFamily: "Montserrat, sans-serif", color: "#1e1e1e" }}>
                  Laura Rossa – the meaning
                </h2>
                <div className="text" style={{ fontSize: "1.1rem", lineHeight: 1.8, textAlign: "left", fontFamily: "Raleway, sans-serif", color: "#333" }}>
                  <p style={{ marginBottom: "20px" }}>
                    Hoda Alaia, the founder, chose this name to honor a beloved person named Laura and to perpetuate the values of victory through elegance and refinement. As Hoda aged and could not fulfill all her dreams, she asked her children to carry on this legacy—thus, <strong>Laura Rossa</strong> was born.
                  </p>
                </div>
              </div>
            </div>
            <div className="col small-12 large-6">
              <div className="col-inner">
                <div className="text" style={{ fontSize: "1.1rem", lineHeight: 1.8, textAlign: "left", fontFamily: "Raleway, sans-serif", color: "#333" }}>
                  <ul style={{ paddingLeft: "20px", listStyle: "disc" }}>
                    <li style={{ marginBottom: "15px" }}>
                      <strong>Laura</strong> (from the Latin <em>laurus</em>, laurel plant) symbolizes victory, honor, and fame. The name evokes strength, success, and wisdom.
                    </li>
                    <li style={{ marginBottom: "15px" }}>
                      <strong>Rossa</strong> (red) represents femininity, passion, sensuality, and inner energy.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row" style={{ marginTop: "30px" }}>
            <div className="col small-12 large-12">
              <div className="col-inner">
                <div className="text" style={{ fontSize: "1.1rem", lineHeight: 1.8, textAlign: "left", fontFamily: "Raleway, sans-serif", color: "#333" }}>
                  <p style={{ marginBottom: "15px" }}>
                    The roots of the brand are in the heart of European fashion – Paris, on Avenue des Champs-Élysées.
                  </p>
                  <p>
                    It all started in the family workshop opened in the late &apos;70s, Hoda Alaia, passionate about fashion design and tailoring since childhood, put her first creations on paper and later brought her vision to life.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tradition Section with Images */}
      <section 
        className="section" 
        id="section-tradition"
        style={{ paddingTop: "60px", paddingBottom: "60px" }}
      >
        <div className="section-bg fill"></div>
        <div className="section-content relative">
          <div className="row">
            <div className="col small-12 large-6">
              <div className="col-inner" style={{ position: "relative", minHeight: "600px" }}>
                {/* Shoe image - top left */}
                <div style={{ position: "absolute", top: 0, left: 0, width: "50%", paddingTop: "60%", overflow: "hidden" }}>
                  <Image
                    src="/images/6_5400-3.jpg.jpeg"
                    alt="Elegant high-heeled shoe"
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </div>
                {/* Woman with perfume - bottom right of left side */}
                <div style={{ position: "absolute", bottom: 0, right: 0, width: "55%", paddingTop: "75%", overflow: "hidden" }}>
                  <Image
                    src="/images/laura_rossa_just_once_perfume_1.png.jpeg"
                    alt="Woman with perfume"
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, 30vw"
                  />
                </div>
              </div>
            </div>
            <div className="col small-12 large-6">
              <div className="col-inner">
                <h2 style={{ fontSize: "2.5rem", fontWeight: 300, marginBottom: "30px", fontFamily: "Montserrat, sans-serif", color: "#1e1e1e" }}>
                  Laura Rossa – Tradition, Craftsmanship, and Heritage
                </h2>
                <div className="text" style={{ fontSize: "1.1rem", lineHeight: 1.8, textAlign: "left", fontFamily: "Raleway, sans-serif", color: "#333" }}>
                  <ul style={{ paddingLeft: "20px", listStyle: "disc" }}>
                    <li style={{ marginBottom: "20px" }}>
                      <strong>Artisanal Excellence Passed Down Generations</strong>: Each Laura Rossa piece reflects the experience and refinement of a family dedicated to luxury fashion, where the art of tailoring is a ritual, and attention to detail is a signature.
                    </li>
                    <li style={{ marginBottom: "20px" }}>
                      <strong>Absolute Respect for Materials, Craftsmanship, and Tradition</strong>: We select only the finest materials, employ couture techniques, and maintain connections with global design masters, including collaborations and exchanges with names like Christian Dior.
                    </li>
                  </ul>
                  <p style={{ marginTop: "25px" }}>
                    This transgenerational heritage forms the aesthetic and ethical foundation of the <strong>Laura Rossa</strong> brand.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Evolution Section */}
      <section 
        className="section" 
        id="section-evolution"
        style={{ paddingTop: "60px", paddingBottom: "60px" }}
      >
        <div className="section-bg fill"></div>
        <div className="section-content relative">
          <div className="row">
            <div className="col small-12 large-5">
              <div className="col-inner">
                <h2 style={{ fontSize: "2.5rem", fontWeight: 300, marginBottom: "30px", fontFamily: "Montserrat, sans-serif", color: "#1e1e1e", lineHeight: 1.2 }}>
                  Laura Rossa<br />Evolution<br />and<br />International<br />Expansion
                </h2>
              </div>
            </div>
            <div className="col small-12 large-7">
              <div className="col-inner">
                <div className="text" style={{ fontSize: "1.1rem", lineHeight: 1.8, textAlign: "left", fontFamily: "Raleway, sans-serif", color: "#333" }}>
                  <ul style={{ paddingLeft: "20px", listStyle: "disc" }}>
                    <li style={{ marginBottom: "15px" }}>
                      <strong>2024</strong>: Expansion to Romania (Calea 13 Septembrie 90, Bucharest – JW Marriott Grand Avenue)
                    </li>
                    <li style={{ marginBottom: "15px" }}>
                      <strong>2024</strong>: Opening flagship boutique on Avenue des Champs-Élysées, Paris
                    </li>
                    <li style={{ marginBottom: "15px" }}>
                      <strong>2024</strong>: Expansion to Germany (Scheffelstraße 18, 68723 Schwetzingen)
                    </li>
                    <li style={{ marginBottom: "15px" }}>
                      <strong>Online Presence</strong>: distribution in over 30 markets across Europe, North Africa, and the Middle East via laurarossa.com
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Aesthetics Section - Matching Live Site Layout */}
      <section 
        className="section" 
        id="section-aesthetics"
        style={{ paddingTop: "60px", paddingBottom: "60px" }}
      >
        <div className="section-bg fill"></div>
        <div className="section-content relative">
          <div className="row" style={{ alignItems: "stretch" }}>
            {/* Left side - Image Grid */}
            <div className="col small-12 large-6">
              <div className="col-inner">
                {/* Container for all three images */}
                <div style={{ 
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  height: "100%"
                }}>
                  {/* Top row - Two images side by side */}
                  <div style={{ 
                    display: "flex",
                    gap: "20px",
                    height: "300px"
                  }}>
                    {/* Woman with perfume - top left */}
                    <div style={{ 
                      position: "relative",
                      flex: "1",
                      overflow: "hidden", 
                      backgroundColor: "#f8e8e8"
                    }}>
                      <Image
                        src="/images/laura_rossa_just_once_perfume_1.png.jpeg"
                        alt="Woman with perfume"
                        fill
                        style={{ objectFit: "cover" }}
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                    </div>
                    
                    {/* Blue high heels - top right */}
                    <div style={{ 
                      position: "relative",
                      flex: "1",
                      overflow: "hidden", 
                      backgroundColor: "#ffffff"
                    }}>
                      <Image
                        src="/images/5_5400-2.jpg.jpeg"
                        alt="Blue high heels"
                        fill
                        style={{ objectFit: "cover" }}
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                    </div>
                  </div>
                  
                  {/* Bottom - Large image spanning full width */}
                  <div style={{ 
                    position: "relative",
                    height: "500px",
                    overflow: "hidden", 
                    backgroundColor: "#ffffff"
                  }}>
                    <Image
                      src="/images/6_5400-3.jpg.jpeg"
                      alt="Dark elegant heels"
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
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
                <h2 style={{ 
                  fontSize: "2.5rem", 
                  fontWeight: 300, 
                  marginBottom: "30px", 
                  fontFamily: "Montserrat, sans-serif", 
                  color: "#1e1e1e" 
                }}>
                  Aesthetics and Style
                </h2>
                <div className="text" style={{ 
                  fontSize: "1.1rem", 
                  lineHeight: 1.8, 
                  textAlign: "left", 
                  fontFamily: "Raleway, sans-serif", 
                  color: "#333" 
                }}>
                  <p style={{ marginBottom: "20px" }}>
                    The <strong>Laura Rossa</strong> style blends classic refinement with modern lines:
                  </p>
                  <ul style={{ paddingLeft: "20px", listStyle: "disc" }}>
                    <li style={{ marginBottom: "12px" }}>
                      <strong>Clear and timeless cuts</strong>
                    </li>
                    <li style={{ marginBottom: "12px" }}>
                      <strong>Discreet color palette</strong> – black, emerald green, natural tones
                    </li>
                    <li style={{ marginBottom: "12px" }}>
                      <strong>Fine textures</strong> – blends of wool, cotton, linen
                    </li>
                    <li style={{ marginBottom: "12px" }}>
                      <strong>Limited Series Quality</strong> – each collection produced in limited runs for exclusivity and meticulous attention to detail
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR JOURNEY Section with Image */}
      <section 
        className="section" 
        id="section-journey"
        style={{ paddingTop: "60px", paddingBottom: "60px" }}
      >
        <div className="section-bg fill"></div>
        <div className="section-content relative">
          <div className="row">
            <div className="col small-12 large-6">
              <div className="col-inner">
                <div style={{ position: "relative", width: "100%", paddingTop: "75%", overflow: "hidden" }}>
                  <Image
                    src="/images/WhatsAppImage20241215at00.15.17.jpeg"
                    alt="Laura Rossa Boutique"
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
            <div className="col small-12 large-6">
              <div className="col-inner">
                <h3 style={{ fontSize: "1.8rem", fontWeight: 500, marginBottom: "25px", textTransform: "uppercase", letterSpacing: "2px", fontFamily: "Montserrat, sans-serif", color: "#1e1e1e" }}>
                  OUR JOURNEY
                </h3>
                <div className="text" style={{ fontSize: "1.1rem", lineHeight: 1.8, textAlign: "left", fontFamily: "Raleway, sans-serif", color: "#333" }}>
                  <p style={{ marginBottom: "20px" }}>
                    LAURA ROSSA was born from the desire to restore women&apos;s confidence through clothing and accessories that express elegance and refinement. Our mission is to redefine feminine style by offering pieces that combine accessible luxury with personal expression. In the first week of 2024, we launched this brand online for the self-assured, bold, and sophisticated woman who wants to make a memorable impression and feel extraordinary every day.
                  </p>
                  <p style={{ marginBottom: "20px" }}>
                    In the summer of 2024, Laura Rossa proudly opened its first monobrand boutique in Romania. Located on The Grand Avenue, on the ground floor of the JW Marriott Bucharest Grand Hotel, this boutique unveiled the latest collections of clothing, accessories, jewelry, and perfumes, all bearing the distinctive signature of Laura Rossa.
                  </p>
                  <p>
                    This milestone marks the beginning of the brand&apos;s international expansion, with forthcoming boutiques planned for Milan, München, Vienna and Doha. However, the atelier on the Champs-Élysées will forever remain the birthplace of Laura Rossa and its exclusive design headquarters.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR PRODUCTS Section with Image */}
      <section 
        className="section" 
        id="section-products"
        style={{ paddingTop: "60px", paddingBottom: "60px" }}
      >
        <div className="section-bg fill"></div>
        <div className="section-content relative">
          <div className="row">
            <div className="col small-12 large-5">
              <div className="col-inner">
                <h3 style={{ fontSize: "1.8rem", fontWeight: 500, marginBottom: "25px", textTransform: "uppercase", letterSpacing: "2px", fontFamily: "Montserrat, sans-serif", color: "#1e1e1e" }}>
                  OUR PRODUCTS
                </h3>
                <div className="text" style={{ fontSize: "1.1rem", lineHeight: 1.8, textAlign: "left", fontFamily: "Raleway, sans-serif", color: "#333" }}>
                  <p style={{ marginBottom: "20px" }}>
                    Among the standout pieces in the collection are exquisite dresses and jumpsuits, complemented by high-quality leather shoes.
                  </p>
                  <p style={{ marginBottom: "20px" }}>
                    The brand also boasts two signature perfumes, Just Once I and Just Once II, perfume extracts featuring bold floral notes. These creations are available in our boutiques and online at www.laurarossa.com
                  </p>
                  <p>
                    We believe in and stand alongside the modern woman—strong, elegant, and always on the move. Our brand offers more than just clothing and perfumes—it provides a lifestyle. A manifesto of confidence, a tribute to authentic beauty. It&apos;s time to shine!
                  </p>
                </div>
              </div>
            </div>
            <div className="col small-12 large-7">
              <div className="col-inner">
                <div style={{ position: "relative", width: "100%", paddingTop: "100%", overflow: "hidden" }}>
                  <Image
                    src="/images/JO_2.png.jpeg"
                    alt="Just Once Perfume"
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Collections Section */}
      <section 
        className="section" 
        id="section-signature-collections"
        style={{ paddingTop: "0", paddingBottom: "0", backgroundColor: "#ffffff" }}
      >
        <div className="section-bg fill"></div>
        <div className="section-content relative">
          <div className="row row-full-width" style={{ margin: 0, display: "flex", flexWrap: "nowrap" }}>
            {/* Signature Collections Text Panel */}
            <div className="col small-12 large-3" style={{ padding: 0, flex: "0 0 25%", maxWidth: "25%", backgroundColor: "#1e1e1e", display: "flex", alignItems: "center", justifyContent: "center", minHeight: "350px" }}>
              <div className="col-inner" style={{ padding: "30px", textAlign: "center", width: "100%" }}>
                <h2 style={{ fontSize: "2rem", fontWeight: 300, fontFamily: "Montserrat, sans-serif", color: "#ffffff", lineHeight: 1.2, margin: 0 }}>
                  Signature<br />Collections
                </h2>
              </div>
            </div>

            {/* Shoes Panel */}
            <div className="col small-12 large-3" style={{ padding: 0, flex: "0 0 25%", maxWidth: "25%", position: "relative", minHeight: "350px" }}>
              <div className="col-inner" style={{ padding: 0, height: "100%", position: "relative" }}>
                <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
                  <Image
                    src="/images/5_5400-3.jpg.jpeg"
                    alt="Shoes"
                    fill
                    style={{ objectFit: "cover", objectPosition: "center center" }}
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </div>
                <div style={{ position: "absolute", bottom: "30px", left: "50%", transform: "translateX(-50%)", textAlign: "center", width: "100%", zIndex: 2 }}>
                  <h3 style={{ fontSize: "1.2rem", fontWeight: 400, marginBottom: "10px", fontFamily: "Montserrat, sans-serif", color: "#ffffff", textShadow: "0 2px 8px rgba(0, 0, 0, 0.3)", textTransform: "uppercase", letterSpacing: "1px" }}>
                    Shoes
                  </h3>
                  <Link 
                    href="/product-category/shoes" 
                    className="button white is-link"
                    style={{ 
                      padding: "10px 24px", 
                      display: "inline-block", 
                      textTransform: "uppercase", 
                      letterSpacing: "1px", 
                      fontSize: "0.8rem", 
                      backgroundColor: "#ffffff", 
                      color: "#1e1e1e", 
                      textDecoration: "none",
                      borderRadius: "2px",
                      fontWeight: 400
                    }}
                  >
                    Shop now
                  </Link>
                </div>
              </div>
            </div>

            {/* Perfumes Panel */}
            <div className="col small-12 large-3" style={{ padding: 0, flex: "0 0 25%", maxWidth: "25%", position: "relative", minHeight: "350px" }}>
              <div className="col-inner" style={{ padding: 0, height: "100%", position: "relative" }}>
                <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
                  <Image
                    src="/images/laura_rossa_just_once_perfume_2.png.jpeg"
                    alt="Perfumes"
                    fill
                    style={{ objectFit: "cover", objectPosition: "center center" }}
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </div>
                <div style={{ position: "absolute", bottom: "30px", left: "50%", transform: "translateX(-50%)", textAlign: "center", width: "100%", zIndex: 2 }}>
                  <h3 style={{ fontSize: "1.2rem", fontWeight: 400, marginBottom: "10px", fontFamily: "Montserrat, sans-serif", color: "#ffffff", textShadow: "0 2px 8px rgba(0, 0, 0, 0.3)", textTransform: "uppercase", letterSpacing: "1px" }}>
                    Perfumes
                  </h3>
                  <Link 
                    href="/product-category/perfumes" 
                    className="button white is-link"
                    style={{ 
                      padding: "10px 24px", 
                      display: "inline-block", 
                      textTransform: "uppercase", 
                      letterSpacing: "1px", 
                      fontSize: "0.8rem", 
                      backgroundColor: "#ffffff", 
                      color: "#1e1e1e", 
                      textDecoration: "none",
                      borderRadius: "2px",
                      fontWeight: 400
                    }}
                  >
                    Shop now
                  </Link>
                </div>
              </div>
            </div>

            {/* Clothing Panel */}
            <div className="col small-12 large-3" style={{ padding: 0, flex: "0 0 25%", maxWidth: "25%", position: "relative", minHeight: "350px" }}>
              <div className="col-inner" style={{ padding: 0, height: "100%", position: "relative" }}>
                <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
                  <Image
                    src="/images/1112393.JPG.jpeg"
                    alt="Clothing"
                    fill
                    style={{ objectFit: "cover", objectPosition: "center center" }}
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </div>
                <div style={{ position: "absolute", bottom: "30px", left: "50%", transform: "translateX(-50%)", textAlign: "center", width: "100%", zIndex: 2 }}>
                  <h3 style={{ fontSize: "1.2rem", fontWeight: 400, marginBottom: "10px", fontFamily: "Montserrat, sans-serif", color: "#ffffff", textShadow: "0 2px 8px rgba(0, 0, 0, 0.3)", textTransform: "uppercase", letterSpacing: "1px" }}>
                    Clothing
                  </h3>
                  <Link 
                    href="/product-category/clothing" 
                    className="button white is-link"
                    style={{ 
                      padding: "10px 24px", 
                      display: "inline-block", 
                      textTransform: "uppercase", 
                      letterSpacing: "1px", 
                      fontSize: "0.8rem", 
                      backgroundColor: "#ffffff", 
                      color: "#1e1e1e", 
                      textDecoration: "none",
                      borderRadius: "2px",
                      fontWeight: 400
                    }}
                  >
                    Shop now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}