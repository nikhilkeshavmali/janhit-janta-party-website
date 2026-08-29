import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NationalMessage from './components/home/NationalMessage';
import VisionMission from './components/home/VisionMission';
import KeyInitiatives from './components/home/KeyInitiatives';
import JoinBanner from './components/home/JoinBanner';
import Donor from './pages/Donor';

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <NationalMessage />
        <VisionMission />
        <KeyInitiatives />
        <JoinBanner />
      </main>
      <Donor/>
      <Footer />
    </div>
  );
}

export default App;