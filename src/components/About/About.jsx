import React from "react";
import "./About.css";
import icons from "../img/icon.png";
export default function About() {
  return (
    <>
      <div className="mx-auto lg:w-8/12 md:w-full md:p-4  lg:mt-14 " id="about">
        <h1 className="text-3xl mb-8 lg:mx-28 items-start md:ml-4">About Me</h1>
        <div className="flex justify-center  lg:mt-8 pt-5 md:flex-wrap md:w-full lg:flex-nowrap xl:flex-nowrap ">
          <div className="mb-20 lg:w-40 h-60 xl:ml-15 md:ml-10  shadow-sm lg:mr-10 ">
            <img src={icons} className=" pb-10" />
          </div>
          <div className="lg:flex-nowrap xl:flex-nowrap flex justify-evenly bg-slate-100 shadow-sm rounded-lg pt-4 lg:w-10/12 lg:mr-10 lg:ml-30 md:w-full md:flex-wrap">
            <div className="w-1/3 mx-10 flex flex-col justify-start items:start md:w-8/12 lg:w-2/5">
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
            <div className="	lg:w-3/5 text-lg lg:ml-3 mb-6 md:w-7/12 md:mt-20 lg:mt-0  md:p-4 ">
              <div className=" flex flex-col md:my-6 lg:my-1 xl:my-2">
                <div className="md:text-2xl md:my-2 lg:my-0 lg:text-xl">
                  HTML
                </div>
                <div className=" bg-slate-300 lg:w-90 h-2 md:mt-2 ml-4  md:w-10/12 lg:w-10/12">
                  <div className="progress  md:w-9/12 lg:w-9/12 fill-red-800"></div>
                </div>
              </div>
              <div className="lg:py-0 md:my-6">
                <div className="md:text-2xl md:my-2 lg:my-0 lg:text-xl">
                  CSS & Boostrap & Tailwindcss
                </div>
                <div className=" bg-slate-300 lg:w-90 h-2 mt-2 ml-4 md:w-10/12 ">
                  <div className="progress  w-80 md:w-9/12  fill-red-800"></div>
                </div>
              </div>
              <div className="lg:py-0 md:my-6">
                <div className="md:text-2xl md:my-2 lg:my-0 lg:text-xl">
                  Javascript
                </div>
                <div className=" bg-slate-300 lg:w-90 h-2 mt-2 ml-4 md:w-10/12">
                  <div className="progress w-72 fill-red-800 md:w-8/12 "></div>
                </div>
              </div>
              <div className="lg:py-0 md:my-6">
                <div className="md:text-2xl md:my-2 lg:my-0 lg:text-xl">
                  React & Redux
                </div>
                <div className=" bg-slate-300 lg:w-90 h-2 mt-2 ml-4 md:w-10/12">
                  <div className="progress  w-60 fill-red-800 md:w-6/12"></div>
                </div>
              </div>
              <div className="lg:py-0 md:my-6">
                <div className="md:text-2xl md:my-2 lg:my-0 lg:text-xl">
                  Nodejs & Express
                </div>
                <div className=" bg-slate-300 lg:w-90 h-2 mt-2 ml-4 md:w-10/12">
                  <div className="progress w-72 fill-red-800 md:w-7/12"></div>
                </div>
              </div>
              <div className="lg:py-0 md:my-6">
                <div className="md:text-2xl lg:my-0 md:my-2 lg:text-xl">
                  Mongodb
                </div>
                <div className=" bg-slate-300 w-90 h-2 mt-2 ml-4 md:w-10/12">
                  <div className="progress w-64  fill-red-800 md:w-7/12"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
