import React from "react";
import image1 from "../assets/Images/Image1.jpeg";

export const Cards = ({ title }) => {
  const musicContent = [
    {
      id: 1,
      image: image1,
      text: "Lorem ipsum dolor sit amet.",
    },
    {
      id: 2,
      image: image1,
      text: "Lorem ipsum dolor sit amet.",
    },
    {
      id: 3,
      image: image1,
      text: "Lorem ipsum dolor sit amet.",
    },
    {
      id: 4,
      image: image1,
      text: "Lorem ipsum dolor sit amet.",
    },
    {
      id: 5,
      image: image1,
      text: "Lorem ipsum dolor sit amet.",
    },
    {
      id: 6,
      image: image1,
      text: "Lorem ipsum dolor sit amet.",
    },
  ];

  return (
    <div>
      <h2 className="font-bold text-2xl mt-8">{title}</h2>

      {/* Horizontal Scroll Container with Hidden Scrollbar */}
      <div className="mt-4 flex gap-4 overflow-x-auto scroll-smooth hide-scrollbar">
        {musicContent.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-40 space-y-2 hover:bg-[#2a2a2a] hover:rounded-lg p-4"
          >
            <div className="rounded-lg w-full">
              <img
                src={item.image}
                className="object-cover rounded-lg w-full h-36"
              />
            </div>
            <p className="line-clamp-1">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
