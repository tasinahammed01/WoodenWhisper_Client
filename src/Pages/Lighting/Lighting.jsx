import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const Lighting = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    if (window.innerWidth >= 1024) {
      const sections = gsap.utils.toArray(".scroll-section");

      gsap.to(containerRef.current, {
        opacity: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "top+=600px",
          toggleActions: "play none none reverse",
          // markers: true,
        },
      });

      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: () => `+=${containerRef.current.scrollWidth}`,
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          anticipatePin: 1,
          markers: true,
        },
      });
    }
  }, []);

  return (
    <div className="bg-[#EDE7DE]">
      <div
        ref={containerRef}
        className="flex  items-center gap-10 overflow-hidden lg:w-fit h-screen lg:pl-[40%]"
      >
        <h1 className="scroll-section min-w-[300px] md:min-w-[700px] lg:min-w-[500px] text-black text-[22px] md:text-[28px] lg:text-[48px] leading-snug font-semibold px-4 lg:px-0">
          Designed by Anne-Marie Barton. Explore collections of furniture, rugs,
          hardware, faucetry, and more.
        </h1>

        {[
          "https://i.ibb.co/DgWhTzW1/Sorenson-Elevation-FT-3855-SML.jpg",
          "https://i.ibb.co/Z6HDWKVv/Sorenson-Elevation-BK-3892-SML.jpg",
          "https://i.ibb.co/DgWhTzW1/Sorenson-Elevation-FT-3855-SML.jpg",
          "https://i.ibb.co/Z6HDWKVv/Sorenson-Elevation-BK-3892-SML.jpg",
        ].map((src, idx) => (
          <img
            key={idx}
            className="scroll-section w-[400px] lg:w-[600px] h-[400px] lg:h-[600px] object-cover"
            src={src}
            alt={`Section ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Lighting;
