import React from "react";
import frontend from "../../assets/api.png";
import backend from "../../assets/code.png";

const Services = () => {
  const data = [
    {
      icon: <img src={frontend} alt="code" className="w-[50px]" />,
      name: "Frontend Development",
      description:
        " Using HTML, CSS, JavaScript or React JavaScript frameworks for building complex user interfaces for both websites and web apps with app-like experiences communicating with backend APIs (RESTful or GraphQL) to fetch and display data.",
    },
    {
      icon: <img src={backend} alt="Api" className="w-[50px]" />,
      name: "Backend Development",
      description: "Building RESTful APIs with Express.js and MongoDB for storing and retrieving data.",
    },
    {
      icon: <img src={frontend} alt="responsive" className="w-[50px]" />,
      name: "UI/UX Design",
      description: "I created digital products with unique ideas use Figma, and coding web interfaces that adapt to various screen sizes and devices ",
    },
  ];
  return (
    <div className="mb-[200px]">
      <p className="font-medium border-1 rounded-full px-10 border-slate-600 w-max uppercase py-[6px] text-xs">
        Services
      </p>
      <p className="text-[55px] font-light mt-20">
        <span className="text-green-400">Skill</span> Domain
      </p>
      <div className="flex flex-col gap-10 mt-20">
        {data.map((item) => (
          <div className="w-full border-slate-400 border rounded-3xl p-10 flex flex-col gap-10">
            <p className="text-3xl text-green-400 font-bold">
            {item.name}
            </p>
            <div>
            {item.icon}
            </div>
            <p className="text-lg font-semibold text-slate-300">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
