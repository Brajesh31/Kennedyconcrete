import React, { useEffect, useState, useCallback, useMemo, useRef } from "react";
import Button from "../../../Views/Components/Buttons/Button";
import SliderImg from "../../../assets/img/Slider1.png";
import SliderImg2 from "../../../assets/img/Slider.png";
import SliderImg3 from "../../../assets/img/Slider3.png";
import SliderImg4 from "../../../assets/img/Slider4.png";
import SliderImg5 from "../../../assets/img/KennedyOrlando.png";

const slides = [
  {
    image: SliderImg,
    title:
      "Kennedy Concrete Is The #1 Concrete Supplier In Central Florida On Google",
    description: "Proudly Serving Orlando, Ocala, Tampa, and Brevard County",
  },
  {
    image: SliderImg2,
    title: "Honoring Our Heroes With Exclusive Discounts",
    description:
      "Special discounts for veterans, military, and first responders on concrete, block, and building materials.",
  },
  {
    image: SliderImg5,
    title: "Orlando's Trusted Concrete Experts",
    description:
      "Kennedy Concrete supplies high-quality concrete, block, and building materials across Orlando with hassle-free scheduling.",
  },
  {
    image: SliderImg3,
    title: "Reliable Concrete Delivery in Tampa",
    description:
      "From concrete to block and building materials, Kennedy Concrete delivers on-time with personalized service in Tampa.",
  },
  {
    image: SliderImg4,
    title: "Reliable Concrete Solutions for Brevard County",
    description:
      "Kennedy Concrete provides top-quality concrete, block, and building materials for Brevard, ensuring your project stays on track.",
  },
];

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animate, setAnimate] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(new Set());
  const intervalRef = useRef(null);

  // Preload images for better performance
  useEffect(() => {
    slides.forEach((slide, index) => {
      const img = new Image();
      img.onload = () => {
        setImagesLoaded(prev => new Set([...prev, index]));
      };
      img.src = slide.image;
    });
  }, []);

  // Memoized slide advance function
  const advanceSlide = useCallback(() => {
    setAnimate(false);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setAnimate(true);
    }, 200);
  }, []);

  // Auto-advance with cleanup
  useEffect(() => {
    intervalRef.current = setInterval(advanceSlide, 4500);
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [advanceSlide]);

  // Optimized dot click handler
  const handleDotClick = useCallback((index) => {
    if (index !== currentSlide) {
      setAnimate(false);
      setTimeout(() => {
        setCurrentSlide(index);
        setAnimate(true);
      }, 200);
    }
  }, [currentSlide]);

  // Memoized current slide data
  const currentSlideData = useMemo(() => slides[currentSlide], [currentSlide]);

  return (
    <>
      <div className="custom-slider">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? "active" : ""}`}
          >
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              loading={index === 0 ? "eager" : "lazy"}
              decoding="async"
              style={{
                opacity: imagesLoaded.has(index) ? 1 : 0,
                transition: 'opacity 0.3s ease'
              }}
            />
          </div>
        ))}

        <div className="slide-content ms-0 ms-md-5">
          <h1
            className={animate ? "slide-in-right" : "slide-out-left"}
            style={{ animationDelay: "0.2s" }}
          >
            {currentSlideData.title}
          </h1>
          <p
            className={animate ? "slide-in-right" : "slide-out-left"}
            style={{ animationDelay: "0.4s" }}
          >
            {currentSlideData.description}
          </p>
          <div
            className={animate ? "slide-in-right" : "slide-out-left"}
            style={{ animationDelay: "0.6s" }}
          >
            <Button
              bgColor="rgb(222,11,24)"
              textColor="#fff"
              hoverBgColor="#fff"
              hoverTextColor="#000"
              dotColor="#fff"
              icon={true}
            />
          </div>
        </div>

        <div className="custom-pagination">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentSlide ? "active" : ""}`}
              onClick={() => handleDotClick(index)}
              role="button"
              tabIndex={0}
              aria-label={`Go to slide ${index + 1}`}
            >
              {index === currentSlide && <span className="ring" />}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}