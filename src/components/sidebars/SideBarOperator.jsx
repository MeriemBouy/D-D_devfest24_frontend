import React, { useState } from "react";
import dashboard from "../../assets/sidebar/nonActive/dashboard.svg";
import profileIcon from "../../assets/sidebar/nonActive/profileIcon.svg";
import tasks from "../../assets/sidebar/nonActive/tasks.svg";
import alerts from "../../assets/sidebar/nonActive/alerts.svg";

const SideBarOperator = () => {
    const [open, setOpen] = useState(true);
    const Menus = [
        { title: "Dashboard", src: dashboard },
        { title: "Profile", src: profileIcon},
        { title: "My tasks", src: tasks},
        { title: "Alerts", src: alerts},
        ];
        return (
            <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <div className="bg-[#1E1E1E] hidden md:flex md:flex-col w-64 border-r md:rounded-r-3xl">
        <div className="flex flex-col py-5 ">
          <div className="space-y-4">
            {Menus.map((menu, index) => (
              <a key={index} href="#" className="flex items-center space-x-4 py-4 px-4 text-gray-900 rounded-r-xl transition-all duration-200 hover:bg-[#7AA50D]">
                <img src={menu.src} alt={menu.title} className="w-6 h-6" />
                <span className=" text-white text-sm">{menu.title}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <div className="flex justify-between p-4 bg-white border-b border-gray-200">
          <span className="font-bold">Menu</span>
          <button className="text-gray-900">
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        <div className="space-y-4 p-4 bg-white">
          {Menus.map((menu, index) => (
            <a key={index} href="#" className="flex items-center space-x-4 py-2.5 px-4 text-gray-900 rounded-lg transition-all duration-200 hover:bg-gray-200">
              <img src={menu.src} alt={menu.title} className="w-6 h-6" />
              <span className="font-medium text-sm">{menu.title}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBarOperator;