import React from "react";
import "./About.css";
import icons from "../img/icon.png";
export default function About() {
  return (
    <>
      <div
        className="mx-auto lg:w-8/12 md:w-full md:p-4   lg:mt-14  aboutcontainer"
        id="about"
      >
        <h1 className="md:text-3xl lg:mb-8 md:mb-8 lg:mx-28 items-start md:ml-4  lg:text-4xl about">
          About Me
        </h1>
        <div className="flex justify-center aboutwrap  lg:mt-8 pt-5 md:flex-wrap md:w-full lg:flex-nowrap xl:flex-nowrap ">
          {/* <div className="mb-20 lg:w-40 h-60 xl:ml-15 md:ml-10  shadow-sm lg:mr-10 ">
            <img src={icons} className=" pb-10" /> 
          </div>  */}
          <div className="textandicons lg:flex-nowrap xl:flex-nowrap flex justify-evenly bg-slate-100 shadow-sm rounded-lg lg:pt-4 md:pt-4 lg:w-10/12 lg:mr-10 lg:ml-30 md:w-full md:flex-wrap">
            <div className="textbox  mx-10 flex flex-col justify-start items:start md:w-8/12 lg:w-2/5">
              <span className="lg:text-xl md:text-xl lg:mb-5 lg:pt-5 abouttext">
                {/* Skills: Proficient in HTML, CSS, and JavaScript, with experience
                using React for front-end development Skilled in Node.js and
                MongoDB for back-end development and database management
                Familiar with Git for version control and collaborative
                development Experienced in building responsive and user-friendly
                web applications Continuously learning and staying up-to-date
                with new technologies and trends in web developme */}
                As a botany student in my final year at Dagon University, I have
                always been passionate about learning and expanding my knowledge
                in different areas. Recently, I decided to pursue a career in
                web development, and I have been teaching myself MERN stack
                development. Although I am relatively new to the field, I am
                excited to continue building my skills and knowledge. Before
                delving into web development, I worked in a call center for
                three years at a telecom company. Although I did not
                particularly enjoy the position, it allowed me to gain valuable
                experience in communication and customer service. These skills
                have proven to be useful in my current pursuit of web
                development, as effective communication is essential in any
                role. Overall, I am a hard-working and driven individual who is
                always eager to learn and grow. I am committed to continuously
                improving my skills and staying up-to-date with the latest
                industry trends and technologies.
              </span>
              <button className="dwbtn  lg:w-32  p-2 bg-red-500 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-red-500 duration-300 text-violet-100 font-bold  mt-5 rounded-md flex justify-start  items-center ">
                <span className="text-center items-center"> Download CV</span>
              </button>
            </div>
            <div className="progressbar	lg:w-3/5 text-lg lg:ml-3 mb-6 md:w-7/12 md:mt-20 lg:mt-0  md:p-4 ">
              <div className=" flex flex-col md:my-6 lg:my-1 xl:my-2 bars ">
                <div className="md:text-2xl md:my-2 lg:my-0 lg:text-xl bartext">
                  HTML
                </div>
                <div className=" bg-slate-300 lg:w-90 h-2 md:mt-2 ml-4  md:w-10/12 lg:w-10/12 ">
                  <div className="progress  md:w-9/12 lg:w-9/12 fill-red-800 html"></div>
                </div>
              </div>
              <div className="lg:py-0 md:my-6 bars">
                <div className="md:text-2xl md:my-2 lg:my-0 lg:text-xl bartext">
                  CSS & Boostrap & Tailwindcss
                </div>
                <div className=" bg-slate-300 lg:w-90 h-2 mt-2 ml-4 md:w-10/12 ">
                  <div className="progress  w-80 md:w-9/12  fill-red-800"></div>
                </div>
              </div>
              <div className="lg:py-0 md:my-6 bars">
                <div className="md:text-2xl md:my-2 lg:my-0 lg:text-xl bartext">
                  Javascript
                </div>
                <div className=" bg-slate-300 lg:w-90 h-2 mt-2 ml-4 md:w-10/12">
                  <div className="progress w-72 fill-red-800 md:w-8/12 "></div>
                </div>
              </div>
              <div className="lg:py-0 md:my-6 bars">
                <div className="md:text-2xl md:my-2 lg:my-0 lg:text-xl bartext">
                  React & Redux
                </div>
                <div className=" bg-slate-300 lg:w-90 h-2 mt-2 ml-4 md:w-10/12">
                  <div className="progress  w-60 fill-red-800 md:w-6/12"></div>
                </div>
              </div>
              <div className="lg:py-0 md:my-6 bars">
                <div className="md:text-2xl md:my-2 lg:my-0 lg:text-xl bartext">
                  Nodejs & Express
                </div>
                <div className=" bg-slate-300 lg:w-90 h-2 mt-2 ml-4 md:w-10/12">
                  <div className="progress w-72 fill-red-800 md:w-7/12"></div>
                </div>
              </div>
              <div className="lg:py-0 md:my-6 bars">
                <div className="md:text-2xl lg:my-0 md:my-2 lg:text-xl bartext">
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
