import React from "react";
import { IoReorderThreeOutline } from "react-icons/io5";
import { FiPlus } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa6";

export const Sidebar = () => {
  return (
    <div className="col-span-2 bg-[#1f1f1f] p-4 rounded-md">
      <div className="flex items-center justify-between">
        <div className="text-xl">
          <IoReorderThreeOutline className="text-3xl cursor-pointer inline" />{" "}
          Your Library
        </div>
        <div className="flex gap-4 text-2xl">
          <FiPlus className="cursor-pointer" />
          <FaArrowRight className="cursor-pointer" />
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-8">
        <div className="space-y-4 bg-[#2a2a2a] p-4 rounded-lg">
          <div>
            <p className="font-bold">Create Your Playlist</p>
            <p>It's easy, we will help you</p>
          </div>
          <button className="rounded-xl bg-slate-100 hover:bg-slate-300 px-2 py-1 text-black font-semibold">
            Create Playlist
          </button>
        </div>
        <div className="space-y-4 bg-[#2a2a2a] p-4 rounded-lg">
          <div>
            <p className="font-bold">Let's Find Some Podcast To Follow</p>
            <p>We will kep you updated on new episodes</p>
          </div>
          <button className="rounded-xl bg-slate-100 hover:bg-slate-300 px-2 py-1 text-black font-semibold">
            Browse Podcasts
          </button>
        </div>
      </div>
    </div>
  );
};
