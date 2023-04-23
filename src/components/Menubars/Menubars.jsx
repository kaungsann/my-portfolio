import React from "react";
import "./Menubars.css";

export default function Menubars() {
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
        <div className="navitems md:text-2xl md:w-9/12 md:my-4 lg:text-3xl xl:w-2/5">
          <div
            onClick={scrollToTop}
            className="transition ease-in-out delay-150 hover:font-bold "
          >
            Home
          </div>
          <div
            onClick={() => scrollToSection("about", -100)}
            className="hover:font-bold"
          >
            About
          </div>
          <div
            onClick={() => scrollToSection("services", -100)}
            className="hover:font-bold"
          >
            Service
          </div>
          <div
            onClick={() => scrollToSection("projects", -100)}
            className="hover:font-bold"
          >
            Projects
          </div>
          <div
            onClick={() => scrollToSection("contact", -100)}
            className="hover:font-bold"
          >
            Contact
          </div>
        </div>
      </div>
    </>
  );
}
