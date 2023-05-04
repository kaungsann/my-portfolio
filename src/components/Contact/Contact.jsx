import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import Fade from "react-reveal/Fade";

function Contact() {
  const [disable, setDisable] = useState(false);

  const form = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const textRef = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qg4z6w8",
        "template_t9a5scg",
        form.current,
        "GPy_kHNVLK2M7Xq7I"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("successful send");
        },
        (error) => {
          console.log(error.text);
        }
      );

    nameRef.current.value = "";
    emailRef.current.value = "";
    textRef.current.value = "";
  };
  return (
    <>
      <Fade bottom>
        <div
          className=" lg:w-11/12 md:w-full	xl:w-9/12	mx-auto lg:mt-14  lg:my-8 xl:my-10"
          id="contact"
        >
          <h1 className="lg:text-4xl font-medium  md:text-3xl lg:mx-5 md:mx-5 sm:text-3xl get">
            Gets in Touch
          </h1>
          <div className="contactbox flex justify-center mt-3 p-5 w-full sm:flex-wrap lg:flex-nowrap contact">
            <div className="flex flex-col  md:mx-4  md:w-full	sm:w-full sm:mb-6 xl:w-2/5 ">
              <span className=" font-medium  md:text-2xl lg:text-3xl xl:text-3xl sm:text-2xl contacttext">
                Lets talk about everythings!
              </span>
              <span className="text-slate-500  mt-4  md:text-2xl lg:text-3xl contacttext">
                Don't like forms? Send me an Email
              </span>
            </div>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="contactinput flex flex-col p-5 justify-center lg:w-3/6  xl:w-3/5 md:w-full sm:w-full sm:mt-4"
            >
              <input
                type="text"
                name="user_name"
                ref={nameRef}
                placeholder="Insert your name"
                className="inputbox md:p-3 sm:w-full sm:p-3  sm:text-2xl lg:p-4 lg:w-9/12	md:w-full  border-slate-400 border-2  rounded focus:outline-none focus:ring  focus:ring-red-500"
              />
              <input
                type="email"
                name="user_email"
                ref={emailRef}
                placeholder="Insert your Email"
                className="inputbox md:p-3 sm:w-full sm:p-3 sm:text-2xl lg:p-4 lg:w-9/12 mt-6 md:w-full  border-slate-400 border-2   rounded focus:outline-none focus:ring  focus:ring-red-500"
              />
              <textarea
                name="message"
                ref={textRef}
                className=" inputbox md:p-3 lg:p-4 lg:w-9/12 sm:p-3  sm:text-2xl sm:w-full border-slate-400 mt-6 md:w-full  rounded border-2 focus:outline-none focus:ring  focus:ring-red-500"
                placeholder="Write your Message"
              ></textarea>

              <input
                type="submit"
                className="sendbtn  bg-red-500 transition ease-in-out delay-150  hover:-translate-y-1  hover:bg-red-400 duration-300 text-violet-100 font-bold p-3 mt-5 rounded-md lg:w-36 md:w-36 i "
                value="Send Message"
              />
            </form>
          </div>
        </div>
      </Fade>
    </>
  );
}

export default Contact;
