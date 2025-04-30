import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./VideoCompo.css";

gsap.registerPlugin(ScrollTrigger);

const VideoCompo = () => {
  useEffect(() => {
    const panels = gsap.utils.toArray(".panel");
    panels.forEach((panel, index) => {
      if (index !== panels.length - 1) {
        // Skip the last panel from pinning
        ScrollTrigger.create({
          trigger: panel,
          start: "top top",
          end: "bottom top",
          pin: true,
          pinSpacing: false,
        });
      }
    });
  }, []);

  return (
    <div className="sections">
      <section
        className="panel"
        style={{
          backgroundImage: "url(https://i.ibb.co/z0tD9NZ/Tsai-34.jpg)",
        }}
      >
        <h1>First Panel</h1>
      </section>

      <section
        className="panel"
        style={{
          backgroundImage: "url(https://i.ibb.co.com/HfgfVFbw/Tsai-07.jpg)",
        }}
      >
        <h1>Second Panel</h1>
      </section>

      <section
        className="panel"
        style={{
          backgroundImage: "url(https://i.ibb.co.com/zWhrzpP7/Tsai-13.jpg)",
        }}
      >
        <h1>Third Panel</h1>
      </section>
    </div>
  );
};

export default VideoCompo;
