import React from "react";

const GlowButton = ({ children, onClick }) => {
  return (
    <>
      {/* SVG Filters for Effects */}
      <svg style={{ position: "absolute", width: 0, height: 0 }}>
        <filter id="unopaq">
          <feColorMatrix
            values="1 0 0 0 0 
                    0 1 0 0 0 
                    0 0 1 0 0 
                    0 0 0 9 0"
          />
        </filter>
        <filter id="unopaq2">
          <feColorMatrix
            values="1 0 0 0 0 
                    0 1 0 0 0 
                    0 0 1 0 0 
                    0 0 0 3 0"
          />
        </filter>
        <filter id="unopaq3">
          <feColorMatrix
            values="1 0 0 0.2 0 
                    0 1 0 0.2 0 
                    0 0 1 0.2 0 
                    0 0 0 2 0"
          />
        </filter>
      </svg>

      {/* Button Container */}
      <div className="relative m-4">
        {/* Actual Clickable Button */}
        <button
          onClick={onClick}
          className="absolute w-[120px] h-[60px] z-10 outline-none border-none rounded-[17px] cursor-pointer opacity-0"
        />

        {/* Animated Elements */}
        <div className="relative">
          {/* Glow Effects */}
          <div className="absolute inset-0 z-[-2] opacity-50 transition duration-300 blur-lg filter-[url(#unopaq)]" />
          <div className="absolute inset-[-0.125em] z-[-2] opacity-50 transition duration-300 blur-sm filter-[url(#unopaq2)] rounded-lg" />
          <div className="absolute inset-[-2px] z-0 rounded-lg blur-sm filter-[url(#unopaq3)]" />

          {/* Button Background */}
          <div className="p-[3px] bg-[#0005] rounded-xl relative">
            <div className="flex items-center justify-center w-[120px] h-[60px] bg-[#111215] text-white text-lg font-semibold rounded-xl shadow-md">
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GlowButton;
