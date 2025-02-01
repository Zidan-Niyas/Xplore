import React from "react";
import { motion } from "framer-motion";
import workshopBanner from "../assets/images/workshop-banner.png";
import Event from "../components/Event";
import { workshopData } from "../utils/eventData.js";
import { useEventContext } from "../../context/EventContext.jsx";

const Workshops = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const {events, loading} = useEventContext();
  const filteredEvents = events.filter((event) => event.category === "workshop");

  return (
    <>
      {/* Workshop Banner Section */}
      <motion.section
        className="w-full h-[20vh] md:h-[25vh] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${workshopBanner})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      ></motion.section>

      {/* Workshop List */}
      <div
        style={{
          background:
            "linear-gradient(45deg, rgba(75,0,130,0.6) 0%, rgba(0,0,0,1) 90%)",
        }}
        className="w-full min-h-[75vh] md:min-h-[80vh] flex sm:flex-col md:flex-row flex-wrap justify-center sm:items-center sm:align-middle items-start gap-8 md:gap-16 md:px-16 lg:px-32 p-8"
      >
        {filteredEvents.map((event, index) => (
          <motion.div
            key={index}
            className="w-full md:w-1/3 lg:w-1/4 flex-shrink-0 transform transition duration-300 hover:scale-105 hover:shadow-xl flex justify-center items-center"
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 1 }}
            variants={cardVariants}
          >
            <Event eventDetails={event} type="workshop" />
          </motion.div>
        ))}
      </div>

    </>
  );
};

export default Workshops;
