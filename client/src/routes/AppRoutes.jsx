import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Navbar from "../components/Navbar";
import About from "../pages/About";
import Events from "../pages/Events";
import Workshops from "../pages/Workshops";
import Details from "../components/Details";
import ContactPage from "../pages/Contact";
import GetDirections from "../pages/Directions";
import AmbassadorForm from "../pages/AmbassadorForm";
import EventRegistration from "../pages/EventRegistration";
import MaintenancePage from "../pages/Maintenance";
import PageNotFound from "../pages/PageNotFound";
import News from "../pages/News";

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route element={<Navbar />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events/:category" element={<Events />} />
        <Route path="/event-registration/:category" element={<EventRegistration />} />
        <Route path="/:type/:eventId" element={<Details />} />
        <Route path="/workshops" element={<Workshops />} />
        <Route path="/contact-us" element={<ContactPage/>} /> 
        <Route path="/get-directions" element={<GetDirections/>} /> 
        <Route path="/ambassador-form" element={<AmbassadorForm />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
      {/* <Route path="/news" element={<News />}/> */}
    </Routes>

  </Router>
);

export default AppRoutes;