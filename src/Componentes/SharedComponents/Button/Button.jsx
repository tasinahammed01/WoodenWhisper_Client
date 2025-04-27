import React from "react";
import "./Button.css"; 
const Button = ({ title }) => {
  return (
    <div className="lg:w-[10%] md:w-[15%] w-[30%]">
      <button className="unique-btn w-full">
        <span>{title}</span>
        <span className="arrow">
          <svg viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
          
        </span>
      </button>
    </div>
  );
};

export default Button;
