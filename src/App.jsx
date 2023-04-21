import React from "react";
import "./App.css";
import Menubars from "./components/Menubars/Menubars";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Service from "./components/Service/Service";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <>
      <Menubars />
      <Home />
      <About />
      <Service />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
