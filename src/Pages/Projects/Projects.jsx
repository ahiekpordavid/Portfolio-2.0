import React from "react";
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import project1 from "../../assets/pro3.png";
import project3 from "../../assets/pro5.png";
import project4 from "../../assets/pr04.png";
import project5 from "../../assets/pro6.png";
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
          links: [ <VisibilityRoundedIcon key="open" />],
        },
        {
          id: 2,
          icon: <img src={project3} alt="Api"  className="h-[400px] w-full object-fit rounded-[35px]"/>,
          name: "Deka Admin",
          description: "Agriculture App",
          stack: ["React Js", "Express Js", "MongoDB"],
          links: [<VisibilityRoundedIcon key="open" />],
        },
        {
          id: 3,
          icon: <img src={project4} alt="Api"  className="h-[400px] w-full object-fit rounded-[35px]"/>,
          name: "Deka Admin",
          description: "Agriculture App",
          stack: ["React Js", "Express Js", "MongoDB"],
          links: [<VisibilityRoundedIcon key="open" />],
        },
        {
          id: 4,
          icon: <img src={project5} alt="Api"  className="h-[400px] w-full object-fit rounded-[35px]"/>,
          name: "Deka Admin",
          description: "Agriculture App",
          stack: ["React Js", "Express Js", "MongoDB"],
          links: [<VisibilityRoundedIcon key="open" />],
        },
      ];

  const handleAboutProjects = (item) => {
    navigate(`/projects/${item}`);
  };


  return (
    <div className="app-bg pl-[740px] pt-[50px] pr-[300px]">
      <div className="md:pb-[100px] pb-[50px]">
        <p className="text-[55px] font-light mt-20">
          <span className="text-green-400">All Featured</span> Projects
        </p>
        <div className="flex flex-col gap-20 mt-20">
          {data.map((item) => (
            <div
            key={item.id} 
              className="hover:underline hover:cursor-pointer hover:opacity-90"
              onClick={() => handleAboutProjects(item.id)}
            >
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
                  <div className="flex gap-7 hover:bg-slate-900 p-3 bg-slate-500 rounded-[50px] ">
                    {item?.links?.map((items) => (
                      <div > {items}</div>
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
      </div>
    </div>
  );
};

export default Projects;
