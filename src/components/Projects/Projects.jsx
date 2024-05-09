import React from "react";
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import project1 from "../../assets/pro3.png";
import project3 from "../../assets/pro5.png";
import { useNavigate } from "react-router-dom";

const Projects = () => {
    const navigate = useNavigate();
  const data = [
    {
      id: 1,
      icon: <img src={project1} alt="code"  className="h-[400px] w-full object-fit rounded-[35px]"/>,
      name: "Deka Client",
      description: "Agriculture App",
      stack: ["React Js", "Express Js", "MongoDB"],
      links: [<VisibilityRoundedIcon key="view" />],
    },
    {
      id: 2,
      icon: <img src={project3} alt="Api"  className="h-[400px] w-full object-fit rounded-[35px]"/>,
      name: "Deka Admin",
      description: "Agriculture App",
      stack: ["React Js", "Express Js", "MongoDB"],
      links: [<VisibilityRoundedIcon key="open" />],
    },
  ];
  const handleProjects = () => {
    navigate("/projects");
  };
  const handleAboutProjects = (item) => {
    navigate(`/projects/${item}`);
  };
  return (
    <div className="pb-[200px]">
      <p className="font-medium border-1 rounded-full px-10 border-slate-600 w-max uppercase py-[6px] text-xs">
        Projects
      </p>
      <p className="text-[55px] font-light mt-20">
        <span className="text-green-400">Featured</span> Projects
      </p>
      <div className="flex flex-col gap-20 mt-20">
        {data.map((item) => (
          <div className="hover:underline hover:cursor-pointer hover:opacity-90" onClick={() => handleAboutProjects(item.id)}>
            <div className="w-full rounded-[50px] relative">
              {item.icon}
              <div className="absolute bottom-7 left-7  rounded-[50px] flex flex-row justify-between">
                <div className="flex gap-5">
                  {item.stack.map((items) => (
                    <p className="px-4 py-2 hover:bg-slate-900 text-white bg-slate-500 shadow-xl  rounded-3xl text-md">
                      {items}
                    </p>
                  ))}
                </div>
              </div>
              <div className="absolute top-7  right-7 rounded-[50px] flex flex-row justify-between">
                <div className="flex gap-7 hover:bg-slate-900 p-3 bg-slate-500 rounded-[50px]">
                  {item?.links?.map((items) => (
                    <div> {items}</div>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-xl font-normal mt-5 ">
              {item.name} -
              <span className="text-slate-300">{item.description}</span>
            </p>
          </div>
        ))}
      </div>
      <p className="text-3xl text-slate-400 text-center mt-10 underline font-black cursor-pointer hover:text-white" onClick={handleProjects}>More Projects</p>
    </div>
  );
};

export default Projects;
