import React, { useRef, useState, useCallback, useMemo } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

const ProjectsGallery = ({ images, view, isFading }) => {
  const imageRef = useRef(null);
  const animationRef = useRef(null);
  const [hoveredImage, setHoveredImage] = useState(null);
  const positionRef = useRef({ x: 0, y: 0 });

  const safeImages = useMemo(
    () => (Array.isArray(images) ? images.filter((i) => i && i._id && i.image) : []),
    [images]
  );

  // CDN proxy for responsive, compressed variants without changing backend
  const getOptimizedUrl = useCallback((rawUrl, width = 1200, quality = 70) => {
    try {
      const u = new URL(rawUrl);
      const clean = `${u.hostname}${u.pathname}`; // strip protocol/query for proxy
      return `https://images.weserv.nl/?url=${clean}&w=${width}&q=${quality}&we`; // auto-webp
    } catch {
      return rawUrl;
    }
  }, []);

  const handleMouseEnter = useCallback((image) => {
    if (!image) return;
    // Imperatively update preview src to avoid state timing issues
    if (imageRef.current) {
      imageRef.current.src = image.image;
    }
    setHoveredImage(image);
    if (animationRef.current) animationRef.current.kill();
    animationRef.current = gsap.fromTo(
      imageRef.current,
      { autoAlpha: 0, scale: 0.98 },
      { autoAlpha: 1, scale: 1, duration: 0.2, ease: "power2.out" }
    );
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (animationRef.current) animationRef.current.kill();
    animationRef.current = gsap.to(imageRef.current, {
      autoAlpha: 0,
      scale: 0.98,
      duration: 0.2,
      ease: "power2.inOut",
    });
  }, []);

  const handleMouseMove = useCallback((e) => {
    positionRef.current = { x: e.clientX, y: e.clientY };
    if (!imageRef.current) return;
    gsap.to(imageRef.current, {
      x: positionRef.current.x - window.innerWidth / 2,
      y: positionRef.current.y - window.innerHeight / 2,
      duration: 0.15,
      ease: "power2.out",
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
          {safeImages.map((image, index) => (
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
                  src={getOptimizedUrl(image.image, 1200, 70)}
                  srcSet={[
                    `${getOptimizedUrl(image.image, 600, 70)} 600w`,
                    `${getOptimizedUrl(image.image, 900, 70)} 900w`,
                    `${getOptimizedUrl(image.image, 1400, 70)} 1400w`,
                  ].join(", ")}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
                  fetchpriority="low"
                  alt={image.title || "Gallery Image"}
                  className="w-full lg:h-[700px] md:h-[500px] h-[300px] object-cover rounded-md shadow-md hover:scale-105 transform transition duration-300 ease-in-out"
                  style={{ filter: "brightness(0.8)" }}
                />
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <ul className="flex flex-col gap-8 mt-30 relative z-10" onMouseMove={handleMouseMove}>
          {safeImages.map((image) => (
            <li key={image._id} onMouseEnter={() => handleMouseEnter(image)} onMouseLeave={handleMouseLeave}>
              <Link to={`/projects/${image._id}`}>
                <p
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
          src={getOptimizedUrl(hoveredImage.image, 800, 70)}
          alt="Preview"
          className="pointer-events-none fixed top-1/2 left-1/2 z-50 opacity-0 -translate-x-1/2 -translate-y-1/2 w-[50vw] max-w-[720px] h-[36vw] max-h-[480px] object-cover rounded-xl shadow-2xl"
        />
      )}
    </div>
  );
};

export default ProjectsGallery;
