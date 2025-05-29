import React, { useRef, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

const ProjectsGallery = ({ images, view, isFading }) => {
  const imageRef = useRef(null);
  const animationRef = useRef(null);
  const [hoveredImage, setHoveredImage] = useState(null);

  const handleMouseEnter = useCallback(
    (image) => {
      if (hoveredImage?._id === image._id) return;
      setHoveredImage(image);

      if (animationRef.current) animationRef.current.kill();

      animationRef.current = gsap.fromTo(
        imageRef.current,
        { autoAlpha: 0, scale: 0.9, y: 0 },
        {
          autoAlpha: 1,
          scale: 1,
          y: -30,
          duration: 0.5,
          ease: "power2.out",
        }
      );
    },
    [hoveredImage]
  );

  const handleMouseLeave = useCallback(() => {
    if (animationRef.current) animationRef.current.kill();
    animationRef.current = gsap.to(imageRef.current, {
      autoAlpha: 0,
      scale: 0.95,
      duration: 0.2,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <div
      className={`mt-10 transition-opacity duration-300 ${
        isFading ? "opacity-0" : "opacity-100"
      }`}
    >
      {view === "grid" ? (
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {images.map((image, index) => (
            <div
              key={image._id}
              className={`w-full overflow-hidden ${
                index % 3 === 2 ? "col-span-2" : ""
              }`}
            >
              <Link to={`/projects/${image._id}`}>
                <img
                  loading="lazy"
                  decoding="async"
                  src={image.image}
                  alt={image.title || "Gallery Image"}
                  className="w-full lg:h-[700px] md:h-[500px] h-[300px] object-cover rounded-md shadow-md hover:scale-105 transform transition duration-300 ease-in-out"
                  style={{ filter: "brightness(0.8)" }}
                />
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <ul className="flex flex-col gap-8 mt-30 relative z-10">
          {images.map((image) => (
            <li key={image._id}>
              <Link to={`/projects/${image._id}`}>
                <p
                  onMouseEnter={() => handleMouseEnter(image)}
                  onMouseLeave={handleMouseLeave}
                  className="text-6xl mt-10 font-semibold cursor-pointer hover:text-black transition-colors duration-300"
                >
                  {image.title || "Untitled"}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      )}

      {hoveredImage && (
        <img
          loading="lazy"
          decoding="async"
          ref={imageRef}
          src={hoveredImage.image}
          alt="Preview"
          className="pointer-events-none fixed top-1/2 left-1/2 z-0 opacity-0 scale-90 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] object-cover rounded-xl shadow-xl"
        />
      )}
    </div>
  );
};

export default ProjectsGallery;
