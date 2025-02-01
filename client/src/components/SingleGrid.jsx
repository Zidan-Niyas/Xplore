import React from "react"
import { RainbowButton } from "./ui/rainbow-button.jsx"
import { ShinyButton } from "./ui/shiny-button.jsx"
import {toast, ToastContainer} from 'react-toastify';
export default function SingleEventGrid({ event }) {
  if (!event) return null

  return (
    <div className="flex flex-col md:flex-row gap-6 rounded-lg shadow md:max-w-3xl p-4">
      <div className="flex-shrink-0 w-full md:w-1/3 h-96 md:h-auto">
        {event.images && event.images.length > 0 && (
          <img
            className="object-cover w-full h-full rounded-lg"
            src={event.images[0] || "/placeholder.svg"}
            alt={`Image for ${event.name}`}
          />
        )}
      </div>
      <div className="flex flex-col justify-between p-4 leading-normal w-full md:w-2/3">
        <h2 className="mb-2 text-xl font-bold tracking-tight">{event.name}</h2>
        <p className="mb-3 font-normal text-gray-400 dark:text-gray-400 text-pretty">{event.description}</p>
        
        {/* Location Section */}
        {event.location && (
          <p className="mb-3 font-semibold text-lg text-gray-300">Venue :  {event.location}</p>
        )}

        {event.registerLink && (
          <div className="flex flex-col gap-4">
              <RainbowButton className="w-full mt-2" onClick={() => window.open(event.registerLink, "_blank")}>
              Register
            </RainbowButton>
              {/* For talks  */}
              {event.fee !== "Free" && (
                <ShinyButton className="w-full bg-slate-200" 
                  onClick={() => {
                    toast.info("Registration is not open yet. Please check back later.", {
                      position: "top-center",
                      autoClose: 3000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                    })
                  }}
                >
                Register for GCEKians
              </ShinyButton>
              )}
          </div>
        )}
      </div>
      <ToastContainer />
    </div>
  )
}
