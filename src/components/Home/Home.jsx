import React from "react";
import "./Home.css";
import icons from "../img/img1.png";

export default function Home() {
  return (
    <>
      <div className="homecontainer ">
        <div className="homepage ">
          <div className="hometext">
            <h3 className="text-4xl mb-3">Welcome to my porfolio</h3>
            <h1 className="text-4xl">Hi , I'm Kaungsann</h1>
            <div className="dynamtic_text">
              <span className="dyspan">MERN Stack Developer</span>
            </div>
            <p className="text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit
              molestiae maxime nobis error omnis ipsa, perferendis, deserunt,
              sed soluta maiores perspiciatis eligendi voluptas modi. Dolor
              optio aut magni aperiam qui.
            </p>
            <div className="iconscontainer">
              <span class="icon-social-facebook icons"></span>
              <span class="icon-social-instagram icons"></span>
              <span class="icon-social-linkedin icons"></span>
              <span class="icon-social-twitter icons"></span>
            </div>
          </div>
          <div>
            <img src={icons} className="icon" />
          </div>
        </div>
      </div>
    </>
  );
}
