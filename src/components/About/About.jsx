import React from "react";
import "./About.css";
import icons from "../img/icon.png";
export default function About() {
  return (
    <>
      <div className="mx-auto w-8/12  lg:mt-14 ">
        <h1 className="text-3xl mb-8 mx-28">About Me </h1>
        <div className="flex justify-center  lg:mt-8 pt-5  ">
          <div className="mb-20 lg:w-40 h-60 xl:ml-15 md:ml-10 w-96 shadow-sm lg:mr-10 ">
            <img src={icons} className=" pb-10" />
          </div>
          <div className="flex justify-evenly bg-slate-100 shadow-sm rounded-lg pt-4 lg:w-8/12 lg:mr-10 lg:ml-30">
            <div className="w-1/3 mx-10 flex flex-col justify-start items:start">
              <span className="text-xl lg:mb-5 lg:pt-5 ">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Numquam aperiam magnam debitis quos vero alias nostrum tempore
                neque. Eveniet est eos quasi dolorem reiciendis dolore rerum
                repellat perferendis numquam. Aut?
              </span>
              <button className="dwbtn w-32 p-2 bg-red-500 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-red-500 duration-300 text-violet-100 font-bold  mt-5 rounded-md flex justify-start  items-center ">
                Download CV
              </button>
            </div>
            <div className="	w-4/12 text-lg ml-8 mb-6">
              <div className="lg:py-2 flex flex-col ">
                <div>HTML</div>
                <div className=" bg-slate-300 lg:w-90 h-2 mt-2 ml-4">
                  <div className="progress w-80  fill-blue-800"></div>
                </div>
              </div>
              <div className="lg:py-2">
                <div>CSS & Boostrap & Tailwindcss</div>
                <div className=" bg-slate-300 lg:w-90 h-2 mt-2 ml-4 ">
                  <div className="progress  w-80 fill-blue-800"></div>
                </div>
              </div>
              <div className="lg:py-2">
                <div>Javascript</div>
                <div className=" bg-slate-300 lg:w-90 h-2 mt-2 ml-4">
                  <div className="progress w-72 fill-blue-800"></div>
                </div>
              </div>
              <div className="lg:py-2">
                <div>React & Redux </div>
                <div className=" bg-slate-300 lg:w-90 h-2 mt-2 ml-4">
                  <div className="progress  w-60 fill-blue-800"></div>
                </div>
              </div>
              <div className="lg:py-2">
                <div>Nodejs & Express</div>
                <div className=" bg-slate-300 lg:w-90 h-2 mt-2 ml-4">
                  <div className="progress w-72 fill-blue-800"></div>
                </div>
              </div>
              <div className="lg:py-2">
                <div>Mongodb</div>
                <div className=" bg-slate-300 w-90 h-2 mt-2 ml-4">
                  <div className="progress w-64  fill-blue-800"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
