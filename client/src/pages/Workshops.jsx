import React from 'react'
import workshopBanner from '../assets/images/workshop-banner.png'
import Event from '../components/Event'
import {workshopData} from '../utils/eventData.js'
const Workshops = () => {
  return (
    <>
        <section className="w-full h-32 md:h-[200px] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${workshopBanner})` }}
          id="workshops"  
        >
         
        </section>
        <div
  style={{
    background: 'linear-gradient(45deg, rgba(75,0,130,0.6) 0%, rgba(0,0,0,1) 90%)',
    whiteSpace: "nowrap", 
    overflowX: "auto", 
  }}
  className="w-full md:h-screen lg:screen flex flex-row gap-20 pl-8 md:pl-16 lg:pl-32 pt-32"
>
  {workshopData.map((event, index) => {
    return <Event key={index} eventDetails={event} type="workshop" />;
  })}
</div>





   
    </>
  )
}

export default Workshops
