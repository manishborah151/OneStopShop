import React, {useState, useEffect} from "react";

import "./LandingPage.css";

const slideshowImages = [
  "/src/assets/imgs/igetbar.jpg",
  "/src/assets/imgs/igetbox.jpg",
  "/src/assets/imgs/igetlegend.webp",
  "/src/assets/imgs/igetoatWa.jpg",
  "/src/assets/imgs/igetking.jpg",
  "/src/assets/imgs/igetpro.jpg",
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
        <h2>Ready to explore?</h2>
        <a href="/shop" className="cta-btn">
          Browse Shop
        </a>
      </section>
    </div>
  );
}
