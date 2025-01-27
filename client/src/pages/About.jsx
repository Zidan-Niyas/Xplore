import React from "react";
import { useNavigate } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import eventImg from "../assets/images/events-img.png";
import workshopImg from "../assets/images/workshop-img.png";
import aboutbanner from "../assets/images/about_banner.png";
import headerLeft from "../assets/images/header-left.png";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";

const AboutPage = () => {
  const navigate = useNavigate();
  const [refHeader, inViewHeader] = useInView({ triggerOnce: true, threshold: 0.2 });

  const rotationAnimation = useSpring({
    transform: inViewHeader ? "translateX(0px) rotate(0deg)" : "translateX(-100px) rotate(-90deg)",
    opacity: inViewHeader ? 1 : 0,
    config: { tension: 120, friction: 14 },
  });

  const useSectionAnimation = (threshold = 0.2) => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold });
    const styles = useSpring({
      opacity: inView ? 1 : 0,
      transform: inView ? "translateY(0px)" : "translateY(50px)",
      config: { tension: 120, friction: 14 },
    });
    return { ref, styles };
  };

  const aboutAnimation = useSectionAnimation();
  const legacyAnimation = useSectionAnimation();
  const offerAnimation = useSectionAnimation();
  const eventsAnimation = useSectionAnimation();
  const workshopsAnimation = useSectionAnimation();

  return (
    <div className="bg-gradient-to-b from-blue-950 via-black to-black text-white pb-10 z-50 backdrop-blur-0"
    >
      {/* Header */}
      <div className="bg-gradient-to-b from-[#2c0c0c] to-black text-white">
        <div className="relative">
          <img src={aboutbanner} alt=""  className="md:h-56 w-full"/>
          <animated.img
            ref={refHeader}
            src={headerLeft}
            alt=""
            className="absolute h-16 sm:h-20 md:h-32 left-2 sm:left-10 md:left-20 top-5 sm:top-10 md:top-20"
            style={{
              ...rotationAnimation,
              willChange: "transform, opacity",
              
            }}
          />
        </div>
      </div>

      {/* About Us */}
      <div className="px-8 lg:px-16 py-12 lg:py-16 min-h-screen z-50" > 
        <animated.section ref={aboutAnimation.ref} style={aboutAnimation.styles} className="mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">About Us</h2>
          <p className="text-lg lg:text-xl text-gray-300 mb-6 leading-relaxed tracking-wide drop-shadow-sm">
            Welcome to Xplore 24, the premier Techno-Management-Cultural Festival of the Government College of Engineering, Kannur (GCEK). Building on the vibrant legacy of Xplore, the event is a grand confluence of technology, management, and culture, offering a platform for innovation, collaboration, and celebration.
          </p>
        </animated.section>

        {/* Legacy */}
        {/* <animated.section ref={legacyAnimation.ref} style={legacyAnimation.styles} className="mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Legacy</h2>
          <p className="text-lg lg:text-xl text-gray-300 mb-6 leading-relaxed tracking-wide drop-shadow-sm">
            First held in 2015, Xplore has grown to become a symbol of excellence and creativity in the student community. The 2024 edition, Xplore 24, marked the landmark 24th iteration, featuring a dynamic mix of technical, managerial, and cultural events, workshops, and competitions that have become a staple of the festival. Spanning across 3 days, Xplore 24 witnessed participation from students and professionals from across the country.
          </p>
        </animated.section> */}

        {/* What We Offer */}
        <animated.section ref={offerAnimation.ref} style={offerAnimation.styles} className="mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">What We Offer</h2>
          <p className="text-lg lg:text-xl leading-relaxed text-gray-300 mb-6 tracking-wide drop-shadow-sm">
            Xplore 24 promises to raise the bar, continuing the tradition of excellence while introducing cutting-edge themes and activities. Whether you're a tech enthusiast, a management geek, or an artist at heart, Xplore 24 has something for everyone.
          </p>
          {/* <ul className="list-disc pl-6 mt-4 text-lg lg:text-xl text-gray-300 mb-6 leading-relaxed tracking-wide drop-shadow-sm">
            <li>Technical Events: Hackathons, coding challenges, and workshops on emerging technologies</li>
            <li>Management Challenges: Business plan competitions, strategy games, and entrepreneur talks</li>
            <li>Cultural Extravaganza: Music, dance, and drama performances celebrating diverse talents</li>
            <li>Networking Opportunities: Meet industry leaders, innovators, and like-minded peers</li>
          </ul> */}
        </animated.section>

        {/* Events */}
        <animated.section ref={eventsAnimation.ref} style={eventsAnimation.styles} className="py-5 mb-12 lg:mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-cover bg-center h-64 lg:h-80 rounded-sm" style={{ backgroundImage: `url(${eventImg})` }} />
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl lg:text-4xl font-extrabold text-blue-600 mb-6 tracking-wide drop-shadow-lg">
                EVENTS
              </h2>
              <p className="text-lg lg:text-xl text-gray-300 mb-6 leading-relaxed tracking-wide drop-shadow-sm">
                Xplore 24 will feature an exciting lineup of events, including hackathons, robotics competitions, and
                coding challenges for tech enthusiasts, alongside management games and entrepreneurial workshops to
                foster leadership skills.
              </p>
              <button 
                onClick={() => navigate("/event-registration/event")}
                className="min-w-[150px] w-[30%] sm:w-[50%] md:w-[30%] text-white font-bold border-2 border-blue-400 bg-transparent py-3 px-6 rounded-full hover:bg-blue-400 hover:text-black transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 text-lg">
                XPLORE MORE
              </button>
            </div>
          </div>
        </animated.section>

        {/* Workshops */}
        <animated.section ref={workshopsAnimation.ref} style={workshopsAnimation.styles} className="py-5 mb-12 lg:mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl lg:text-4xl font-extrabold text-blue-600 mb-6 tracking-wide drop-shadow-lg">
                WORKSHOPS
              </h2>
              <p className="text-lg lg:text-xl text-gray-300 mb-6 leading-relaxed tracking-wide drop-shadow-sm">
                Xplore 24 will feature workshops tailored to span all branches of engineering, providing hands-on
                learning experiences for students of Civil, EEE, ECE, CSE, and Mechanical Engineering.
              </p>
              <button 
                onClick={() => navigate("/workshops")}
                className="min-w-[150px] w-[30%] sm:w-[50%] md:w-[30%] text-white font-bold border-2 border-blue-400 bg-transparent py-3 px-6 rounded-full hover:bg-blue-400 hover:text-black transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 text-lg">
                XPLORE MORE
              </button>
            </div>
            <div className="bg-cover bg-center h-64 lg:h-80" style={{ backgroundImage: `url(${workshopImg})` }} />
          </div>
        </animated.section>
      </div>
    </div>
  );
};

export default AboutPage;
