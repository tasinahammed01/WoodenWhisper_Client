import React from "react";

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        preload="metadata" // only preload minimal info
        poster="https://i.ibb.co.com/Kp1bJq7F/handcrafted-wooden-decorative-sculptures.jpg" // Add poster here
      >
        <source
          src="https://dfdemo.sumonpro.com/wp-content/uploads/2025/04/202504280149.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Text */}
      <div className="absolute bottom-10 left-10">
        <h1 className="text-6xl md:text-8xl lg:text-8xl w-2">
          Anni Merry Bratron
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;
