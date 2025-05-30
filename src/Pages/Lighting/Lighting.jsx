import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

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

  const items = [
    {
      src: "https://i.ibb.co/DgWhTzW1/Sorenson-Elevation-FT-3855-SML.jpg",
      title: "Lighting",
      description:
        "A tangible warm quality is manifested through the interchange of materials, shapes, textures and natural patinas.",
    },
    {
      src: "https://i.ibb.co/Z6HDWKVv/Sorenson-Elevation-BK-3892-SML.jpg",
      title: "Rug Collection",
      description:
        "Where organic forms embrace timeless design. Hand-knotted from luxurious materials, each artisanal piece effortlessly blends vintage charm with modern elegance, offering a relaxed yet sophisticated touch to your home.",
    },
    {
      src: "https://i.ibb.co/Z6HDWKVv/Sorenson-Elevation-BK-3892-SML.jpg",
      title: "Furniture",
      description:
        "Artisanal, textural, and livable. Designs that evoke balance and luxury, enhancing the experience of both form and function.",
    },
  ];

  return (
    <div className="bg-[#EDE7DE]">
      <div
        ref={containerRef}
        className="relative flex items-center gap-20 overflow-hidden lg:w-fit h-screen lg:pl-[40%]"
      >
        <h1 className="scroll-section min-w-[300px] md:min-w-[700px] lg:min-w-[500px] text-black text-[22px] md:text-[28px] lg:text-[48px] leading-snug font-semibold px-4 lg:px-0">
          Designed by Anne-Marie Barton. Explore collections of furniture, rugs,
          hardware, faucetry, and more.
        </h1>

        {items.map((item, idx) => (
          <div
            key={idx}
            className="scroll-section relative min-w-[400px] lg:min-w-[600px] h-[400px] lg:h-[600px]"
          >
            <img
              className="w-full h-full object-cover rounded-lg"
              src={item.src}
              alt={`Section ${idx + 1}`}
            />
            <div className="absolute bottom-4 left-4 bg-black/50 text-white p-4 rounded-lg max-w-[90%]">
              <h2 className="text-lg lg:text-xl font-semibold mb-1">
                {item.title}
              </h2>
              <p className="text-sm lg:text-base leading-snug">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Lighting;
