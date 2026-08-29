import React from 'react';
import HeroSection from '../components/home/HeroSection';
import PartyIntro from '../components/home/PartyIntro';
import Highlights from '../components/home/Highlights';
import FeaturedInitiatives from '../components/home/FeaturedInitiatives';
import LatestUpdates from '../components/home/LatestUpdates';

const Home = () => {
  return (
    <main className="home-page">
      <HeroSection />
      <PartyIntro />
      <Highlights />
      <FeaturedInitiatives />
      <LatestUpdates />
    </main>
  );
};

export default Home;