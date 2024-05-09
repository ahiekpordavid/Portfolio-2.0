import React from "react";
import Intro from "../../components/Intro/Intro";
import About from "../../components/About/About";
import Resume from "../../components/Resume/Resume";
import Services from "../../components/Services/Services";
import Projects from "../../components/Projects/Projects";

const Home = () => {
  return (
    <div className="pl-[740px] pt-[50px] pr-[300px] app-bg">
      <Intro />
      <About />
      <Resume />
      <Services />
      <Projects />
    </div>
  );
};

export default Home;
