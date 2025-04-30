// // src/Carousel.js
// import React, { useEffect, useState } from "react";
// import "./Carousal.css";

// const carouselData = [
//   {
//     text: "Paradise Vally",
//     image: "https://i.ibb.co/HfgfVFbw/Tsai-07.jpg",
//   },
//   {
//     text: "Loan peak",
//     image: "https://i.ibb.co/ccgv3Ymj/Tsai-10.jpg",
//   },
//   {
//     text: "Read Cluod",
//     image: "https://i.ibb.co/z0tD9NZ/Tsai-34.jpg",
//   },
//   {
//     text: "Clif View",
//     image: "https://i.ibb.co/M4xPvDJ/Tsai-31.jpg",
//   },
//   {
//     text: "Jordanelly",
//     image: "https://i.ibb.co/zWhrzpP7/Tsai-13.jpg",
//   },
// ];

// const Carousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
//     }, 2000);

//     return () => clearInterval(interval); // Cleanup on unmount
//   }, []);

//   const handleClick = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
//   };

//   return (
//     <div
//       className="carousel"
//       style={{ backgroundImage: `url(${carouselData[currentIndex].image})` }}
//       onClick={handleClick}
//     >
//       {/* Overlay */}
//       <div className="overlay"></div>
//       <div className="carousel-content space-y-20">
//         <h1 className="subheading">{carouselData[currentIndex].text}</h1>
//         <div className="lg:w-[80%] md:w-[15%] w-[30%]">
//           <button className="unique-btn1 w-full">
//             <span className="text-white title-transition active">
//               SEE ALL PROJECTS
//             </span>
//             <span className="arrow">
//               <svg viewBox="0 0 24 24">
//                 <path d="M5 12h14M12 5l7 7-7 7" />
//               </svg>
//             </span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Carousel;

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const slides = [
  {
    title: "First Slide",
    image: "https://i.ibb.co.com/Z6HDWKVv/Sorenson-Elevation-BK-3892-SML.jpg",
  },
  {
    title: "Second Slide",
    image: "https://i.ibb.co.com/DgWhTzW1/Sorenson-Elevation-FT-3855-SML.jpg",
  },
  {
    title: "Third Slide",
    image: "https://i.ibb.co.com/KjDjMZY6/Sorenson-Elevation-FT-3929-SML.jpg",
  },
  {
    title: "Fourth Slide",
    image: "https://i.ibb.co.com/WNLJkz74/Sorenson-Breezeway-3844-SML.jpg",
  },
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = next, -1 = prev
  const textRef = useRef([]);
  const bgRef = useRef(null);

  const nextSlide = () => {
    const nextIndex = (current + 1) % slides.length;
    setDirection(1);
    animateSlides(current, nextIndex);
    setCurrent(nextIndex);
  };

  const prevSlide = () => {
    const prevIndex = (current - 1 + slides.length) % slides.length;
    setDirection(-1);
    animateSlides(current, prevIndex);
    setCurrent(prevIndex);
  };

  const animateSlides = (from, to) => {
    const dir = direction;
    const tl = gsap.timeline();

    // Animate text out (move off full screen)
    tl.to(textRef.current[from], {
      x: dir * -window.innerWidth,
      opacity: 0,
      duration: 0.5,
      ease: "power2.inOut",
    })
      // Instantly move next text off screen
      .set(textRef.current[to], {
        x: dir * window.innerWidth,
        opacity: 0,
      })
      // Animate text in
      .to(
        textRef.current[to],
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power2.inOut",
        },
        "-=0.2"
      );

    // Background image fade
    gsap.to(bgRef.current, {
      backgroundImage: `url(${slides[to].image})`,
      duration: 0.8,
      ease: "power2.inOut",
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [current]);

  return (
    <div
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
      ref={bgRef}
      style={{
        backgroundImage: `url(${slides[current].image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="text-white text-4xl font-bold"
        ref={(el) => (textRef.current[current] = el)}
      >
        {slides[current].title}
      </div>
    </div>
  );
};

export default Carousel;
