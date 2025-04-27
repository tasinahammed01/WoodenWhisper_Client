import React from "react";
import { Link } from "react-router-dom"; // Make sure to import from 'react-router-dom'

const Footer = () => {
  return (
    <div className="py-10 px-4 md:px-[10%] bg-[#EDE7DE]">
      <div className="flex flex-col md:flex-row  justify-between md:items-start items-center mb-10 text-black">
        <div className="mb-4 md:mb-0">
          <img
            src="https://i.ibb.co/B5zSn3LC/Screenshot-410-removebg-preview.png"
            alt="Logo"
            className="h-20 w-25 transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="mb-4 md:mb-0">
          <ul className="flex flex-col md:items-start items-center space-y-2 md:space-y-0 md:space-x-6">
            <li>
              <Link
                to="/"
                className="text transition duration-300 hover:underline hover:underline-offset-4"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="text transition duration-300 hover:underline hover:underline-offset-4"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="text transition duration-300 hover:underline hover:underline-offset-4"
              >
                Videos
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="text transition duration-300 hover:underline hover:underline-offset-4"
              >
                Philosophy
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="text transition duration-300 hover:underline hover:underline-offset-4"
              >
                Team
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="text transition duration-300 hover:underline hover:underline-offset-4"
              >
                Journal
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="text transition duration-300 hover:underline hover:underline-offset-4"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <p>
            Inquire about projects <br /> hello@ambdesigninc.com <br /> (801)
            272-8680
          </p>
        </div>
        <div className="py-5">
          <ul className="flex flex-col space-y-2">
            <li>
              <Link
                to="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-black transition duration-300 hover:text-blue-600"
              >
                <i className="fab fa-facebook-f mr-2"></i>{" "}
                {/* Font Awesome icon */}
                Facebook
              </Link>
            </li>
            <li>
              <Link
                to="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-black transition duration-300 hover:text-pink-600"
              >
                <i className="fab fa-instagram mr-2"></i>{" "}
                {/* Font Awesome icon */}
                Instagram
              </Link>
            </li>
            <li>
              <Link
                to="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-black transition duration-300 hover:text-blue-400"
              >
                <i className="fab fa-twitter mr-2"></i>{" "}
                {/* Font Awesome icon */}
                Twitter
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between md:items-start items-center text-black">
        <p>4680 Kelly Circle, Holladay, UT 84117</p>
        <p>© All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
