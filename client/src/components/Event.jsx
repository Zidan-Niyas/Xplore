import React from "react";
import { useSpring, animated } from "@react-spring/web";
import viewBtn from "../assets/images/view-btn.png";
import event from "../assets/images/event.png";
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
const Event = ({ eventDetails, type }) => {
  const { name, description, date, time, location, images } = eventDetails;
  const navigate = useNavigate();

  // Entry animation for the card
  const cardAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { tension: 100, friction: 40 },
  });

  const [hovering, setHovering] = React.useState(false);

  // Hover animation for the inner div
  const hoverAnimation = useSpring({
    transform: hovering ? "scale(1.05)" : "scale(1)",
    boxShadow: hovering
      ? "0px 10px 20px rgba(0, 0, 0, 0.3)"
      : "0px 4px 10px rgba(0, 0, 0, 0.1)",
    config: { tension: 300, friction: 15 },
  });

  return (
    <animated.div
      className="relative h-[260px] w-[300px] rounded-lg overflow-hidden flex flex-col justify-center items-center flex-shrink-0"
      style={cardAnimation} 
      id='events'
    >
      <animated.div
        style={hoverAnimation} 
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        className="relative w-[276px] h-[236px]"
      >
        {/* <img
          src={event}
          alt={`${name} event`}
          className="w-full h-full object-cover rounded-lg"
        /> */}
      {/* <div
          className="w-full h-full text-white flex items-center justify-center font-sans text-lg text-center rounded-3xl"
          style={{
            clipPath: 'polygon(0 0, 99% 0, 100% 72%, 45% 73%, 27% 100%, 0 100%)',
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            border: '2px solid #D5D2D2',
            opacity: 0.75,
          }}
        ></div> */}
        <div
      className="w-full h-full text-white flex items-center justify-center font-sans text-lg text-center rounded-3xl"
      style={{
        clipPath: 'polygon(0 0, 99% 0, 100% 72%, 45% 73%, 27% 100%, 0 100%)',
        border: '2px solid #D5D2D2',
        opacity: 0.75,
      }}
    >
      <LazyLoadImage
        alt="Lazy Loaded Background"
        effect="blur"
        src={images[0]}
        className="w-full h-full object-cover rounded-3xl"
      />
      
    </div>
        <img
          src={viewBtn}
          alt="View event details button"
          className="absolute -right-5 -bottom-3 w-[202px] h-[76px] hover:cursor-pointer"
          onClick={() => {
            if(type == 'event') return;
            navigate(`/${type}/${name.replace(/[/\s]/g, "-").toLowerCase()}`)
          
          }}
        />
        {/* <p className="absolute top-5 left-5 font-bold text-2xl text-white">
          {"Coming Soon.."}
        </p> */}
      </animated.div>
    </animated.div>
  );
};

export default Event;
