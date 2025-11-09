import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Story - Laura Rossa",
  description: "Laura Rossa is a French fashion brand, born in the enchanting heart of Paris – a city synonymous with timeless elegance and artistic allure.",
};

export default function OurStoryPage() {
  return (
    <div id="content" role="main">
      <section 
        className="section" 
        id="section-story-hero"
        style={{ paddingTop: "60px", paddingBottom: "40px" }}
      >
        <div className="section-bg fill"></div>
        <div className="section-content relative">
          <div className="row">
            <div className="col small-12 large-12">
              <div className="col-inner text-center">
                <h1 style={{ fontSize: "3rem", fontWeight: 300, marginBottom: "10px", fontFamily: "Montserrat, sans-serif" }}>
                  Laura Rossa
                </h1>
                <h2 style={{ fontSize: "1.2rem", fontWeight: 300, letterSpacing: "3px", textTransform: "uppercase", color: "#666", fontFamily: "Raleway, sans-serif" }}>
                  the untamed power of femininity
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section 
        className="section" 
        id="section-story-intro"
        style={{ paddingTop: "40px", paddingBottom: "40px" }}
      >
        <div className="section-bg fill"></div>
        <div className="section-content relative">
          <div className="row">
            <div className="col small-12 large-10" style={{ margin: "0 auto" }}>
              <div className="col-inner">
                <div className="text" style={{ fontSize: "1.1rem", lineHeight: 1.8, textAlign: "left", fontFamily: "Raleway, sans-serif" }}>
                  <p>
                    Laura Rossa is a French fashion brand, born in the enchanting heart of Paris – a city synonymous with timeless elegance and artistic allure. From this iconic epicenter of style, the founders embarked on an remarkable journey to bring their vision to life. Blending classical refinement with a daring modern edge, Laura Rossa seeks to redefine sophistication, offering collections that transcend fleeting trends and inspire every woman to express her unique essence and personal style.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section 
        className="section" 
        id="section-story-quote"
        style={{ paddingTop: "40px", paddingBottom: "40px" }}
      >
        <div className="section-bg fill"></div>
        <div className="section-content relative">
          <div className="row">
            <div className="col small-12 large-10" style={{ margin: "0 auto" }}>
              <div className="col-inner">
                <div className="text" style={{ fontSize: "1.2rem", lineHeight: 1.8, textAlign: "left", fontFamily: "Raleway, sans-serif" }}>
                  <p style={{ fontWeight: 300, fontStyle: "italic", marginBottom: "20px" }}>
                    &ldquo;Laura Rossa is the tale of my life – a story of a woman who dedicates time and patience to what truly matters. My passion for fashion has been a timeless source of inspiration, as a woman&apos;s sense of style is her most compelling introduction. The unwavering support of those around me, their exceptional talent, and the vibrant energy of Paris have shaped the vision of a brand that exudes subtle elegance, simplicity, and refinement – all without a hint of ostentation&rdquo;
                  </p>
                  <p style={{ fontSize: "0.9rem", fontWeight: 500, color: "#333" }}>
                    <strong>Hoda Alaia</strong> • founder and creative Director of the Laura Rossa French Brand
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section 
        className="section" 
        id="section-mission"
        style={{ paddingTop: "40px", paddingBottom: "40px" }}
      >
        <div className="section-bg fill"></div>
        <div className="section-content relative">
          <div className="row">
            <div className="col small-12 large-10" style={{ margin: "0 auto" }}>
              <div className="col-inner">
                <h2 style={{ fontSize: "2rem", fontWeight: 300, marginBottom: "20px", fontFamily: "Montserrat, sans-serif" }}>
                  Our Mission
                </h2>
                <div className="text" style={{ fontSize: "1.1rem", lineHeight: 1.8, textAlign: "left", fontFamily: "Raleway, sans-serif" }}>
                  <p>
                    Beyond trends, <strong>Laura Rossa</strong> embodies the untamed force of modern femininity: discreet elegance, timeless refinement, and the power to leave a mark.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section 
        className="section" 
        id="section-meaning"
        style={{ paddingTop: "40px", paddingBottom: "40px" }}
      >
        <div className="section-bg fill"></div>
        <div className="section-content relative">
          <div className="row">
            <div className="col small-12 large-10" style={{ margin: "0 auto" }}>
              <div className="col-inner">
                <h2 style={{ fontSize: "2rem", fontWeight: 300, marginBottom: "20px", fontFamily: "Montserrat, sans-serif" }}>
                  Laura Rossa – the meaning
                </h2>
                <div className="text" style={{ fontSize: "1.1rem", lineHeight: 1.8, textAlign: "left", fontFamily: "Raleway, sans-serif" }}>
                  <p>
                    Hoda Alaia, the founder, chose this name to honor a beloved person named Laura and to perpetuate the values of victory through elegance and refinement. As Hoda aged and could not fulfill all her dreams, she asked her children to carry on this legacy—thus, <strong>Laura Rossa</strong> was born.
                  </p>
                  <ul style={{ marginTop: "20px", paddingLeft: "20px" }}>
                    <li style={{ marginBottom: "10px" }}>
                      <strong>Laura</strong> (from the Latin <em>laurus</em>, laurel plant) symbolizes victory, honor, and fame. The name evokes strength, success, and wisdom.
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                      <strong>Rossa</strong> (red) represents femininity, passion, sensuality, and inner energy.
                    </li>
                  </ul>
                  <p style={{ marginTop: "20px" }}>
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

      <section 
        className="section" 
        id="section-tradition"
        style={{ paddingTop: "40px", paddingBottom: "40px" }}
      >
        <div className="section-bg fill"></div>
        <div className="section-content relative">
          <div className="row">
            <div className="col small-12 large-10" style={{ margin: "0 auto" }}>
              <div className="col-inner">
                <h2 style={{ fontSize: "2rem", fontWeight: 300, marginBottom: "20px", fontFamily: "Montserrat, sans-serif" }}>
                  Laura Rossa – Tradition, Craftsmanship, and Heritage
                </h2>
                <div className="text" style={{ fontSize: "1.1rem", lineHeight: 1.8, textAlign: "left", fontFamily: "Raleway, sans-serif" }}>
                  <ul style={{ paddingLeft: "20px" }}>
                    <li style={{ marginBottom: "15px" }}>
                      <strong>Artisanal Excellence Passed Down Generations</strong>: Each Laura Rossa piece reflects the experience and refinement of a family dedicated to luxury fashion, where the art of tailoring is a ritual, and attention to detail is a signature.
                    </li>
                    <li style={{ marginBottom: "15px" }}>
                      <strong>Absolute Respect for Materials, Craftsmanship, and Tradition</strong>: We select only the finest materials, employ couture techniques, and maintain connections with global design masters, including collaborations and exchanges with names like Christian Dior.
                    </li>
                  </ul>
                  <p style={{ marginTop: "20px" }}>
                    This transgenerational heritage forms the aesthetic and ethical foundation of the <strong>Laura Rossa</strong> brand.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section 
        className="section" 
        id="section-evolution"
        style={{ paddingTop: "40px", paddingBottom: "40px" }}
      >
        <div className="section-bg fill"></div>
        <div className="section-content relative">
          <div className="row">
            <div className="col small-12 large-10" style={{ margin: "0 auto" }}>
              <div className="col-inner">
                <h2 style={{ fontSize: "2rem", fontWeight: 300, marginBottom: "20px", fontFamily: "Montserrat, sans-serif" }}>
                  Laura Rossa – Evolution and International Expansion
                </h2>
                <div className="text" style={{ fontSize: "1.1rem", lineHeight: 1.8, textAlign: "left", fontFamily: "Raleway, sans-serif" }}>
                  <ul style={{ paddingLeft: "20px" }}>
                    <li style={{ marginBottom: "10px" }}>
                      <strong>2024</strong>: Expansion to Romania (Calea 13 Septembrie 90, Bucharest – JW Marriott Grand Avenue)
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                      <strong>2024</strong>: Opening flagship boutique on Avenue des Champs-Élysées, Paris
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                      <strong>2024</strong>: Expansion to Germany (Scheffelstraße 18, 68723 Schwetzingen)
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                      <strong>Online Presence</strong>: distribution in over 30 markets across Europe, North Africa, and the Middle East via laurarossa.com
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section 
        className="section" 
        id="section-aesthetics"
        style={{ paddingTop: "40px", paddingBottom: "40px" }}
      >
        <div className="section-bg fill"></div>
        <div className="section-content relative">
          <div className="row">
            <div className="col small-12 large-10" style={{ margin: "0 auto" }}>
              <div className="col-inner">
                <h2 style={{ fontSize: "2rem", fontWeight: 300, marginBottom: "20px", fontFamily: "Montserrat, sans-serif" }}>
                  Aesthetics and Style
                </h2>
                <div className="text" style={{ fontSize: "1.1rem", lineHeight: 1.8, textAlign: "left", fontFamily: "Raleway, sans-serif" }}>
                  <p>
                    The <strong>Laura Rossa</strong> style blends classic refinement with modern lines:
                  </p>
                  <ul style={{ marginTop: "15px", paddingLeft: "20px" }}>
                    <li style={{ marginBottom: "10px" }}>
                      <strong>Clear and timeless cuts</strong>
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                      <strong>Discreet color palette</strong> – black, emerald green, natural tones
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                      <strong>Fine textures</strong> – blends of wool, cotton, linen
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                      <strong>Limited Series Quality</strong> – each collection produced in limited runs for exclusivity and meticulous attention to detail
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section 
        className="section" 
        id="section-journey"
        style={{ paddingTop: "40px", paddingBottom: "40px" }}
      >
        <div className="section-bg fill"></div>
        <div className="section-content relative">
          <div className="row">
            <div className="col small-12 large-10" style={{ margin: "0 auto" }}>
              <div className="col-inner">
                <h3 style={{ fontSize: "1.5rem", fontWeight: 500, marginBottom: "15px", textTransform: "uppercase", letterSpacing: "2px", fontFamily: "Montserrat, sans-serif" }}>
                  OUR JOURNEY
                </h3>
                <div className="text" style={{ fontSize: "1.1rem", lineHeight: 1.8, textAlign: "left", fontFamily: "Raleway, sans-serif" }}>
                  <p>
                    LAURA ROSSA was born from the desire to restore women&apos;s confidence through clothing and accessories that express elegance and refinement. Our mission is to redefine feminine style by offering pieces that combine accessible luxury with personal expression.In the first week of 2024, we launched this brand online for the self-assured, bold, and sophisticated woman who wants to make a memorable impression and feel extraordinary every day.
                  </p>
                  <p style={{ marginTop: "20px" }}>
                    In the summer of 2024, Laura Rossa proudly opened its first monobrand boutique in Romania. Located on The Grand Avenue, on the ground floor of the JW Marriott Bucharest Grand Hotel, this boutique unveiled the latest collections of clothing, accessories, jewelry, and perfumes, all bearing the distinctive signature of Laura Rossa.
                  </p>
                  <p style={{ marginTop: "20px" }}>
                    This milestone marks the beginning of the brand&apos;s international expansion, with forthcoming boutiques planned for Milan, München, Vienna and Doha. However, the atelier on the Champs-Élysées will forever remain the birthplace of Laura Rossa and its exclusive design headquarters.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section 
        className="section" 
        id="section-products"
        style={{ paddingTop: "40px", paddingBottom: "40px" }}
      >
        <div className="section-bg fill"></div>
        <div className="section-content relative">
          <div className="row">
            <div className="col small-12 large-10" style={{ margin: "0 auto" }}>
              <div className="col-inner">
                <h3 style={{ fontSize: "1.5rem", fontWeight: 500, marginBottom: "15px", textTransform: "uppercase", letterSpacing: "2px", fontFamily: "Montserrat, sans-serif" }}>
                  OUR PRODUCTS
                </h3>
                <div className="text" style={{ fontSize: "1.1rem", lineHeight: 1.8, textAlign: "left", fontFamily: "Raleway, sans-serif" }}>
                  <p>
                    Among the standout pieces in the collection are exquisite dresses and jumpsuits, complemented by high-quality leather shoes.
                  </p>
                  <p style={{ marginTop: "20px" }}>
                    The brand also boasts two signature perfumes, Just Once I and Just Once II, perfume extracts featuring bold floral notes. These creations are available in our boutiques and online at www.laurarossa.com
                  </p>
                  <p style={{ marginTop: "20px" }}>
                    We believe in and stand alongside the modern woman—strong, elegant, and always on the move. Our brand offers more than just clothing and perfumes—it provides a lifestyle. A manifesto of confidence, a tribute to authentic beauty. It&apos;s time to shine!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section 
        className="section" 
        id="section-signature-collections"
        style={{ paddingTop: "60px", paddingBottom: "60px", backgroundColor: "#f8f8f8" }}
      >
        <div className="section-bg fill"></div>
        <div className="section-content relative">
          <div className="row">
            <div className="col small-12 large-12">
              <div className="col-inner text-center">
                <h2 style={{ fontSize: "2rem", fontWeight: 300, marginBottom: "40px", fontFamily: "Montserrat, sans-serif" }}>
                  Signature Collections
                </h2>
                <div style={{ display: "flex", justifyContent: "center", gap: "40px", flexWrap: "wrap" }}>
                  <div>
                    <h3 style={{ fontSize: "1.3rem", fontWeight: 300, marginBottom: "15px", fontFamily: "Montserrat, sans-serif" }}>
                      Shoes
                    </h3>
                    <Link 
                      href="/product-category/shoes" 
                      className="button primary is-link"
                      style={{ padding: "10px 25px", display: "inline-block", textTransform: "uppercase", letterSpacing: "1px", fontSize: "0.9rem" }}
                    >
                      Shop now
                    </Link>
                  </div>
                  <div>
                    <h3 style={{ fontSize: "1.3rem", fontWeight: 300, marginBottom: "15px", fontFamily: "Montserrat, sans-serif" }}>
                      Perfumes
                    </h3>
                    <Link 
                      href="/product-category/perfumes" 
                      className="button primary is-link"
                      style={{ padding: "10px 25px", display: "inline-block", textTransform: "uppercase", letterSpacing: "1px", fontSize: "0.9rem" }}
                    >
                      Shop now
                    </Link>
                  </div>
                  <div>
                    <h3 style={{ fontSize: "1.3rem", fontWeight: 300, marginBottom: "15px", fontFamily: "Montserrat, sans-serif" }}>
                      Clothing
                    </h3>
                    <Link 
                      href="/product-category/clothing" 
                      className="button primary is-link"
                      style={{ padding: "10px 25px", display: "inline-block", textTransform: "uppercase", letterSpacing: "1px", fontSize: "0.9rem" }}
                    >
                      Shop now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

