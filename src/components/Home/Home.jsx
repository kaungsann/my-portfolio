import React from "react";
import "./Home.css";

import jj from "../img/remove.png";

import { BsGithub, BsInstagram, BsFacebook, BsLinkedin } from "react-icons/bs";
import Bounce from "react-reveal/Bounce";
export default function Home() {
  return (
    <>
      <Bounce top>
        <div className="homecontainer">
          <div className="homepage  flex lg:flex-nowrap  p-6 xl:w-8/12 lg:w-5/12 lg:flex-row  md:w-full md:flex-wrap md:flex-col-reverse ">
            <div className="hometext md:w-full lg:3/6 xl:w-3/6 ">
              <h3 className="lg:text-4xl mb-3 md:text-4xl sm:text-2xl md:w-full welcome ">
                Welcome to my portfolio
              </h3>
              <h1 className="lg:text-4xl md:text-3xl sm:text-3xl mb-2 hi">
                Hi , I'm Kaungsann
              </h1>
              <div className="dynamtic_text ">
                <span className="dyspan">MERN Stack Developer</span>
              </div>
              <p className="fonttext  lg:text-2xl md:text-2xl sm:text-xl lg:mt-4">
                As a self-taught developer, I have gained expertise in HTML,
                CSS, JavaScript, React, Node.js, and MongoDB. Although my
                educational background is not in IT, I have honed my skills
                through various online courses and personal projects. My passion
                for programming, combined with my strong technical skills, make
                me a valuable asset for any team looking to build dynamic and
                responsive web applications.
              </p>
              <div className="iconscontainer flex">
                <a
                  class=" icons mr-3 text-red-600"
                  href="https://www.facebook.com/phoe.kaung.5667"
                >
                  <BsFacebook />
                </a>
                <a class=" icons mx-3  text-red-600">
                  <BsInstagram />
                </a>
                <a
                  class=" icons mx-3  text-red-600"
                  href="https://github.com/kaungsann"
                >
                  <BsGithub />
                </a>
                <a
                  class=" icons  mx-3  text-red-600"
                  href="https://www.linkedin.com/in/kaungsan-hein-43893526a/"
                >
                  <BsLinkedin />
                </a>
              </div>
            </div>
            <div className="imgbox md:my-6 lg:2/5  lg:p-4 md:p-4 ">
              <img src={jj} className="iconimg " />
            </div>
          </div>
        </div>
      </Bounce>
    </>
  );
}
