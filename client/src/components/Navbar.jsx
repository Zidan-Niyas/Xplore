import React, { useEffect, useState } from "react";
import { NAV_LINKS } from "../utils/constants";
import { Outlet, useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
const Navbar = () => {

  const [isNavOpen, setIsNavOpen] = useState(false); 
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const navigate = useNavigate();
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      NAV_LINKS.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const { top, height } = element.getBoundingClientRect();
          const windowHeight = window.innerHeight;
      
          const isInView =
            top <= windowHeight * 0.5 && top + height >= windowHeight * 0.5;
      
          if (isInView) {
            setActiveLink(section.id);
          }
        }
      });
      
        
      
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (

    <>
    <div className={`flex items-center md:gap-2 w-full`}>
      <nav className={`${isNavOpen ?"" : "backdrop-blur-lg"} border-solid border-[.5px] rounded-bl-2xl rounded-br-2xl border-grey-500 text-white fixed sm:mt-[54px] md:mt-[57px] mt-[50px] left-0 w-full px-8 z-10 flex items-center md:gap-52 justify-between mt-2 z-50`}>

        <div className="logo">
          <img src='/xplore_logo.png' alt="Xplore 24 Logo" className="w-16 h-12" onClick={() => navigate("/")}/>
        </div>
          <section className="MOBILE-MENU flex lg:hidden z-50">
            <div
              className="HAMBURGER-ICON space-y-2 relative right-0 z-50"
              onClick={() => setIsNavOpen((prev) => !prev)} 
            >
              <span className="block h-0.5 w-8 animate-pulse bg-slate-300"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-slate-300"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-slate-300"></span>
            </div>

            <div className={`${isNavOpen ? "showMenuNav" : "hideMenuNav"} backdrop-blur-lg z-50`}> 
              <div
                className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
                onClick={() => setIsNavOpen(false)} 
              >
                <svg
                  className="h-8 w-8 text-gray-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
              <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px] font-bold z-50">
              {NAV_LINKS.map((link) => (
                <li key={link.name} className="relative group cursor-pointer">
                <Link
                    onClick={(e) => {
                      e.preventDefault();
                      setIsNavOpen(false);
                      if(window.location.pathname == '/') {
                        setActiveLink(link.id);
                      }
                      else{
                        navigate(link.path);
                        setActiveLink(link.path);
                      }
                    }}
                    smooth={true}
                    duration={500}
                    to={link.id}
                  className="hover:text-yellow-400 transition-all uppercase text-sm tracking-wide transition"
                >
                  {link.name}
                </Link>
                <span className={`absolute left-0 bottom-[-18px] h-1  bg-[#fe41e4] transition-all duration-300  ${(activeLink == link.id || activeLink == link.path)? 'w-full': 'w-0'}`}></span>
              </li>
              ))}
              </ul>
              {/* <a
          href="/register"
          className="px-4 py-2 bg-blue-600 hover:bg-blue-800 rounded-full text-sm font-semibold transition-all"
        >
          Register Now
        </a> */}
        
        <img src='./REGISTER_NOW_header.png' className="w-32" onClick={() => {
          navigate("/event-registration/all");
          setIsNavOpen(false);
        }}/>
            </div>
          </section>

          <ul className="DESKTOP-MENU hidden space-x-8 lg:flex flex space-x-8 gap-36 items-center font-bold ">
            <div className="space-x-8 lg:flex flex space-x-8 h-14 items-center gap-5 z-50">
              {NAV_LINKS.map((link) => (
                <li key={link.name} className="relative group cursor-pointer">
                <Link
                    onClick={(e) => {
                      e.preventDefault();
                      if(window.location.pathname == '/') {
                        setActiveLink(link.id);
                      }
                      else{
                        navigate(link.path);
                        setActiveLink(link.path);
                      }
                    }}
                    smooth={true}
                    duration={500}
                    to={link.id}
                  className="hover:text-yellow-400 transition-all uppercase text-sm tracking-wide transition"
                >
                  {link.name}
                </Link>
                <span className={`absolute left-0 bottom-[-18px] h-1  bg-[#fe41e4] transition-all duration-300  ${(activeLink == link.id || activeLink == link.path)? 'w-full': 'w-0'}`}></span>
              </li>
              ))}
            </div>
            {/* <a
              href="/register"
              className="h-10 px-10 bg-blue-600 hover:bg-blue-800 rounded-full text-sm font-semibold transition-all"
            >
              Register Now
            </a> */}

            <img onClick={() => navigate('/event-registration/all')} src='./REGISTER_NOW_header.png' className="w-32 cursor-pointer"/>
          </ul>
          
        </nav>

        <style>{`
        .hideMenuNav {
          display: none;
        }
        .showMenuNav {
            position: absolute;
            width: 100%;
            height: 100vh;
            top: 0;
            left: 0;
            z-index: 50;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center; 
            
          }
      `}</style>
      </div>

      <Outlet />
    </>
  );
};

export default Navbar;
