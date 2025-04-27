import React, { useState } from "react";
import { Outlet } from "react-router";
import PageTransition from "../PageTransition/PageTransition";
import Footer from "../Componentes/SharedComponents/Footer/Footer";
import Header from "../Componentes/SharedComponents/Header/Header";

const Layout = () => {
  const [showTransition, setShowTransition] = useState(false);

  // Function to handle link click and trigger page transition
  const handleLinkClick = () => {
    setShowTransition(true);
    setTimeout(() => {
      setShowTransition(false);
    }, 2000); // transition duration (2 seconds)
  };

  return (
    <PageTransition key={location.pathname}>
      <Header handleLinkClick={handleLinkClick}></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </PageTransition>
  );
};

export default Layout;
