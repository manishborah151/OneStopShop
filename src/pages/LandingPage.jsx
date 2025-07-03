import React, {useState, useEffect} from "react";
import ProductCard from "../components/ProductCard";
import img1 from "../assets/imgs/prodBanners/igetbar.jpg";
import img2 from "../assets/imgs/prodBanners/igetbox.jpg";
import img3 from "../assets/imgs/prodBanners/igetlegend.webp";
import img4 from "../assets/imgs/prodBanners/igetoatWa.jpg";
import img5 from "../assets/imgs/prodBanners/igetking.jpg";
import img6 from "../assets/imgs/prodBanners/igetpro.jpg";
import prod1 from "../assets/imgs/products/prod1.png";
import prod2 from "../assets/imgs/products/prod2.png";
import prod3 from "../assets/imgs/products/prod3.png";
import prod4 from "../assets/imgs/products/prod4.png";
import prod5 from "../assets/imgs/products/prod5.png";
import "./LandingPage.css";

const slideshowImages = [img1, img2, img3, img4, img5, img6];

const products = [
  {
    id: 1,
    name: "Mint Vape 2000",
    image: [prod1],
  },
  {
    id: 2,
    name: "Hookah Flavour Set",
    image: [prod2],
  },
  {
    id: 3,
    name: "Charcoal Pack",
    image: [prod3],
  },
  {
    id: 4,
    name: "Vape Pod Refill",
    image: [prod4],
  },
  {
    id: 5,
    name: "Vape Pod Refill",
    image: [prod5],
  },
];
export default function LandingPage() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slideshowImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const goNext = () => setCurrent((current + 1) % slideshowImages.length);
  const goPrev = () =>
    setCurrent((current - 1 + slideshowImages.length) % slideshowImages.length);

  return (
    <div className="landing">
      {/* Slideshow */}

      <div className="slideshow">
        <img src={slideshowImages[current]} alt="slide" className="slide-img" />
        <button className="prev" onClick={goPrev}>
          ‹
        </button>
        <button className="next" onClick={goNext}>
          ›
        </button>
      </div>
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to OneStopShop</h1>
          <p>Your ultimate destination for vaping and smoking essentials</p>
          <a href="#features" className="cta-btn">
            Shop Now
          </a>
        </div>
      </section>

      <section id="features" className="features">
        <div className="feature">
          <h3>🚚 Fast Shipping</h3>
          <p>Get your products delivered within 2–3 days across India.</p>
        </div>
        <div className="feature">
          <h3>✅ Premium Quality</h3>
          <p>
            We stock only trusted and certified products for your satisfaction.
          </p>
        </div>
        <div className="feature">
          <h3>🔐 Secure Checkout</h3>
          <p>Safe & encrypted payment for worry-free shopping.</p>
        </div>
      </section>

      <section className="cta-section">
        <div className="product-slider">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
