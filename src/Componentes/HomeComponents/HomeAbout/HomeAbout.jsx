import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Button from "../../SharedComponents/Button/Button";

const HomeAbout = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true }); // smoother and only animates once
  }, []);

  return (
    <div className="lg:h-[60vh] md:h-[35vh] h-[90vh] space-y-10 lg:pl-[30%] lg:pr-[10%] px-10 flex flex-col justify-center bg-[#EDE7DE]">
      <div>
        <div data-aos="fade-up" data-aos-delay="100">
          <h1 className="Heading">Traditional Roots, Modern Expression.</h1>
        </div>
        <div data-aos="fade-up" data-aos-delay="300">
          <h1 className="Heading">
            Materials{" "}
            <span className="text-[rgb(100,96,96)]">tell my story of </span>
            warmth and authenticity{" "}
            <span className="text-[rgb(100,96,96)]">
              creating the ultimate
            </span>{" "}
            sense of home <span className="text-[rgb(100,96,96)]">.</span>
          </h1>
        </div>
      </div>
      <div data-aos="fade-up" data-aos-delay="500">
        <p className="text lg:w-[55%]">
          Adding the touch of an artist’s hand brings an elevated transformation
          mixing crafted modern design with organic naturalism where a soulful
          connection is born.
        </p>
      </div>

      <div data-aos="fade-up" data-aos-delay="700">
        <Button title={"Philosophy"} />
      </div>
    </div>
  );
};

export default HomeAbout;
