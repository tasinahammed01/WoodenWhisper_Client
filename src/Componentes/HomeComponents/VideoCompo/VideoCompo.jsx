import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const VideoCompo = () => {
  const containerRef = useRef();

  useGSAP(() => {
    let sections = gsap.utils.toArray(".panel");

    // Make horizontal scroll work only after scroll-container hits the top
    gsap.to(containerRef.current, {
      opacity: 1, // When it reaches the top, fade it in
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top", // When the scroll-container hits the top of the screen
        toggleActions: "play none none reverse", // Fade in when hits top
      },
    });

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 2,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + containerRef.current.offsetWidth,
      },
    });
  }, []);

  return (
    <div>
      <div className="scroll-container" ref={containerRef}>
        <section className="panel bg-amber-200">
          <video
            autoPlay
            muted
            loop
            src="https://dfdemo.sumonpro.com/wp-content/uploads/2025/04/6035511_Man_People_3840x2160.mp4"
          ></video>
        </section>
        <section className="panel bg-violet-400">
        <video
            autoPlay
            muted
            loop
            src="https://dfdemo.sumonpro.com/wp-content/uploads/2025/04/0_Breakfast-In-Bed_Tray_3840x2160.mp4"
          ></video>
        </section>
        <section className="panel bg-lime-300">
        <video
            autoPlay
            muted
            loop
            src="https://dfdemo.sumonpro.com/wp-content/uploads/2025/04/4935204_House_Furniture_3840x2160.mp4"
          ></video>
        </section>
      </div>
    </div>
  );
};

export default VideoCompo;
