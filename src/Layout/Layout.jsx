import React, { useEffect, useState } from "react";
import { Outlet } from "react-router";
import PageTransition from "../PageTransition/PageTransition";
import Footer from "../Componentes/SharedComponents/Footer/Footer";
import Header from "../Componentes/SharedComponents/Header/Header";
import Lenis from "@studio-freight/lenis";
import AnotherHeader from "../Componentes/SharedComponents/AnotherHeader/AnotherHeader";

const Layout = () => {
  const [showTransition, setShowTransition] = useState(false);

  // Function to handle link click and trigger page transition
  const handleLinkClick = () => {
    setShowTransition(true);
    setTimeout(() => {
      setShowTransition(false);
    }, 2000); // transition duration (2 seconds)
  };

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const path = location.pathname;
  const showMainHeader =
    path === "/" || path === "/videos" || path === "/about";

  return (
    <PageTransition key={location.pathname}>
      {showMainHeader ? (
        <Header handleLinkClick={handleLinkClick} />
      ) : (
        <AnotherHeader handleLinkClick={handleLinkClick} />
      )}
      <Outlet />
      <Footer />
    </PageTransition>
  );
};

export default Layout;
