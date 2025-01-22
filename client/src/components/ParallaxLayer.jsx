import React, { useEffect, useRef } from "react";
import heroBg from "../assets/images/hero-bg3.jpg";
import date from "../assets/images/date-img.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { eventData } from "../utils/eventData.js";
import { proshowEvents } from "../utils/proShow.js";
import Card from "./Card.jsx";
import { useNavigate } from "react-router-dom";
import TypingAnimation from "../components/ui/typing-animation";


const ParallaxLayer = () => {
  const navigate = useNavigate();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const logoScale = useTransform(scrollYProgress, [0, 1.5], [1, 2]); 

  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    // Clone the card list for seamless scrolling
    if (container) {
      const clonedNode = container.cloneNode(true);
      clonedNode.setAttribute("aria-hidden", "true");
      container.parentNode.appendChild(clonedNode);
    }
  }, []);

  console.log(window.innerWidth);
  
  return (
    <section
      ref={ref}
      className="relative -top-16 w-full bg-cover bg-center bg-no-repeat"
     
    >
      <motion.div
         style={{ backgroundImage: `url('./Hero_bg.webp')`, y: backgroundY , opacity: 0.35}}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      />

      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle backdrop-blur-sm">
        <div className="modal-box bg-gradient-to-br from-[#dd3d05]  via-[#1f1426] via-[#120d18] via-[#010101] to-[#010101]
">
          <div className="text-center">
            <h3 className="font-bold text-3xl">Become a campus ambassador</h3>
          </div>
          <div className="divider"></div>

          <div className="modal-action flex flex-col gap-5">
            <div className="w-full flex flex-col gap-5">
              <div className="w-full">
                <p className="text-xl font-extrabold">What you will do: </p>
                <div className="w-full font-semibold text=slate-200">
                  <ol>
                    <li>1. Share all posters and links on your social media and groups</li>
                    <li>2. Put up posters we send you on your notice boards</li>
                    <li>3. Encourage students of your college to participate in Xplore'24</li>
                  </ol>
                </div>
              </div>
              <div className="w-full">
                <p className="text-xl font-extrabold">Benefits: </p>
                <div className="w-full font-semibold text-slate-200">
                  <ol>
                    <li>1. Exclusive perks (cash prizes , goodies and certificates worth ktu points).</li>
                    <li>2. Gain leadership and networking skills.</li>
                    <li>3. Connect your campus to the most happening tech event of the year.</li>
                  </ol>
                </div>
              </div>
            </div>

            <form method="dialog" className="flex flex-row gap-10">
              <button
              className="animate-pulse font-extrabold"
                style={{
                  "--yellow": "#F5C629",
                  fontSize: "15px",
                  padding: "0.7em 2.7em",
                  letterSpacing: "0.06em",
                  fontFamily: "inherit",
                  borderRadius: "0.6em",
                  overflow: "hidden",
                  transition: "all 0.3s",
                  lineHeight: "1.4em",
                  border: "2px solid var(--yellow)",
                  background:
                    "linear-gradient(to right, rgba(245, 198, 41, 0.1) 1%, transparent 40%, transparent 60%, rgba(245, 198, 41, 0.1) 100%)",
                  color: "var(--yellow)",
                  boxShadow:
                    "inset 0 0 10px rgba(245, 198, 41, 0.4), 0 0 9px 3px rgba(245, 198, 41, 0.1)",
                  position: "relative",
                  cursor: "pointer",
                }}
                onMouseOver={(e) => {
                  e.target.style.color = "#FFE37A";
                  e.target.style.boxShadow =
                    "inset 0 0 10px rgba(245, 198, 41, 0.6), 0 0 9px 3px rgba(245, 198, 41, 0.2)";
                }}
                onMouseOut={(e) => {
                  e.target.style.color = "var(--yellow)";
                  e.target.style.boxShadow =
                    "inset 0 0 10px rgba(245, 198, 41, 0.4), 0 0 9px 3px rgba(245, 198, 41, 0.1)";
                }}
                onClick={() => navigate("./ambassador-form")}
              >
                Register
              </button>
              <button className="btn bg-[#802516] text-white font-bold">Close</button>
            </form>
          </div>
        </div>
      </dialog>

      <motion.div
        className="mt-16 h-screen flex flex-col text-white"
      
      >
        {/* Logo and Text Section */}
        <motion.div className="flex-grow flex flex-col justify-center items-center pt-5 sm:pt-52 md:pt-2 text-center" 
          style={{ y: textY }}
        >
          <motion.img
            src="./logo.png"
            className="w-[90%] sm:w-[80%] md:w-[35%] mb-2 z-10"
            alt="Hero"
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: window.innerWidth >= 696 ? 1.2 : 1 }}
            style={{
              scale: window.innerWidth >= 696 ? logoScale : 1, 
            }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
          />

          <motion.p className="font-bold z-0 flex -mt-10 mb-5 md:-mt-20 font-mono">
            <TypingAnimation className="text-md sm:text-sm md:text-2xl">NATIONAL LEVEL MULTI-FEST</TypingAnimation>
          </motion.p>
        </motion.div>

        {/* Images and Modal Section */}
        <div className="flex-grow flex flex-col md:justify-between sm:justify-center items-center sm:flex-row px-10 gap-8 md:gap-10 lg:gap-10 flex-wrap ">
          
          <img
            src="./call-btn.png"
            className="w-52 h-10 sm:w-48 cursor-pointer animate-bounce transition-all ease-in-out duration-1500"
            alt="Register Now"
            
            onClick={() => document.getElementById("my_modal_5").showModal()}
          />
          <img
            src={date}
            className="w-52 h-10 sm:w-48 cursor-pointer z-40"
            onClick={() => navigate("/about")}
            alt="Date"
          />
        </div>

        {/* Bottom Section */}
        <div
          className="relative flex overflow-hidden w-full backdrop-blur-3xl pb-96 md:pb-96"
          style={{ scrollBehavior: 'smooth' }}
        >
          <ul ref={containerRef} className="flex animate-infinite-scroll space-x-36 p-8 ">
            {proshowEvents.map((event, index) => (
              <li key={index} className="flex-shrink-0">
                <div className="h-72 flex items-center justify-center backdrop-blur-2xl">
                  <Card event={event} />
                </div>
              </li>
            ))}
          </ul>
        </div>


      </motion.div>


    </section>
  );
};

export default ParallaxLayer;
