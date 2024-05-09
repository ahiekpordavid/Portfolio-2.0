import React, { useEffect, useState } from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import "../../index.css";
import beachImage from "../../assets/beach.jpg"
import seawaves from "../../assets/pro1.jpg"
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [backgroundImage, setBackgroundImage] = useState(beachImage);
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleMenuToggle = () => {
    setToggleMenu(!toggleMenu);
  };

  const themes = [
    {
      name: "Palm Trees",
      image: beachImage
    },
    {
      name: "Sea Waves",
      image: seawaves
    }
  ];

  useEffect(() => {
    if (backgroundImage) {
      const styleTag = document.createElement("style");
      styleTag.innerHTML = `body { 
        background-image: url('${backgroundImage}'); 
        background-attachment: fixed;
      }`;
      document.head.appendChild(styleTag);
    }
  }, [backgroundImage]);

  return (
    <div className="flex justify-end fixed z-20 top-0 left-0 right-0 pt-10 px-20">
      {!toggleMenu && (
        <div className="border rounded-3xl p-3">
          <MenuRoundedIcon
            onClick={handleMenuToggle}
            sx={{ fontSize: 25, cursor: "pointer" }}
          />
        </div>
      )}
      {toggleMenu && (
        <div className="absolute top-0 bottom-0 right-0 w-[300px] sidemenu-bg h-screen flex flex-col items-center py-24 justify-between">
          <div  className="flex flex-col items-center">
            <p className="text-xl font-bold text-slate-500 mb-10">Menu</p>
            <NavLink
              sx={{
                fontSize: 15,
                cursor: "pointer",
                color: "white",
                textDecoration: "none",
              }}
              onClick={handleMenuToggle}
              to="/"
            >
              <HomeRoundedIcon sx={{ fontSize: 20 }} /> Home
            </NavLink>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-xl font-bold text-slate-500 mb-10 ">Themes</p>
            {themes.map((theme, index) => (
              <button key={index} onClick={() => setBackgroundImage(theme.image)}  className="flex flex-col mb-5">
                <div className="flex flex-row gap-5 items-center">
                  <img src={theme.image} alt="themeImage" className="w-[50px] h-[50px] rounded-full"/>
                  <p>{theme.name}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
