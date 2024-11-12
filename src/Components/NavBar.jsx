import React from "react";
import logo from "../assets/Images/spotify.svg";
import { FaHome } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";

export const NavBar = () => {
  return (
    <div className="flex items-center justify-between p-3 bg-[#000000] text-white">
      <img src={logo} className="w-[80px] object-cover cursor-pointer" alt="" />
      <div className="flex items-center gap-2 ml-72">
        <div className="rounded-full bg-[#1f1f1f] p-3 cursor-pointer">
          <FaHome className="text-2xl text-white"></FaHome>
        </div>
        <input type="text" placeholder="What do you want to play?" className="hidden md:block rounded-3xl p-3 w-96 bg-[#1f1f1f] text-white" />
      </div>
      <div className="hidden xl:flex items-center space-x-8">
        <button className="rounded-xl bg-slate-100 hover:bg-slate-300 px-2 py-1 text-black font-semibold">Explore Premium</button>
        <button>Install App</button>
        <IoMdNotificationsOutline className="cursor-pointer"></IoMdNotificationsOutline>
        <div className="cursor-pointer flex rounded-full p-3 bg-[#1f1f1f] text-white w-10 h-10 items-center justify-center">D</div>
      </div>
    </div>
  );
};
