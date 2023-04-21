import React, { useState } from "react";
import "./Projects.css";
import img from "../img/images.jpeg";
import rest from "../img/restaurant.png";
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
    <div className="tabContainer text-cyan-50 lg:mt-14 ">
      <div className="md:text-4xl sm:text-2xl text-2xl   lg:text-3xl flex  justify-center  py-3">
        <div className="flex underline-text ">
          <span
            className="mx-14 text"
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
            className="mx-14 text"
            onClick={handleClick2}
          >
            Colloborate with team project
          </span>
        </div>
      </div>

      <>
        {showText && (
          <div className="w-4/6  lg:mx-auto mt-6 flex justify-evenly p-10">
            <div className="projectCard shadow-lg">
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
                  <a href="https://kaungsann.github.io/kaungsannmusic/">Demo</a>
                </button>

                <button className="bg-red-600 p-2 btn border-t-emerald-200 mx-3 hover:bg-red-500 ">
                  <a href="https://github.com/kaungsann/kaungsannmusic">
                    Source Code
                  </a>
                </button>
              </div>
            </div>
            <div className="projectCard mx-8 shadow-lg">
              <img src={rest} className="primg w-full  h-60 reimg" />
              <p className="text-2xl my-4  text-gray-950">Static Restaurant</p>
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
            <div className="projectCard mx-4 shadow-lg">
              <img src={img} className="primg w-full  h-60" />
              <p className="text-2xl my-4"> Music Player</p>
              <div>
                <span className="mt-2 text-lg">Use Technologies</span>
                <div className="flex text-sm  mt-2">
                  <div className="">React & Nodejs & Expressjs & Mongodb</div>
                </div>
              </div>
              <div className="mt-2 mb-4">
                <button className="bg-red-600 p-2 btn border-t-emerald-200 hover:bg-red-500 ">
                  <a href="https://kaungsann.github.io/kaungsannmusic/">Demo</a>
                </button>

                <button className="bg-red-600 p-2 btn border-t-emerald-200 mx-3 hover:bg-red-500 ">
                  <a href="https://github.com/kaungsann/kaungsannmusic">
                    Source Code
                  </a>
                </button>
              </div>
            </div>
            <div className="projectCard mx-4 shadow-lg">
              <img src={img} className="primg w-full  h-60" />
              <p className="text-2xl my-4"> Music Player</p>
              <div>
                <span className="mt-2 text-lg">Use Technologies</span>
                <div className="flex text-sm  mt-2">
                  <div className="">React & Nodejs & Expressjs & Mongodb</div>
                </div>
              </div>
              <div className="mt-2 mb-4">
                <button className="bg-red-600 p-2 btn border-t-emerald-200 hover:bg-red-500 ">
                  <a href="https://kaungsann.github.io/kaungsannmusic/">Demo</a>
                </button>

                <button className="bg-red-600 p-2 btn border-t-emerald-200 mx-3 hover:bg-red-500 ">
                  <a href="https://github.com/kaungsann/kaungsannmusic">
                    Source Code
                  </a>
                </button>
              </div>
            </div>
          </div>
        )}
        {!showText && (
          <div className="w-4/6  lg:mx-auto mt-6 flex justify-evenly p-8">
            <div className="projectCard shadow-lg">
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
                  <a href="https://kaungsann.github.io/kaungsannmusic/">Demo</a>
                </button>

                <button className="bg-red-600 p-2 btn border-t-emerald-200 mx-3 hover:bg-red-500 ">
                  <a href="https://github.com/kaungsann/kaungsannmusic">
                    Source Code
                  </a>
                </button>
              </div>
            </div>
            <div className="projectCard mx-8 shadow-lg">
              <img src={rest} className="primg w-full  h-60 reimg" />
              <p className="text-2xl my-4  text-gray-950">Static Restaurant</p>
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
          </div>
        )}
      </>
    </div>
  );
}

export default Projects;
