import React from "react";
import "./Menubars.css";
export default function Menubars() {
  return (
    <>
      <div className="navbars">
        <div className="ksh lg:my-4">
          <h1 className="h1nav  lg:text-4xl items-center">
            <span className="navspan">K</span>
            <span className="navspan">S</span>
            <span className="navspan">H</span>
            <span className="navspan dot">.</span>
            <span className="navspan dot">.</span>
            <span className="navspan dot">.</span>
          </h1>
        </div>
        <div className="navitems">
          <div>Home</div>
          <div>About</div>
          <div>Service</div>
          <div>Projects</div>
          <div>Contact</div>
        </div>
      </div>
    </>
  );
}
