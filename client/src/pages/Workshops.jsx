// import React from "react";
import workshopBanner from "../assets/images/workshop-banner.png";
import Event from "../components/Event";
import { workshopData } from "../utils/eventData.js";

const Workshops = () => {
  return (
    <>
      {/* Workshop Banner Section */}
      <section
        className="w-full h-[20vh] md:h-[25vh] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${workshopBanner})` }}
  
      ></section>

      {/* Workshop List */}
      <div
        style={{
          background: "linear-gradient(45deg, rgba(75,0,130,0.6) 0%, rgba(0,0,0,1) 90%)",
        }}
        className="w-full min-h-[75vh] md:min-h-[80vh] flex flex-wrap justify-center items-start gap-8 p-8 md:gap-16 md:px-16 lg:px-32"
      >
        {workshopData.map((event, index) => (
          <div key={index} className="w-full md:w-1/3 lg:w-1/4 flex-shrink-0">
            <Event eventDetails={event} type="workshop" />
          </div>
        ))}
      </div>
    </>
  );
};

export default Workshops;
