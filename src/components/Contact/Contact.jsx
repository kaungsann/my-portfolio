import React from "react";

function Contact() {
  return (
    <>
      <div
        className=" lg:w-11/12 md:w-full	xl:w-9/12	mx-auto lg:mt-14  lg:my-8 xl:my-10"
        id="contact"
      >
        <h1 className="lg:text-4xl font-medium  md:text-3xl mx-5 sm:text-4xl ">
          Gets in Touch
        </h1>
        <div className="flex justify-center mt-3 p-5 w-full sm:flex-wrap lg:flex-nowrap">
          <div className="flex flex-col  md:mx-4  md:w-full	sm:w-full sm:mb-6 xl:w-2/5 ">
            <span className=" font-medium  md:text-2xl lg:text-3xl xl:text-3xl sm:text-2xl">
              Lets talk about everythings!
            </span>
            <span className="text-slate-500 text-2xl mt-4  md:text-2xl lg:text-3xl">
              Don't like forms? Send me an Email
            </span>
          </div>
          <div className="flex flex-col p-5 justify-center lg:w-3/6  xl:w-3/5 md:w-full sm:w-full sm:mt-4">
            <input
              type="text"
              placeholder="Insert your name"
              className="md:p-3 sm:w-full sm:p-3  sm:text-2xl lg:p-4 w-9/12	md:w-full  border-slate-400 border-2 text-2xl rounded focus:outline-none focus:ring  focus:ring-red-500"
            />
            <input
              type="text"
              placeholder="Insert your Email"
              className="md:p-3 sm:w-full sm:p-3 sm:text-2xl lg:p-4 w-9/12 mt-6 md:w-full  border-slate-400 border-2 text-2xl  rounded focus:outline-none focus:ring  focus:ring-red-500"
            />
            <textarea
              className="md:p-3 lg:p-4 w-9/12 sm:p-3  sm:text-2xl sm:w-full border-slate-400 mt-6 md:w-full  rounded border-2  text-2xl focus:outline-none focus:ring  focus:ring-red-500"
              placeholder="Write your Message"
            ></textarea>
            <button className="bg-red-500 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-red-500 duration-300 text-violet-100 font-bold p-3 mt-5 rounded-md flex justify-start w-36 items-center ">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
