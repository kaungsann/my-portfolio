import React from "react";
import "./navicons.css";
const Navicons = () => {
  return (
    <>
      <div>
        <div>
          <a href="#">
            <img src="" />
          </a>
        </div>
        <nav className="nav">
          <div className="navmenu ">
            <ul className="ul_list">
              <li className="nav__items">
                <a href="#home" className="nav_link">
                  <i className="icon-home"></i>
                </a>
              </li>
              <li className="nav__items">
                <a href="#about" className="nav_link">
                  <i className="icon-user"></i>
                </a>
              </li>
              <li className="nav__items">
                <a href="#service" className="nav_link">
                  <i className="icon-briefcase"></i>
                </a>
              </li>
              <li className="nav__items">
                <a href="#resume" className="nav_link">
                  <i className="icon-graduation"></i>
                </a>
              </li>
              <li className="nav__items">
                <a href="#porfolio" className="nav_link">
                  <i className="icon-layers"></i>
                </a>
              </li>
              <li className="nav__items">
                <a href="#blog" className="nav_link">
                  <i className="icon-note"></i>
                </a>
              </li>
              <li className="nav__items">
                <a href="#cotant" className="nav_link">
                  <i className="icon-bubble"></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="nav_footer">
        <span>&copy : 2023 - 2024 :</span>
      </div>
    </>
  );
};

export default Navicons;
