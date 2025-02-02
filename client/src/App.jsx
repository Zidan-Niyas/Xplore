import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
// import Events from "./pages/Events";
// import Workshops from "./pages/Workshops";
// import ContactUs from "./pages/ContactUs";
import "./styles/globals.css";
import AppRoutes from "./routes/AppRoutes";
import { EventProvider } from "../context/EventContext.jsx";


const App = () => {
  
  
  return (

      <div className="bg-black text-white ">
        <AppRoutes />
        </div>
   
  );
};

export default App;
