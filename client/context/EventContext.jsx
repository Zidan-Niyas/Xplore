import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const EventContext = createContext();


export const EventProvider = ({ children }) => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        console.log("Getting events...");
        
        axios.get("https://api.xplore24.com/api/events/get/all")
        .then((response) => {
            setEvents(response.data);
            setLoading(false);
        })
        .catch((error) => {
            console.log(error);
        });
        console.log("Events fetched");
        
    }, []);
    
    return (
        <EventContext.Provider value={{ events, loading }}>
        {children}
        </EventContext.Provider>
    );
};

export const useEventContext = () => useContext(EventContext);