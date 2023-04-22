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
      <div className="navbars shadow-sm">
        <div className="ksh lg:my-4">
          <h1 className="h1nav  lg:text-4xl items-center">
            <span className="navspan text-[#dc2626]">K</span>
            <span className="navspan text-[#dc2626]">S</span>
            <span className="navspan text-[#dc2626]">H</span>
            <span className="navspan dot  text-[#dc2626]">.</span>
            <span className="navspan dot  text-[#dc2626]">.</span>
            <span className="navspan dot  text-[#dc2626]">.</span>
          </h1>
        </div>
        <div className="navitems">
          <div
            onClick={scrollToTop}
            className="transition ease-in-out delay-150"
          >
            Home
          </div>
          <div onClick={() => scrollToSection("about", -100)}>About</div>
          <div onClick={() => scrollToSection("services", -100)}>Service</div>
          <div onClick={() => scrollToSection("projects", -100)}>Projects</div>
          <div onClick={() => scrollToSection("contact", -100)}>Contact</div>
        </div>
      </div>
    </>
  );
}
