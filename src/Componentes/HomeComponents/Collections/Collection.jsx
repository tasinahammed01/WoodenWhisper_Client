import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Collections.css";

gsap.registerPlugin(ScrollTrigger);

const Collections = () => {
  const imageRefs = useRef([]);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    gsap.fromTo(
      imageRefs.current[1],
      { y: 0 },
      {
        y: -200,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: imageRefs.current[1],
          start: "top 80%",
          end: "bottom 50%",
          scrub: true,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="py-10 px-5 lg:px-[10%] min-h-[50vh] lg:min-h-[100vh] flex flex-col lg:flex-row gap-10 justify-center items-center bg-[#EDE7DE]">
      <div className="w-full lg:w-[50%] space-y-6 px-4 text-center lg:text-left">
        <h1
          className="subheading text-[#6E6C68]"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Designed by <br /> Anne—Marie Barton
        </h1>
        <h1
          className="subheading text-black"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Objects crafted to elevate your space — furniture, rugs, hardware, and
          more.
        </h1>
        <p
          className="text w-full md:w-[90%] mx-auto lg:mx-0"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          Extending beyond interiors, Anne-Marie is shaping a bespoke collection
          of furniture, rugs, hardware, and more...
        </p>
        <div
          className="w-[70%] md:w-[30%] lg:w-[25%] flex justify-center lg:justify-start"
          data-aos="fade-up"
          data-aos-delay="700"
        >
          <button className="unique-btn3 max-w-xs w-full">
            <span className="text-black title-transition3 active">
              SEE ALL VIDEOS
            </span>
            <span className="arrow">
              <svg viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </button>
        </div>
      </div>
      <div className="relative w-full lg:w-[50%] flex justify-center lg:block">
        <img
          src="https://i.ibb.co/cKMN6Vc5/pexels-sara-kazemi-2148049458-30150599.jpg"
          alt=""
          className="w-full md:w-[80%] h-[60vh] object-cover"
          ref={(el) => (imageRefs.current[0] = el)}
        />
        <img
          src="https://i.ibb.co/vNzwKBc/pexels-khadijah-17483167.jpg"
          alt=""
          className="absolute bottom-[-30px] right-0 md:bottom-[-50px] md:right-4 w-[50%] md:w-[50%] h-[50%] md:h-[30%] lg:w-[40%] lg:h-[50%] rounded-full object-cover border-4 border-white shadow-lg"
          ref={(el) => (imageRefs.current[1] = el)}
        />
      </div>
    </div>
  );
};

export default Collections;
