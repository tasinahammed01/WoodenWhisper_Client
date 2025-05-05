import { useState, useEffect } from "react";
import "./AnotherHeader.css";
import { Link } from "react-router-dom";

const AnotherHeader = ({ handleLinkClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [bgOpacity, setBgOpacity] = useState(0);

  useEffect(() => {
    let lastScrollTop = 0;
    const headerHeight = 80;
    const scrollThreshold = 50;

    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      const newOpacity = Math.min(scrollTop / scrollThreshold, 1);
      setBgOpacity(newOpacity);

      if (scrollTop > scrollThreshold) {
        setIsScrolled(true);
        if (scrollTop > lastScrollTop && scrollTop > headerHeight) {
          setIsHeaderVisible(false);
        } else if (scrollTop < lastScrollTop) {
          setIsHeaderVisible(true);
        }
      } else {
        setIsScrolled(false);
        setIsHeaderVisible(true);
      }

      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
        !isHeaderVisible ? "-translate-y-full" : "translate-y-0"
      }`}
      style={{
        backgroundColor: isScrolled
          ? `rgba(237, 231, 222, ${bgOpacity})`
          : "rgba(237, 231, 222, 0)",
        color: isScrolled ? "black" : "white",
        boxShadow: isScrolled
          ? `0 4px 6px rgba(0, 0, 0, ${bgOpacity * 0.1})`
          : "none",
      }}
    >
      <div className="py-4 px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="logo transition-opacity duration-300 hover:opacity-80">
          <Link to="/" onClick={() => handleLinkClick()}>
            <img
              src="https://i.ibb.co/B5zSn3LC/Screenshot-410-removebg-preview.png"
              alt="Logo"
              className="h-20 w-25 transition-transform duration-300 hover:scale-105"
            />
          </Link>
        </div>

        {/* Hamburger Menu */}
        <button
          className="md:hidden focus:outline-none z-50 relative"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div
            className={`hamburger ${isOpen ? "open" : ""} ${
              isScrolled ? "bg-black" : "bg-white"
            }`}
          ></div>
        </button>

        {/* Navigation Links */}
        <nav
          className={`nav-links fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${
            isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
          } md:static md:w-auto md:h-auto md:bg-transparent md:flex md:translate-y-0 md:opacity-100`}
          style={{
            backgroundColor: `rgba(255, 255, 255, ${isOpen ? 0.98 : 0})`,
          }}
        >
          <ul className="flex flex-col md:flex-row w-full text-center gap-11 nav_Links">
            <li>
              <Link
                to="/projects"
                className={`nav-link hover-underline block py-4 transition-colors duration-300 ${
                  isScrolled ? "text-black" : "md:text-black"
                } ${isOpen ? "text-black" : ""}`}
                onClick={() => {
                  handleLinkClick(); // Trigger transition when clicked
                  setIsOpen(false);
                }}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/shop"
                className={`nav-link hover-underline block py-4 transition-colors duration-300 ${
                  isScrolled ? "text-black" : "md:text-black"
                } ${isOpen ? "text-black" : ""}`}
                onClick={() => {
                  handleLinkClick(); // Trigger transition when clicked
                  setIsOpen(false);
                }}
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                to="/videos"
                className={`nav-link hover-underline block py-4 transition-colors duration-300 ${
                  isScrolled ? "text-black" : "md:text-black"
                } ${isOpen ? "text-black" : ""}`}
                onClick={() => {
                  handleLinkClick(); // Trigger transition when clicked
                  setIsOpen(false);
                }}
              >
                Videos
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`nav-link hover-underline block py-4 transition-colors duration-300 ${
                  isScrolled ? "text-black" : "md:text-black"
                } ${isOpen ? "text-black" : ""}`}
                onClick={() => {
                  handleLinkClick(); // Trigger transition when clicked
                  setIsOpen(false);
                }}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/journal"
                className={`nav-link hover-underline block py-4 transition-colors duration-300 ${
                  isScrolled ? "text-black" : "md:text-black"
                } ${isOpen ? "text-black" : ""}`}
                onClick={() => {
                  handleLinkClick(); // Trigger transition when clicked
                  setIsOpen(false);
                }}
              >
                Journals
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default AnotherHeader;
