import React, { useState } from "react";
import dashboard from "../../assets/sidebar/dashboard.svg";
import profileIcon from "../../assets/sidebar/profileIcon.svg";
import tasks from "../../assets/sidebar/tasks.svg";
import alerts from "../../assets/sidebar/alerts.svg";

const SideBarOperator = () => {
    const [open, setOpen] = useState(true);
    const Menus = [
        { title: "Dashboard", src: dashboard },
        { title: "Profile", src: profileIcon},
        { title: "My tasks", src: tasks},
        { title: "Alerts", src: alerts},
        ];

    return (
                <div className="flex h-screen">
                  {/* Sidebar */}
                  <div
                    className={`${
                      open ? "w-64" : "w-20"
                    } bg-[#1E1E1E] md:flex md:flex-col border-r rounded-r-3xl transition-all duration-300 ease-in-out`}
                  >
                    {/* Toggle button */}
                    <div className="flex justify-end p-4">
                      <button
                        className="text-white"
                        onClick={() => setOpen(!open)}
                      >
                        {open ? (
                          <svg
                            className="w-6 h-6 "
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        ) : (
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M15 19l-7-7 7-7"
                            />
                          </svg>
                        )}
                      </button>
                    </div>
            
                    {/* Menu items */}
                    <div className="flex flex-col py-5 space-y-4">
                      {Menus.map((menu, index) => (
                        <a
                          key={index}
                          href="#"
                          className={`flex items-center space-x-4 py-4 px-4 rounded-r-xl transition-all duration-200 hover:bg-[#7AA50D] ${
                            open ? "justify-start" : "justify-center"
                          }`}
                        >
                          <img src={menu.src} alt={menu.title} className="w-6 h-6" />
                          <span
                            className={`${
                              !open && "hidden"
                            } text-white font-medium text-sm`}
                          >
                            {menu.title}
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
    );
};

export default SideBarOperator;