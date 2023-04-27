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
          <div class=" card bg-white   rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-lg">
            <div className="mt-2 ">
              <span class="">
                <DiReact className="react" />
              </span>
            </div>
            <h3 class=" text-3xl dark:text-white mt-5  font-medium tracking-tight ">
              Fronted
            </h3>
            <p class="text-slate-500 dark:text-slate-400 mt-2  text-2xl   service">
              ReactJS, incorporating features such as state management with
              useState, event handling, and conditional rendering. Created
              reusable components for each section of the form and implemented
              dynamic validation to ensure data accuracy. Utilized React hooks
              to manage complex form logic and integrated local storage for data
              persistence. Used third-party libraries such as React Router for
              seamless navigation and Improved user experience with responsive
              design and intuitive UI. Demonstrated intermediate-level
              proficiency in ReactJS and problem-solving skills in a short-term
              project."
            </p>
          </div>
          <div class=" mx-4  bg-white card  rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-lg">
            <div>
              <span class="inline-flex rounded-xl items-center justify-center p-2 ">
                <DiNodejsSmall className="text-green-600  nodejs" />
              </span>
            </div>
            <h3 class="text-3xl dark:text-white mt-5  font-medium tracking-tight">
              Backend
            </h3>
            <p class="text-slate-500 dark:text-slate-400 mt-2  text-2xl service">
              Node.js, building the backend API and database to handle user
              data. Utilized the Express.js framework for efficient routing and
              middleware handling, and integrated MongoDB for data storage and
              retrieval. Implemented user authentication and authorization for
              secure access to the form. Used Mongoose.js for Object Data
              Modeling (ODM) and schema validation. Demonstrated
              intermediate-level in Node.js and backend development skills in a
              short-term project."
            </p>
          </div>
          <div class=" mx-4 card bg-white  card dark:bg-slate-900 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-lg">
            <div>
              <span class="inline-flex items-center justify-center p-2 ">
                <DiStreamline className="database text-blue-400" />
              </span>
            </div>
            <h3 class="text-3xl dark:text-white mt-5  font-medium tracking-tight">
              Database
            </h3>
            <p class="text-slate-500 dark:text-slate-400 mt-2  text-2xl service">
              NoSQL MongoDB for data storage and retrieval. Utilized the
              Mongoose.js library for Object Data Modeling (ODM) and schema
              validation, and Built the backend API using Node.js and the
              Express.js framework for efficient routing and middleware
              handling. Implemented user authentication and authorization
              Demonstrated intermediate-level in NoSQL MongoDB and backend
              development skills in a short-term project."
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
