import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import { motion } from "framer-motion";

const Journal = () => {
  const [journals, setJournals] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/journals")
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
      <div className="bg-[#EDE7DE] px-5 md:px-10 md:py-40 py-40">
        <h1 className="text-4xl  md:text-7xl uppercase text-black pb-10">
          Journal
        </h1>
        <div>
          {journals?.map((journal) => (
            <Link
              key={journal._id}
              to={`/journals/${journal._id}`} // Dynamic Link to Journal Page
              className="block" // Makes the entire section clickable
            >
              <div className="p-4 my-6 rounded-lg flex flex-col md:flex-row gap-6 md:gap-20 ">
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
