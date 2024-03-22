import React from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Playful from "./components/Playful";
import Cards from "./components/Cards";
import ReadyToStart from "./components/ReadyToStart";
import Footer from "./components/Footer";
import CardsGrid from "./components/CardsGrid";
import LocomotiveScroll from "locomotive-scroll";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="w-full min-h-screen text-white bg-zinc-900">
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Playful />
      <Cards />
      <CardsGrid />
      <ReadyToStart />
      <Footer />
    </div>
  );
};

export default App;
