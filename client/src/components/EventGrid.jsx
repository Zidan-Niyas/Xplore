import React from 'react';
import { SpotLightItem, Spotlight } from './ui/main-spotlight.jsx';
import { RainbowButton } from './ui/rainbow-button.jsx';

export default function EventGrid({event}) {
  console.log(event);
  
  const boxes = [
    {
      id: '12',
      className: '',
    },
    {
      id: '52',
      className: '',
    },
    {
      id: '527',
      className: '',
    },
  ];

  

  return (
    <>
      {/* <div className="relative rounded-md w-fit mx-auto ">
        <Spotlight className="flex flex-wrap justify-center gap-1 w-[45rem]">
          {boxes?.map((box, index) => {
            return (
              <SpotLightItem className="flex justify-center" key={index}>
                <div className="relative z-10 rounded-lg bg-gradient-to-b from-[#0c0c0c] to-[#252525] w-[15rem] h-fit">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/image-uploader-842b5.appspot.com/o/bots2.webp?alt=media&token=3c9b19c2-9c4c-4028-8e89-514c3ff627f4"
                    alt="grid"
                    className="w-[15rem] h-50rem rounded-lg"
                  />
                </div>
              </SpotLightItem>
            );
          })}
        </Spotlight>
        <div className='w-full bg-cyan-50'>
          <h1>Hiiii</h1>
        </div>
      </div> */}

      <div 
        href="#" 
        className="flex flex-col gap-6 rounded-lg shadow md:grid-cols-3 md:max-w-3xl p-4 "
      >
        <div className="flex flex-row items-center  border rounded-lg gap-1">
        {event.images.map((imageSrc, index) => {
            if(window.innerWidth <= 768 && (index == 0 || index == 2)){
              return ;
            }
            return <img
              key={index} 
              className="object-cover w-full rounded-t-lg h-80 md:h-60 md:w-full md:rounded-lg" 
              src={imageSrc}
              alt={`grid-${index}`}
            />
            
          
})}
        </div>
        <div className="flex flex-col justify-between p-4 leading-normal w-full">
              <h5 className="mb-2 text-xl font-bold tracking-tight ">
                {event.name}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-pretty">
                {event.description}
              </p>
              {event.registerLink && (
                
                <RainbowButton className='w-full' onClick={() => {
                  window.open(event.registerLink, "_blank")
              }}>Register</RainbowButton>
                )}
        </div>
      </div>



    </>
  );
}
