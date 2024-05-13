import React from "react";
import Intro from "../../components/Intro/Intro";
import About from "../../components/About/About";
import Resume from "../../components/Resume/Resume";
import Services from "../../components/Services/Services";
import Projects from "../../components/Projects/Projects";
import Profile from "../../components/Profile/Profile";

const Home = () => {
  return (
    <div className="px-[20px] sm:px-[80px] xl:pl-[740px] pt-[50px] xl:pr-[300px] app-bg">
      <Profile />
      <Intro />
      <About />
      <Resume />
      <Services />
      <Projects />
    </div>
  );
};

export default Home;
