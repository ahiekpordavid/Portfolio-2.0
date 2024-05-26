import React from "react";
import { useParams } from "react-router-dom";
import project1 from "../../assets/pro3.png";
import project3 from "../../assets/pro5.png";
import project4 from "../../assets/pr04.png";
import project5 from "../../assets/pro6.png";

const data = [
  {
    id: 1,
    icon: project1,
    name: "Deka Client",
    description: "Agriculture App",
    stack: ["React Js", "Express Js", "MongoDB"],
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    github: "https://github.com/user/deka-client",
    demo: "https://deka-client-demo.com",
  },
  {
    id: 2,
    icon: project3,
    name: "Deka Admin",
    description: "Admin Dashboard for Agriculture App",
    stack: ["React Js", "Express Js", "MongoDB"],
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    github: "https://github.com/user/deka-admin",
    demo: "https://deka-admin-demo.com",
  },
  {
    id: 3,
    icon: project4,
    name: "Deka Admin",
    description: "Admin Dashboard for Agriculture App",
    stack: ["React Js", "Express Js", "MongoDB"],
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    github: "https://github.com/user/deka-admin",
    demo: "https://deka-admin-demo.com",
  },
  {
    id: 4,
    icon: project5,
    name: "Deka Admin",
    description: "Admin Dashboard for Agriculture App",
    stack: ["React Js", "Express Js", "MongoDB"],
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    github: "https://github.com/user/deka-admin",
    demo: "https://deka-admin-demo.com",
  },
];

const ProjectDetails = () => {
  const { id } = useParams();
  const project = data.find((item) => item.id === parseInt(id));

  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <div className="px-[20px] sm:px-[80px] xl:pl-[740px] pt-[50px] xl:pr-[300px] app-bg">
      <div className="lg:pb-[200px] pb-[100px]">
        <p className="lg:text-[45px] text-[28px] font-light mt-20">
          <span className="text-green-400">{project.name}</span> -{" "}
          {project.description}
        </p>
        <div className="mt-10 border border-white rounded-[35px]">
          <img
            src={project.icon}
            alt={project.name}
            className="md:h-[400px] h-[250px] w-full object-fit rounded-t-[35px]"
          />
          <div className=" text-lg text-white">
            <p className="sm:p-10 p-5">{project.about}</p>
            <img
              src={project.icon}
              alt={project.name}
              className="md:h-[400px] h-[250px] w-full object-fit"
            />
            <div className="sm:p-10 p-5 flex flex-col gap-5">
              <div className="mt-5 ">
                <h2 className="text-2xl font-semibold">Technologies Used:</h2>
                <div className="flex flex-wrap gap-3 mt-3">
                  {project.stack.map((item, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-slate-500 text-white shadow-xl rounded-3xl sm:text-base text-[10px]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-5">
                <h2 className="text-2xl font-semibold">Project Links:</h2>
                <div className="flex flex-wrap gap-5 mt-3">
                  <a
                    href={project.github}
                    className="px-4 py-2 bg-blue-600 text-white rounded-3xl shadow-lg hover:bg-blue-700 transition duration-300 sm:text-base text-[10px]"
                  >
                    GitHub Repository
                  </a>
                  <a
                    href={project.demo}
                    className="px-4 py-2 bg-green-600 text-white rounded-3xl shadow-lg hover:bg-green-700 transition duration-300 sm:text-base text-[10px]"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectDetails;
