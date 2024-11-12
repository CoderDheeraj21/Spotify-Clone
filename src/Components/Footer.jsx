import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FiTwitter } from "react-icons/fi";

export const Footer = () => {
  const company = [
    {
      id: 1,
      listItem: "About",
    },
    {
      id: 2,
      listItem: "Jobs",
    },
    {
      id: 1,
      listItem: "For The Record",
    },
  ];

  const communities = [
    {
      id: 1,
      listItem: "For Artists",
    },
    {
      id: 2,
      listItem: "Developers",
    },
    {
      id: 1,
      listItem: "Advertising",
    },
    {
      id: 1,
      listItem: "Investors",
    },
    {
      id: 1,
      listItem: "Vendors",
    },
  ];

  const usefullLinks = [
    {
      id: 1,
      listItem: "Support",
    },
    {
      id: 2,
      listItem: "Free Mobile App",
    },
  ];

  const spotifyPlans = [
    {
      id: 1,
      listItem: "Premium Indvidual",
    },
    {
      id: 2,
      listItem: "Premium Duo",
    },
    {
      id: 3,
      listItem: "Premium Indvidual",
    },
    {
      id: 4,
      listItem: "Premium Family",
    },
    {
      id: 5,
      listItem: "Premium Student",
    },
    {
      id: 6,
      listItem: "Spotify Free",
    },
  ];

  return (
    <footer className="p-4 bg-[#1f1f1f]">
      {/* Footer Links Section */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10">
        {/* Company Section */}
        <div>
          <h3 className="mb-4 font-semibold">Company</h3>
          <ul>
            {company.map((item) => (
              <li key={item.id} className="mt-2">
                {item.listItem}
              </li>
            ))}
          </ul>
        </div>

        {/* Communities Section */}
        <div>
          <h3 className="mb-4 font-semibold">Communities</h3>
          <ul>
            {communities.map((item) => (
              <li key={item.id} className="mt-2">
                {item.listItem}
              </li>
            ))}
          </ul>
        </div>

        {/* Useful Links Section */}
        <div>
          <h3 className="mb-4 font-semibold">Useful Links</h3>
          <ul>
            {usefullLinks.map((item) => (
              <li key={item.id} className="mt-2">
                {item.listItem}
              </li>
            ))}
          </ul>
        </div>

        {/* Spotify Plans Section */}
        <div>
          <h3 className="mb-4 font-semibold">Spotify Plans</h3>
          <ul>
            {spotifyPlans.map((item) => (
              <li key={item.id} className="mt-2">
                {item.listItem}
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media Icons */}
        <div>
          <div className="flex justify-center md:justify-start space-x-4">
            <div className="rounded-full bg-[#2a2a2a] hover:bg-[#1a1a1a] cursor-pointer p-2 md:p-2.5 lg:p-2">
              <FaInstagram className="h-6 w-6" />
            </div>
            <div className="rounded-full bg-[#2a2a2a] hover:bg-[#1a1a1a] cursor-pointer p-2 md:p-2.5 lg:p-2">
              <FaFacebook className="h-6 w-6" />
            </div>
            <div className="rounded-full bg-[#2a2a2a] hover:bg-[#1a1a1a] cursor-pointer p-2 md:p-2.5 lg:p-2">
              <FiTwitter className="h-6 w-6" />
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="mt-10 border-[#2a2a2a]" />

      {/* Legal Section */}
      <div className="p-4 flex flex-col md:flex-row justify-center md:justify-between md:items-center">
        <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8 ">
          <li>Legal</li>
          <li>Safety & Privacy Center</li>
          <li>Privacy Policy</li>
          <li>Cookies</li>
          <li>About Ads</li>
          <li>Accessibility</li>
        </ul>
        <p className="mt-4 md:mt-0 lg:mt-0 lg:inline-block">@2024 Spotify AB</p>
      </div>
    </footer>
  );
};
