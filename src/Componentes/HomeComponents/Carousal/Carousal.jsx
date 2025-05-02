// src/Carousel.js
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "./Carousal.css";

const carouselData = [
  {
    text: "Paradise Vally",
    image: "https://i.ibb.co/HfgfVFbw/Tsai-07.jpg",
  },
  {
    text: "Loan peak",
    image: "https://i.ibb.co/ccgv3Ymj/Tsai-10.jpg",
  },
  {
    text: "Read Cluod",
    image: "https://i.ibb.co/z0tD9NZ/Tsai-34.jpg",
  },
  {
    text: "Clif View",
    image: "https://i.ibb.co/M4xPvDJ/Tsai-31.jpg",
  },
  {
    text: "Jordanelly",
    image: "https://i.ibb.co/zWhrzpP7/Tsai-13.jpg",
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const textRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Animate text on currentIndex change
  useEffect(() => {
    if (textRef.current) {
      gsap.fromTo(
        textRef.current,
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, ease: "power2.out" }
      );
    }
  }, [currentIndex]);

  const handleClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
  };

  return (
    <div
      className="carousel"
      style={{ backgroundImage: `url(${carouselData[currentIndex].image})` }}
      onClick={handleClick}
    >
      {/* Overlay */}
      <div className="overlay"></div>
      <div className="carousel-content space-y-20">
        <h1 ref={textRef} className="subheading">
          {carouselData[currentIndex].text}
        </h1>
        <div className="lg:w-[80%] md:w-[15%] w-[30%]">
          <button className="unique-btn1 w-full">
            <span className="text-white title-transition active">
              SEE ALL PROJECTS
            </span>
            <span className="arrow">
              <svg viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
