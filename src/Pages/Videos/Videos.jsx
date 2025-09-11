import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const demoVideos = [
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
  const rootRef = useRef(null);

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        gsap.from(".videos-title", {
          y: 24,
          opacity: 0,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: { trigger: ".videos-title", start: "top 85%" },
        });

        gsap.from(".video-card", {
          y: 20,
          opacity: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: { trigger: ".videos-grid", start: "top 85%" },
        });
      }, rootRef);

      return () => ctx.revert();
    },
    { scope: rootRef }
  );

  return (
    <div ref={rootRef} className="bg-[#EDE7DE] px-5 md:px-10 md:py-40 py-40">
      <h1 className="videos-title text-4xl md:text-7xl uppercase text-black pb-10">
        Videos
      </h1>
      <div className="videos-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {demoVideos.map((v, idx) => (
          <div key={idx} className="video-card group">
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <img
                src={v.poster}
                alt={v.title}
                className="w-full h-[240px] md:h-[320px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="unique-btn2">
                  <span className="text-white title-transition2 active">Play</span>
                </button>
              </div>
            </div>
            <p className="mt-3 text-black text-lg">{v.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Videos;