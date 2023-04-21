import React from "react";

function Contact() {
  return (
    <>
      <div className=" w-8/12		mx-auto lg:mt-14">
        <h1 className="text-4xl font-medium ">Gets in Touch</h1>
        <div className="flex justify-center mt-3 p-3 w-full sm:flex-wrap ">
          <div className="flex flex-col w-2/5	">
            <span className="text-2xl font-medium ">
              Lets talk about everythings!
            </span>
            <span className="text-slate-500 text-2xl mt-4">
              Don't like forms? Send me an Email
            </span>
          </div>
          <div className="flex flex-col p-5 justify-center w-3/5">
            <input
              type="text"
              placeholder="Insert your name"
              className="p-5 w-9/12	  border-slate-400 border-2  rounded focus:outline-none focus:ring  focus:ring-red-500"
            />
            <input
              type="text"
              placeholder="Insert your Email"
              className="p-5 w-9/12 mt-6  border-slate-400 border-2  rounded focus:outline-none focus:ring  focus:ring-red-500"
            />
            <textarea
              className="p-5 w-9/12 border-slate-400 mt-6  rounded border-2 focus:outline-none focus:ring  focus:ring-red-500"
              placeholder="Write your Message"
            ></textarea>
            <button className="bg-red-500 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-red-500 duration-300 text-violet-100 font-bold p-3 mt-5 rounded-md flex justify-start w-36 items-center">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
