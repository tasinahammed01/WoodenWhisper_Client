import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Rugs = () => {
  const rootRef = useRef(null);

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        gsap.from(".rugs-hero > *", {
          y: 28,
          opacity: 0,
          duration: 0.7,
          ease: "power2.out",
          stagger: 0.1,
          scrollTrigger: { trigger: ".rugs-hero", start: "top 80%" },
        });

        gsap.from(".rugs-grid-item", {
          y: 20,
          opacity: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: { trigger: ".rugs-grid", start: "top 85%" },
        });

        gsap.from(".rugs-cta", {
          y: 24,
          opacity: 0,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: { trigger: ".rugs-cta", start: "top 85%" },
        });
      }, rootRef);

      return () => ctx.revert();
    },
    { scope: rootRef }
  );

  const items = [
    {
      src: "https://i.ibb.co/Z6HDWKVv/Sorenson-Elevation-BK-3892-SML.jpg",
      title: "Woolen Ridge",
    },
    {
      src: "https://i.ibb.co/DgWhTzW1/Sorenson-Elevation-FT-3855-SML.jpg",
      title: "Desert Weave",
    },
    {
      src: "https://i.ibb.co/Kpw0DQ5F/Philosophy-Page03-poster.jpg",
      title: "Mountain Loom",
    },
    {
      src: "https://i.ibb.co/JWnwW2Q9/Philosophy-Page04-poster.jpg",
      title: "Forest Threads",
    },
    {
      src: "https://i.ibb.co/xSPwFCJK/People-Page01.jpg",
      title: "Valley Knit",
    },
    {
      src: "https://i.ibb.co/Tx1hCS5V/Philosophy-Page02-1.jpg",
      title: "River Pattern",
    },
  ];

  return (
    <div ref={rootRef} className="bg-[#EDE7DE] px-5 md:px-10 md:py-40 py-40">
      <div className="rugs-hero max-w-6xl">
        <p className="text-black text-xl leading-relaxed">Rugs</p>
        <h1 className="text-4xl md:text-7xl uppercase text-black">
          Rug Collection
        </h1>
        <p className="text-black max-w-3xl mt-4 text-lg">
          Hand-knotted from luxurious materials, each artisanal piece blends
          vintage charm with modern elegance—adding relaxed sophistication to
          your home.
        </p>
      </div>

      <div className="rugs-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {items.map((item, idx) => (
          <div key={idx} className="rugs-grid-item group">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-[260px] md:h-[360px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/40 text-white p-3">
                <p>{item.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="rugs-cta mt-12 w-[70%] sm:w-[40%] md:w-[25%]">
        <button className="unique-btn2 w-full">
          <span className="text-black title-transition2 active">Explore Lighting</span>
          <span className="arrow">
            <svg viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Rugs;