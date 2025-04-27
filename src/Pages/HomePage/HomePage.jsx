import React from "react";
import HeroSection from "../../Componentes/HomeComponents/Herosection/Herosection";
import Carousal from "../../Componentes/HomeComponents/Carousal/Carousal";
import HomeAbout from "../../Componentes/HomeComponents/HomeAbout/HomeAbout";
import VideosCompo from "../../Componentes/HomeComponents/VideoCompo/VideoCompo";
import VideoSection from "../../Componentes/HomeComponents/VideoSection/VideoSection";
import Collections from "../../Componentes/HomeComponents/Collections/Collection";


const HomePage = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <HomeAbout></HomeAbout>
      <Carousal></Carousal>
      <VideoSection></VideoSection>
      <VideosCompo></VideosCompo>
      <Collections></Collections>
    </div>
  );
};

export default HomePage;
