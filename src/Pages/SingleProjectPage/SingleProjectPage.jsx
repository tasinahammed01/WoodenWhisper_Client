import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import "./SingleProjectPage.css";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SingleProjectPage = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [images, setImages] = useState([]);
  const containerRef = useRef(null);

  // Fetch single project
  useEffect(() => {
    fetch(`https://woodenwhisper-backend-1.onrender.com/images/${id}`)
      .then((res) => res.json())
      .then((data) => setProject(data))
      .catch((err) => console.error("Error fetching journal:", err));
  }, [id]);

  // Fetch all images
  useEffect(() => {
    fetch("https://woodenwhisper-backend-1.onrender.com/images")
      .then((res) => res.json())
      .then((data) => setImages(data))
      .catch((err) => console.error("Error fetching images:", err));
  }, []);

  useGSAP(() => {
    if (!containerRef.current || images.length === 0) return;

    const sections = gsap.utils.toArray(".panel");

    gsap.to(containerRef.current, {
      opacity: 1,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        toggleActions: "play none none reverse",
      },
    });

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + containerRef.current.scrollWidth,
        anticipatePin: 1,
      },
    });
  }, [images]); // add images as dependency

  // Loading state
  if (!project) {
    return <p className="text-center mt-10">Loading journal...</p>;
  }

  return (
    <div>
      <div className="relative">
        <img
          src={project.image}
          alt="Project"
          className="w-full h-screen object-cover"
        />
        <div className="absolute bottom-10 left-10">
          <h1 className="text-6xl md:text-8xl lg:text-8xl uppercase">
            The Woods
          </h1>
        </div>
      </div>

      <div className="flex justify-between py-24 px-10 bg-[#EDE7DE]">
        <h1 className="text-[rgb(100,96,96)] text-5xl w-[50%]">
          From the Ground Up
        </h1>
        <p className="text-[rgb(100,96,96)] w-[50%] text">
          Set quietly into the woods, this home feels etched into the earth,
          shaped by materials that belong to the land. The architecture leans
          into a modern softness. Rounded volumes and ribbed wood details guide
          movement through the home. At its center, two sculptural kitchen
          islands sit with ease, allowing space to gather, not perform. Light
          moves through in long stretches, revealing shifts in tone and surface
          from morning to dusk. The kitchen flows into the family room, where a
          Normandy-style plaster hood and custom silver root marble hearth
          create quiet strength. The dining room follows naturally, built around
          a pleated marble pendant and a split dead-flat walnut table. Seating
          is mixed, intentional, and slightly offbeat—designed for lived-in
          gatherings, not formality.
          <br /> Private spaces echo the same control. A glass-wrapped closet
          offers calm utility. The steam and shower room is wrapped in linear
          marble and hand-troweled microcement, with a soft bench grounding the
          space in masculine stillness.
          <br /> Throughout, furniture and art are found, not placed. A Sabine
          Maes wall hanging piece discovered in North Carolina now rests in the
          sitting lounge as if it had always been there. Everything within this
          home—brass, stone, plaster, wood—works in rhythm. This is a house that
          listens before it speaks. Inviting a slower, more intentional way of
          living.
        </p>
      </div>

      <div className="horizontal-scroll-wrapper">
        <div className="horizontal-scroll-container" ref={containerRef}>
          {images.map((image) => (
            <section
              key={image._id}
              className="panel horizontal-scroll-section flex items-center  justify-center "
            >
              <img
                src={image.image}
                alt={image.title || "Project Image"}
                className="h-[600px] object-cover "
              />
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleProjectPage;
