import React, { useState } from "react";
import "./Projects.css";
import img from "../img/images.jpeg";
import rest from "../img/restaurant.png";
import Fade from "react-reveal/Fade";
function Projects() {
  const [showText, setShowText] = useState(true);
  const [selectedText, setSelectedText] = useState(true);
  const [color1, setColor1] = useState("#dc2626");
  const [color2, setColor2] = useState("#020617");
  function handleClick() {
    setShowText(true);
    setSelectedText(true);
    setColor1("#dc2626");
    setColor2("#020617");
  }
  function handleClick2() {
    setColor1("#020617");
    setColor2("#dc2626");
    setShowText(false);
    setSelectedText(false);
  }

  return (
    <div
      className="tabContainer text-cyan-50 lg:mt-14 md:mt-6 md:w-full "
      id="projects"
    >
      <div className=" md:text-4xl sm:text-2xl text-2xl  md:flex-wrap lg:text-3xl flex  justify-center  py-3">
        <div className="flex underline-text textcontainer">
          <span
            className="lg:mx-14 md:mx-10 text md:text-3xl projects"
            style={{
              color: color1,
              textDecoration: selectedText ? "underline" : "none",
              textDecorationThickness: selectedText ? "3px" : "none",
            }}
            onClick={handleClick}
          >
            My Projects
          </span>

          <span
            style={{
              color: color2,
              textDecoration: !selectedText ? "underline" : "none",
              textDecorationThickness: !selectedText ? "3px" : "none",
            }}
            className="lg:mx-14 md:mx-10 text md:text-3xl teamstext"
            onClick={handleClick2}
          >
            Colloborate projects
          </span>
        </div>
      </div>

      <>
        {showText && (
          <div className=" lg:mx-auto  mt-6 flex justify-evenly p-10 md:flex-wrap md:w-full lg:w-10/12 projectBox">
            <Fade left>
              <div className="projectCard shadow-md md:my-6">
                <img src={img} className="primg w-full shadow-lg h-60" />
                <p className="text-2xl my-4  text-gray-950 border-slate-950">
                  Music Player
                </p>
                <div>
                  <span className="mt-2 text-lg  text-gray-950">
                    Use Technologies
                  </span>
                  <div className="flex text-sm  mt-2">
                    <div className=" text-gray-950">
                      React & Nodejs & Expressjs & Mongodb
                    </div>
                  </div>
                </div>
                <div className="mt-2 mb-4">
                  <button className="bg-red-600 p-2 btn border-t-emerald-200 hover:bg-red-500 ">
                    <a href="https://kaungsann.github.io/kaungsannmusic/">
                      Demo
                    </a>
                  </button>

                  <button className="bg-red-600 p-2 btn border-t-emerald-200 mx-3 hover:bg-red-500 ">
                    <a href="https://github.com/kaungsann/kaungsannmusic">
                      Source Code
                    </a>
                  </button>
                </div>
              </div>
            </Fade>
            <Fade left>
              <div className="projectCard lg:mx-8 shadow-md md:my-6">
                <img src={rest} className="primg w-full  h-60 reimg" />
                <p className="text-2xl my-4  text-gray-950">
                  Static Restaurant
                </p>
                <div>
                  <span className="mt-2 text-lg  text-gray-950">
                    Use Technologies
                  </span>
                  <div className="flex text-sm  mt-2  text-gray-950">
                    <div className="">HTML & Css & JS</div>
                  </div>
                </div>
                <div className="mt-2 mb-4">
                  <button className="bg-red-600 p-2 btn border-t-emerald-200 hover:bg-red-500 ">
                    <a href="https://kaungsann.github.io/restaurant/">Demo</a>
                  </button>

                  <button className="bg-red-600 p-2 btn border-t-emerald-200 mx-3 hover:bg-red-500 ">
                    <a href="https://github.com/kaungsann/restaurant">
                      Source Code
                    </a>
                  </button>
                </div>
              </div>
            </Fade>
            <Fade left>
              <div className="projectCard shadow-lg md:my-6">
                <img src={img} className="primg w-full shadow-md h-60" />
                <p className="text-2xl my-4  text-gray-950 border-slate-950">
                  News Media Site
                </p>
                <div>
                  <span className="mt-2 text-lg  text-gray-950">
                    Use Technologies
                  </span>
                  <div className="flex text-sm  mt-2">
                    <div className=" text-gray-950">
                      React/Redux & Nodejs & Expressjs & Mongodb
                    </div>
                  </div>
                </div>
                <div className="mt-2 mb-4  text-4xl">
                  <h3 className="text-slate-600 text-4xl">Coming Soon ...</h3>
                </div>
              </div>
            </Fade>
            <Fade left>
              <div className="projectCard lg:mx-8 shadow-md md:my-6">
                <img src={img} className="primg w-full  h-60 reimg" />
                <p className="text-2xl my-4  text-gray-950 border-slate-950">
                  E-commerce Web App
                </p>
                <div>
                  <span className="mt-2 text-lg  text-gray-950">
                    Use Technologies
                  </span>
                  <div className="flex text-sm  mt-2  text-gray-950">
                    <div className="">React & Nodejs & Expressjs & Mongodb</div>
                  </div>
                </div>
                <div className="mt-2 mb-4  text-4xl">
                  <h3 className="text-slate-600 text-4xl">Coming Soon ...</h3>
                </div>
              </div>
            </Fade>
          </div>
        )}
        {!showText && (
          <div className="projectBox lg:w-4/6  lg:mx-auto mt-6 flex justify-evenly p-10 md:flex-wrap md:w-full">
            <Fade right>
              <div className="projectCard shadow-lg md:my-6">
                <img src={img} className="primg w-full shadow-lg h-60" />
                <p className="text-2xl my-4  text-gray-950 border-slate-950">
                  Movies Web App
                </p>
                <div>
                  <span className="mt-2 text-lg  text-gray-950">
                    Use Technologies
                  </span>
                  <div className="flex text-sm  mt-2">
                    <div className=" text-gray-950">
                      React & Nodejs & Expressjs & Mongodb
                    </div>
                  </div>
                </div>
                <div className="mt-2 mb-4  text-4xl">
                  <h3 className="text-slate-600 text-4xl">Coming Soon ...</h3>
                </div>
              </div>
            </Fade>
            <Fade right>
              <div className="projectCard lg:mx-8 shadow-lg md:my-6">
                <img src={img} className="primg w-full  h-60 reimg" />
                <p className="text-2xl my-4  text-gray-950">Weather App</p>
                <div>
                  <span className="mt-2 text-lg  text-gray-950">
                    Use Technologies
                  </span>
                  <div className="flex text-sm  mt-2  text-gray-950">
                    <div className="">React & Nodejs & Expressjs & Mongodb</div>
                  </div>
                </div>
                <div className="mt-2 mb-4  text-4xl">
                  <h3 className="text-slate-600 text-4xl">Coming Soon ...</h3>
                </div>
              </div>
            </Fade>
          </div>
        )}
      </>
    </div>
  );
}

export default Projects;
