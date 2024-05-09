import React from "react";

const Resume = () => {
  return (
    <div className="mb-[200px]">
      <p className="font-medium border-1 rounded-full px-10 border-slate-600 w-max uppercase py-[6px] text-xs">
        Resume
      </p>
      <p className="text-[55px] font-light mt-20">
        <span className="text-green-400">Education</span> & Experience
      </p>
      <div className="flex flex-row gap-10 mt-20">
        <div className="border border-slate-400 w-full rounded-3xl p-5">
          <p className="text-md text-slate-300 font-semibold mb-5">
            SEP 2017 – <span className="text-green-400">JUN 2021</span>
          </p>
          <p className="text-xl text-white font-bold mb-1">
            Wuchang University of Technology | China, Wuhan
          </p>
          <p className="text-lg font-semibold text-slate-300">
            Bachelor of Science in Computer Science
          </p>
        </div>
        <div className="border border-slate-400  w-full rounded-3xl p-5 flex flex-col gap-10">
          <div>
            <p className="text-md text-slate-300 font-semibold mb-5">
              NOV 2022 - <span className="text-green-400">PRESENT</span>
            </p>
            <p className="text-xl text-white font-bold mb-1">
              Sevn Ghana LTD | Ghana, Accra
            </p>
            <p className="text-lg font-semibold text-slate-300">
              Front-end React Developer
            </p>
          </div>
          <div>
            <p className="text-md text-slate-300 font-semibold mb-5">
              OCT 2021 – SEP 2022
            </p>
            <p className="text-xl text-white font-bold mb-1">
              Ghana Maritime Authority | Ghana, Accra
            </p>
            <p className="text-lg font-semibold text-slate-300">
              UI/UX Designer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
