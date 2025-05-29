import React, { useEffect, useState, useCallback } from "react";
import ProjectsGallery from "./ProjectsGallery";

const categories = ["All", "Mountain", "Desert", "City", "Garden", "Seaside"];

const Projects = () => {
  const [images, setImages] = useState([]);
  const [filteredImages, setFilteredImages] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeView, setActiveView] = useState("grid");
  const [isFading, setIsFading] = useState(false);

  // Fetch images
  useEffect(() => {
    const controller = new AbortController();
    fetch("https://woodenwhisper-backend-1.onrender.com/images", {
      signal: controller.signal,
    })
      .then((res) => res.json())
      .then((data) => {
        setImages(data);
        setFilteredImages(data);
      })
      .catch((err) => {
        if (err.name !== "AbortError")
          console.error("Error fetching images:", err);
      });

    return () => controller.abort();
  }, []);

  // Filter by category
  const handleCategoryChange = useCallback(
    (category) => {
      setSelectedCategory(category);
      setIsFading(true);
      requestAnimationFrame(() => {
        const filtered =
          category === "All"
            ? images
            : images.filter(
                (img) => img.category?.toLowerCase() === category.toLowerCase()
              );
        setFilteredImages(filtered);
        setIsFading(false);
      });
    },
    [images]
  );

  // Set grid view for small screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1200) setActiveView("grid");
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

        <div className="lg:flex gap-5 mt-20 hidden">
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

      {/* Gallery Component */}
      <ProjectsGallery
        images={filteredImages}
        view={activeView}
        isFading={isFading}
      />
    </div>
  );
};

export default Projects;
