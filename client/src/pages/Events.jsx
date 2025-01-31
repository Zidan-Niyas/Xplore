import React, { useState, useEffect } from "react"
import { useSpring, animated } from "@react-spring/web"
import { motion } from "framer-motion"
import eventBanner from "../assets/images/event-banner.png"
import Event from "../components/Event"
import { eventData, culturalEventData, preEventData, competitionData } from "../utils/eventData.js"
import CulturalCard from "../components/CulturalCard.jsx"
import Loading from "../components/Loading.jsx"
import { useParams } from "react-router-dom"
import EventGrid from "../components/EventGrid.jsx"
import SingleEventGrid from "../components/SingleGrid.jsx"

const Events = () => {
  const [filteredEvents, setFilteredEvents] = useState(eventData)
  const [loading, setLoading] = useState(false)
  const { category } = useParams()
  const [eventType, setEventType] = useState(category)

  useEffect(() => {
    switch (eventType) {
      case "cultural":
        setFilteredEvents(culturalEventData)
        break
      case "pre-event":
        setFilteredEvents(preEventData)
        break
      case "competition":
        setFilteredEvents(competitionData)
        break
      case "technical":
        setFilteredEvents(eventData.filter((event) => event.category === "event"))
        break
      default:
        setFilteredEvents(eventData)
    }
  }, [eventType])

  useEffect(() => {
    if (window.location.pathname === "/events") {
      window.history.pushState(null, "", `/events/${eventType}`)
    }
  }, [eventType])

  const bannerAnimation = useSpring({
    from: { opacity: 0, transform: "scale(0.9)" },
    to: { opacity: 1, transform: "scale(1)" },
    config: { tension: 100, friction: 20 },
  })

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.3,
        ease: "easeInOut",
      },
    }),
  }

  const gradientBackground =
    "linear-gradient(159deg, rgba(253,1,48,1) 0%, rgba(200,1,38,1) 0%, rgba(173,1,33,1) 0%, rgba(160,1,31,1) 0%, rgba(149,1,29,1) 0%, rgba(141,1,27,1) 0%, rgba(126,1,24,1) 0%, rgba(89,0,17,1) 0%, rgba(140,1,27,1) 0%, rgba(62,1,12,1) 0%, rgba(90,1,18,1) 0%, rgba(90,1,18,1) 0%, rgba(91,1,18,1) 0%, rgba(71,1,14,1) 21%, rgba(36,0,7,1) 36%, rgba(0,0,0,1) 55%, rgba(0,0,0,1) 91%)"

  const handleButtonClick = (type) => {
    setEventType(type)
    if (type === "cultural") {
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
      }, 3000)
    }
  }

  const EventButton = ({ type, label }) => (
    <button
      className={`px-6 py-3 rounded-full text-white font-bold transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white ${
        eventType === type
          ? "bg-gradient-to-r from-red-600 to-red-800 shadow-lg"
          : "bg-gradient-to-r from-gray-700 to-gray-900 opacity-75 hover:opacity-100"
      }`}
      onClick={() => handleButtonClick(type)}
    >
      {label}
    </button>
  )

  return (
    <>
      <animated.section
        className="w-full min-h-[150px] md:min-h-[200px] bg-cover bg-center bg-no-repeat"
        style={{
          ...bannerAnimation,
          backgroundImage: `url(${eventBanner})`,
          boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.5)",
          borderBottom: "5px solid rgba(0, 0, 0, 0.2)",
        }}
      ></animated.section>

      <div className="flex flex-wrap justify-center space-x-2 sm:space-x-4 my-8 gap-4">
        {/*<EventButton type="pre-event" label="Pre-Events" />*/}
        <EventButton type="technical" label="Technical Events" />
        <EventButton type="cultural" label="Cultural Events" />
        <EventButton type="competition" label="Competitions" />
      </div>

      <div className="w-full h-fit min-h-screen flex flex-wrap sm:flex-col md:flex-row sm:items-center md:items-start justify-center gap-8 p-8 md:gap-16 md:px-16 lg:px-32 bg-cy">
        {filteredEvents.map((event, index) => (
          <motion.div
            key={event.id}
            className={`w-full ${event.category !== "event" ? "lg:w-1/4" : ""} flex-shrink-0 flex justify-center items-center `}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
          >
            {event.category === "cultural" || event.category === "pre-event" ? (
              <CulturalCard eventDetails={event} />
            ) : eventType === "competition" ? (
              <SingleEventGrid event={event} />
            ) : (
              <EventGrid event={event} />
            )}
          </motion.div>
        ))}
      </div>
      {loading && <Loading />}
    </>
  )
}

export default Events

