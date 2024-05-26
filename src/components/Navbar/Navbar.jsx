import React, { useEffect, useState } from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import "../../index.css";
import beachImage from "../../assets/beach.jpg";
import seawaves from "../../assets/waves.jpg";
import waterDrops from "../../assets/waterDrops.jpg";
import greens from "../../assets/greens.jpg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [backgroundImage, setBackgroundImage] = useState(greens);
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleMenuToggle = () => {
    setToggleMenu(!toggleMenu);
  };

  const handleThemeChange = (image) => {
    setBackgroundImage(image);
    setToggleMenu(false);
  };

  const themes = [
    {
      name: "Palm Trees",
      image: beachImage,
    },
    {
      name: "Sea Waves",
      image: seawaves,
    },
    {
      name: "Water Drops",
      image: waterDrops,
    },
    {
      name: "Green Leaves",
      image: greens,
    },
  ];

  useEffect(() => {
    if (backgroundImage) {
      const styleTag = document.createElement("style");
      styleTag.innerHTML = `
        body {
          background-image: url('${backgroundImage}'); 
          background-size: fit;
          background-position: center;
          background-attachment: fixed;
        }
      `;
      document.head.appendChild(styleTag);
      return () => {
        document.head.removeChild(styleTag);
      };
    }
  }, [backgroundImage]);

  return (
    <div className="flex justify-end fixed z-20 top-0 left-0 right-0 pt-10 md:px-20 px-[20px] w-screen">
      {!toggleMenu && (
        <div className="border rounded-3xl p-3">
          <MenuRoundedIcon
            onClick={handleMenuToggle}
            className="text-2xl cursor-pointer"
          />
        </div>
      )}
      {toggleMenu && (
        <div className="absolute top-0 bottom-0 right-0 w-[300px] md:sidemenu-bg pro-bg h-screen flex flex-col items-center">
          <div className="border rounded-3xl p-3 w-full mt-5 ">
            <p onClick={handleMenuToggle} className="text-xl text-center text-slate-400 font-semibold cursor-pointer">
              Hide
            </p>
          </div>
          <div className="flex flex-col items-center justify-between h-screen sm:py-24 py-12">
            <div className="flex flex-col items-center">
              <p className="md:text-xl text-md font-bold text-slate-500 mb-5">
                Menu
              </p>
              <div className="flex flex-col items-center gap-5 w-full">
                <NavLink
                  className="flex items-center gap-2 text-white no-underline"
                  onClick={handleMenuToggle}
                  to="/"
                >
                  <HomeRoundedIcon className="text-lg" /> Home
                </NavLink>
                <NavLink
                  className="flex items-center gap-2 text-white no-underline"
                  onClick={handleMenuToggle}
                  to="/projects"
                >
                  <AccountTreeIcon className="text-lg" /> All Projects
                </NavLink>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <p className="md:text-xl text-md font-bold text-slate-500 sm:mb-10 mb-5">
                Themes
              </p>
              {themes.map((theme, index) => (
                <div key={index} className="flex flex-col items-start w-full">
                  <button
                    onClick={() => handleThemeChange(theme.image)}
                    className="flex flex-col mb-5"
                  >
                    <div className="flex flex-row gap-5 items-center">
                      <img
                        src={theme.image}
                        alt={theme.name}
                        className="md:w-[50px] md:h-[50px] w-[30px] h-[30px] rounded-full"
                      />
                      <p className="md:text-md text-sm">{theme.name}</p>
                    </div>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
