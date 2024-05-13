import React from "react";
import logo from "../../assets/logo.png";
import me from "../../assets/me.png";
import { Button } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";

const Profile = () => {
  return (
    <div className="flex xl:fixed xl:z-20 xl:top-0 xl:left-0 xl:bottom-0 py-10 xl:px-20  xl:w-[550px] items-center">
      <div className="border-slate-500 border rounded-3xl w-[100%] xl:w-[400px] p-10 flex flex-col items-center">
        <div className="flex flex-row items-center gap-10">
          <img
            src={logo}
            alt="Logo"
            className="w-[60px] xl:w-[80px] sm:w-[110px] object-contain"
          />
          <p className="font-bold">MERN Stack Developer</p>
        </div>
        <img src={me} alt="" className="rounded-3xl my-10" />
        <div className="flex flex-col items-center">
          <p className="text-2xl font-bold">David Kwashie Ahiekpor</p>
          <p className="text-xl">Based in Ghana</p>
        </div>
        <div className="flex gap-5 my-10 justify-between flex-row border py-2 px-10 w-[250px] rounded-3xl border-slate-400">
          <EmailIcon
            sx={{ cursor: "pointer", fontSize: 25 }}
            className="hover:text-blue-400 text-slate-400"
          />
          <CallIcon
            sx={{ cursor: "pointer", fontSize: 25 }}
            className="hover:text-white text-slate-400"
          />
          <WhatsAppIcon
            sx={{ cursor: "pointer", fontSize: 25 }}
            className="hover:text-green-500 text-slate-400"
          />
          <InstagramIcon
            sx={{ cursor: "pointer", fontSize: 25 }}
            className="hover:text-red-400 text-slate-400"
          />
        </div>
        <Button
          variant="contained"
          sx={{
            background: "green",
            "&:hover": {
              backgroundColor: "green",
            },
            borderRadius:"50px"
          }}
          className="w-[250px] h-12 text-md font-bold"
        >
          Hire Me!
        </Button>
      </div>
    </div>
  );
};

export default Profile;
