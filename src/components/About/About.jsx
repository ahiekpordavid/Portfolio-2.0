import React from "react";

const About = () => {
  return (
    <div className="lg:pb-[200px] pb-[100px]">
      <p className="font-medium border-1 rounded-full px-10 border-slate-600 w-max uppercase py-[6px] text-xs">
        About
      </p>
      <p className="lg:text-[55px] text-[38px] font-light mt-20">
        "<span className="text-green-400">Innovating with Code</span> : A
        Developer's Tale"
      </p>
      <p className="text-slate-300 text-xl mt-10">
        I'm a dedicated frontend engineer passionate about crafting remarkable
        web experiences. With a background in computer science and a love for
        design. I specialize in turning ideas into interactive, user-friendly
        web applications. What sets me apart is my versatile skill set, which
        extends to backend development. I'm well-versed in Express.js and
        MongoDB, allowing me to create robust RESTful APIs that power seamless
        interactions between the frontend and backend.
      </p>
    </div>
  );
};

export default About;
