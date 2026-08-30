import React from "react";

import HeroSection from "../components/home/HeroSection";
import PartyIntro from "../components/home/PartyIntro";
import Highlights from "../components/home/Highlights";
import FeaturedInitiatives from "../components/home/FeaturedInitiatives";
import NationalMessage from "../components/home/NationalMessage";
import VisionMission from "../components/home/VisionMission";
import KeyInitiatives from "../components/home/KeyInitiatives";
import JoinBanner from "../components/home/JoinBanner";

const Home = () => {
  return (
    <main className="home-page">
      <HeroSection />
      <PartyIntro />
      <VisionMission />
      <NationalMessage />
      <JoinBanner />
    </main>
  );
};

export default Home;

