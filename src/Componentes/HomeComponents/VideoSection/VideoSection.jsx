import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import "./VideoSection.css";

const VideoSection = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <div className="text-center text-black lg:h-[70vh] md:h-[80vh] h-[70vh] space-y-16 px-10 flex flex-col justify-center bg-[#EDE7DE]">
      <p className="uppercase" data-aos="fade-up" data-aos-duration="1000">
        Videos
      </p>
      <h1
        className="lg:w-[40%] md:w-[80%] w-[100%] mx-auto text-3xl md:text-8xl lg:text-7xl"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        Sharing daily design philosophy
      </h1>
      <div
        className="flex justify-center items-center gap-10"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <div className="lg:w-[6%] md:w-[15%] w-[30%]">
          <button className="unique-btn2 w-full">
            <span className="text-black title-transition2 active">YOUTUBE</span>
            <span className="arrow">
              <svg viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </button>
        </div>
        <div className="lg:w-[6%] md:w-[15%] w-[35%]">
          <button className="unique-btn2 w-full">
            <span className="text-black title-transition2 active">
              INSTAGRAM
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

export default VideoSection;
