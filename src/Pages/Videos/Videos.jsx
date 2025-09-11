import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const videoPanels = [
  {
    poster: "https://i.ibb.co/v4v8df1W/maxresdefault.jpg",
    src: "",
    title: "Studio Tour",
  },
  {
    poster: "https://i.ibb.co/Kpw0DQ5F/Philosophy-Page03-poster.jpg",
    src: "",
    title: "Philosophy Insights",
  },
  {
    poster: "https://i.ibb.co/JWnwW2Q9/Philosophy-Page04-poster.jpg",
    src: "",
    title: "Project Spotlight",
  },
  {
    poster: "https://i.ibb.co/xSPwFCJK/People-Page01.jpg",
    src: "",
    title: "People and Process",
  },
];

const Videos = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        const sections = gsap.utils.toArray(".video-panel");
        if (!sections.length) return;

        gsap.to(sections, {
          xPercent: -100 * (sections.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            pin: true,
            scrub: 1,
            snap: 1 / (sections.length - 1),
            end: () => "+=" + containerRef.current.scrollWidth,
          },
        });
      }, containerRef);

      return () => ctx.revert();
    },
    { scope: containerRef }
  );

  return (
    <div className="bg-[#EDE7DE]">
      <div
        ref={containerRef}
        className="relative flex items-stretch overflow-hidden w-screen h-screen"
      >
        {videoPanels.map((v, idx) => (
          <section
            key={idx}
            className="video-panel relative min-w-[100vw] h-screen"
            aria-label={v.title}
          >
            <video
              className="absolute inset-0 w-full h-full object-cover"
              poster={v.poster}
              autoPlay
              muted
              loop
              playsInline
            >
              {v.src ? <source src={v.src} type="video/mp4" /> : null}
            </video>

            <div className="absolute bottom-6 left-6 bg-black/40 text-white px-4 py-2 rounded-md">
              <p className="text-lg md:text-2xl">{v.title}</p>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Videos;