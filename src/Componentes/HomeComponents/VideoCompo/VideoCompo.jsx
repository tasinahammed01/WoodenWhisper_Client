import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const VideosCompo = () => {
  const textRefs = [useRef(null), useRef(null), useRef(null)];

  useGSAP(() => {
    textRefs.forEach((ref) => {
      gsap.fromTo(
        ref.current,
        { y: 100, opacity: 0 },
        {
          y: -100,
          opacity: 1,
          scrollTrigger: {
            trigger: ref.current,
            start: "top 90%",
            end: "bottom 50%",
            scrub: true,
          },
        }
      );
    });
  }, [textRefs]);

  return (
    <div className="relative">
      {/* First video with text overlay */}
      <div className="h-[100vh] sticky top-0 z-10">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <h1
          ref={textRefs[0]}
          className="absolute text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl md:text-4xl lg:text-6xl font-bold"
        >
          OPEN VIEWS
        </h1>
      </div>

      {/* Other videos */} 
      <div className="h-[100vh]  sticky top-0 z-10">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="video1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <h1
          ref={textRefs[1]}
          className="absolute text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl md:text-4xl lg:text-6xl font-bold"
        >
          COMPONENTS OF THE PRIMARY BEDROOM
        </h1>
      </div>

      <div className="h-[100vh] sticky top-0 z-10">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="video2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <h1
          ref={textRefs[2]}
          className="absolute text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl md:text-4xl lg:text-6xl font-bold"
        >
          RUG ELEGANCE
        </h1>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <div className="w-[80%] md:w-[50%] lg:w-[30%] mx-auto">
            <button className="unique-btn1 w-full">
              <span className="text-white title-transition.active">
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
      </div>
    </div>
  );
};

export default VideosCompo;
