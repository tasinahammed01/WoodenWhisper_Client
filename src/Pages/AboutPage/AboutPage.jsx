import React from "react";

const AboutPage = () => {
  return (
    <div className="bg-[#EDE7DE]">
      <div className="h-screen flex pt-[150px] px-5">
        <div className="w-[50%] pr-8">
          <p className="text-black text-xl leading-relaxed">Philosophy</p>
          <h2 className="text-[60px] text-black leading-tight font-medium">
            Where Design, Craftsmanship, and Vision Meet
          </h2>
          <p className="text-[30px] text-black leading-snug">
            At AMB, my design process is a journey—one that redefines
            possibilities through sketching, questioning, and constant dialogue
            with both clients and architects.
          </p>
        </div>
        <div className="w-[50%]">
          <img
            className="w-[100%] h-[90vh] object-cover"
            src="https://i.ibb.co/yng7MSJF/Philosophy-Page01.jpg"
            alt="Philosophy"
          />
        </div>
      </div>
      <div className="h-[80vh] flex flex-col justify-center text-black px-5 space-y-6">
        <h1 className="text-[60px] leading-tight font-medium">
          I crave uniquely tangible qualities in everything I create, where
          materials, shapes, textures, and patinas come together to evoke
          something thrilling and emotionally binding.
        </h1>
        <p className="text-[16px] leading-relaxed max-w-5xl ml-auto text-left font-medium">
          I work with the purest materials of hand-cast bronze, white oak, and
          leathered stone, crafting each piece with an eye for its inherent
          beauty. This philosophy is driven by three principles: an unwavering
          commitment to quality, a reverence for natural elements, and a belief
          that design should surprise and inspire. Every space tells a story,
          and I aim to create homes that feel like living art, celebrating both
          the raw and the refined.
        </p>
      </div>
      <div>
        <img src="https://i.ibb.co/Tx1hCS5V/Philosophy-Page02-1.jpg" alt="" />
      </div>
      <div className="h-[80vh] flex flex-col justify-center text-black px-5 space-y-6">
        <h1 className="text-[60px] leading-tight font-medium">
          Design is never an isolated act; it emerges from a moving dialogue
          amongst builders, clients, and architects as we aim to achieve the
          vision through cutting-edge design.
        </h1>
        <p className="text-[16px] leading-relaxed max-w-5xl ml-auto text-left font-medium">
          I believe that the finest materials should speak for themselves—their
          texture, touch, and interaction with the environment are what make a
          space come alive. From a mountain chalet to a desert sanctuary or
          modern loft, the goal is always the same: to embody a unique balance
          of artistry, functionality, and timeless elegance. Our inspiration
          arrives through the evolving landscape and natural elements
          surrounding this studio—the ranges, riverbeds, and desert
          plains—Infusing each project with a sense of rootedness and an
          awareness of the terrain. By blending classic influences with
          contemporary innovation, I explore new possibilities transforming how
          we live and feel.
        </p>
      </div>
      <div className="flex justify-center py-16 px-5">
        <div className="w-full">
          <video
            className="w-full rounded-lg shadow-lg"
            controls
            poster="https://i.ibb.co/v4v8df1W/maxresdefault.jpg"
          >
            <source src="your-video-file.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className="h-[60vh] flex flex-col justify-center items-center space-y-[60px] text-black px-5 space-y-6">
        <h1 className="text-[60px] leading-tight font-medium text-center w-[50%] ">
          The home is a vessel where we collect experiences and share them with
          those who are a part of our lives.
        </h1>
        <div className="lg:w-[8%] md:w-[15%] w-[30%]">
          <button className="unique-btn2 w-full">
            <span className="text-black title-transition2 active">OUR JOURNAL</span>
            <span className="arrow">
              <svg viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
