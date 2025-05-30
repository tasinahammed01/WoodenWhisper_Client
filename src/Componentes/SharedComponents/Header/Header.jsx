import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = ({ handleLinkClick }) => {
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

      // Calculate opacity from 0 to 1 based on scroll threshold
      const newOpacity = Math.min(scrollTop / scrollThreshold, 1);
      setBgOpacity(newOpacity);

      if (scrollTop > scrollThreshold) {
        setIsScrolled(true);

        if (scrollTop > lastScrollTop && scrollTop > headerHeight) {
          // Scrolling down and passed header height - hide header
          setIsHeaderVisible(false);
        } else if (scrollTop < lastScrollTop) {
          // Scrolling up - show header
          setIsHeaderVisible(true);
        }
      } else {
        // Near top of page, reset states
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
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-500 ease-in-out ${
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
          <Link
            to="/"
            onClick={() => {
              handleLinkClick();
              setIsOpen(false); // Close menu on logo click
            }}
          >
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
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
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
                  isScrolled ? "text-black" : "md:text-white"
                } ${isOpen ? "text-black" : ""}`}
                onClick={() => {
                  handleLinkClick();
                  setIsOpen(false);
                }}
              >
                Projects
              </Link>
            </li>

            <li className="relative group">
              {isOpen ? (
                <Link
                  to="/shop/lighting"
                  className="nav-link hover-underline block py-4 transition-colors duration-300 text-black"
                  onClick={() => {
                    handleLinkClick();
                    setIsOpen(false);
                  }}
                >
                  Shop
                </Link>
              ) : (
                // Make Shop text always white here
                <span
                  className={`nav-link hover-underline block py-4 cursor-default transition-colors duration-300 ${
                    isScrolled ? "text-black" : "md:text-white"
                  }`}
                >
                  Shop
                </span>
              )}

              {!isOpen && (
                <div className="absolute top-full left-0 mt-1 w-40 bg-white shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-50">
                  <Link
                    to="/shop/lighting"
                    className="block px-4 py-2 hover:bg-gray-100 text-black"
                    onClick={() => {
                      handleLinkClick();
                      setIsOpen(false);
                    }}
                  >
                    Lighting
                  </Link>
                  <hr className="border-gray-200" />
                  <Link
                    to="/shop/rugs"
                    className="block px-4 py-2 hover:bg-gray-100 text-black"
                    onClick={() => {
                      handleLinkClick();
                      setIsOpen(false);
                    }}
                  >
                    Rugs
                  </Link>
                </div>
              )}
            </li>

            <li>
              <Link
                to="/videos"
                className={`nav-link hover-underline block py-4 transition-colors duration-300 ${
                  isScrolled ? "text-black" : "md:text-white"
                } ${isOpen ? "text-black" : ""}`}
                onClick={() => {
                  handleLinkClick();
                  setIsOpen(false);
                }}
              >
                Videos
              </Link>
            </li>

            <li className="relative group">
              {isOpen ? (
                <Link
                  to="/about/photo"
                  className="nav-link hover-underline block py-4 transition-colors duration-300 text-black"
                  onClick={() => {
                    handleLinkClick();
                    setIsOpen(false);
                  }}
                >
                  About
                </Link>
              ) : (
                // Make About text always white here
                <span
                  className={`nav-link hover-underline block py-4 cursor-default transition-colors duration-300 ${
                    isScrolled ? "text-black" : "md:text-white"
                  }`}
                >
                  About
                </span>
              )}

              {!isOpen && (
                <div className="absolute top-full left-0 mt-1 w-40 bg-white shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-50">
                  <Link
                    to="/about/philosophy"
                    className="block px-4 py-2 hover:bg-gray-100 text-black"
                    onClick={() => {
                      handleLinkClick();
                      setIsOpen(false);
                    }}
                  >
                    Philosophy
                  </Link>
                  <hr className="border-gray-200" />
                  <Link
                    to="/about/people"
                    className="block px-4 py-2 hover:bg-gray-100 text-black"
                    onClick={() => {
                      handleLinkClick();
                      setIsOpen(false);
                    }}
                  >
                    People
                  </Link>
                </div>
              )}
            </li>

            <li>
              <Link
                to="/journal"
                className={`nav-link hover-underline block py-4 transition-colors duration-300 ${
                  isScrolled ? "text-black" : "md:text-white"
                } ${isOpen ? "text-black" : ""}`}
                onClick={() => {
                  handleLinkClick();
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

export default Header;
