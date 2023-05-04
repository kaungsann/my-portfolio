import React, { useState } from "react";
import "./Menubars.css";
import { AiOutlineMenuFold, AiOutlineHome } from "react-icons/ai";
import { BiBriefcaseAlt2 } from "react-icons/bi";
import { BsLayers, BsChatSquareText } from "react-icons/bs";

import { MdOutlineDesignServices, MdArrowForward } from "react-icons/md";

export default function Menubars() {
  const [side, setSide] = useState(false);
  const [showSidebar, SetshowSidebar] = useState(false);

  const scrollToTop = (offset = 0) => {
    window.scrollTo({
      top: 0 + offset,
      behavior: "smooth",
    });
  };
  const scrollToSection = (id, offset = 0) => {
    const section = document.getElementById(id);
    if (section) {
      const position = section.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: position + offset,
        behavior: "smooth",
      });
    }
  };
  const sideBar = () => {
    SetshowSidebar(true);
  };
  const backBar = () => {
    SetshowSidebar(false);
  };

  return (
    <>
      <div className="navbars shadow-sm lg:w-full md:w-full  lg:mx-auto md:p-3 ">
        <div className="ksh lg:my-4 ">
          <h1 className="h1nav  lg:text-4xl items-center md:text-3xl">
            <span className="navspan text-[#dc2626]">K</span>
            <span className="navspan text-[#dc2626]">S</span>
            <span className="navspan text-[#dc2626]">H</span>
            <span className="navspan dot  text-[#dc2626]">.</span>
            <span className="navspan dot  text-[#dc2626]">.</span>
            <span className="navspan dot  text-[#dc2626]">.</span>
          </h1>
        </div>
        <div className="navitems md:text-2xl md:w-9/12 md:my-4 lg:text-3xl xl:w-2/5 ">
          <div
            onClick={scrollToTop}
            className="transition ease-in-out delay-150 hover:font-bold scroll-smooth"
          >
            Home
          </div>
          <div
            onClick={() => scrollToSection("about", -100)}
            className="hover:font-bold scroll-smooth"
          >
            About
          </div>
          <div
            onClick={() => scrollToSection("services", -100)}
            className="hover:font-bold scroll-smooth"
          >
            Service
          </div>
          <div
            onClick={() => scrollToSection("projects", -100)}
            className="hover:font-bold scroll-smooth"
          >
            Projects
          </div>
          <div
            onClick={() => scrollToSection("contact", -100)}
            className="hover:font-bold scroll-smooth"
          >
            Contact
          </div>
        </div>
        <button
          className="text-4xl menuicons hover:text-red-700"
          onClick={sideBar}
        >
          <AiOutlineMenuFold />
        </button>
        <div
          className="iconContainer shadow-sm  "
          style={showSidebar ? { right: 0 } : { right: "-100%" }}
        >
          <span className="items-start text-4xl" onClick={backBar}>
            <MdArrowForward className="arrow text-4xl " />
          </span>
          <div className="iconsbox">
            <AiOutlineHome
              className="menuico  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:text-red-500 duration-300"
              onClick={scrollToTop}
            />
            <BiBriefcaseAlt2
              className="menuico  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:text-red-500 duration-300 "
              onClick={() => scrollToSection("about", -100)}
            />
            <MdOutlineDesignServices
              className="menuico  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:text-red-500 duration-300"
              onClick={() => scrollToSection("services", -100)}
            />
            <BsLayers
              className="menuico  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:text-red-500 duration-300"
              onClick={() => scrollToSection("projects", -100)}
            />
            <BsChatSquareText
              className="menuico  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:text-red-500 duration-300"
              onClick={() => scrollToSection("contact", -100)}
            />
          </div>
        </div>
      </div>
    </>
  );
}
