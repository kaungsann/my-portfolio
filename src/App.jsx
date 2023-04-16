import React from "react";
import "./App.css";
import Menubars from "./components/Menubars/Menubars";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Service from "./components/Service/Service";
function App() {
  return (
    <>
      <Menubars />
      <Home />
      <About />
      <Service />
    </>
  );
}

export default App;
