import React from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Playful from "./components/Playful";
import Cards from "./components/Cards";
import ReadyToStart from "./components/ReadyToStart";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="w-full min-h-screen text-white bg-zinc-900">
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Playful />
      <Cards />
      <ReadyToStart />
      <Footer />
    </div>
  );
};

export default App;
