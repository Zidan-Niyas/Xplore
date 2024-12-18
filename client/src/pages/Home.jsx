// import React from "react";
import { useState,useEffect } from "react";
import AboutPage from "./About";
import ParallaxLayer from "../components/ParallaxLayer";
import Events from "./Events";
import Workshops from "./Workshops";
import ContactPage from "./Contact";
import Tagline from "./Tagline"
import PreLoader from "../utils/Preloader/Preloader";

const Home = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      const LazyLoading = () => {
        setTimeout(() => {
          setLoading(false);
        }, 4000);
      };

      LazyLoading();

      return () => {
        clearTimeout(LazyLoading);
      };
    }, []);
    
  if (loading) {
    return <PreLoader />;
  }

  return (
    <div className="h-screen" id="home">
      <ParallaxLayer />
      <section className="z-50 mt-5">
        <div>
          <Tagline />
        </div>
        <div id="about">
          <AboutPage />
        </div>
        <div id="events">
          <Events />
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
