import React from "react";

const Card = ({ event }) => {
  const { id, name, first, last, image } = event;

  return (
    <div className=" h-[21rem] w-72 max-w-sm lg:max-w-full flex flex-col p-2">
      <div
        className="h-full w-full bg-cover bg-center rounded-t overflow-hidden"
        style={{ backgroundImage: `url(${image})` }}
        title="Card Image"
      ></div>

      <div className="flex-grow flex items-center justify-center p-2 rounded-b">
        <p className="text-white text-6xl road-rage-regular text-center">{name}</p>
      </div>
    </div>
  );
};

export default Card;
