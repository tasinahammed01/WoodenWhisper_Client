import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

const SingleJournals = () => {
  const { id } = useParams();
  const [journal, setJournal] = useState(null);

  useEffect(() => {
    fetch(`https://woodenwhisper-backend-1.onrender.com/journals/${id}`)
      .then((res) => res.json())
      .then((data) => setJournal(data))
      .catch((err) => console.error("Error fetching journal:", err));
  }, [id]);

  if (!journal) {
    return <p className="text-center mt-10">Loading journal...</p>;
  }

  return (
    <div>
      <motion.div
        className="px-5 md:px-20 py-20 bg-[#EDE7DE]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <h1 className="text-3xl md:text-5xl font-semibold mb-6 text-black">
          {journal.title}
        </h1>
        <img
          src={journal.image}
          alt={journal.title}
          className="w-full max-h-[60vh] object-cover mb-6 rounded"
        />
        <p className="text-gray-700 text-lg md:text-xl">
          {journal.description}
        </p>
      </motion.div>
    </div>
  );
};

export default SingleJournals;
