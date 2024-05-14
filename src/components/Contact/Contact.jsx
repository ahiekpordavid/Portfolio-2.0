import React from "react";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import { Button } from "@mui/material";

const Contact = () => {
  return (
    <div className="px-[20px] sm:px-[80px]  xl:pl-[740px] pt-[50px] xl:pr-[300px] app-bg">
      <div className="lg:pb-[200px] pb-[100px]">
        <p className="font-medium border-1 rounded-full px-10 border-slate-600 w-max uppercase py-[6px] text-xs">
          Contact
        </p>
        <p className="text-[55px] font-light mt-20">
          Reach Me<span className="text-green-400"> Here!</span>
        </p>
        <div className="flex flex-row gap-2 items-center mt-10">
          <AlternateEmailOutlinedIcon />
          <a href="mailto:ahiekpordavid@gmail.com" className="text-xl">
            ahiekpordavid@gmail.com
          </a>
        </div>
        <div className="flex flex-row gap-2 items-center mt-5">
          <CallOutlinedIcon />
          <a href="tel:+233203465176" className="text-xl">
            +233 20-346-5176
          </a>
        </div>
        <div className="w-full h-[0.5px] bg-white mt-10"></div>
        <div className="mt-10 flex flex-col gap-16">
          <div className="flex lg:flex-row flex-col lg:gap-5 gap-16">
            <div className="flex flex-col flex-1">
              <label for="name" className="uppercase text-sm">
                Name
              </label>
              <input
                type="name"
                id="name"
                name="name"
                className="h-10 bg-transparent text-lg outline-none mt-1"
                placeholder="Your Full Name"
                required
              />
            </div>
            <div className="flex flex-col flex-1">
              <label for="email" className="uppercase text-sm">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="h-10 bg-transparent text-lg outline-none mt-1"
                placeholder="Your Email"
                required
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label for="phone" className="uppercase text-sm">
              Phone Number
            </label>
            <input
              type="number"
              id="phone"
              name="phone"
              className="h-10 bg-transparent text-lg outline-none mt-1"
              placeholder="Your Phone Number"
              required
            />
          </div>
          <div className="flex flex-col">
            <label for="message" className="uppercase text-sm">
              Message
            </label>
            <textarea
              type="textarea"
              id="message"
              name="message"
              className="h-10 bg-transparent text-lg outline-none mt-1"
              placeholder="Your Message"
              required
            />
          </div>
          <div>
            <Button
              variant="contained"
              sx={{
                background: "green",
                "&:hover": {
                  backgroundColor: "green",
                },
                borderRadius: "50px",
              }}
              className="w-[250px] h-12 text-md font-bold"
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
