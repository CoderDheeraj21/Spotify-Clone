import React, { useState } from "react";
import { Footer } from "./Footer";
import { HomeNav } from "./HomeNav";
import { Sidebar } from "./Sidebar";
import { Cards } from "./Cards";

export const Home = () => {
  const [selectedMenu, setSelectedMenu] = useState("All"); // Default selected menu is "All"

  const handleMenuSelect = (menuItem) => {
    setSelectedMenu(menuItem); // Updates the selected menu
  };

  // Conditionally render content based on the selected menu
  const renderContent = () => {
    if (selectedMenu === "Music") {
      return <Cards title={"Music Content"} />;
    } else if (selectedMenu === "Podcasts") {
      return <Cards title={"Podcast Content"} />;
    } else {
      return (
        <>
          <Cards title={"Recommended For You"} />
          <Cards title={"Featured Charts"} />
          <Cards title={"Shows To Try"} />
        </>
      );
    }
  };

  return (
    <div className="text-white space-y-4 lg:space-y-0 p-2 lg:grid grid-cols-8 gap-2 h-[80vh]">
      <Sidebar />
      <div className="col-span-6 bg-[#1f1f1f] rounded-md lg:overflow-y-scroll relative">
        <HomeNav onSelectMenu={handleMenuSelect} selectedMenu={selectedMenu} />
        <div className="p-7">
          {renderContent()} {/* Conditionally rendered content */}
          <Footer />
        </div>
      </div>
    </div>
  );
};
