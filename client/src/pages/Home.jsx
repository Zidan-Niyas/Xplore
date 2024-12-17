// import React from "react";
import { useNavigate } from "react-router-dom";
import AboutPage from "./About";
import ParallaxLayer from "../components/ParallaxLayer";
import Events from "./Events";
import Workshops from "./Workshops";
import ContactPage from "./Contact";
import Tagline from "./Tagline"

const Home = () => {
  const navigate = useNavigate();

 

  return (
    <div
      className="h-screen"
      id="home"
    >
      <ParallaxLayer />
      <section className="z-50 mt-5">
        <div id="about">
          <AboutPage />
        </div>
        <div id="events">
          <Events />
        </div>
        <div>
          <Tagline />
        </div>
        <div id="workshops">
          <Workshops />
        </div>
        <div id="contact">
          <ContactPage />
        </div>
      </section>
    </div>
  );
};

export default Home;
