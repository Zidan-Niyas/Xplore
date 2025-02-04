import React from "react";

const AnimatedButton = ({ text = "Click Me" }) => {
  return (
    <button className="z-40 relative h-10 w-40 bg-gradient-to-r rounded-full border-none cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 hover:-translate-y-2 active:scale-100">
      <div className="z-50 absolute inset-0 flex items-center justify-center bg-black rounded-full">
        <p className="text-white bg-clip-text bg-gradient-to-r  text-lg font-bold tracking-wide">
          {text}
        </p>
      </div>

      {/* Glowing Effect */}
      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-yellow-400 to-pink-500 blur-lg"></span>
      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-yellow-400 to-pink-500 blur-xl transition-all duration-300 ease-in-out hover:w-[103%] hover:h-[105%]"></span>
    </button>
  );
};

export default AnimatedButton;
