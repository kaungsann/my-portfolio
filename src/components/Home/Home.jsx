import React from "react";
import "./Home.css";
import icons from "../img/img1.png";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BsGithub, BsInstagram, BsFacebook, BsLinkedin } from "react-icons/bs";

export default function Home() {
  return (
    <>
      <div className="homecontainer   ">
        <div className="homepage  flex  p-6 lg:w-7/12 md:w-6/5">
          <div className="hometext md:w-7/12">
            <h3 className="lg:text-4xl mb-3 md:text-3xl sm:text-2xl md:w-full">
              Welcome to my porfolio
            </h3>
            <h1 className="lg:text-4xl md:text-3xl sm:text-2xl mb-2">
              Hi , I'm Kaungsann
            </h1>
            <div className="dynamtic_text ">
              <span className="dyspan">MERN Stack Developer</span>
            </div>
            <p className="text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit
              molestiae maxime nobis error omnis ipsa, perferendis, deserunt,
              sed soluta maiores perspiciatis eligendi voluptas modi. Dolor
              optio aut magni aperiam qui.
            </p>
            <div className="iconscontainer flex">
              <a
                class=" icons mr-3 text-red-600"
                href="https://www.facebook.com/phoe.kaung.5667"
              >
                <BsFacebook />
              </a>
              <a class=" icons mx-3  text-red-600">
                <BsInstagram />
              </a>
              <a
                class=" icons mx-3  text-red-600"
                href="https://github.com/kaungsann"
              >
                <BsGithub />
              </a>
              <a
                class=" icons  mx-3  text-red-600"
                href="https://www.linkedin.com/in/kaungsan-hein-43893526a/"
              >
                <BsLinkedin />
              </a>
            </div>
          </div>
          <div className="">
            <img src={icons} className="icon " />
          </div>
        </div>
      </div>
    </>
  );
}
