import React, { useEffect, useMemo, useState } from 'react';
import { AllEvents } from '../utils/events';
import { IoIosClose } from "react-icons/io";
import Event from '../components/Event';
import CulturalCard from '../components/CulturalCard';
import { useNavigate, useParams } from 'react-router-dom';
import EventGrid from '../components/EventGrid';
import SingleEventGrid from '../components/SingleGrid';

const EventRegistration = () => {
  const {category} = useParams();
  const [filter, setFilter] = useState(category || 'all');
  const [loading, setLoading] = useState(false);

  const filteredContent = useMemo(() => {
    window.history.pushState(null, '', `/event-registration/${filter}`);
    if (filter === 'all') {
      return AllEvents;
    } else {
      return AllEvents.filter(event => event.category === filter);
    }
  }, [filter]);
  
  

  const handleFilterClick = (category) => {
    
    setFilter(prev => category);
  };

  return (
    <div className="pt-32 bg-black h-screen overflow-auto">
      <div className='text-center pt-20 fixed top-0  z-10  w-full bg-black'>
        <div className="flex sm:justify-start p-4 md:justify-center sm:gap-3 mb-6 gap-5 flex-wrap">
        <button
          className={`${filter === 'all' ? "text-[#212121] bg-[rgb(193,163,98)] shadow-[0_0px_20px_rgba(193,163,98,0.4)] scale-110 active:scale-100" : "text-[rgb(193,163,98)]  bg-transparent"} group relative overflow-hidden px-10 py-1 text-lg sm:text-sm font-semibold rounded-full transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] hover:scale-110 hover:text-[#212121] shadow-[0_0px_20px_rgba(193,163,98,0.7)] active:scale-100`}
          onClick={() => handleFilterClick('all')}
        >
          <span className="absolute inset-0 text-sm z-[-1] m-auto w-12 h-12 scale-0 rounded-full bg-[rgb(193,163,98)] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[2.5]"></span>
          All
        </button>


          <button className={`${filter === 'workshop' ? "text-[#212121] bg-[rgb(193,163,98)] shadow-[0_0px_20px_rgba(193,163,98,0.4)] scale-110 active:scale-100" : "text-[rgb(193,163,98)]  bg-transparent"} group relative overflow-hidden px-10 py-1 text-lg font-semibold rounded-full transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] hover:scale-110 hover:text-[#212121] shadow-[0_0px_20px_rgba(193,163,98,0.7)] active:scale-100`}
            onClick={() => handleFilterClick('workshop')}
          >
            <span className="absolute inset-0 z-[-1] m-auto w-12 h-12 scale-0 rounded-full bg-[rgb(193,163,98)] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[3.8]"></span>
            Workshops
          </button>
          <button className={`${filter === 'technical' ? "text-[#212121] bg-[rgb(193,163,98)] shadow-[0_0px_20px_rgba(193,163,98,0.4)] scale-110 active:scale-100" : "text-[rgb(193,163,98)]  bg-transparent"} group relative overflow-hidden px-10 py-1 text-lg font-semibold rounded-full transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] hover:scale-110 hover:text-[#212121] shadow-[0_0px_20px_rgba(193,163,98,0.7)] active:scale-100`}
            onClick={() => handleFilterClick('technical')}
          >
            <span className="absolute inset-0 z-[-1] m-auto w-12 h-12 scale-0 rounded-full bg-[rgb(193,163,98)] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[2.8]"></span>
            Events
          </button>
          <button className={`${filter === 'talk' ? "text-[#212121] bg-[rgb(193,163,98)] shadow-[0_0px_20px_rgba(193,163,98,0.4)] scale-110 active:scale-100" : "text-[rgb(193,163,98)]  bg-transparent"} group relative overflow-hidden px-10 py-1 text-lg font-semibold rounded-full transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] hover:scale-110 hover:text-[#212121] shadow-[0_0px_20px_rgba(193,163,98,0.7)] active:scale-100`}
            onClick={() => handleFilterClick('talk')}
          >
            <span className="absolute inset-0 z-[-1] m-auto w-12 h-12 scale-0 rounded-full bg-[rgb(193,163,98)] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[2.5]"></span>
            Talks
          </button>
          <button className={`${filter === 'cultural' ? "text-[#212121] bg-[rgb(193,163,98)] shadow-[0_0px_20px_rgba(193,163,98,0.4)] scale-110 active:scale-100" : "text-[rgb(193,163,98)]  bg-transparent"} group relative overflow-hidden px-10 py-1 text-lg font-semibold rounded-full transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] hover:scale-110 hover:text-[#212121] shadow-[0_0px_20px_rgba(193,163,98,0.7)] active:scale-100`}
            onClick={() => handleFilterClick('cultural')}
          >
            <span className="absolute inset-0 z-[-1] m-auto w-12 h-12 scale-0 rounded-full bg-[rgb(193,163,98)] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[4.5]"></span>
            Cultural
          </button>
          <button className={`${filter === 'competition' ? "text-[#212121] bg-[rgb(193,163,98)] shadow-[0_0px_20px_rgba(193,163,98,0.4)] scale-110 active:scale-100" : "text-[rgb(193,163,98)]  bg-transparent"} group relative overflow-hidden px-10 py-1 text-lg font-semibold rounded-full transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] hover:scale-110 hover:text-[#212121] shadow-[0_0px_20px_rgba(193,163,98,0.7)] active:scale-100`}
            onClick={() => handleFilterClick('competition')}
          >
            <span className="absolute inset-0 z-[-1] m-auto w-12 h-12 scale-0 rounded-full bg-[rgb(193,163,98)] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[4.5]"></span>
            Competitions
          </button>
            
          
        </div>

        {/* {filter.length > 0 && (
          <div className="text-start mb-6 flex flex-row justify-start items-center">
            <h1 className="text-3xl font-semibold text-[rgb(193,163,98)] mr-4">Filter:</h1>
            {filter.map((item, index) => (
              <span
                key={index}
                className="flex flex-row items-center bg-[rgb(193,163,98)] mx-2 rounded-full shadow-md transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] hover:scale-110 hover:shadow-lg"
              >
                <span className="text-white py-1 px-3 font-medium">
                  {item}
                </span>
                <IoIosClose
                  size={24}
                  onClick={() => setFilter(prev => prev.filter(i => i !== item))}
                  className="cursor-pointer text-white hover:text-[rgb(41,41,41)] transition-colors duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]"
                />
              </span>
            ))}
          </div>
        )} */}

      </div>

      <div className="flex flex-row items-center justify-center p-10 gap-10 flex-wrap overflow-auto relative top-32">
        {filteredContent.map(event => (
          // <div key={event.id} className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg mb-4 text-center">
          //   <h3 className="text-xl font-semibold text-gray-800">{event.name}</h3>
          //   <p className="text-gray-600">Category: {event.category}</p>
          // </div>
          (event.category === 'workshop' && <Event key={event.id} eventDetails={event} type={event.category} />)

          
        ))}
     
      </div>
      <div className="flex flex-row items-center justify-center p-10 gap-10 flex-wrap overflow-auto relative top-32">
        {filteredContent.map(event => (
            (event.category === 'cultural' && (<CulturalCard key={event.id} eventDetails={event} />))
          ))}
      </div>

      <div className="flex flex-row items-center justify-center p-10 gap-10 flex-wrap overflow-auto relative">
        {filteredContent.map(event => (
            (event.category === 'technical' && (<EventGrid event={event} />))
          ))}
      </div>

      <div className="flex flex-row items-center justify-center p-10 gap-10 flex-wrap overflow-auto relative">
        {filteredContent.map(event => (
            (event.category === 'talk' && (<SingleEventGrid event={event} />))
          ))}
      </div>

      <div className="flex flex-row items-center justify-center p-10 gap-10 flex-wrap overflow-auto relative">
        {filteredContent.map(event => (
            (event.category === 'competition' && (<SingleEventGrid event={event} />))
          ))}
      </div>
    </div>
  );
};

export default EventRegistration;
