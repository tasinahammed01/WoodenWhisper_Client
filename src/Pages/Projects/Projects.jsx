import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

const Projects = () => {
  const [images, setImages] = useState([]);
  const [activeView, setActiveView] = useState("grid");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredImages, setFilteredImages] = useState([]);
  const [isFading, setIsFading] = useState(false);
  const [hoveredImage, setHoveredImage] = useState(null);

  const imageRef = useRef(null);

  const categories = ["All", "Mountain", "Desert", "City", "Garden", "Seaside"];

  useEffect(() => {
    fetch("https://woodenwhisper-backend-1.onrender.com/images")
      .then((res) => res.json())
      .then((data) => {
        setImages(data);
        setFilteredImages(data);
      })
      .catch((err) => console.error("Error fetching images:", err));
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setIsFading(true);

    setTimeout(() => {
      const filtered =
        category === "All"
          ? images
          : images.filter(
              (img) => img.category?.toLowerCase() === category.toLowerCase()
            );
      setFilteredImages(filtered);
      setIsFading(false);
    }, 200);
  };

  // Set grid view for smaller screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1200) {
        setActiveView("grid");
      }
    };

    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // GSAP animation on image hover
  const handleMouseEnter = (image) => {
    if (hoveredImage?._id === image._id) return; // Prevent re-triggering same image

    setHoveredImage(image);

    gsap.fromTo(
      imageRef.current,
      { autoAlpha: 0, scale: 0.9, y: 0 },
      {
        autoAlpha: 1,
        scale: 1,
        y: -30,
        duration: 1.5,
        ease: "power2.out",
      }
    );
  };

  const handleMouseLeave = () => {
    gsap.to(imageRef.current, {
      autoAlpha: 0,
      scale: 0.95,
      duration: 0.3,
      ease: "power2.inOut",
    });
  };

  return (
    <div className="pt-40 px-7 bg-[#EDE7DE] text-[rgb(100,96,96)] relative">
      <h1 className="lg:text-8xl md:text-6xl text-3xl uppercase">
        Project Gallery
      </h1>

      {/* Filters */}
      <div className="flex justify-between items-center flex-wrap gap-5">
        <div className="flex items-center gap-10 mt-20 flex-wrap">
          <div className="text-black font-semibold">Filter By:</div>
          <div className="flex items-center gap-5 flex-wrap">
            {categories.map((cat) => (
              <p
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`border rounded-2xl px-5 py-1 cursor-pointer transition ${
                  selectedCategory === cat
                    ? "bg-[#B2AB9F] text-white"
                    : "hover:bg-[#B2AB9F] hover:text-white"
                }`}
              >
                {cat}
              </p>
            ))}
          </div>
        </div>

        <div className="lg:flex gap-5 mt-20 hidden ">
          <p
            className={`uppercase cursor-pointer ${
              activeView === "grid" ? "text-black" : "text-gray-400"
            }`}
            onClick={() => setActiveView("grid")}
          >
            Grid
          </p>
          <p
            className={`uppercase cursor-pointer ${
              activeView === "list" ? "text-black" : "text-gray-400"
            }`}
            onClick={() => setActiveView("list")}
          >
            List
          </p>
        </div>
      </div>

      {/* Grid or List View */}
      <div
        className={`mt-10 transition-opacity duration-500 ${
          isFading ? "opacity-0" : "opacity-100"
        }`}
      >
        {activeView === "grid" ? (
          <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            {filteredImages.map((image, index) => (
              <div
                key={image._id}
                className={`w-full overflow-hidden ${
                  index % 3 === 2 ? "col-span-2" : ""
                }`}
              >
                <Link to={`/image/${image._id}`}>
                  <img
                    loading="lazy"
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
            {filteredImages.map((image) => (
              <Link to={`/image/${image._id}`}>
                <li
                  key={image._id}
                  onMouseEnter={() => handleMouseEnter(image)}
                  onMouseLeave={handleMouseLeave}
                  className="text-6xl mt-10 font-semibold cursor-pointer hover:text-black transition-colors duration-300"
                >
                  {image.title || "Untitled"}
                </li>
              </Link>
            ))}
          </ul>
        )}
      </div>

      {/* Floating Hover Image */}
      {hoveredImage && (
        <img
          loading="lazy"
          ref={imageRef}
          src={hoveredImage.image}
          alt="Preview"
          className="pointer-events-none fixed top-1/2 left-1/2 z-0 opacity-0 scale-90 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] object-cover rounded-xl shadow-xl"
        />
      )}
    </div>
  );
};

export default Projects;
