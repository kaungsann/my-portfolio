import React from "react";
import "./App.css";
import Menubars from "./components/Menubars/Menubars";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Service from "./components/Service/Service";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Menubars />
      <div className="App">
        <Home />
        <About />
        <Service />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
