import React from "react";
import "./Service.css";
import { DiReact, DiNodejsSmall, DiStreamline } from "react-icons/di";
export default function Service() {
  return (
    <>
      <div
        className="flex flex-col justify-center xl:w-3/5  p-4 mx-auto lg:mt-20 md:w-full md:mb-28"
        id="services"
      >
        <h1 className="flex text-3xl font-bold mb-8 mt-6">Services</h1>
        <div className="flex justify-between md:w-full md:justify-evenly lg:justify-between ">
          <div class=" lg:w-5/12 md:w-4/12  bg-white   rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-lg">
            <div className="mt-2">
              <span class="">
                <DiReact className="react" />
              </span>
            </div>
            <h3 class=" text-3xl dark:text-white mt-5  font-medium tracking-tight">
              Fronted
            </h3>
            <p class="text-slate-500 dark:text-slate-400 mt-2  text-2xl">
              The Zero Gravity Pen can be used to write in any orientation,
              including upside-down. It even works in outer space.
            </p>
          </div>
          <div class=" mx-4 lg:w-5/12  bg-white   md:w-4/12  rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-lg">
            <div>
              <span class="inline-flex rounded-xl items-center justify-center p-2 ">
                <DiNodejsSmall className="text-green-600  nodejs" />
              </span>
            </div>
            <h3 class="text-3xl dark:text-white mt-5  font-medium tracking-tight">
              Backend
            </h3>
            <p class="text-slate-500 dark:text-slate-400 mt-2  text-2xl">
              The Zero Gravity Pen can be used to write in any orientation,
              including upside-down. It even works in outer space.
            </p>
          </div>
          <div class=" mx-4 lg:w-5/12  bg-white  md:w-4/12 dark:bg-slate-900 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-lg">
            <div>
              <span class="inline-flex items-center justify-center p-2 ">
                <DiStreamline className="database text-blue-400" />
              </span>
            </div>
            <h3 class="text-3xl dark:text-white mt-5  font-medium tracking-tight">
              Database
            </h3>
            <p class="text-slate-500 dark:text-slate-400 mt-2  text-2xl">
              The Zero Gravity Pen can be used to write in any orientation,
              including upside-down. It even works in outer space.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
