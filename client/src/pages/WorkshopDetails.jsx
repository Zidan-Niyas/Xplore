import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSpring, animated } from "@react-spring/web";
import { eventData, workshopData } from "../utils/eventData";
import workshopBanner from '../assets/images/workshop-banner.png';
import SocialIcons from "../components/SocialIcons";
import { ToastContainer, toast } from "react-toastify";

const WorkshopDetails = () => {
    const { eventId, type } = useParams();
    const [showDetails, setShowDetails] = useState(false);

    // Determine the data source based on the type (event or workshop)
    const data = type === "event" ? eventData : workshopData;

    // Find the specific event/workshop by its name
    const item = data.find((e) => e.name.replace(/[/\s]/g, "-").toLowerCase() === eventId);

    if (!item) {
        return (
            <div className="text-center text-white">
                <h1>Details Not Found</h1>
                <p>The event or workshop you're looking for doesn't exist.</p>
            </div>
        );
    }

    // Entry animation for the content and image
    const contentAnimation = useSpring({
        from: { opacity: 0, transform: "translateX(-20px)" },
        to: { opacity: 1, transform: "translateX(0)" },
        config: { tension: 100, friction: 40 },
    });

    const imageAnimation = useSpring({
        from: { opacity: 0, transform: "translateX(20px)" },
        to: { opacity: 1, transform: "translateX(0)" },
        config: { tension: 100, friction: 40 },
    });

    // Pop-up animation
    const popupAnimation = useSpring({
        opacity: showDetails ? 1 : 0,
        transform: showDetails ? "translateY(0)" : "translateY(-20px)",
        config: { tension: 300, friction: 20 },
    });

    const handleRegister = () => {
        // toast.info("Registration has not started yet. Please come back later.", {
        //     position: "top-center",
        //     autoClose: 4000,
        //     hideProgressBar: true,
        //     closeOnClick: true,
        //     pauseOnHover: true,
        //     draggable: true,
        //     progress: undefined,
        // });
        window.open(item.registerLink, "_blank");
    }

    const toggleDetails = () => {
        setShowDetails(!showDetails);
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-purple-950 via-black to-black text-white flex flex-col items-center w-full">
            {/* Workshop Banner */}
            <div
                className="w-full bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url(${workshopBanner})`,
                    height: "250px", // Fixed banner height (adjust as needed)
                }}
            ></div>

            {/* Workshop Content */}
            <div className="flex flex-col md:flex-row  sm:justify-center items-center max-w-4xl px-8 md:px-0 pt-8 md:pt-10 w-full flex-grow">
                {/* Left Content */}
                <animated.div
                    style={contentAnimation}
                    className="flex flex-col justify-center  items-center mb-12 space-y-6 md:mr-8 w-full md:w-1/2"
                >
                    <h1 className="road-rage-regular font-roadRage text-3xl md:text-5xl lg:text-5xl text-center text-white mb-4">{item.name}</h1>
                    <p className="text-lg md:text-2xl text-left text-gray-300 mb-4 font-semibold">{item.description}</p>
                    
                    <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
                        <button className="px-8 py-3 border-2 border-purple-600 text-white rounded-full hover:bg-purple-600 hover:text-white transition-all transform hover:scale-105 focus:outline-none bg-transparent shadow-lg shadow-purple-600/50" onClick={handleRegister}>
                            Register Now
                        </button>
                        <button className="px-8 py-3 border-2 border-blue-500 text-white rounded-full hover:bg-blue-500 hover:text-white transition-all transform hover:scale-105 focus:outline-none bg-transparent shadow-lg shadow-blue-500/50" onClick={toggleDetails}>
                            Details
                        </button>
                    </div>
                </animated.div>

                {/* Image */}
                <animated.div
                    style={imageAnimation}
                    className="flex-shrink-0 w-full md:w-[50%] h-auto rounded-lg shadow-lg mt-6 md:mt-0"
                >
                    <img
                        src={item.imageDetails || "/placeholder.svg"}
                        alt={item.name}
                        className="w-full h-auto rounded-lg shadow-xl object-cover"
                    />
                </animated.div>
            </div>

            {/* Details Pop-up */}
            {showDetails && (
                <animated.div 
                    style={popupAnimation}
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                    onClick={toggleDetails}
                >
                    <div 
                        className="bg-gray-900 p-8 rounded-lg max-w-md w-full m-4"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h2 className="text-2xl font-bold mb-4">{item.name} Details</h2>
                        <p><strong>Date:</strong> {item.date}</p>
                        <p><strong>Time:</strong> {item.time}</p>
                        <p><strong>Location:</strong> {item.location}</p>
                        {item.fee && <p><strong>Fee:</strong> {typeof item.fee === 'number' ? `₹${item.fee}` : item.fee}</p>}
                        <p>
                        <strong>Contact:</strong>{" "}
                        <br />
                        {item.contacts.map((contact) => `${contact.name} : ${contact.phone}`).join(", ")}
                        </p>

                        <button 
                            className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                            onClick={toggleDetails}
                        >
                            Close
                        </button>
                    </div>
                </animated.div>
            )}

            {/* Social Icons */}
            <SocialIcons />
            <ToastContainer />
        </div>
    );
};

export default WorkshopDetails;

