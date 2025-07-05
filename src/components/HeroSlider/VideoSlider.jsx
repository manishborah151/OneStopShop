import React, {useRef, useEffect, useState} from "react";
import {ChevronRight, ChevronLeft} from "lucide-react";
import "./VideoSlider.css";

import vid1 from "../../assets/prodBanners/p5.mp4";
import vid2 from "../../assets/prodBanners/p4.mp4";
import vid3 from "../../assets/prodBanners/p3.mp4";

const videoSources = [vid1, vid2, vid3];

export default function VideoSlider() {
  const sliderRef = useRef();
  const videoRefs = useRef([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToIndex = (index) => {
    const container = sliderRef.current;
    const scrollAmount = container.offsetWidth * index;
    container.scrollTo({left: scrollAmount, behavior: "smooth"});
    setCurrentIndex(index);
  };

  const scroll = (direction) => {
    let newIndex = currentIndex + (direction === "left" ? -1 : 1);
    if (newIndex < 0) newIndex = videoSources.length - 1;
    if (newIndex >= videoSources.length) newIndex = 0;
    scrollToIndex(newIndex);
  };

  // Auto scroll every 20 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % videoSources.length;
      scrollToIndex(nextIndex);
    }, 10000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  // Auto play/pause videos
  useEffect(() => {
    const localRefs = videoRefs.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;
          if (entry.isIntersecting) {
            video.play();
          } else {
            video.pause();
          }
        });
      },
      {
        root: sliderRef.current,
        threshold: 0.6,
      }
    );

    localRefs.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => {
      localRefs.forEach((video) => {
        if (video) observer.unobserve(video);
      });
    };
  }, []);

  return (
    <div className="video-slider-container">
      <button className="scroll-btn left" onClick={() => scroll("left")}>
        <ChevronLeft />
      </button>

      <div className="video-slider" ref={sliderRef}>
        {videoSources.map((src, idx) => (
          <div className="video-wrapper" key={idx}>
            <video
              ref={(el) => (videoRefs.current[idx] = el)}
              src={src}
              muted
              loop
              playsInline
              preload="auto"
              style={{width: "100%", height: "100%", objectFit: "cover"}}
            />
          </div>
        ))}
      </div>

      <button className="scroll-btn right" onClick={() => scroll("right")}>
        <ChevronRight />
      </button>
    </div>
  );
}
