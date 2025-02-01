import React, { useEffect, useState } from 'react';
import { RainbowButton } from "./ui/rainbow-button.jsx";
import { ShinyButton } from "./ui/shiny-button";
import { FramerModal, ModalContent } from "./ui/Modal.jsx";
import { LazyLoadImage } from 'react-lazy-load-image-component';
const CulturalCard = ({eventDetails}) => {
    
    const {name, description, date, time, location, prizePool, fee, images, contacts, rules, registerLink} = eventDetails;

    
    const [modalOpen, setModalOpen] = useState(false);
    useEffect(() => {
        if (modalOpen) {
          document.body.style.overflow = "hidden";
        } else {
          document.body.style.overflow = "auto";
        }
      }, [modalOpen]);
  return (
    <div className=" bg-slate-200 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-72 h-[42rem] flex flex-col">
        
        <LazyLoadImage className="rounded-t-lg w-full h-64 w-full" loading='lazy' src={images[0]} alt="" effect="blur" />
        
        <div className="p-5 flex flex-col justify-between flex-1">
            <div>
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
            </div>
            <div className='flex flex-col gap-4'>
                {registerLink && (
                    <RainbowButton className='w-full' onClick={() => {
                        window.open(registerLink, "_blank")
                    }}>Register</RainbowButton>    
                )}
                <ShinyButton className='w-full' onClick={() => setModalOpen(true)}>Details</ShinyButton>
            </div>

            <FramerModal open={modalOpen} setOpen={setModalOpen}>
                <ModalContent>
                    <div className="flex flex-col space-y-3 text-center sm:text-left h-[70vh] overflow-y-auto overscroll-contain">
                    {rules && (
                        <>
                            <h2 className="text-lg font-semibold leading-none tracking-tight">Guidelines</h2>
                            <div className="text-sm text-left">
                                {rules.split('\n').map((rule, index) => (
                                    <p key={index}>{rule}</p>
                                ))}
                            </div>
                        </>
                    )}

                    <div className="mt-4 text-left flex flex-col gap-3">
                        {date && (
                            <div>
                                <h3 className="text-base font-semibold">Date</h3>
                                <p className="text-sm ">{date}</p>
                            </div>
                        )}
                        {time && (
                            <div>
                                <h3 className="text-base font-semibold">Time</h3>
                                <p className="text-sm ">{time}</p>
                            </div>
                        )}
                        {location && (
                            <div>
                                <h3 className="text-base font-semibold">Location</h3>
                                <p className="text-sm ">{location}</p>
                            </div>
                        )}
                        {fee && (
                            <div>
                                <h3 className="text-base font-semibold">Fee</h3>
                                <p className="text-sm ">₹ {fee} {fee != "Free"? "per participant": ""}</p>
                            </div>
                        )}
                        {prizePool && (
                            <div>
                                <h3 className="text-base font-semibold">Prize pool</h3>
                                <p className="text-sm ">₹ {prizePool}</p>
                            </div>
                        )}
                        {contacts.length > 0 && (
                            <div>
                                <h3 className="text-base text-xl font-semibold">Contact</h3>
                                {contacts.map((contact, index) => (
                                    <p key={index} className="text-sm">{contact.name}: {contact.phone}</p>    
                                ))}
                            </div>
                        )}
                    </div>
                    </div>
                </ModalContent>
            </FramerModal>
        </div>
    </div>


  )
}

export default CulturalCard
