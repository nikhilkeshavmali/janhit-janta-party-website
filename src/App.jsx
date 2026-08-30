import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import About from "./pages/About";
import VisionMission from "./pages/VisionMission";
import Donor from "./pages/Donor";
import News from "./pages/News";
import Events from "./pages/Events";
import Join from "./pages/Join";
import Contact from "./pages/Contact";
import Initiatives from "./pages/Initiatives";

import Join from './pages/Join'
import Contact from './pages/Contact'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vision-mission" element={<VisionMission />} />
          <Route path="/donor" element={<Donor />} />
          <Route path="/news" element={<News />} />
          <Route path="/initiatives" element={<Initiatives />} />
          <Route path="/events" element={<Events />} />
          <Route path="/join" element={<Join />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
