import React from "react";
import { IoPlaySkipForwardSharp } from "react-icons/io5";
import { IoPlaySkipBack } from "react-icons/io5";
import { IoPauseSharp } from "react-icons/io5";
import { FaShuffle } from "react-icons/fa6";
import { MdReplay } from "react-icons/md";

export const BottomPlayer = () => {
  return (
    <div className="text-white p-2 lg:flex flex-col justify-center items-center hidden">
      <div className="flex space-x-6 text-xl">
        <FaShuffle className="cursor-pointer" />
        <IoPlaySkipBack className="cursor-pointer" />
        <IoPauseSharp className="cursor-pointer"></IoPauseSharp>
        <IoPlaySkipForwardSharp className="cursor-pointer" />
        <MdReplay className="cursor-pointer" />
      </div>
      <div className="w-[50%] mt-4 cursor-pointer">
        <div className="relative h-1 bg-gray-500 rounded">
          {/* Progress Indicator */}
          <div
            className="absolute h-1 bg-blue-500 rounded"
            style={{ width: "50%" }} // Change the width to reflect the current progress (0% to 100%)
          ></div>
        </div>
      </div>
    </div>
  );
};
