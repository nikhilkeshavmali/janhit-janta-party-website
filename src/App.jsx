import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import NationalMessage from "./components/home/NationalMessage";
import VisionMission from "./components/home/VisionMission";
import KeyInitiatives from "./components/home/KeyInitiatives";
import JoinBanner from "./components/home/JoinBanner";

import Donor from "./pages/Donor";

function Home() {
  return (
    <>
      <NationalMessage />
      <VisionMission />
      <KeyInitiatives />
      <JoinBanner />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/donor" element={<Donor />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
