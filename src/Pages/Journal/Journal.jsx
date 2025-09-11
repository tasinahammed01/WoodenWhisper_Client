import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Journal = () => {
  const [journals, setJournals] = useState([]);
  const rootRef = useRef(null);

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        gsap.from(".journal-title", {
          y: 24,
          opacity: 0,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: { trigger: ".journal-title", start: "top 85%" },
        });

        gsap.from(".journal-item", {
          y: 18,
          opacity: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: { trigger: ".journal-list", start: "top 85%" },
        });
      }, rootRef);

      return () => ctx.revert();
    },
    { scope: rootRef }
  );

  useEffect(() => {
    fetch("https://woodenwhisper-backend.onrender.com/journals")
      .then((response) => response.json())
      .then((data) => setJournals(data))
      .catch((error) => console.error("Error fetching journals:", error));
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      <div ref={rootRef} className="bg-[#EDE7DE] px-5 md:px-10 md:py-40 py-40">
        <h1 className="journal-title text-4xl  md:text-7xl uppercase text-black pb-10">
          Journal
        </h1>
        <div className="journal-list">
          {journals?.map((journal) => (
            <Link
              key={journal._id}
              to={`/journal/${journal._id}`}
              className="block"
            >
              <div className="journal-item p-4 my-6 rounded-lg flex flex-col md:flex-row gap-6 md:gap-20 ">
                {/* Image Section */}
                <img
                  className="w-full md:w-[35%] h-auto md:h-[35vh] object-cover hidden md:block"
                  src={journal.image}
                  alt={journal.title}
                />

                {/* Text Content */}
                <div className="space-y-4 md:space-y-10">
                  <p className="text-gray-500 hover:text-black  text-2xl md:text-4xl">
                    {journal.title}
                  </p>
                  <p className="text-gray-500 hover:text-black text-sm  md:text-lg">
                    {journal.description}
                  </p>
                </div>
              </div>
              <hr className="border-t-2 border-gray-400 w-full my-4" />
            </Link>
          ))}

          {/* No Data Message */}
          {journals?.length === 0 && (
            <p className="text-gray-500 text-center">No journals available.</p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Journal;
