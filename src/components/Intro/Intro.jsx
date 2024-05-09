import React from "react";

const Intro = () => {
  return (
    <div className="mb-[200px]">
      <p className="font-medium border-1 rounded-full px-10 border-slate-600 w-max uppercase py-[6px] text-xs">
        Intro
      </p>
      <p className="text-[70px] font-light mt-20">
        Hello! I'm <span className="text-green-400">David</span>, a MERN Stack
        Developer From Ghana
      </p>
      <p className="text-slate-300 text-xl mt-10">
        I believe that great design and functional development go hand-in-hand.
        My goal is to transform ideas into stunning, user-friendly websites and
        applications that not only look amazing but also deliver exceptional
        results.
      </p>
      <div className="flex flex-row gap-10 mt-[180px]">
        <div className="border border-slate-400 w-full rounded-3xl p-5">
          <p className="text-[50px] text-green-400 font-light">2</p>
          <p className="text-3xl">Years Experience</p>
        </div>
        <div className="border border-slate-400  w-full rounded-3xl p-5">
          <p className="text-[50px] font-light text-green-400">20</p>
          <p className="text-3xl">Projects</p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
