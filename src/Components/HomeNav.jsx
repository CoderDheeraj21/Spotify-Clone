import React from "react";

export const HomeNav = ({ onSelectMenu, selectedMenu }) => {
  const homeMenu = [
    {
      id: 1,
      item: "All",
    },
    {
      id: 2,
      item: "Music",
    },
    {
      id: 3,
      item: "Podcasts",
    },
  ];

  return (
    <nav id="navbar" className="sticky top-0 z-10 bg-[#2a2a2a] p-4">
      <ul className="flex gap-4">
        {homeMenu.map((element) => (
          <div
            key={element.id}
            className={`rounded-full px-2 py-1 cursor-pointer ${
              selectedMenu === element.item ? "bg-[#444444]" : "hover:bg-[#444444]"
            }`}
            onClick={() => onSelectMenu(element.item)}
          >
            <li>{element.item}</li>
          </div>
        ))}
      </ul>
    </nav>
  );
};
