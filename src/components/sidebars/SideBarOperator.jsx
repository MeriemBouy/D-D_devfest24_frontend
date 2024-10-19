import React, { useState } from "react";
import { Link } from "react-router-dom";
import dashboard from "../../assets/icons/IconSet.svg";
import tasks from "../../assets/icons/Vector.svg";
import userProfile from "../../assets/icons/profile.svg";

const SideBarOperator = () => {
    const [open, setOpen] = useState(true);

    const Menus = [
        { 
            title: "Dashboard", 
            src: dashboard, 
            route: "/dashboard", 
            subMenus: [
                { 
                    title: "Overview", 
                    route: "/dashboard", 
                    icon: "https://img.icons8.com/ios-filled/50/000000/overview-pages-3.png" 
                },
                { 
                    title: "Real Time Monitoring", 
                    route: "/dashboard/real-time-monitoring", 
                    icon: "https://img.icons8.com/?size=100&id=116177&format=png&color=000000" 
                },
                { 
                    title: "Production Tracking", 
                    route: "/dashboard/production-tracking", 
                    icon: "https://img.icons8.com/?size=100&id=9321&format=png&color=000000" 
                },
                { 
                    title: "Energy Tracking", 
                    route: "/dashboard/energy-tracking", 
                    icon: "https://img.icons8.com/ios-filled/50/000000/lightning-bolt.png" 
                },
            ]
        },
        { 
            title: "My tasks", 
            src: tasks, 
            route: "/tasks", 
            subMenus: [
                { 
                    title: "Pending tasks", 
                    route: "/tasks/overview", 
                    icon: "https://img.icons8.com/ios-filled/50/000000/todo-list.png" 
                },
                { 
                    title: "Left tasks", 
                    route: "/tasks/details", 
                    icon: "https://img.icons8.com/ios-filled/50/000000/task.png" 
                },
                { 
                    title: "Completed tasks", 
                    route: "/tasks/statistics", 
                    icon: "https://img.icons8.com/ios-filled/50/000000/checkmark.png" 
                },
            ]
        },
        { 
            title: "Alerts", 
            src: "https://img.icons8.com/?size=100&id=eU9GyFgjeLXy&format=png&color=000000", 
            route: "/alerts", 
            subMenus: [] // No submenus for Alerts
        },
    ];

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <div
                className={`${
                    open ? "w-64" : "w-20"
                } bg-white md:flex md:flex-col border-r rounded-r-3xl transition-all duration-300 ease-in-out`}
            >
                {/* Profile on top with toggle button */}
                <div className="flex justify-between items-center p-4">
                    <Link to="/profile" className="flex items-center space-x-3">
                        <img src={userProfile} alt="Profile" className="w-8 h-8 rounded-full" />
                        {open && <span className="text-black font-medium">My Profile</span>}
                    </Link>

                    {/* Toggle button right next to profile */}
                    <button
                        className="text-black" // Change button text color
                        onClick={() => setOpen(!open)}
                    >
                        {open ? (
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
                <div className="flex flex-col py-5 space-y-4 flex-grow">
                    {Menus.map((menu, index) => (
                        <div key={index}>
                            <div
                                className={`flex items-center space-x-4 py-4 px-4 rounded-r-xl transition-all duration-200 cursor-pointer hover:bg-[#B8FF01] ${open ? "justify-start" : "justify-center"}`}
                            >
                                <img src={menu.src} alt={menu.title} className="w-6 h-6" />
                                <span
                                    className={`text-black font-medium text-sm ${!open && "hidden"}`}
                                >
                                    {menu.title}
                                </span>
                            </div>

                            {/* Always display submenus when open */}
                            {menu.subMenus.length > 0 && open && (
                                <div className="pl-10"> {/* Indentation for submenus */}
                                    {menu.subMenus.map((subMenu, subIndex) => (
                                        <Link
                                            key={subIndex}
                                            to={subMenu.route}
                                            className="flex items-center py-2 text-black text-sm rounded-2xl hover:bg-[#dbff81] transition-all duration-200"
                                        >
                                            <img src={subMenu.icon} alt={subMenu.title} className="w-4 h-4 mr-2" /> {/* Icon for submenu */}
                                            {subMenu.title}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Deconnexion button, styled like other menus and pushed to the bottom */}
                <div className="mt-auto">
                    <div
                        className={`flex items-center space-x-4 py-4 px-4 rounded-r-xl transition-all duration-200 cursor-pointer hover:bg-[#B8FF01] ${open ? "justify-start" : "justify-center"}`}
                    >
                        <img src="https://img.icons8.com/material-rounded/24/000000/logout-rounded.png" alt="Deconnexion" className="w-6 h-6" />
                        <span className={`text-black font-medium text-sm ${!open && "hidden"}`}>
                            Deconnexion
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideBarOperator;
