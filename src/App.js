import React from "react";
import Hero from "./home";
import Navbar from "./nav";
import About from "./about";
import Skills from "./skills";
import Edu from "./edu";
import Ctc from "./contact";
import Foot from "./footer";
import Pro from "./project";

function App() {
  return (
    <div className="App">
      <Hero></Hero>
      <Navbar></Navbar>
      <About></About>
      <Skills></Skills>
      <Pro></Pro>
      <Edu></Edu>
      <Ctc></Ctc>
      <Foot></Foot>
      
    </div>
  );
}

export default App;
