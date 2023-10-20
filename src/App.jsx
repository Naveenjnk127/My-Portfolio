// eslint-disable-next-line no-unused-vars
import React from "react";
import "./App.css";
import AboutMe from "../Components/Aboutme";
import Navbar from "../Components/Navbar";
import Projects from "../Components/Projects";
import Myjourney from "../Components/Myjourney";
import Contact from "../Components/Contact";

function App() {
  return (
    <>
    <Navbar />
    <AboutMe />
    <Projects />
    <Myjourney />
    <Contact />
    </>
  );
}

export default App;
