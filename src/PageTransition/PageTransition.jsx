import React from "react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PageTransition = ({ children }) => {
  const [showTransition, setShowTransition] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowTransition(false);
    }, 2000); // 2 seconds

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        {showTransition && (
          <motion.div
            key="page-transition"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black text-white"
          >
            <motion.img
              src="https://i.ibb.co.com/B5zSn3LC/Screenshot-410-removebg-preview.png" // replace with your logo
              alt="Logo"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="w-24 h-24 object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Page content */}
      <div
        className={`${
          showTransition ? "opacity-0" : "opacity-100"
        } transition-opacity duration-300`}
      >
        {children}
      </div>
    </div>
  );
};

export default PageTransition;
