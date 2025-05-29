import React from "react";

const teamMembers = [
  {
    imageUrl: "https://i.ibb.co/ccbrtbSf/1.jpg",
    name: "Anne-Marie Barton",
    position: "Founder & Principal",
  },
  {
    imageUrl: "https://i.ibb.co/nswr3jqp/1-2.jpg",
    name: "Kent Barton",
    position: "Managing Director",
  },
  {
    imageUrl: "https://i.ibb.co/fVkV6HxN/2-2.jpg",
    name: "Marissa",
    position: "Interior Designer",
  },
  {
    imageUrl: "https://i.ibb.co/nNTzXfpt/3-2.jpg",
    name: "Emily",
    position: "Project Coordinator",
  },
  {
    imageUrl: "https://i.ibb.co/rKsjC0kx/4-2.jpg",
    name: "Laura",
    position: "Architect",
  },
  {
    imageUrl: "https://i.ibb.co/HLpgmLLz/5-2.jpg",
    name: "Michael",
    position: "Operations Manager",
  },
];

const People = () => {
  return (
    <div className="bg-[#EDE7DE] px-5">
      <div className="min-h-screen lg:flex pt-[150px] px-5 flex-col lg:flex-row flex-wrap">
        <div className="lg:w-[50%] lg:pr-8 w-full">
          <p className="text-black text-xl leading-relaxed">People</p>
          <h2 className="text-[30px] md:text-[50px] lg:text-[96px] uppercase text-black leading-tight font-medium">
            The AMB <br /> Studio
          </h2>
        </div>
        <div className="lg:w-[50%] w-full lg:mt-0 mt-10 space-y-5">
          <img
            className="w-full lg:h-[70vh] h-auto object-cover object-top"
            src="https://i.ibb.co/xSPwFCJK/People-Page01.jpg"
            alt="Philosophy"
          />
          <div className="w-[90%] max-w-full space-y-5">
            <h1 className="text-black text-[30px] sm:text-[40px] md:text-[50px]">
              A Team Driven by Creative Energy and Passion for Design
            </h1>
            <hr className="text-black" />
            <p className="text-black text-[16px] sm:text-[18px]">
              Great design is born from enthusiasm, evolving our craft, and
              embracing the unexpected. Our daily essential is a shared passion
              for creating spaces that are both functional and beautiful. As a
              collective, we approach each undertaking with confidence,
              fluidity, and a dedication to fulfilling the vision.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-20 md:mt-32 px-2 md:px-0">
        <h1 className="uppercase text-black text-[50px] sm:text-[65px] md:text-[80px] text-center md:text-left">
          Team
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 mt-6 md:mt-10">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-left">
              <img
                src={member.imageUrl}
                alt={member.name}
                className="w-full h-[300px] sm:h-[350px] md:h-[400px] object-cover rounded-md"
              />
              <div className="mt-3">
                <h3 className="text-lg sm:text-xl font-semibold text-black">
                  {member.name}
                </h3>
                <p className="text-gray-700 text-sm sm:text-base">
                  {member.position}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full mt-20 md:mt-32 flex flex-col md:flex-row flex-wrap">
        {/* Image Section */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <img
            className="w-full object-cover rounded-md"
            src="https://i.ibb.co/LzmYxT7W/People-Page02-220x300.jpg"
            alt=""
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 text-black flex flex-col items-center justify-between px-4 sm:px-6 md:px-12 py-6 md:py-0">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-[60px] leading-tight">
              Crafting <br /> Experiences
            </h1>
            <div className="mt-6 mx-auto md:mx-0 lg:w-4/5 md:w-[70%] sm:w-3/4 w-full">
              <button className="unique-btn2 w-full">
                <span className="text-black title-transition2 active">
                  LET’S WORK TOGETHER
                </span>
                <span className="arrow">
                  <svg
                    viewBox="0 0 24 24"
                    className="inline-block w-5 h-5 ml-2"
                  >
                    <path
                      d="M5 12h14M12 5l7 7-7 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>
          <div className="w-full lg:w-[50%] mx-auto md:mx-0">
            <hr className="mb-4" />
            <p className="text-sm sm:text-base leading-relaxed">
              Our studio creates daring, imaginative, sophisticated spaces that
              blur the line between functional sculpture and livability. With a
              uniquely tangible quality, we invite our clients to experience
              something new through the interplay of organic forms, uplifting
              finishes, and selective materials. Guided by a sense of wonder,
              grounded in first-class craftsmanship, we aim to redefine limits
              with every space we touch.
            </p>
          </div>
        </div>
      </div>

      <div className="relative h-screen pb-10">
        <div className="absolute bottom-0 left-0 w-full h-[95vh] object-cover">
          <video
            className="w-full h-full object-cover rounded-lg shadow-xl"
            poster="https://i.ibb.co/xSPwFCJK/People-Page01.jpg"
            autoPlay
            loop
            muted
          >
            <source src="your-video-url.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="absolute bottom-20 left-10 lg:left-40 lg:w-[35%] w-[90%] md:w-[50%] p-4 rounded-md">
          <h1 className="text-white text-xl  font-semibold mb-2">
            Anne-Marie Barton
          </h1>
          <p className="text-white text-sm md:text-lg lg:text-3xl ">
            "What I value more than someone's aesthetic is their energy—their
            enthusiasm for what they create, their confidence in decisions, and
            their poise and grace in the face of change. It's our job to remain
            fluid and passionate about fulfilling our clients' visions." “It’s
            not just the transformation of a raw space that I envision, it’s the
            transformation of the people who experience it. By investing in
            beauty, you in turn live a more beautiful life.”
          </p>
          <div className="mt-4 lg:w-[25%] md:w-[40%] w-[60%]">
            <button className="unique-btn2 w-full">
              <span className="text-white title-transition2 active">
                Our Philosophy
              </span>
              <span className="arrow ">
                <svg viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default People;
